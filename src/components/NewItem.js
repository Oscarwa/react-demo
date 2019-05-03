import React, { Component } from 'react'

export default class NewItem extends Component {
  render() {
    return (
      <div>
            <h2 className="ui dividing header">New Item</h2>
            <div class="ui equal width grid">
                <div class="column">
                    <form className="ui form">
                        <div className="inline field">
                            <input type="text" placeholder="Username" required />
                            <div className="ui red left pointing basic label hidden">That name is taken!</div>
                        </div>
                        <div className="inline field">
                            <input type="text" placeholder="Username" required />
                            <div className="ui red left pointing basic label hidden">That name is taken!</div>
                        </div>
                        <div className="inline field">
                            <input type="text" placeholder="Username" required />
                            <div className="ui red left pointing basic label hidden">That name is taken!</div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    )
  }
}
