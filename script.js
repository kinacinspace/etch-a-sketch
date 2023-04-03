let tileCount = 16;

sketch = document.querySelector(".sketch");

function resetSketch() {
	for (i = 0; i < tileCount ** 2; i++){
		div = document.createElement("div")
		div.style.boxSizing = "border-box";
		div.style.border = "solid";
		div.style.borderWidth = "1px";
		div.style.backgroundColor = "white"
		div.style.width = `${100/tileCount}%`
		div.style.height = `${100/tileCount}%`
		
		div.addEventListener("mouseover", (e) => {
				e.target.style.backgroundColor = "black"
			}
		);

		sketch.appendChild(div)
	};
};

resetSketch();
