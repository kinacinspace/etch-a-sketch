let tileCount = 16;

sketch = document.querySelector(".sketch");
colorPicker = document.querySelector(".color-picker");
rainbowToggle = document.querySelector(".rainbow-toggle input")
shadeToggle = document.querySelector(".shade-toggle input")
resetButton = document.querySelector(".reset")

function resetSketch() {
	sketch.innerHTML = '';
	for (i = 0; i < tileCount ** 2; i++){
		div = document.createElement("div")
		div.style.boxSizing = "border-box";
		div.style.border = "solid";
		div.style.borderWidth = "1px";
		div.style.backgroundColor = "#FFFFFF"
		div.style.width = `${100/tileCount}%`
		div.style.height = `${100/tileCount}%`
		
		div.addEventListener("mouseover", (e) => {
				e.target.style.backgroundColor = getColor(e.target.style.backgroundColor);
			}
		);

		sketch.appendChild(div);
	};
};

function getColor(currentColor) {
	let color = colorPicker.value
	if (rainbowToggle.checked) {
		color = pickRandom(["#ff6961", "#ffb480", "#f8f38d", "#42d6a4",
						   "#08cad1", "#59adf6", "#9d94ff", "#c780e8"]);
	};
	if (shadeToggle.checked) {
		color = shadeColor(currentColor)
	};

	return color;
}


function pickRandom(array) {
	return array[Math.floor(Math.random() * array.length)];
}


function shadeColor(color) {
	colorArray = color.replace(/[^\d,]/g, '').split(',')
	colorMapped = colorArray.map(x => {
		return Math.max(x-20, 0);
	})
	return rgbToHex(colorMapped[0], colorMapped[1], colorMapped[2]);
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

slider = document.querySelector(".size-range")
slider.addEventListener("input", function(e) {
		tileCount = e.target.value
    document.querySelector(".size-range-read").innerText = tileCount + "x" + tileCount
});

resetButton.addEventListener("click", resetSketch)


resetSketch();
