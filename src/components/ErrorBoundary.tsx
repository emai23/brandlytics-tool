import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log the error to an external service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optionally send the error to a logging service like Sentry
  }

  handleRetry = () => {
    // Reset the error state to retry rendering
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return this.props.fallback || (
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-red-600">Something went wrong.</h2>
          <button
            onClick={this.handleRetry}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Retry
          </button>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
