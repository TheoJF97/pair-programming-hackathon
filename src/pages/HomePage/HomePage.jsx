import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Recipe from "../../components/Recipe/Recipe";

const { REACT_APP_SERVER_URL: serverUrl, REACT_APP_SERVER_API_KEY: apiKey } =
  process.env;

//The HomePage() will display all the images as clickable cards that will
//  direct the user to the recipe's details (ingredients and recipes)
export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios
      .get(`${serverUrl}/recipes?api_key=${apiKey}`)
      .then(({ data }) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="recipes">
        {recipes.map((recipe) => {
          <Recipe
            key={recipe.id}
            recipe={recipe}
            fetchRecipes={fetchRecipes}
          ></Recipe>;
        })}
      </div>
    </>
  );
}
