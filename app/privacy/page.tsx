import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="November 2026" sections={[
    { h: "Who we are", p: ["Beyondexa LLC (\"Beyondexa\", \"we\", \"us\") is a limited liability company registered in Sheridan, Wyoming, United States. This policy explains how we handle information when you visit beyondexa.com or contact us."] },
    { h: "Information we collect", p: ["When you contact us, we receive the information you choose to provide, such as your name, email address, company, and message.", "Our website may collect standard technical information such as browser type, pages visited, and approximate location, through server logs or privacy-respecting analytics."] },
    { h: "Cookies", p: ["We use essential cookies required for the site to function and, with your consent, privacy-respecting analytics cookies. You can change your choice at any time by clearing your browser storage."] },
    { h: "How we use it", p: ["We use your information to respond to inquiries, operate and improve the website, and meet legal obligations. We do not sell personal information."] },
    { h: "International transfers", p: ["Because we operate across markets, information may be processed in countries other than your own. We apply appropriate safeguards where required by law."] },
    { h: "Sharing", p: ["We share information only with service providers who help us operate (such as hosting and email), and where required by law."] },
    { h: "Retention and security", p: ["We keep information only as long as needed for the purposes above and take reasonable measures to protect it."] },
    { h: "Your rights", p: ["Depending on where you live, you may have rights to access, correct, or delete your personal information. To exercise them, email contact@beyondexa.com."] },
    { h: "Contact", p: ["Questions about this policy can be sent to contact@beyondexa.com or to Beyondexa LLC, 1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801, United States."] },
  ]} />;
}
