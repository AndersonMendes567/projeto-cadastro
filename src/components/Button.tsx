interface ButtonProps {
  children: any
  color?: "green " | "blue" | "red"
  action: ()=> void
}

export default function Button(props: ButtonProps) {
  const color = props.color || "gray";
  console.log(color)
  return (
    <button 
      className={`
        bg-${color}-600 py-2 font-bold rounded-lg px-6 text-white
      `}
      onClick={props.action}
    >{props.children}</button>
  )
}
  