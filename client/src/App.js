import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Home from "./components/pages/Home"; 
import Blog from "./components/Testimonial/Testimonials";
import Pages from './components/Feature-section/Features';
import HeroSection from "./components/Hero-Section/HeroSection";
import Features from "./components/Feature-section/Features";
import Testimonials from "./components/Testimonial/Testimonials";
import ChooseUs from "./components/Choose-us/ChooseUs";
import Mobile from "./components/Cards/carded";
//import src1 from '../src/src1/App';
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path='Home' element={<HeroSection/>}/>
    <Route path='AboutUs' element={<AboutUs/>}/>
    <Route path='Courses' element={<Features/>}/>
    <Route path='Pages' element={<ChooseUs/>}/>
    <Route path='Blog' element={<Mobile/>}/>
		</Routes>
	);
}

export default App;
