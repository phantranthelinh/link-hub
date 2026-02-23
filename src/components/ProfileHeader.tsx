import logoImage from "@/assets/logo.jpeg";

interface ProfileHeaderProps {
  name: string;
  bio: string;
}

const ProfileHeader = ({ name, bio }: ProfileHeaderProps) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <img
        src={logoImage}
        alt={name}
        className='w-28 h-28 rounded-full object-cover mb-4 border-[3px] border-primary shadow-lg'
      />
      <h1 className='text-2xl font-bold text-accent'>{name}</h1>
      <p className='mt-1 text-sm text-muted-foreground'>{bio}</p>
    </div>
  );
};

export default ProfileHeader;
