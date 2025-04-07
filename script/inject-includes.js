async function loadIncludes() {
  const inject = async (selector, url) => {
    const el = document.querySelector(selector);
    if (el) {
      const content = await fetch(url).then((res) => res.text());
      el.innerHTML = content;
    }
  };

  await inject("#dsb-header", "/includes/header.html");
  await inject("#dsb-nav", "/includes/nav.html");
}

document.addEventListener("DOMContentLoaded", loadIncludes);
