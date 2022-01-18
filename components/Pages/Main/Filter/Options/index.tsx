import { DayRange } from "components/UI/DayRange/DayRange";
import { Select } from "components/UI/Select/Select";
import { Switch } from "components/UI/Switch/Switch";
import { useAppSelector } from "hook/Redux";
import { FC} from "react";
import { useDispatch } from "react-redux";
import { serializeData, serializeSelect } from "redux/MainFilter/index.slice";
import style from "../../Main.module.css"

const Options: FC<{validationInput: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({validationInput}) => {
    const form = useAppSelector( state => state.MainFilter);
    
    const dispatch = useDispatch();
 
    
    const SwitchOption = [
        {
          value: "По дням",
          placeholder: "По дням",
        },
        {
          value: "2 часа",
          placeholder: "2 часа",
        },
      ];
    
    const selectOption = [
    {
        id: 1,
        value: "По Адресу",
        label: "По Адресу",
    },
    {
        id: 2,
        value: "Самовывоз",
        label: "Самовывоз",
    },
    ];

    const select = (val: string): void => {
      dispatch(serializeSelect(val));
    };

    const data = (value: string, name: string) => {
    dispatch(serializeData({
        name,
        value,
    }));
    };

    return (
        <div className={style.Options}>
          <Switch
            placeholder="Тип аренды"
            option={SwitchOption}
            defaultValue={"По дням"}
            selected={form.rentType}
            name={"rentType"}
            onChange={validationInput}
          />

          <DayRange
            startDate={form.startDate}
            endDate={form.endDate}
            name={"startDate"}
            onChange={data}
          />

          <Select
            label={"Доставка"}
            defaultOption={form.delivery}
            options={selectOption}
            onChange={select}
          />
        </div>
    );
};


export {Options};