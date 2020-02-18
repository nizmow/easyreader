export interface BaseItem {
    id: number;
    // "unique" identifier provided by the server
    guid: string;
    // hash of the above
    guidHash: string;
    url: string;
    title: string;
    author: string;
    pubDate: Date | number;
    updatedDate?: Date | number;
    body: string;
    enclosureMime?: string;
    enclosureLink?: string;
    feedId: number;
    unread: boolean;
    starred: boolean;
    lastModified: Date | number;
    rlt: boolean;
    fingerprint: string;
    contentHash: string;
}

export interface Item extends BaseItem {
    pubDate: Date;
    updatedDate?: Date;
    lastModified: Date;
}

export enum ItemsActionTypes {
    FETCH_REQUEST = '@@items/FETCH_REQUEST',
    FETCH_SUCCESS = '@@items/FETCH_SUCCESS',
    FETCH_ERROR = '@@items/FETCH_ERROR',
}