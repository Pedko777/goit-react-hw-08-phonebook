import {lazy} from 'react';

export default [
    {
        path: "/",
        label: "Home",
        exact: true,
        component: lazy(()=> import ("./pages/HomePage/HomePage")),
        private: false,
        restricted: false
    },
    {
        path: "/register",
        label: "Register",
        exact: true,
        component: lazy(()=> import ("./pages/RegisterPage/RegisterPage")),
        private: false,
        restricted: true
    },
    {
        path: "/login",
        label: "Login",
        exact: true,
        component: lazy(()=> import ("./pages/LoginPage/LoginPage")),
        private: false,
        restricted: true
    },
    {
        path: "/contacts",
        label: "Contacts",
        exact: true,
        component: lazy(()=> import ("./pages/Contacts/ContactsContainer")),
        private: true,
        restricted: false
    },
]
