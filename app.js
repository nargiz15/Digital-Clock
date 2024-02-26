const clock = document.querySelector(".clock")



const tiktak =()=>{
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // console.log(hour, minute, second);

   const html =`
    <span>${hour}</span>
    <p>:</p>
    <span>${minute}</span>
    <p>:</p>
    <span>${second}</span>
    
   `
  clock.innerHTML=html

}

setInterval(tiktak, 1000);
