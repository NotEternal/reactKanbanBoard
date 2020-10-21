import React from 'react';
import { connect } from 'react-redux';
import UserBoards from './components/UserBoards';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <UserBoards />
    </div>
  );
}
