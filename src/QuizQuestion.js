import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }

  render() {
    const { quiz_question } = this.props;
    return (
      <main>
        <section>
          <p>{quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((text, key) => (
              <QuizQuestionButton
                clickHandler={this.handleClick.bind(this)}
                key={key}
                button_text={text}
              />
            ))}
          </ul>
        </section>
        {this.state.incorrectAnswer && (
          <p className="error">Sorry, that's not right</p>
        )}
      </main>
    );
  }
}

export default QuizQuestion;
