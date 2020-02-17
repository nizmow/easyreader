import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { FeedsList } from './FeedsList'
import { fetchRequest } from '../../store/feeds/actions';

const mapStateToProps = (state: ApplicationState) => ({
    feeds: state.feeds,
});

const mapDispatchToProps = (dispatch: any) => ({
    onComponentDidMount: () => dispatch(fetchRequest())
})

export const FeedsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedsList)
