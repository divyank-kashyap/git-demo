array = [5, 1, 22, 25, 6, -1, 8, 10]

sequence = [1, 6, -1, 10]


function isValidSequence(array, sequence){

    for (let i = 0; i<(array.length); i++){
        for (let j = 0; i<(sequence.length); i++){
            if (sequence[j] == array[i]){
                console.log("True");
            }
            else {
                console.log("False");
            }
        }
    }

}
