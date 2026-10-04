import Icon from "./Icon";

export default function FeatureTags({ features, className = "" }) {
  return (
    <div className={`my-4 flex flex-wrap gap-x-2 gap-y-1.5 ${className}`}>
      {features.map(([icon, label]) => (
        <span key={label} className="inline-flex items-center gap-1 rounded-full bg-[#ecf3fc] px-4 py-1.5 text-xs font-semibold text-[#1a3d62]">
          <Icon name={icon} size={14} /> {label}
        </span>
      ))}
    </div>
  );
}
