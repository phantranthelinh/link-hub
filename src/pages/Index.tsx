import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const links = [
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@_sweetie.gems_12",
    icon: "tiktok" as const,
    description: "Follow me on TikTok",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/sera.gemsstone",
    icon: "instagram" as const,
    description: "Follow me on Instagram",
  },
  {
    title: "Zalo",
    url: "tel:0898002220",
    icon: "zalo" as const,
    description: "Gọi cho tôi qua Zalo",
  },
];

const Index = () => {
  return (
    <div
      className='min-h-screen w-full flex items-center justify-center p-4'
      style={{ background: "var(--gradient-page)" }}
    >
      <div className='w-full max-w-md'>
        <div
          className='rounded-3xl p-8 backdrop-blur-xl'
          style={{
            background: "var(--gradient-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <ProfileHeader
            name='SERA Gems & Stone'
            bio='✨ Gems & Stone — Since 2026'
          />
          <div className='mt-8 flex flex-col gap-4'>
            {links.map((link) => (
              <LinkCard key={link.title} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
