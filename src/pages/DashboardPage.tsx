import Dashboard from '../components/Dashboard/Dashboard';
import Sidebar from '../components/Dashboard/Sidebar';
import Content from '../components/Dashboard/Content';
import type { MenuItem, StatsData, NewsData, UserProfile } from '../components/Dashboard/DashboardContext';

// Avatar and icon images
const imgAvatar = "https://www.figma.com/api/mcp/asset/a2b69740-e4f4-4b7a-9b57-0219ee1438e7";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/b733793d-a5b1-44f1-927b-286e142f2b7b";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/05022070-ad50-4bfd-aea9-d364df3f8e1f";
const imgSmartHome = "https://www.figma.com/api/mcp/asset/26ac3776-bd72-48ee-ad76-c3266f6ce73b";
const imgFolder = "https://www.figma.com/api/mcp/asset/d106784d-ca27-453f-ab13-e237d95a5f55";
const imgLayoutGrid = "https://www.figma.com/api/mcp/asset/f6964eac-f19e-472d-b745-32f3c3648899";
const imgChartBar = "https://www.figma.com/api/mcp/asset/d6111d71-6990-43dc-a755-6b434d0f6ab2";
const imgMail = "https://www.figma.com/api/mcp/asset/80438572-82da-4432-b43e-a8dccb10392c";

// User profile data
const userData: UserProfile = {
  name: '김다우 사원',
  department: '애플리케이션디자인팀',
  avatar: imgAvatar,
};

// Menu items with routing paths
const menuItems: MenuItem[] = [
  { id: 'home', label: '홈', icon: imgSmartHome, path: '/' },
  { id: 'drive', label: '드라이브', icon: imgFolder, path: '/drive' },
  { id: 'works', label: 'Works', icon: imgLayoutGrid, path: '/works' },
  { id: 'survey', label: '설문', icon: imgChartBar, path: '/survey' },
  { id: 'mail', label: '메일', icon: imgMail, path: '/mail' },
];

// Stats data for overview section
const statsData: StatsData[] = [
  { count: '10', label: 'Total Documents' },
  { count: '412', label: 'Total Mail' },
  { count: '54', label: 'Total Apps' },
  { count: '7', label: 'Total Board' },
];

// News data for news section
const newsData: NewsData[] = [
  {
    id: '1',
    title: 'Next Week',
    description: 'President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.',
  },
  {
    id: '2',
    title: 'Next Week',
    description: 'President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.',
  },
  {
    id: '3',
    title: 'A look back at 2025',
    description: 'President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its',
  },
  {
    id: '4',
    title: 'NIS refutes Coupang',
    description: "South Korea's National Intelligence Service on Tuesday denied Coupang interim",
  },
];

export default function DashboardPage() {
  const handleMenuClick = (menuId: string) => {
    console.log(`Navigating to: ${menuId}`);
    // Here you can add actual routing logic (e.g., react-router)
  };

  const handleAdminClick = () => {
    console.log('Admin panel clicked');
    // Add admin panel logic
  };

  const handleTutorialClick = () => {
    console.log('Tutorial clicked');
    // Add tutorial logic
  };

  return (
    <Dashboard
      user={userData}
      menuItems={menuItems}
      statsData={statsData}
      newsData={newsData}
    >
      <Sidebar>
        <Sidebar.Logo logo1={imgLogo1} logo2={imgLogo2} />
        <Sidebar.Profile />
        <Sidebar.Menu>
          {menuItems.map((item) => (
            <Sidebar.MenuItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => handleMenuClick(item.id)}
            />
          ))}
        </Sidebar.Menu>
      </Sidebar>

      <Content>
        <Content.TopBar
          onAdminClick={handleAdminClick}
          onTutorialClick={handleTutorialClick}
        />
        <Content.Section title="Overview">
          <Content.Stats />
        </Content.Section>
        <Content.Section title="Latest News">
          <Content.News />
        </Content.Section>
      </Content>
    </Dashboard>
  );
}
