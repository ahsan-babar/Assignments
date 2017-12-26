
function makeEmail() { 
    var strValues="abcdefg12345"; 
    var strEmail = ""; 
    var strTmp; 
    for (var i=0;i<10;i++) { 
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
        strEmail = strEmail + strTmp; 
    } 
    strTmp = ""; 
    strEmail = strEmail + "@"; 
    for (var j=0;j<8;j++) { 
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
        strEmail = strEmail + strTmp; 
    } 
    strEmail = strEmail + ".com" 
    return strEmail; 
}  

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}


var randomName= function(){
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin"];
var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];	

return (randomEl(adjectives)+' '+randomEl(nouns));	
	
}



module.exports = function () {
	
	
/*..........VISIT HOMEPAGE............*/	
	this.Given(/^I visit phptravels website$/, function () {

		driver.get('http://www.phptravels.net');
		driver.wait(until.elementsLocated(by.css('#Carousel > div > div.item.home-slider.hero.hidden-xs.hidden-sm.active')), 10000);
    });
/*..........VISIT HOMEPAGE...........*/	
	

	
/*..........VISIT LOGIN PAGE..........*/	
	this.Given(/^I visit login page$/,  function () {

        return helpers.loadPage(shared.testData.loginurl);
    });
/*..........VISIT LOGIN PAGE.........*/	



/*..........PROVIDE LOGIN DETAILS AND LOGIN.......*/			
	this.When(/^I provide login credentials$/, function() {
		
		driver.wait(until.elementsLocated(by.xpath('//*[@id="loginfrm"]')), 10000);
		driver.findElement(by.name('username')).sendKeys(shared.testData.username);
		driver.findElement(by.name('password')).sendKeys(shared.testData.password);
		driver.findElement(by.xpath('//*[@id="loginfrm"]/div[1]/div[5]/button')).click();
		driver.wait(until.elementsLocated(by.xpath('//*[@id="body-section"]/div/div[1]/div')), 10000);
		
	});
/*...........PROVIDE LOGIN DETAILS AND LOGIN........*/	
	
	
	
/*..................CONTACT.......................*/
	this.Given(/^I click CONTACT button$/, function() {
		
		driver.wait(until.elementsLocated(by.xpath('//*[@id="body-section"]/div/div[3]/div/div[3]')), 10000);
		var selector= driver.findElement(by.css('body > nav.navbar.navbar-default.navbar-orange.hidden-xs > div > div > div > ul > li:nth-child(6) > a'));
		return selector.click();	   
	});
	
	this.Given(/^I input details and message and submit the message$/, function() {
		
		driver.wait(until.elementsLocated(by.xpath('//*[@id="body-section"]/div[1]/div/div/div/form/div[2]')), 10000);
		driver.findElement(by.name('contact_name')).sendKeys(randomName());
		driver.findElement(by.name('contact_email')).sendKeys(makeEmail());
		driver.findElement(by.name('contact_subject')).sendKeys(shared.testData.subject);
		driver.findElement(by.name('contact_message')).sendKeys(shared.testData.message);
		console.log(helpers.getAttributeValue('#message-contact', 'id'));
		return 	driver.findElement(by.xpath('//*[@id="body-section"]/div[1]/div/div/div/form/div[2]/input')).click();

	});	
	 
	this.Then(/^I should see a successful response$/, function () {
		var c= helpers.getFirstElementContainingText('#body-section > div:nth-child(2) > div > div > div > form > div.bg-white > div.alert.alert-success', '                            Message Sent Successfully                        ');
		return c;
	});	
	/*.................CONTACT.......................*/
	

	
	/*....................EDIT PROFILE..........................*/			
	this.Given(/^I click My Profile button$/, function() {
		
		driver.wait(until.elementsLocated(by.css('#body-section > div > div.container.mt25.offset-0 > div > div.col-md-1.offset-0 > ul > li.active > a')), 10000);
		var selector= driver.findElement(by.css('#body-section > div > div.container.mt25.offset-0 > div > div.col-md-1.offset-0 > ul > li:nth-child(2)'));
		return selector.click();
	});

	
	this.Given(/^I edit my profile information$/, function() {
		
		var firstname =  driver.findElement(By.name("firstname")) ;
		var lastname =  driver.findElement(By.name("lastname")) ;
		var address1 =  driver.findElement(By.name("address1")) ;
		var address2 =  driver.findElement(By.name("address2")) ;
		var city =  driver.findElement(By.name("city")) ;
		var zip =  driver.findElement(By.name("zip")) ;
		var state =  driver.findElement(By.name("state")) ;
		var country =  driver.findElement(By.name("country")) ;

		driver.executeScript("var ele=arguments[0]; ele.value='"+randomName()+"';", firstname);
		driver.executeScript("var ele=arguments[0]; ele.value='"+randomName()+"';", lastname);
		driver.executeScript("var ele=arguments[0]; ele.value='"+randomName()+"';", address1);
		driver.executeScript("var ele=arguments[0]; ele.value='"+randomName()+"';", address2);
		driver.executeScript("var ele=arguments[0]; ele.value='"+shared.testData.city+"';", city); 
		driver.executeScript("var ele=arguments[0]; ele.value='"+shared.testData.zip+"';", zip);
		driver.executeScript("var ele=arguments[0]; ele.value='"+shared.testData.region+"';", state);

		country.click();
		driver.findElement(By.css('#profilefrm > div > div:nth-child(3) > div.panel-body > div:nth-child(6) > div.col-md-6.go-right > select > option:nth-child(144)')).click()
		return	driver.findElement(By.className("updateprofile")).click();		
	});
	
	this.Then(/^I should see a message about successful updation$/, function () {
        
		var a=		driver.findElement(By.css('#profile > div.col-md-12 > div.accountresult')).getAttribute('style');
		return (a=="display: block;");
       });
/*....................EDIT PROFILE..........................*/	


	
/*.....................REDIRECTED TO MY ACCOUNT/PROFILE................*/	
	this.Then(/^I should be redirected to my profile$/, function () {
    
		return driver.findElement(by.xpath('//*[@id="body-section"]/div/div[1]/div'));
	});
/*.....................REDIRECTED TO MY ACCOUNT/PROFILE................*/			

			
			
/*...............FIND "Hi"..................................*/	
	this.Then(/^I should see Hi$/m, function(){
	
		driver.wait(until.elementsLocated(by.css('#body-section > div > div.row > div')), 10000);
		var c= helpers.getFirstElementContainingText('h3.RTL', 'Hi');
		return c;
	});
/*...............FIND "Hi"..................................*/	
 	

/*...............LOGOUT....................................*/ 
	this.Given(/^I click dropdown$/, function() {
		
		driver.wait(until.elementsLocated(by.css('#bookings')), 10000);
		var dropdown =  driver.findElement(By.xpath('/html/body/div[3]/div/div/div[2]/ul/ul/li[1]'));
		return dropdown.click();
	});
	this.Given(/^I click the Logout button$/, function() {
		var logoutbtn= driver.findElement(by.css('body > div.navbar.navbar-static-top.navbar-default > div > div > div.navbar-collapse.collapse > ul > ul > li.open > ul > li:nth-child(2) > a'));
		logoutbtn.click();
		driver.wait(until.elementsLocated(by.css('#loginfrm')), 10000);
	});
	this.Then(/^I should be redirected to login page$/, function () {
		driver.wait(until.elementsLocated(by.css('#loginfrm')), 10000);
		return (driver.findElement(by.css('head>title')).getText()=="Login");
	}); 
/*...............LOGOUT....................................*/ 
};
