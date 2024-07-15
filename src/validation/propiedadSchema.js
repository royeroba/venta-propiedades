export const validationSchema = {
  titulo(value) {
    if (value?.length >= 6) return true
    return 'Title to the property is mandatory or too short'
  },
  precio(value) {
    /*
        ^ - Representa el inicio de la cadena.
        [0-9]+ - Representa cualquier número del 0 al 9. El + indica que debe haber al menos un dígito, pero puede haber más.
        $ - Representa el final de la cadena.
    */
    if (/^[0-9]+$/.test(value)) return true
    return 'Price should only be numbers'
  },
  habitaciones(value) {
    if (value) return true
    return 'Select a Quantity'
  },
  wc(value) {
    if (value) return true
    return 'Select a Quantity'
  },
  estacionamiento(value) {
    if (value) return true
    return 'Select a Quantity'
  },
  descripcion(value) {
    if (value) return true
    return 'Add a Description'
  }
}

export const imageSchema = {
  imagen(value) {
    if (value) return true
    return 'Image is required'
  },
}