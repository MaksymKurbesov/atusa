import MainSlider from "../../components/MainSlider/MainSlider";
import FutureEvents from "../../components/FutureEvents/FutureEvents";
import LastEvents from "../../components/LastEvents/LastEvents";
import LastNews from "../../components/LastNews/LastNews";
import Music from "../../components/Music/Music";
import "./Main.module.css";

function Main() {
  return (
    <>
      <MainSlider />
      <FutureEvents />
      <LastEvents />
      <LastNews />
      <Music />
    </>
  );
}

export default Main;
