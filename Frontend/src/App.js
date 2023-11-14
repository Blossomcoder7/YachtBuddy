import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormDataProvider } from "./utils/FormDataContext";
import { UserProvider } from "./utils/UserContext";
import { Roles } from "./utils/constants";
import Authenticate from "./auth/index";
import { AuthProvider } from "./utils/AuthContext";
import Home from "./components/MainPage/Home";
import Charter from "./components/MainPage/Charter";
import AboutUs from "./components/MainPage/AboutUs";
import Support from "./components/MainPage/Support";
import ListBoat from "./components/ListYourBoat/ListBoat";
import SignUp from "./components/MainPage/SignUp";
import Login from "./components/MainPage/Login";
import RequestForm from "./components/SubComponents/RequestForm";
import ListingStep from "./components/ListYourBoat/ListingStep";
import InsauranceType from "./components/ListYourBoat/InsauranceType";
import BoatLoacation from "./components/ListYourBoat/BoatLoacation";
import TitleDescription from "./components/ListYourBoat/TitleDescription";
import CancelationPolicy from "./components/ListYourBoat/CancelationPolicy";
import AllowedOnBoat from "./components/ListYourBoat/AllowedOnBoat";
import BoatFeatures from "./components/ListYourBoat/BoatFeatures";
import Specification from "./components/ListYourBoat/Specification";
import Availability from "./components/ListYourBoat/Availability";
import AdvanceNotice from "./components/ListYourBoat/AdvanceNotice";
import MultipleBooking from "./components/ListYourBoat/MultipleBooking";
import OperatorBooking from "./components/ListYourBoat/OperatorBooking";
import Review from "./components/ListYourBoat/Review";
import RenterCategiorySuport from "./components/SubComponents/RenterCategiorySuport";
import OwnerDashboard from "./components/Owner/OwnerDashboard";
import AllBoats from "./components/Product Page/AllBoats";
import SingleBoat from "./components/Product Page/SingleBoat";
import Dashboard from "./components/Admin/Dashboard";
import HomeDash from "./components/Admin/HomeDash";
import ListedBoats from "./components/Admin/ListedBoats";
import BoatDetails from "./components/Admin/BoatDetails";
import GuestProfile from "./components/Admin/GuestProfile";
import Message from "./components/Admin/Message";
import CheckOutPage from "./components/Paymants/CheckOutPage";
import { ImageProvider } from '../src/utils/ImageContext';
import OwnerBoats from "./components/Owner/OwnerBoats";
import StartTime from "./components/ListYourBoat/StartTime";
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchProduct from "./components/Product Page/SearchProduct";
import Inquiry from "./components/Admin/Inquiry";
import ForgetPassword from "./components/MainPage/ForgetPassword";
import OwnerInquiry from "./components/Owner/OwnerInquiry";
import BookedCharter from "./components/Admin/BookedCharter";
import OwnerBookedChaerter from "./components/Owner/OwnerBookedChaerter";
import BookedCharterDetail from "./components/Admin/BookedCharterDetail";


function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="184628421959-fddbic6ghenvjo4od9km4g04ss9db1m3.apps.googleusercontent.com">
        <AuthProvider>
          <UserProvider>
            <FormDataProvider>
              <ImageProvider>
                <BrowserRouter>
                  <Routes>

                    <Route exact path="/" element={<Home />}>
                    </Route>
                    <Route exact path="/charter" element={<Charter />}></Route>
                    <Route exact path="/listYourBoat" element={<ListBoat />}></Route>
                    <Route exact path="/aboutUs" element={<AboutUs />}></Route>
                    <Route exact path="/support" element={<Support />}></Route>
                    <Route exact path="/signup" element={<SignUp />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/forgetPassword" element={<ForgetPassword />}></Route>
                    <Route exact path="/request" element={<RequestForm />}></Route>
                    <Route exact path="/renterSupport" element={<RenterCategiorySuport />}></Route>
                    <Route exact path="/singleBoat/:id" element={<SingleBoat />}></Route>
                    <Route exact path="/allBoat/:category" element={<AllBoats />}></Route>
                    <Route exact path="/checkout" element={<CheckOutPage />} />
                    <Route exact path="/startTime" element={<StartTime />} />
                    <Route exact path="/searchBoats" element={<SearchProduct />} />




                    {/* ......////.....List Your Boat.....//// */}

                    <Route exact path="/listingStep" element={<ListingStep />} />
                    <Route exact path="/insauranceType" element={<InsauranceType />} />
                    <Route exact path="/boatLocation" element={<BoatLoacation />} />
                    <Route exact path="/boatDescription" element={<TitleDescription />} />
                    <Route exact path="/cancelPolicy" element={<CancelationPolicy />} />
                    <Route exact path="/alowedOnBoat" element={<AllowedOnBoat />} />
                    <Route exact path="/boatFeature" element={<BoatFeatures />} />
                    <Route exact path="/boatSpecification" element={<Specification />} />
                    <Route exact path="/boatSpecification" element={<Specification />} />
                    <Route exact path="/availability" element={<Availability />} />
                    <Route exact path="/advanceNotice" element={<AdvanceNotice />} />
                    <Route exact path="/multiBooking" element={<MultipleBooking />} />
                    <Route exact path="/operatorBooking" element={<OperatorBooking />} />
                    <Route exact path="/review" element={<Review />} />


                    {/* .....Owner Dashboard Routing..... */}
                    <Route exact path="/ownerDashboard" element={<OwnerDashboard />}>
                      <Route index element={<HomeDash />} />
                      <Route exact path="messsage" element={<Message />}></Route>
                      <Route exact path="boats" element={<OwnerBoats />}></Route>
                      <Route exact path="inquiry" element={<OwnerInquiry />}></Route>
                      <Route exact path="booked-charter" element={<OwnerBookedChaerter />}></Route>
                    </Route>


                    {/* ........Admin Dashboard Routing...... */}
                    <Route exact path="/dashboard" element={<Dashboard />}>
                      <Route index element={<HomeDash />} />
                      <Route exact path="listedBoats" element={<ListedBoats />} />
                      <Route exact path="boatDEtails" element={<BoatDetails />} />
                      <Route exact path="guestProfile" element={<GuestProfile />} />
                      <Route exact path="message" element={<Message />} />
                      <Route exact path="inquiry" element={<Inquiry />} />
                      <Route exact path="bookedCharter" element={<BookedCharter />} />
                      <Route exact path="booked-Charter-details" element={<BookedCharterDetail />} />
                    </Route>

                  </Routes>
                </BrowserRouter>
              </ImageProvider>
            </FormDataProvider>
          </UserProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
