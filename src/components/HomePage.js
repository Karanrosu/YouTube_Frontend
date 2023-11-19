import "./HomePage.css";
import logo from "./YouTube-Logo.png";
import image from "./image.jpeg";
import profile from "./dog.jpg";
import homelogo from "./logo/home.png"
import shortslogo from "./logo/shorts.png"
import subscriptionlogo from "./logo/subs.png"
import yourchannellogo from "./logo/your.png"
import historylogo from "./logo/histroy.png"
import yourvideologo from "./logo/video.png"
import watchlaterlogo from "./logo/watchLater.png"
import seemorelogo from "./logo/DROP.png"
import trendinglogo from "./logo/trending.png"
import shoppinglogo from "./logo/shopping.png"
import musiclogo from "./logo/music.png"
import livelogo from "./logo/live.png"
import gamelogo from "./logo/game.png"
import newslogo from "./logo/news.png"
import sportlogo from "./logo/sport.png"
import learninglogo from "./logo/learn.png"
import podcastlogo from "./logo/popcast.png"
import fashionlogo from "./logo/fashion.png"
import menulogo from "./logo/menu.png"
import notificationlogo from "./logo/notification.png"
import uploadlogo from "./logo/upload.png"
import miclogo from "./logo/mic.png"
import searchlogo from "./logo/search.png"
import youlogo from "./logo/DROPRIGHT.png"


const HomePage = () => {
    // const [videos, setVideos] = useState([]);

    return (
        <div className="youtube">
            <div className="header">
                {/* <!-- <div class="menubar">menu</div> --> */}
                <div className="logowithmenu">
                    <img className="menulogo" src={menulogo} height="45px"></img>
                    <a href="http://localhost:3000/login"><img className="logo" src={logo} alt="image" height="100px"/></a>
                </div>
                <div className="search">
                    <input className="searchbar" type="text" placeholder="Search"></input>
                    <button className="searchbutton"><img className="searchlogo" src={searchlogo} height="20px"></img></button>
                    <div className="micbutton"><img className="miclogo" height="23px" src={miclogo}></img></div>
                </div>
                <div className="signup">
                    <img className="upload" src={uploadlogo}></img>
                    <img className="notification" src={notificationlogo}></img>
                    <img className="profilephoto" src={profile}></img>
                </div>
            </div>
        {/* <div class="mainbody"> */}
            <div class="mainview">
                <div class="sidemenu">
                    <div className="uppersidebar">
                        <div className="upperbar home">
                            <img src={homelogo} height="25px"></img>
                            <div className="upperbarhome"><h4>Home</h4></div>
                        </div>
                        <div className="upperbar">
                            <img src={shortslogo} height="30px"></img>
                            <div className="upperbarhome"><h4>Shorts</h4></div>
                        </div>
                        <div className="upperbar">
                            <img src={subscriptionlogo} height="30px"></img>
                            <div className="upperbarhome"><h4>Subscriptions</h4></div>
                        </div>
                    </div>
                    <div className="line1"></div>
                    <div className="middlesidebar">
                        <div className="midbar">
                            <div className="midbaryou1"><h3>You</h3></div>
                            <img className="youlogo" src={youlogo} height="25px"></img>
                        </div>
                        <div className="midbar">
                            <img src={yourchannellogo} height="30px"></img>
                            <div className="midbaryou"><h4>Your Channel</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={historylogo} height="30px"></img>
                            <div className="midbaryou"><h4>History</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={yourvideologo} height="30px"></img>
                            <div className="midbaryou"><h4>Your videos</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={watchlaterlogo} height="30px"></img>
                            <div className="midbaryou"><h4>Watch later</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={yourvideologo} height="30px"></img>
                            <div className="midbaryou"><h4>Download</h4></div>
                        </div>
                        <div className="midbar">
                            <img className="seemorelogo" src={seemorelogo} height="30px"></img>
                            <div className="midbaryou"><h4>See more</h4></div>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="buttomsidebar">
                        <div className="buttombar bb1"><h3>Explore</h3></div>
                        <div className="buttombar">
                            <img src={trendinglogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Shoping</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={musiclogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Music</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={livelogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Live</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={gamelogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Gaming</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={newslogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>News</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={sportlogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Sports</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={learninglogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Learning</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={fashionlogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Fashion & Beauty</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={podcastlogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Podcast</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={shoppinglogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Shoping</h4></div>
                        </div>
                    </div>
                </div>
                <div className="viewcontent">
                    <div class="viewcontentvideo">
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i4.ytimg.com/vi/8WnW_imq4AY/0.jpg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Build a Portfolio Website With Next JS</h4></div>
                            </div>
                            <div className="accountholder holdername1">NiiSuu Leitan</div>
                            <div className="timebox time1">826k views . 23 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/5-Pi3-vTkkg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjrSgSlShkYroLM8bsx3vGLjNd4g"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>This Cool JavaScript Effect Will Make Your Website 3D !</h4></div>
                            </div>
                            <div className="accountholder holdername1">True Coder</div>
                            <div className="timebox time1">8k views . 1 month ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/ojdEP61l3M0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvd-eJcMY6SHFeYOXiRG983YEFUw"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Prateek Kuhad - Mulaqat (Official Music Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Prateek Kuhad</div>
                            <div className="timebox time1">61k views . 17 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/dRTtxk673Xw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC93LRN7nCtMWYWUg6BPfHuf9wP9g"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music)</h4></div>
                            </div>
                            <div className="accountholder holdername1">AUR</div>
                            <div className="timebox time1">123k views . 6 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/LRyb0hwHuWY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBrE3EZJhsnD8c2R7mrrPX4f379Q"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Aziyat - Pratyush Dhiman [Official Video] ft. Jahnavi Rao</h4></div>
                            </div>
                            <div className="accountholder holdername1">PRATSOFICIAL</div>
                            <div className="timebox time1">543k views . 2 years ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/U-KfnCpEEl4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwFgrmtED-8oSLvTvEJDt3aEqaAg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Teriyan Adavaan Munda Maar Sutteya (Full Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Nilapati</div>
                            <div className="timebox time1">51k views . 4 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/hztH6aLRaiY/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB0gaAAuADigIMCAAQARh_IEMoGTAP&rs=AOn4CLCTC4aWhG2Nhe7HCy7UcOWpWD_LZA"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Web Development Course</h4></div>
                            </div>
                            <div className="accountholder holdername1">Apna College</div>
                            <div className="timebox time1">216k views . 10 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/VDrO044VHpY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqWMDkVdk4KgiYek5Ovbhn5YKkaw"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Mix - Yuika - Sukidakara (Lyric Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Yuika</div>
                            <div className="timebox time1">365k views . 1 year ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/JOpufUxDUns/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgdgIogzfThO9NnhY4Gyns7KhVCg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>정국 (Jung Kook) 'Standing Next to You' Official MV</h4></div>
                            </div>
                            <div className="accountholder holdername1">Hype Lebels</div>
                            <div className="timebox time1">222k views . 9 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/tBgNpc39FJk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVBg8DnTJgW2oSdacPuUbMD27lPg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Naitom Satpi | Official Music Video Release</h4></div>
                            </div>
                            <div className="accountholder holdername1">Tantha</div>
                            <div className="timebox time1">143k views . 3 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/AG8XmbfKvKw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpvZ_JV28WTkC_jaSjd-xhyxxGMw"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Emotional songs hit differently on Omegle ! Hindi Mashups</h4></div>
                            </div>
                            <div className="accountholder holdername1">Sobit Tamang</div>
                            <div className="timebox time1">169k views . 7 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/wokP6NeP0O0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKY2poRDXaF-0Q66Mo21XoZZ_KPQ"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>AUR - Tu hai kahan (Lyrics)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Vibes Music</div>
                            <div className="timebox time1">769k views . 3 years ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/WrRB-8eLfsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTkadcCp-2pRLJw0-xIq8Mds9n1A"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Dooriyan - Dino James ft. Kaprila [Official Music Video]</h4></div>
                            </div>
                            <div className="accountholder holdername1">Dino James</div>
                            <div className="timebox time1">12k views . 5 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/jE2GhxMDdAk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr_grtOL0glep642b-hffx53XvTg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Mix - [C.C.] JUNHO❤YOONA on the stage✨ 《Señorita》 Covered</h4></div>
                            </div>
                            <div className="accountholder holdername1">Kpop on stage</div>
                            <div className="timebox time1">69k views . 9 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/8HFBY9cudgM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2m8PIlfT1zVhm0WjTTLRld6y49g"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Maximillian - On My Mind (Lyric Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Love Life Lyrics</div>
                            <div className="timebox time1">101k views . 2 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/xWmnktqP5X0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSg_VxdjmHgyB7HZCFvUp_YPFkjQ"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>ruth b. - dandelions (cover)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Alecgis weng</div>
                            <div className="timebox time1">213k views . 2 years ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/XbhecuoEgxs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJidbu58STOIFVrbCzPBCmy5NiUA"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Fujii Kaze - "Shinunoga E-Wa" Live at Nippon Budokan (2020)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Fujii Kaje</div>
                            <div className="timebox time1">16k views . 3 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/yci475Vwc10/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgsLrj5cklSK5wuQoUjnQR1LshZA"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Login and Registration Form in HTML & CSS</h4></div>
                            </div>
                            <div className="accountholder holdername1">Codehal</div>
                            <div className="timebox time1">44k views . 17 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/Pb7AW9Ox0hU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeoATj67N-VIQg0J6-jhnyfMGQeA"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Little Do You Know || Alex &  Sierra (Lyrics)</h4></div>
                            </div>
                            <div className="accountholder holdername1">MA_VIBES🎧</div>
                            <div className="timebox time1">227k views . 8 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/f85_Tn00FK4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjvyTgL4xht03ahs9yH9l5RHuMCw"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>WATCH THIS ANIME RIGHT NOW🔥| MONSTER |</h4></div>
                            </div>
                            <div className="accountholder holdername1">BBF LIVE</div>
                            <div className="timebox time1">98k views . 7 days ago</div>
                        </div>
                    
                    </div>
                </div>
            </div>
         </div>
    // </div>
    );
};

export default HomePage;