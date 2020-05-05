import { CustomTemplate } from "../customTemplate";
import { customTemplateCertificate } from "../../sample";
import { render } from "@testing-library/react";
import React from "react";

describe("customTemplate", () => {
  it("should render with title provided by the document", () => {
    const { queryByText } = render(
      <CustomTemplate document={customTemplateCertificate} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("OpenAttestation Tutorial Certificate of Completion")).toBeTruthy();
  });
  it("should render with default title", () => {
    const { queryByText } = render(
      // Updated test case for certificate of completion
      <CustomTemplate document={customTemplateCertificate} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("John Doe")).toBeTruthy();
  });
});
