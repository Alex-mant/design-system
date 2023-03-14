/// <reference types="react" />
interface IStyledProps {
    display?: string;
    background?: string;
    color?: string;
    hoverColor?: string;
    hoverBackground?: string;
    disabled?: boolean;
    iconSide?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: number;
    lineHeight?: string;
    border?: string;
    padding?: string;
}
interface IProps {
    text: string;
    options?: IStyledProps & {
        icon?: string;
        iconAltText?: string;
    };
}
export declare const Button: ({ text, options }: IProps) => JSX.Element;
export {};
