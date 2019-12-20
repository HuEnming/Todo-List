import React, { Component } from 'react';
import cityList from './cities_full.json';
import { findDOMNode } from 'react-dom';
import logo from './fanart.jpg';
import { FirebaseContext } from '../../../contexts/FirebaseContext';

//codes and commented by Kocheng

class Weather extends Component {
	static contextType = FirebaseContext;
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			areaName: '',
			locationList: cityList,
			WeatherbitKey: process.env.REACT_APP_WEATHERAPI_KEY,
			WeatherbitAPI: process.env.REACT_APP_WEATHER_URL,        //this.state.openAPI +'city_id='+ this.state.cityID +'&key='+ this.state.openKey
			cityID: '2964574',
			WeatherbitInfo: [],
			switch: false,
			currentCity: 'dublin, ireland'
		}

		this.api = this.api.bind(this);
		this.btnHandler = this.btnHandler.bind(this);
		this.filterCallBack = this.filterCallBack.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		this.formChangeHandler = this.formChangeHandler.bind(this);
		// this.setDefault = this.setDefault.bind(this);
	} // end of constructor

	// gets forecast for default location
	componentDidMount(){
		this.api();
	}

	// setDefault(){
	// 	this.context.db.collection('defaultLocation');
	// }


	// calls weather api for forecast information
	async api() {
		try {

			const response = await fetch(this.state.WeatherbitAPI + 'city_id=' + this.state.cityID + '&key=' + this.state.WeatherbitKey);
			const result = await response.json();


			await this.setState({ WeatherbitInfo: result.data });

			// console.log(this.state.WeatherbitInfo);
			// console.log('update successful');			

		} catch (e) {
			//console.log(e.message);
			await this.setState({ error: 'Weather Information Not Available At This Location!' });

		}

	}


	// filters out country names that don't match search term
	filterCallBack(areaName) {
		return function (object) {
			let bool1 = false, bool2 = false;
			if(object.city_name != null){
				bool1 = object.city_name.toLowerCase().includes(areaName.toLowerCase());
			}
			if(object.country_name != null){
				bool2 = object.country_name.toLowerCase().includes(areaName.toLowerCase());
			}
			return (bool1||bool2);
		}
	}

	// handles submit
	// saves selected item into state
	// then calls api for forecast
	async submitHandler(e) {
		// prevent submit when there's no input
		if (findDOMNode(this.refs.dynamic).value != '' || findDOMNode(this.refs.dynamic).value != null) {
			e.preventDefault();

			//console.log('CityID: '+ findDOMNode(this.refs.dynamic).value);
			if (this.state.cityID != findDOMNode(this.refs.dynamic).value) {

				try{
					let temp = this.state.locationList.filter(item => item.id == findDOMNode(this.refs.dynamic).value);
					await this.setState({
						cityID: findDOMNode(this.refs.dynamic).value,
						switch: !this.state.switch,
						currentCity: temp[0].city_name+', '+temp[0].country_name,
						error: ''
					});
					this.api();
				}catch(e){
					await this.setState({ error: 'Invalid Input!' });
				}
				
				
				// console.log(this.state.cityID);
				// console.log(this.state.currentCity);
				// console.log(temp[0].city_name);
			}
		
		}
	}


	// handles input form change
	// saves input into state
	async formChangeHandler(e) {

		if (isNaN(e.target.value) || e.target.value == '') {
			await this.setState({ areaName: e.target.value });
			//console.log('formChangeHandler isNaN');
		}

	}

	// button to expand/shrink weather search form
	btnHandler() {
		this.setState({
			switch: !this.state.switch,
			cityID: '',
			areaName: '',
			error: ''
		});
		findDOMNode(this.refs.dynamic).value = '';
	}


	render() {
		return (
			<div className='text-center'>

				
				{/*button to expand/shrink weather search form*/}
				<div className='col-lg-4 col-sm-12 mb-lg-0' style={{ marginTop: 10 }} >
					
					<button className='input-group-text bg-primary text-white border-primary' onClick={this.btnHandler}>{this.state.switch ? 'X' : 'Forecast'}</button>

				</div>

				{/* search form */}

				<div ref='display' style={{ display: this.state.switch ? 'block' : 'none' }}>
					<img src={logo} className='col-lg-12 col-sm-4' />
					<p className='lead'>DEFINITELY NOT SPONSORED</p>

					<br />
					<form onSubmit={this.submitHandler} align='center'>
						<input className='form-group mx-sm-3 mb-2' style={{ height: 35 }} ref='dynamic' list='country' onChange={this.formChangeHandler} />
						<datalist id='country'>
							{this.state.locationList.filter(this.filterCallBack(this.state.areaName)).slice(0, 30).map(item =>
								<option value={item.id} id={item.city_name}>City: {item.city_name} &nbsp;&nbsp; Country: {item.country_name}</option>
							)}
						</datalist>
						<input className='btn btn-primary mb-2 text-white' type='submit' value='Select' />
					</form>
					<p className = "lead">{this.state.error}</p>
				</div>
				
				{/* weather forecast */}
			
				<div style={{ display: this.state.switch ? 'none' : 'block' }}>
					<p className="lead"><b>{this.state.currentCity.toUpperCase()}</b></p>
				</div>
				
				<div className="col-lg-4 col-sm-12 mb-lg-0">
					<table className='table table-hover' style = {{display: this.state.switch ? 'none' : 'block'}}>
						<thead >
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Weather</th>
								<th scope="col">Precipitation</th>
								<th scope="col">Temperature</th>
							</tr>
						</thead>
						<tbody>
							{this.state.WeatherbitInfo.slice(0, 7).map((item, index) =>
								<tr class='table-light'>
									<th scope='row'>{item.datetime}</th>
									<td>{item.weather.description}</td>
									<td>{item.pop}%</td>
									<td>{item.temp}°C</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Weather;
