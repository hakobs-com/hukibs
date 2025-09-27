import { Colors } from '../../../types';

export declare const BadgeVariant: {
    readonly DEFAULT: "default";
    readonly OUTLINE: "outline";
};
export type BadgeVariant = typeof BadgeVariant[keyof typeof BadgeVariant];
export interface BadgeProps {
    /** Visual variant */
    variant?: BadgeVariant;
    /** Size variant */
    size?: 'small' | 'medium' | 'large';
    /** Color theme */
    color?: Colors;
    /** Icon name */
    icon?: string;
}
//# sourceMappingURL=Badge.model.d.ts.map