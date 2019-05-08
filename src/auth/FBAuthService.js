/*global FB*/

class FBAuthService {

    static initSdk(onSdkInitialized) {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '2196893357307788',
                cookie: true,
                xfbml: false,
                version: 'v3.3'
            });
            // FB.AppEvents.logPageView();

            if (onSdkInitialized) { onSdkInitialized(); }
        };

        (function(d, s, id){
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    /**
     * Starts the authentication through facebook account
     * and retrieves user information from graph api
     * @param {Function} onResult - A callback to invoke with an object like
     *                   {
     *                     success: true|false,
     *                     user: {
     *                       name: <string>,
     *                       email: <string>,
     *                       picture: <string>,
     *                       token: <string>
     *                   }}
     */
    static login(onResult) {
        FB.login(loginResponse => {
            if (loginResponse.status === 'connected') {
                // noinspection JSUnresolvedVariable
                let token = loginResponse.authResponse.accessToken;

                FB.api('/me', { fields: 'id,name,email' }, meResponse => {
                    if (!meResponse.error) {
                        let picUrl = `https://graph.facebook.com/${meResponse.id}/picture`;
                        let response = {
                            success: true,
                            user: {
                                name: meResponse.name,
                                email: meResponse.email,
                                picture: picUrl,
                                token
                            }
                        };

                        onResult(response)
                    }
                })
            } else {
                onResult({ success: false });
            }

        }, { scope: 'public_profile,email'})
    }
}

export default FBAuthService;
