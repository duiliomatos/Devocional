//Devocional: Aplicação que exibe diferentes versos bíblicos na nela
import './App.css'
import Devocional from './components/Devocional'

function App() {
  return (
      <div>
        <section className='flex flex-col items-center  h-screen w-screen bg-amber-600 justify-center'>
          <h2 className='text-white p-4 font-extralight text-5xl'>Textos Inspiradores</h2> 
          <Devocional/>
        </section>
      </div>
  )
}
export default App
