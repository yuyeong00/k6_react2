import { useRecoilValue } from "recoil";
import { IsLogin } from "./StAtom";
import Login from "./Login"

export default function Subway() {
  const IsLoginCheck = useRecoilValue(IsLogin);  // recoil의 상태값을 가져옴
  
  return (
    <div className="h-full flex justify-center items-center">
      {!IsLoginCheck ? <Login /> : "Subway"}
    </div>
  )
}
