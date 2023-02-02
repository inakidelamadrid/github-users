import {clsx} from 'clsx';
interface CardAvatarProps {
  src: string;
  alt: string;
  variant?: 'normal' | 'large';
}

export const CardAvatar = ({ src, alt, variant='normal' }: CardAvatarProps) => {
  const size = variant === 'normal' ? 'w-12 h-12' : 'w-20 h-20';
  return <img src={src} alt={alt} className={clsx("rounded-full", size)} />;
};