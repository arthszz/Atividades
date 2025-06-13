import BoasVindas from './componentes/Boas-Vindas';
import Contador from './componentes/Contador';
import MensagemCondicional from './componentes/MensagemSecreta';
import ListaSimples from './componentes/ListaSimples';
import CartaoProduto from './componentes/CartaProduto';
import InputTexto from './componentes/InputTexto';


const deveExibir = true;
const frutas = ['Pitaya', 'Mexirica', 'Laranja', 'Uva'];

function App() {
  return (

  
    <div>
    <h1>Atividade 01</h1>
      <BoasVindas nome="Arthur" />
<h1>_______________________________________________________________________________</h1>
    <h1>Atividade 02</h1>

      <div>

        <h1>Contador</h1>
        <Contador />

      </div>
<h1>_______________________________________________________________________________</h1>
    <h1>Atividade 03</h1>

    <div>
  
      <MensagemCondicional exibir={deveExibir} />
    </div>
<h1>_______________________________________________________________________________</h1>
    <h1>Atividade 04</h1>
    <div>
      <h1>Lista de Frutas</h1>
      <ListaSimples itens={frutas} />
    </div>
<h1>_______________________________________________________________________________</h1>
    <h1>Atividade 05</h1>
    <div>
      <CartaoProduto 
        nome="Galinha Ayam Cemani"
        imagem="https://img.mfrural.com.br/api/image?url=https://s3.amazonaws.com/mfrural-produtos-us/375253-706918-74196653-ayam-cemani-ovos-e-aves.webp&width=480&height=288&mode=4"
        preco={119.99}
      />
    </div>

    <div>
<h1>_______________________________________________________________________________</h1>
      <h1>Atividade 06</h1>
      <InputTexto />
    </div>


    </div>

    );
}

export default App;

