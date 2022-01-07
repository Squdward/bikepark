import style from "./index.module.css";
import { Bubble } from "components/UI/Bubble/Bubble";
import { useSelector } from "react-redux";

const Order = () => {
	const state = useSelector( state => state);
	
	
	return (
    <Bubble className={style.Wrapper}>
      <h1 className={style.Title}>Заявка на аренду велосипедов</h1>

      <div className={style.Configuration}>
        <div className={style.Cell}>
          <span className={style.Name}>Тип аренды</span>
          <p className={style.Value}>{state.rentType}</p>
        </div>
        <div className={style.Cell}>
          <span className={style.Name}>Дата и время начала</span>
          <p className={style.Value}>{state.startDate+""}</p>
        </div>
        <div className={style.Cell}>
          <span className={style.Name}>Дата и время конца</span>
          <p className={style.Value}>25.07.21 12:00</p>
        </div>
        <div className={style.Cell}>
          <span className={style.Name}>Доставка</span>
          <p className={style.Value}>{state.delivery}</p>
        </div>
      </div>

    </Bubble>
  );
};

export {Order};