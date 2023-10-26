const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRouter = require('./Routers/user');
const adminRouter = require('./Routers/admin');
const requestRouter = require('./Routers/request');
const listBoatRouter = require('./Routers/listYourBoat');
const messageRoutes = require('./Routers/Message');
const boatRoutes = require('./Routers/boat');
const paypalRoutes = require('./Routers/paypal');
const imgRoutes = require('./Routers/Images');
const inquiryRoutes = require('./Routers/inquiry');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cookieParser());

const corsOptions = {
  origin: 'https://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '100mb', extended: true }));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", function () {
  console.log("Connected to Database: MongoDB");
});

const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Routes
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/request", requestRouter);
app.use("/listYourBoat", listBoatRouter);
app.use('/chat', messageRoutes);
app.use('/boat', boatRoutes);
app.use('/checkout', paypalRoutes);
app.use('/img', imgRoutes);
app.use('/inquiry', inquiryRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
