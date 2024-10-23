
export interface SideCellPropsInterface {
    sideCellStyle: string;
    colorNumber?: string;
    optionStyle?: string;
    changeColor: (color: string) => void;
    pickedColor?: string;
}
