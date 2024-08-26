
const ServWithImg = ({title , img}) => {
  return (
    <div>
        <h4 className='font-bold text-xl text-[rgba(0,19,90,1)] mb-4 mr-5'>{title}</h4>
        <img src={img} alt='serv' />
    </div>
  )
}

export default ServWithImg