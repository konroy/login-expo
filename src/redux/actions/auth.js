//calls action LOGIN & store login info
export const login = (username,userPassword) => {
    return{
        type: 'LOGIN',
        username: username,
        password: userPassword,
    };
};
//calls action LOGOUT
export const logout = () => {
    return{
        type: 'LOGOUT'
    };
};
//calls action SIGNUP & store sign up info
export const signup = (username,password,id,namaPemohon,jawatan,lokasi,unit,phone,email) => {
    return{
        type: 'SIGNUP',
        username: username,
        password: password,
        id: id,
        namaPemohon: namaPemohon,
        jawatan: jawatan,
        lokasi: lokasi,
        unit: unit,
        phone: phone,
        email: email,

    };
};