export type Item = {
  artistId: number;
  artistName: string;
  artworkUrl100: string;
  collectionId: number;
  trackName: string;
  releaseDate: string;
  primaryGenreName: string;
  collectionName: string;
  collectionType: string;
  kind: string;
};

export type ItemList = Item[];
