import React from "react";
import ReportHeader from "../ReportHeader";

const findings = [
  {
    title: "Konut Fiyatları",
    icon: "🏠",
    color: "border-l-4 border-l-report-blue",
    text: "KFE 2013'teki 6,39 seviyesinden Ocak 2026'da 211,82'ye ulaştı. 13 yıllık toplam artış %3.215. En sert yükseliş 2022'de yaşandı (+%152). 2025'te artış hızı %23'e geriledi.",
  },
  {
    title: "Konut Satışları",
    icon: "📈",
    color: "border-l-4 border-l-report-orange",
    text: "2013–2025 arasında 17,9 milyon konut el değiştirdi. En düşük satış 2023'te (1,2M), en yüksek 2025'te (1,7M) gerçekleşti. İstanbul tüm yıllarda birinci sırada yer aldı.",
  },
  {
    title: "Yapı İzinleri",
    icon: "🏗️",
    color: "border-l-4 border-l-report-green",
    text: "2025'te 1,1M daire için yapı ruhsatı verildi; 2024'e kıyasla %30 artış. Kullanma izinleri 673K daire ile son 3 yılın zirvesine ulaştı.",
  },
  {
    title: "İnşaat Maliyetleri",
    icon: "💰",
    color: "border-l-4 border-l-report-red",
    text: "İME 2015'teki 100 baz seviyesinden Aralık 2025'e kadar 2.012'ye fırladı (+%1.971). 2021–2023 arası yıllık %45–%104 artışlarla en kritik dönem yaşandı.",
  },
  {
    title: "Ciro Endeksi",
    icon: "💹",
    color: "border-l-4 border-l-report-blue",
    text: "İnşaat ciro endeksi Ocak 2022'deki 82 seviyesinden Aralık 2025'te 2.229'a çıktı (+%2.614). Bina inşaat alt kategorisi en yüksek artışı kaydetti.",
  },
  {
    title: "İstihdam",
    icon: "👷",
    color: "border-l-4 border-l-report-orange",
    text: "İnşaat sektörü istihdamı 2020'den bu yana kesintisiz artarak 1,98 milyona ulaştı (+%41 kümülatif). En yüksek yıllık artış 2023'te (%10,5) gerçekleşti.",
  },
];

const OzetSection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="Genel Özet & Temel Bulgular" subtitle="Türkiye Gayrimenkul Sektörü • 2013–2026" pageNumber={8} totalPages={8} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {findings.map((f, i) => (
          <div key={i} className={`bg-card rounded-lg p-5 ${f.color} shadow-sm`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{f.icon}</span>
              <h3 className="font-heading font-bold text-base text-foreground">{f.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-5 text-center">
        <p className="text-xs text-muted-foreground">
          Bu rapor iTOSAM tarafından TÜİK, TCMB/EVDS ve TKGM verileri kullanılarak derlenmiştir.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Tüm veriler kamuya açık kaynaklardan alınmış olup bilgilendirme amaçlıdır.
        </p>
      </div>
    </div>
  );
};

export default OzetSection;
