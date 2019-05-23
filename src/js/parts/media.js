
import MediaQueries from "@libs/media-queries";

// Note - it is up to you to synchronise this with
// the screens in tailwind, if you want consistency. 
const screens = {
	mobileshelf: { max: '1024px' },
	sm: { min: '576px' },
	smonly: { max: '767px' },
	md: { min: '768px' },
	lg: { min: '1025px' },
	xl: { min: '1600px' },
};

export const media = new MediaQueries( screens );
export default { media };

