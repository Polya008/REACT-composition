import './App.css';
import Card from './components/Card';

function App() {
  return (
      <div className="App">
      <Card title='Ted Lasso' text='serial' link='https://ted-lasso.ru/?ysclid=lpf8il06gb785256894' >
        <image
          class="card-img-top" alt="альтернативная картинка"></image>
      </Card>
      <Card title='Ted Lasso' text='serial' link='https://ted-lasso.ru/?ysclid=lpf8il06gb785256894' >
      </Card>
    </div>
  );
}

export default App;
