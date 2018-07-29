import { connect } from 'react-redux';
import DeckComponent from '../components/DeckComponent'
import { actionCreators } from '../actions'

const mapStateToProps = (state, ownProps) => {
    if (!state.stack.length) {
        return {
            text: "A question is a path; an answer is a wall.",
            category: "—Aella",
            stackIsEmpty: true
        }
    }

    var question = state.stack[state.counter]
    return {
        text: question.text,
        category: question.category
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickPrev: () => dispatch(actionCreators.prevCard()),
    onClickNext: () => dispatch(actionCreators.nextCard())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckComponent)
