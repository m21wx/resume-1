		let content = document.querySelector('.resume-1 .contact')
		let btnIcons = document.querySelector('.resume-1 .contact .icons span');
		btnIcons.innerHTML='<i class="fa-solid fa-chevron-left"></i>';
		
		btnIcons.addEventListener('click',()=>{
			content.classList.toggle('active')
			if(content.classList.contains('active')){
				btnIcons.innerHTML=`<i class="fa-solid fa-chevron-right"></i>`;
			}else{
				btnIcons.innerHTML=`<i class="fa-solid fa-chevron-left"></i>`;
			}
		})
