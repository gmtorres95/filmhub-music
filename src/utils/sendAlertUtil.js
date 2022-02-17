import Swal from 'sweetalert2';

function sendRefreshAlert(title = 'Error!', text = 'Cannot reach server...', icon = 'error') {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Refresh page',
  }).then(() => window.location.reload())
}

export {
  sendRefreshAlert,
}
