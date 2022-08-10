import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  //useParamsのHooksを利用してリンク元からidを受け取る
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメターは{id}です</p>
    </div>
  );
};
