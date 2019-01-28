import React from 'react'

class SearchBar extends React.Component {

  state = {

  }

 render (){

   const handleChange = (bar, input) => {
  this.setState({
    bar: input
  })
}

  return (

    <div className="topnav">
      <input type="text" placeholder="Search.." className="searchBar" onChange={(e) => {handleChange(e.target.name, e.target.value)}}>
      </input>

      <button type="button" className="sortTitle" onClick ={(e)=>{this.props.titleSort(this.state.bar)}}>Search by Title</button>

        <button type="button" className="sortAuthor" onClick ={(e)=>{this.props.authorSort(this.state.bar)}}>Search by Author</button>
    </div>

  )
}}

export default SearchBar
