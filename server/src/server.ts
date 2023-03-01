import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client";
import genralRoutes from "./routes/general";
import managmentRoutes from "./routes/management";
import salesRoutes from "./routes/sales";


import User from "./models/User";
import { dataUser,dataProduct,dataProductStat, dataTransaction } from "./data";
import Product from "./models/Product";
import ProductStat from "./models/ProductStat";
import Transaction from "./models/TransactionSchema";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/general", genralRoutes);
app.use("/management", managmentRoutes);
app.use("/sales", salesRoutes);



const PORT = process.env.PORT || 9000;

mongoose.set('strictQuery',true)

mongoose
  .connect(process.env.MONGO_URL as string,{} )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)

    // Product.create({category:"mmb",description:"sdfdfdsfsdf",name:"sdfsdfdsf",price:2,rating:"sadasdsa",supply:100
    // })
    // Transaction.insertMany(dataTransaction)
  })
  .catch((error) => console.log(`${error}did not conect`));
