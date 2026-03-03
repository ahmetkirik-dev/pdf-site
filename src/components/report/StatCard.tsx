import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, highlight }) => {
  return (
    <div className={`rounded-lg border p-4 text-center ${highlight ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
      <p className={`text-xs font-body mb-1 ${highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
        {label}
      </p>
      <p className="text-lg md:text-xl font-heading font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
