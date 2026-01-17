import { useState } from "react";
import { Button, Toggle, Input, Select, Checkbox, Radio, Search, Dropdown, Toast } from "../components";
import { Link } from "react-router-dom";

export default function ComponentPage() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState<string[]>(["customer", "task"]);

  return (
    <div className="max-w-4xl w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-pretendard text-typo-heading-xlarge text-text-neutral-base">
          Components
        </h1>
        <Link to="/">
          <Button type="ghost">Back to Home</Button>
        </Link>
      </div>

      {/* Button Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Button
        </h2>

        <div className="space-y-6">
          {/* Primary */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Primary
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button type="primary">Button</Button>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Secondary
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button type="secondary">Button</Button>
            </div>
          </div>

          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button type="normal">Button</Button>
            </div>
          </div>

          {/* Ghost */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Ghost
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button type="ghost">Button</Button>
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Button type="primary">Button</Button>
<Button type="secondary">Button</Button>
<Button type="normal">Button</Button>
<Button type="ghost">Button</Button>`}
          </pre>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Toggle
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="flex flex-wrap gap-6">
              <Toggle
                label="토글버튼"
                checked={toggle1}
                onChange={setToggle1}
              />
              <Toggle
                label="토글버튼"
                checked={toggle2}
                onChange={setToggle2}
              />
            </div>
          </div>

          {/* Disabled */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Disabled
            </h3>
            <div className="flex flex-wrap gap-6">
              <Toggle label="토글버튼" checked={false} disabled />
              <Toggle label="토글버튼" checked={true} disabled />
            </div>
          </div>

          {/* Without Label */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Without Label
            </h3>
            <div className="flex flex-wrap gap-6">
              <Toggle checked={false} />
              <Toggle checked={true} />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Toggle label="토글버튼" checked={checked} onChange={setChecked} />
<Toggle label="토글버튼" checked={true} disabled />
<Toggle checked={false} />`}
          </pre>
        </div>
      </section>

      {/* Input Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Input
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="max-w-[184px]">
              <Input
                value={inputValue}
                onChange={setInputValue}
              />
            </div>
          </div>

          {/* Error */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Error
            </h3>
            <div className="max-w-[184px]">
              <Input
                error
                errorMessage="상황에 맞는 메시지를 넣어주세요."
              />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Input value={value} onChange={setValue} />
<Input error errorMessage="에러 메시지" />`}
          </pre>
        </div>
      </section>

      {/* Select Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Select
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="max-w-[184px]">
              <Select
                options={[
                  { value: "option1", label: "옵션 1" },
                  { value: "option2", label: "옵션 2" },
                  { value: "option3", label: "옵션 3" },
                ]}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="셀렉트"
              />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Select
  options={[
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
  ]}
  value={value}
  onChange={setValue}
  placeholder="셀렉트"
/>`}
          </pre>
        </div>
      </section>

      {/* Checkbox Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Checkbox
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="flex flex-wrap gap-6">
              <Checkbox
                label="체크박스"
                checked={checkbox1}
                onChange={setCheckbox1}
              />
              <Checkbox
                label="체크박스"
                checked={checkbox2}
                onChange={setCheckbox2}
              />
            </div>
          </div>

          {/* Disabled */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Disabled
            </h3>
            <div className="flex flex-wrap gap-6">
              <Checkbox label="체크박스" checked={false} disabled />
              <Checkbox label="체크박스" checked={true} disabled />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Checkbox label="체크박스" checked={checked} onChange={setChecked} />
<Checkbox label="체크박스" checked={true} disabled />`}
          </pre>
        </div>
      </section>

      {/* Radio Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Radio
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="flex flex-wrap gap-6">
              <Radio
                label="라디오버튼"
                checked={radioValue === "option1"}
                onChange={() => setRadioValue("option1")}
                name="radio-demo"
              />
              <Radio
                label="라디오버튼"
                checked={radioValue === "option2"}
                onChange={() => setRadioValue("option2")}
                name="radio-demo"
              />
            </div>
          </div>

          {/* Disabled */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Disabled
            </h3>
            <div className="flex flex-wrap gap-6">
              <Radio label="라디오버튼" checked={false} disabled />
              <Radio label="라디오버튼" checked={true} disabled />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Radio
  label="라디오버튼"
  checked={value === "option1"}
  onChange={() => setValue("option1")}
  name="radio-group"
/>
<Radio label="라디오버튼" checked={true} disabled />`}
          </pre>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Search
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="max-w-[184px]">
              <Search
                value={searchValue}
                onChange={setSearchValue}
              />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Search value={value} onChange={setValue} />
<Search onSearch={(value) => console.log(value)} />`}
          </pre>
        </div>
      </section>

      {/* Dropdown Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Dropdown
        </h2>

        <div className="space-y-6">
          {/* Normal */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Normal
            </h3>
            <div className="max-w-[200px]">
              <Dropdown
                options={[
                  { value: "customer", label: "고객사명" },
                  { value: "task", label: "업무 유형" },
                  { value: "manager", label: "담당자" },
                  { value: "regDate", label: "등록일" },
                  { value: "endDate", label: "종료일" },
                ]}
                value={dropdownValue}
                onChange={setDropdownValue}
                placeholder="선택하세요"
              />
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Dropdown
  options={[
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
  ]}
  value={selectedValues}
  onChange={setSelectedValues}
  placeholder="선택하세요"
/>`}
          </pre>
        </div>
      </section>

      {/* Toast Section */}
      <section className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
        <h2 className="font-pretendard text-typo-heading-large text-text-neutral-base mb-6">
          Toast
        </h2>

        <div className="space-y-6">
          {/* Success */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Success
            </h3>
            <Toast
              type="success"
              message="게시글이 정상적으로 등록되었습니다."
            />
          </div>

          {/* Error */}
          <div>
            <h3 className="font-pretendard text-typo-heading-small text-text-neutral-base mb-3">
              Error
            </h3>
            <Toast
              type="error"
              message="파일 업로드 용량을 초과하였습니다."
            />
          </div>
        </div>

        {/* Usage Code */}
        <div className="mt-8 p-4 bg-bg-neutral-level1 rounded-medium">
          <p className="font-pretendard text-typo-body-small-regular text-text-neutral-description mb-2">
            Usage:
          </p>
          <pre className="font-mono text-typo-body-small-regular text-text-neutral-base overflow-x-auto">
{`<Toast type="success" message="성공 메시지" />
<Toast type="error" message="에러 메시지" />`}
          </pre>
        </div>
      </section>
    </div>
  );
}
