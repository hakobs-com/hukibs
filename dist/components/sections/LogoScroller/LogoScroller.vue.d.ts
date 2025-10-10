import { LogoScrollerProps } from './LogoScroller.model';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LogoScrollerProps>, {
    padding: string;
    containerSize: string;
    sectionColor: string;
    containerColor: string;
    variant: string;
    speed: string;
    direction: string;
    pauseOnHover: boolean;
    gridSize: number;
    logoHeight: string;
    gap: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<LogoScrollerProps>, {
    padding: string;
    containerSize: string;
    sectionColor: string;
    containerColor: string;
    variant: string;
    speed: string;
    direction: string;
    pauseOnHover: boolean;
    gridSize: number;
    logoHeight: string;
    gap: string;
}>>> & Readonly<{}>, {
    variant: "scroller" | "grid";
    direction: "left" | "right";
    gap: string;
    padding: string;
    containerSize: "full" | "large" | "small";
    sectionColor: string;
    containerColor: string;
    speed: "slow" | "normal" | "fast";
    pauseOnHover: boolean;
    gridSize: number;
    logoHeight: string;
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
//# sourceMappingURL=LogoScroller.vue.d.ts.map