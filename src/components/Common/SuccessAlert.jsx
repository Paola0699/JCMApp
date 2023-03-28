import Swal from 'sweetalert2';
export const SuccessAlert = (title, subtitle) => {
  Swal.fire({
    title: title,
    text: subtitle,
    icon: 'success',
    confirmButtonColor: '#00152A'
  });
};
