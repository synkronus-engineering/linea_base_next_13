import { Avatar } from 'primereact/avatar';

type AvatarAppProps = {
  label?: string;
  clickHandler?: (e: any) => void;
};

const AvatarIcon = ({ label, clickHandler }: AvatarAppProps) => {
  return (
    <Avatar
      label={label || 'U'}
      size="large"
      style={{ color: '#2196F3', cursor: 'pointer', borderRadius: '50%' }}
      shape="circle"
      onClick={clickHandler}
    />
  );
};

export { AvatarIcon };
