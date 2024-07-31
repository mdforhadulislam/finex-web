const dotenv = require("dotenv")
dotenv.config("../../../")
const mongoose = require("mongoose")

const configDB=()=>{
    const username = process.env.USERNAME
    const password = process.env.PASSWORD
    
    // database url
    let url = `mongodb+srv://mdforhadul44:${password}@cluster0.g9hqkae.mongodb.net/`
    
    mongoose
      .connect(url)
      .then((response) => {
        console.log(`database connections successfull`);
      })
      .catch((error) => {
        console.log(`database not connections`);
      });
}

export default configDB