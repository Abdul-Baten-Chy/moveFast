import amazon from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstar from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import starpeople from "../../assets/brands/start_people.png";

function Brands() {
  return (
    <div className="mt-20 border-b-2 border-gray-400 pb-14 border-dashed">
      <h3 className="text-3xl font-extrabold text-center">
        We've helped thousands of sales teams
      </h3>
      <div className="flex flex-wrap justify-between items-center gap-4 mt-10">
        <img src={amazon} alt="Amazon" />
        <img src={moonstar} alt="Moonstar" />
        <img src={casio} alt="Casio" />
        <img src={star} alt="Star" />
        <img src={randstar} alt="Randstad" />
        <img src={starpeople} alt="Start People" />
      </div>
    </div>
  );
}

export default Brands;
