type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="mr-4 h-12 w-12 rounded-full" alt={name} />
      <div className="font-bold text-xl">{name}</div>
    </div>
  );
};

export default Avatar;
