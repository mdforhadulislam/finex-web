const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  from: {
    type: Object,
    require: false,
    default: { id: "", country: "" },
  },
  to: {
    type: Object,
    require: false,
    default: { id: "", country: "" },
  },
  dhl: {
    type: Object,
    required: false,
    gm500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg6to10: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg11to15: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg16to20: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg21to25: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg26to30: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg31to40: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg41to50: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg51to80: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg81to100: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg101to500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg501to1000: {
      type: Number,
      required: false,
      default: NaN,
    },
  },
  fedex: {
    type: Object,
    required: false,
    gm500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg6to10: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg11to15: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg16to20: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg21to25: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg26to30: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg31to40: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg41to50: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg51to80: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg81to100: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg101to500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg501to1000: {
      type: Number,
      required: false,
      default: NaN,
    },
  },
  ups: {
    type: Object,
    required: false,
    gm500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg6to10: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg11to15: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg16to20: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg21to25: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg26to30: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg31to40: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg41to50: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg51to80: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg81to100: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg101to500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg501to1000: {
      type: Number,
      required: false,
      default: NaN,
    },
  },
  aramex: {
    type: Object,
    required: false,
    gm500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm1500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm2500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm3500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm4500: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5000: {
      type: Number,
      required: false,
      default: NaN,
    },
    gm5500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg6to10: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg11to15: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg16to20: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg21to25: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg26to30: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg31to40: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg41to50: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg51to80: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg81to100: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg101to500: {
      type: Number,
      required: false,
      default: NaN,
    },
    kg501to1000: {
      type: Number,
      required: false,
      default: NaN,
    },
  },
},{ timestamps: true });

const Price = mongoose.models.Price || mongoose.model("Price", priceSchema);

module.exports = Price;
