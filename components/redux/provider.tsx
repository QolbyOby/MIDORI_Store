'use client'
import { Provider } from 'react-redux';
import { store } from './store';
import { initializeCart } from './cartSlice';
import { useEffect } from 'react';

 const Prvider = ({children}: {children: React.ReactNode}) => {

    useEffect(() => {
        store.dispatch(initializeCart());
      }, []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Prvider