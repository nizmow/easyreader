import * as React from 'react';
import { Feed } from '../../store/feeds/types';

interface Props {
    feeds: Feed[];
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
            <h5>Feeds!</h5>
            <ul>
                {props.feeds.map(currentFeed => (
                    <li key={currentFeed.id}>{currentFeed.title}</li>
                ))}
            </ul>
        </>
    );
};

