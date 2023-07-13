interface ButtonProps {
  children: any
  type?: 'reset' | 'submit'
  color?: "green" | "blue" | "red"
  action?: (event: any)=> void
}

export default function Button(props: ButtonProps) {
  const color = props.color || "gray";
  const type = props.type || "button";
  return (
    <button 
      className={`
        px-8 py-2 bg-${color}-600 hover:bg-${color}-500 font-bold rounded-lg text-white
      `}
      type={type}
      onClick={props.action}
    >{props.children}</button>
  )
}
  