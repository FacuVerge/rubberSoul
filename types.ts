export enum Genre {
    Rock = "Rock",
    Pop = "Pop",
    Jazz = "Jazz",
    Classical = "Classical",
    HipHop = "Hip-Hop",
    Electronic = "Electronic",
    Reggae = "Reggae",
    Metal = "Metal",
    Country = "Country",
    Blues = "Blues",
}

export enum Condition {
    Mint = "Mint (M)",
    NearMint = "Near Mint (NM or M-)",
    VeryGoodPlus = "Very Good Plus (VG+)",
    VeryGood = "Very Good (VG)",
    GoodPlus = "Good Plus (G+)",
    Good = "Good (G)",
    Poor = "Poor (P)",
    Fair = "Fair (F)",
    Generic = "Generic"
}
  
export interface Vinyl {
    id: string,
    dateAdded: Date,
    condition: Condition,
    comments: string[],
    price: number,
    stock: number,
    albumInfo : AlbumInfo
}

export interface AlbumInfo {
    date: Date,
    title: string,
    artists: string[],
    genres: Genre[],
    coverImage: string,
}