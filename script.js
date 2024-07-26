	
		let content = document.querySelector('.resume-1 .contact')
		let btnIcons = document.querySelector('.resume-1 .contact .icons span');
		console.log(btnIcons)
		
		btnIcons.addEventListener('click',()=>{
			content.classList.toggle('active')
		})