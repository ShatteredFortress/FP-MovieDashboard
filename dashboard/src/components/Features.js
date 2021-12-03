import React from 'react'

import "./Features.css";
const Features = () => {
    return (
        <div className={"featurespage"}>
          <h1 id={"mainFeatureh1"}>Features of our Site</h1>
          <div id={"featurecontainer"}>
            <section className={"featurebox"}>
              <h2>Search</h2>
    
              <p>
                Each movie title or show can be searched for in the search bar above
              </p>
              <span>This does not include movies not in the set</span>
              
            </section>
            <section className={"featurebox"}>
              <h2>Clear Filter</h2>
    
              <p>
                Clear the filter movies once your done searching by pressing the clear button. 
              </p>
             
            </section>
            <section className={"featurebox"}>
              <h2>Conditional Loading</h2>
    
              <p>
                  Gives users a reasonable experience while they wait for the movies / shows to lead
              </p>
             
            </section>

            <section className={"featurebox"}>
              <h2>Descriptions</h2>
    
              <p>
                  clicking on a movies poster will allow for users to fetch and display movie /show descriptions
              </p>
             
            </section>
          </div>
        </div>
      );
}

export default Features
            