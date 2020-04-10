import React, { Component } from 'react'
import ColorContext from 'contexts/color'

const colors: Array<String> = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

class SelectColors extends Component {
  static contextType = ColorContext

  handleSetColor = (color: String) => {
    this.context.actions.setColor(color)
  }

  handleSetSubcolor = (subcolor: String) => {
    this.context.actions.setSubcolor(subcolor)
  }

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color.valueOf()}
              style={{
                background: color.valueOf(),
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    )
  }
}

export default SelectColors;
