import { Colors } from '../../../types';

export declare const ButtonSize: {
    readonly XSMALL: "xsmall";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];
export declare const ButtonVariant: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly OUTLINE: "outline";
    readonly GHOST: "ghost";
    readonly DANGER: "danger";
};
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
export declare const ButtonType: {
    readonly BUTTON: "button";
    readonly SUBMIT: "submit";
    readonly RESET: "reset";
};
export type ButtonType = (typeof ButtonType)[keyof typeof ButtonType];
/**
 * Props interface for Button component
 */
export interface ButtonProps {
    /** Button size variant */
    size?: ButtonSize;
    /** Button style variant */
    variant?: ButtonVariant;
    /** HTML button type attribute */
    type?: ButtonType;
    /** Icon name to display */
    icon?: string;
    /** Whether to show icon only (hide text) */
    iconOnly?: boolean;
    /** Position icon after text */
    iconAfter?: boolean;
    /** Whether button is disabled */
    disabled?: boolean;
    /** Whether button is in loading state */
    loading?: boolean;
    /** Make button full width */
    block?: boolean;
    /** Link URL for router-link */
    to?: string;
    /** External link URL */
    href?: string;
    /** HTML element type to render */
    element?: string;
    /** Custom color override */
    color?: Colors;
    /** Tooltip text to display on hover */
    tooltip?: string;
    fullWidth?: boolean;
}
//# sourceMappingURL=Button.model.d.ts.map