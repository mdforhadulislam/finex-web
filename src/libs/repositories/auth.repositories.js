import { convartHash } from "../common/hash";
import stringGenarator from "../common/stringGenarator";
import Token from "../models/Token.Model";

const UserModel = require("../models/User.Model");

export const createUser = async (name, email, phone, password, role) => {
  const newUserData = new UserModel({
    name,
    email,
    phone,
    password:convartHash(password),
    role,
  });
  const createNewUser = await newUserData.save();

  return createNewUser;
};



export const findUser = async (data)=>{
    const filterUser = await UserModel.findOne(data)
    return filterUser
} 



export const createToken = async (id) => {
    const newToken = new Token({
        id,
        token: stringGenarator(),
    });
    const token = await newToken.save();

    return token
}
