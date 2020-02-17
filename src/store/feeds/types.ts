export interface Feed {
    id: number;
    url: string;
    title: string;
    faviconLink: string;
    added: number;
    folderId: number;
    unreadCount: number;
    ordering: number;
    link: string;
    pinned: boolean;
    updateErrorCount: number;
    lastUpdateError: string;
}

export enum FeedActionTypes {
    FETCH_REQUEST = '@@feeds/FETCH_REQUEST',
    FETCH_SUCCESS = '@@feeds/FETCH_SUCCESS',
    FETCH_ERROR = '@@feeds/FETCH_ERROR',
    SELECTED = '@@feeds/SELECTED',
}

export interface FeedsState {
    readonly loading: boolean;
    readonly data: Feed[];
    readonly errors?: string;
}
