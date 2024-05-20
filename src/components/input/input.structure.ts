import { IFormDataProps } from "../contact/contact.structure";

export interface IInputProps {
    placeHolder: string
    value: string
    isMessageType?: boolean
    setValue: React.Dispatch<React.SetStateAction<IFormDataProps>>;
    fieldName: keyof IFormDataProps;
}