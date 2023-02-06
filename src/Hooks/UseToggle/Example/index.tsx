import useToggle from '../useToggle';

const Example = () => {
    /**
     * A state to maintain modal visibility
     */
    const  [showModal, toggleModal, setModalState] = useToggle(false);
   
   return <>
        <button onClick={toggleModal}>Toggle Modal</button>
        <button onClick={() => setModalState(true)}>Show Modal</button>
        <button onClick={() => setModalState(false)}>Hide Modal</button>
        {showModal ? <>Modal Body</> : null}
    </>
}

export default Example;
