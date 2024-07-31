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
      box: {
        type: Array,
        required: false,
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
    customarId: {
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
