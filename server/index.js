import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';
import users from './routes/users';

let app = express();

/**
 * router middleware setup
 */

app.use(bodyParser.json());
app.use('/api/users', users);

/**
 * webpack express setup
 */

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

/**
 * routes
 */

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

//port listen
app.listen(3000, () => console.log('Running on localhost:3000'));