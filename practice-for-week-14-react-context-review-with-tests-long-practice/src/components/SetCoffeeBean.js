import { useCoffeeContext } from '../context/CoffeeContext';

const SetCoffeeBean = ({ coffeeBeans }) => {

  const { coffeeBean, setCoffeeBeanId } = useCoffeeContext();

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={(e) => setCoffeeBeanId(e.target.value)}
        // onChange={(e) => console.log(e.target.value)}
        value={coffeeBean.id}

      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
