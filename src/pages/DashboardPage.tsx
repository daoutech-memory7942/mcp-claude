import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../components/Search";
import Button from "../components/Button";

// Figma 에셋 이미지 URLs
const imgAvatar = "https://www.figma.com/api/mcp/asset/c550d699-b2f2-4048-9f96-4fb17fa259ae";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/9e9a64d7-1791-43ff-8247-223b9ebb05ce";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/8a36da6c-72ff-45d3-9036-bd036244aab1";
const imgSmartHome = "https://www.figma.com/api/mcp/asset/857b2928-b580-43df-9286-9fa6c97cd0d5";
const imgFolder = "https://www.figma.com/api/mcp/asset/1e9c6d4a-3d7d-4e82-99e8-88800cd9a5f9";
const imgLayoutGrid = "https://www.figma.com/api/mcp/asset/fd89f5c2-6b6d-4831-9970-f9c832b7e2ac";
const imgChartBar = "https://www.figma.com/api/mcp/asset/761f5180-4f1a-48ed-a85d-d56361846871";
const imgMail = "https://www.figma.com/api/mcp/asset/2adfa4a8-a416-484f-bb1f-d488c86f7be2";
const imgChevronRight = "https://www.figma.com/api/mcp/asset/39fde4aa-1bde-4c2a-a06f-df884031c2b4";
const imgPhoto = "https://www.figma.com/api/mcp/asset/a39ae1ca-f240-4682-b500-b965e7d0abda";

// 메뉴 아이템 타입
interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

// 통계 카드 타입
interface StatCard {
  value: string;
  label: string;
}

// 뉴스 카드 타입
interface NewsCard {
  title: string;
  description: string;
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

// 통계 카드 컴포넌트
function StatCardComponent({ value, label }: StatCard) {
  return (
    <div className="flex-1 bg-bg-neutral-base rounded-xlarge overflow-hidden">
      <div className="flex items-center gap-p-5 px-p-7 py-p-8">
        <div className="w-h-7 h-h-7 bg-bg-neutral-level1 rounded-medium" />
        <div className="flex flex-col flex-1">
          <p className="font-pretendard text-typo-heading-medium text-text-neutral-base">
            {value}
          </p>
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-base">
            {label}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border-neutral-level1 px-p-7 pr-p-5 py-g-5">
        <span className="font-pretendard text-typo-body-small-regular text-text-neutral-base">
          See detail
        </span>
        <img src={imgChevronRight} alt="" className="w-4 h-4" />
      </div>
    </div>
  );
}

// 뉴스 카드 컴포넌트
function NewsCardComponent({ title, description }: NewsCard) {
  return (
    <div className="flex-1 min-w-[200px] h-[280px] bg-bg-neutral-base rounded-xlarge overflow-hidden flex flex-col">
      <div className="flex items-center justify-center bg-bg-neutral-level1 px-p-7 py-h-6">
        <img src={imgPhoto} alt="" className="w-[52px] h-[52px]" />
      </div>
      <div className="flex-1 flex flex-col gap-g-5 border-t border-border-neutral-level1 px-p-7 pr-p-5 py-g-5 overflow-hidden">
        <p className="font-pretendard text-typo-heading-medium text-text-neutral-base">
          {title}
        </p>
        <p className="flex-1 font-pretendard text-typo-body-small-regular text-text-neutral-base overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: imgSmartHome, label: "홈", path: "/dashboard" },
    { icon: imgFolder, label: "드라이브", path: "/drive" },
    { icon: imgLayoutGrid, label: "Works", path: "/works" },
    { icon: imgChartBar, label: "설문", path: "/survey" },
    { icon: imgMail, label: "메일", path: "/mail" },
  ];

  const statCards: StatCard[] = [
    { value: "10", label: "Total Documents" },
    { value: "412", label: "Total Mail" },
    { value: "54", label: "Total Apps" },
    { value: "7", label: "Total Board" },
  ];

  const newsCards: NewsCard[] = [
    {
      title: "Next Week",
      description: "President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.",
    },
    {
      title: "Next Week",
      description: "President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.",
    },
    {
      title: "A look back at 2025",
      description: "President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its",
    },
    {
      title: "NIS refutes Coupang",
      description: "South Korea's National Intelligence Service on Tuesday denied Coupang interim",
    },
  ];

  return (
    <div
      className="flex items-start justify-center w-full h-full bg-white"
      data-pimitive-token="Mode-1"
      data-semantic-token="light-mode"
      data-component-token="mint"
    >
      {/* 사이드바 (GNB) */}
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
            src={imgAvatar}
            alt="프로필"
            className="w-h-6 h-h-6 rounded-full shrink-0"
          />
          <div className="flex flex-col flex-1 overflow-hidden">
            <span className="font-pretendard text-typo-body-medium-bold text-white">
              김다우 사원
            </span>
            <span className="font-pretendard text-typo-body-small-regular text-white">
              애플리케이션디자인팀
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

      {/* 메인 컨텐츠 */}
      <main className="flex-1 h-full bg-bg-neutral-level1 flex flex-col overflow-hidden pb-h-6">
        {/* 검색 헤더 */}
        <header className="flex items-center justify-between px-p-8 py-p-6 border-b border-border-neutral-level1 bg-bg-neutral-base">
          <Search
            value={searchValue}
            onChange={setSearchValue}
            className="max-w-[300px]"
          />
          <div className="flex items-start gap-g-5">
            <Button type="normal">Admin</Button>
            <Button type="primary">Tutorial</Button>
          </div>
        </header>

        {/* 스크롤 가능한 컨텐츠 영역 */}
        <div className="flex-1 overflow-y-auto">
          {/* Overview 섹션 - 통계 카드 */}
          <section className="flex flex-col gap-g-6 px-p-8 pt-p-7">
            <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base">
              Overview
            </h2>
            <div className="flex gap-g-6 w-full">
              {statCards.map((card, index) => (
                <StatCardComponent key={index} {...card} />
              ))}
            </div>
          </section>

          {/* Overview 섹션 - 뉴스 카드 */}
          <section className="flex flex-col gap-g-6 px-p-8 pt-p-7">
            <h2 className="font-pretendard text-typo-heading-medium text-text-neutral-base">
              Overview
            </h2>
            <div className="flex flex-wrap gap-g-6 w-full">
              {newsCards.map((card, index) => (
                <NewsCardComponent key={index} {...card} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
