// React component that return a div with a text
export const TestComponent = () => {

	if( typeof window !== "undefined" ) {
		useEffect(
			() => {
				console.log( "Window is available" );
			},
			[]
		);
	}

	return <div>Test Component</div>;
};
