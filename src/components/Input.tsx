interface InputProps {
  label: string
  id: string
  placeHolder?: string
  required?: boolean
  type?: 'text' | 'number'
  value: any
  setValue: (name: string, value: any)=> void
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        className="mt-1 block bg-gray-300 rounded-sm px-3 py-1 border-0 w-full" 
        type={props.type ?? "text"} id={props.id} value={props.value}
        placeholder={props.placeHolder} required={!!props.required}
        onChange={(e)=> props.setValue(props.id, e.target.value)}
      />
    </div>
  )
}