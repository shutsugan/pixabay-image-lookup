import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {
	state = {
		open: false,
		currentImg: ''
	}

	handleOpen = img => {
		this.setState({
			open: true,
			currentImg: img
		});
	}

	handleClose = _ => {
		this.setState({open: false});
	}

	render() {
		const {images} = this.props;

		let image_list;
		if (images) {
			image_list = (
				<GridList cols={3}>
				 	{images.map(img => (
				 		<GridTile
				 			title={img.tags}
				 			key={img.id}
				 			subtitle={<span>by <strong>{img.user}</strong></span>}
				 			actionIcon={
				 				<IconButton onClick={_ => this.handleOpen(img.largeImageURL)}>
				 					<ZoomIn color="white" />
				 				</IconButton>
				 			}
				 		>	
				 			<img src={img.largeImageURL} alt={img.tags} />
				 		</GridTile>
				 	))}
				</GridList>
			);
		} else {
			image_list = null;
		}

		const actions  = [
			<FlatButton label="Close" primary={true} onClick={this.handleClose} />
		];

		return(
			<div>
			{image_list}
			<Dialog 
				actions={actions}
				open={this.state.open}
				onRequestClose={this.handleClose}
			>
			<img src={this.state.currentImg} alt="" style={{width: '100%'}} />
			</Dialog>
			</div>
		);
	}
}

export default ImageResults;