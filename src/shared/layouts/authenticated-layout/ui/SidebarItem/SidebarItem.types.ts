export type SidebarItemProps = {
  icon: {
    active: React.ReactNode;
    inactive: React.ReactNode;
  };
  label: string;
  to: string;
  isMobile?: boolean;
};
