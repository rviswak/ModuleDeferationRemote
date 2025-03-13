React Module Federation enables a React application (the host) to dynamically load and use components or modules from another independent React application (the remote) at runtime
Run the remote application using the Webpack development server or build and deploy it to a hosting environment.
In the host application, configure the remotes property in the ModuleFederationPlugin to point to the remote's remoteEntry.js URL.
