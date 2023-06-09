import * as React from "react";

import { StyleSheet, View } from "react-native";

import useAppContext from "../context/useAppContext";

import Input from "./Input";
import PickerComponent from "./Picker";
import RemoveUnit from "./RemoveUnit";
import UniversalPickerUnit from "./UniversalPickerUnit";

import handleInputChange from "../hooks/handleInputChange";
import handleFromUnitChange from "../hooks/handleFromUnitChange";

import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts";
import platform from "../data/platform";

import displaySwitchedValues from "../lib/displaySwitchedValues";

import { handleVerbosity } from "../hooks/handleVerbosity";
import getPickerUnit from "../lib/getPickerUnit";
import description from "../data/unitDescription";

type FromComponentProps = {
  measureType: string;
  componentKey: number;
  filter?: string[];
};

const FromComponent = ({
  measureType,
  componentKey,
  filter = [],
}: FromComponentProps) => {
  const {
    state: { fromUnit, fromValue, settings },
    dispatch,
  } = useAppContext();

  const elements = fromUnit[componentKey].map((unit: string, i: number) => {
    let options: string[] = [];

    if (filter.length! === 0) {
      options = convert().possibilities(measureType);
    } else {
      options = filter!.filter((op) =>
        description[measureType].short.includes(op)
      );
    }

    const optionsToDisplay = handleVerbosity(options, settings.verbose);

    return (
      <React.Fragment key={i}>
        <View style={styles.container}>
          <Input
            componentKey={componentKey}
            handleInputChange={(input: string) =>
              handleInputChange(componentKey, dispatch, input, i)
            }
            i={i}
            value={displaySwitchedValues(
              fromValue[componentKey][i] as number,
              settings.decimals
            ).toString()}
          />

          {platform !== "ios" && (
            <PickerComponent
              componentKey={componentKey}
              onChange={handleFromUnitChange}
              options={optionsToDisplay}
              unit={getPickerUnit(fromUnit[componentKey][0], measureType)} //if it has value [1], at least it works when value is updated
              i={i}
              measureType={measureType}
              verbosity={settings.verbose}
            />
          )}

          {platform === "ios" && (
            <UniversalPickerUnit
              unit={unit}
              i={i}
              type="from"
              componentKey={componentKey}
            />
          )}

          <RemoveUnit componentKey={componentKey} i={i} type={"from"} />
        </View>
      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginHorizontal: 10,
    paddingVertical: 5,
  },
});

export default FromComponent;
