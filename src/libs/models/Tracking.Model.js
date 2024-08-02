const mongoose = require("mongoose");

const trackingSchema = new mongoose.Schema(
  {
    ourTrackingId: {
      type: String,
      required: true,
    },
    parcel: {
      type: Object,
      required: true,
      from: {
        type: Object,
        required: false,
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
        required: false,
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
          required: false,
        },
        phone: {
          type: String,
          required: false,
        },
        email: {
          type: String,
          required: false,
        },
        address: {
          type: String,
          required: false,
        },
        zipCode: {
          type: String,
          required: false,
        },
      },
      reciver: {
        name: {
          type: String,
          required: false,
        },
        phone: {
          type: String,
          required: false,
        },
        email: {
          type: String,
          required: false,
        },
        address: {
          type: Object,
          required: false,
          city: {
            type: String,
            required: false,
          },
          country: {
            type: String,
            required: false,
          },
          zipCode: {
            type: String,
            required: false,
          },
          address: {
            type: String,
            required: false,
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
    box: {
      type: Array,
      required: false,
    },
    customarPhone: {
      type: String,
      required: true,
    },
    handoverBy: {
      type: Object,
      required: true,
      default: {
        company: "",
        traking: "",
        payment: 0,
        trackingDetails: [],
      },
      company: {
        type: String,
        required: false,
      },
      traking: {
        type: String,
        required: false,
      },

      payment: {
        type: Number,
        required: false,
      },
      trackingDetails: {
        type: Array,
        required: false,
      },
    },
  },
  { timestamps: true }
);

const Tracking =
  mongoose.models.Tracking || mongoose.model("Tracking", trackingSchema);

module.exports = Tracking;
