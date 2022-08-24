import DropDownRow from "./dropDownRow"
import style from "./index.module.scss"

const Table = ({ List }) => {
    return (
        <div className={style.Wrapper}>
            <table className={style.Table}>
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Дата</th>
                        <th>Стоимость</th>
                        <th>Оплата</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {List &&
                        List.map((item) => (
                            <DropDownRow
                                {...item}
                                key={item.id}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
