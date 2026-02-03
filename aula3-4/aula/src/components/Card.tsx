import Title from "./Title";
import Description from "./Description";
import Button from "./Button";

const Card = () => {
  return (
    <>
      <section className="bg-green-900 p-5 m-5 rounded-4xl">
        <h1 className="font-bold p-10 m-10 text-4xl text-white">Card</h1>
        <Title />
        <Description />
        <Button />
      </section>
    </>
  );
};

export default Card;
