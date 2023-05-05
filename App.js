const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello world from React!'
)
const heading1 = React.createElement(
  'h2',
  { id: 'heading1' },
  'Hello world from React!'
)

const child = React.createElement('div', { id: 'child' }, [heading, heading1])

const parent = React.createElement('div', { id: 'parent' }, [child, child])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)

