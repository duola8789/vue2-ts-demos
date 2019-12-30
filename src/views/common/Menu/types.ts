export interface menuItem {
  path: string;
  icon?: string;
  title: string;
}

export interface menuGroup {
  icon?: string;
  title: string;
  children?: menuItem[];
}

export interface menu {
  path: string;
  icon: string;
  title: string;
  groups?: menuGroup[];
  children: menuItem[];
}
