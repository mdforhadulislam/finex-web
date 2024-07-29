import { compareHash } from "@/libs/common/hash";
import response from "@/libs/common/response";
import { createToken, findUser } from "@/libs/repositories/auth.repositories";

const { default: configDB } = require("@/libs/config/db");
configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const password = req.body.password ? req.body.password : false;
    const phone = req.body.phone ? req.body.phone : false;

    if(phone && password){
        const userFindByPhone = await findUser({phone:phone})
        if(userFindByPhone){
            if(compareHash(password,userFindByPhone.password)){

                const token= await createToken(userFindByPhone._id)

                const user = {
                    name: userFindByPhone.name,
                    phone: userFindByPhone.phone,
                    email: userFindByPhone.email,
                    role: userFindByPhone.role,
                  };
                  
            response(res,400,"login successfull",{
                token:token.token,
                user
            })

            }else{
                
            response(res,400,"Incorrect password",[])
            }



        }else{

            response(res,400,"Phone number is not valid",[])
        }
    }else{
        
    response(res,400,"plz! provied phone number and password",[])
    }

  } else if (req.method == "GET") {
    response(res,400,"Only open for post request",[])
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res,400,"Only open for post request",[])
  } else if (req.method == "DELETE") {
    response(res,400,"Only open for post request",[])
  }else{
    response(res,400,"Only open for post request",[])
  }
}
