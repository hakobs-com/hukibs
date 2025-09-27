import { ComponentPublicInstance } from 'vue';
import { PopupOptions, PopupInstance } from './Popup.model';

export declare const popupRefs: Record<string, ComponentPublicInstance | null>;
export interface PopupService {
    popups: {
        value: PopupInstance[];
    };
    showPopup: (config: PopupOptions) => string;
    showFormPopup: (config: PopupOptions) => string;
    hidePopup: (id: string) => void;
    closePopup: (options: {
        id: string;
    }) => void;
    close: (id: string) => void;
    closeAllPopups: (excludeId?: string) => void;
    resePopupState: () => void;
}
export declare const popupService: PopupService;
//# sourceMappingURL=Popup.service.d.ts.map