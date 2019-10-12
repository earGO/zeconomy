import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h3>Component with id {this.props.children[0].props.id} is broken</h3>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary
