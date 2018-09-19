const defaultState = {
    isLoggedIn: false,//state whether user is logged in or not
    username: '',
    password: '',
    id: '',
    namaPemohon: '',
    jawatan: '',
    lokasi: '',
    unit: '',
    phone: '',
    email: '',
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                username: action.username,
                password: action.password,
                id: '',
                namaPemohon: '',
                jawatan: '',
                lokasi: '',
                unit: '',
                phone: '',
                email: '',
            });
        case 'LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                username: '',
                password: '',
                id: '',
                namaPemohon: '',
                jawatan: '',
                lokasi: '',
                unit: '',
                phone: '',
                email: '',
            });
        case 'SIGNUP':
            return Object.assign({},state,{
                isLoggedIn: true,
                username: action.username,
                password: action.password,
                id: action.id,
                namaPemohon: action.namaPemohon,
                jawatan: action.jawatan,
                lokasi: action.lokasi,
                unit: action.unit,
                phone: action.phone,
                email: action.email,
            })
        default:
            return state;
    }
}