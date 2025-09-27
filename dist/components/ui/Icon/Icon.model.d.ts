export interface IconProps {
    /**
     * Icon name
     */
    name: string;
    /**
     * Size variant of the icon
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large' | 'xl';
    /**
     * Color variant of the icon
     */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /**
     * Accessibility label for screen readers
     */
    ariaLabel?: string;
}
export declare enum IconSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XL = "xl"
}
export declare enum IconColor {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
//# sourceMappingURL=Icon.model.d.ts.map