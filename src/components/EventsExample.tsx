import React, { useRef, useState } from 'react'

const EventsExample = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Значение управляемого инпута ' + value);
        console.log('Значение неуправляемого инпута ' + inputRef.current?.value);
        
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
        
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false);
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false);
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true);
    }    

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
            <input ref={inputRef} type="text" placeholder='Неуправляемый'/>
            <button onClick={clickHandler}>Кликать</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag  ? 'blue' : 'red', marginTop: 15}}
            >

            </div>
        </div>
    )
}

export default EventsExample