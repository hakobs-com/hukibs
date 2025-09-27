export interface StatsCardProps {
    value: string | number;
    label: string;
    layout?: 'icon' | 'progress-circle' | 'progress-bar' | 'compact';
    icon?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'blue' | 'green';
    variant?: 'default' | 'elevated' | 'outlined' | 'minimal';
    size?: 'small' | 'medium' | 'large';
    percentage?: number;
    total?: number;
    isLoading?: boolean;
    isClickable?: boolean;
    formatter?: (value: string | number) => string;
}
//# sourceMappingURL=StatsCard.model.d.ts.map