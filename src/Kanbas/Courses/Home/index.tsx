import ModuleList from "../Modules/List";
import Status from "./status";


function Home() {
  return (
    <div className="row">
      <div className="col-9"><ModuleList /></div>
      <div className="col-3"><Status /></div>
    </div>
  );
}
export default Home;
