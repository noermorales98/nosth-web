import item1 from "../../assets/items/item1.png";
import item2 from "../../assets/items/item2.png";
import item3 from "../../assets/items/item3.png";
import item4 from "../../assets/items/item4.png";

function Derecha() {
  return (
    <div className="section-right w-1/2 flex items-center justify-end max-[768px]:w-full max-[768px]:justify-center">
      <div className="grid grid-cols-2 items-center justify-center gap-4">
        <img className="m-0 rounded-[30px]" width={270} src={item1} alt="" />
        <img className="m-0 rounded-[30px]" width={270} src={item2} alt="" />
        <img className="m-0 rounded-[30px]" width={270} src={item3} alt="" />
        <img className="m-0 rounded-[30px]" width={270} src={item4} alt="" />
      </div>
    </div>
  );
}

export default Derecha;
