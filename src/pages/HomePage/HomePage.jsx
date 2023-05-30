import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

//The HomePage() will display all the images as clickable cards that will
//  direct the user to the recipe's details (ingredients and recipes)
export default function HomePage() {
  const { recipeId } = useParams();

  return (
    <>
      <Header />
    </>
  );
}
