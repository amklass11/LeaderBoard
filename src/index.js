import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initID from './modules/init.js';
import displayScores from './modules/DisplayScores.js';
import addNew from './modules/addNew.js';

const refreshButton = document.getElementById('refresh-btn');
const addButton = document.getElementById('add-btn');

initID();
refreshButton.addEventListener('click', displayScores);
addButton.addEventListener('click', addNew);