import { initializeApp } from 'firebase/app';
import './modals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const adminBtn = document.querySelector('#admin-btn') as HTMLButtonElement;
const newUserBtn = document.querySelector('#new-user-btn') as HTMLButtonElement;

adminBtn.addEventListener('pointerup', (event: PointerEvent) => {
  alert('adminBtn was pressed');
});

newUserBtn.addEventListener('pointerup', (event: PointerEvent) => {
  alert('new user btn was pressed');
});
