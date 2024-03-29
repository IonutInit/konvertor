import AsyncStorage from "@react-native-async-storage/async-storage";
import { favouritesKey, settingsKey } from "../data/storageKeys";

import converter from "../lib/converter";
import themeNames from "./themeNames";

import { AppStateType, ActionType, FavouriteType } from "../../types";

const reducer = (state: AppStateType, action: ActionType): AppStateType => {
  switch (action.type) {
    case "change_konvertor":
      return { ...state, konvertor: action.payload, fromValue: [] };

    case "toggle_extendedList":
      return {
        ...state,
        settings: {
          ...state.settings,
          extendedList: !state.settings.extendedList,
        },
      };

    case "toggle_addition":
      return { ...state, addition: !state.addition };

    case "change_measure":
      let measureType = [...state.measureType];
      let measureName = [...state.measureName];

      measureType[0] = [action.payload.measure];
      measureName[0] = [action.payload.name];

      return {
        ...state,
        measureType,
        measureName,
        fromUnit: [[], []],
        fromValue: [[], []],
        toUnit: [],
      };

    // PICKER

    case "work_universal_picker":
      return {
        ...state,
        universalPicker: {
          ...state.universalPicker,
          type: action.payload.type,
          index: action.payload.index,
          activeFromComponent: action.payload.activeFromComponent,
          calculatorTo: action.payload.calculatorTo,
        },
      };

    case "toggle_universal_picker_TO":
      return {
        ...state,
        universalPicker: {
          ...state.universalPicker,
          calculatorTo: action.payload,
        },
      };

    // CHANGE UNITS AND VALUES

    case "add_FROM_unit":
      const fromPosition =
        action.payload.componentKey === undefined
          ? 0
          : action.payload.componentKey;
      let value = !state.fromValue[fromPosition].length ? 1 : 0;
      return {
        ...state,
        fromUnit: state.fromUnit.map((unit, index) =>
          index === fromPosition ? [...unit, action.payload.unit] : unit
        ),
        fromValue: state.fromValue.map((val, index) =>
          index === action.payload.componentKey ? [...val, value] : val
        ),
      };

    case "add_TO_unit":
      return { ...state, toUnit: [...state.toUnit, action.payload] };

    case "change_FROM_unit":
      const updatedFromUnit = state.fromUnit.map((subArray, index) => {
        if (index === action.payload.componentKey) {
          const updatedSubArray = subArray.map((unit, subIndex) =>
            subIndex === action.payload.iterator ? action.payload.value : unit
          );
          return updatedSubArray;
        }
        return subArray;
      });
      return { ...state, fromUnit: updatedFromUnit };

    case "change_TO_unit":
      const updatedToUnit = state.toUnit.map((unit, index) =>
        index === action.payload.iterator ? action.payload.value : unit
      );
      return { ...state, toUnit: updatedToUnit };

    case "change_FROM_value":
      const updatedFromValue = state.fromValue.map((subArray, index) => {
        if (index === action.payload.componentKey) {
          const updatedSubArray = subArray.map((value, subIndex) =>
            subIndex === action.payload.iterator ? action.payload.value : value
          );
          return updatedSubArray;
        }
        return subArray;
      });
      return { ...state, fromValue: updatedFromValue };

    case "remove_FROM_value":
      const fromUnitRemovedUnit = state.fromUnit.map((subArray, index) => {
        if (index === action.payload[0]) {
          const updatedSubArray = subArray.filter(
            (_, subIndex) => subIndex !== action.payload[1]
          );
          return updatedSubArray;
        }
        return subArray;
      });

      const fromUnitRemovedValue = state.fromValue.map((subArray, index) => {
        if (index === action.payload[1]) {
          const updatedSubArray = subArray.filter(
            (_, subIndex) => subIndex !== action.payload[1]
          );
          return updatedSubArray;
        }
        return subArray;
      });
      return {
        ...state,
        fromUnit: fromUnitRemovedUnit,
        fromValue: fromUnitRemovedValue,
      };

    case "remove_TO_value":
      const toUnitRemovedValue = state.toUnit.filter(
        (unit, index) => index !== action.payload[1]
      );
      return {
        ...state,
        toUnit: toUnitRemovedValue,
      };

    case "switch":
      const result = converter(
        state.addition,
        state.fromValue[0],
        state.fromUnit[0],
        state.fromUnit[0][0],
        state.toUnit
      );

      const switchedFromUnit = [...state.fromUnit];
      switchedFromUnit[0] = action.payload.sourceToUnit;

      const switchedFromValue = [...state.fromValue];
      switchedFromValue[0] = result;

      return {
        ...state,
        fromUnit: switchedFromUnit,
        fromValue: switchedFromValue,
        toUnit: action.payload.sourceFromUnit,
      };

    // FAVOURITES
    case "add_to_favourites":
      const updatedFavourites2 = {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };

      try {
        const jsonValue = JSON.stringify(updatedFavourites2.favourites);
        AsyncStorage.setItem(favouritesKey, jsonValue);
      } catch (e) {}

      return updatedFavourites2;

    case "launch_favourite":
      function createBlankArray(arr: string[][]) {
        return arr.map((subArray) => Array(subArray.length).fill(0));
      }
      return {
        ...state,
        measureType: [action.payload.measureType],
        measureName: [action.payload.measureName],
        fromUnit: action.payload.fromUnit,
        fromValue: createBlankArray(action.payload.fromUnit),
        toUnit: [action.payload.toUnit],
      };

    case "initialise_favourites":
      return {
        ...state,
        favourites: action.payload as FavouriteType[],
        init: 1,
      };

    case "remove_favourite":
      const updatedFavourites = state.favourites.filter(
        (fav, i) => i !== action.payload
      );

      try {
        const jsonValue = JSON.stringify(updatedFavourites);
        AsyncStorage.setItem(favouritesKey, jsonValue);
      } catch (e) {}

      return {
        ...state,
        favourites: updatedFavourites,
        init: 1,
      };

    // SETTINGS

    case "change_settings":
      const { settingType, settingValue } = action.payload;

      const updatedSettings = {
        ...state.settings,
        [settingType]: settingValue,
      };

      try {
        const jsonValue = JSON.stringify(updatedSettings);
        AsyncStorage.setItem(settingsKey, jsonValue);
      } catch (e) {}

      return {
        ...state,
        settings: updatedSettings,
      };

    case "change_decimals":
      const i = action.payload === "plus" ? 1 : -1;
      const decimals = state.settings.decimals + i;

      const updatedDecimals = {
        ...state.settings,
        decimals,
      };

      try {
        const jsonValue = JSON.stringify(updatedDecimals);
        AsyncStorage.setItem(settingsKey, jsonValue);
      } catch (e) {}

      return {
        ...state,
        settings: updatedDecimals,
      };

    case "toggle_favourites_on_home":
      const currentState = state.settings.favouritesOnHome;
      const updatedFavouritesOnHome = !currentState;

      try {
        const updatedSettings = {
          ...state.settings,
          favouritesOnHome: updatedFavouritesOnHome,
        };
        const jsonValue = JSON.stringify(updatedSettings);
        AsyncStorage.setItem(settingsKey, jsonValue);
        return {
          ...state,
          settings: updatedSettings,
        };
      } catch (e) {}

      return state;
    //this one returns the initial state if the async fails
    //maybe I should do the same for all asyncs

    case "change_theme":
      const themes = Object.values(themeNames);

      const themeValue = themes.indexOf(action.payload);

      const updatedTheme = {
        ...state.settings,
        theme: themeValue,
      };

      try {
        const jsonValue = JSON.stringify(updatedTheme);
        AsyncStorage.setItem(settingsKey, jsonValue);
      } catch (e) {}

      return {
        ...state,
        settings: updatedTheme,
      };

    case "initialise_settings":
      return {
        ...state,
        settings: action.payload,
      };

    case "change_tab":
      return {
        ...state,
        activeTab: action.payload,
      };

    // TYPING
    case "dispatch_typing":
      return {
        ...state,
        konvertor: action.payload.konvertor,
        fromUnit: action.payload.fromUnit,
        fromValue: action.payload.fromValue,
        measureType: action.payload.measureType,
        measureName: [action.payload.measureName],
        toUnit: action.payload.toUnit,
      };

    case "toggle_typing_input_messages":
      const initialSetting = state.settings.typingInputMessages;

      const updatedSetting = {
        ...state.settings,
        typingInputMessages: !initialSetting,
      };

      try {
        const jsonValue = JSON.stringify(updatedSetting);
        AsyncStorage.setItem(settingsKey, jsonValue);
      } catch (e) {}

      return {
        ...state,
        settings: updatedSetting,
      };

    default:
      return state;
  }
};

export default reducer;
