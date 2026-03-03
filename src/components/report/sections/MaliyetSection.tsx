import React from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ReportHeader from "../ReportHeader";
import StatCard from "../StatCard";
import ReportTable from "../ReportTable";

const imeData = [
  { yil: 2015, oca: 97.13, ara: 100.60, degisim: 3.6, kumulatif: "—" },
  { yil: 2016, oca: 108.19, ara: 118.90, degisim: 9.9, kumulatif: "+18,2%" },
  { yil: 2017, oca: 124.69, ara: 138.14, degisim: 10.8, kumulatif: "+37,3%" },
  { yil: 2018, oca: 144.92, ara: 173.57, degisim: 19.8, kumulatif: "+72,5%" },
  { yil: 2019, oca: 184.83, ara: 192.25, degisim: 4.0, kumulatif: "+91,0%" },
  { yil: 2020, oca: 202.04, ara: 240.35, degisim: 19.0, kumulatif: "+138,8%" },
  { yil: 2021, oca: 258.24, ara: 403.16, degisim: 56.1, kumulatif: "+300,5%" },
  { yil: 2022, oca: 464.60, ara: 719.25, degisim: 54.8, kumulatif: "+614,6%" },
  { yil: 2023, oca: 829.42, ara: 1203.41, degisim: 45.1, kumulatif: "+1.096%" },
  { yil: 2024, oca: 1392.33, ara: 1615.82, degisim: 16.1, kumulatif: "+1.505%" },
];

const lineData = imeData.map(d => ({ yil: d.yil, endeks: d.ara }));
const barData = imeData.map(d => ({ yil: d.yil, degisim: d.degisim }));

const MaliyetSection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="İnşaat Maliyet Endeksi (İME)" subtitle="TÜİK • 2015–2025 [2015=100]" pageNumber={5} totalPages={8} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Başlangıç (Oca 2015)" value="97,13" />
        <StatCard label="Son Değer (Ara 2025)" value="2.011,76" highlight />
        <StatCard label="Toplam Artış" value="+1.971,2%" />
        <StatCard label="En Yüksek" value="2.011,76" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-heading font-bold text-sm mb-4">İnşaat Maliyet Endeksi — 2015-2025</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} />
              <Area type="monotone" dataKey="endeks" fill="hsl(var(--report-orange) / 0.15)" stroke="hsl(var(--report-orange))" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-heading font-bold text-sm mb-4">Yıllık Ort. İME Değişimi (%)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} />
              <Bar dataKey="degisim" fill="hsl(var(--report-blue))" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <ReportTable
        title="Yıllık İME Özet Tablosu"
        headers={["Yıl", "Ocak", "Aralık", "Yıl Değişimi", "Kümülatif (2015=100)"]}
        rows={imeData.map(d => [
          d.yil,
          d.oca.toFixed(2),
          d.ara.toFixed(2),
          `+${d.degisim}%`,
          d.kumulatif,
        ])}
      />
    </div>
  );
};

export default MaliyetSection;
