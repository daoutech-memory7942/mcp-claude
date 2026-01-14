import { type ReactNode } from 'react';
import { useDashboardContext } from './DashboardContext';

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="bg-light-primary-500 flex flex-col items-start overflow-clip px-0 py-5 self-stretch shrink-0 w-80">
      {children}
    </div>
  );
}

interface LogoProps {
  logo1: string;
  logo2: string;
}

function Logo({ logo1, logo2 }: LogoProps) {
  return (
    <div className="flex flex-col items-start px-6 py-3 w-full">
      <div className="h-[26px] overflow-clip w-[120px] relative">
        <div className="absolute left-[36.1px] top-[5.41px] w-[83.8px] h-[17.52px]">
          <img alt="" className="block max-w-none size-full" src={logo2} />
        </div>
        <div className="absolute left-0 top-0 w-[26.18px] h-[26px]">
          <img alt="" className="block max-w-none size-full" src={logo1} />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  const { user } = useDashboardContext();

  return (
    <div className="flex gap-2.5 items-start overflow-clip px-6 py-5 w-full">
      <div className="size-10 shrink-0 relative">
        <img
          className="block max-w-none size-full rounded-full"
          alt={user.name}
          src={user.avatar}
        />
      </div>
      <div className="flex flex-col items-start overflow-clip flex-1">
        <div className="flex items-center w-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
            {user.name}
          </p>
        </div>
        <div className="flex items-center w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] text-white text-[13px] m-0">
            {user.department}
          </p>
        </div>
      </div>
    </div>
  );
}

interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return (
    <div className="border-t border-[#1298ac] flex flex-col items-start overflow-clip px-0 py-5 w-full">
      {children}
    </div>
  );
}

interface MenuItemProps {
  id: string;
  icon: string;
  label: string;
  onClick?: () => void;
}

function MenuItem({ id, icon, label, onClick }: MenuItemProps) {
  const { activeMenu, setActiveMenu } = useDashboardContext();
  const isActive = activeMenu === id;

  const handleClick = () => {
    setActiveMenu(id);
    onClick?.();
  };

  return (
    <div
      className={`flex gap-2.5 items-center overflow-clip px-6 py-2 w-full cursor-pointer transition-colors ${
        isActive ? 'bg-[rgba(255,255,255,0.2)]' : 'hover:bg-[rgba(255,255,255,0.1)]'
      }`}
      onClick={handleClick}
    >
      <div className="size-6">
        <img alt="" className="block max-w-none size-full" src={icon} />
      </div>
      <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
        {label}
      </p>
    </div>
  );
}

Sidebar.Logo = Logo;
Sidebar.Profile = Profile;
Sidebar.Menu = Menu;
Sidebar.MenuItem = MenuItem;

export default Sidebar;
