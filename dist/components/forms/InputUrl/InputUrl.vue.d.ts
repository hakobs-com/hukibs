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
    validate: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
        default: string;
    };
    allowedProtocols: {
        type: import('vue').PropType<string[]>;
        default: () => string[];
    };
    autoAddProtocol: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showPreview: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: FocusEvent) => void;
    "update:modelValue": (value: string) => void;
    validity: (isValid: boolean) => void;
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
    validate: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
        default: string;
    };
    allowedProtocols: {
        type: import('vue').PropType<string[]>;
        default: () => string[];
    };
    autoAddProtocol: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    showPreview: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidity?: ((isValid: boolean) => any) | undefined;
}>, {
    placeholder: string;
    clearable: boolean;
    validate: boolean;
    autocomplete: string;
    allowedProtocols: string[];
    autoAddProtocol: boolean;
    showPreview: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=InputUrl.vue.d.ts.map