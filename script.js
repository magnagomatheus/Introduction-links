function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Dev sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  } else {
    html.classList.add("light")
    img.setAttribute("src", "assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Dev sorrindo, usando óculos e jaqueta preta, sem barba e com fundo roxo no lado esquierdo e azul no direito."
    )
  }

  //html.classList.toggle("light")
}
