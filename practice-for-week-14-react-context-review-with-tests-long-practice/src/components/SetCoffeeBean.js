import { useCoffeeContext } from '../context/CoffeeContext';

const SetCoffeeBean = ({ coffeeBeans }) => {

  const { coffeeBean, setCoffeeBeanId } = useCoffeeContext();

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
            onChange={() => setCoffeeBeanId(bean.id)}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;