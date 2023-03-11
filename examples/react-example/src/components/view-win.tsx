import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import ViewWin from 'view-win'

const ListWrap = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  display: flex;
  align-items: center;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 8%);
`
const ItemWrap = styled.li`
  flex-shrink: 0;
  font-size: 20px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const ViewWinComp = () => {
  const ele: any = useRef()
  const list = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'rmListener', 'JQuery', 'Angular', 'React', 'Vue', 'Nodejs', 'npm', 'nrm', 'nvm']
  const [viewWin, setViewWin] = useState<any>()

  useEffect(() => {
    setViewWin(new ViewWin({
      target: ele.current,
      direction: 'x',
      vmid: true
    }))
  }, [])

  const handleClick = (item: string) => () => {
    if (item === 'rmListener') viewWin.rmEvent()
  }


  return <>
    <ListWrap id="list" ref={ele}>
      {
        list.map((item, index)=><ItemWrap key={index} onClick={handleClick(item)}>{item}</ItemWrap>)
      }
    </ListWrap>
  </>
}

export default ViewWinComp