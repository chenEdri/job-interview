import React, { Component } from "react"

import { Jumbo } from "../cmps/Jumbo"
import { Center } from "../cmps/Center"

export class Home extends Component {
  render() {
    return (
      <section>
        <Jumbo />
        <Center />
      </section>
    );
  }
}


