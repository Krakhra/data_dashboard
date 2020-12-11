# data_dashboard

This web dashboard is hosted online at https://cis4020.thepad.xyz

Please view the online dashboard or follow the instructions below to run it locally.

## Developing
* Note that this project uses the react-scripts build pipeline. Because of this, when using development mode, the server will be accessible on port 3000. When running a production server, it will be accessible at the defined "port" in `config.js` (default = 3001).

To run the server in development mode with hot-reload for both server and web app, follow the below steps:
1. Clone this repository. You can do this from the terminal using `git clone git@github.com:Krakhra/data_dashboard.git`.
2. Enter the repository folder. If you just cloned the repo, you can do this using `cd data_dashboard`.
3. Install and update the required packages by running `npm install`. This may take awhile when first ran. You should periodically run this command to ensure you have the most up to date packages.
4. Run the development server by executing `npm run dev`. This will start the backend, the react-scripts front-end build process, and proxy API requests from the front-end to the backend.

## Viewing & Deploying
1. Once the repository exists on a server, you can build the production server using `npm run build`.
2. Run the server without hot-reload using `npm run prod`. This will server both the backend and front-end resources.
