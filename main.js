function strcmp(s1,s2){
	let i = 0;
	while (s1[i] && s2[i]){
		if (s1[i] != s2[i])
			return 1;
		i++;
	}
	return 0;
}

function filter(){
	let value, name, hobby, i = 0;

	value = document.getElementById("value").value.toUpperCase();
	hobby = document.getElementsByClassName("hobby");

	while(i < hobby.length){
		name = hobby[i].getElementsByClassName("name")[0];
		//if (name.innerHTML.toUpperCase().indexOf(value) > -1) WORKS LIKE GREP
		if (!strcmp(name.innerHTML.toUpperCase(), value) == 1)
			hobby[i].style.display = "flex";
		else
			hobby[i].style.display = "none";
		i++;
	}
}

$(".btn").on("click", function(){
	$(".input").toggleClass("inclicked");
	$(".btn").toggleClass("close")
});