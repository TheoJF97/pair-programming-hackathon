import "./Header.scss";
export default function Header() {
  return (
    <>
      <div class="context">
        <h1>Pure Css Animated Background</h1>
      </div>

      <div class="area">
        <ul class="circles">
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
          <li>food</li>
        </ul>
      </div>



      
      <div class="card">
   <div class="header">
      <div class="icon">
      <a href="#"><i class="fa fa-heart-o"></i></a>
      </div>
   </div>
   <div class="text">
      <h1 class="food">
         Chinese Noodles
      </h1>
      <i class="fa fa-clock-o"> 15 Mins</i>
      <i class="fa fa-users"> Serves 2</i>
      
      <div class="stars">
         <li>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star-o"></i></a>
         </li>
      </div>
      <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus.</p>
   </div>
   <a href="#" class="btn">Let's Cook!</a>
</div>
    </>
  );
}
