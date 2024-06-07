import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  return <article>Character {id}</article>;
};

export default CharacterDetail;
