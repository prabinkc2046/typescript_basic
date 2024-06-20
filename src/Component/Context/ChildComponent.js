import { useContext } from "react"
import { GreetingContext } from "./GreetingContext"
export default function ChildComponent() {
  const backgroundColor = useContext(GreetingContext);
  return (
    <div style={{backgroundColor: backgroundColor.primary.backgroundColor}}>
      <p>Greeting</p>
      <button >greet</button>
    </div>
  )
}
