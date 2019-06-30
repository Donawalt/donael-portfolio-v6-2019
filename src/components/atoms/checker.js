import React from 'react'

class Checker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check : '',
    }
    //** Ligne à  supprimer pour le résultat finale
    //*document.querySelector('body').setAttribute('class', 'black-mode');
    //* Pensez à donner un style par défaut via css au pages globales
    //**
  }

  componentDidMount(){
    this.init();
  }

  init(){
      console.log(document.querySelector('body').classList);
    if(typeof document !== "undefined"){
      if(document.querySelector('body').classList.contains("white-mode")){
        console.log(document.querySelector('body').classList.contains("white-mode"));
        this.setState({
          check : true,
        });
      }else {
        this.setState({
          check : false,
        });
      }
    }
  }

  handleChange(){
    if(typeof document !== "undefined"){
      if(this.state.check === true){
          document.querySelector('body').removeAttribute('class');
          this.setState({
            check : false,
          });
          document.querySelector('body').setAttribute('class', 'black-mode');
      }

      else if (this.state.check === false) {
        document.querySelector('body').removeAttribute('class');
        this.setState({
          check : true,
        });
        document.querySelector('body').setAttribute('class', 'white-mode');
      }
      else {
        if (this.state.check = false) {
          this.setState({
            check : '',
          });
      }
    }
    }
}

  render(){
    return(
        <label className="switch">
          <input type="checkbox" checked={this.state.check} onChange={() => this.handleChange()}/>
          <span className="slider round"></span>
        </label>
    );
  };
};

export default Checker
