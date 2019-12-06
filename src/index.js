import avatar from './avatar.jpg';
import './index.css';

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img);

var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
// var avatar = require( './avatar.jpg' );

new Header();
new Sidebar();
new Content();