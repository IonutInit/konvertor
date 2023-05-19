import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units"

const UniversalPicker = () => {
    const {state: {fromUnit, universalPicker}, dispatch} = useAppContext()
    const options = convert().from(fromUnit[0]).possibilities();

    const handleChange = (option: string) => {
        dispatch({
            type: "change_FROM_unit",
            payload: {
                value: option,
                iterator: universalPicker.index
            }
        })
        dispatch({
            type: "work_picker",
            payload: {
                type: ""
            }
        })

    }

     return(
        <Picker
        selectedValue={fromUnit[universalPicker.index]}
            onValueChange={(option) => handleChange(option)}
        >
                  {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
        </Picker>
    )
}

export default UniversalPicker;