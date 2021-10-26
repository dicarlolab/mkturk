import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

// useDispatch is a function defined in 'react-redux' but we are
// aliasing it as 'useAppDispatch' and adding a return type (?)
export const useAppDispatch = () => useDispatch<AppDispatch>();

// useSelector is a function defined in 'react-redux' but we are
// aliasing it and adding the <RootState> type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
