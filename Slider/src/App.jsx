import Carousel from "./components/Carousel";
import { slides } from "./utils/data.json";

const App = () =>{
  return (
    <div id="app" className="w-screen h-screen flex items-center justify-center">
      <div className="w-[600] h-[400]">
        <Carousel slideData={slides}/>
      </div>
    </div>
  );
}

export default App;