import React, { FC } 	from "react";
import style 					from "./Main.module.css";
import { Bubble } 		from "../../UI/Bubble/Bubble";
// import { Gifts } from "./Gifts/Gifts";
import { Gift } from "./Gift/Gift";
import img from "./Image/1.png";
import img2 from "./Image/2.png";
import img3 from "./Image/3.png";

const Main: FC = () => {
	return (
    <Bubble tail={true}>
      <div className={style.TopLine}>
        <h1 className={style.Title}>Аренда велосипедов c доставкой</h1>
      </div>

      {/* <Gifts/> */}
      <div className={style.Gifts}>a</div>
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
    </Bubble>
  );
};

export {Main};