export interface ToggleProps {
    /** Toggle value */
    modelValue?: boolean;
    /** Toggle size */
    size?: 'small' | 'medium' | 'large';
    /** Toggle label */
    label?: string;
    /** Help text */
    description?: string;
    /** Error message or array of error messages */
    error?: string | string[];
    /** Disabled state */
    disabled?: boolean;
    /** Required field */
    required?: boolean;
    /** Toggle color variant */
    color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    /** Show ripple effect */
    ripple?: boolean;
    /** Custom labels for on/off states */
    labelOn?: string;
    labelOff?: string;
    /** Show on/off labels */
    showLabels?: boolean;
    /** Custom CSS class */
    class?: string;
}
//# sourceMappingURL=Toggle.model.d.ts.map