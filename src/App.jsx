import Menu from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return(
    
    <div className='w-full flex justify-center min-h-screen bg-[#111216]'>
      <div className='flex-col h-full w-[95%] border-[1px] border-[#1e2029] bg-[#14161d]  max-[640px]:w-full max-[640px]:overflow-hidden'>
        <div className='w-full h-full flex border-b-[1px] border-[#1e2029]'>
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
