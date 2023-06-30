
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import { App } from "./app";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

  <QueryClientProvider client={queryClient}>
    <App></App>
  </QueryClientProvider>,

);

reportWebVitals();
