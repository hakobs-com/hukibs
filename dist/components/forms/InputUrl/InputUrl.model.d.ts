export interface InputUrlProps {
    /** URL value */
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
    /** Autocomplete attribute */
    autocomplete?: string;
    /** Validate URL format */
    validate?: boolean;
    /** Allowed protocols */
    allowedProtocols?: string[];
    /** Add https:// if missing */
    autoAddProtocol?: boolean;
    /** Show URL preview */
    showPreview?: boolean;
}
//# sourceMappingURL=InputUrl.model.d.ts.map