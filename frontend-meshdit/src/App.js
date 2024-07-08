import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { useLoading } from "./hooks/useLoading";
import { setLoadingInterceptor } from "./Interceptors/loadingInterceptor";
import './App.css';

function App() {
  const { showLoading, hideLoading} = useLoading();

  useEffect(() => {
    setLoadingInterceptor({showLoading, hideLoading});
  }, []);
  
  return (
    <>
      <Loading />
      <Header />
      <div className='container'>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
