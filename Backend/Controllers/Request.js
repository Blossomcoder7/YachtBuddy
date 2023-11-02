const Request = require("../Models/Request");
const Boat = require("../Models/ListYourBoat");

exports.createRequest = async (req, res) => {
  try {
    console.log(req.body)
    // Destructure reqstData and date from req.body
    const { reqstData, date, selectedlocation } = req.body;
    // let startDate = date.startDate;
    // let endDate = date.endDate;
    // console.log({ startDate, endDate }); 
    // Dinner Key
    console.log(selectedlocation)

    const requested = await Boat.find({
      boatAddress: selectedlocation,
      // passangerCapacity: { $gte: reqstData.passanger },
      // availableDates: {
        // $elemMatch: { $gte: new Date(startDate), $lte: new Date(endDate) }
      // }
    });

    console.log(requested);

    if (requested.length === 0) {
      return res.status(201).send({
        message: "No Boat Found",
      });
    } else {
      return res.status(200).json({ boats: requested }); // Assuming requested is an array of boats
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

