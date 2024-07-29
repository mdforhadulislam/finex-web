const dotenv = require("dotenv")
dotenv.config("../../../")
const mongoose = require("mongoose")

const configDB=()=>{
    const username = process.env.USERNAME
    const password = process.env.PASSWORD
    
    // database url
    let url
    if(process.env.ENVI=="DEV"){ url =`mongodb+srv://mdforhadul44:ekFxmiH72E47vAVH@finex.bpgbkzb.mongodb.net/?retryWrites=true&w=majority&appName=finex`
    }else{
      url = `mongodb+srv://mdforhadul44:${password}@cluster0.g9hqkae.mongodb.net/`
    }
    
    mongoose
      .connect(url)
      .then((response) => {
        if(process.env.ENVI=="DEV")console.log(`database connections test database`);
        console.log(`database connections successfull`);
      })
      .catch((error) => {
        console.log(`database not connections`);
      });
}

export default configDB