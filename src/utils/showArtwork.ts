import placeholder_img_artist_cover from '../images/placeholder_img_artist_cover.png';

// Show artwork in a bigger size if it is available, if not, show a placeholder, or if there is no 100x100 image, show a placeholder
//replacing 100x100 with 500x500 is possible due to the way the itunes API works

export const showArtwork = (artworkUrl: string) => {
    if (!artworkUrl || !artworkUrl.includes('100x100'))
        return placeholder_img_artist_cover;

    return artworkUrl.replace('100x100', '500x500');
};
