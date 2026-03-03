import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import ReportHeader from "../ReportHeader";
import StatCard from "../StatCard";
import ReportTable from "../ReportTable";

const ciroData = [
  { yil: 2022, fInsaat: 292.43, bina41: 563.98, binaDisi42: 639.63, ozel43: 513.52 },
  { yil: 2023, fInsaat: 538.44, bina41: 1059.69, binaDisi42: 971.47, ozel43: 933.29 },
  { yil: 2024, fInsaat: 830.78, bina41: 1815.96, binaDisi42: 1278.43, ozel43: 1342.55 },
  { yil: 2025, fInsaat: 1135.62, bina41: 2562.46, binaDisi42: 1764.79, ozel43: 1903.44 },
];

const chartData = ciroData.map(d => ({
  yil: d.yil,
  "F-İnşaat": d.fInsaat,
  "41-Bina": d.bina41,
  "42-Bina Dışı": d.binaDisi42,
}));

const CiroSection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="İnşaat Ciro Endeksi (İCE)" subtitle="TÜİK • 2022–2025 [2021=100]" pageNumber={6} totalPages={8} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Başlangıç (Oca 2022)" value="82,15" />
        <StatCard label="Son Değer (Ara 2025)" value="2.229,46" highlight />
        <StatCard label="Toplam Artış" value="+2.614,0%" />
        <StatCard label="Kapsam" value="F- İnşaat" />
      </div>

      <div className="bg-card border border-border rounded-lg p-5 mb-8">
        <h3 className="font-heading font-bold text-sm mb-4">İnşaat Ciro Endeksi — Alt Kategoriler</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="F-İnşaat" fill="hsl(var(--report-blue))" radius={[3, 3, 0, 0]} />
            <Bar dataKey="41-Bina" fill="hsl(var(--report-orange))" radius={[3, 3, 0, 0]} />
            <Bar dataKey="42-Bina Dışı" fill="hsl(var(--report-green))" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ReportTable
        title="Yıllık Değişim"
        headers={["Yıl", "F-İnşaat (Ort.)", "41-Bina (Ara)", "42-Bina Dışı (Ara)", "43-Özel (Ara)"]}
        rows={ciroData.map(d => [
          d.yil,
          d.fInsaat.toFixed(2),
          d.bina41.toFixed(2),
          d.binaDisi42.toFixed(2),
          d.ozel43.toFixed(2),
        ])}
      />
    </div>
  );
};

export default CiroSection;
