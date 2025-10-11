import { BaseSectionProps } from '../BaseSection/BaseSection.model';
import { Colors } from '../../../types';

export interface ContentItem {
    id: string;
    title?: string;
    subtitle?: string;
    content?: string;
    image?: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right' | 'top' | 'background';
    cta?: {
        label: string;
        color?: Colors;
        link?: string;
    };
    icon?: string;
    badge?: string;
    badgeColor?: Colors;
}
export interface ContentSectionProps extends BaseSectionProps {
    title?: string;
    description?: string;
    content: ContentItem[];
    layout?: 'stacked' | 'side-by-side' | 'grid' | 'featured';
    alignment?: 'left' | 'center' | 'right';
    imageAspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
    imageSize?: 'small' | 'medium' | 'large';
    showBadges?: boolean;
    contentSpacing?: 'tight' | 'normal' | 'loose';
}
//# sourceMappingURL=ContentSection.model.d.ts.map