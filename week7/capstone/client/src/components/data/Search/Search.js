import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
    };
  }
   srcHandleChange = (e) => {
    // e.preventDefault()
    (this.setState({query:e.target.value}))
    // this.setState( prevState => ({query:prevState.query + e.key}))

    console.log(e)
  }

  render() {
    return (
      <div className="search-container"
      onKeyPress={(e) => {
        console.log(e)
        if (e.key === "Enter") {
          this.props.searchAvengers(this.state.query)
          this.setState({query:""})
        }
      }}>
        <label className="search-label" htmlFor="search-input">
          <input
            
            type="text"
            value={this.state.query}
            name="query"
            onChange={(e) => this.srcHandleChange(e)}
            id="search-input"
            placeholder="Search..."
          />
          <i className="fa fa-search search-icon" />
        </label>
      </div>
    );
  }
}
export default Search;
