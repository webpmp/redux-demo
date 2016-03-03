import assert from 'assert';
import * as types from 'app/actions/notes';
import reducer from 'app/reducers/notes';

describe('NoteReducer', () => {
  it('should return the initial state', () => {
    assert.equal(reducer(undefined, {}).count(), 0);
  });

  it('creates notes', () => {
    const note = {
      id: 'foobar',
      task: 'test'
    };

    assert.deepEqual(reducer(undefined, {
      type: types.CREATE_NOTE,
      note: note
    }).toJS(), [note]);
  });

  it('updates notes', () => {
/*
    const task = 'test';
    const updatedTask = 'test 2';

    NoteActions.create({task});

    const note = NoteStore.getState().notes[0];

    NoteActions.update({...note, task: updatedTask});

    const state = NoteStore.getState();

    assert.equal(state.notes.length, 1);
    assert.equal(state.notes[0].task, updatedTask);
*/
  });

  it('deletes notes', () => {
/*
    NoteActions.create({task: 'test'});

    const note = NoteStore.getState().notes[0];

    NoteActions.delete(note.id);

    const state = NoteStore.getState();

    assert.equal(state.notes.length, 0);
*/
  });

  it('gets notes', () => {
/*
    const task = 'test';
    NoteActions.create({task: task});

    const note = NoteStore.getState().notes[0];
    const notes = NoteStore.getNotesByIds([note.id]);

    assert.equal(notes.length, 1);
    assert.equal(notes[0].task, task);
*/
  });
});