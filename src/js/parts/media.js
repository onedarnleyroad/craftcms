import { MediaQueries } from "@/libs/media-queries";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const screens = Object.assign(
  tailwindConfig.theme.screens, {
    reducedMotion: `(prefers-reduced-motion: reduce)`
  }
);

const m = new MediaQueries( screens );
export const media = m;

export default { media: m };
