

export const AuthLayout = ({children, title = ""}) => {
  return (
    <>
        <div className="contenedor">
            <div className='contenedor-style animate__animated animate__fadeIn animate__faster'>
                <h5 className='titulo'>{title}</h5>
                {children}
            </div>
        </div>
    </>
  )
}
