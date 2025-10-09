declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
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
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    clearTitle: {
        type: import('vue').PropType<string>;
    };
    suffixIcon: {
        type: import('vue').PropType<string>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (event: Event) => void;
    blur: (event: FocusEvent) => void;
    change: (event: Event) => void;
    focus: (event: FocusEvent) => void;
    clear: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
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
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    clearTitle: {
        type: import('vue').PropType<string>;
    };
    suffixIcon: {
        type: import('vue').PropType<string>;
    };
}>> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
}>, {
    placeholder: string;
    clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=SearchInput.vue.d.ts.map