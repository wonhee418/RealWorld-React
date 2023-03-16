import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/common/Footer";
import Header from "./components/common/header/Header";
import { queryClient } from "./lib/react-query/queryClient";
import Home from "./pages/Home";
import ReactRouterObject from "./routes";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Header />
          {/* TODO: fallbackElement는 앱이 작동중이라는것을 표시하기위한 컴포넌트를 사용권장 */}
          <RouterProvider
            router={ReactRouterObject}
            fallbackElement={<Home />}
          />
          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
