'use client';
import { Component } from 'react';

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export default class ErrorBoundary extends Component<any> {
  state = { hasError: false, error: '' };

  constructor(props: Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: { componentStack: any }) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
