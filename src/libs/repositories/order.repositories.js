import Order from "../models/Order.Model";
import Tracking from "../models/Tracking.Model";

export const createOrder = async (
  customarPhone,
  creatorPhone,
  parcel,
  orderDate,
  payment,
  trackingId
) => {
  const newOrder = new Order({
    customarPhone: customarPhone,
    creatorPhone: creatorPhone,
    parcel,
    serviceType,
    orderDate,
    payment,
    trackingId,
  });

  const createNewOrder = await newOrder.save();

  return createNewOrder;
};

export const createTracking = async (
  ourTrackingId,
  parcel,
  box,
  weight,
  item,
  customarPhone
) => {
  const newTracking = new Tracking({
    ourTrackingId,
    parcel,
    box,
    weight,
    item,
    customarPhone,

    handoverBy: {
      company: "",
      traking: "",
      payment: 0,
      trackingDetails: [
        {
          id: 1234,
          date: new Date(),
          level: 1,
          description: "The parcel has been collected from the customer",
          location: "Dhaka, Bangladesh",
        },
      ],
    },
  });

  const createNewTracking = await newTracking.save();

  return createNewTracking;
};
