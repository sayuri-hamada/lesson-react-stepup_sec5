import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  //useParamsのHooksを利用してリンク元からidを受け取る
  const { id } = useParams();
  //useLocationのHooksを利用して?以降のクエリパラメーターを受け取る
  const { search } = useLocation();
  //クエリパラメーターをURLSearchParamsを利用してメソッドを利用できるようにする
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメターは{id}です</p>
      <p>クエリパラメターは{query.get("name")}です</p>
    </div>
  );
};
