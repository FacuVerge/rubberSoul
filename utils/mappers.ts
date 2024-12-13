import vinylData from '../data/vinyls.json'
import { Condition, Genre, Vinyl } from '../types';

export const mapVinylData = () : Vinyl[] => {
    return vinylData.map(vinyl => { 
        return { 
            ...vinyl, 
            dateAdded: new Date(vinyl.dateAdded),
            condition: vinyl.condition as Condition,
            albumInfo: {
                date: new Date(vinyl.albumInfo.date),
                title: vinyl.albumInfo.title,
                artists: vinyl.albumInfo.artists,
                genres: vinyl.albumInfo.genres as Genre[],
                coverImage: vinyl.albumInfo.coverImage
            }
        }
    });
}