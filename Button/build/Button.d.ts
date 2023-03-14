/// <reference types="react" />
interface IProps {
    text: string;
    options?: {
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
        icon?: string;
        iconAltText?: string;
    };
}
export declare const Button: ({ text, options }: IProps) => JSX.Element;
export {};
