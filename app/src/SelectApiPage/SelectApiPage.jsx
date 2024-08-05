import { useCallback } from 'react';
import './SelectApiPage.css';
import { useNavigate } from 'react-router-dom';
import SelectApi from '../SelectApi/SelectApi';
import Logo from '../logo.png';

const SelectApiPage = () => {
	const navigate = useNavigate();
	const handleChange = useCallback(
		(selectedApi) => {
			navigate(selectedApi.value);
		},
		[navigate],
	);

	return (
		<div>
			<div className="search-wrapper">
				<div>
					<img src={Logo} alt="Redoc" />
					<SelectApi autoFocus="true" onChange={handleChange} />
				</div>
			</div>
		</div>
	);
};

export default SelectApiPage;
