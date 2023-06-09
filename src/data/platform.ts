//@ts-nocheck
import { Platform } from "react-native";

type PlatformType = "android" | "ios";

const platform = Platform.OS;
export const isPad = Platform.isPad;

// const platform: PlatformType = "android";

export default platform;
