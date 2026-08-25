import { createSocialImage, socialImageSize } from '@/lib/social-image';

export const alt = 'Nexo UI React and Tailwind CSS components';
export const size = socialImageSize;
export const contentType = 'image/png';

export default function Image() {
  return createSocialImage();
}
