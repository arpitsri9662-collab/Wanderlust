const NodeGeocoder = require("node-geocoder");

const options = {
    provider: "openstreetmap",
};

module.exports = NodeGeocoder(options);