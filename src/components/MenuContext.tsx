import React, { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

interface MenuProviderProps {
  children: ReactNode;
  value: MenuContextType;
}

const MenuProvider = ({ children, value }: MenuProviderProps) => {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export { MenuContext };

export default MenuProvider;
