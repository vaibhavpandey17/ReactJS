import React, { createContext, useEffect, useState } from "react";
import _ from "lodash";

const defaultSettings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: "DARK",
};




const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => {},
});



export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const [acceptTandC, SetAcceptTandC] = useState(false);

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = _.merge({}, currentSettings, update);

    setCurrentSettings(mergedSettings);

  };




  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
        acceptTandC,
        
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
