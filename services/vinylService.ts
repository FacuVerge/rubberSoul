import { AlbumInfo, Condition, Vinyl } from '../types';
import { mapVinylData } from '../utils/mappers';
import { v4 as uuidv4 } from 'uuid';

const vinyls: Vinyl[] = mapVinylData();

const getVinyls = () => {
  return vinyls;
};

const addVinyl = (
    dateAdded: Date, 
    condition: Condition,
    comments: string[], 
    price: number, 
    stock: number,
    albumInfo: AlbumInfo
): Vinyl => {

    const newVinylEntry = {
        id: uuidv4(),
        dateAdded,
        condition,
        comments,
        price,
        stock,
        albumInfo
    }

    vinyls.push(newVinylEntry);
    return newVinylEntry;
};

export default {
    getVinyls,
    addVinyl
};


