import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const showToast = (html: string, type: 'info' | 'success' | 'warning' | 'error' | 'default') => {
    toast(html, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type,
        theme: 'dark',
    });
}

const CustomSwal = withReactContent(Swal);

export const ConfirmModal = async (title: string, text?: string, confirmText?: string) => {

    const result = await CustomSwal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#818181',
        confirmButtonText: confirmText,
        input: 'checkbox',
        inputPlaceholder: 'I understand the consequences',
        inputValidator: (result) => {
            return !result && 'You need to confirm that you understand the consequences.';
        },
        customClass: {
            popup: 'bg-white dark:bg-slate-800',
            htmlContainer: 'text-slate-800 dark:text-slate-400',
        }
    });

    if (result.value) {
        return true
    }
};

export const validateAddress = (address: string, network: string) => {
    switch (network) {
        case "Bitcoin":
            const legacyAddressPattern = /^[1][A-Za-z0-9]{25,34}$/; // Legacy address (starting with 1)
            const segwitAddressPattern = /^[3][A-Za-z0-9]{25,34}$/; // SegWit address (starting with 3)
            const bech32AddressPattern = /^bc1[a-zA-HJ-NP-Z0-9]{39,59}$/; // Bech32 address (starting with bc1)

            return legacyAddressPattern.test(address) ||
                segwitAddressPattern.test(address) ||
                bech32AddressPattern.test(address);
        case "Ethereum":
        case "Binance Smart Chain":
        case "Polygon":
            return /^0x[a-fA-F0-9]{40}$/.test(address);
        case "TRON":
            return /^T[a-zA-Z0-9]{33}$/.test(address);
        case "Solana":
            return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address); // Base58 check for Solana (32 to 44 characters)
        case "Litecoin":
            return /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/.test(address); // Litecoin address format
        default:
            return false;
    }

}

export const passwordAlert = async () => {

    const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
            maxlength: "10",
            autocapitalize: "off",
            autocorrect: "off"
        },
        customClass: {
            popup: 'bg-white dark:bg-slate-800',
            htmlContainer: 'text-slate-800 dark:text-slate-400',
        }
    });
    if (password) {
        return password;
    }
}

export const currentTime = () => Math.round(+new Date().getTime() / 1e3)

export const emailEllipse = (email: string) => {
    if (!email) return '';
    const p = email.lastIndexOf('@');
    return email.slice(0, 3) + '***@' + (p > 8 ? email.slice(p + 1) : email.slice(-8));
}

export const copyToClipboard = (text: string) => {
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
};

export const slugify = (t: string) => t.toLowerCase().replace(/[ \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '')

export const sliceText = (text: string, len: number) => {
    if (!text) return ''
    return (text.length > len ? text.slice(0, len) + '...' : text)
}

export const textEllipsis = (text: string = "", start: number = 7, end: number = 5) => {
    if (text.length > (start + end)) {
        return `${text.slice(0, start)}...${end ? text.slice(-1 * end) : ''}`
    }

    return text;
}

export const strongPasswordValidator = (password: string) => {
    if (!password) {
        return { status: false, msg: 'Password is required' }
    }

    if (password.length < 8) {
        return { status: false, msg: '8 Characters length!' }
    }

    if (!password.match(/[A-Z]/)) {
        return { status: false, msg: 'A letter in upper case!' }
    }

    if (!password.match(/[0-9]/)) {
        return { status: false, msg: 'A numeral (0-9)!' }
    }

    if (!password.match(/[!@#$%^&*()]/)) {
        return { status: false, msg: 'A letter special character!' }
    }
    return { status: true, msg: 'Password is Strong!' }
}

export const emailValidator = (mail: string) => {
    if (!mail) {
        return { status: false, msg: 'Email is required!' }
    }

    if (
        !mail.match(
            /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
        )
    ) {
        return { status: false, msg: 'Invalid email type!' }
    } else {
        return { status: true, msg: '' };
    }
}

export const addressValidator = (addy: string) => {
    if (!addy) {
        return { status: false, msg: 'Address is required!' }
    }
    if (
        !addy.match(
            /^0x[a-fA-F0-9]{40}$/gi
        )
    ) {
        return { status: false, msg: 'Invalid address type!' }
    } else {
        return { status: true, msg: '' };
    }
}

export const passwordMatch = (password: string, conf_password: string) => {

    if (password !== conf_password) {
        return { status: false, msg: 'The Password and Confirm password fields do not match.' }
    }
    return { status: true, message: '' }
}

export const formatToScientific = (number: number, multiplier = 10, decimalPlaces = 2) => {
    return (number * multiplier).toExponential(decimalPlaces);
};

export const getTruncatedNumber = (number: number, decimalPlaces: number): number => {
    if (number === undefined) return 0;
    return Math.floor(number * 10 ** decimalPlaces) / (10 ** decimalPlaces);
}

export const getFormattedDate = (date: number) => {
    return new Date(date * 1000).toLocaleDateString()
}

export const getCaseSensitive = (v: string) => {
    return v.slice(0, 1).toUpperCase() + v.slice(1)
}

export const fetchRates = async (pair: string) => {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${pair}USDT`);
    const data = await response.json();
    return data.price;
}

export const getDaysDifference = (expireDays: string) => {
    const expireDate = new Date(expireDays);
    const currentDate = new Date();
    const timeDiff = expireDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}

export const formatTimeDiff = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // Pad the hours, minutes, and seconds with leading zeros if necessary
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');

    return `00:${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// export function hexToRgba(hex: string, alpha: number) {
//     const r = parseInt(hex.slice(1, 3), 16);
//     const g = parseInt(hex.slice(3, 5), 16);
//     const b = parseInt(hex.slice(5, 7), 16);

//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }