import React from "react";

interface Section {
  id: string;
  label: string;
  icon: string;
}

const sections: Section[] = [
  { id: "cover", label: "Kapak", icon: "📊" },
  { id: "kfe", label: "Konut Fiyat Endeksi", icon: "🏠" },
  { id: "satis", label: "Konut Satışları", icon: "📈" },
  { id: "izin", label: "Yapı İzinleri", icon: "🏗️" },
  { id: "maliyet", label: "İnşaat Maliyeti", icon: "💰" },
  { id: "ciro", label: "Ciro Endeksi", icon: "💹" },
  { id: "istihdam", label: "İstihdam", icon: "👷" },
  { id: "ozet", label: "Genel Özet", icon: "📋" },
];

interface SectionNavProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const SectionNav: React.FC<SectionNavProps> = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onSectionChange(s.id)}
          className={`px-3 py-2 rounded-md text-xs font-heading font-semibold transition-all ${
            activeSection === s.id
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
          }`}
        >
          <span className="mr-1">{s.icon}</span>
          {s.label}
        </button>
      ))}
    </nav>
  );
};

export default SectionNav;
