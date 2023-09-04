import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
	return <div className='max-w-[1320px] mx-auto'>{children}</div>;
};

export default Container;
