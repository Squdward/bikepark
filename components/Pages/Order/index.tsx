import style from "./index.module.css";
import { Bubble } from "components/UI/Bubble/Bubble";
import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect} from "react";
import { Configuration } from "./Configuration";
import { Table } from "./Table";
import Link from "next/link";
import cn from "classnames";
import { Booking } from "./Booking";
import { calcBikePrice } from "redux/Bike/index.slice";

const Order: FC = () => {
	const options = useSelector( state => state.MainFilter);
  const {selectedBikes, price} = useSelector( state => state.Bike)
	return (
    <>
      <Bubble className={style.Wrapper}>
        <h1 className={style.Title}>Заявка на аренду велосипедов</h1>
        
        <Configuration 
          rentType={options.rentType}
          startDate={options.startDate}
          endDate={options.endDate}
          delivery={options.delivery}
        />

        <Table bikes={selectedBikes}/>

        <div className={style.Result}>
            <Link href="/">
              <a className={style.Return}>
                <span>
                  Назад к выбору велосипедов
                </span>
              </a>
            </Link> 

            <div className={style.Prices}>
              <ul>
                <li>
                  <span className={style.Label}>Доставка</span> <span className={style.Price}>0 AED</span>
                </li>

                <li>
                  <span className={style.Label}>Итого</span> <span className={cn(style.Price, style.FinalPrice)}>{price}</span>
                </li>
              </ul>
            </div>
        </div>
      </Bubble>

      <Booking/>
    </>
  );
};

export {Order};