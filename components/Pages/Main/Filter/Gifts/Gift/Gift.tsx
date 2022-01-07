import { FC } 		from "react";
import style 			from "./Gift.module.css";
import Image 			from "next/image";
import { IGift } 	from "./Gift.props";
import React from "react";

const Gift: FC<IGift> = React.memo(({color, width, height, description, image}) => {
	return (
    <div className={style.Gift}>
      <div className={style.Background}>
        <svg
          width="304"
          height="210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.283 11.069A20 20 0 0 1 105.178 0H304v210H20.334C5.473 210-4.197 194.366 2.44 181.069l84.844-170Z"
            fill={color}
          />
        </svg>
      </div>

      <div className={style.Image}>
        <Image 
					src={image}
					width={width}
					height={height}
					layout="fixed"
					alt=""
				/>
      </div>
			
      <p className={style.Description}>
        {description} <b>Бесплатно</b>
      </p>
    </div>
  );
});

export {Gift};