import { BaseSectionProps } from '../BaseSection/BaseSection.model';

export interface HeroSectionProps extends BaseSectionProps {
    align?: 'left' | 'center' | 'right';
    valign?: 'top' | 'center' | 'bottom';
    height?: 'auto' | 'viewport' | 'custom';
    customHeight?: string;
    textColor?: 'light' | 'dark' | 'auto';
    overlay?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
}
//# sourceMappingURL=HeroSection.model.d.ts.map