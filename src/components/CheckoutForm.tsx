import Search from './Search';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';

// Avatar and icon images
const imgAvatar = "https://www.figma.com/api/mcp/asset/f6e7bf6d-1836-42a2-a94c-de612a5fb649";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/fa997e06-79e7-418c-b270-1e5f9c98f5fe";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/7cf11dc4-768a-43ea-8d2e-54e865349382";
const imgSmartHome = "https://www.figma.com/api/mcp/asset/59f39c80-3bba-46fb-979f-78f8e0f4f23c";
const imgFolder = "https://www.figma.com/api/mcp/asset/7e9005fa-f84e-4d5c-8a5c-cb6a934b52aa";
const imgLayoutGrid = "https://www.figma.com/api/mcp/asset/dd08a9e1-c990-4067-bc6d-c454db421ff1";
const imgChartBar = "https://www.figma.com/api/mcp/asset/1e3a199d-28da-497f-b3d2-8388ab99b134";
const imgMail = "https://www.figma.com/api/mcp/asset/d47a5e10-4eb5-490a-aff2-c0d34c9d538c";

export default function CheckoutForm() {
  return (
    <div className="bg-white flex items-start justify-center size-full">
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
        <div className="border border-[#d3d6e3] bg-white flex items-center justify-between px-6 py-4 w-full">
          <Search state="normal" />
          <div className="flex gap-2.5 items-start overflow-clip">
            <Button type="normal">Admin</Button>
            <Button type="primary">Tutorial</Button>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex flex-col items-start justify-center pb-0 pt-5 px-6 w-full">
          <div className="bg-white flex flex-col gap-6 items-start p-5 rounded-lg w-full">
            <p className="font-['Pretendard:Medium',sans-serif] leading-[1.5] text-2xl text-black m-0">
              Checkout
            </p>

            <div className="border-t border-[#2f353c] flex flex-col gap-4 items-start pb-0 pt-6 px-0 w-full">
              {/* Name Field */}
              <div className="flex gap-2 h-8 items-center w-full">
                <div className="flex h-8 items-center w-[120px]">
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-sm text-black m-0">
                    이름
                  </p>
                </div>
                <Input placeholder="이름을 입력해주세요." />
              </div>

              {/* Address Field */}
              <div className="flex gap-2 h-8 items-center w-full">
                <div className="flex h-8 items-center w-[120px]">
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-sm text-black m-0">
                    주소
                  </p>
                </div>
                <Select
                  options={[
                    { value: 'seoul', label: '서울특별시' },
                    { value: 'busan', label: '부산광역시' },
                    { value: 'incheon', label: '인천광역시' },
                  ]}
                  placeholder="선택"
                />
                <Input placeholder="상세주소를 입력해주세요." />
              </div>

              {/* Member Type Field */}
              <div className="flex gap-2 h-8 items-center w-full">
                <div className="flex h-8 items-center w-[120px]">
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-sm text-black m-0">
                    회원유형
                  </p>
                </div>
                <Checkbox label="신규회원" />
                <Checkbox label="기존회원" />
                <Checkbox label="관리자" />
              </div>

              {/* Contact Field */}
              <div className="flex gap-2 h-8 items-center w-full">
                <div className="flex h-8 items-center w-[120px]">
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-sm text-black m-0">
                    연락처
                  </p>
                </div>
                <Input placeholder="" className="w-[120px]" />
                <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] text-sm text-[#2f353c] m-0">
                  -
                </p>
                <Input placeholder="" className="w-[120px]" />
                <p className="font-['Pretendard:Regular',sans-serif] leading-[1.6] text-sm text-[#2f353c] m-0">
                  -
                </p>
                <Input placeholder="" className="w-[120px]" />
              </div>

              {/* Registration Source Field */}
              <div className="flex gap-2 h-8 items-center w-full">
                <div className="flex h-8 items-center w-[120px]">
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[1.6] text-sm text-black m-0">
                    가입경로
                  </p>
                </div>
                <Select
                  options={[
                    { value: 'online', label: '온라인' },
                    { value: 'offline', label: '오프라인' },
                    { value: 'referral', label: '추천' },
                  ]}
                  placeholder="선택"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-2 items-center justify-center pb-0 pt-5 px-6 w-full">
          <Button type="primary">저장</Button>
          <Button type="normal">취소</Button>
        </div>
      </div>
    </div>
  );
}
