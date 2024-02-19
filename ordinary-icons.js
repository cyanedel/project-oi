const oiDictionary = {
  solid: {
    circle: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="256" /></svg>`
  },
  regular: {
    circle: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512ZM256 448C362.039 448 448 362.039 448 256C448 149.961 362.039 64 256 64C149.961 64 64 149.961 64 256C64 362.039 149.961 448 256 448Z" /></svg>`
  },
  light: {
    circle: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512ZM256 464C370.875 464 464 370.875 464 256C464 141.125 370.875 48 256 48C141.125 48 48 141.125 48 256C48 370.875 141.125 464 256 464Z" /></svg>`
  },
  thin: {
    circle: `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512ZM256 480C379.712 480 480 379.712 480 256C480 132.288 379.712 32 256 32C132.288 32 32 132.288 32 256C32 379.712 132.288 480 256 480Z" /></svg>`
  }
}

const createSVGElement = (htmlElement, stringSVG) => {
  const frag = new DOMParser().parseFromString(stringSVG, 'text/html')
  const svgElement = frag.querySelector('svg')
  const attr = {
    height: htmlElement.getAttribute("height"),
    size: htmlElement.getAttribute("size"),
    width: htmlElement.getAttribute("width"),
  }

  if( attr.width ){
    svgElement.setAttribute("width", attr.width)
    if( !attr.height ){
      svgElement.setAttribute("height", attr.width)
    }
  }

  if( attr.height ){
    svgElement.setAttribute("height", attr.height)
    if( !attr.width ){
      svgElement.setAttribute("width", attr.height)
    }
  }

  if( attr.size ){
    svgElement.setAttribute("height", attr.size)
    svgElement.setAttribute("width", attr.size)
  }

  if(htmlElement.classList.length){svgElement.classList = htmlElement.classList}
  if(htmlElement.style.length){svgElement.style = htmlElement.style}

  return svgElement
}

const oi = {
  replace: () => {
    const oiSolid = document.querySelectorAll(`[data-oi-solid]`)
    const oiRegular = document.querySelectorAll(`[data-oi-regular]`)
    const oiLight = document.querySelectorAll(`[data-oi-light]`)
    const oiThin = document.querySelectorAll(`[data-oi-thin]`)

    if(oiSolid.length > 0){
      oiSolid.forEach(item => {
        if(oiDictionary.solid[item.dataset.oiSolid]){
          item.replaceWith(createSVGElement(item, oiDictionary.solid[item.dataset.oiSolid]))
        }
      })
    }
    
    if(oiRegular.length > 0){
      oiRegular.forEach(item => {
        if(oiDictionary.regular[item.dataset.oiRegular]){
          item.replaceWith(createSVGElement(item, oiDictionary.regular[item.dataset.oiRegular]))
        }
      })
    }
    
    if(oiLight.length > 0){
      oiLight.forEach(item => {
        if(oiDictionary.light[item.dataset.oiLight]){
          item.replaceWith(createSVGElement(item, oiDictionary.light[item.dataset.oiLight]))
        }
      })
    }
    
    if(oiThin.length > 0){
      oiThin.forEach(item => {
        if(oiDictionary.thin[item.dataset.oiThin]){
          item.replaceWith(createSVGElement(item, oiDictionary.thin[item.dataset.oiThin]))
        }
      })
    }
  }
}