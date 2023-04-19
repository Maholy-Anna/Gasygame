
	
	function init()
	{
		Quest = new Array() 
		for (var idx = 1; idx < 21; idx++)
			{ 
				Quest[idx] = Math.random() 
				Quest[idx] = Quest[idx] * 20
				Quest[idx] = Math.ceil(Quest[idx]) 
				for (var j = 1; j < idx; j++) 
				{ 
				 if (Quest[idx] == Quest[j]) 
					{ 
						Quest[idx] = Math.random() 
						Quest[idx] = Quest[idx] * 20
						Quest[idx] = Math.ceil(Quest[idx]) 
						j = -1 
					} 
				} 
			}
	}
	
	function initq(iRows,iCols) 
	{ 
		var i; 
		var j; 
		   var a = new Array(iRows); 
		   for (i=0; i < iRows; i++) 
		   { 
			   a[i] = new Array(iCols); 
			   for (j=0; j < iCols; j++) 
			   { 
				   a[i][j] = ""; 
			   } 
		   } 
		   return(a);
		   
						 
	}
	
	var questions = initq(61,8);
	questions[1][1] = "Dobokelin'Andriamanitra tsy azo hilomanosana?"
	questions[1][2] = "maso"
	questions[1][3] = "vava"
	questions[1][4] = "A"
	questions[1][5] = "maso"
	questions[2][1] = "Tsy omby ,tsy ondry nefa mahalala ny maintso?"
	questions[2][2] = "akoho"
	questions[2][3] = "fanala"
	questions[2][4] = "B"
	questions[2][5] = "fanala"
	questions[3][1] = "Faladia ambony ranjo?"
	questions[3][2] = "ravim-boatavo"
	questions[3][3] = "ravin-tsaonjo"
	questions[3][4] = "B"
	questions[3][5] = "ravin-tsaonjo"
	questions[4][1] = "Mihiratra tsy mahita azy,mikipy vao maita azy?"
	questions[4][2] = "nofy"
	questions[4][3] = "maizina"
	questions[4][4] = "A"
	questions[4][5] = "nofy"
	questions[5][1] = "Solabe minaonaona?"
	questions[5][2] = "aponga"
	questions[5][3] = "votavo"
	questions[5][4] = "A"
	questions[5][5] = "aponga"
	questions[6][1] = "Akana vao mitombo?"
	questions[6][2] = "afo"
	questions[6][3] = "lavaka"
	questions[6][4] = "A"
	questions[6][5] = "afo"
	questions[7][1] = "Aleveno aho haka ny taolako taloha?"
	questions[7][2] = "mangahazo"
	questions[7][3] = "katsaka"
	questions[7][4] = "B"
	questions[7][5] = "katsaka"
	questions[8][1] = "Ny reniny miteny oe andao itsangana ny zanany miteny oe andao itsivalana?"
	questions[8][2] = "tohatra"
	questions[8][3] = "fihogo"
	questions[8][6] = "A"
	questions[8][5] = "tohatra"
	questions[9][1] = "Izy efa-dahy milanja,kotokely mikapoka lanitra,ingahyNdriana mitiritirina ery ampiandrianana?"
	questions[9][2] = "alika"
	questions[9][3] = "omby"
	questions[9][4] = "B"
	questions[9][5] = "omby"
	questions[10][1] = "Raha mihohoka izy ambony ny lohany raha mitsilany ambany ny lohany?"
	questions[10][2] = "valala"
	questions[10][3] = "kadradraka"
	questions[10][4] = "A"
	questions[10][5] = "valala"
	questions[10][1] = "Bataina tsy zaka,afindra mora foana?"
	questions[11][2] = "aloka"
	questions[11][3] = "seza"
	questions[11][4] = "A"
	questions[11][5] = "aloka"
	questions[12][1] = "Any an-tsaha no mamela-pandrika ka ny any an-tanana no voa?"
	questions[12][2] = "fasana"
	questions[12][3] = "fotaka"
	questions[12][4] = "A"
	questions[12][5] = "fasana"
	questions[13][1] = "Kapaina tsy hita fery?"
	questions[13][2] = "fotaka"
	questions[13][3] = "aloka"
	questions[13][4] = "B"
	questions[13][5] = "aloka"
	questions[14][1] = "Anaty rano tsy lena,an-tanety tsy malazo?"
	questions[14][2] = "sase"
	questions[14][3] = "aloka"
	questions[14][4] = "B"
	questions[14][5] = "aloka"
	questions[15][1] = "Ilay boka mitaingitseza?"
	questions[15][2] = "mananasy"
	questions[15][3] = "katsaka"
	questions[15][4] = "A"
	questions[15][5] = "mananasy"
	questions[16][1] = "Elobe tsy mipika?"
	questions[16][2] = "trano"
	questions[16][3] = "lanitra"
	questions[16][4] = "B"
	questions[16][5] = "lanitra"
	questions[17][1] = "Alina izy tonga tsy nalaina,atoandro very tsy nangalarina?"
	questions[17][2] = "alika"
	questions[17][3] = "kintana"
	questions[17][4] = "B"
	questions[17][5] = "kintana"
	questions[18][1] = "Ilay mahia miankin-drindrina?"
	questions[18][2] = "kifafa"
	questions[18][3] = "sahafa"
	questions[18][4] = "A"
	questions[18][5] = "kifafa"
	questions[19][1] = "Hoano aho hihinanako anao?"
	questions[19][2] = "sakamalao"
	questions[19][3] = "sakay"
	questions[19][4] = "B"
	questions[19][5] = "sakay"
	questions[20][1] = "totohina tsy fotsy,avela fotsy ho azy?"
	questions[20][2] = "volo"
	questions[20][3] = "tsivakimpanoto"
	questions[20][4] = "A"
	questions[20][5] = "volo"

	function nextQuestion(form)

	{ 	var quizEnd = eval(20* 1);

    if(form.questNo.value == quizEnd) {

       form.question.value = "";

       form.choiceA.value = "";

       form.choiceB.value = "";


       form.yourChoice.value = "";

       form.results.value = "Fin du Quiz.  Votre résultat final est indiqué ci-dessous."; } else {

    if(form.questNo.value == "") {form.questNo.value = 1} else {
    
       form.questNo.value = eval(form.questNo.value) + 1;

    }

	var NumAleat = Quest[form.questNo.value];
	
    form.question.value = questions[NumAleat][1];

    form.choiceA.value = questions[NumAleat][2];

    form.choiceB.value = questions[NumAleat][3];

    form.yourChoice.value = "";

    form.results.value = "";

    if(form.myScore.value == "") {form.myScore.value = 0; } else {
                                                  form.myScore.value = form.myScore.value; }

   }

}

	function EvalSound(soundobj) {
	  var thissound= eval("document."+soundobj);
	  thissound.Play();
	}

   function testrep(form) {
      
      var myScore = 0;
      var curve = 0;
	  var pourc = 0
	var NumAleat = Quest[form.questNo.value];

      if(form.results.value != "") {form.results.value = "Tsy afaka manome valiny roa ianao fa ray iany. Raha mbola hanoy ianao dia tsindrio ny ''Question suivante''."; }

      else if(form.yourChoice.value == questions[NumAleat][4]) {
      form.myScore.value = eval(form.myScore.value) + eval(1);
      form.results.value = "Arabaina ianao fa marina ny valin-teninao.";
	  EvalSound('sound1'); } else {
      
      form.results.value = "Mialatsiny fa diso ny valin-teninao ny marina dia " + questions[NumAleat][5];
	  EvalSound('sound2');
	  }

		
	   curve = form.myScore.value / form.questNo.value;

	   form.percent.value = parseInt(curve * 100,10);
	   pourc = parseInt(curve * 100,10);
	   
	   if(pourc > 97)  {document.images['cote'].src = "sc1.gif";
			form.cmt.value = "Champion !"; }
	   else if(pourc > 89)  {document.images['cote'].src = "sc1.gif";
			form.cmt.value = "Tres bien !"; }
	   else if(pourc > 69)  {document.images['cote'].src = "sc2.gif";
			form.cmt.value = "Bien !"; }
	   else if(pourc > 49)  {document.images['cote'].src = "sc3.gif";
			form.cmt.value = "Peut mieux faire !"; }
	   else {document.images['cote'].src = "sc4.gif";
			form.cmt.value = "Bof !"; }
   }

	
	function repa(form) {
		if(form.results.value == "")
	{
		form.yourChoice.value = "A";
		form.tda.value = "Votre réponse";}
	}
		
	function repb(form) {
		if(form.results.value == "")
	{
		form.yourChoice.value = "B";
		form.tdb.value = "Votre réponse";}
	}


	function clearRep(form)

{
    
    form.tda.value = "";
    form.tdb.value = "";

}


function clearForm(form)

{
    
    form.questNo.value = "";
    form.question.value = "";
    form.choiceA.value = "";
    form.choiceB.value = "";
    form.yourChoice.value = "";
    form.results.value = "";
    form.myScore.value = "";
    form.percent.value = "";
    form.tda.value = "";
    form.tdb.value = "";
	form.cmt.value = "";
	document.images['cote'].src = "sc5.gif";
}

	
