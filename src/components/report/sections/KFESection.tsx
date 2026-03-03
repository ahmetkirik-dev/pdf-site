import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import ReportHeader from "../ReportHeader";
import StatCard from "../StatCard";
import ReportTable from "../ReportTable";

const kfeData = [
  { yil: 2013, oca: 6.39, ara: 6.64, degisim: 3.9, toplam: 0 },
  { yil: 2014, oca: 6.67, ara: 7.53, degisim: 12.9, toplam: 17.8 },
  { yil: 2015, oca: 7.65, ara: 8.67, degisim: 13.3, toplam: 35.7 },
  { yil: 2016, oca: 8.82, ara: 9.70, degisim: 10.0, toplam: 51.8 },
  { yil: 2017, oca: 9.83, ara: 10.61, degisim: 7.9, toplam: 66.0 },
  { yil: 2018, oca: 10.68, ara: 11.19, degisim: 4.8, toplam: 75.1 },
  { yil: 2019, oca: 11.18, ara: 12.29, degisim: 9.9, toplam: 92.3 },
  { yil: 2020, oca: 12.61, ara: 16.23, degisim: 28.7, toplam: 154.0 },
  { yil: 2021, oca: 16.49, ara: 26.54, degisim: 60.9, toplam: 315.3 },
  { yil: 2022, oca: 29.95, ara: 66.85, degisim: 123.2, toplam: 946.8 },
  { yil: 2023, oca: 78.58, ara: 136.42, degisim: 104.0, toplam: 2034.0 },
  { yil: 2024, oca: 145.26, ara: 185.52, degisim: 36.0, toplam: 2803.0 },
];

const lineData = kfeData.map(d => ({ yil: d.yil, endeks: d.ara }));
const barData = kfeData.filter(d => d.yil > 2013).map(d => ({ yil: d.yil, degisim: d.degisim }));

const KFESection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="Konut Fiyat Endeksi (KFE)" subtitle="TCMB/EVDS • 2013 – 2026" pageNumber={2} totalPages={8} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Başlangıç (Tem 2013)" value="6,39" />
        <StatCard label="Son Değer (Oca 2026)" value="211,82" highlight />
        <StatCard label="Toplam Artış" value="+3.214,9%" />
        <StatCard label="En Yüksek" value="211,82" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-heading font-bold text-sm mb-4">Konut Fiyat Endeksi — Tüm Dönem (2013-2026)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} />
              <Area type="monotone" dataKey="endeks" fill="hsl(var(--report-blue) / 0.15)" stroke="hsl(var(--report-blue))" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-heading font-bold text-sm mb-4">Yılsonu KFE Değişimi (%)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} />
              <Bar dataKey="degisim" fill="hsl(var(--report-orange))" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <ReportTable
        title="Yıllık KFE Özet Tablosu"
        headers={["Yıl", "Ocak", "Aralık", "Yıl İçi Değişim", "Toplam (2013 Baz)"]}
        rows={kfeData.map(d => [
          d.yil,
          d.oca.toFixed(2),
          d.ara.toFixed(2),
          d.yil === 2013 ? "+3,9%" : `+${d.degisim}%`,
          d.yil === 2013 ? "—" : `+${d.toplam}%`,
        ])}
      />
    </div>
  );
};

export default KFESection;
