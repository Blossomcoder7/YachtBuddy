const Booking = require('../Models/Booking');

const getDatesBetweenDates = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
};

module.exports.createBooking = async (req, res) => {
    try {
        //   Parse the JSON string into an object
        const bookingDetails = JSON.parse(req.body.bookingDetail);
        // console.log(bookingDetails)

        const { id, date, price } = bookingDetails;

        if (!date || !Array.isArray(date) || date.length === 0) {
            throw new Error("Invalid date array");
        }

        const startDate = date[0].startDate;
        const endDate = date[0].endDate;

        const userId = req.id;

        const newBooking = new Booking({
            user: userId,
            boatId: id,
            startDate: startDate,
            endDate: endDate,
            totalPrice: price,
            // Add more fields as needed
        });
        newBooking.bookedDates.push(...getDatesBetweenDates(startDate, endDate));

        await newBooking.save();

        res.status(200).json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



