import { ContextPanelConfig } from './ContextPanel.model';
import { Size } from '../../../types';

export interface ContextMenuItem {
    id: string;
    disabled: boolean;
    active: boolean;
    icon: string;
    label: string;
    link: string;
    action: (() => void) | undefined;
    items: Partial<ContextMenuItem>[];
    size: Size;
    type: 'default' | 'separator' | 'header' | 'icon-tile' | 'row';
}
export declare const ContextMenuItemDefault: Required<ContextMenuItem>;
export declare const ContextMenuPosition: {
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
export type ContextMenuPosition = (typeof ContextMenuPosition)[keyof typeof ContextMenuPosition];
export type ContextMenuConfig = ContextPanelConfig;
export declare const ContextMenuConfigDefault: Required<ContextPanelConfig>;
//# sourceMappingURL=ContextMenu.model.d.ts.map