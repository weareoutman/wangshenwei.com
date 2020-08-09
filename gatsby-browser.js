import "./src/styles/global.css"

export const onInitialClientRender = () => {
  window.addEventListener("slide.start", slideInitialize)

  const search = window.location.search || ""

  const headless = search.includes("headless=1")
  if (headless) {
    document.body.classList.add("headless")
  }

  if (search.includes("slide=1")) {
    slidePreInitialize()
  }

  function slidePreInitialize() {
    document.addEventListener("dblclick", slideInitialize)
    document.addEventListener("keydown", slideInitialize)
  }

  function slideInitialize(initialEvent) {
    if (!(
      initialEvent.type === "slide.start" ||
      initialEvent.type === "dblclick" || (
        initialEvent.type === "keydown" &&
        initialEvent.key === "ArrowRight"
      )
    )) {
      return
    }

    const article = document.querySelector("main article")
    let pageHeader, pageTitle
    try {
      pageHeader = article.querySelector("header")
      pageTitle = pageHeader.querySelector("h1")
      if (!pageTitle) {
        // Possibly not a blog post.
        return
      }
      pageHeader.remove()
    } catch (e) {
      return
    }

    document.removeEventListener("dblclick", slideInitialize)
    document.removeEventListener("keydown", slideInitialize)

    const section = article.querySelector("section")

    let pages = [
      [pageTitle.cloneNode(true)],
    ]
    let nextPage
    let inPage = false
    let inIgnore = false
    const originalNodes = []

    for (const node of Array.from(section.childNodes)) {
      originalNodes.push(node)
      let titleNode
      if (isDivWithClass(node, "slide-page-start")) {
        if (inPage) {
          pages.push(nextPage)
        } else {
          inPage = true
        }
        nextPage = []
        if (node.childNodes.length > 0) {
          nextPage.push(...node.childNodes)
        }
      } else if (isDivWithClass(node, "slide-page-end")) {
        if (inPage) {
          if (node.childNodes.length > 0) {
            nextPage.push(...node.childNodes)
          }
          inPage = false
          pages.push(nextPage)
        }
      } else if (isDivWithClass(node, "slide-title")) {
        titleNode = document.createElement("h2")
        titleNode.className = "slide-title-page"
        titleNode.textContent = node.title
        if (inPage) {
          inPage = false
          pages.push(nextPage)
        }
        pages.push([titleNode])
      } else if (inPage) {
        if (isDivWithClass(node, "slide-ignore-start")) {
          inIgnore = true
        } else if (isDivWithClass(node, "slide-ignore-end")) {
          inIgnore = false
        } else if (!inIgnore) {
          nextPage.push(node)
        }
      }
    }
    if (inPage) {
      pages.push(nextPage)
    }

    pages = pages.filter(page => page.length > 0)
    let cursor = -1

    function hashchange() {
      const anchor = window.location.hash === "#" ? "" : window.location.hash
      if (!anchor) {
        restore()
        return
      }
      let next = -1
      if (/^#!\d+$/.test(anchor)) {
        next = Number(anchor.substr(2))
      } else {
        next = pages.findIndex(nodes =>
          nodes.some(node => node.id === anchor.substr(1) || node.querySelector(anchor))
        )
      }
      if (next > -1 && next < pages.length) {
        renderPage(next)
      }
    }

    function slideByKeydown(event) {
      if (event.key === "Escape") {
        window.location.hash = ""
      }
      if (!["ArrowLeft", "ArrowRight", " "].includes(event.key)) {
        return
      }
      movePage(event.key === "ArrowLeft" || (event.key === " " && event.shiftKey) ? -1 : 1)
    }

    let restoreUnlocked = false

    function movePage(offset) {
      const next = cursor + offset
      if (next > -1 && next < pages.length) {
        window.location.hash = `#!${next}`
        return
      }
      const bounceClassName = next < 0 ? "slide-bounce-left" : "slide-bounce-right"
      if (restoreUnlocked) {
        article.classList.remove(bounceClassName)
        window.location.hash = ""
        return
      }
      restoreUnlocked = true
      article.classList.add(bounceClassName)
      setTimeout(() => {
        article.classList.remove(bounceClassName)
      }, 800)
    }

    function renderPage(pageNumber) {
      restoreUnlocked = false
      if (cursor === pageNumber) {
        return
      }
      cursor = pageNumber
      for (const node of Array.from(section.childNodes)) {
        node.remove()
      }
      for (const node of pages[cursor]) {
        section.appendChild(node)
      }
      resize()
    }

    function slideByMouse(event) {
      if (event.target.tagName === "A" || window.getSelection().toString()) {
        return
      }
      event.preventDefault()
      if (event.clientX < window.innerWidth / 3) {
        movePage(-1)
      } else if (event.clientX > window.innerWidth * 2 / 3) {
        movePage(1)
      }
    }

    function resize() {
      section.style.transform = "none"
      const contentWidth = section.offsetWidth
      const contentHeight = section.offsetHeight
      // Small screen get small padding.
      const padding = Math.min(window.innerWidth, window.innerHeight) * 0.1
      // Landscape screen get larger scale.
      const maxScale = window.innerWidth > window.innerHeight ? 2 : 1.5
      const canvasWidth = window.innerWidth - padding
      const canvasHeight = window.innerHeight - padding
      if (contentWidth / contentHeight > canvasWidth / canvasHeight) {
        section.style.transform = `scale(${Math.min(maxScale, canvasWidth / contentWidth)})`
      } else {
        section.style.transform = `scale(${Math.min(maxScale, canvasHeight / contentHeight)})`
      }
    }

    function restoreByMouse(event) {
      event.preventDefault()
      if (cursor === 0 && event.clientX < window.innerWidth / 3) {
        article.classList.remove("slide-bounce-left")
        window.location.hash = ""
      }
    }

    function restore() {
      document.removeEventListener("keydown", slideByKeydown)
      document.removeEventListener("click", slideByMouse)
      document.removeEventListener("dblclick", restoreByMouse)
      window.removeEventListener("resize", resize)
      window.removeEventListener("hashchange", hashchange)

      if (!headless) {
        document.body.classList.remove("headless")
      }
      article.classList.remove("slide-canvas")
      article.insertBefore(pageHeader, section)
      section.style.transform = "none"

      for (const node of Array.from(section.childNodes)) {
        node.remove()
      }
      for (const node of originalNodes) {
        section.appendChild(node)
      }
      slidePreInitialize()
    }

    document.addEventListener("keydown", slideByKeydown)
    document.addEventListener("click", slideByMouse)
    document.addEventListener("dblclick", restoreByMouse)
    window.addEventListener("resize", resize)
    window.addEventListener("hashchange", hashchange)

    if (!headless) {
      document.body.classList.add("headless")
    }
    article.classList.add("slide-canvas")

    window.location.hash = "#!0"
    renderPage(0)
  }

  function isDivWithClass(node, className) {
    return node.tagName === "DIV" && node.classList.contains(className)
  }
}
