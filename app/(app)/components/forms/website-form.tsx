import { isValidLink } from "@lib/utils";
import { usePublicCreate } from "@lib/store/public-create-store";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

interface FormProps {
  submit: () => void;
}

const WebsiteForm = ({ submit }: FormProps) => {
  const { prevStep, setContent, setCustomMessage } = usePublicCreate();
  const [linkState, setLinkState] = useState(0); // 0 = none, 1 = invalid, 2 = valid
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (linkState !== 2) return;

    setContent(link);
    setCustomMessage(message);
    submit();
  };

  const validateLink = useDebouncedCallback(() => {
    const trimmedLink = link.trim();

    if (!trimmedLink) {
      setLinkState(0);
      setContent("");
      setError("");
      return;
    }

    if (isValidLink(trimmedLink)) {
      setLinkState(2);
      setContent(trimmedLink);
      setError("");
    } else {
      setLinkState(1);
      setContent("");
      setError("Invalid URL");
    }
  }, 500);

  useEffect(() => {
    validateLink();
  }, [link]);

  return (
    <div className="max-w-xl mx-auto px-4 mt-4 flex flex-col gap-4">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Website QR Code
      </h1>

      {linkState === 1 && <div className="text-sm text-red-500">{error}</div>}

      <div className="flex flex-col gap-2">
        <Label>Website URL</Label>
        <div className="flex items-center">
          <Input
            value="https://"
            className="w-24 rounded-r-none border-r-0 disabled:opacity-70"
            readOnly
            disabled
          />
          <Input
            placeholder="www.example.com"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className={
              "rounded-l-none flex-1" +
              (linkState === 1
                ? "border-red-500 focus-visible:ring-red-500"
                : linkState === 2
                ? "border-green-500 focus-visible:ring-green-500"
                : "")
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Custom Message</Label>
        <Input
          placeholder="Ex. Scan Me!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mt-12">
        <div className="items-top flex space-x-2 justify-center">
          <p className="text-sm text-muted-foreground">
            By clicking Generate you agree to our Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </div>
      <div className="flex mb-12 gap-2 justify-between">
        <Button variant="secondary" type="button" onClick={prevStep}>
          Go Back
        </Button>
        <Button type="submit" disabled={linkState !== 2} onClick={handleSubmit}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default WebsiteForm;
