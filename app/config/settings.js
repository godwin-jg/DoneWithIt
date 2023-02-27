import Constants from "expo-constants";
const baseUrl = process.env.baseUrl || "192.168.137.1";
const port = process.env.port

const settings = {
  dev: {
    apiUrl: `http:/${baseUrl}:9000/api`,
  },
  staging: {
    apiUrl: "http:/${baseUrl}:9000/api",
  },
  prod: {
    apiUrl: "http:/${baseUrl}:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
