import ScrollableBlocks from '../ScrollableBlocks/ScrollableBlocks';

function App() {
  const blocks = [
    { id: 1, content: 'Содержимое блока 1' },
    { id: 2, content: 'Содержимое блока 2' },
    { id: 3, content: 'Содержимое блока 3' },
    { id: 4, content: 'Содержимое блока 4' },
    { id: 5, content: 'Содержимое блока 5' },
    { id: 6, content: 'Содержимое блока 6' },
    { id: 7, content: 'Содержимое блока 7' },
    { id: 8, content: 'Содержимое блока 8' },
    { id: 9, content: 'Содержимое блока 9' },
    { id: 10, content: 'Содержимое блока 10' },
    { id: 11, content: 'Содержимое блока 11' },
    { id: 12, content: 'Содержимое блока 12' },
    { id: 13, content: 'Содержимое блока 13' },
    { id: 14, content: 'Содержимое блока 14' },
    { id: 15, content: 'Содержимое блока 15' },
    { id: 16, content: 'Содержимое блока 16' },
  ];

  return <div><ScrollableBlocks blocks={blocks} /></div>
}

export default App;
