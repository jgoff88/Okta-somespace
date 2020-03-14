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

import React, { Component } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import './node_modules/@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import config from '../../config';

export default class LoginPage extends Component {
	constructor(props) {
		super(props);

		const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;
		this.signIn = new OktaSignIn({
			/**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */

			// Changes to widget functionality
			features: {
				registration: true, // Enable self-service registration flow
				rememberMe: true, // Setting to false will remove the checkbox to save username
				//multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
				//selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
				//smsRecovery: true,                // Enable SMS-based account recovery
				//callRecovery: true,               // Enable voice call-based account recovery
				router: true // Leave this set to true for the API demo
			},
			baseUrl: issuer.split('/oauth2')[0],
			clientId,
			redirectUri,
			logo: '/react.svg',
			i18n: {
				en: {
					'primaryauth.title': 'Sign in to React & Company'
				}
			},
			authParams: {
				pkce,
				issuer,
				display: 'page',
				scopes
			},
			
		});
	}
	componentDidMount() {
		this.signIn.renderEl(
			{ el: '#sign-in-widget' },
			() => {
				/**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
			},
			(err) => {
				throw err;
			}
		);
	}

	render() {
		return (
			<div>
				<div id="sign-in-widget" />
			</div>
		);
	}
}
