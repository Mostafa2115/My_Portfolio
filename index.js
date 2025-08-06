const text = "< Backend Developer >";
    const target = document.getElementById("type-target");
    let index = 0;
    function type() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); 
      } else {
        setTimeout(() => { index = 0; target.textContent = ""; type(); }, 500);
      }
    }
    type();