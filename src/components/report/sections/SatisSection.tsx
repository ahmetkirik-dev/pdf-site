import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ReportHeader from "../ReportHeader";
import StatCard from "../StatCard";
import ReportTable from "../ReportTable";

const satisData = [
  { yil: 2013, satis: 1157190, degisim: "-", istPay: "~16%" },
  { yil: 2014, satis: 1165381, degisim: "+0,7%", istPay: "~15%" },
  { yil: 2015, satis: 1289320, degisim: "+10,6%", istPay: "~13%" },
  { yil: 2016, satis: 1341453, degisim: "+4,0%", istPay: "~12%" },
  { yil: 2017, satis: 1409314, degisim: "+5,1%", istPay: "~11%" },
  { yil: 2018, satis: 1375398, degisim: "-2,4%", istPay: "~12%" },
  { yil: 2019, satis: 1348729, degisim: "-1,9%", istPay: "~10%" },
  { yil: 2020, satis: 1499316, degisim: "+11,2%", istPay: "~14%" },
  { yil: 2021, satis: 1491856, degisim: "-0,5%", istPay: "~9%" },
  { yil: 2022, satis: 1485622, degisim: "-0,4%", istPay: "~10%" },
  { yil: 2023, satis: 1478025, degisim: "-0,5%", istPay: "~10%" },
  { yil: 2024, satis: 1688910, degisim: "+14,3%", istPay: "~11%" },
  { yil: 2025, satis: 1381264, degisim: "-", istPay: "~11%" },
];

const chartData = satisData.map(d => ({ yil: d.yil, satis: d.satis / 1000 }));

const SatisSection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="Konut Satış İstatistikleri" subtitle="TÜİK / TKGM • 81 İl • 2013 – 2025" pageNumber={3} totalPages={8} />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        <StatCard label="Toplam Satış (13 yıl)" value="17,9M" />
        <StatCard label="2025" value="1.381.264" />
        <StatCard label="2024 (En Yüksek)" value="1.688.910" highlight />
      </div>

      <div className="bg-card border border-border rounded-lg p-5 mb-8">
        <h3 className="font-heading font-bold text-sm mb-4">Yıllık Konut Satışları (Bin Adet)</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" label={{ value: 'Bin', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} formatter={(v: number) => [`${v.toFixed(0)}K`, 'Satış']} />
            <Bar dataKey="satis" fill="hsl(var(--report-blue))" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ReportTable
        title="Yıllık Satış Tablosu"
        headers={["Yıl", "Toplam Satış", "Değişim (%)", "İst. Payı", "1. İl"]}
        rows={satisData.map(d => [
          d.yil,
          d.satis.toLocaleString('tr-TR'),
          d.degisim,
          d.istPay,
          "İstanbul",
        ])}
      />
    </div>
  );
};

export default SatisSection;
