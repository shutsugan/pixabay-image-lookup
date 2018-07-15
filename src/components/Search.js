import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from './ImageResults';

import '../css/Search.css';

class Search extends Component {
	state = {
		searchText: '',
		amount: 15,
		api_url: 'https://pixabay.com/api',
		api_key: '9558809-26c8641a6037067cc84190a4e',
		images: []
	}

	onTextChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		}, _ => {
			const url = `${this.state.api_url}/?key=${this.state.api_key}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`;
			fetch(url)
				.then(res => res.json())
				.then(res => {
					this.setState({
						images: res.hits
					});
				})
				.catch(err => console.error(err));
		});
	}

	onAmountChange = (event, index, value) => {
		this.setState({
			amount: value
		});
	}

	render() {
		console.log(this.state.images);
		return(
			<div className="Search">
				<TextField 
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
				<br />
				<SelectField
					name="amount"
					floatingLabelText="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				>
					<MenuItem value={5} primaryText="5" />
					<MenuItem value={10} primaryText="10" />
					<MenuItem value={30} primaryText="15" />
					<MenuItem value={50} primaryText="30" />
				</SelectField>
				<br />
				{this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
			</div>
		);
	}
}

export default Search;