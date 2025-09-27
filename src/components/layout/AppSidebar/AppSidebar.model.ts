export interface AppSidebarNavItem {
  path?: string;
  href?: string;
  label: string;
  icon: string;
  badge?: string | number;
}

export interface AppSidebarSection {
  id: string;
  title?: string;
  items: AppSidebarNavItem[];
}

export interface AppSidebarUserInfo {
  avatar?: string;
  name?: string;
  email?: string;
  role?: string;
}

export interface AppSidebarProps {
  sections?: AppSidebarSection[];
  userInfo?: AppSidebarUserInfo;
  collapsed?: boolean;
  collapsible?: boolean;
}