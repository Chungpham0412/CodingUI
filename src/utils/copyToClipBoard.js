import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function copyToClipBoard(text = '') {
    navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
    toast.success('Copy to clipboard successfully');
}
