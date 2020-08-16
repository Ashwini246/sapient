# sapient


**_Server Side rendering_**

Angular Universal or Angular SSR (server-side rendering) is used for developing this application. With Angular Universal (SSR) we are able to render our applications as HTML on the server (ie: Node.js), and return it to the browser.

This helps Angular applications with SEO (search engine optimization), social-media previews, and even perceived performance.

Steps to build Angualr SSR app:

    1. Build a regular angular application
    2. Install the latest Angular Universal engine - ng add @nguniversal/express-engine
    3. For static prerendering, execute - npm run prerender
    4. Build the SSR code by executing - npm run build
    5. Run the server using the coomand - npm run serve:ssr


**_Build and packaging_**

Adding static code analysis as part of building. Add TS rules in tslint.json and run the linting during build process. If there are linting errors in the code, build will fail. We can also 
integrate with SonarCube and unit test coverage in CI/CD pipeline to test code quality.

        "build": "ng lint && ng build --prod && ng run angular.io-example:server:production",
        
        
**_Client side rendering_**

On application load, all the SpaceX programs are fetched. Based on the filters selected by users, client side filtering is applied on the entire list to filter
the program list.
For responsive UI, bootstrap library is used to change the layout dynamically base dn the screen size.


**_Unit tests_**

Unit tests are written using Jasmine framework for components and services.
Coverage report:

    Statements   : 87.04% ( 47/54 )
    Branches     : 50% ( 12/24 )
    Functions    : 72.22% ( 13/18 )
    Lines        : 86.27% ( 44/51 )

Execute the below command to generate test report

                 ng test


**_Lighthouse score, Accessibility and SEO_**

Attached the lighthouse report screenshot in the code - lighthouse.png



_**Heroku deployment:**_

Please find the deployed heroku app here:  

        https://salty-anchorage-44702.herokuapp.com

