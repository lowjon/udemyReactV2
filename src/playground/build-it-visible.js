'use strict';


console.log('build-it-visible is running');

const appRoot = document.getElementById('app')


class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility(){
    this.setState((prevState) =>{
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Here are some details you can now see!</p>
          </div>
        )}
      </div>
    )
  }
}


//How I did it during the challenge.... a little different... but same function


// class VisibilityToggle extends React.Component {
//   constructor (props){
//     super(props)
//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
//     this.state = {
//       visibility: true,
//       buttonText: 'Show Details'
//     }
//   }
//
//   handleToggleVisibility() {
//     this.setState((prevState) => {
//       return {
//         visibility: !prevState.visibility,
//         buttonText: (prevState.buttonText == 'Show Details') ? prevState.buttonText = 'Hide Details' : prevState.buttonText = 'Show Details'
//             }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.handleToggleVisibility}>{this.state.buttonText}</button>
//         <p hidden={this.state.visibility}>Text that should be toggle-able</p>
//       </div>
//     )
//   }
// }



ReactDOM.render(<VisibilityToggle />, appRoot)
