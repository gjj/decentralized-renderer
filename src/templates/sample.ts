import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string
  };
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  recipient: {
    name: "John Doe"
  },
  $template: {
    name: "CERTIFICATE_OF_COMPLETION",
    type: "EMBEDDED_RENDERER",
    url: "https://renderer.tradetrust.jiajian.me"
  }
};