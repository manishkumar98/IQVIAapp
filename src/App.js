import "./styles.css";
import { SearchBox } from "./SearchBox";
function App() {
  return (
    <SearchBox
      requestSearch={(x) => {
        console.log(x);
      }}
    />
  );
}
export default App;
