const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

        const listingSchema = new Schema({
            title : { 
                type : String,
                required : true,
            },
            description : String,
          image: {
    filename: {
        type: String,
        default: "default",
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
},
            price : {
                type : Number,
                required : true,
            },
            location : String,
            country : String,
            reviews : [
                {
                    type : Schema.Types.ObjectId,
                    ref : "Review",
                },
            ],
            owner : {
                type : Schema.Types.ObjectId,
                ref : "User",
            },
            geometry: {
                type: {
                type: String,
                enum: ["Point"],
               },
            coordinates: {
            type: [Number],
            default: [0, 0],
        },
           },
            category: {
               type: String,
               enum: [
            "Trending",
            "Rooms",
            "Iconic Cities",
            "Mountains",
            "Castles",
            "Pools",
            "Camping",
            "Farms",
            "Fishing",
            "Hiking",
            "Food",
            "Para-Gliding",
            "Picnic"
        ]
    },
        });

        listingSchema.post("findOneAndDelete", async (listing) => {
            if(listing) {
                await Review.deleteMany({_id : { $in : listing.reviews }});
            }
        });

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;