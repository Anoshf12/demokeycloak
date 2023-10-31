import React, { useState } from 'react';
import Keycloak from "keycloak-js";

const useAuth = async () => {
  const [isLogin, setLogin] = useState(false);

  const keycloak = new Keycloak({
    url: 'http://localhost:4000/',
    realm: 'myrealm',
    clientId: 'myclient'
  });

   keycloak.init({
    onLoad: 'login-required'
   }).then((res) => setLogin(res));

    try {
        const authenticated = await keycloak.init();
        console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
    } catch (error) {
        console.error('Failed to initialize adapter:', error);
    }

  return isLogin;
};

export default useAuth;