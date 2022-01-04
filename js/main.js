const menu= document.getElementById('food-menu-pizza');

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function solicitarReserva(){
      alert("Enviado");
  }

  function changeMenuPizza(){
    menu.innerHTML=
    `
    
    <article class="padding15px">
    <h2>Muzzarella <span class="text-right">$400</span> </h2>
    <p>Muzzarella, Salsa de tomate, Oregano, Aceitunas </p>
</article>
<article>
    <h2>Especial <span class="text-right">$450</span></h2>
    <p>Muzzarella, Jamon, Salsa de tomate, Oregano, Aceitunas</p>
</article>
<article>
    <h2>Veggie <span class="text-right">$480</span></h2>
    <p>Muzzarella de Mani, Salsa de tomate, rucula, Aceitunas</p>
</article>
<article>
    <h2>4 Quesos <span class="text-right">$500</span></h2>
    <p>Muzzarella, Queso azul, Parmesano, Queso rete, Oregano, Aceitunas</p>
</article>
<article>
    <h2>Muzzarella5 <span class="text-right">$400</span></h2>
    <p>Muzzarella, Salsa de tomate, Oregano, Aceitunas</p>
</article>
<article>
    <h2>Muzzarella6 <span class="text-right">$400</span></h2>
    <p>Muzzarella, Salsa de tomate, Oregano, Aceitunas</p>
</article>
    `
  }

function changeMenuEmpanadas (){
menu.innerHTML = 
`

<article class="padding15px">
<h2>Empanada-Muzzarella <span class="text-right">$100</span> </h2>
<p>Lorem ipsum dolor sit amet consectetur</p>
</article>
<article>
<h2>Empanada-Especial <span class="text-right">$100</span></h2>
<p>Muzzarella, Lorem ipsum dolor sit amet consectetur</p>
</article>
<article>
<h2>Empanada-Veggie <span class="text-right">$110</span></h2>
<p>Lorem ipsum dolor sit amet consectetur</p>
</article>
<article>
<h2>Empanada-4 Quesos <span class="text-right">$120</span></h2>
<p>Muzzarella, Queso Lorem ipsum dolor sit amet consectetur</p>
</article>
<article>
<h2>Empanada-Muzzarella5 <span class="text-right">$130</span></h2>
<p>Lorem ipsum dolor sit amet consectetur</p>
</article>
<article>
<h2>Empanada-Muzzarella6 <span class="text-right">$100</span></h2>
<p>Lorem ipsum dolor sit amet consectetur</p>
</article>
`
}

function changeMenuBebidas(){
  menu.innerHTML=`
  <article class="padding15px">
  <h2>Agua mineral<span class="text-right">$150</span> </h2>
</article>
<article>
  <h2> Gaseosa<span class="text-right">$150</span></h2>
</article>
<article>
  <h2> Cerveza<span class="text-right">$200</span></h2>
</article>
<article>
  <h2> Cerveza importada<span class="text-right">$300</span></h2>
</article>
<article>
  <h2>Gaseosa Premium<span class="text-right">$400</span></h2>
</article>
<article>
  <h2>Bebida bebible<span class="text-right">$200</span></h2>
</article>
  `
}