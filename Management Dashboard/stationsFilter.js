const regions = {
  north: {
    districts: ['District 1', 'District 2'],
    states: ['State A', 'State B'],
    stations: ['Station X', 'Station Y']
  },
  south: {
    districts: ['District 3', 'District 4'],
    states: ['State C', 'State D'],
    stations: ['Station Z', 'Station W']
  },
  east: {
    districts: ['District 5', 'District 6'],
    states: ['State E', 'State F'],
    stations: ['Station M', 'Station N']
  },
  west: {
    districts: ['District 7', 'District 8'],
    states: ['State G', 'State H'],
    stations: ['Station L', 'Station O']
  }
};

const regionSelect = document.getElementById('region');
const districtSelect = document.getElementById('district');
const stateSelect = document.getElementById('state');
const stationSelect = document.getElementById('station');

regionSelect.addEventListener('change', updateDistricts);
districtSelect.addEventListener('change', updateStates);
stateSelect.addEventListener('change', updateStations);

// Initialize the dropdowns based on the default region (if any)
function updateDistricts() {
  const region = regionSelect.value;
  const districts = regions[region]?.districts || [];
  updateOptions(districtSelect, districts);
  updateStates(); // update states based on the first district
}

function updateStates() {
  const region = regionSelect.value;
  const district = districtSelect.value;
  const states = regions[region]?.states || [];
  updateOptions(stateSelect, states);
  updateStations(); // update stations based on the first state
}

function updateStations() {
  const region = regionSelect.value;
  const state = stateSelect.value;
  const stations = regions[region]?.stations || [];
  updateOptions(stationSelect, stations);
}

function updateOptions(selectElement, options) {
  selectElement.innerHTML = ''; // Clear current options
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
}

// Initialize with default region
updateDistricts();
