import * as React from 'react';
import { Feed, FeedsState } from '../../store/feeds/types';

interface Props {
    feeds: FeedsState;
    onComponentDidMount: () => void;
}

export const FeedsList: React.FC<Props> = props => {
    React.useEffect(() => {
        // we should do this in the coutainer, but either way
        // simulate componentDidMount by passing a constant to useEffect
        console.log("Mounting!");
        props.onComponentDidMount();
    }, [true])
    
    return (
        <>
            <h3>Feeds!</h3>
            {props.feeds.data.length > 0 &&
                <ul>
                    {props.feeds.data.map(currentFeed => (
                        <li key={currentFeed.id}>{currentFeed.title}</li>
                    ))}
                </ul>
            }
            {props.feeds.loading && 
                <span>Loading...</span>
            }
            {props.feeds.errors && 
                <span>Error loading feeds!</span>
            }
        </>
    );
};

