"use server";


import { connect } from "../mongodb/database";
import User from "../mongodb/database/models/user.model";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}