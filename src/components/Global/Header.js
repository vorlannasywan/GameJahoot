import { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://192.168.72.248:3000'); // ✅ Ganti IP sesuai server kamu

class Header extends Component {
  render() {
    return null;
  }
}

export { Header, socket };
