import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error) {
        //process error here

        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log("error boundary log", error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
                    <ErrorImageText>
                        A good boy ate this page
                    </ErrorImageText>
                </ErrorImageOverlay>
                )
        }

        return this.props.children;
    }
};

export default ErrorBoundary;