import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../components/Search";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";

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

export default function CheckoutPage() {
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState("");
  const [addressRegion, setAddressRegion] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [memberType, setMemberType] = useState<{
    newMember: boolean;
    existingMember: boolean;
    manager: boolean;
  }>({
    newMember: false,
    existingMember: false,
    manager: false,
  });
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [signupChannel, setSignupChannel] = useState("");

  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: imgSmartHome, label: "홈", path: "/dashboard" },
    { icon: imgFolder, label: "드라이브", path: "/drive" },
    { icon: imgLayoutGrid, label: "Works", path: "/works" },
    { icon: imgChartBar, label: "설문", path: "/survey" },
    { icon: imgMail, label: "메일", path: "/mail" },
  ];

  const regionOptions = [
    { value: "seoul", label: "서울" },
    { value: "busan", label: "부산" },
    { value: "incheon", label: "인천" },
    { value: "daegu", label: "대구" },
    { value: "daejeon", label: "대전" },
    { value: "gwangju", label: "광주" },
  ];

  const channelOptions = [
    { value: "internet", label: "인터넷" },
    { value: "friend", label: "지인 소개" },
    { value: "advertisement", label: "광고" },
    { value: "other", label: "기타" },
  ];

  const handleSave = () => {
    console.log("저장", {
      name,
      addressRegion,
      addressDetail,
      memberType,
      phone: `${phone1}-${phone2}-${phone3}`,
      signupChannel,
    });
  };

  const handleCancel = () => {
    console.log("취소");
  };

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
        <header className="flex items-center justify-between px-6 py-4 border border-[#d3d6e3]">
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
          {/* 폼 컨테이너 */}
          <div className="px-p-8 pt-p-7">
            <div className="bg-bg-neutral-base rounded-large p-p-7 flex flex-col gap-g-8">
              {/* 페이지 타이틀 */}
              <h1 className="font-pretendard text-typo-heading-xlarge text-black">
                Checkout
              </h1>

              {/* 폼 필드 영역 */}
              <div className="border-t border-border-neutral-active pt-p-8 flex flex-col gap-g-6">
                {/* 이름 */}
                <div className="flex items-center gap-2">
                  <div className="w-[120px] h-8 flex items-center shrink-0">
                    <label className="font-pretendard text-typo-body-medium-bold text-black">
                      이름
                    </label>
                  </div>
                  <Input
                    value={name}
                    onChange={setName}
                    className="w-46"
                  />
                </div>

                {/* 주소 */}
                <div className="flex items-center gap-2">
                  <div className="w-[120px] h-8 flex items-center shrink-0">
                    <label className="font-pretendard text-typo-body-medium-bold text-black">
                      주소
                    </label>
                  </div>
                  <Select
                    options={regionOptions}
                    value={addressRegion}
                    onChange={setAddressRegion}
                    className="w-46"
                  />
                  <Input
                    value={addressDetail}
                    onChange={setAddressDetail}
                    placeholder="텍스트를 입력해주세요."
                    className="w-[481px]"
                  />
                </div>

                {/* 회원유형 */}
                <div className="flex items-center gap-2">
                  <div className="w-[120px] h-8 flex items-center shrink-0">
                    <label className="font-pretendard text-typo-body-medium-bold text-black">
                      회원유형
                    </label>
                  </div>
                  <Checkbox
                    label="신규회원"
                    checked={memberType.newMember}
                    onChange={(checked) =>
                      setMemberType((prev) => ({ ...prev, newMember: checked }))
                    }
                  />
                  <Checkbox
                    label="기존회원"
                    checked={memberType.existingMember}
                    onChange={(checked) =>
                      setMemberType((prev) => ({ ...prev, existingMember: checked }))
                    }
                  />
                  <Checkbox
                    label="관리자"
                    checked={memberType.manager}
                    onChange={(checked) =>
                      setMemberType((prev) => ({ ...prev, manager: checked }))
                    }
                  />
                </div>

                {/* 연락처 */}
                <div className="flex items-center gap-2">
                  <div className="w-[120px] h-8 flex items-center shrink-0">
                    <label className="font-pretendard text-typo-body-medium-bold text-black">
                      연락처
                    </label>
                  </div>
                  <Input
                    value={phone1}
                    onChange={setPhone1}
                    className="w-46"
                  />
                  <span className="font-pretendard text-typo-body-medium-regular text-text-neutral-base">
                    -
                  </span>
                  <Input
                    value={phone2}
                    onChange={setPhone2}
                    className="w-46"
                  />
                  <span className="font-pretendard text-typo-body-medium-regular text-text-neutral-base">
                    -
                  </span>
                  <Input
                    value={phone3}
                    onChange={setPhone3}
                    className="w-46"
                  />
                </div>

                {/* 가입경로 */}
                <div className="flex items-center gap-2">
                  <div className="w-[120px] h-8 flex items-center shrink-0">
                    <label className="font-pretendard text-typo-body-medium-bold text-black">
                      가입경로
                    </label>
                  </div>
                  <Select
                    options={channelOptions}
                    value={signupChannel}
                    onChange={setSignupChannel}
                    className="w-60"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex items-center justify-center gap-g-4 px-p-8 pt-p-7">
            <Button type="primary" onClick={handleSave}>
              저장
            </Button>
            <Button type="normal" onClick={handleCancel}>
              취소
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
