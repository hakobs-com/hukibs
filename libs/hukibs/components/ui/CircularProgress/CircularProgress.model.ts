export interface CircularProgressProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  indeterminate?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
}