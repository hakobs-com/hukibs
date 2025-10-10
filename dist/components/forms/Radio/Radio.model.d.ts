export interface RadioProps {
    /** Radio value */
    modelValue?: string | number | boolean;
    /** Radio option value */
    value?: string | number | boolean;
    /** Radio size */
    size?: 'small' | 'medium' | 'large';
    /** Radio label */
    label?: string;
    /** Help text */
    description?: string;
    /** Error message or array of error messages */
    error?: string | string[];
    /** Disabled state */
    disabled?: boolean;
    /** Required field */
    required?: boolean;
    /** Radio color variant */
    color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    /** Show ripple effect */
    ripple?: boolean;
    /** Custom CSS class */
    class?: string;
}
export interface RadioOption {
    /** Option value */
    value: string | number | boolean;
    /** Option label */
    label: string;
    /** Option description */
    description?: string;
    /** Disabled state */
    disabled?: boolean;
}
export interface RadioGroupProps {
    /** Selected value */
    modelValue?: string | number | boolean;
    /** Radio options */
    options: (string | number | boolean | RadioOption)[];
    /** Radio size */
    size?: 'small' | 'medium' | 'large';
    /** Group label */
    label?: string;
    /** Help text */
    description?: string;
    /** Error message or array of error messages */
    error?: string | string[];
    /** Disabled state */
    disabled?: boolean;
    /** Required field */
    required?: boolean;
    /** Radio color variant */
    color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    /** Layout direction */
    direction?: 'vertical' | 'horizontal';
    /** Show ripple effect */
    ripple?: boolean;
    /** Custom CSS class */
    class?: string;
}
//# sourceMappingURL=Radio.model.d.ts.map