import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (query, page) => {
  const regEx = new RegExp(query, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regEx } }).count();
    const users = await User.find({ username: { $regex: regEx } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async (query, page) => {
  const regEx = new RegExp(query, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regEx } }).count();
    const products = await Product.find({ title: { $regex: regEx } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
