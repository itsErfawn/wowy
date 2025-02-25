import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const pushAlert = ({ title, text, icon, confirmButtonText, cancelButtonText, submitClass, cancelClass, close }) => {
    if (close) {
        return MySwal.close();
    }
    return MySwal.fire({
        title,
        text,
        icon,
        showCancelButton: !!cancelButtonText,
        confirmButtonText: confirmButtonText || 'تایید',
        cancelButtonText,
        customClass: {
            confirmButton: submitClass || 'btn btn-primary',
            cancelButton: cancelClass || 'btn btn-danger'
        },
        buttonsStyling: false
    }).then((result) => {
        if (result.isConfirmed) {
            return true;
        } else if (result.isDismissed) {
            return false;
        }
    });
};

export default pushAlert;
