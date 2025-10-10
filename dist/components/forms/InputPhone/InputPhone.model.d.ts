export interface InputPhoneProps {
    /** Phone number value */
    modelValue?: string;
    /** Input size */
    size?: 'small' | 'medium' | 'large';
    /** Visual variant */
    variant?: 'default' | 'ghost';
    /** Input label */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Help text */
    description?: string;
    /** Error message or array of error messages */
    error?: string | string[];
    /** Disabled state */
    disabled?: boolean;
    /** Readonly state */
    readonly?: boolean;
    /** Required field */
    required?: boolean;
    /** Show clear button */
    clearable?: boolean;
    /** Default country code */
    defaultCountry?: string;
    /** Show country selector */
    showCountrySelector?: boolean;
    /** Auto-format phone number */
    autoFormat?: boolean;
    /** International format */
    international?: boolean;
}
//# sourceMappingURL=InputPhone.model.d.ts.map