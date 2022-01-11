import Checkbox from "components/UI/Checkbox/Checkbox";
import { FC } from "react";
import style from "./Table.module.css";

const Table: FC<{bikes: Array<any>}> = ({bikes}) => {
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
                    {bikes && bikes.map( item => (
                        <tr className={style.Row} key={item.id}>
                            <td className={style.Cell}>
                                <div className={style.Background}>
                                    <img src={item.image} alt="" />
                                </div>
                            </td>
                            <td className={style.Cell}>{item.name}</td>
                            <td className={style.Cell}><Checkbox id="test" onChange={() => { }} checked={true} /></td>
                            <td className={style.Cell}><Checkbox id="test" onChange={() => { }} checked={false} /></td>
                            <td className={style.Cell}><Checkbox id="test" onChange={() => { }} checked={true} /></td>
                            <td className={style.Cell}>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export { Table };