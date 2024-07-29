// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import configDB from "@/libs/config/db";


 configDB()


export default function handler(req, res) {
  console.log(req);
  res.status(200).json({ name: "John Doe" });
}
