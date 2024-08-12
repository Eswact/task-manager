import { toast, Bounce } from 'react-toastify';

function ShowError(msg?: string) {
    toast.error(msg || 'An error occurred', {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        transition: Bounce,
    });
}
function ShowSuccess(msg?: string) {
    toast.success(msg || 'Successful', {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        transition: Bounce,
    });
}

const showNavbar = () => {
    document.getElementById('asideBar')?.classList.add('show');
    document.getElementById('blackBg')?.classList.remove('hidden');
    document.getElementById('blackBg')?.classList.add('block');
};

const closeNavbar = () => { 
    document.getElementById('asideBar')?.classList.remove('show');
    document.getElementById('blackBg')?.classList.remove('block');
    document.getElementById('blackBg')?.classList.add('hidden');
};

export {ShowError, ShowSuccess, showNavbar, closeNavbar};