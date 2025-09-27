import { StatsCardProps } from './StatsCard.model';

declare function __VLS_template(): {
    action?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<StatsCardProps>, {
    layout: string;
    color: string;
    variant: string;
    size: string;
    isLoading: boolean;
    isClickable: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<StatsCardProps>, {
    layout: string;
    color: string;
    variant: string;
    size: string;
    isLoading: boolean;
    isClickable: boolean;
}>>> & Readonly<{}>, {
    variant: "default" | "elevated" | "outlined" | "minimal";
    color: "primary" | "secondary" | "success" | "warning" | "error" | "info" | "blue" | "green";
    size: "small" | "medium" | "large";
    layout: "icon" | "progress-circle" | "progress-bar" | "compact";
    isLoading: boolean;
    isClickable: boolean;
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
//# sourceMappingURL=StatsCard.vue.d.ts.map