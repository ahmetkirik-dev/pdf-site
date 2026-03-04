import React, { useState } from "react";
import SectionNav from "@/components/report/SectionNav";
import CoverSection from "@/components/report/sections/CoverSection";
import KFESection from "@/components/report/sections/KFESection";
import SatisSection from "@/components/report/sections/SatisSection";
import IzinSection from "@/components/report/sections/IzinSection";
import MaliyetSection from "@/components/report/sections/MaliyetSection";
import CiroSection from "@/components/report/sections/CiroSection";
import IstihdamSection from "@/components/report/sections/IstihdamSection";
import OzetSection from "@/components/report/sections/OzetSection";

const sectionComponents: Record<string, React.FC> = {
  cover: CoverSection,
  kfe: KFESection,
  satis: SatisSection,
  izin: IzinSection,
  maliyet: MaliyetSection,
  ciro: CiroSection,
  istihdam: IstihdamSection,
  ozet: OzetSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("cover");
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
        <SectionNav activeSection={activeSection} onSectionChange={setActiveSection} />
        <ActiveComponent />
        <footer className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Türkiye Gayrimenkul Sektörü Raporu 2013–2026 • Kaynak: TÜİK / TCMB / TKGM
          </p>
        </footer>
      </div>
      <div className="mt-16 text-center border-t pt-8">
  <p className="text-gray-600 mb-2">
    Bu konu hakkında daha detaylı bilgi için aşağıdaki PDF dosyasını indirebilirsiniz.
  </p>
  <a 
    href="/Turkiye_Gayrimenkul_Raporu_fixed_v4.pdf" 
    download
    className="text-blue-600 font-semibold hover:underline"
  >
    PDF’i İndir
  </a>
</div>
    </div>
  );
};

export default Index;
