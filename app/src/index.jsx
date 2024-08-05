import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RedocPage from './RedocPage/RedocPage';
import SelectApiPage from './SelectApiPage/SelectApiPage';

const root = createRoot(document.getElementById('root'));

root.render(
	<Router basename={window._env_.BASE_NAME}>
		<div>
			<Routes>
				<Route exact path="/" Component={SelectApiPage} />
				<Route path="/:api" Component={RedocPage} />
			</Routes>
		</div>
	</Router>,
);
