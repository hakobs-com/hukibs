import { Size } from '../../../types';
import { ContextMenuItem } from './ContextMenu.model';

export declare const ContextPanelClickMode: {
    readonly SHORT: "short";
    readonly LONG: "long";
    readonly RIGHT: "right";
};
export type ContextPanelClickMode = (typeof ContextPanelClickMode)[keyof typeof ContextPanelClickMode];
export declare const ContextPanelPosition: {
    BOTTOM_CENTER: string;
    BOTTOM_RIGHT: string;
    BOTTOM_LEFT: string;
    BOTTOM_ALIGN_RIGHT: string;
    BOTTOM_ALIGN_LEFT: string;
    TOP_CENTER: string;
    TOP_LEFT: string;
    TOP_RIGHT: string;
    TOP_ALIGN_RIGHT: string;
    TOP_ALIGN_LEFT: string;
    CLICK: string;
};
export type ContextPanelPosition = (typeof ContextPanelPosition)[keyof typeof ContextPanelPosition];
export interface ContextPanelConfig {
    id: string;
    position: ContextPanelPosition;
    clickMode: ContextPanelClickMode;
    pressTime: number;
    menu: Partial<ContextMenuItem>[];
    vibrate: boolean;
    disabled: boolean;
    size: Size;
}
export declare const ContextPanelConfigDefault: Required<ContextPanelConfig>;
//# sourceMappingURL=ContextPanel.model.d.ts.map