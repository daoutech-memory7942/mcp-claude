import { createContext, useContext, useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import Button from "./Button";

// Figma 에셋 이미지 URLs
const imgAvatar = "https://www.figma.com/api/mcp/asset/6fdf0702-06a5-4a86-bee8-a70ff45975f0";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/6c7f589d-f3a4-4f4a-943f-89ee27c325a7";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/13ba5a77-b054-4570-8f72-ead970bff434";
const imgSmartHome = "https://www.figma.com/api/mcp/asset/6733a6f5-b3e9-4c66-bdbc-e23d7b830c92";
const imgFolder = "https://www.figma.com/api/mcp/asset/a2f6873a-e029-419d-975a-d514c29e4f48";
const imgLayoutGrid = "https://www.figma.com/api/mcp/asset/82a96b86-66fb-43bc-a0bc-e923e6dff3be";
const imgChartBar = "https://www.figma.com/api/mcp/asset/f44d644c-494b-46f0-8e48-b90e576ce603";
const imgMail = "https://www.figma.com/api/mcp/asset/b0154693-07b4-4588-8216-6abe1bc15412";

// 메뉴 아이템 타입
interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

// 기본 메뉴 아이템
const defaultMenuItems: MenuItem[] = [
  { icon: imgSmartHome, label: "홈", path: "/dashboard" },
  { icon: imgFolder, label: "드라이브", path: "/drive" },
  { icon: imgLayoutGrid, label: "Works", path: "/works" },
  { icon: imgChartBar, label: "설문", path: "/survey" },
  { icon: imgMail, label: "메일", path: "/mail" },
];

// Context 타입
interface DashboardLayoutContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const DashboardLayoutContext = createContext<DashboardLayoutContextType | null>(null);

// Hook to use context
function useDashboardLayout() {
  const context = useContext(DashboardLayoutContext);
  if (!context) {
    throw new Error("DashboardLayout compound components must be used within DashboardLayout");
  }
  return context;
}

// 사이드바 메뉴 아이템 컴포넌트
function SidebarMenuItem({ icon, label, path, isActive }: MenuItem & { isActive: boolean }) {
  return (
    <Link
      to={path}
      className={`flex items-center gap-g-5 px-p-8 py-p-4 w-full transition-colors cursor-pointer ${
        isActive ? "bg-[#0698ac]" : "hover:bg-[#0698ac]/70"
      }`}
    >
      <img src={icon} alt="" className="w-6 h-6" />
      <span className="font-pretendard text-typo-body-medium-bold text-white">{label}</span>
    </Link>
  );
}

// Root 컴포넌트
interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayoutRoot({ children }: DashboardLayoutProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <DashboardLayoutContext.Provider value={{ searchValue, setSearchValue }}>
      <div
        className="flex items-start justify-center w-full h-full bg-white"
        data-pimitive-token="Mode-1"
        data-semantic-token="light-mode"
        data-component-token="mint"
      >
        {children}
      </div>
    </DashboardLayoutContext.Provider>
  );
}

// Sidebar 컴포넌트
interface SidebarProps {
  menuItems?: MenuItem[];
  userName?: string;
  userTeam?: string;
  userAvatar?: string;
}

function Sidebar({
  menuItems = defaultMenuItems,
  userName = "김다우 사원",
  userTeam = "애플리케이션디자인팀",
  userAvatar = imgAvatar,
}: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-[320px] h-full bg-bg-primary-level1 py-p-7 flex flex-col shrink-0 overflow-hidden">
      {/* 로고 */}
      <div className="px-p-8 py-p-5">
        <div className="w-[120px] h-[26px] relative overflow-hidden">
          <div className="absolute" style={{ top: '20.78%', right: '0', bottom: '11.84%', left: '30.08%' }}>
            <img src={imgLogo1} alt="Daou Office" className="w-full h-full" />
          </div>
          <div className="absolute" style={{ top: '0', right: '78.16%', bottom: '0', left: '0' }}>
            <img src={imgLogo2} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* 프로필 */}
      <div className="flex items-start gap-g-5 px-p-8 py-p-7">
        <img
          src={userAvatar}
          alt="프로필"
          className="w-h-6 h-h-6 rounded-full shrink-0"
        />
        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="font-pretendard text-typo-body-medium-bold text-white">
            {userName}
          </span>
          <span className="font-pretendard text-typo-body-small-regular text-white">
            {userTeam}
          </span>
        </div>
      </div>

      {/* 메뉴 */}
      <nav className="flex flex-col py-p-7 border-t border-[#1298ac]">
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
            {...item}
            isActive={location.pathname === item.path}
          />
        ))}
      </nav>
    </aside>
  );
}

// Main 컴포넌트
interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <main className="flex-1 h-full bg-bg-neutral-level1 flex flex-col overflow-hidden pb-h-6">
      {children}
    </main>
  );
}

// Header 컴포넌트
interface HeaderProps {
  variant?: "default" | "transparent";
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

function Header({ variant = "default", leftContent, rightContent }: HeaderProps) {
  const { searchValue, setSearchValue } = useDashboardLayout();

  const headerStyles = variant === "default"
    ? "flex items-center justify-between px-p-8 py-p-6 border-b border-border-neutral-level1 bg-bg-neutral-base"
    : "flex items-center justify-between px-6 py-4 border border-[#d3d6e3]";

  return (
    <header className={headerStyles}>
      {leftContent ?? (
        <Search
          value={searchValue}
          onChange={setSearchValue}
          className="max-w-[300px]"
        />
      )}
      {rightContent ?? (
        <div className="flex items-start gap-g-5">
          <Button type="normal">Admin</Button>
          <Button type="primary">Tutorial</Button>
        </div>
      )}
    </header>
  );
}

// Content 컴포넌트
interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {children}
    </div>
  );
}

// Section 컴포넌트
interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`flex flex-col gap-g-6 px-p-8 pt-p-7 ${className}`}>
      {children}
    </section>
  );
}

// SectionTitle 컴포넌트
interface SectionTitleProps {
  children: ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base">
      {children}
    </h2>
  );
}

// Card 컴포넌트
interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-bg-neutral-base rounded-large p-p-7 flex flex-col gap-g-8 ${className}`}>
      {children}
    </div>
  );
}

// CardTitle 컴포넌트
interface CardTitleProps {
  children: ReactNode;
}

function CardTitle({ children }: CardTitleProps) {
  return (
    <h1 className="font-pretendard text-typo-heading-xlarge text-black">
      {children}
    </h1>
  );
}

// CardContent 컴포넌트
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`border-t border-border-neutral-active pt-p-8 flex flex-col gap-g-6 ${className}`}>
      {children}
    </div>
  );
}

// ActionBar 컴포넌트
interface ActionBarProps {
  children: ReactNode;
  className?: string;
}

function ActionBar({ children, className = "" }: ActionBarProps) {
  return (
    <div className={`flex items-center justify-center gap-g-4 px-p-8 pt-p-7 ${className}`}>
      {children}
    </div>
  );
}

// Compound Component Export
const DashboardLayout = Object.assign(DashboardLayoutRoot, {
  Sidebar,
  Main,
  Header,
  Content,
  Section,
  SectionTitle,
  Card,
  CardTitle,
  CardContent,
  ActionBar,
});

export default DashboardLayout;
export { useDashboardLayout };
