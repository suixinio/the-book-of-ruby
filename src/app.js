/* App entry file */

import './app.scss';

import controller from 'utils/controller.js';

import { generate_category, auto_active_nav, add_header } from 'components/category.js';
import { insert_line_num } from 'components/line-numbers.js';


generate_category();

controller([
	() => document.body.scrollTop = 0,
	auto_active_nav,
	add_header,
	insert_line_num
]);