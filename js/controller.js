const Controller = {
  init() {
    this.render();
  },

  render() {
    const scene = StoryModel.scenes[StoryModel.state.currentScene];
    const textEl = document.getElementById("scene-text");
    const optionsEl = document.getElementById("options-container");
    const invEl = document.getElementById("inventory-bar");

    textEl.textContent = "";
    optionsEl.innerHTML = "";
    invEl.innerHTML = "";

    // Si es el final malo, matamos la UX
    if (StoryModel.state.currentScene === "final_malo") {
      document.body.classList.add("ux-death");
      textEl.textContent =
        "SISTEMA CORROMPIDO. CEREBRO NO ENCONTRADO. ADIÓS, SANTIAGO.";
      setTimeout(() => location.reload(), 5000); // Reinicio automático tras 5 seg
      return;
    }

    StoryModel.state.inventory.forEach((item) => {
      const span = document.createElement("span");
      span.className = "tag is-danger is-light";
      span.textContent = item;
      invEl.appendChild(span);
    });

    this.typeWriter(scene.text, textEl, () => {
      scene.options.forEach((opt) => {
        if (opt.requires && !StoryModel.state.inventory.includes(opt.requires))
          return;
        const btn = document.createElement("button");
        btn.className = "button is-danger is-outlined is-family-monospace m-2";
        btn.textContent = `> ${opt.text}`;
        btn.onclick = () => {
          if (opt.action === "take") StoryModel.state.inventory.push(opt.item);
          StoryModel.state.currentScene = opt.next;
          this.render();
        };
        optionsEl.appendChild(btn);
      });
    });
  },

  typeWriter(text, el, cb) {
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i === text.length) {
        clearInterval(timer);
        if (cb) cb();
      }
    }, 25);
  },
};
window.onload = () => Controller.init();
