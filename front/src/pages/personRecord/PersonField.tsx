import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch, FocusEvent, SetStateAction, useCallback } from "react";

export interface PersonFieldProps {
    fieldValue: string,
    setFieldValue: Dispatch<SetStateAction<string>>,
    fieldId: string,
    fieldLabel: string,
    fillZipCode?(value: string): void
}

const PersonField = ({ fieldId, fieldLabel, fieldValue, setFieldValue, fillZipCode }: PersonFieldProps) => {

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const target: HTMLInputElement = event.target;
        setFieldValue(target.value);
    }, [setFieldValue]);

    const handleInputBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
        const target: HTMLInputElement = event.target;
        const fieldValue = target.value;
        fillZipCode?.(fieldValue);
    }, [fillZipCode]);

    const fieldEvents = {
        onChange: handleInputChange,
        onBlur: handleInputBlur
    }

    return (<TextField value={fieldValue} id={fieldId} label={fieldLabel} {...fieldEvents} />);
}

export default PersonField;