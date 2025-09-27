interface PopupOptions {
    component: any;
    id: string;
    props?: Record<string, any>;
    onClose?: () => void;
}
interface PopupState {
    isOpen: boolean;
    component: any | null;
    props: Record<string, any>;
    onClose?: () => void;
}
export declare const popupService: {
    showPopup(options: PopupOptions): void;
    hidePopup(id: string): void;
    gePopup(id: string): PopupState;
    isOpen(id: string): boolean;
};
export {};
//# sourceMappingURL=Popup.service.d.ts.map