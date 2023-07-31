/* eslint-disable no-console */
import { Container } from "@mantine/core";
import { Component, ErrorInfo } from "react";
import Page500 from "@/pages/ErrorPages/Page500";

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
          }}
        >
          <Page500 />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
