import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipePost = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);

  useEffect((id) => {
    axios(`/api/getrecipe/${id}`)
      .then(response => {
        response.json().then(postInfo => {
            setPostInfo(postInfo)
        });
      })
      .catch((err) => console.log(err));
  });
  return <div>RecipePost</div>;
};

export default RecipePost;
