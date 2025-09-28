import { useFavorites } from "../../../Contexts/FavoritesContext";

type ProductProps = {
  id: number;
};

const ProductLikeButton = ({ id }: ProductProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isLiked = favorites.includes(id);

  return (
    <button className="like-button" onClick={() => toggleFavorite(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
          fill={isLiked ? "#e0245e" : "none"}
          stroke={isLiked ? "#e0245e" : "#404040"}
        />
      </svg>
    </button>
  );
};

export default ProductLikeButton;
