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
    autocomplete: {
        type: import('vue').PropType<string>;
        default: string;
    };
    showStrength: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    minLength: {
        type: import('vue').PropType<number>;
        default: number;
    };
    requireUppercase: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requireLowercase: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requireNumbers: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requireSpecial: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: FocusEvent) => void;
    "update:modelValue": (value: string) => void;
    strength: (strength: number) => void;
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
    autocomplete: {
        type: import('vue').PropType<string>;
        default: string;
    };
    showStrength: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    minLength: {
        type: import('vue').PropType<number>;
        default: number;
    };
    requireUppercase: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requireLowercase: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requireNumbers: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    requireSpecial: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onStrength?: ((strength: number) => any) | undefined;
}>, {
    placeholder: string;
    clearable: boolean;
    autocomplete: string;
    showStrength: boolean;
    minLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecial: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=InputPassword.vue.d.ts.map