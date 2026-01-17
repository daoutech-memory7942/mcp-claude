import { Button } from "../components";
import { Link } from "react-router-dom";

export default function ComponentPage() {
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
    </div>
  );
}
