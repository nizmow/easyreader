import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { FeedsList } from './FeedsList'
import { fetchRequest, selected } from '../../store/feeds/actions';

const mapStateToProps = (state: ApplicationState) => ({
    feeds: state.feeds,
});

const mapDispatchToProps = (dispatch: any) => ({
    onComponentDidMount: () => dispatch(fetchRequest()),
    onFeedSelected: (id: number) => dispatch(selected(id))
})

export const FeedsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedsList)
