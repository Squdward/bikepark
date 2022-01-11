import style from "./Booking.module.css";
import { Input } from "components/UI/Input/Input";
import { Bubble } from "components/UI/Bubble/Bubble";
import cn from "classnames"
import { Radio } from "components/UI/Radio";
import { Hint } from "components/UI/Hint/Hint";
import { Button } from "components/UI/Button/Button";

const Booking = () => {
    return (
      <Bubble tail={true} className={style.Buble}>
        <form className={style.Form}>
            <div className={style.Inner}>
                <div className={style.Column}>
                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Контактные данные</legend>
                        <Input
                            className={style.Input}
                            placeholder="Имя*"
                            required name="name"
                        />
                        <Input 
                            className={style.Input}
                            placeholder="Номер телефона*"
                            name="phoneNumber" 
                        />
                    </fieldset>

                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Информация о доставке</legend>
                        
                        <Input
                            className={style.Input}
                            placeholder="Адрес*"
                            required
                            name="adress"
                        />
                    </fieldset>

                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Форма оплаты</legend>
                        
                        <div className={cn(style.Cell, style.halfWidth)}>
                            <Radio name={'test'} label={'Онлайн'}/>                        
                        </div>

                        <div className={cn(style.Cell, style.halfWidth)}>
                            <Radio name={'test'} label={'На месте'}/>
                            <Hint className={style.Hint}>Здесь будет подсказка</Hint>                        
                        </div>
                    </fieldset>
                </div>
            
                <div className={style.Column}>
                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Фактическая дата возврата велосипеда</legend>
                        <Input 
                            className={cn(style.Input, style.halfWidth)}
                            disabled
                            value="25.07.21"
                            required
                            name="name"
                        />
                        <Input
                            className={cn(style.Input, style.halfWidth)}
                            disabled
                            value="12:00"
                            name="phoneNumber"
                        />
                        <Input
                            className={style.Input}
                            placeholder="Возврат по адресу"
                            name="return"
                        />
                    </fieldset>

                    <div className={style.Rules}>
                        <h4 className={style.Heading}>Возвращение велосипеда</h4>
                        <p className={style.Answer}>На возвращение велосипеда даётся 1 час. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять
                            Важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач.
                        </p>
                        <h4 className={style.Heading}>Выбор адреса для возврата</h4>
                        <p className={style.Answer}>Вы также можете ввести адрес другого места, где мы заберем у вас велосипед. </p>
                    </div>
                </div>
            </div>

            <Button className={style.Button}>Забронировать</Button>
        </form>
      </Bubble>
    );
}

export { Booking }