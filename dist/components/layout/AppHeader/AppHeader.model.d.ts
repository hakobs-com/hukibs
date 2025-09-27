export interface AppHeaderNavItem {
    path?: string;
    href?: string;
    label: string;
    external?: boolean;
}
export interface AppHeaderProps {
    logo?: {
        icon?: string;
        text?: string;
        href?: string;
    };
    navItems?: AppHeaderNavItem[];
    showThemeToggle?: boolean;
    showSettings?: boolean;
}
//# sourceMappingURL=AppHeader.model.d.ts.map