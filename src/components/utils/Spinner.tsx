export const Spinner = ({loading}: ISpinner) => {
  if(!loading) return null;
  return (    
    <div className="col-12">
        <div className="spinner">

        </div>
    </div>
  )
}

interface ISpinner {
    loading: boolean
}