// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isFaqs: false,
  }

  onToggleAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isFaqs} = this.state

    if (isFaqs) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveImage = () => {
    this.setState(prevState => ({
      isFaqs: !prevState.isFaqs,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isFaqs} = this.state

    const imgURl = isFaqs
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isFaqs ? 'minus' : 'plus'

    return (
      <li className="faq-list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.renderActiveImage}
          >
            <img className="image" src={imgURl} alt={altText} />
          </button>
        </div>
        {this.onToggleAnswer()}
      </li>
    )
  }
}

export default FaqItem
