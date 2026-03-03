import React from "react";

interface ReportTableProps {
  headers: string[];
  rows: (string | number)[][];
  highlightColumn?: number;
  title?: string;
}

const ReportTable: React.FC<ReportTableProps> = ({ headers, rows, highlightColumn, title }) => {
  const formatCell = (value: string | number, colIndex: number) => {
    const str = String(value);
    if (str.startsWith("+")) return <span className="text-report-green font-semibold">{str}</span>;
    if (str.startsWith("-") && str !== "—" && str !== "-") return <span className="text-report-red font-semibold">{str}</span>;
    if (colIndex === highlightColumn) return <span className="font-bold text-primary">{str}</span>;
    return str;
  };

  return (
    <div className="overflow-x-auto">
      {title && (
        <h3 className="font-heading font-bold text-base mb-3 text-foreground">{title}</h3>
      )}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2.5 text-left font-heading font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/50'} hover:bg-report-light-blue transition-colors`}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 whitespace-nowrap font-body">
                  {formatCell(cell, j)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
