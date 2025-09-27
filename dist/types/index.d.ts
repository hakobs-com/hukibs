export declare enum Size {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare enum Status {
    IDLE = "idle",
    LOADING = "loading",
    DEFAULT = "default",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    INFO = "info"
}
export declare enum NotificationType {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    INFO = "info"
}
export declare enum Icons {
    CALENDAR = "calendar",
    CLOCK = "clock",
    ARROW_LEFT = "arrow-left",
    ARROW_RIGHT = "arrow-right",
    ARROW_UP = "arrow-up",
    ARROW_DOWN = "arrow-down",
    PLUS = "plus",
    MINUS = "minus",
    CHECK = "check",
    CLOSE = "close",
    SEARCH = "search",
    FILTER = "filter",
    EDIT = "edit",
    DELETE = "delete",
    MENU = "menu",
    MORE = "more",
    SETTINGS = "settings",
    USER = "user",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
    SUCCESS = "success"
}
export interface BaseComponentProps {
    id?: string;
    class?: string | string[] | Record<string, boolean>;
    style?: string | Record<string, string>;
}
export type ComponentSize = Size;
export declare enum Colors {
    BACKGROUND = "background",
    FOREGROUND = "foreground",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    INFO = "info"
}
export declare const BaseColors: readonly ["primary", "secondary", "success", "warning", "error", "info"];
export declare const AllColors: readonly ["primary", "secondary", "success", "warning", "error", "info", "red", "orange", "yellow", "green", "blue", "indigo", "purple", "pink", "gray"];
export type BaseColor = typeof BaseColors[number];
export type AllColor = typeof AllColors[number];
//# sourceMappingURL=index.d.ts.map