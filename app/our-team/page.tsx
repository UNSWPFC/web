import style from './style.module.css';

export default function ourTeam() {
  return (
    <>
      <div className={style.page}>
        <div className={style.banner}>
          <div className={style.bannerImgContainer}>
            <img src="/pfcLeadersTeam.jpeg" alt="pfc team" className={style.bannerImg} />
          </div>
            
          <div className={style.title}>Our Team</div>
        </div>
        
        <div className={style.content}>
          <div className={style.team}>
            <div className={style.teamName}>Executives</div>
            
            <div className={style.teamMembers}>
              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./jowy.jpeg" alt="jowy"/>
                </div>
                <div className={style.memberName}>Jowy Leung</div>
                <div className={style.memberPosition}>Co-President</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Aadarsh.jpeg" alt="Aadarsh"/>
                </div>
                <div className={style.memberName}>Aadarsh Narsey</div>
                <div className={style.memberPosition}>Co-President</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Tram.jpeg" alt="Tram"/>
                </div>
                <div className={style.memberName}>Tram Vo</div>
                <div className={style.memberPosition}>Vice-President External</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Jason.jpeg" alt="Jason"/>
                </div>
                <div className={style.memberName}>Jason Cheung</div>
                <div className={style.memberPosition}>Vice-President Internal</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Jacqueline.jpeg" alt="Jacqueline"/>
                </div>
                <div className={style.memberName}>Jacqueline Xu</div>
                <div className={style.memberPosition}>Treasurer</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Lawrence.png" alt="Lawrence"/>
                </div>
                <div className={style.memberName}>Lawrence Leung</div>
                <div className={style.memberPosition}>Arc Delegate</div>
              </div>

            </div>
          </div>

          <div className={style.team}>
            <div className={style.teamName}>Externals</div>
            
            <div className={style.teamMembers}>
              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Christiaan.jpeg" alt="Christiaan"/>
                </div>
                <div className={style.memberName}>Christiaan Thomas</div>
                <div className={style.memberPosition}>Events Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Ellesan.jpeg" alt="Ellesan"/>
                </div>
                <div className={style.memberName}>Ellesan Leung</div>
                <div className={style.memberPosition}>Events Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Nicole.jpeg" alt="Nicole"/>
                </div>
                <div className={style.memberName}>Nicole Luong</div>
                <div className={style.memberPosition}>Events Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Christie.jpeg" alt="Christie"/>
                </div>
                <div className={style.memberName}>Christie Xu</div>
                <div className={style.memberPosition}>Sponsorships Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Eric.jpeg" alt="Eric"/>
                </div>
                <div className={style.memberName}>Eric Zhu</div>
                <div className={style.memberPosition}>Sponsorships Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./NicoleLou.jpeg" alt="NicoleLou"/>
                </div>
                <div className={style.memberName}>Nicole Lou</div>
                <div className={style.memberPosition}>Education Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Adi.jpeg" alt="Adi"/>
                </div>
                <div className={style.memberName}>Adi Agarwal</div>
                <div className={style.memberPosition}>Education Director</div>
              </div>
            </div>
          </div>

          <div className={style.team}>
            <div className={style.teamName}>Internal</div>
            
            <div className={style.teamMembers}>
              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Jess.jpeg" alt="Jess"/>
                </div>
                <div className={style.memberName}>Jessica Yoon</div>
                <div className={style.memberPosition}>Marketing Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Orchhna.jpeg" alt="Orchhna"/>
                </div>
                <div className={style.memberName}>Orchhna Hp</div>
                <div className={style.memberPosition}>Marketing Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Daniel.jpeg" alt="Daniel"/>
                </div>
                <div className={style.memberName}>Daniel Xu</div>
                <div className={style.memberPosition}>Human Resources Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Rachel.jpeg" alt="Rachel"/>
                </div>
                <div className={style.memberName}>Rachel Li</div>
                <div className={style.memberPosition}>Human Resources Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Cameron.jpeg" alt="Cameron"/>
                </div>
                <div className={style.memberName}>Cameron Ho</div>
                <div className={style.memberPosition}>Human Resources Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Alex.jpeg" alt="Alex"/>
                </div>
                <div className={style.memberName}>Alex Chen</div>
                <div className={style.memberPosition}>IT Director</div>
              </div>

              <div className={style.memberCard}>
                <div className={style.memberPic}>
                  <img src="./Jacquelyn.jpeg" alt="Jacquelyn"/>
                </div>
                <div className={style.memberName}>Jacquelyn Huang</div>
                <div className={style.memberPosition}>IT Director</div>
              </div>
            </div>
          </div>





        </div>
      </div>
    </>
  );
}
