import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/unitDescription";
import { handleVerbosity, revertVerbosity } from "../hooks/handleVerbosity";

import getTheme from "../context/theme";

import { DescriptionType } from "../data/unitDescription";

type UniversalPickerProps = {
  componentKey: number;
  top?: number;
  left?: number;
  filter?: string[];
};

const UniversalPicker = ({
  componentKey,
  top = 150,
  left = 0,
  filter = [],
}: UniversalPickerProps) => {
  const {
    state: {
      konvertor,
      fromUnit,
      toUnit,
      universalPicker,
      measureType,
      settings,
    },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

  const { type } = universalPicker;

  // creating delay
  const [delayVisible, setDelayVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    type === "from"
      ? fromUnit[universalPicker.index!]
      : toUnit[universalPicker.index!]
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (delayVisible) {
      timeoutId = setTimeout(() => {
        dispatch({
          type: "work_universal_picker",
          payload: {
            type: "",
            index: -1,
            activeFromComponent: 0,
            calculatorTo: false,
          },
        });
        setDelayVisible(false);
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delayVisible, dispatch]);

  // ----------------------------------------

  const optionsSource =
    universalPicker.type === "from" ? fromUnit[componentKey][0] : toUnit[0];

  const findUnitKey = (x: string, description: DescriptionType) => {
    for (const key of Object.keys(description)) {
      const unitDescription = description[key];
      if (unitDescription.short.includes(x)) {
        return key;
      }
    }
  };

  let allOptions: string[] = [];

  if (filter.length === 0) {
    allOptions = description[findUnitKey(optionsSource, description)!].short;
  } else {
    allOptions = filter!.filter((op) =>
      description[findUnitKey(optionsSource, description)!].short.includes(op)
    );
  }

  let nextOption = allOptions;

  if (konvertor === "konvertor") {
    nextOption = getNextUnit(
      toUnit[universalPicker.index!],
      description[findUnitKey(optionsSource, description)!]
    );
  }

  const options = toUnit.length > 1 ? nextOption : allOptions;

  const optionsToDisplay = handleVerbosity(options, settings.verbose);

  const handleChange = (option: string | string[], type: string) => {
    if (type === "from") {
      dispatch({
        type: "change_FROM_unit",
        payload: {
          componentKey,
          value: option as string,
          iterator: universalPicker.index!,
        },
      });
    }

    if (type === "to") {
      dispatch({
        type: "change_TO_unit",
        payload: {
          componentKey,
          value: option as string,
          iterator: universalPicker.index!,
        },
      });
    }

    setSelectedValue(option as string);
    setDelayVisible(true);
  };

  const calculatorToVerbosity = () => {
    if (!universalPicker.calculatorTo) {
      return convert().describe(fromUnit[componentKey][0]).measure;
    }
    return convert().describe(toUnit[0]).measure;
  };

  return (
    <Picker
      style={[
        styles.picker,
        { top },
        { left },
        { backgroundColor: theme.gray1, shadowColor: theme.gray3 },
      ]}
      selectedValue={selectedValue}
      onValueChange={(option) => handleChange(option, type)}>
      {optionsToDisplay.map((option: string) => (
        <Picker.Item
          key={option}
          label={option}
          // value={option}
          value={revertVerbosity(
            option,
            settings.verbose,
            konvertor === "konvertor"
              ? measureType[0][0]
              : calculatorToVerbosity()
            // oof
          )}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 250,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 5,
  },
});

export default UniversalPicker;
