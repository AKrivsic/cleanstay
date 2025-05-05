document.addEventListener('DOMContentLoaded', () => {
  const spaceTypeSelect = document.getElementById('space-type');
  const dynamicInputs = document.getElementById('dynamic-inputs');
  const result = document.getElementById('result');

  const updatePrice = () => {
    const type = spaceTypeSelect.value;
    let price = 0;

    const frequencySelect = document.getElementById('frequency'); // Nové pole pro četnost úklidu
    const frequencyCoefficient = frequencySelect ? parseFloat(frequencySelect.value) : 1;

    if (type === 'byt') {
      const bytInput = document.getElementById('byt-size');
      if (bytInput) {
        price = 1000 * parseFloat(bytInput.value || 0) * frequencyCoefficient;
      }
    } else if (type === 'kancelar') {
      const officeSize = parseFloat(document.getElementById('office-size')?.value || 0);
      price = officeSize * 22 * frequencyCoefficient;
    } else if (type === 'airbnb') {
      const count = parseInt(document.getElementById('airbnb-count')?.value || 0);
      price = count * 500;
    }

    if (price > 0) {
      result.textContent = `Odhadovaná cena: ${Math.ceil(price / 50) * 50} Kč`; // Zaokrouhlení na nejbližší 50
      result.classList.remove('hidden');
    } else {
      result.textContent = '';
      result.classList.add('hidden');
    }
  };

  spaceTypeSelect.addEventListener('change', () => {
    const type = spaceTypeSelect.value;
    dynamicInputs.innerHTML = '';
    result.classList.add('hidden');

    if (type === 'byt') {
      dynamicInputs.innerHTML = `
        <label class="block mb-1 font-medium">Velikost bytu/domu</label>
        <select id="byt-size" class="w-full p-3 rounded border border-gray-300">
          <option value="" disabled selected>Vyberte velikost bytu/domu</option>
          <option value="1">1+kk</option>
          <option value="1.5">2+kk</option>
          <option value="2">3+kk</option>
          <option value="2.5">4+kk a větší</option>
        </select>

        <label class="block mb-1 font-medium">Četnost úklidu</label>
        <select id="frequency" class="w-full p-3 rounded border border-gray-300">
          <option value="" disabled selected>Vyberte četnost úklidu</option>
          <option value="1">Jednorázový úklid</option>
          <option value="0.8">Týdenní</option>
          <option value="0.9">Každých 14 dnů</option>
        </select>
      `;
    }

    if (type === 'kancelar') {
      dynamicInputs.innerHTML = `
        <label class="block mb-1 font-medium">Rozloha kanceláře (m²)</label>
        <input id="office-size" type="number" class="w-full p-3 rounded border border-gray-300" placeholder="Např. 80">

        <label class="block mb-1 font-medium">Četnost úklidu</label>
        <select id="frequency" class="w-full p-3 rounded border border-gray-300">
          <option value="" disabled selected>Vyberte četnost úklidu</option>
          <option value="1">Jednorázový úklid</option>
          <option value="0.8">Týdenní</option>
          <option value="0.9">Každých 14 dnů</option>
        </select>
      `;
    }

    if (type === 'airbnb') {
      dynamicInputs.innerHTML = `
        <label class="block mb-1 font-medium">Počet jednotek k úklidu</label>
        <input id="airbnb-count" type="number" class="w-full p-3 rounded border border-gray-300" placeholder="Např. 3">
      `;
    }

    // Přidej posluchače pro nové inputy
    setTimeout(() => {
      const inputs = dynamicInputs.querySelectorAll('select, input');
      inputs.forEach(input => input.addEventListener('input', updatePrice));
    }, 0);
  });
});
