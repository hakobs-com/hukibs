import { Icons } from 'open-icon';
import { Colors } from '../../../../types';

interface Props {
    title: string;
    message: string;
    icon?: Icons;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmColor?: Colors.PRIMARY | Colors.SUCCESS | Colors.ERROR | Colors.WARNING;
    onConfirm?: () => void;
    onCancel?: () => void;
    popupId?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: string;
    confirmLabel: string;
    cancelLabel: string;
    confirmColor: Colors;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    icon: string;
    confirmLabel: string;
    cancelLabel: string;
    confirmColor: Colors;
}>>> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    icon: Icons;
    confirmLabel: string;
    cancelLabel: string;
    confirmColor: Colors.PRIMARY | Colors.SUCCESS | Colors.ERROR | Colors.WARNING;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
//# sourceMappingURL=ConfirmDialog.vue.d.ts.map