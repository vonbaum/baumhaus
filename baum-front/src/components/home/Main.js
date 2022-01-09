import "../../App.css";
import Compose from "./Compose";
import Filter from "./Filter";
import Posts from "./Posts";

function Main() {
  return (
    <div className="main">
      <Compose />
      <Filter />
      <Posts />
    </div>
  );
}

export default Main;
