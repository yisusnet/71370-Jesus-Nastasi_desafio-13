import Swal from "sweetalert2";


const notificaSweet = (nombre, apellido, onConfirm) => {
  
  Swal.fire({
    title: `¿estas seguro que deseas eliminar este usuario: ${nombre} ${apellido} ?`,
    text: "Esto no se puede retroceder!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `SI! deseo borrar este usuario: ${nombre}  ${apellido} `,
    cancelButtonText: `NO! no deseo borrar este usuario: ${nombre}   ${apellido}`
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
      Swal.fire({
        title: "el usuario fue Eliminado!",
        text: `este usuario: ${nombre}  ${apellido} `,
        icon: "success"
      });
    }
  });
}

export default notificaSweet
  

