import { Feed } from "../store/feeds/types";
import { BaseItem, Item } from "../store/items/types";

const baseUrl = process.env.REACT_APP_API_BASEURL;
const userName = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;

interface FeedsResponse {
    feeds: Feed[],
}

interface RawItem extends BaseItem {
    pubDate: number;
    updatedDate?: number;
    lastModified: number;
}

interface ItemsResponse {
    items: RawItem[],
}

const NextcloudNewsApi = {
    getFeeds: (): Promise<Feed[]> => {
        return fetch(`${baseUrl}/feeds`, { 
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(userName + ":" + password)}`
            }
         })
         .then(statusHelper)
         .then(response => response.json())
         .then((data: FeedsResponse) => {
             return data.feeds;
         })
    },

    getItems: (): Promise<Item[]> => {
        return fetch(`${baseUrl}/items`, { 
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(userName + ":" + password)}`
            },
            body: JSON.stringify({
                'batchSize': 20,
                'offset': 0,
                'type': 0,
                'id': 12,
                'getRead': true,
                'oldestFirst': false
            })
         })
         .then(statusHelper)
         .then(response => response.json())
         .then((data: ItemsResponse): Item[] => {
             const result: Item[] = data.items.map(i => {
                return {
                    ...i, 
                    pubDate: new Date(i.pubDate * 1000),
                    updatedDate: i.updatedDate ? new Date(i.updatedDate * 1000) : undefined,
                    lastModified: new Date(i.lastModified * 1000)
                 }
             })
             return result;
         })
    }
}

const statusHelper = (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

export default NextcloudNewsApi;