const BoatList = require("../Models/ListYourBoat");
const User = require("../Models/User");


exports.allBoat = async (req, res) => {
  try {
const boat = await BoatList.find();
if (!boat) {
    return res.status(404).json({ message: 'boats not found' });
  }
console.log(boat);
  // Return the user's profile
  return res.status(200).json({ boat});
 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.ownerBoat = async (req, res) => {
  try {
    console.log(req.id);
    const userId = req.id;
    console.log(userId);
        const boat = await BoatList.find({ userId: userId })
        .sort({ createdAt: -1 });
    if (!boat) {
      return res.json({ message: 'boats not found' });
    }
    console.log(boat);
    return res.status(200).json({ boat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.ReviewListBoat = async (req, res) => {
  try {
    const userId = req.id;
console.log(userId);
    const boatListings = await BoatList.find({ userId: userId })
    .sort({ createdAt: -1 })
    .limit(1);

    // Return the boat listings as a JSON response
    res.status(200).json(boatListings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
