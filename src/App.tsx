import { useState } from 'react'
import Button from './components/Button'
import Toggle from './components/Toggle'
import Input from './components/Input'
import Select from './components/Select'
import Checkbox from './components/Checkbox'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Toast from './components/Toast'
import Dialog from './components/Dialog'

function App() {
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(true)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const [agreeMarketing, setAgreeMarketing] = useState(false)
  const [columnSelection, setColumnSelection] = useState<string[]>([])
  const [filterSelection, setFilterSelection] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Figma Components Demo
          </h1>
          <p className="text-gray-600">
            All components from Figma design with complete variants
          </p>
        </div>

        {/* Button Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Button Component</h2>
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Primary</h3>
              <div className="flex gap-4">
                <Button type="primary">Button</Button>
                <Button type="primary">Hover me</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Secondary</h3>
              <div className="flex gap-4">
                <Button type="secondary">Button</Button>
                <Button type="secondary">Hover me</Button>
              </div>
            </div>

            {/* Normal Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal</h3>
              <div className="flex gap-4">
                <Button type="normal">Button</Button>
                <Button type="normal">Hover me</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ghost</h3>
              <div className="flex gap-4">
                <Button type="ghost">Button</Button>
                <Button type="ghost">Hover me</Button>
              </div>
            </div>

            {/* All variants in one row */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">All Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button type="primary">Primary</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="normal">Normal</Button>
                <Button type="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Toggle Component</h2>
          <div className="space-y-6">
            {/* Normal State - Off */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal - Off</h3>
              <Toggle label="토글버튼" />
            </div>

            {/* Normal State - On */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal - On</h3>
              <Toggle label="토글버튼" checked={true} />
            </div>

            {/* Disabled State - Off */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled - Off</h3>
              <Toggle label="토글버튼" disabled />
            </div>

            {/* Disabled State - On */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled - On</h3>
              <Toggle label="토글버튼" disabled checked={true} />
            </div>

            {/* Interactive Examples */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive</h3>
              <div className="space-y-4">
                <Toggle
                  label="Controlled Toggle 1"
                  checked={toggle1}
                  onChange={setToggle1}
                />
                <Toggle
                  label="Controlled Toggle 2"
                  checked={toggle2}
                  onChange={setToggle2}
                />
                <Toggle label="Uncontrolled Toggle" />
                <Toggle label={false} />
                <Toggle label="Custom Label Text" />
              </div>
            </div>
          </div>
        </div>

        {/* Input Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Input Component</h2>
          <div className="space-y-6">
            {/* Normal State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal State</h3>
              <div className="max-w-sm">
                <Input placeholder="텍스트를 입력해주세요." />
              </div>
            </div>

            {/* Hover/Focus State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover/Focus State</h3>
              <div className="max-w-sm">
                <Input placeholder="텍스트를 입력해주세요." />
                <p className="text-sm text-gray-500 mt-2">Click to focus and see the border change</p>
              </div>
            </div>

            {/* Error State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Error State</h3>
              <div className="max-w-sm">
                <Input
                  placeholder="텍스트를 입력해주세요."
                  error={true}
                  errorMessage="상황에 맞는 메시지를 넣어주세요."
                />
              </div>
            </div>

            {/* Interactive Example - Basic */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive Input</h3>
              <div className="max-w-sm space-y-2">
                <Input
                  placeholder="Type something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p className="text-sm text-gray-600">Value: {inputValue || '(empty)'}</p>
              </div>
            </div>

            {/* Interactive Example - Email Validation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Email Validation Example</h3>
              <div className="max-w-sm space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={emailValue}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmailValue(value);
                    setEmailError(value.length > 0 && !value.includes('@'));
                  }}
                  error={emailError}
                  errorMessage="Please enter a valid email address"
                />
              </div>
            </div>

            {/* Multiple Inputs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Form Example</h3>
              <div className="max-w-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Select Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Component</h2>
          <div className="space-y-6">
            {/* Normal State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal State</h3>
              <div className="max-w-sm">
                <Select
                  options={[
                    { value: 'option1', label: '옵션 1' },
                    { value: 'option2', label: '옵션 2' },
                    { value: 'option3', label: '옵션 3' },
                  ]}
                  placeholder="셀렉트"
                />
              </div>
            </div>

            {/* Hover/Focus State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover/Focus State</h3>
              <div className="max-w-sm">
                <Select
                  options={[
                    { value: 'option1', label: '옵션 1' },
                    { value: 'option2', label: '옵션 2' },
                    { value: 'option3', label: '옵션 3' },
                  ]}
                  placeholder="셀렉트"
                />
                <p className="text-sm text-gray-500 mt-2">Click to open and see the border change</p>
              </div>
            </div>

            {/* Interactive Example - Country Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive Select</h3>
              <div className="max-w-sm space-y-2">
                <Select
                  options={[
                    { value: 'korea', label: '대한민국' },
                    { value: 'usa', label: '미국' },
                    { value: 'japan', label: '일본' },
                    { value: 'china', label: '중국' },
                  ]}
                  placeholder="국가를 선택하세요"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                />
                <p className="text-sm text-gray-600">
                  Selected: {selectedCountry || '(none)'}
                </p>
              </div>
            </div>

            {/* Multiple Selects */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Form Example with Selects</h3>
              <div className="max-w-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <Select
                    options={[
                      { value: 'korea', label: 'South Korea' },
                      { value: 'usa', label: 'United States' },
                      { value: 'japan', label: 'Japan' },
                      { value: 'uk', label: 'United Kingdom' },
                    ]}
                    placeholder="Select a country"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <Select
                    options={[
                      { value: 'seoul', label: 'Seoul' },
                      { value: 'busan', label: 'Busan' },
                      { value: 'incheon', label: 'Incheon' },
                      { value: 'daegu', label: 'Daegu' },
                    ]}
                    placeholder="Select a city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select
                    options={[
                      { value: 'tech', label: 'Technology' },
                      { value: 'design', label: 'Design' },
                      { value: 'business', label: 'Business' },
                      { value: 'marketing', label: 'Marketing' },
                    ]}
                    placeholder="Select a category"
                  />
                </div>
              </div>
            </div>

            {/* Different Option Sets */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Various Options</h3>
              <div className="max-w-sm space-y-4">
                <Select
                  options={[
                    { value: 'xs', label: 'Extra Small' },
                    { value: 's', label: 'Small' },
                    { value: 'm', label: 'Medium' },
                    { value: 'l', label: 'Large' },
                    { value: 'xl', label: 'Extra Large' },
                  ]}
                  placeholder="Select size"
                />
                <Select
                  options={[
                    { value: 'red', label: 'Red' },
                    { value: 'blue', label: 'Blue' },
                    { value: 'green', label: 'Green' },
                    { value: 'yellow', label: 'Yellow' },
                  ]}
                  placeholder="Select color"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Component</h2>
          <div className="space-y-6">
            {/* Normal State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal State</h3>
              <div className="max-w-sm">
                <Search />
              </div>
            </div>

            {/* Hover State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover State</h3>
              <div className="max-w-sm">
                <Search state="hover" />
                <p className="text-sm text-gray-500 mt-2">Hover over the first search to see the border change</p>
              </div>
            </div>

            {/* Custom Placeholder */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Custom Placeholder</h3>
              <div className="max-w-sm">
                <Search placeholder="Search for anything..." />
              </div>
            </div>

            {/* Multiple Search Components */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Multiple Search Inputs</h3>
              <div className="max-w-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Global Search</label>
                  <Search placeholder="검색어를 입력해주세요." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter Search</label>
                  <Search placeholder="필터 검색..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Search</label>
                  <Search placeholder="상품명 검색" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dropdown Component</h2>
          <div className="space-y-6">
            {/* Basic Dropdown with Search */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Column Filter Dropdown</h3>
              <div className="flex gap-4 items-start">
                <Dropdown
                  options={[
                    { value: 'client', label: '고객사명', checked: true },
                    { value: 'type', label: '업무 유형', checked: true },
                    { value: 'manager', label: '담당자', checked: false },
                    { value: 'startDate', label: '등록일', checked: false },
                    { value: 'endDate', label: '종료일', checked: false },
                  ]}
                  onChange={(selected) => setColumnSelection(selected)}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Selected columns:</p>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">
                    {columnSelection.length > 0 ? columnSelection.join(', ') : 'None'}
                  </p>
                </div>
              </div>
            </div>

            {/* Dropdown without Search */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Dropdown (No Search)</h3>
              <div className="flex gap-4 items-start">
                <Dropdown
                  searchable={false}
                  options={[
                    { value: 'active', label: '활성', checked: true },
                    { value: 'inactive', label: '비활성', checked: false },
                    { value: 'pending', label: '대기중', checked: false },
                  ]}
                  onChange={(selected) => setFilterSelection(selected)}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Selected filters:</p>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">
                    {filterSelection.length > 0 ? filterSelection.join(', ') : 'None'}
                  </p>
                </div>
              </div>
            </div>

            {/* Multiple Dropdowns */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Multiple Dropdowns</h3>
              <div className="flex gap-4 flex-wrap">
                <Dropdown
                  options={[
                    { value: 'read', label: '읽기', checked: true },
                    { value: 'write', label: '쓰기', checked: true },
                    { value: 'delete', label: '삭제', checked: false },
                    { value: 'admin', label: '관리자', checked: false },
                  ]}
                  searchPlaceholder="권한 검색..."
                />
                <Dropdown
                  options={[
                    { value: 'pdf', label: 'PDF', checked: false },
                    { value: 'excel', label: 'Excel', checked: true },
                    { value: 'csv', label: 'CSV', checked: false },
                    { value: 'json', label: 'JSON', checked: false },
                  ]}
                  searchPlaceholder="파일 형식 검색..."
                />
                <Dropdown
                  searchable={false}
                  options={[
                    { value: 'kr', label: '한국어', checked: true },
                    { value: 'en', label: 'English', checked: false },
                    { value: 'jp', label: '日本語', checked: false },
                  ]}
                />
              </div>
            </div>

            {/* Large List with Search */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Large List with Search</h3>
              <Dropdown
                options={[
                  { value: 'item1', label: '항목 1', checked: false },
                  { value: 'item2', label: '항목 2', checked: true },
                  { value: 'item3', label: '항목 3', checked: false },
                  { value: 'item4', label: '항목 4', checked: false },
                  { value: 'item5', label: '항목 5', checked: true },
                  { value: 'item6', label: '항목 6', checked: false },
                  { value: 'item7', label: '항목 7', checked: false },
                  { value: 'item8', label: '항목 8', checked: false },
                ]}
                searchPlaceholder="항목 검색..."
              />
            </div>
          </div>
        </div>

        {/* Toast Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Toast Component</h2>
          <div className="space-y-6">
            {/* Success Toast */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Success Toast</h3>
              <div className="flex flex-col gap-4">
                <Toast type="success" />
                <Toast
                  type="success"
                  message="파일이 성공적으로 업로드되었습니다."
                />
                <Toast
                  type="success"
                  message="변경사항이 저장되었습니다."
                />
              </div>
            </div>

            {/* Fail Toast */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Fail Toast</h3>
              <div className="flex flex-col gap-4">
                <Toast type="fail" />
                <Toast
                  type="fail"
                  message="네트워크 연결에 실패했습니다."
                />
                <Toast
                  type="fail"
                  message="잘못된 요청입니다. 다시 시도해주세요."
                />
              </div>
            </div>

            {/* Both Types */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">All Variants</h3>
              <div className="flex flex-col gap-4">
                <Toast type="success" message="작업이 완료되었습니다." />
                <Toast type="fail" message="작업에 실패했습니다." />
              </div>
            </div>

            {/* Custom Messages */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Custom Messages</h3>
              <div className="flex flex-col gap-4">
                <Toast type="success" message="사용자가 추가되었습니다." />
                <Toast type="success" message="이메일이 전송되었습니다." />
                <Toast type="fail" message="비밀번호가 일치하지 않습니다." />
                <Toast type="fail" message="권한이 없습니다." />
              </div>
            </div>

            {/* Interactive Demo */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive Demo</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button
                    type="primary"
                    onClick={() => {
                      // In a real app, this would trigger a toast notification
                      alert('Success toast would appear here!')
                    }}
                  >
                    Show Success Toast
                  </Button>
                  <Button
                    type="normal"
                    onClick={() => {
                      // In a real app, this would trigger a toast notification
                      alert('Fail toast would appear here!')
                    }}
                  >
                    Show Fail Toast
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  In a production app, these buttons would trigger toast notifications that appear temporarily.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dialog Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dialog Component</h2>
          <div className="space-y-6">
            {/* Default Dialog */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Default Dialog</h3>
              <div className="max-w-md">
                <Dialog />
              </div>
            </div>

            {/* Custom Dialog */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Custom Dialog</h3>
              <div className="max-w-md">
                <Dialog
                  title="프로젝트 삭제"
                  description="정말로 이 프로젝트를 삭제하시겠습니까?"
                  cancelText="아니오"
                  confirmText="예, 삭제합니다"
                  onCancel={() => console.log('Cancelled')}
                  onConfirm={() => console.log('Confirmed')}
                />
              </div>
            </div>

            {/* Interactive Dialog */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive Dialog</h3>
              <div className="max-w-md">
                <Dialog
                  title="사용자 초대"
                  description="초대할 사용자를 검색해주세요."
                  cancelText="취소"
                  confirmText="초대하기"
                  onCancel={() => alert('Dialog cancelled')}
                  onConfirm={() => alert('Dialog confirmed')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkbox Component</h2>
          <div className="space-y-6">
            {/* Normal State - Unchecked */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal - Unchecked</h3>
              <div className="max-w-sm">
                <Checkbox label="체크박스" />
              </div>
            </div>

            {/* Normal State - Checked */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Normal - Checked</h3>
              <div className="max-w-sm">
                <Checkbox label="체크박스" checked={true} onChange={() => {}} />
              </div>
            </div>

            {/* Hover State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Hover State</h3>
              <div className="max-w-sm">
                <Checkbox label="체크박스" />
                <p className="text-sm text-gray-500 mt-2">Hover over the checkbox to see the border change</p>
              </div>
            </div>

            {/* Disabled State - Unchecked */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled - Unchecked</h3>
              <div className="max-w-sm">
                <Checkbox label="체크박스" disabled />
              </div>
            </div>

            {/* Disabled State - Checked */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Disabled - Checked</h3>
              <div className="max-w-sm">
                <Checkbox label="체크박스" disabled checked={true} onChange={() => {}} />
              </div>
            </div>

            {/* Interactive Examples */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Interactive Checkboxes</h3>
              <div className="max-w-sm space-y-3">
                <Checkbox
                  label="Controlled Checkbox 1"
                  checked={checkbox1}
                  onChange={(e) => setCheckbox1(e.target.checked)}
                />
                <Checkbox
                  label="Controlled Checkbox 2"
                  checked={checkbox2}
                  onChange={(e) => setCheckbox2(e.target.checked)}
                />
                <Checkbox label="Uncontrolled Checkbox" />
                <p className="text-sm text-gray-600 pt-2">
                  Checkbox 1: {checkbox1 ? 'Checked' : 'Unchecked'}<br />
                  Checkbox 2: {checkbox2 ? 'Checked' : 'Unchecked'}
                </p>
              </div>
            </div>

            {/* Terms Agreement Example */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Terms Agreement Form</h3>
              <div className="max-w-sm space-y-3">
                <Checkbox
                  label="I agree to the Terms and Conditions"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <Checkbox
                  label="I agree to the Privacy Policy"
                  checked={agreePrivacy}
                  onChange={(e) => setAgreePrivacy(e.target.checked)}
                />
                <Checkbox
                  label="I agree to receive marketing emails (optional)"
                  checked={agreeMarketing}
                  onChange={(e) => setAgreeMarketing(e.target.checked)}
                />
                <div className="pt-4">
                  <Button
                    type="primary"
                    disabled={!agreeTerms || !agreePrivacy}
                    className="w-full"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>

            {/* Multiple Checkboxes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Your Interests</h3>
              <div className="max-w-sm space-y-3">
                <Checkbox label="Technology" />
                <Checkbox label="Design" />
                <Checkbox label="Business" />
                <Checkbox label="Marketing" />
                <Checkbox label="Development" />
              </div>
            </div>

            {/* Without Label */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Without Label</h3>
              <div className="max-w-sm flex gap-4">
                <Checkbox />
                <Checkbox checked={true} onChange={() => {}} />
                <Checkbox disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
