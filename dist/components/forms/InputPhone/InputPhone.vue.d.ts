interface Country {
    code: string;
    name: string;
    dialCode: string;
    flag: string;
    format: string;
}
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
    defaultCountry: {
        type: import('vue').PropType<string>;
        default: string;
    };
    showCountrySelector: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autoFormat: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    international: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: FocusEvent) => void;
    "update:modelValue": (value: string) => void;
    validity: (isValid: boolean) => void;
    countryChange: (country: Country) => void;
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
    defaultCountry: {
        type: import('vue').PropType<string>;
        default: string;
    };
    showCountrySelector: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autoFormat: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    international: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onValidity?: ((isValid: boolean) => any) | undefined;
    onCountryChange?: ((country: Country) => any) | undefined;
}>, {
    placeholder: string;
    clearable: boolean;
    defaultCountry: string;
    showCountrySelector: boolean;
    autoFormat: boolean;
    international: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=InputPhone.vue.d.ts.map