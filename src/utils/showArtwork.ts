import placeholder_img_artist_cover from "../images/placeholder_img_artist_cover.png";

export const showArtwork = (artworkUrl: string) => {
  if (!artworkUrl || !artworkUrl.includes("100x100"))
    return placeholder_img_artist_cover;

  return artworkUrl.replace("100x100", "500x500");
};
