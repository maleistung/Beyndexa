import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Terms of Use" };
export default function TermsPage() {
  return <LegalPage title="Terms of Use" updated="November 2026" sections={[
    { h: "Acceptance", p: ["By accessing beyondexa.com, you agree to these Terms of Use. If you do not agree, please do not use the website."] },
    { h: "Use of the website", p: ["The website is provided for general information about Beyondexa LLC. You may not use it unlawfully, attempt to disrupt it, or copy its content for commercial purposes without permission."] },
    { h: "Intellectual property", p: ["All content, trademarks, and designs on this website belong to Beyondexa LLC or its licensors and are protected by applicable law."] },
    { h: "No warranties", p: ["The website is provided \"as is\" without warranties of any kind. Information may change without notice and does not constitute an offer, investment advice, or professional advice."] },
    { h: "Limitation of liability", p: ["To the fullest extent permitted by law, Beyondexa LLC is not liable for any damages arising from use of, or inability to use, this website."] },
    { h: "Governing law", p: ["These terms are governed by the laws of the State of Wyoming, United States."] },
    { h: "Contact", p: ["Questions about these terms can be sent to contact@beyondexa.com."] },
  ]} />;
}
