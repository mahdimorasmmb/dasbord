import { Request, Response } from "express";
import { Document, SortOrder } from "mongoose";
import Product from "../models/Product";
import ProductStat from "../models/ProductStat";
import Transaction from "../models/TransactionSchema";
import User from "../models/User";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.findOne({ productId: product._id });

        return {
          ...product.toObject(),
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const cutomers = await User.find({ role: "user" }).select("-password");

    res.status(200).json(cutomers);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransaction = async (req: Request, res: Response) => {
  try {
    // const { page = 1, pageSize = 20, sort, search  } = req.query;
    const page: string = (req.query.page as string) || "1";
    console.log("🚀 ~ file: client.ts:43 ~ getTransaction ~ page:", page)
    const pageSize: string = (req.query.pageSize as string) || "20";
    console.log("🚀 ~ file: client.ts:45 ~ getTransaction ~ pageSize:", pageSize)
    const sort: string = req.query.sort as string;
    console.log("🚀 ~ file: client.ts:47 ~ getTransaction ~ sort:", sort)
    const search: string = req.query.search as string;
    console.log("🚀 ~ file: client.ts:49 ~ getTransaction ~ search:", search)
    

    const generatSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted: { [x: string]: SortOrder } = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };
      return sortFormatted;
    };

    const sortFormated = Boolean(sort) ? generatSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search) } },
      ],
    })
      .sort(sortFormated)
      .skip(+page * +pageSize)
      .limit(+pageSize);
    console.log("🚀 ~ file: client.ts:71 ~ getTransaction ~ transactions:", transactions.length)

    const total = await Transaction.countDocuments({
      name: {
        $regex: search,
        $options: "i",
      },
    });
  

    res.status(200).json({
      transactions,
      total
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
