import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import ReportHeader from "../ReportHeader";
import StatCard from "../StatCard";
import ReportTable from "../ReportTable";

const izinYillik = [
  { yil: 2023, ruhsatBina: 153159, ruhsatDaire: 924822, kullanmaBina: 91713, kullanmaDaire: 539136 },
  { yil: 2024, ruhsatBina: 143092, ruhsatDaire: 853903, kullanmaBina: 104016, kullanmaDaire: 636197 },
  { yil: 2025, ruhsatBina: 163854, ruhsatDaire: 1111852, kullanmaBina: 100513, kullanmaDaire: 673575 },
];

const chartData = izinYillik.map(d => ({
  yil: d.yil,
  "Yapı Ruhsatı (Daire)": d.ruhsatDaire / 1000,
  "Kullanma İzni (Daire)": d.kullanmaDaire / 1000,
}));

const IzinSection: React.FC = () => {
  return (
    <div>
      <ReportHeader title="Yapı İzin İstatistikleri" subtitle="TÜİK • Yapı Ruhsatı & Kullanma İzni • 2023–2025" pageNumber={4} totalPages={8} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Toplam Ruhsat (Bina)" value="460.105" />
        <StatCard label="Toplam Ruhsat (Daire)" value="2.890.577" highlight />
        <StatCard label="Kullanma İzni (Daire)" value="1.848.908" />
        <StatCard label="Dönem" value="2023–2025" />
      </div>

      <div className="bg-card border border-border rounded-lg p-5 mb-8">
        <h3 className="font-heading font-bold text-sm mb-4">Yapı Ruhsatı ve Kullanma İzni — Daire Sayısı (Bin)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="yil" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" label={{ value: 'Bin', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <Tooltip contentStyle={{ fontFamily: 'Open Sans', fontSize: 12, borderRadius: 8, border: '1px solid hsl(var(--border))' }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="Yapı Ruhsatı (Daire)" fill="hsl(var(--report-blue))" radius={[3, 3, 0, 0]} />
            <Bar dataKey="Kullanma İzni (Daire)" fill="hsl(var(--report-orange))" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ReportTable
        title="Yıllık Yapı İzin Özeti"
        headers={["Yıl", "Ruhsat Bina", "Ruhsat Daire", "Kullanma İzni Bina", "Kullanma İzni Daire"]}
        rows={izinYillik.map(d => [
          d.yil,
          d.ruhsatBina.toLocaleString('tr-TR'),
          d.ruhsatDaire.toLocaleString('tr-TR'),
          d.kullanmaBina.toLocaleString('tr-TR'),
          d.kullanmaDaire.toLocaleString('tr-TR'),
        ])}
      />
    </div>
  );
};

export default IzinSection;
