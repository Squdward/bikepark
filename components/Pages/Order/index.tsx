import style from "./index.module.css";
import { Bubble } from "components/UI/Bubble/Bubble";
import { useSelector } from "react-redux";
import { FC} from "react";
import { Configuration } from "./Configuration";
import { Table } from "./Table";
import Link from "next/link";
import cn from "classnames";
import { Booking } from "./Booking";

const Order: FC = () => {
	const options = useSelector( state => state.MainFilter);
  const bikes = useSelector( state => state.Bike.selectedBikes)

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

        <Table bikes={bikes}/>

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
                  <span className={style.Label}>Итого</span> <span className={cn(style.Price, style.FinalPrice)}>360 AED</span>
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