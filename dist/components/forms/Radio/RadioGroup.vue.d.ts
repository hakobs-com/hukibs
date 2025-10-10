import { RadioOption } from './Radio.model';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | number | boolean>;
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
    ripple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    options: {
        type: import('vue').PropType<(string | number | boolean | RadioOption)[]>;
        required: true;
    };
    direction: {
        type: import('vue').PropType<"vertical" | "horizontal">;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | number | boolean>;
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
    ripple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    options: {
        type: import('vue').PropType<(string | number | boolean | RadioOption)[]>;
        required: true;
    };
    direction: {
        type: import('vue').PropType<"vertical" | "horizontal">;
        default: string;
    };
}>> & Readonly<{}>, {
    color: "primary" | "success" | "warning" | "error" | "info";
    size: "small" | "medium" | "large";
    ripple: boolean;
    direction: "vertical" | "horizontal";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=RadioGroup.vue.d.ts.map