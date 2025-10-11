import { ContentSectionProps } from './ContentSection.model';

declare function __VLS_template(): {
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ContentSectionProps>, {
    padding: string;
    containerSize: string;
    sectionColor: string;
    containerColor: string;
    layout: string;
    alignment: string;
    imageAspectRatio: string;
    imageSize: string;
    showBadges: boolean;
    contentSpacing: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ContentSectionProps>, {
    padding: string;
    containerSize: string;
    sectionColor: string;
    containerColor: string;
    layout: string;
    alignment: string;
    imageAspectRatio: string;
    imageSize: string;
    showBadges: boolean;
    contentSpacing: string;
}>>> & Readonly<{}>, {
    padding: string;
    layout: "stacked" | "side-by-side" | "grid" | "featured";
    containerSize: "full" | "large" | "small";
    sectionColor: string;
    containerColor: string;
    alignment: "left" | "center" | "right";
    imageAspectRatio: "square" | "landscape" | "portrait" | "auto";
    imageSize: "small" | "medium" | "large";
    showBadges: boolean;
    contentSpacing: "tight" | "normal" | "loose";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ContentSection.vue.d.ts.map