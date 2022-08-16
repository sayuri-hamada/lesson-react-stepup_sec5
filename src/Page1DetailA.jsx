import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  //goBackメソッドを利用してブラウザバックを同じ挙動をJavaScriptで実現する
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
