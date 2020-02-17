import { Feed } from "../store/feeds/types";

const baseUrl = process.env.REACT_APP_API_BASEURL;
const userName = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;

interface FeedsResponse {
    feeds: Feed[]
}

function getFeeds(): Promise<Feed[]> {
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
         console.log(data);
         return data.feeds;
     })
}

const statusHelper = (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

export default getFeeds;