import { type ReactNode } from 'react';
import { DashboardProvider, type UserProfile, type MenuItem, type StatsData, type NewsData } from './DashboardContext';

interface DashboardProps {
  children: ReactNode;
  user: UserProfile;
  menuItems: MenuItem[];
  statsData: StatsData[];
  newsData: NewsData[];
}

export default function Dashboard({
  children,
  user,
  menuItems,
  statsData,
  newsData,
}: DashboardProps) {
  return (
    <DashboardProvider
      user={user}
      menuItems={menuItems}
      statsData={statsData}
      newsData={newsData}
    >
      <div className="bg-white flex items-start justify-center size-full min-h-screen">
        {children}
      </div>
    </DashboardProvider>
  );
}
