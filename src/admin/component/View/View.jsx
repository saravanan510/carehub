import Header from "../Header/Header";
import Services from "../Services/Services";
import BloodTest from "../BloodTest/BloodTest";
import "./view.css";
const View = ({ selectedMenu }) => {
  return (
    <div className="view-container">
      <Header />
      {selectedMenu === "Services" && <Services />}
      {selectedMenu === "Blood Panel" && <BloodTest />}
    </div>
  );
};
export default View;
