import { Redirect, Router } from "react-router";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./components/About_us";
import Home from "./components/main";
import ContactUs from "./components/contactUs";
import NewsP from "./components/News-page";
import LogIn from "./components/log-in-phone";
import LgiPop from "./components/log-in-pop";
import PhonePage from "./components/Phones";
import Adminarticle from "./components/adminPages/adminArticle";
import AdminPhonedata from "./components/adminPages/adminPhones";
import AdminContactUs from "./components/adminPages/contactUsadmin";
import CntctusExt from "./components/ContactusExt";
import PhoneDetails from "./components/PhoneDetails";
import Dashboard from "./components/adminPages/Dashboard";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutus" element={<About />}></Route>
      <Route path="/contactus" element={<CntctusExt />}></Route>
      <Route path="/news" element={<NewsP />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/Phones" element={<PhonePage />}></Route>
      <Route path="/Adminarticle" element={<Adminarticle />}></Route>
      <Route path="/AdminContactUs" element={<AdminContactUs />}></Route>
      <Route path="/AdminPhonedata" element={<AdminPhonedata />}></Route>
      <Route path="/phones/:id" element={<PhoneDetails />}></Route>
    </Routes>
  </BrowserRouter>
  <LgiPop />
  </>
  );
}

export default App;
