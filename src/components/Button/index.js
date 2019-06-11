import React from 'react'

import LanguageContext from '../../contexts/LanguageContext'
import ColorContext from '../../contexts/ColorContext'

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Enviar'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
  // Consumindo informacoes de contexto por meio do Consumer.
  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button
