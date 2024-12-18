const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//helpers
const createUserToken = require("../helpers/create-user-token");
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, phone, password, confirmpassword } = req.body;

    //validações
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!phone) {
      res.status(422).json({ message: "O telefone é obrigatorio" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "O email é obrigatorio" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatoria" });
      return;
    }
    if (!confirmpassword) {
      res.status(422).json({ message: "A confirmação da senha é obrigatoria" });
      return;
    }
    if (password !== confirmpassword) {
      res.status(422).json({ message: "As senhas deve ser iguais!" });
      return;
    }

    // validar se o email ja está sendo utilizado
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(422).json({
        message: "Ja existe conta cadastrada para esse e-mail!",
      });
      return;
    }

    // create a password
    const salt = await bcrypt.genSalt(12);
    const passwordhash = await bcrypt.hash(password, salt);

    //create user
    const user = new User({
      name,
      email,
      phone,
      password: passwordhash,
    });

    try {
      const newUser = await user.save();

      await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: "O E-mail é obrigatorio" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatoria" });
      return;
    }

    //check se o usuario existe
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(422).json({ message: "Usuario não cadastrado" });
      return;
    }

    //check da senha do usuario
    const checkpassword = await bcrypt.compare(password, user.password);

    if (!checkpassword) {
      res.status(422).json({ message: "Senha invalida!" });
      return;
    }

    //longin do usuario com sucesso

    try {
      await createUserToken(user, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async checkUser(req, res) {
    let currentUser;

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, "Nossosecret");

      currentUser = await User.findById(decoded.id);

      currentUser.password = undefined;
    } else {
      currentUser = null;
    }

    res.status(200).send(currentUser);
  }

  static async getUserById(req, res) {
    const id = req.params.id;

    const user = await User.findById(id).select("-password");

    if (!user) {
      res.status(422).json({ message: "Usuario não encontrado" });
      return;
    }

    res.status(200).json({ user });
  }

  static async editUser(req, res) {
    const id = req.params.id;

    //check user exists
    const token = getToken(req);
    const user = await getUserByToken(token);

    const { name, email, phone, password, confirmpassword } = req.body;

    //validações
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    user.name = name;
    if (!email) {
      res.status(422).json({ message: "O email é obrigatorio" });
      return;
    }
    const chekemail = await User.findOne({ email: email });

    if (user.email !== email && chekemail) {
      res.status(422).json({
        message: "Por favor, utilize outro email",
      });
      return;
    }
    user.email = email;

    if (!phone) {
      res.status(422).json({ message: "O telefone é obrigatorio" });
      return;
    }
    user.phone = phone;

    if (password !== confirmpassword) {
      res.status(422).json({ message: "As senhas deve ser iguais!" });
      return;
    } else if (password === confirmpassword && password != null) {
      //creating password
      const salt = await bcrypt.genSalt(12);
      const passwordhash = await bcrypt.hash(password, salt);

      user.password = passwordhash;
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true }
      );

      res.status(200).json({
        message: "Usuario atualizado com sucesso!",
      });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
