import React from 'react';
import Note from './Note';

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  render() {
    return (
      <ul>
        {this.state.notes.map(this.eachNote)}
      </ul>
    )
  }
  componentWillMount() {
    var self = this
    $.getJSON("https://spy-api.herokuapp.com/apis?api-key=043d38e30b3685edff633897d9fd1483f54b7d1e&json=Notes", function(results) {
        results.notes.forEach(function(note) {
          self.add(note);
        })
    })
  }
  add(note) {
    var arr = this.state.notes;
    arr.push(note.content);
    this.setState({notes: arr});
  }
  eachNote(note) {
    return <Note>{note}</Note>
  };

};

export default NotesList;
