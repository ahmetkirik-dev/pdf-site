import React from "react";

interface ReportHeaderProps {
  title: string;
  subtitle?: string;
  pageNumber?: number;
  totalPages?: number;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({ title, subtitle, pageNumber, totalPages }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <div className="bg-primary px-6 py-3 inline-block">
            <h1 className="text-primary-foreground font-heading font-bold text-xl md:text-2xl uppercase tracking-wide">
              {title}
            </h1>
            {subtitle && (
              <p className="text-primary-foreground/80 text-sm mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="text-right ml-4">
          <h2 className="font-heading font-black text-primary text-2xl md:text-3xl tracking-tight">iTOSAM</h2>
          <p className="text-[10px] text-muted-foreground leading-tight">
            İSTANBUL TİCARET ODASI<br />
            STRATEJİK ARAŞTIRMALAR MERKEZİ
          </p>
        </div>
      </div>
      {pageNumber && totalPages && (
        <p className="text-xs text-muted-foreground">
          Sayfa {pageNumber} / {totalPages}
        </p>
      )}
    </div>
  );
};

export default ReportHeader;
