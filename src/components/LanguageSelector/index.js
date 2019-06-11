import React from 'react'

class LanguageSelector extends React.Component {
  render() {
    const { onLanguageChange } = this.props
    return (
      <div>
        Select a language:
        <i className={'flag us'} onClick={() => onLanguageChange('english')} />
        <i
          className={'flag br'}
          onClick={() => onLanguageChange('portuguese')}
        />
      </div>
    )
  }
}

export default LanguageSelector
