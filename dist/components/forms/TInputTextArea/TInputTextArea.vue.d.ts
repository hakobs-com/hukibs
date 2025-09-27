import { TInputTextAreaProps } from './TInputTextArea.model';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TInputTextAreaProps>, {
    modelValue: string;
    label: string;
    placeholder: string;
    autoGrow: boolean;
    allowResize: boolean;
    minRows: number;
    maxRows: number;
    disabled: boolean;
    readonly: boolean;
    spellcheck: boolean;
    showCount: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    submit: (event: KeyboardEvent) => void;
    blur: (event: FocusEvent) => void;
    change: (value: string) => void;
    focus: (event: FocusEvent) => void;
    touched: (value: boolean) => void;
    "update:modelValue": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TInputTextAreaProps>, {
    modelValue: string;
    label: string;
    placeholder: string;
    autoGrow: boolean;
    allowResize: boolean;
    minRows: number;
    maxRows: number;
    disabled: boolean;
    readonly: boolean;
    spellcheck: boolean;
    showCount: boolean;
}>>> & Readonly<{
    onSubmit?: ((event: KeyboardEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onTouched?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    label: string;
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    modelValue: string;
    autoGrow: boolean;
    allowResize: boolean;
    minRows: number;
    maxRows: number;
    showCount: boolean;
    spellcheck: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
//# sourceMappingURL=TInputTextArea.vue.d.ts.map