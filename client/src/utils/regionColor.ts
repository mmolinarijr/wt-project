import { Chips } from 'monday-ui-react-core';

const regionColor: Record<string, string> = {
    Africa: Chips.colors.PURPLE,
    Americas: Chips.colors.TEAL,
    Asia: Chips.colors.WORKING_ORANGE,
    Europe: Chips.colors.STUCK_RED,
    Oceania: Chips.colors.DONE_GREEN,
    Polar: Chips.colors.DARK_BLUE,
};

export const setRegionColor = (region: string) => {
    return regionColor[region];

};