export declare const TooltipPosition: {
    readonly TOP: "top";
    readonly RIGHT: "right";
    readonly BOTTOM: "bottom";
    readonly LEFT: "left";
};
export type TooltipPosition = (typeof TooltipPosition)[keyof typeof TooltipPosition];
export interface TooltipProps {
    position?: TooltipPosition;
    delay?: number;
    color?: string;
}
//# sourceMappingURL=Tooltip.model.d.ts.map