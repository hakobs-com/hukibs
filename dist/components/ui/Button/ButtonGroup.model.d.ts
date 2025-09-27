/**
 * ButtonGroup component type definitions and interfaces
 */
export declare const ButtonGroupDirection: {
    readonly ROW: "row";
    readonly COLUMN: "column";
};
export type ButtonGroupDirection = (typeof ButtonGroupDirection)[keyof typeof ButtonGroupDirection];
export declare const ButtonGroupGap: {
    readonly NONE: "none";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export type ButtonGroupGap = (typeof ButtonGroupGap)[keyof typeof ButtonGroupGap];
export declare const ButtonGroupAlign: {
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly STRETCH: "stretch";
};
export type ButtonGroupAlign = (typeof ButtonGroupAlign)[keyof typeof ButtonGroupAlign];
export declare const ButtonGroupJustify: {
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly BETWEEN: "between";
    readonly AROUND: "around";
};
export type ButtonGroupJustify = (typeof ButtonGroupJustify)[keyof typeof ButtonGroupJustify];
/**
 * Props interface for ButtonGroup component
 */
export interface ButtonGroupProps {
    /** Direction of button layout */
    direction?: ButtonGroupDirection | 'row' | 'column';
    /** Whether buttons should fill available width */
    fluid?: boolean;
    /** Gap size between buttons */
    gap?: ButtonGroupGap | 'none' | 'small' | 'medium' | 'large';
    /** Vertical alignment of buttons */
    align?: ButtonGroupAlign | 'start' | 'center' | 'end' | 'stretch';
    /** Horizontal justification of buttons */
    justify?: ButtonGroupJustify | 'start' | 'center' | 'end' | 'between' | 'around';
    /** Whether to wrap buttons on overflow */
    wrap?: boolean;
}
//# sourceMappingURL=ButtonGroup.model.d.ts.map