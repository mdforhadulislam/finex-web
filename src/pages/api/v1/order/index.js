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

configDB(); // Initialize the database connection

// Helper function to calculate DHL price based on weight in KG
function calculateDHLPrice(weight, priceInfo) {
  if (weight >= 6 && weight <= 10) return weight * priceInfo.kg6to10;
  if (weight >= 11 && weight <= 15) return weight * priceInfo.kg11to15;
  if (weight >= 15 && weight <= 20) return weight * priceInfo.kg16to20;
  if (weight >= 21 && weight <= 25) return weight * priceInfo.kg21to25;
  if (weight >= 26 && weight <= 30) return weight * priceInfo.kg26to30;
  if (weight >= 31 && weight <= 40) return weight * priceInfo.kg31to40;
  if (weight >= 41 && weight <= 50) return weight * priceInfo.kg41to50;
  if (weight >= 51 && weight <= 80) return weight * priceInfo.kg51to80;
  if (weight >= 81 && weight <= 100) return weight * priceInfo.kg81to100;
  if (weight >= 101 && weight <= 500) return weight * priceInfo.kg101to500;
  if (weight >= 501 && weight <= 1000) return weight * priceInfo.kg501to1000;
  return null;
}

// Helper function to calculate DHL price based on weight in GM
function calculateDHLPriceInGM(weight, priceInfo) {
  if (weight <= 500) return priceInfo.gm500;
  if (weight >= 501 && weight <= 1000) return priceInfo.gm1000;
  if (weight >= 1001 && weight <= 1500) return priceInfo.gm1500;
  if (weight >= 1501 && weight <= 2000) return priceInfo.gm2000;
  if (weight >= 2001 && weight <= 2500) return priceInfo.gm2500;
  if (weight >= 2501 && weight <= 3000) return priceInfo.gm3000;
  if (weight >= 3001 && weight <= 3500) return priceInfo.gm3500;
  if (weight >= 3501 && weight <= 4000) return priceInfo.gm4000;
  if (weight >= 4001 && weight <= 4500) return priceInfo.gm4500;
  if (weight >= 4501 && weight <= 5000) return priceInfo.gm5000;
  if (weight >= 5001 && weight <= 5500) return priceInfo.gm5500;
  return null;
}

// Helper function to calculate FedEx price based on weight in KG
function calculateFedExPrice(weight, priceInfo) {
  if (weight >= 6 && weight <= 10) return weight * priceInfo.kg6to10;
  if (weight >= 11 && weight <= 15) return weight * priceInfo.kg11to15;
  if (weight >= 15 && weight <= 20) return weight * priceInfo.kg16to20;
  if (weight >= 21 && weight <= 25) return weight * priceInfo.kg21to25;
  if (weight >= 26 && weight <= 30) return weight * priceInfo.kg26to30;
  if (weight >= 31 && weight <= 40) return weight * priceInfo.kg31to40;
  if (weight >= 41 && weight <= 50) return weight * priceInfo.kg41to50;
  if (weight >= 51 && weight <= 80) return weight * priceInfo.kg51to80;
  if (weight >= 81 && weight <= 100) return weight * priceInfo.kg81to100;
  if (weight >= 101 && weight <= 500) return weight * priceInfo.kg101to500;
  if (weight >= 501 && weight <= 1000) return weight * priceInfo.kg501to1000;
  return null;
}

// Helper function to calculate FedEx price based on weight in GM
function calculateFedExPriceInGM(weight, priceInfo) {
  if (weight <= 500) return priceInfo.gm500;
  if (weight >= 501 && weight <= 1000) return priceInfo.gm1000;
  if (weight >= 1001 && weight <= 1500) return priceInfo.gm1500;
  if (weight >= 1501 && weight <= 2000) return priceInfo.gm2000;
  if (weight >= 2001 && weight <= 2500) return priceInfo.gm2500;
  if (weight >= 2501 && weight <= 3000) return priceInfo.gm3000;
  if (weight >= 3001 && weight <= 3500) return priceInfo.gm3500;
  if (weight >= 3501 && weight <= 4000) return priceInfo.gm4000;
  if (weight >= 4001 && weight <= 4500) return priceInfo.gm4500;
  if (weight >= 4501 && weight <= 5000) return priceInfo.gm5000;
  if (weight >= 5001 && weight <= 5500) return priceInfo.gm5500;
  return null;
}

// Helper function to calculate UPS price based on weight in KG
function calculateUPSPrice(weight, priceInfo) {
  if (weight >= 6 && weight <= 10) return weight * priceInfo.kg6to10;
  if (weight >= 11 && weight <= 15) return weight * priceInfo.kg11to15;
  if (weight >= 15 && weight <= 20) return weight * priceInfo.kg16to20;
  if (weight >= 21 && weight <= 25) return weight * priceInfo.kg21to25;
  if (weight >= 26 && weight <= 30) return weight * priceInfo.kg26to30;
  if (weight >= 31 && weight <= 40) return weight * priceInfo.kg31to40;
  if (weight >= 41 && weight <= 50) return weight * priceInfo.kg41to50;
  if (weight >= 51 && weight <= 80) return weight * priceInfo.kg51to80;
  if (weight >= 81 && weight <= 100) return weight * priceInfo.kg81to100;
  if (weight >= 101 && weight <= 500) return weight * priceInfo.kg101to500;
  if (weight >= 501 && weight <= 1000) return weight * priceInfo.kg501to1000;
  return null;
}

// Helper function to calculate UPS price based on weight in GM
function calculateUPSPriceInGM(weight, priceInfo) {
  if (weight <= 500) return priceInfo.gm500;
  if (weight >= 501 && weight <= 1000) return priceInfo.gm1000;
  if (weight >= 1001 && weight <= 1500) return priceInfo.gm1500;
  if (weight >= 1501 && weight <= 2000) return priceInfo.gm2000;
  if (weight >= 2001 && weight <= 2500) return priceInfo.gm2500;
  if (weight >= 2501 && weight <= 3000) return priceInfo.gm3000;
  if (weight >= 3001 && weight <= 3500) return priceInfo.gm3500;
  if (weight >= 3501 && weight <= 4000) return priceInfo.gm4000;
  if (weight >= 4001 && weight <= 4500) return priceInfo.gm4500;
  if (weight >= 4501 && weight <= 5000) return priceInfo.gm5000;
  if (weight >= 5001 && weight <= 5500) return priceInfo.gm5500;
  return null;
}

// Helper function to calculate Aramex price based on weight in KG
function calculateAramexPrice(weight, priceInfo) {
  if (weight >= 6 && weight <= 10) return weight * priceInfo.kg6to10;
  if (weight >= 11 && weight <= 15) return weight * priceInfo.kg11to15;
  if (weight >= 15 && weight <= 20) return weight * priceInfo.kg16to20;
  if (weight >= 21 && weight <= 25) return weight * priceInfo.kg21to25;
  if (weight >= 26 && weight <= 30) return weight * priceInfo.kg26to30;
  if (weight >= 31 && weight <= 40) return weight * priceInfo.kg31to40;
  if (weight >= 41 && weight <= 50) return weight * priceInfo.kg41to50;
  if (weight >= 51 && weight <= 80) return weight * priceInfo.kg51to80;
  if (weight >= 81 && weight <= 100) return weight * priceInfo.kg81to100;
  if (weight >= 101 && weight <= 500) return weight * priceInfo.kg101to500;
  if (weight >= 501 && weight <= 1000) return weight * priceInfo.kg501to1000;
  return null;
}

// Helper function to calculate Aramex price based on weight in GM
function calculateAramexPriceInGM(weight, priceInfo) {
  if (weight <= 500) return priceInfo.gm500;
  if (weight >= 501 && weight <= 1000) return priceInfo.gm1000;
  if (weight >= 1001 && weight <= 1500) return priceInfo.gm1500;
  if (weight >= 1501 && weight <= 2000) return priceInfo.gm2000;
  if (weight >= 2001 && weight <= 2500) return priceInfo.gm2500;
  if (weight >= 2501 && weight <= 3000) return priceInfo.gm3000;
  if (weight >= 3001 && weight <= 3500) return priceInfo.gm3500;
  if (weight >= 3501 && weight <= 4000) return priceInfo.gm4000;
  if (weight >= 4001 && weight <= 4500) return priceInfo.gm4500;
  if (weight >= 4501 && weight <= 5000) return priceInfo.gm5000;
  if (weight >= 5001 && weight <= 5500) return priceInfo.gm5500;
  return null;
}

export default async function handler(req, res) {
  const { method, body } = req; // Destructure request properties
  const {
    parcelFromAndToId,
    customarPhone,
    creatorPhone,
    parcel,
    weight,
    serviceType,
    itemType,
    orderDate,
    box,
  } = body; // Extract relevant fields from request body
  const TrackID = req.query?.trackID; // Extract tracking ID from query parameters

  switch (method) {
    case "POST":
      // POST request: Handle order creation
      if (
        customarPhone &&
        creatorPhone &&
        parcel &&
        serviceType &&
        weight &&
        box
      ) {
        try {
          const findCustomer = await User.findOne({ phone: customarPhone });
          if (findCustomer) {
            const findPrice = await Price.findOne({ _id: parcelFromAndToId });
            if (findPrice) {
              let price;
              let giftedParcentis = 0;
              const weightSplit = weight.split(" ");
              const parcelWeight = Number(weightSplit[0]);
              const weightType = weightSplit[1];

              if (serviceType === "dhl") {
                if (weightType === "KG" || weightType === "kg") {
                  // DHL pricing based on weight in KG
                  price = calculateDHLPrice(parcelWeight, findPrice.dhl);
                } else if (weightType === "GM" || weightType === "gm") {
                  // DHL pricing based on weight in GM
                  price = calculateDHLPriceInGM(parcelWeight, findPrice.dhl);
                } else {
                  return response(
                    res,
                    400,
                    "Weight type wrong. Please provide correct weight type",
                    []
                  );
                }
              } else if (serviceType === "fedex") {
                if (weightType === "KG" || weightType === "kg") {
                  // FedEx pricing based on weight in KG
                  price = calculateFedExPrice(parcelWeight, findPrice.fedex);
                } else if (weightType === "GM" || weightType === "gm") {
                  // FedEx pricing based on weight in GM
                  price = calculateFedExPriceInGM(
                    parcelWeight,
                    findPrice.fedex
                  );
                } else {
                  return response(
                    res,
                    400,
                    "Weight type wrong. Please provide correct weight type",
                    []
                  );
                }
              } else if (serviceType === "ups") {
                if (weightType === "KG" || weightType === "kg") {
                  // UPS pricing based on weight in KG
                  price = calculateUPSPrice(parcelWeight, findPrice.ups);
                } else if (weightType === "GM" || weightType === "gm") {
                  // UPS pricing based on weight in GM
                  price = calculateUPSPriceInGM(parcelWeight, findPrice.ups);
                } else {
                  return response(
                    res,
                    400,
                    "Weight type wrong. Please provide correct weight type",
                    []
                  );
                }
              } else if (serviceType === "aramex") {
                if (weightType === "KG" || weightType === "kg") {
                  // Aramex pricing based on weight in KG
                  price = calculateAramexPrice(parcelWeight, findPrice.aramex);
                } else if (weightType === "GM" || weightType === "gm") {
                  // Aramex pricing based on weight in GM
                  price = calculateAramexPriceInGM(
                    parcelWeight,
                    findPrice.aramex
                  );
                } else {
                  return response(
                    res,
                    400,
                    "Weight type wrong. Please provide correct weight type",
                    []
                  );
                }
              } else {
                return response(res, 400, "Service type not supported", []);
              }

              if (itemType === "Gift") {
                giftedParcentis =
                  parcelWeight >= 500 && parcelWeight <= 5500
                    ? 3500
                    : (price / 100) * 15;
              }
              price += giftedParcentis;

              const payment = {
                pType: "",
                pAmount: price,
                pExtraCharge: 0,
                pDiscount: 0,
                pRecived: 0,
              };

              // Create new order and tracking
              const createNewOrder = await createOrder(
                customarPhone,
                creatorPhone,
                parcel,
                orderDate || new Date(),
                payment,
                trackingGenarator()
              );
              const createNewTracking = await createTracking(
                createNewOrder.trackingId,
                parcel,
                box,
                customarPhone
              );

              return response(
                res,
                200,
                "Order creation completed",
                createNewOrder
              );
            } else {
              return response(res, 404, "Provide parcel country data", []);
            }
          } else {
            return response(res, 404, "Customer Not Found", []);
          }
        } catch (error) {
          console.error("Error creating order:", error);
          return response(res, 500, "Server side error", []);
        }
      } else {
        return response(res, 400, "Provide Valid Data", []);
      }

    case "GET":
      // GET request: Retrieve all orders
      try {
        const allOrder = await Order.find();
        return response(res, 200, "All Orders", allOrder);
      } catch (error) {
        console.error("Error fetching orders:", error);
        return response(res, 500, "Server side error", []);
      }

    case "DELETE":
    case "PUT":
    case "PATCH":
      // DELETE, PUT, PATCH requests: Not supported for this endpoint
      return response(res, 405, "Method Not Allowed", []);

    default:
      // Unsupported HTTP methods
      return response(res, 405, "Method Not Allowed", []);
  }
}
