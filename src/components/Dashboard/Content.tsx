import { ReactNode } from 'react';
import { useDashboardContext } from './DashboardContext';
import Search from '../Search';
import Button from '../Button';

const imgPhoto = "https://www.figma.com/api/mcp/asset/fb4c8e98-e99f-4119-a331-7d217221509f";

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <div className="bg-[#e7e8ec] flex flex-1 flex-col items-start overflow-clip pb-10 pt-0 px-0 self-stretch">
      {children}
    </div>
  );
}

interface TopBarProps {
  onAdminClick?: () => void;
  onTutorialClick?: () => void;
}

function TopBar({ onAdminClick, onTutorialClick }: TopBarProps) {
  const { searchQuery, setSearchQuery } = useDashboardContext();

  return (
    <div className="border border-[#d3d6e3] flex items-center justify-between px-6 py-4 w-full">
      <Search
        state="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex gap-2.5 items-start overflow-clip">
        <Button type="normal" onClick={onAdminClick}>Admin</Button>
        <Button type="primary" onClick={onTutorialClick}>Tutorial</Button>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-4 items-start justify-center pb-0 pt-5 px-6 w-full">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] text-lg text-black m-0">
        {title}
      </p>
      {children}
    </div>
  );
}

function Stats() {
  const { statsData } = useDashboardContext();

  return (
    <div className="flex gap-4 items-center w-full">
      {statsData.map((stat, index) => (
        <StatsBox key={index} count={stat.count} label={stat.label} />
      ))}
    </div>
  );
}

interface StatsBoxProps {
  count: string;
  label: string;
}

function StatsBox({ count, label }: StatsBoxProps) {
  return (
    <div className="bg-white flex-1 flex flex-col overflow-clip rounded-xl">
      <div className="flex gap-2 items-center overflow-clip px-5 py-6">
        <div className="bg-light-gray-100 rounded-md shrink-0 size-12" />
        <div className="flex flex-col justify-center leading-[1.5] text-black whitespace-pre-wrap">
          <p className="font-['Pretendard:Bold',sans-serif] text-lg w-48">
            {count}
          </p>
          <p className="font-['Pretendard:Regular',sans-serif] text-[13px] w-48">
            {label}
          </p>
        </div>
      </div>
      <div className="border-t border-[#e4e6ec] flex items-center justify-between overflow-clip pl-5 pr-3 py-2.5">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] text-[13px] text-black">
          See detail
        </p>
        <div className="overflow-clip size-4">
          <div className="relative w-1 h-2 left-1.5 top-1">
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="#354052" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NewsProps {
  limit?: number;
}

function News({ limit }: NewsProps) {
  const { filteredNewsData } = useDashboardContext();
  const displayData = limit ? filteredNewsData.slice(0, limit) : filteredNewsData;

  return (
    <div className="flex flex-wrap gap-4 items-start w-full">
      {displayData.map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          description={news.description}
          image={news.image}
        />
      ))}
    </div>
  );
}

interface NewsCardProps {
  title: string;
  description: string;
  image?: string;
}

function NewsCard({ title, description, image }: NewsCardProps) {
  return (
    <div className="bg-white flex-1 flex flex-col h-[280px] overflow-clip rounded-xl">
      <div className="bg-[#f2f5f7] flex items-center justify-center overflow-clip px-5 py-10">
        <div className="size-[52px]">
          <img alt="" className="block max-w-none size-full" src={image || imgPhoto} />
        </div>
      </div>
      <div className="border-t border-[#e4e6ec] flex-1 flex flex-col gap-2.5 items-start leading-[1.5] overflow-clip pl-5 pr-3 py-2.5 text-black w-full">
        <p className="font-['Pretendard:Bold',sans-serif] text-lg">
          {title}
        </p>
        <p className="flex-1 font-['Pretendard:Regular',sans-serif] overflow-ellipsis overflow-hidden text-[13px] w-full whitespace-pre-wrap line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

Content.TopBar = TopBar;
Content.Section = Section;
Content.Stats = Stats;
Content.News = News;

export default Content;
