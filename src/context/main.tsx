import { ReactNode, createContext, useState } from "react";
import { Assistito } from "../models/assistito";
import fake_data from "../fake_data/assistiti.json";
export interface MainContextI {
  assistito: Assistito | undefined;
  setAssistito: React.Dispatch<React.SetStateAction<Assistito | undefined>>;
  page:IPage | undefined;
  setPage:React.Dispatch<React.SetStateAction<IPage | undefined>>;
}
const pages = ["pratiche",'nuova_pratica','schede_allegate','team_legale'] as const;

export type IPage = (typeof pages)[number];

export const MainContext = createContext<MainContextI>({} as MainContextI);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [assistito, setAssistito] = useState<Assistito>(fake_data?.length > 0 && fake_data[0]);
  const [page,setPage] = useState<IPage | undefined>('pratiche');

  return (
    <MainContext.Provider
      value={{
        assistito,
        setAssistito,
        page,
        setPage
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
