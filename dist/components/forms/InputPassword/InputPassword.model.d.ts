export interface InputPasswordProps {
    /** Password value */
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
    /** Show password strength indicator */
    showStrength?: boolean;
    /** Minimum password length */
    minLength?: number;
    /** Require uppercase letters */
    requireUppercase?: boolean;
    /** Require lowercase letters */
    requireLowercase?: boolean;
    /** Require numbers */
    requireNumbers?: boolean;
    /** Require special characters */
    requireSpecial?: boolean;
}
//# sourceMappingURL=InputPassword.model.d.ts.map