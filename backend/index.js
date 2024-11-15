const express = require("express");
const cors = require("cors");

const app = express();

// Config json reponse
app.use(express.json());

//Solve cors

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Public folder for images
app.use(express.static("public"));

//Import de Routes
const UserRoutes = require("./routes/UserRoutes");
const ItensRouter = require("./routes/ItensRoutes");
const SaleRouter = require("./routes/SaleRoutes")

//Routes
app.use("/users", UserRoutes);
app.use("/itens", ItensRouter);
app.use("/sales", SaleRouter)

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Rodando");
});
