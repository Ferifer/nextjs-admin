import { User, Product } from "./models";

export const fetchUsers = async () => {
  try {
    const users = await User.find().maxTimeMS(99000);
    console.log(users);
    return users;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
};

// Add other MongoDB operations as needed
