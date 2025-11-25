import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SvgIcon from '@mui/material/SvgIcon';

// Custom Christmas tree icon
export function ChristmasTreeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2L8 8h3v4H9l3 4 3-4h-2V8h3l-4-6z" />
    </SvgIcon>
  );
}

// Named exports for MUI icons
export const HeartIcon = FavoriteIcon;
export const NatureIcon = EmojiNatureIcon;
