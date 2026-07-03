const Listing = require("../models/listing");
const geocoder = require("../utils/geocoder");


module.exports.index = async (req, res) => {

    const { category, search } = req.query;

    let query = {};

    // Category filter
    if (category) {
        query.category = category;
    }

    // Search filter
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ];
    }
    
    const allListings = await Listing.find(query);

    res.render("listings/index", {
        allListings,
        category,
        search
    });
};

module.exports.renderNewForm = (req, res) => {
        res.render("listings/new.ejs");
    };

module.exports.showListing = async (req,res) => {
        let {id} = req.params;
        const listing = await Listing.findById(id)
        .populate({
            path : "reviews", 
            populate : { 
                path : "author" }, 
            })
        .populate("owner");
        if(!listing) {
            req.flash("error", "Listing You Requested For does not Exits !!");
            return res.redirect("/listings");
        }
        res.render("listings/show.ejs", { listing });
    };


module.exports.createListing = async (req, res) => {

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    const result = await geocoder.geocode(req.body.listing.location);

    if (result.length > 0) {
        newListing.geometry = {
            type: "Point",
            coordinates: [
                result[0].longitude,
                result[0].latitude,
            ],
        };
    }

    newListing.owner = req.user._id;
    newListing.image = {
        url,
        filename,
    };

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res) => {
        let {id} = req.params;
        const listing = await Listing.findById(id);
         if(!listing) {
            req.flash("error", "Listing You Requested For does not Exits !!");
            return res.redirect("/listings");
        }

        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_240,w_250")
        res.render("listings/edit.ejs", { listing, originalImageUrl });
    };

    
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    const result = await geocoder.geocode(req.body.listing.location);

    if (result.length > 0) {
        listing.geometry = {
            type: "Point",
            coordinates: [
                result[0].longitude,
                result[0].latitude,
            ],
        };
    }

    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }

    // Always save after making changes
    await listing.save();

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
        let {id} = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        req.flash("success", " Listing Deleted !");
        res.redirect("/listings");
    };