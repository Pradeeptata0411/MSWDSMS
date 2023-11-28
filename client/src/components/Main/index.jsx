import styles from "./styles.module.css";
import Home from "../pages/Home";
import HeroSection from "../Hero-Section/HeroSection";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
                 <HeroSection></HeroSection>
				<Home></Home>
				
		</div>
	);
};

export default Main;
