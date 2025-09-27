import { AcceptedOptions } from './SelectInput.model';
import { Size } from '../../../types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | null>;
    error: {
        type: import('vue').PropType<string[]>;
        default: () => never[];
    };
    label: {
        type: import('vue').PropType<string>;
        default: string;
    };
    size: {
        type: import('vue').PropType<Size>;
        default: Size;
    };
    description: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    options: {
        type: import('vue').PropType<AcceptedOptions>;
        required: true;
        default: () => never[];
    };
    allowNull: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    nullLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    searchable: {
        type: import('vue').PropType<boolean>;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (event: FocusEvent) => void;
    change: (value: string | string[] | null) => void;
    focus: (event: FocusEvent) => void;
    touched: (value: boolean) => void;
    "update:modelValue": (value: string | string[] | null) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | null>;
    error: {
        type: import('vue').PropType<string[]>;
        default: () => never[];
    };
    label: {
        type: import('vue').PropType<string>;
        default: string;
    };
    size: {
        type: import('vue').PropType<Size>;
        default: Size;
    };
    description: {
        type: import('vue').PropType<string>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    options: {
        type: import('vue').PropType<AcceptedOptions>;
        required: true;
        default: () => never[];
    };
    allowNull: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    nullLabel: {
        type: import('vue').PropType<string>;
        default: string;
    };
    searchable: {
        type: import('vue').PropType<boolean>;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string | string[] | null) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onTouched?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | string[] | null) => any) | undefined;
}>, {
    error: string[];
    label: string;
    size: Size;
    description: string;
    disabled: boolean;
    options: AcceptedOptions;
    allowNull: boolean;
    nullLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=SelectInput.vue.d.ts.map