export const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return fechaFormateada.toLocaleDateString('es-ES', options);
}