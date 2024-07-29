const Price = require("../models/Price.Model");

export const createPrice = async (
  fromCountry,
  toCountry,
  dhlRate,
  fedexRate,
  upsRate,
  aramexRate
) => {
  const newPriceList = new Price({
    from: fromCountry,
    to: toCountry,
    dhl: dhlRate,
    fedex: fedexRate,
    ups: upsRate,
    aramex: aramexRate,
  });

  const createRateList = await newPriceList.save();

  return createRateList;
};
