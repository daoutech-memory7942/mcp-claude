import Search from '../components/Search';
import Button from '../components/Button';

// Avatar and icon images
const imgAvatar = "https://www.figma.com/api/mcp/asset/a2b69740-e4f4-4b7a-9b57-0219ee1438e7";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/b733793d-a5b1-44f1-927b-286e142f2b7b";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/05022070-ad50-4bfd-aea9-d364df3f8e1f";
const imgSmartHome = "https://www.figma.com/api/mcp/asset/26ac3776-bd72-48ee-ad76-c3266f6ce73b";
const imgFolder = "https://www.figma.com/api/mcp/asset/d106784d-ca27-453f-ab13-e237d95a5f55";
const imgLayoutGrid = "https://www.figma.com/api/mcp/asset/f6964eac-f19e-472d-b745-32f3c3648899";
const imgChartBar = "https://www.figma.com/api/mcp/asset/d6111d71-6990-43dc-a755-6b434d0f6ab2";
const imgMail = "https://www.figma.com/api/mcp/asset/80438572-82da-4432-b43e-a8dccb10392c";
const imgPhoto = "https://www.figma.com/api/mcp/asset/fb4c8e98-e99f-4119-a331-7d217221509f";

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

interface NewsCardProps {
  title: string;
  description: string;
}

function NewsCard({ title, description }: NewsCardProps) {
  return (
    <div className="bg-white flex-1 flex flex-col h-[280px] overflow-clip rounded-xl">
      <div className="bg-[#f2f5f7] flex items-center justify-center overflow-clip px-5 py-10">
        <div className="size-[52px]">
          <img alt="" className="block max-w-none size-full" src={imgPhoto} />
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

export default function DashboardPage() {
  return (
    <div className="bg-white flex items-start justify-center size-full min-h-screen">
      {/* Sidebar/GNB */}
      <div className="bg-light-primary-500 flex flex-col items-start overflow-clip px-0 py-5 self-stretch shrink-0 w-80">
        {/* Logo */}
        <div className="flex flex-col items-start px-6 py-3 w-full">
          <div className="h-[26px] overflow-clip w-[120px] relative">
            <div className="absolute left-[36.1px] top-[5.41px] w-[83.8px] h-[17.52px]">
              <img alt="" className="block max-w-none size-full" src={imgLogo2} />
            </div>
            <div className="absolute left-0 top-0 w-[26.18px] h-[26px]">
              <img alt="" className="block max-w-none size-full" src={imgLogo1} />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="flex gap-2.5 items-start overflow-clip px-6 py-5 w-full">
          <div className="size-10 shrink-0 relative">
            <img className="block max-w-none size-full rounded-full" alt="" src={imgAvatar} />
          </div>
          <div className="flex flex-col items-start overflow-clip flex-1">
            <div className="flex items-center w-full">
              <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
                김다우 사원
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] text-white text-[13px] m-0">
                애플리케이션디자인팀
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="border-t border-[#1298ac] flex flex-col items-start overflow-clip px-0 py-5 w-full">
          <div className="flex gap-2.5 items-center overflow-clip px-6 py-2 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors">
            <div className="size-6">
              <img alt="" className="block max-w-none size-full" src={imgSmartHome} />
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
              홈
            </p>
          </div>
          <div className="flex gap-2.5 items-center overflow-clip px-6 py-2 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors">
            <div className="size-6">
              <img alt="" className="block max-w-none size-full" src={imgFolder} />
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
              드라이브
            </p>
          </div>
          <div className="flex gap-2.5 items-center overflow-clip px-6 py-2 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors">
            <div className="size-6">
              <img alt="" className="block max-w-none size-full" src={imgLayoutGrid} />
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
              Works
            </p>
          </div>
          <div className="flex gap-2.5 items-center overflow-clip px-6 py-2 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors">
            <div className="size-6">
              <img alt="" className="block max-w-none size-full" src={imgChartBar} />
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
              설문
            </p>
          </div>
          <div className="flex gap-2.5 items-center overflow-clip px-6 py-2 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors">
            <div className="size-6">
              <img alt="" className="block max-w-none size-full" src={imgMail} />
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-white text-sm m-0">
              메일
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#e7e8ec] flex flex-1 flex-col items-start overflow-clip pb-10 pt-0 px-0 self-stretch">
        {/* Top Bar with Search */}
        <div className="border border-[#d3d6e3] flex items-center justify-between px-6 py-4 w-full">
          <Search state="normal" />
          <div className="flex gap-2.5 items-start overflow-clip">
            <Button type="normal">Admin</Button>
            <Button type="primary">Tutorial</Button>
          </div>
        </div>

        {/* Overview Stats Section */}
        <div className="flex flex-col gap-4 items-start justify-center pb-0 pt-5 px-6 w-full">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] text-lg text-black m-0">
            Overview
          </p>
          <div className="flex gap-4 items-center w-full">
            <StatsBox count="10" label="Total Documents" />
            <StatsBox count="412" label="Total Mail" />
            <StatsBox count="54" label="Total Apps" />
            <StatsBox count="7" label="Total Board" />
          </div>
        </div>

        {/* News/Articles Section */}
        <div className="flex flex-col gap-4 items-start justify-center pb-0 pt-5 px-6 w-full">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] text-lg text-black m-0">
            Overview
          </p>
          <div className="flex flex-wrap gap-4 items-start w-full">
            <NewsCard
              title="Next Week"
              description="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday."
            />
            <NewsCard
              title="Next Week"
              description="President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday."
            />
            <NewsCard
              title="A look back at 2025"
              description="President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its"
            />
            <NewsCard
              title="NIS refutes Coupang"
              description="South Korea's National Intelligence Service on Tuesday denied Coupang interim"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
