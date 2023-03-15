/// <reference types="react" />
interface IProps {
    content: object & {
        title: string;
        bot: string;
        setTheme(arg0: object): void;
        theme: {
            currentTheme: string;
            isLight: boolean;
        };
    };
}
export declare const SampleUI: ({ content }: IProps) => JSX.Element;
export default SampleUI;
