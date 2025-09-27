/**
 * TypeScript interfaces for TInputTextArea component
 * Provides type-safe props and configurations for multi-line text input functionality
 */
export interface TInputTextAreaProps {
    /**
     * The current value
     */
    modelValue?: string;
    /**
     * Label text displayed above the textarea
     */
    label?: string;
    /**
     * Placeholder text shown when textarea is empty
     */
    placeholder?: string;
    /**
     * Help text displayed below the textarea
     */
    description?: string;
    /**
     * Whether the textarea automatically grows with content
     * @default true
     */
    autoGrow?: boolean;
    /**
     * Whether users can manually resize the textarea
     * @default false
     */
    allowResize?: boolean;
    /**
     * Minimum number of visible rows
     * @default 3
     */
    minRows?: number;
    /**
     * Maximum number of visible rows (when autoGrow is true)
     * @default 10
     */
    maxRows?: number;
    /**
     * Whether the textarea is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Maximum character length
     */
    maxlength?: number;
    /**
     * Whether to show character count
     * @default false
     */
    showCount?: boolean;
    /**
     * Whether the textarea is readonly
     * @default false
     */
    readonly?: boolean;
    /**
     * Whether spellcheck is enabled
     * @default true
     */
    spellcheck?: boolean;
}
export interface TInputTextAreaEmits {
    /**
     * Emitted when value changes
     */
    'update:modelValue': [value: string];
    /**
     * Emitted when the textarea value changes
     */
    change: [value: string];
    /**
     * Emitted when the textarea is touched/untouched
     */
    touched: [value: boolean];
    /**
     * Emitted when textarea gains focus
     */
    focus: [event: FocusEvent];
    /**
     * Emitted when textarea loses focus
     */
    blur: [event: FocusEvent];
    /**
     * Emitted when Enter key is pressed (without Shift)
     */
    submit: [event: KeyboardEvent];
}
/**
 * Utility function to count characters/words in text
 */
export declare function getTextStats(text: string): {
    characters: number;
    words: number;
    lines: number;
};
/**
 * Utility function to truncate text with ellipsis
 */
export declare function truncateText(text: string, maxLength: number, ellipsis?: string): string;
//# sourceMappingURL=TInputTextArea.model.d.ts.map