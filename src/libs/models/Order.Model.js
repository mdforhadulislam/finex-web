const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customarId: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
    required: true,
  },
  parcel: {
    type: Object,
    required: true,
    from: {
      type: Object,
      required: true,
      default: {
        country: "",
        id: "",
      },
      country: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
    },
    to: {
      type: Object,
      required: true,
      default: {
        country: "",
        id: "",
      },
      country: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
    },
    sender: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
    },
    reciver: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: Object,
        required: true,
        city: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
      },
    },
    weight: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: false,
      types: {
        type: String,
        required: false,
      },
      list: {
        type: Array,
        required: false,
      },
    },
  },
  orderDate: {
    type: Date,
    required: true,
  },
  payment: {
    type: Object,
    required: true,
    pType: {
      type: String,
      required: true,
    },
    pAmount: {
      type: Number,
      required: true,
    },
    pExtraCharge: {
      type: Number,
      required: true,
    },
    pDiscount: {
      type: Number,
      required: true,
    },
    pRecived: {
      type: Number,
      required: true,
    },
  },
  trackingId: {
    type: String,
    required: true,
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

module.exports = Order;
