<template>
  <div>
       <div class="sidebar">
    <div class="logo-ditails">
      <i class="fa fa-google-plus" aria-hidden="true"></i>
      <span class="logo-name">CodingLab</span>
    </div>
    <!-- =====Nav Links Start===== -->
    <ul class="nav-links">
      <!-- 1) birichi li  -->
      <li>
        <a href="#">
          <i class="fa fa-th-large" aria-hidden="true"></i>
          <span class="link_name">Dashboard</span>
        </a>
        <ul class="sub-menu blank">
          <li>
            <a class="link_name" href="#">Category</a>
          </li>
        </ul>
      </li>
      <!-- 2) ikkinchi li -->
      <li>
        <div class="icons-link">
          <a href="#">
            <i class='bx bx-collection'></i>
            <span class="link_name">Category</span>
          </a>
          <i class='bx bxs-chevron-down'></i>
        </div>
        <ul class="sub-menu">
          <li>
            <a class="link_name" href="#">Category</a>
          </li>
          <li>
            <a href="#">HTML & CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
          <li>
            <a href="#">PHP & MySQL</a>
          </li>
        </ul>

      </li>
      <!-- 3) uchunchi li -->
      <li>
        <div class="icons-link">
          <a href="#">
            <i class='bx bx-book-alt'></i>
            <span class="link_name">Posts</span>
          </a>
          <i class='bx bxs-chevron-down'></i>
        </div>
        <ul class="sub-menu">
          <li>
            <a class="link_name" href="#">Posts</a>
          </li>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Login Form</a>
          </li>
          <li>
            <a href="#">Card Design</a>
          </li>
        </ul>
      </li>
      <!-- 4) uchunchi li -->
      <li>
        <a href="#">
          <i class='bx bx-pie-chart-alt-2'></i>
          <span class="link_name">Analytics</span>
        </a>
        <ul class="sub-menu blank">
          <li>
            <a class="link_name" href="#">Analytics</a>
          </li>
        </ul>
      </li>
      <!-- 5) uchunchi li -->
      <li>
        <a href="#">
          <i class='bx bx-line-chart'></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li>
            <a class="link_name" href="#">Chart</a>
          </li>
        </ul>
      </li>
      <!-- 6) uchunchi li -->
      <li>
        <div class="icons-link">
          <a href="#">
            <i class='bx bx-plug'></i>
            <span class="link_name">Plugins</span>
          </a>
          <i class='bx bxs-chevron-down'></i>
        </div>
        <ul class="sub-menu">
          <li>
            <a class="link_name" href="#">Plugins</a>
          </li>
          <li>
            <a href="#">UI Face</a>
          </li>
          <li>
            <a href="#">Pigments</a>
          </li>
          <li>
            <a href="#">Box Icons</a>
          </li>
        </ul>
      </li>
      <!-- 7) uchunchi li -->
      <li>
        <a href="#">
          <i class='bx bx-compass'></i>
          <span class="link_name">Explore</span>
        </a>
        <ul class="sub-menu blank">
          <li>
            <a class="link_name" href="#">Explore</a>
          </li>
        </ul>
      </li>
      <!-- 8) uchunchi li -->
      <li>
        <a href="#">
          <i class='bx bx-history'></i>
          <span class="link_name">History</span>
        </a>
        <ul class="sub-menu blank">
          <li>
            <a class="link_name" href="#">History</a>
          </li>
        </ul>
      </li>
      <!-- 9) uchunchi li -->
      <li>
        <a href="#">
          <i class='bx bx-cog'></i>
          <span class="link_name">Setting</span>
        </a>
        <ul class="sub-menu blank">
          <li>
            <a class="link_name" href="#">Setting</a>
          </li>
        </ul>
      </li>
      <!-- 10) uchunchi li -->
      <li style="position:relative">
        <div class="profile-details">
          <div class="profile-content">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_960_720.jpg" alt="">
            <div class="name-job">
              <div class="profile_name">Shoxa</div>
              <div class="job">Web Disegner</div>
            </div>
            <i class='bx bx-log-out'></i>
          </div>
        </div>
      </li>
    </ul>

  </div>
  <!-- section sidebar end -->

  <!-- section home start -->
  <section class="home-section">
    <div class="home-content">
      <i class='bx bx-menu'></i>
      <span class="text">Drop Down SideBar</span>

    </div>
  </section>
  </div>
</template>

<script>
export default {
mounted() {
    // ==========SaidBar start=========
let arrow= document.querySelectorAll('.bxs-chevron-down');

for(let i=0; i<arrow.length; i++){
    arrow[i].addEventListener('click',(event)=>{
        let arrowParnt=event.target.parentElement.parentElement;
        arrowParnt.classList.toggle('showMenu');
    });
}
let sideBar=document.querySelector('.sidebar');
let sideBarBtn=document.querySelector('.bx-menu');
sideBarBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('closet');
});
// ==========SaidBar end=========


},

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins',sans-serif;
    box-sizing: border-box;
}
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background: #11101d;
    z-index: 100;
    transition: all 0.4s ease;
}
.sidebar.closet{
    width: 78px;
}
.sidebar .logo-ditails{
height: 60px;
width: 100%;
display: flex;
align-items: center;
}
.sidebar .logo-ditails i{
    font-size: 30px;
    color: #fff; 
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px; 
   
}
.sidebar .logo-ditails .logo-name{
    font-size: 22px;
    color: #fff;
    font-weight: 600;
    transition: 0.3s ease;
    transition-delay: 0.1;
}
.sidebar.closet .logo-ditails .logo-name{
    opacity: 0;
    transition-delay: 0;
    pointer-events: none;
}
.sidebar .nav-links{
    height: 100%;
    padding: 30px 0 150px 0;
    overflow: auto;
}
.sidebar.closet .nav-links{
    overflow: visible;
}

/* scrolni yuq qilish */
.sidebar .nav-links::-webkit-scrollbar{
    display: none;
}

.sidebar .nav-links li{
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
}
.sidebar .nav-links li:hover{
    background: #1d1b31;
}
.sidebar .nav-links li .icons-link{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sidebar.closet .nav-links li .icons-link{
    display: block;
}
.sidebar .nav-links li i{
    font-size: 20px;
    color: #fff; 
    height: 40px;
    min-width: 78px;
    text-align: center;
    line-height: 40px; 
    transition: all 0.3s ease;
    cursor: pointer;
}
.sidebar .nav-links li.showMenu i.bxs-chevron-down{
    transform: rotate(-180deg);
}
.sidebar.closet .nav-links i.bxs-chevron-down{
display: none;
}
.sidebar .nav-links li a{
    text-decoration: none;
    display: flex;
    align-items: center;

}
.sidebar .nav-links li a .link_name{
    font-size: 18px;
    color: #fff;
    font-weight: 400;
}
.sidebar.closet .nav-links li a .link_name{
    opacity: 0;
    pointer-events: none;
}
.sidebar .nav-links li .sub-menu{
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background-color: #1d1b31;
    white-space: nowrap;
    display: none;
}
.sidebar .nav-links li.showMenu .sub-menu{
    display: block;
}
.sidebar .nav-links li .sub-menu a{
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    opacity: 0.6;
    transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover{
    opacity: 1;
    }
.sidebar.closet .nav-links li .sub-menu{
    position: absolute;
    left: 100%;
    top: -10px;
    padding: 10px 20px;
    margin-top: 0;
    border-radius: 0 6px 6px 0;
    font-weight: 400;
    
    opacity: 0;
    display: block;
    pointer-events: none;
    transition: 0s;
}

.sidebar.closet .nav-links li:hover .sub-menu{
    top: 0;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.3s ease;
}
.sidebar.closet .nav-links li .sub-menu .link_name{
    display: none;
}
.sidebar .nav-links li .sub-menu .link_name{
    display: none;
}
.sidebar.closet .nav-links li .sub-menu .link_name{
    font-size: 18px;
    opacity: 1;
    display: block;
}
.sidebar .nav-links li .sub-menu.blank{
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
    

}
.sidebar .nav-links li:hover .sub-menu.blank{
transform: translateY(-50%);
top: 50%;
}
/* ===========Profele Ditails start ============*/
.sidebar .profile-details .profile-content img{
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius: 16px;
    margin: 0 14px 0 12px;
    background: #1d1b31;
    transition: all 0.4s ease;
    
}
.sidebar.closet .profile-details .profile-content img{
    padding: 10px;
}
.sidebar .profile-details .profile-content{
    display: flex;
    align-items: center;
}
.sidebar .profile-details{
    position: fixed;
    width: 250px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1d1b31;
    padding: 6px 0;
    transition: all 0.4s ease;
}
.sidebar.closet .profile-details{
   width: 78px;
   background: none;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job{
color: #fff;
font-size: 18px;
font-weight: 500;
white-space: nowrap;
}
.sidebar.closet .profile-details i,
.sidebar.closet .profile-details .profile_name,
.sidebar.closet .profile-details .job{
   display: none;
}
.sidebar .profile-details .job{
    font-size: 12px;
}
/* Section home start */
.home-section{
    position: relative;
    height: 100vh;
    background: #E4E9F7;
    left: 250px;
    width: calc(100% - 250px);
    transition: all 0.5s ease;
}
/* menu bosilgandagi harakat */
.sidebar.closet ~ .home-section{
    left: 78px;
    width: calc(100% - 78px);
}
.home-section .home-content{
    height: 60px;
    display: flex;
    align-items: center;
}
.home-section .home-content .bx-menu,
.home-section .home-content .text{
    color: #11101d;
    font-size: 35px;
   
}
.home-section .home-content .text{
    font-size: 26px;
    font-weight: 600;
}
.home-section .home-content .bx-menu{
    margin: 0 15px;
    cursor: pointer;
}
/* Section home end */

</style>