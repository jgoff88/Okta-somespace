import React from 'react'

function store() {

    const token = JSON.parse(localStorage.getItem("okta-token-storage"));
    const dbToken = token.idToken.claims.sub;
    console.log(dbToken);

    return ( <
        div >

        <
        /div>
    )

}

export default store