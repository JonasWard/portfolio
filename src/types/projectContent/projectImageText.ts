import { ProjectContentType } from './projectContentType';
import { ProjectImage } from './projectImage';
import { ProjectText } from './projectText';

export type ProjectImageText = {
  type: ProjectContentType.ImageText;
  image: ProjectImage;
  text: ProjectText;
  position?: 'left' | 'right' | 'top' | 'bottom';
};
