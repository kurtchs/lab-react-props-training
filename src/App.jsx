import "./App.css";
import Greeting from "./components/Greeting";
import IdCard from "./components/Idcard";
import Random from "./components/Random";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
<Greeting lang="de">Ludwig </Greeting>
<Greeting lang="fr">François </Greeting>

<Random min={1} max={6} />
<Random min={1} max={100} />

    </div>
  );
}
export default App;
