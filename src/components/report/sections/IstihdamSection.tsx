import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import ReportHeader from "../ReportHeader";
import StatCard from "../StatCard";
import ReportTable from "../ReportTable";

const istihdamData = [
  { yil: 2020, calisan: 1410555, degisim: "—", kumulatif: "0,0%" },
  { yil: 2021, calisan: 1461699, degisim: "+3,63%", kumulatif: "+3,6%" },
  { yil: 2022, calisan: 1597509, degisim: "+9,29%", kumulatif: "+13,3%" },
  { yil: 2023, calisan: 1765787, degisim: "+10,53%", kumulatif: "+25,2%" },
  { yil: 2024, calisan: 1853840, degisim: "+4,99%", kumulatif: "+31,4%" },
  { yil: 2025, calisan: 1983945, degisim: "+7,02%", kumulatif: "+40,6%" },
];

const barChartData = istihdamData.map(d => ({ yil: d.yil, calisan: d.calisan / 1000000 }));
const degisimData = [
  { yil: 2020, degisim: 0 },
  { yil: 2021, degisim: 3.63 },
  { yil: 2022, degisim: 9.29 },
  { yil: 2023, degisim: 10.53 },
  { yil: 2024, degisim: 4.99 },
  { yil: 2025, degisim: 7.02 },
];

const IstihdamSection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="İnşaat Sektörü İstihdam" subtitle="TÜİK • 2020–2025" pageNumber={7} totalPages={8} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="2020 İstihdam" value="1.410.555" />
        <StatCard label="2025 İstihdam" value="1.983.945" highlight />
        <StatCard label="Toplam Artış" value="+40,65%" />
        <StatCard label="En Yüksek Yıl" value="2025" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-heading font-bold text-sm mb-4">İnşaat Sektörü İstihdamı (Milyon Kişi)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" domain={[0, 2.2]} />
              <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} formatter={(v: number) => [`${v.toFixed(2)}M`, 'İstihdam']} />
              <Bar dataKey="calisan" fill="hsl(var(--report-blue))" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-heading font-bold text-sm mb-4">Yıllık Değişim (%)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={degisimData}>
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
        title="İstihdam Özet Tablosu"
        headers={["Yıl", "Çalışan Sayısı", "Değişim (%)", "2020 Baz Kümülatif"]}
        rows={istihdamData.map(d => [
          d.yil,
          d.calisan.toLocaleString('tr-TR'),
          d.degisim,
          d.kumulatif,
        ])}
      />
    </div>
  );
};

export default IstihdamSection;
