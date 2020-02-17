export default interface FeedModel {
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
