import React from 'react';
import './leftContent-styles.css';
import Modal from '../Modal/Modal';
import AddForm from '../forms/addForm'

class LeftContent extends React.Component {
    state = {
        show: false,
        title: "",
        content: <div></div>
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      formAdd = e => {
        this.setState({
          title: "Add new Book",
          content: <AddForm/>
        });
      };
      
    render(){
        return(
            <div className="split left">
                <div className="page-title">
                    <h1 id="left-title">Recommended Books <br/> Reading</h1>
                </div>
                <div className="centered">
                    <button className="add-btn circle-box toggle-button" id="centered-toggle-button" type="button" onClick={e => {
                        this.showModal(); this.formAdd();
                        }}>Tambah</button>
                    <Modal onClose={this.showModal} show={this.state.show} title={this.state.title}>
                        {this.state.content}
                    </Modal>
                </div>
            </div>
        );
    }
}

export default LeftContent;