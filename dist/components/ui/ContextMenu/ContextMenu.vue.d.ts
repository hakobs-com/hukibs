import { PropType } from 'vue';
import { ContextMenuConfig } from './ContextMenu.model';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<Partial<ContextMenuConfig>>;
        default: () => void;
    };
}>, {
    close: () => boolean | undefined;
    open: () => void | undefined;
    toggle: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<Partial<ContextMenuConfig>>;
        default: () => void;
    };
}>> & Readonly<{}>, {
    config: Partial<import('./ContextPanel.model').ContextPanelConfig>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ContextMenu.vue.d.ts.map