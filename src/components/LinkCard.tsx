import { TiktokIcon, InstagramIcon, ZaloIcon } from "@/components/SocialIcons";

interface LinkCardProps {
  title: string;
  url: string;
  icon: "tiktok" | "instagram" | "zalo";
  description: string;
}

const iconMap = {
  tiktok: TiktokIcon,
  instagram: InstagramIcon,
  zalo: ZaloIcon,
};

const LinkCard = ({ title, url, icon, description }: LinkCardProps) => {
  const Icon = iconMap[icon];

  return (
    <a
      href={url}
      target={icon === "zalo" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
      style={{
        boxShadow: '0 2px 8px -2px hsl(20 20% 12% / 0.06)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-link)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px -2px hsl(20 20% 12% / 0.06)';
      }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
        style={{ background: 'var(--gradient-bg)' }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-card-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
      <svg
        className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

export default LinkCard;
