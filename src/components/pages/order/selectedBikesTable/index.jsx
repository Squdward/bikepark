import { useDispatch, useSelector } from 'react-redux';
import { setOptionallyItem } from '../../../../redux/slices/Bike';
import Checkbox from '../../../ui/checkbox';
import style from './index.module.scss';

const SelectedBikesTable = () => {
  const bikes = useSelector((state) => state.Bikes.selectedBikes);
  const dispatch = useDispatch();

  const changeOptionallyItem = (e, id) => {
    const checked = e.target.checked;
		const name = e.target.name;

    dispatch(setOptionallyItem({ checked, name, id }));
  };
  return (
    <div className={style.TableWrapper}>
      <table className={style.Table}>
        <thead className={style.Head}>
          <tr>
            <th className={style.HeadCell}></th>
            <th className={style.HeadCell}>Название велосипедов</th>
            <th className={style.HeadCell}>Шлем</th>
            <th className={style.HeadCell}>Фонарик</th>
            <th className={style.HeadCell}>Замок</th>
            <th className={style.HeadCell}>Стоимость</th>
          </tr>
        </thead>

        <tbody className={style.Body}>
          {bikes &&
            bikes.map((item) => (
              <tr className={style.Row} key={item.id}>
                <td className={style.Cell}>
                  <div className={style.Background}>
                    <img src={item.image} alt="" />
                  </div>
                </td>
                <td className={style.Cell}>{item.name}</td>
                <td className={style.Cell}>
                  <Checkbox
                    id="helmet"
                    name="helmet"
                    onChange={(val) => changeOptionallyItem(val, item.id)}
                    checked={item.optionally.helmet}
                  />
                </td>
                <td className={style.Cell}>
                  <Checkbox
                    id="flashlight"
										name="flashlight"
                    onChange={(val) => changeOptionallyItem(val, item.id)}
                    checked={item.optionally.flashlight}
                  />
                </td>
                <td className={style.Cell}>
                  <Checkbox
                    id="lock"
										name="lock"
                    onChange={(val) => changeOptionallyItem(val, item.id)}
                    checked={item.optionally.lock}
                  />
                </td>
                <td className={style.Cell}>{item.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedBikesTable;
