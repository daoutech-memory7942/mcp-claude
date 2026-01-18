import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";

export default function CheckoutPage() {
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
    <DashboardLayout>
      <DashboardLayout.Sidebar />
      <DashboardLayout.Main>
        <DashboardLayout.Header variant="transparent" />
        <DashboardLayout.Content>
          {/* 폼 컨테이너 */}
          <DashboardLayout.Section>
            <DashboardLayout.Card>
              <DashboardLayout.CardTitle>Checkout</DashboardLayout.CardTitle>
              <DashboardLayout.CardContent>
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
              </DashboardLayout.CardContent>
            </DashboardLayout.Card>
          </DashboardLayout.Section>

          {/* 버튼 영역 */}
          <DashboardLayout.ActionBar>
            <Button type="primary" onClick={handleSave}>
              저장
            </Button>
            <Button type="normal" onClick={handleCancel}>
              취소
            </Button>
          </DashboardLayout.ActionBar>
        </DashboardLayout.Content>
      </DashboardLayout.Main>
    </DashboardLayout>
  );
}
