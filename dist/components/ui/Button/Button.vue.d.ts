import { ButtonType, ButtonSize, ButtonVariant, ButtonProps } from './Button.model';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    size: "medium";
    type: "button";
    variant: "primary";
    color: undefined;
    disabled: boolean;
    loading: boolean;
    iconOnly: boolean;
    iconAfter: boolean;
    to: undefined;
    href: undefined;
    element: string;
    fullWidth: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    size: "medium";
    type: "button";
    variant: "primary";
    color: undefined;
    disabled: boolean;
    loading: boolean;
    iconOnly: boolean;
    iconAfter: boolean;
    to: undefined;
    href: undefined;
    element: string;
    fullWidth: boolean;
}>>> & Readonly<{}>, {
    loading: boolean;
    variant: ButtonVariant;
    color: import('../../..').Colors;
    type: ButtonType;
    size: ButtonSize;
    element: string;
    to: string;
    disabled: boolean;
    iconOnly: boolean;
    iconAfter: boolean;
    href: string;
    fullWidth: boolean;
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
//# sourceMappingURL=Button.vue.d.ts.map