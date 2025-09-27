import { ToastPosition, ToastType, ToastConfig } from './Toast.model';

export interface ToastOptions {
    message: string;
    title?: string;
    icon?: string;
    duration?: number;
    position?: ToastPosition;
    type?: ToastType;
    dismissible?: boolean;
    onClose?: () => void;
    id?: string;
}
export interface ToastInstance extends ToastConfig {
    id: string;
    openedTime: number;
    state: {
        closing: boolean;
    };
    onClose?: () => void;
}
declare const useToastService: () => {
    toasts: import('vue').Ref<{
        id: string;
        openedTime: number;
        state: {
            closing: boolean;
        };
        onClose?: (() => void) | undefined;
        title?: string | undefined;
        message: string;
        type?: ToastType | undefined;
        position?: ToastPosition | undefined;
        duration?: number | undefined;
        dismissible?: boolean | undefined;
        icon?: string | undefined;
    }[], ToastInstance[] | {
        id: string;
        openedTime: number;
        state: {
            closing: boolean;
        };
        onClose?: (() => void) | undefined;
        title?: string | undefined;
        message: string;
        type?: ToastType | undefined;
        position?: ToastPosition | undefined;
        duration?: number | undefined;
        dismissible?: boolean | undefined;
        icon?: string | undefined;
    }[]>;
    show: (opts: ToastOptions) => string;
    hide: (id: string) => void;
    hideAll: () => void;
};
export declare const toastService: {
    toasts: import('vue').Ref<{
        id: string;
        openedTime: number;
        state: {
            closing: boolean;
        };
        onClose?: (() => void) | undefined;
        title?: string | undefined;
        message: string;
        type?: ToastType | undefined;
        position?: ToastPosition | undefined;
        duration?: number | undefined;
        dismissible?: boolean | undefined;
        icon?: string | undefined;
    }[], ToastInstance[] | {
        id: string;
        openedTime: number;
        state: {
            closing: boolean;
        };
        onClose?: (() => void) | undefined;
        title?: string | undefined;
        message: string;
        type?: ToastType | undefined;
        position?: ToastPosition | undefined;
        duration?: number | undefined;
        dismissible?: boolean | undefined;
        icon?: string | undefined;
    }[]>;
    show: (opts: ToastOptions) => string;
    hide: (id: string) => void;
    hideAll: () => void;
};
export type ToastService = ReturnType<typeof useToastService>;
export {};
//# sourceMappingURL=Toast.service.d.ts.map