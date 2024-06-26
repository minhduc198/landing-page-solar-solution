class BtnReadMore {
  constructor() {
    const whoWeAre = document.querySelector(".who-we-are");
    this.descWhoWeAre = whoWeAre.querySelector(".desc-who-we-are");
    this.btnReadMore = whoWeAre.querySelector(".btn-read-more");
  }

  btnShowMoreLess() {
    this.btnReadMore.addEventListener("click", () => {
      this.descWhoWeAre.classList.toggle("desc-who-we-are-hidden");
      if (this.descWhoWeAre.classList.contains("desc-who-we-are-hidden")) {
        this.btnReadMore.textContent = "Show Less";
      } else {
        this.btnReadMore.textContent = "Read More";
      }
    });
  }
}

const btnShowMoreLess = new BtnReadMore();
export default btnShowMoreLess;
