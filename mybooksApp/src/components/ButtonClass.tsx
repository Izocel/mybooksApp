import React, { Component, ReactNode } from 'react';

class ButtonState {
  public size:undefined | string | "lg" | "sm";
  public class:string | undefined;
  public color:string | undefined;
  public link:string | undefined;
  public callType: "onClick" | undefined
  public callback:CallableFunction | undefined;
  public children:ReactNode | undefined;

  constructor() {
    this.class = this.getCompletClass();
    this.children = this.getChildren();
  }

  private getCompletClass = () => {
    let classStr:string = "btn";

    if(this.size)
      classStr += " btn-" +this.size;
    if(this.color)
      classStr += " " +this.color;
    return classStr;
  }

  private getChildren = () => {
    let classStr:string = "btn";

    if(this.size)
      classStr += " btn-" +this.size;
    if(this.color)
      classStr += " " +this.color;
    return classStr;
  }
}


class Button extends Component {
  constructor(props:any){
    super(props)
    this.state = new ButtonState();
  }

  render() {
    return (
      <button className='btn btn-primary btn-sm'>{this.props.children}</button>
    );
  }
}

export default Button; // Don't forget to use export default!