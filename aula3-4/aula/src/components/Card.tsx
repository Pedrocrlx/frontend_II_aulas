import Button from "./Button";
import Counter from "./CounterExercise";
import Title from "./TextTemplate/Title";
import Description from "./TextTemplate/Description";

const Card = () => {
  return (
    <section className="flex text-center gap-5 bg-green-900 p-5 m-0 h-60">
      <h1 className="font-bold p-10 m-10 text-4xl text-white">Card</h1>
      <Title />
      <Description />
      <Button />
      <Counter />
    </section>
  );
};

export default Card;
