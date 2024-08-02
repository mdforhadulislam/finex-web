import response from "@/libs/common/response";
import trackingGenarator from "@/libs/common/trackingGenarator";
import configDB from "@/libs/config/db";
import Order from "@/libs/models/Order.Model";
import Price from "@/libs/models/Price.Model";
import User from "@/libs/models/User.Model";
import {
  createOrder,
  createTracking,
} from "@/libs/repositories/order.repositories";

configDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const parcelFromAndToId = req.body.parcelFromAndToId ?? false;

    const customarPhone = req.body.customarPhone ?? false;
    const creatorPhone = req.body.creatorPhone ?? false;
    const parcel = req.body.parcel ?? false;
    const percelWeight = req.body.weight ?? false;
    const serviceType = req.body.serviceType ?? false;
    const itemType = req.body.itemType  ?? false;
    const orderDate = req.body.orderDate ?? new Date();
    const payment = {pType:"",pAmount:0,pExtraCharge:0,pDiscount:0,pRecived:0};

    const box = req.body.box ?? false;
    
    if (
      customarPhone &&
      creatorPhone &&
      parcel &&
      serviceType &&
      percelWeight &&
      box
    ) {
      const findCustomer = await User.findOne({ phone: customarPhone });
      if (findCustomer) {
        const findPrice = await Price.findOne({
          _id: parcelFromAndToId,
        });
        if (findPrice) {
          let price;
          let giftedParcentis = 0;
          let weight = Number(percelWeight.split(" ")[0]);
          let weightType = percelWeight.split(" ")[1];

          if (serviceType == "dhl") {
            if (weightType == "KG" || weightType == "kg") {
              if (weight >= 6 && 10 >= weight) {
                price = weight * findPrice.dhl.kg6to10;
              } else if (weight >= 11 && 15 >= weight) {
                price = weight * findPrice.dhl.kg11to15;
              } else if (weight >= 15 && 20 >= weight) {
                price = weight * findPrice.dhl.kg16to20;
              } else if (weight >= 21 && 25 >= weight) {
                price = weight * findPrice.dhl.kg21to25;
              } else if (weight >= 26 && 30 >= weight) {
                price = weight * findPrice.dhl.kg26to30;
              } else if (weight >= 31 && 40 >= weight) {
                price = weight * findPrice.dhl.kg31to40;
              } else if (weight >= 41 && 50 >= weight) {
                price = weight * findPrice.dhl.kg41to50;
              } else if (weight >= 51 && 80 >= weight) {
                price = weight * findPrice.dhl.kg51to80;
              } else if (weight >= 81 && 100 >= weight) {
                price = weight * findPrice.dhl.kg81to100;
              } else if (weight >= 101 && 500 >= weight) {
                price = weight * findPrice.dhl.kg101to500;
              } else if (weight >= 501 && 1000 >= weight) {
                price = weight * findPrice.dhl.kg501to1000;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else if (weightType == "GM" || weightType == "gm") {
              if (weight <= 500) {
                price = findPrice.dhl.gm500;
              } else if (weight >= 501 && weight <= 1000) {
                price = findPrice.dhl.gm1000;
              } else if (weight >= 1001 && weight <= 1500) {
                price = findPrice.dhl.gm1500;
              } else if (weight >= 1501 && weight <= 2000) {
                price = findPrice.dhl.gm2000;
              } else if (weight >= 2001 && weight <= 2500) {
                price = findPrice.dhl.gm2500;
              } else if (weight >= 2501 && weight <= 3000) {
                price = findPrice.dhl.gm3000;
              } else if (weight >= 3001 && weight <= 3500) {
                price = findPrice.dhl.gm3500;
              } else if (weight >= 3501 && weight <= 4000) {
                price = findPrice.dhl.gm4000;
              } else if (weight >= 4001 && weight <= 4500) {
                price = findPrice.dhl.gm4500;
              } else if (weight >= 4501 && weight <= 5000) {
                price = findPrice.dhl.gm5000;
              } else if (weight >= 5001 && weight <= 5500) {
                price = findPrice.dhl.gm5500;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else {
              res.status(200).json({
                message: "Weight type wrong. plz provid currect weight type",
                status: 400,
                data: [],
              });
            }
          } else if (serviceType == "fedex") {
            if (weightType == "KG" || weightType == "kg") {
              if (weight >= 6 && 10 >= weight) {
                price = weight * findPrice.fedex.kg6to10;
              } else if (weight >= 11 && 15 >= weight) {
                price = weight * findPrice.fedex.kg11to15;
              } else if (weight >= 15 && 20 >= weight) {
                price = weight * findPrice.fedex.kg16to20;
              } else if (weight >= 21 && 25 >= weight) {
                price = weight * findPrice.fedex.kg21to25;
              } else if (weight >= 26 && 30 >= weight) {
                price = weight * findPrice.fedex.kg26to30;
              } else if (weight >= 31 && 40 >= weight) {
                price = weight * findPrice.fedex.kg31to40;
              } else if (weight >= 41 && 50 >= weight) {
                price = weight * findPrice.fedex.kg41to50;
              } else if (weight >= 51 && 80 >= weight) {
                price = weight * findPrice.fedex.kg51to80;
              } else if (weight >= 81 && 100 >= weight) {
                price = weight * findPrice.fedex.kg81to100;
              } else if (weight >= 101 && 500 >= weight) {
                price = weight * findPrice.fedex.kg101to500;
              } else if (weight >= 501 && 1000 >= weight) {
                price = weight * findPrice.fedex.kg501to1000;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else if (weightType == "GM" || weightType == "gm") {
              if (weight <= 500) {
                price = findPrice.fedex.gm500;
              } else if (weight >= 501 && weight <= 1000) {
                price = findPrice.fedex.gm1000;
              } else if (weight >= 1001 && weight <= 1500) {
                price = findPrice.fedex.gm1500;
              } else if (weight >= 1501 && weight <= 2000) {
                price = findPrice.fedex.gm2000;
              } else if (weight >= 2001 && weight <= 2500) {
                price = findPrice.fedex.gm2500;
              } else if (weight >= 2501 && weight <= 3000) {
                price = findPrice.fedex.gm3000;
              } else if (weight >= 3001 && weight <= 3500) {
                price = findPrice.fedex.gm3500;
              } else if (weight >= 3501 && weight <= 4000) {
                price = findPrice.fedex.gm4000;
              } else if (weight >= 4001 && weight <= 4500) {
                price = findPrice.fedex.gm4500;
              } else if (weight >= 4501 && weight <= 5000) {
                price = findPrice.fedex.gm5000;
              } else if (weight >= 5001 && weight <= 5500) {
                price = findPrice.fedex.gm5500;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else {
              res.status(200).json({
                message: "Weight type wrong. plz provid currect weight type",
                status: 400,
                data: [],
              });
            }
          } else if (serviceType == "ups") {
            if (weightType == "KG" || weightType == "kg") {
              if (weight >= 6 && 10 >= weight) {
                price = weight * findPrice.ups.kg6to10;
              } else if (weight >= 11 && 15 >= weight) {
                price = weight * findPrice.ups.kg11to15;
              } else if (weight >= 15 && 20 >= weight) {
                price = weight * findPrice.ups.kg16to20;
              } else if (weight >= 21 && 25 >= weight) {
                price = weight * findPrice.ups.kg21to25;
              } else if (weight >= 26 && 30 >= weight) {
                price = weight * findPrice.ups.kg26to30;
              } else if (weight >= 31 && 40 >= weight) {
                price = weight * findPrice.ups.kg31to40;
              } else if (weight >= 41 && 50 >= weight) {
                price = weight * findPrice.ups.kg41to50;
              } else if (weight >= 51 && 80 >= weight) {
                price = weight * findPrice.ups.kg51to80;
              } else if (weight >= 81 && 100 >= weight) {
                price = weight * findPrice.ups.kg81to100;
              } else if (weight >= 101 && 500 >= weight) {
                price = weight * findPrice.ups.kg101to500;
              } else if (weight >= 501 && 1000 >= weight) {
                price = weight * findPrice.ups.kg501to1000;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else if (weightType == "GM" || weightType == "gm") {
              if (weight <= 500) {
                price = findPrice.ups.gm500;
              } else if (weight >= 501 && weight <= 1000) {
                price = findPrice.ups.gm1000;
              } else if (weight >= 1001 && weight <= 1500) {
                price = findPrice.ups.gm1500;
              } else if (weight >= 1501 && weight <= 2000) {
                price = findPrice.ups.gm2000;
              } else if (weight >= 2001 && weight <= 2500) {
                price = findPrice.ups.gm2500;
              } else if (weight >= 2501 && weight <= 3000) {
                price = findPrice.ups.gm3000;
              } else if (weight >= 3001 && weight <= 3500) {
                price = findPrice.ups.gm3500;
              } else if (weight >= 3501 && weight <= 4000) {
                price = findPrice.ups.gm4000;
              } else if (weight >= 4001 && weight <= 4500) {
                price = findPrice.ups.gm4500;
              } else if (weight >= 4501 && weight <= 5000) {
                price = findPrice.ups.gm5000;
              } else if (weight >= 5001 && weight <= 5500) {
                price = findPrice.ups.gm5500;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else {
              res.status(200).json({
                message: "Weight type wrong. plz provid currect weight type",
                status: 400,
                data: [],
              });
            }
          } else if (serviceType == "aramex") {
            if (weightType == "KG" || weightType == "kg") {
              if (weight >= 6 && 10 >= weight) {
                price = weight * findPrice.aramex.kg6to10;
              } else if (weight >= 11 && 15 >= weight) {
                price = weight * findPrice.aramex.kg11to15;
              } else if (weight >= 15 && 20 >= weight) {
                price = weight * findPrice.aramex.kg16to20;
              } else if (weight >= 21 && 25 >= weight) {
                price = weight * findPrice.aramex.kg21to25;
              } else if (weight >= 26 && 30 >= weight) {
                price = weight * findPrice.aramex.kg26to30;
              } else if (weight >= 31 && 40 >= weight) {
                price = weight * findPrice.aramex.kg31to40;
              } else if (weight >= 41 && 50 >= weight) {
                price = weight * findPrice.aramex.kg41to50;
              } else if (weight >= 51 && 80 >= weight) {
                price = weight * findPrice.aramex.kg51to80;
              } else if (weight >= 81 && 100 >= weight) {
                price = weight * findPrice.aramex.kg81to100;
              } else if (weight >= 101 && 500 >= weight) {
                price = weight * findPrice.aramex.kg101to500;
              } else if (weight >= 501 && 1000 >= weight) {
                price = weight * findPrice.aramex.kg501to1000;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else if (weightType == "GM" || weightType == "gm") {
              if (weight <= 500) {
                price = findPrice.aramex.gm500;
              } else if (weight >= 501 && weight <= 1000) {
                price = findPrice.aramex.gm1000;
              } else if (weight >= 1001 && weight <= 1500) {
                price = findPrice.aramex.gm1500;
              } else if (weight >= 1501 && weight <= 2000) {
                price = findPrice.aramex.gm2000;
              } else if (weight >= 2001 && weight <= 2500) {
                price = findPrice.aramex.gm2500;
              } else if (weight >= 2501 && weight <= 3000) {
                price = findPrice.aramex.gm3000;
              } else if (weight >= 3001 && weight <= 3500) {
                price = findPrice.aramex.gm3500;
              } else if (weight >= 3501 && weight <= 4000) {
                price = findPrice.aramex.gm4000;
              } else if (weight >= 4001 && weight <= 4500) {
                price = findPrice.aramex.gm4500;
              } else if (weight >= 4501 && weight <= 5000) {
                price = findPrice.aramex.gm5000;
              } else if (weight >= 5001 && weight <= 5500) {
                price = findPrice.aramex.gm5500;
              } else {
                res.status(200).json({
                  message: "weight related charge not found",
                  status: 400,
                  data: [],
                });
              }
            } else {
              res.status(200).json({
                message: "Weight type wrong. plz provid currect weight type",
                status: 400,
                data: [],
              });
            }
          }

          if (itemType == "Gift") {
            if (weight >= 500 && weight <= 5500) {
              giftedParcentis = 3500;
            } else {
              giftedParcentis = (price / 100) * 15;
            }
          }
          price = price + giftedParcentis;

          payment.pAmount = price;

          const createNewOrder = await createOrder(
            customarPhone,
            creatorPhone,
            parcel,
            orderDate,payment,
             trackingGenarator()
          );

          const createNewTracking = await createTracking(
            createNewOrder.trackingId,
            parcel,
            box,
            customarPhone
          );

          response(res, 200, "Order creation completed",createNewOrder);
        } else {
          response(res, 404, "Provide precel country data", []);
        }
      } else {
        response(res, 404, "Customer Not Found", []);
      }
    } else {
      response(res, 400, "Provied Valid Data", []);
    }
  } else if (req.method == "GET") {
    const allOrder =await Order.find()
    response(res, 200, "All Order",allOrder);
  } else if (req.method == "DELETE") {
    response(res, 400, "Server side error", []);
  } else if (req.method == "PUT" || req.method == "PATCH") {
    response(res, 400, "Server side error", []);
  } else {
    response(res, 400, "Server side error", []);
  }
}
