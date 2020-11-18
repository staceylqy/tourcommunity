import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    errorMessage: "",
    colour: "yellow", //デフォルトポストの色
    title: "",
    content: "",
    key: ""
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      this.setState({ errorMessage: "Title is required" });
    } else {
      this.props.createPostit(
        this.state.colour,
        this.state.title,
        this.state.content
      );
      this.setState({
        colour: "yellow",
        title: "",
        content: "",
        key: "",
        errorMessage: ""
      });
    }
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {/* Form */}
        <form className="form">
          <h2 className="formh2">旅行の感想をみんなと共有しよう</h2>
          <p>{this.state.errorMessage}</p>

          <p className="formp">
            <label className="floatLabel">旅行先</label>
            <input
              type="text"
              className="textfield forminput"
              placeholder="旅行先 (*必須)"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </p>
          <br />

          <p className="formp">
            <label className="floatLabel">感想</label>
            <textarea
              type="text"
              className="textfield forminput"
              placeholder="感想"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
              row="100"
              size="80"
            ></textarea>
          </p>
          <br />

          {/* Select Dropdown */}
          <p className="formp">
            <label className="floatLabel">ポストイットの色</label>
            <select
              className="textfield forminput"
              onChange={(e) => this.setState({ colour: e.target.value })}
            >
              <option value="" disabled selected>
                ポストイットの色
              </option>
              <option value="pink">Pink</option>
              <option value="#bce6eb">Blue</option>
              <option value="#fcf876">Yellow</option>
              <option value="#cee397">Green</option>
            </select>
          </p>

          <button className="mainbtn" onClick={(e) => this.onSubmit(e)}>
            共有する
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
