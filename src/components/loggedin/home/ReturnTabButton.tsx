import './ReturnTabButton.css'


interface Props {
  subTab: string;
  setSubTab: (s: string) => void;
}

const ReturnTabButton = (props: Props) => {

  return (
    <div className='return-tab-button' onClick={() => props.setSubTab(props.subTab)}>
      <div className="return-arrow">
        <i className='fa fa-arrow-left fa-xl fa-fw'></i>
      </div>
    </div>
  )
}

export default ReturnTabButton
