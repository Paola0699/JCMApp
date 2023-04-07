import Swal from 'sweetalert2';
export const ErrorAlert = (title, subtitle) => {
  Swal.fire({
    title: title,
    text: subtitle,
    icon: 'error',
    confirmButtonColor: '#00152A'
  });
};
