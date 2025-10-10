declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean | string[]>;
    error: {
        type: import('vue').PropType<string | string[]>;
    };
    color: {
        type: import('vue').PropType<"success" | "warning" | "error" | "info" | "primary">;
        default: string;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    class: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
        default: string;
    };
    required: {
        type: import('vue').PropType<boolean>;
    };
    description: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    value: {
        type: import('vue').PropType<string | number | boolean>;
    };
    indeterminate: {
        type: import('vue').PropType<boolean>;
    };
    ripple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: FocusEvent) => void;
    change: (value: boolean | string[]) => void;
    focus: (event: FocusEvent) => void;
    "update:modelValue": (value: boolean | string[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean | string[]>;
    error: {
        type: import('vue').PropType<string | string[]>;
    };
    color: {
        type: import('vue').PropType<"success" | "warning" | "error" | "info" | "primary">;
        default: string;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    class: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
        default: string;
    };
    required: {
        type: import('vue').PropType<boolean>;
    };
    description: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    value: {
        type: import('vue').PropType<string | number | boolean>;
    };
    indeterminate: {
        type: import('vue').PropType<boolean>;
    };
    ripple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: boolean | string[]) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean | string[]) => any) | undefined;
}>, {
    color: "primary" | "success" | "warning" | "error" | "info";
    size: "small" | "medium" | "large";
    ripple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Checkbox.vue.d.ts.map