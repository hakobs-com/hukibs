export declare enum EventChannel {
    FORM = "form",
    GLOBAL = "global",
    COMPONENT = "component"
}
export declare enum EventAction {
    FOCUS = "focus",
    BLUR = "blur",
    UPDATE = "update",
    CHANGE = "change",
    SUBMIT = "submit",
    RESET = "reset"
}
export interface EventData {
    channel?: EventChannel;
    action: EventAction;
    data: any;
}
export interface AppEvents {
    'app:key': {
        key: string;
    };
    'app:popup-open': {
        component: any;
        id?: string;
        [key: string]: any;
    };
    'app:popup-close': {
        id?: string;
    };
    'app:popup-force-close': never;
}
type EventCallback = (data: any) => void;
declare class EventBus {
    private events;
    constructor();
    onChannel(channel: EventChannel, callback: EventCallback): void;
    offChannel(channel: EventChannel, callback: EventCallback): void;
    emitChannel(channel: EventChannel, data: any): void;
    on(event: string, callback: EventCallback): void;
    off(event: string, callback: EventCallback): void;
    emit(event: string, data: any): void;
    clear(key?: string | EventChannel): void;
}
export declare const eventBus: EventBus;
export declare function useEventBus(): EventBus;
export {};
//# sourceMappingURL=eventBus.d.ts.map