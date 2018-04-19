import { expect } from 'chai'
import 'mocha'

import { Auth0Lock } from './auth0-lock'
import { Auth0ClientConfig, PathMatch } from '@truesparrow/identity-sdk-js'


describe('Auth0Lock', () => {
    const allowedPaths: PathMatch[] = [
        { path: '/', mode: 'full' },
        { path: '/admin/', mode: 'prefix' }
    ];

    const auth0ClientConfig: Auth0ClientConfig = {
        clientId: 'some-id',
        domain: 'the-domain',
        loginCallbackUri: '/auth/login',
        styleLogoUri: '/real/client/android-chrome-192x192.png',
        stylePrimaryColor: '#fefefe',
        styleApplicationName: 'TruSpar'
    };

    it('can be constructed', () => {
        const auth0Lock = new Auth0Lock(allowedPaths, auth0ClientConfig);

        expect(auth0Lock).is.not.null;
    });
});
