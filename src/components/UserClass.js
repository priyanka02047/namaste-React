import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // Super is very important through this we can use 'this' in any funtion and get our props data.
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // write API here using sync and await
    // it will call after render phase
    console.log("mounting");
  }
  componentWillUnmount() {
    // it will call before we leave the component. because it is a single page application
    console.log("unmounting");
  }

  // render function return the JSX
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>hello {name}</h1>
        <div>count : {count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
export default UserClass;
