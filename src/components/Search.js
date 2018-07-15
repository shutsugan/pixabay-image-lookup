import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

import '../css/Search.css';

class Search extends Component {
	constructor() {
		super();

		this.state = {
			searchText: '',
			amount: 15,
			api_url: 'https://pixabay.com/api',
			api_key: '9558809-26c8641a6037067cc84190a4e',
			images: []
		}

		this.onTextChange = this.onTextChange.bind(this);
	}

	onTextChange(event) {
	}

	render() {
		return(
			<div className="Search">
				<TextField 
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
			</div>
		);
	}
}

export default Search;