export function RoleChanger() {
  return (
    <span className="group relative inline-block h-[1.2em] overflow-hidden cursor-default whitespace-nowrap">

      {/* Span fantasma: solo existe para darle ancho al contenedor */}
      <span className="invisible">Developer</span>

      <span className="absolute inset-0 block transition-all duration-300 ease-out transform translate-y-0 opacity-100 group-hover:translate-y-[-100%] group-hover:opacity-0">
        Developer
      </span>

      <span className="absolute inset-0 block transition-all duration-300 ease-out transform translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        Designer
      </span>

    </span>
  )
}