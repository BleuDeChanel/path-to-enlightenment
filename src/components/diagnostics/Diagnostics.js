import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';
import withAuthorization from '../higherorder/withAuthorization';
import * as routes from '../../constants/routes';
import DiagnosticsQuestionsPage from './DiagnosticsQuestions'
import DiagnosticsAnalysisPage from './DiagnosticsAnalysis'
import DiagnosticsResultsPage from './DiagnosticsResults'
import classes from './Diagnostics.css';

// Should have a router that enables each question to be in the page by itself
class DiagnosticsPage extends React.Component {
	render() {
		return (
			<div>
				<Route exact path={this.props.match.url} component={() => <DiagnosticsMenuPage {...this.props}/>}/>
				<Route path={routes.DIAGNOSTICS_QUESTIONS} component={() => <DiagnosticsQuestionsPage {...this.props}/>}/>
				<Route path={routes.DIAGNOSTICS_ANALYSIS} component={() => <DiagnosticsAnalysisPage {...this.props}/>}/>
				<Route path={routes.DIAGNOSTICS_RESULTS} component={() => <DiagnosticsResultsPage {...this.props}/>}/>
			</div>
		)
	}
}

const DiagnosticsMenuPage = () => {
	// Not adaptive to changing screen sizes for now
	const rowStyle = window.innerWidth > 768
	? {
  		backgroundColor: 'rgb(248,248,248)', 
  		display: 'flex',
		border: '3px solid rgb(225,225,225)', 
		borderRadius: 4, 
		margin: 16,
  	} 
  	: {
  		backgroundColor: 'rgb(248,248,248)', 
		border: '3px solid rgb(225,225,225)', 
		borderRadius: 4, 
		margin: 16,
  	} 
	const colStyle = {
		padding: 16,
	};
	const divStyle = {
		backgroundColor: 'rgb(225,225,225)', 
  		borderRadius: 4, 
  		boxSizing: 'border-box',
  		height: '100%',
		padding: 16,
	};
	const pStyle = { margin: 0, textIndent: 12 };
	const h3Style = { margin: 0, marginBottom: 20, textAlign: 'center' };
	//const resultsRoute = `${this.props.match.url}/results`
	return (
		<Row style={rowStyle}>
			<Col style={colStyle} xs={12} sm={6}>
				<div style={divStyle}>
					<h3 style={h3Style}>
						<Link style={{color: 'teal'}} to={routes.DIAGNOSTICS_QUESTIONS}>
							Take Diagnostics
						</Link>
					</h3>
					<p style={pStyle}>
						<Link style={{color: 'black'}} to={routes.DIAGNOSTICS_QUESTIONS}>
							Honestly answer the questions once per week to 
							gain insight on your progress and areas to pay 
							additional attention to.
						</Link>
					</p>
				</div>
			</Col>
			<Col style={colStyle} xs={12} sm={6}>
				<div style={divStyle}>
					<h3 style={h3Style}>
						<Link style={{color: 'teal'}} to={routes.DIAGNOSTICS_RESULTS}>View Past Results</Link>
					</h3>
					<p style={pStyle}>
						<Link style={{color: 'black'}} to={routes.DIAGNOSTICS_RESULTS}>
							View your past diagnostics stats to further gain 
							insight about yourself.
						</Link>
					</p>
				</div>
			</Col>
		</Row>
	);
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(DiagnosticsPage);