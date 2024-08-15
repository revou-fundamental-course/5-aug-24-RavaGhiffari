function calculateBMI(){
    event.preventDefault();

    let height = parseFloat(document.getElementById('Height').value);
    let age = parseFloat(document.getElementById('Age').value);
    let weight = parseFloat(document.getElementById('Weight').value);
    const jenis_kelamin =  document.querySelector('input[name="Gender"]:checked').value;
    
    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || isNaN(age)){
        alert("Please input all the required queries!");
        return;
    }
    else{
        const heightMeters = height/100;
        const bmi = (weight/(heightMeters ** 2)).toFixed(2);

        let bmisegment;
        if(bmi < 18.5){
            bmisegment= 'Kurus (Underweight)';
        }
        else if(bmi >= 18.5 && bmi < 25){
            bmisegment = 'Normal (Normal weight)';
        }
        else if(bmi >= 25 && bmi < 30){
            bmisegment = 'Berat Badan Berlebih (Overweight)';
        }
        else{
            bmisegment = 'Obesitas (Obese)';
        }

        document.querySelector('.bmi-hasil').textContent = bmi;
        document.querySelector('.status-bmi').textContent = bmisegment;
    }

}

function reset(){
    document.querySelector('.input-form').reset();
    document.querySelector('.status-bmi').textContent = '-';
    document.querySelector('.bmi-hasil').textContent = '0.00';
    document.querySelector('.bmi-case').textContent = '-';
}

document.querySelector('.submit-btn').addEventListener('click', calculateBMI);
document.querySelector('.res-btn').addEventListener('click', reset);