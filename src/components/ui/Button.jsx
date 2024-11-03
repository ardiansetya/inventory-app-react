
const Button = ({title, color, onClick }) => {
  return (
    <button className={`${color} px-4 py-2 rounded-xl text-white`} onClick={onClick}>{title}</button>

  )
}

export default Button