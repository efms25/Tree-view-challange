import { Button } from './UnitButton.styles'

function UnitButton(props) {
  return (
    <Button type="button" isActive={props.isActive} onClick={props.onClick}>
        {props.icon && <img src={props.icon} alt={props.children + "icon"}/>}
        {props.children}
    </Button>
  )
}

export default UnitButton