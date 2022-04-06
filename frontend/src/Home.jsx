import logo from "./images/result.svg";
import { Logo } from "./Home.styles";

const Home = () => {
  return (
    <>
      <h1>FRIENDS QUIZ</h1>
      <Logo src={logo} alt="main" />
    </>
  );
};

export default Home;
