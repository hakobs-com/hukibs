export declare const ToastPosition: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly TOP_LEFT: "top-left";
    readonly TOP_RIGHT: "top-right";
    readonly BOTTOM_LEFT: "bottom-left";
    readonly BOTTOM_RIGHT: "bottom-right";
};
export type ToastPosition = (typeof ToastPosition)[keyof typeof ToastPosition];
export declare const ToastType: {
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly WARNING: "warning";
    readonly INFO: "info";
    readonly DEFAULT: "default";
};
export type ToastType = (typeof ToastType)[keyof typeof ToastType];
export interface ToastConfig {
    id?: string;
    title?: string;
    message: string;
    type?: ToastType;
    position?: ToastPosition;
    duration?: number;
    dismissible?: boolean;
    icon?: string;
}
export declare const ToastConfigDefault: ToastConfig;
//# sourceMappingURL=Toast.model.d.ts.map