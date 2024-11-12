import  { useState } from "react";
import {Link} from 'react-router-dom'
import Input from "../../form/input";
import styles from './Register.module.css'

const Register = () => {
  const [user, setUser] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user)
  }
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
    
  };

 
  
 return (
  <section className={styles.section}>
    <div className={styles.register}>
    <h1>Crie sua conta!</h1>
    <form onSubmit={handleSubmit}>
    <Input
    name='name'
    text='Nome'
    type='text'
    placeholder='Nome'
    Onchange={handleChange}
    />
    <Input
    name='phone'
    text='Telefone'
    type='text'
    placeholder='Telefone'
    Onchange={handleChange}
    />
    <Input
    name='email'
    text='E-mail'
    type='email'
    placeholder='E-mail'
    Onchange={handleChange}
    />
    <Input
    name='password'
    text='Senha'
    type='password'
    placeholder='Senha'
    Onchange={handleChange}
    />
    <Input
    name='confirmpassword'
    text='Confirmação de Senha'
    type='password'
    placeholder='Confirme sua Senha'
    Onchange={handleChange}
    />
    <input type="submit" value="Cadastrar" />
    
 </form>
 <div className={styles.link} >
             <Link to="/" > Ja possui conta?</Link>
          </div>
     </div>
</section>
)
};

export default Register;
