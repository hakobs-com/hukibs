export interface ProgressProps {
    value?: number;
    max?: number;
    label?: string;
    details?: string[];
    showBar?: boolean;
    showPercentage?: boolean;
    showPercentageInBar?: boolean;
    indeterminate?: boolean;
    variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'small' | 'medium' | 'large';
    type?: 'linear' | 'circular';
}
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ProgressProps>, {
    value: number;
    max: number;
    showBar: boolean;
    showPercentage: boolean;
    showPercentageInBar: boolean;
    indeterminate: boolean;
    variant: string;
    size: string;
    type: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ProgressProps>, {
    value: number;
    max: number;
    showBar: boolean;
    showPercentage: boolean;
    showPercentageInBar: boolean;
    indeterminate: boolean;
    variant: string;
    size: string;
    type: string;
}>>> & Readonly<{}>, {
    variant: "primary" | "success" | "warning" | "error" | "info";
    type: "linear" | "circular";
    size: "small" | "medium" | "large";
    showPercentage: boolean;
    value: number;
    indeterminate: boolean;
    max: number;
    showBar: boolean;
    showPercentageInBar: boolean;
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
//# sourceMappingURL=Progress.vue.d.ts.map