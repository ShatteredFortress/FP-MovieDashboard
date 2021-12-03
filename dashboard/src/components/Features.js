import React from 'react'

import "./Features.css";
const Features = () => {
    return (
        <div>
              <div>
                  <h1>This is the features page</h1>

                  <div id={'featurecontainer'}>
                    <div id={'featureheader'}>
                        <div id={'featureone'}>
                            <h3>Search</h3>
                            <div>You are allowed to search for videos if they are already loaded</div>
                        </div>
                        <div id={'featuretwo'}>
                            <h3>Descriptions</h3>
                            <div>clicking on a loaded movie or show will allow the description to be fetched</div>

                        </div>
                        <div id={'featurethree'}>
                            <h3></h3>
                        </div>
                        <div id={'featurefour'}>
                            <h3></h3>
                        </div>


                    </div>

                  </div>
                </div>        
        </div>
    )
}

export default Features
            