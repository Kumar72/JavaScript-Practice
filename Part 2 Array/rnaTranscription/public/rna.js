var toRna = function(dna) {
var rna = "";
	for(var i =0; i < dna.length; i++) {
		if(dna[i] === "G") {
			rna= rna+"C";
		}
		if(dna[i] === "C") {
			rna= rna+"G";
		}
		if(dna[i] === "A") {
			rna= rna+"U";
		}
		if(dna[i] === "T") {
			rna= rna+"A";
		}
		console.log(dna);
		console.log(rna);
	}

	return rna;
}
