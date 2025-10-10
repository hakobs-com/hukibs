declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number | null>;
    error: {
        type: import('vue').PropType<string | string[]>;
    };
    variant: {
        type: import('vue').PropType<"default" | "ghost">;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
    };
    required: {
        type: import('vue').PropType<boolean>;
    };
    description: {
        type: import('vue').PropType<string>;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    min: {
        type: import('vue').PropType<number>;
    };
    max: {
        type: import('vue').PropType<number>;
    };
    step: {
        type: import('vue').PropType<number>;
        default: number;
    };
    controls: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    precision: {
        type: import('vue').PropType<number>;
        default: number;
    };
    locale: {
        type: import('vue').PropType<string>;
        default: string;
    };
    prefix: {
        type: import('vue').PropType<string>;
    };
    suffix: {
        type: import('vue').PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: FocusEvent) => void;
    focus: (event: FocusEvent) => void;
    "update:modelValue": (value: number | null) => void;
    increment: (value: number) => void;
    decrement: (value: number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<number | null>;
    error: {
        type: import('vue').PropType<string | string[]>;
    };
    variant: {
        type: import('vue').PropType<"default" | "ghost">;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
    };
    required: {
        type: import('vue').PropType<boolean>;
    };
    description: {
        type: import('vue').PropType<string>;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    min: {
        type: import('vue').PropType<number>;
    };
    max: {
        type: import('vue').PropType<number>;
    };
    step: {
        type: import('vue').PropType<number>;
        default: number;
    };
    controls: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    precision: {
        type: import('vue').PropType<number>;
        default: number;
    };
    locale: {
        type: import('vue').PropType<string>;
        default: string;
    };
    prefix: {
        type: import('vue').PropType<string>;
    };
    suffix: {
        type: import('vue').PropType<string>;
    };
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
    onIncrement?: ((value: number) => any) | undefined;
    onDecrement?: ((value: number) => any) | undefined;
}>, {
    step: number;
    controls: boolean;
    precision: number;
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=InputNumber.vue.d.ts.map