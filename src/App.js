import React from 'react';
import Modal from './Modal'
import ModalContent from './ModalContent'

class HelloReact extends React.Component {
    render() {
        return (
             <div>
                 <h1>Hello World</h1>
                <Modal>
                    <ModalContent></ModalContent>
                </Modal>
             </div>
        );
    }
}


export default HelloReact;