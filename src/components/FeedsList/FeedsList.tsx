import * as React from 'react';
import { Feed, FeedsState } from '../../store/feeds/types';

interface Props {
    feeds: FeedsState;
    onComponentDidMount: () => void;
}

export const FeedsList: React.FC<Props> = props => {
    const {data: feeds, loading, error} = props.feeds;

    React.useEffect(() => {
        props.onComponentDidMount();
    }, [])
    
    return (
        <>
            <h3>Feeds!</h3>
            {feeds.length > 0 &&
                <ul>
                    {feeds.map(currentFeed => (
                        <li key={currentFeed.id}>{currentFeed.title}</li>
                    ))}
                </ul>
            }
            {loading && 
                <span>Loading...</span>
            }
            {error && 
                <span>Error loading feeds! {error}</span>
            }
        </>
    );
};

