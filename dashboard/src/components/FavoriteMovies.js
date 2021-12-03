import React from 'react'
import "./FavoriteMovies.css";
const FavoriteMovies = () => {
    return (
        <div className={"featurespage"}>
          <h1 id={"mainFeatureh1"}>Features of our Site</h1>
          <div id={"featurecontainer"}>
            <section className={"featurebox"}>
              <h2>No Time To Die</h2>
    
              <p>
                  A gripping end(?) to one of the greatest film series ever created
              </p>
              <span>James Bond Will Return</span>
              
            </section>
            <section className={"featurebox"}>
              <h2>Spider-Man: No Way Home</h2>
    
              <p>
                  EPIIIIIC way to break the fourth wall of the multiverse
              </p>
             
            </section>
            <section className={"featurebox"}>
              <h2>Labyrinth</h2>
    
              <p>
                  Help sarah get her baby brother back from david bowie
              </p>
             
            </section>

            <section className={"featurebox"}>
              <h2>Red Notice</h2>
    
              <p>
                  A Primer in why the rock should not be james bond
              </p>
             
            </section>
          </div>
        </div>
      );
}

export default FavoriteMovies
