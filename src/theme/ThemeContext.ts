import React from 'react';

interface ColorContextSchema {
  toggleColorMode: () => void;
}
export const ThemeContext = React.createContext<ColorContextSchema>({} as ColorContextSchema);
