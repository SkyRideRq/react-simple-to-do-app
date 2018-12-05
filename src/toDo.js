import React from 'react'

const ToDo = ({toDo, delToDo}) => {
    const toDoList = toDo.length ? (
        toDo.map(e => {
            return (
                <div className="collection-item" key={e.id} onClick={()=>{delToDo(e.id)}}>
                    <span >{e.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">Wszystko ogarnięte</p>
    )
    return (
        <div className="toDo collection">
            {toDoList}
        </div>
    )
}
export default ToDo