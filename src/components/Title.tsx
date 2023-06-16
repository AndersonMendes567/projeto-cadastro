interface TitleProps {
  children: any
}

export function Title(props: TitleProps) {

  return (
    <div>
      <h1 className="text-3xl text-center text-white mb-4">{props.children}</h1>
    </div>
  ) 
}