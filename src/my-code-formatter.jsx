import { React, FocusedContactsStore } from "mailspring-exports";

export default class MyCodeFormatter extends React.Component {
  static displayName = "MyCodeFormatter";

  constructor(props) {
    super(props)
    this.state = this._getStateFromStores();
  }
}
