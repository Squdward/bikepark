import style from "../../main.module.css";
import img  from "./Image/1.png";
import img2 from "./Image/2.png";
import img3 from "./Image/3.png";
import { Gift } from "./Gift/Gift";

const Gifts = () => {
    return (
        <div className={style.Gifts}>
        <Gift
          width={160}
          height={120}
          color={"#D7E6FF"}
          description={"Шлем"}
          image={img}
        />
        <Gift
          width={133}
          height={115}
          color={"#B9D5FF"}
          description={"Фонарик"}
          image={img2}
        />
        <Gift
          width={120}
          height={120}
          color={"#A5C7FA"}
          description={"Замок"}
          image={img3}
        />
      </div>
    );
}

export {Gifts};