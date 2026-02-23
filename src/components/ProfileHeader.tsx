interface ProfileHeaderProps {
  name: string;
  bio: string;
}

const ProfileHeader = ({ name, bio }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground mb-4"
        style={{ background: 'var(--gradient-bg)' }}
      >
        {name.charAt(0)}
      </div>
      <h1 className="text-2xl font-bold text-foreground">{name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{bio}</p>
    </div>
  );
};

export default ProfileHeader;
