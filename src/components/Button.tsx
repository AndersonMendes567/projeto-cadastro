interface ButtonProps {
  children: any
  color?: "green" | "blue" | "red"
  action: ()=> void
}

export default function Button(props: ButtonProps) {
  const color = props.color || "gray";
  return (
    <button 
      className={`
        px-8 py-2 bg-${color}-600 hover:bg-${color}-500 font-bold rounded-lg text-white
      `}
      type="button"
      onClick={props.action}
    >{props.children}</button>
  )
}
  