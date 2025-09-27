import { TableProps } from './Table.model';

declare function __VLS_template(): {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TableProps>, {
    striped: boolean;
    hover: boolean;
    bordered: boolean;
    compact: boolean;
    as: string;
    clickable: boolean;
    childrenKey: string;
    expandable: boolean;
    defaultExpandAll: boolean;
    indentSize: number;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: any, index: number) => void;
    expand: (expanded: boolean, row: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TableProps>, {
    striped: boolean;
    hover: boolean;
    bordered: boolean;
    compact: boolean;
    as: string;
    clickable: boolean;
    childrenKey: string;
    expandable: boolean;
    defaultExpandAll: boolean;
    indentSize: number;
}>>> & Readonly<{
    "onRow-click"?: ((row: any, index: number) => any) | undefined;
    onExpand?: ((expanded: boolean, row: any) => any) | undefined;
}>, {
    clickable: boolean;
    as: "table" | "div";
    expandable: boolean;
    striped: boolean;
    hover: boolean;
    bordered: boolean;
    compact: boolean;
    childrenKey: string;
    defaultExpandAll: boolean;
    indentSize: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Table.vue.d.ts.map