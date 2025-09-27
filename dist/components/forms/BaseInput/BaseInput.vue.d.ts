declare function __VLS_template(): {
    control?(_: {
        id: string;
        value: string | undefined;
        disabled: boolean | undefined;
        handleInput: (event: Event) => void;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    error: {
        type: import('vue').PropType<string | string[]>;
    };
    variant: {
        type: import('vue').PropType<"default" | "ghost">;
        default: string;
    };
    type: {
        type: import('vue').PropType<"number" | "search" | "text" | "email" | "password" | "tel" | "url">;
        default: string;
    };
    label: {
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
    placeholder: {
        type: import('vue').PropType<string>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    clearTitle: {
        type: import('vue').PropType<string>;
        default: string;
    };
    prefixIcon: {
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
    touched: (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string>;
    error: {
        type: import('vue').PropType<string | string[]>;
    };
    variant: {
        type: import('vue').PropType<"default" | "ghost">;
        default: string;
    };
    type: {
        type: import('vue').PropType<"number" | "search" | "text" | "email" | "password" | "tel" | "url">;
        default: string;
    };
    label: {
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
    placeholder: {
        type: import('vue').PropType<string>;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
    };
    clearTitle: {
        type: import('vue').PropType<string>;
        default: string;
    };
    prefixIcon: {
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
    onTouched?: ((value: boolean) => any) | undefined;
}>, {
    variant: "default" | "ghost";
    type: "text" | "email" | "password" | "search" | "tel" | "url" | "number";
    size: "small" | "medium" | "large";
    clearTitle: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=BaseInput.vue.d.ts.map