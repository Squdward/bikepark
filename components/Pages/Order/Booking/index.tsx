import style from "./Booking.module.css";
import { Input } from "components/UI/Input/Input";
import { Bubble } from "components/UI/Bubble/Bubble";
import cn from "classnames"
import { Radio } from "components/UI/Radio";
import { Hint } from "components/UI/Hint/Hint";
import { Button } from "components/UI/Button/Button";
import { Controller, useForm } from "react-hook-form";

const Booking = () => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm({
        defaultValues: {
            name: "",
            phoneNumber: "",
            adres: "",
            payment: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
      <Bubble tail={true} className={style.Buble}>
        <form className={style.Form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.Inner}>
                <div className={style.Column}>
                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Контактные данные</legend>

                        <Controller
                            name={"name"}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => <Input placeholder="Имя*" className={style.Input} {...field}/>}
                        />

                        <Controller
                            name={"phoneNumber"}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => <Input placeholder="Номер телефона*" className={style.Input} {...field}/>}
                        />
                    </fieldset>

                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Информация о доставке</legend>
                        
                        <Controller
                            name={"adres"}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => <Input placeholder="Адрес*" className={style.Input} {...field}/>}
                        />
                    </fieldset>

                    <fieldset className={style.Group}>
                        <legend className={style.Label}>Форма оплаты</legend>
                        
                        <div className={cn(style.Cell, style.halfWidth)}>
                        <Controller
                            name={"payment"}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => <Radio label={'Онлайн'} {...field}/>}
                            />
                            {/* <Radio name={'test'} label={'Онлайн'}/>                         */}
                        </div>

                        <div className={cn(style.Cell, style.halfWidth)}>
                        <Controller
                            name={"payment"}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => <Radio label={"На месте"} {...field}/>}
                            />
                            {/* <Radio name={'test'} label={'На месте'}/> */}
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