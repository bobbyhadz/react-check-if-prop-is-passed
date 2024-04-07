import './App.css';

const Button = ({withIcon}) => {
  if (withIcon !== undefined) {
    console.log('prop was passed');
  } else {
    console.log('prop was NOT passed');
  }

  return <button>Click {withIcon ? '▶️' : null}</button>;
};

export default function App() {
  return (
    <div>
      <Button />
    </div>
  );
}
