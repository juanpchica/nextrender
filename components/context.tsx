import { FC, createContext, useContext } from "react";

const PortalContext = createContext("juan");

export const PortalProvider: FC = ({ children }) => {
  return (
    <PortalContext.Provider value='testing var'>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortalProvider = () => useContext(PortalContext);
