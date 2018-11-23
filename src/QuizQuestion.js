import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText)
      this.props.showNextQuestionHandler();
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
      </main>
    );
  }
}

export default QuizQuestion;
