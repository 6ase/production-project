import { WrongPage } from 'Pages/WrongPage';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError(error: Error) {
		// Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
		return { hasError: true };
	}
  
	componentDidCatch(error: Error, info: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, info);
	}
  
	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback=''>
					<WrongPage/>;
				</Suspense>
			);}
  
		return children; 
	}
}
export default ErrorBoundary;