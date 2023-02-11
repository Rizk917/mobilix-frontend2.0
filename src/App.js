import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./components/About_us";
import Home from "./components/main";
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
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/aboutus" element={<About />}></Route>
      <Route exact path="/contactus" element={<CntctusExt />}></Route>
      <Route exact path="/news" element={<NewsP />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/login" element={<LogIn />}></Route>
      <Route exact path="/Phones" element={<PhonePage />}></Route>
      <Route exact path="/Adminarticle" element={<Adminarticle />}></Route>
      <Route exact path="/AdminContactUs" element={<AdminContactUs />}></Route>
      <Route exact path="/AdminPhonedata" element={<AdminPhonedata />}></Route>
      <Route exact path="/phones/:id" element={<PhoneDetails />}></Route>
    </Routes>
  </BrowserRouter>
  <LgiPop />
  </>
  );
}

export default App;
