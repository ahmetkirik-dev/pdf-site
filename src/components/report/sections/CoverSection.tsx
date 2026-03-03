import React from "react";

const CoverSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="font-heading font-black text-primary text-4xl md:text-5xl tracking-tight mb-2">
        iTOSAM
      </h2>
      <p className="text-xs text-muted-foreground mb-10 tracking-widest uppercase">
        İstanbul Ticaret Odası · Stratejik Araştırmalar Merkezi
      </p>
      
      <div className="bg-primary px-8 py-4 mb-6">
        <h1 className="font-heading font-bold text-primary-foreground text-2xl md:text-4xl uppercase tracking-wide">
          TÜRKİYE
        </h1>
      </div>
      
      <h2 className="font-heading font-bold text-foreground text-xl md:text-3xl mb-2">
        GAYRİMENKUL SEKTÖRÜ RAPORU
      </h2>
      <p className="text-muted-foreground text-lg mb-10">Kapsamlı Piyasa Analizi • 2013 – 2026</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full">
        {[
          { num: "01", title: "Konut Fiyat Endeksi (KFE)", period: "2013–2026" },
          { num: "02", title: "Konut Satış İstatistikleri", period: "2013–2025" },
          { num: "03", title: "Yapı İzin İstatistikleri", period: "2023–2025" },
          { num: "04", title: "İnşaat Maliyet Endeksi", period: "2015–2025" },
          { num: "05", title: "İnşaat Ciro Endeksi", period: "2022–2025" },
          { num: "06", title: "İnşaat Sektörü İstihdam", period: "2020–2025" },
        ].map((item) => (
          <div key={item.num} className="bg-card border border-border rounded-lg p-4 text-left hover:border-primary transition-colors">
            <span className="text-secondary font-heading font-black text-2xl">{item.num}</span>
            <p className="font-heading font-semibold text-sm text-foreground mt-1">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.period}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-10">Kaynak: TÜİK • TCMB / EVDS • TKGM</p>
    </div>
  );
};

export default CoverSection;
