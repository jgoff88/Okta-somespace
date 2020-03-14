/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import { checkAuthentication } from '../../helpers';

export default withAuth(
	class Home extends Component {
		constructor(props) {
			super(props);
			this.state = { authenticated: null, userinfo: null };
			this.checkAuthentication = checkAuthentication.bind(this);
			this.login = this.login.bind(this);
		}

		async componentDidMount() {
			this.checkAuthentication();
		}

		async componentDidUpdate() {
			this.checkAuthentication();
		}

		async login() {
			this.props.auth.login('/');
		}

		render() {
			return (
				<div>
					{this.state.authenticated !== null && (
						<div className="container">
							<Header as="h1" />
							{this.state.authenticated && (
								<div>
									<p>Welcome back, {this.state.userinfo.name}!</p>
									<p>
										You have successfully authenticated against your Okta org, and have been
										redirected back to this application. You now have an ID token and access token
										in local storage. Visit the <a href="/profile">My Profile</a> page to take a
										look inside the ID token.
									</p>
								</div>
							)}
							{!this.state.authenticated && (
								<div>
									<div className="row">
										<div className="col s12 green darken-4 center yellow-text">
											<h1>
												<i className="medium material-icons">home</i> GIVE ME SUMSPACE!{' '}
												<i className="medium material-icons">location_city</i>
											</h1>
											<h5>Looking for SumSpace to Lease or Lease out?</h5>
											<h5>Look no Further! You Have Come to the Right Space!!</h5>
										</div>
									</div>
									<div className="row">
										<div className="row">
											<div className="left col s6 green darken-4 yellow-text">
												<h4 className="center">
													<i className="small material-icons">search</i> Searching for
													SumSpace
												</h4>
												<ul>
													<li>Are you ready to venture off and need a place to live?</li>
													<li>
														Does your busy lifestyle make your apartment an expensive
														storage Space?
													</li>
													<li>
														Are you paying for underutilized anemities in your apartment
														complex?
													</li>
												</ul>
											</div>
											<div className="right s6 green darken-4 yellow-text ">
												<h4 className="center">
													<i className="small material-icons">pan_tool</i> Providing SumSpace
												</h4>
												<ul>
													<li>
														Do you want to make some extra cash with the spare Space in your
														home?
													</li>
													<li>
														Are you worried your tenants will unexpectedly leave your rental
														Space?
													</li>
													<li>Do you want to "Pay it Forward" to responsible individuals?</li>
												</ul>
											</div>
										</div>
										<div className="col s12 green darken-4 yellow-text">
											<h6 className="yellow-text">
												These are just some of the reasons so many people have joined our team.
												Our goal at SumSpace is to help inidviduals find and provide communal
												living Spaces. We would love to bridge that gap and find the right match
												that fits your. Moreover, you will have the option to identify
												individuals with the same values that you hold dear by filling out a
												short questionaire.
											</h6>
										</div>
										<div className="row">
											<div className="col s12 green darken-4 yellow-text">
												<h3 className="center">
													<i className="small material-icons">thumb_up</i> Let's Get Started!{' '}
													<i className="small material-icons">thumb_up</i>
												</h3>
											</div>
											<div className="col s12 green darken-4 yellow-text">
												<p>
													Whether you are looking for or have SumSpace we can help you find
													the perfect match. Simply create a profile and complete a short
													questionaire. We will then take it from there and provide you with a
													list of individuals that fit your preferances.
												</p>
												<div className="center">
													<Button
														id="login-button"
														className="waves-effect btn-large pulse black yellow-text"
														primary
														onClick={this.login}
													>
														<i className="material-icons right">person_add</i>
														Login
													</Button>
													<a
														href="/FAQ"
														className="btn-large waves-effect yellow green-text text-darken-4"
													>
														<i className="material-icons left">info_outline</i>FAQ's
													</a>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col s12 green darken-4 yellow-text">
												<div className="container center">
													<p>© 2020 Copyright Text</p>
													<p>
														Created by James Goff, Marcos Luna and Alejandro Santillan Jr.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			);
		}
	}
);
