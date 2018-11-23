import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  render() {
    const { quiz_question } = this.props;
    return (
      <main>
        <section>
          <p>{quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton button_text={quiz_question.answer_options[0]} />
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
