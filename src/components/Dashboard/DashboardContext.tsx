import { createContext, useContext, type ReactNode, useState } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface StatsData {
  count: string;
  label: string;
  icon?: string;
}

export interface NewsData {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface UserProfile {
  name: string;
  department: string;
  avatar: string;
}

interface DashboardContextValue {
  activeMenu: string;
  setActiveMenu: (menuId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  user: UserProfile;
  menuItems: MenuItem[];
  statsData: StatsData[];
  newsData: NewsData[];
  filteredNewsData: NewsData[];
}

const DashboardContext = createContext<DashboardContextValue | undefined>(undefined);

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('Dashboard compound components must be used within Dashboard component');
  }
  return context;
}

interface DashboardProviderProps {
  children: ReactNode;
  user: UserProfile;
  menuItems: MenuItem[];
  statsData: StatsData[];
  newsData: NewsData[];
}

export function DashboardProvider({
  children,
  user,
  menuItems,
  statsData,
  newsData,
}: DashboardProviderProps) {
  const [activeMenu, setActiveMenu] = useState(menuItems[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNewsData = newsData.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        searchQuery,
        setSearchQuery,
        user,
        menuItems,
        statsData,
        newsData,
        filteredNewsData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
