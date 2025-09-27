export interface StatsCardProps {
  // Core data
  value: string | number;
  label: string;

  // Visual configuration
  layout?: 'icon' | 'progress-circle' | 'progress-bar' | 'compact';
  icon?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'blue' | 'green';
  variant?: 'default' | 'elevated' | 'outlined' | 'minimal';
  size?: 'small' | 'medium' | 'large';

  // Progress-specific
  percentage?: number;
  total?: number;

  // States
  isLoading?: boolean;
  isClickable?: boolean;

  // Formatting
  formatter?: (value: string | number) => string;
}