import AsyncStorage from "@react-native-async-storage/async-storage";

import { SettingsType, FavouriteType } from "../../types";

type LocalDataType = SettingsType | FavouriteType[] | null;

const getLocalData = async (storageKey: string): Promise<LocalDataType> => {
  try {
    const favouritesJSON = await AsyncStorage.getItem(storageKey);
    if (favouritesJSON) {
      return JSON.parse(favouritesJSON);
    }
  } catch {}

  return null;
};

export default getLocalData;
