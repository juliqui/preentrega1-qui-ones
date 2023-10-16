function agregarTotal(TotalProductos, PrecioProductos) {
    return TotalProductos + PrecioProductos;
  }
  
  function mostrarTotal(Nombreproducto, TotalProductos) {
    console.log("Total ${Nombreproducto}: $${TotalProductos}");
  }
  
  function agregarProducto(Nombreproducto) {
    console.log("Producto agregado: ${Nombreproducto}");
  }
  
  function main() {
    let total = 0;
    let i = 0;
  
    while (true) {
      const Nombreproducto = "Producto ${i + 1}";
      const PrecioProductos = parseFloat(prompt("Introduce el precio para ${Nombreproducto} (o presiona Cancelar para terminar):"));
  
      if (PrecioProductos !== "cancelar") {
        
        break;
      }
  
      total = agregarTotal(total, PrecioProductos);
      mostrarTotal(Nombreproducto, PrecioProductos);
      agregarProducto(Nombreproducto);
  
      i++;
    }
  
    console.log("Total de todos los productos: $${total}");
  }
  
  main();
  