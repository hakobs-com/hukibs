import { Slot, Component, VNode } from 'vue';
import { Colors } from '../../../types';

export declare const PopupPosition: {
    CENTER: string;
    LEFT: string;
    RIGHT: string;
};
export type PopupPosition = (typeof PopupPosition)[keyof typeof PopupPosition];
export interface PopupAction {
    id: string;
    label: string;
    icon?: string;
    type?: 'default' | 'outline' | 'ghost';
    color?: Colors;
    disabled?: boolean;
    loading?: boolean;
    action: () => void;
}
export interface PopupOptions {
    component: Component | Slot<any> | undefined;
    footer?: Component;
    header?: Component;
    actions?: PopupAction[];
    props?: Record<string, any>;
    onClose?: () => void;
    onCallback?: (data: Object) => void;
    title?: string;
    description?: string;
    config?: {
        background?: boolean;
        position?: 'center' | 'bottom' | 'top';
        canClose?: boolean;
        width?: string;
        closingTimeout?: number;
    };
    id?: string;
    closePopups?: boolean;
    slots?: Record<string, () => VNode>;
    on?: Record<string, (...args: any[]) => void>;
}
export interface PopupInstance {
    id: string;
    component: Component;
    footer?: Component;
    header?: Component;
    actions?: PopupAction[];
    title: string;
    description: string;
    props: Record<string, any>;
    onClose?: () => void;
    onCallback?: (data: Object) => void;
    openedTime: number;
    slots?: Record<string, () => VNode>;
    events?: Record<string, (...args: any[]) => void>;
    config: {
        canClose?: boolean;
        hasBackground: boolean;
        position: string;
        width: string;
        closingTimeout: number;
    };
    state: {
        closing: boolean;
    };
}
//# sourceMappingURL=Popup.model.d.ts.map