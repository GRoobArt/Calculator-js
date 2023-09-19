export default class Modals {
  constructor({ title, status, text }) {
    Swal.fire({
      title: title,
      icons: 'success',
      text: text,
      width: 300,
      focusConfirm: false,
      customClass: {
        confirmButton: 'action-button primary close-modal',
      },
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.close()

        location.reload()
      }
    })
  }
}
