import NextcloudNewsApi from './nextcloudNews';

beforeEach(() => {
    fetchMock.resetMocks();
})

test('does things', () => {
    fetchMock.mockResponseOnce(JSON.stringify({
            "starredCount": 999,
            "feeds": [{
                "id": 2,
                "url": "https:\/\/stackoverflow.com\/feeds\/tag?tagnames=masstransit&sort=newest",
                "title": "Newest questions tagged masstransit - Stack Overflow",
                "faviconLink": "https:\/\/cdn.sstatic.net\/Sites\/stackoverflow\/img\/favicon.ico",
                "added": 1580139091,
                "folderId": 0,
                "unreadCount": 0,
                "ordering": 0,
                "link": "https:\/\/stackoverflow.com\/questions\/tagged\/?tagnames=masstransit&sort=newest",
                "pinned": false,
                "updateErrorCount": 0,
                "lastUpdateError": ""
            }]
        }
    ));

    NextcloudNewsApi.getFeeds().then(r => {
        expect(r.length).toBe(1);
        expect(r[0].title).toBe("Newest questions tagged masstransit - Stack Overflow");
    });

    expect(true).toBe(true);
})
