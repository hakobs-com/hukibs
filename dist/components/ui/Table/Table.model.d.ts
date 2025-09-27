export interface TableColumn {
    key: string;
    label: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    render?: (value: any, row: any, index: number, level?: number) => any;
}
export interface TableProps {
    striped?: boolean;
    hover?: boolean;
    bordered?: boolean;
    compact?: boolean;
    as?: 'table' | 'div';
    columns?: TableColumn[];
    data?: any[];
    rowKey?: string | ((row: any, index: number) => string);
    clickable?: boolean;
    selectedKey?: string | number;
    childrenKey?: string;
    expandedKeys?: Set<string | number> | string[] | number[];
    defaultExpandAll?: boolean;
    expandable?: boolean;
    indentSize?: number;
}
export interface TableHeaderProps {
    sortable?: boolean;
}
export interface TableRowProps {
    clickable?: boolean;
    selected?: boolean;
    as?: 'tr' | 'div';
    columns?: string;
    level?: number;
    expandable?: boolean;
    expanded?: boolean;
}
export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
    nowrap?: boolean;
    as?: 'td' | 'div';
    className?: string;
}
//# sourceMappingURL=Table.model.d.ts.map