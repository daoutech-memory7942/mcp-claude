import DashboardLayout from "../components/DashboardLayout";
import { ChevronRightIcon, PhotoIcon } from "../components/icons";

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

// 통계 카드 컴포넌트
function StatCardComponent({ value, label }: StatCard) {
  return (
    <div className="flex-1 bg-bg-neutral-base rounded-small overflow-hidden">
      <div className="flex items-center gap-p-5 px-p-7 py-p-8">
        <div className="flex flex-col flex-1">
          <p className="font-pretendard text-typo-heading-medium text-text-neutral-base">
            {value}
          </p>
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-base">
            {label}
          </p>
        </div>
        <div className="w-h-7 h-h-7 bg-bg-neutral-level1 rounded-medium shrink-0" />
      </div>
      <div className="flex items-center justify-between border-t border-border-neutral-level1 pl-p-7 pr-p-5 py-g-5">
        <span className="font-pretendard text-typo-body-small-regular text-text-neutral-base">
          See detail
        </span>
        <ChevronRightIcon size={16} color="#354052" />
      </div>
    </div>
  );
}

// 뉴스 카드 컴포넌트
function NewsCardComponent({ title, description }: NewsCard) {
  return (
    <div className="flex-1 min-w-[200px] h-[280px] bg-bg-neutral-base rounded-small overflow-hidden flex flex-col">
      <div className="flex items-center justify-center bg-[#f2f5f7] px-p-7 py-h-6">
        <PhotoIcon size={52} color="#9ca3af" />
      </div>
      <div className="flex-1 flex flex-col gap-g-5 border-t border-[#e4e6ec] pl-p-7 pr-p-5 py-g-5 overflow-hidden">
        <p className="font-pretendard text-typo-heading-medium text-text-neutral-base">
          {title}
        </p>
        <p className="flex-1 font-pretendard text-[13px] leading-[1.5] text-text-neutral-base overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
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
    <DashboardLayout>
      <DashboardLayout.Sidebar />
      <DashboardLayout.Main>
        <DashboardLayout.Header variant="default" />
        <DashboardLayout.Content>
          {/* Overview 섹션 - 통계 카드 */}
          <DashboardLayout.Section>
            <DashboardLayout.SectionTitle>Overview</DashboardLayout.SectionTitle>
            <div className="flex gap-g-6 w-full">
              {statCards.map((card, index) => (
                <StatCardComponent key={index} {...card} />
              ))}
            </div>
          </DashboardLayout.Section>

          {/* Overview 섹션 - 뉴스 카드 */}
          <DashboardLayout.Section>
            <DashboardLayout.SectionTitle>Overview</DashboardLayout.SectionTitle>
            <div className="flex flex-wrap gap-g-6 w-full">
              {newsCards.map((card, index) => (
                <NewsCardComponent key={index} {...card} />
              ))}
            </div>
          </DashboardLayout.Section>
        </DashboardLayout.Content>
      </DashboardLayout.Main>
    </DashboardLayout>
  );
}
