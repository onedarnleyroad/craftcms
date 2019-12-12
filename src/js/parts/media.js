

import { MediaQueries } from "@/libs/media-queries";

const screens = {
	mobile: { max: '639px' },
	sm: { min: '640px' },
	md: { min: '768px' },
	lg: { min: '1025px' },
	xl: { min: '1441px' },
	'xl2': { min: '1600px' },
	reducedMotion: `(prefers-reduced-motion: reduce)`,
};

const m = new MediaQueries( screens );
export const media = m;

export default { media: m };
