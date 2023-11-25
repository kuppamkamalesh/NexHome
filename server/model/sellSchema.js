const mongoose = require("mongoose");
const sellSchema = new mongoose.Schema(
  {
    Type: { type: String, required: true },
    to: { type: String, required: true },
    name: { type: String, required: true },
    Location: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    rooms: { type: Number, required: true },
    linkarr: { type: Array, required: true },
    mobile: { type: Number, required: true },
    mail: { type: String, required: true },
    cost: { type: Number, required: true },
    info: { type: String, required: true },
  },
  { timestamps: true, collection: "Sell-propertyList" }
);

module.exports = mongoose.model("sellSchema", sellSchema);
