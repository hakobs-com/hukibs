export interface SettingsLayoutSection {
  id: string;
  label: string;
  icon: string;
}

export interface SettingsLayoutProps {
  sections: SettingsLayoutSection[];
  activeSection: string;
}