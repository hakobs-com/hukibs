export const TooltipPosition = {
	TOP: 'top',
	RIGHT: 'right',
	BOTTOM: 'bottom',
	LEFT: 'left',
} as const;

export type TooltipPosition = (typeof TooltipPosition)[keyof typeof TooltipPosition];

export interface TooltipProps {
  position?: TooltipPosition
  delay?: number
  color?: string
}