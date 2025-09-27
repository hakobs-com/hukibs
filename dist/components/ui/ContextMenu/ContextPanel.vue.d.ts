import { PropType } from 'vue';
import { ContextPanelConfig } from './ContextPanel.model';

declare function __VLS_template(): {
    default?(_: {}): any;
    content?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<Partial<ContextPanelConfig>>;
        default: () => void;
    };
}>, {
    toggle: (e?: MouseEvent | PointerEvent) => void;
    close: () => boolean;
    open: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    config: {
        type: PropType<Partial<ContextPanelConfig>>;
        default: () => void;
    };
}>> & Readonly<{}>, {
    config: Partial<ContextPanelConfig>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ContextPanel.vue.d.ts.map