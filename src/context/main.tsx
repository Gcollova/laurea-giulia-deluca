import { ReactNode, createContext, useState } from "react";
import { Assistito } from "../models/assistito";

export interface MainContextI {
  assistito: Assistito | undefined;
  setAssistito: React.Dispatch<React.SetStateAction<Assistito | undefined>>;
}

export const MainContext = createContext<MainContextI>({} as MainContextI);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [assistito, setAssistito] = useState<Assistito>();

  return (
    <MainContext.Provider
      value={{
        assistito,
        setAssistito,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
