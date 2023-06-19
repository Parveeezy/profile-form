import React, { ChangeEvent } from 'react';

type CheckboxPropsType = {
    items: Array<{ value: number, label: string }>,
    value: Array<number>,
    label: string,
    onChange: (e: number[]) => void
}

const CheckboxUI = ({ items, value, label, onChange }: CheckboxPropsType) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>, itemValue: number) => {
        if (e.target.checked && !value.includes(itemValue)) {
            onChange([...value, itemValue]);
        }

        if (!e.target.checked && value.includes(itemValue)) {
            onChange(value.filter(item => item !== itemValue));
        }
    };

    return (
        <div>
            <label>{label}</label>
            {items.map((item) => (
                <div key={item.value}>
                    <input
                        type='checkbox'
                        id={`field-checkbox-group-option-${item.value}`}
                        value={item.value}
                        onChange={e => handleChange(e, item.value)}
                        checked={value.includes(item.value)}
                    />

                    <label htmlFor={`field-checkbox-group-option-${item.value}`}>{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxUI;