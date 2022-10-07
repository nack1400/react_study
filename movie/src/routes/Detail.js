import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/moie_details.json?movie?movie_id=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, [])
  return <h1>Detail {id}</h1>;
}

export default Detail;
