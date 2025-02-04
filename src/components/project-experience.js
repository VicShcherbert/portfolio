export const ProjectExperience = () => {
  const openDescription = (name) => {    
    const displayStatus = document.getElementById(name).style.display;
    if (displayStatus === '') {
      document.getElementById(name).style.display = 'block';
    } else {
      document.getElementById(name).style.display = '';
    }
  };

  return (
    <div className='section'>
      <h1>Projects</h1>

      <div className='exp-item' onClick={() => openDescription('nwpower-description')}>
        <div className='exp-text-item'>
          Northwest Power Washing
          <br />
          <i>Released 2024</i>
          <div id='nwpower-description'>
            Designed a simple website for a client for his power washing business in Salem OR.
            <br/>
            <br/>
            How simple you might ask? I used JavaScript, HTML, and CSS! This project helped me to keep working on my web development skills.
            <br/>
            <br/>
            <a href='https://vs-web-nw-power-wash.web.app/' target='_blank' rel='noreferrer'>
              Visit the website
            </a>
          </div>
        </div>
      </div>
      <div className='exp-item' onClick={() => openDescription('ewugrants-description')}>
        <div className='exp-text-item'>
          EWU Grants Office
          <br />
          <i>Released 2022</i>
          <div id='ewugrants-description'>
            During my senior year of university, together with a team of
            talented individuals, we created a web app for the EWU Grants'
            Office. Our system allowed them to effectively access (as well as
            edit and add) grant proposal documents.
            <br />
            <br />
            We used React as our frontend, and Node and MySQL in the backend.
            <br />
            <br />
            Through our team leader, we communicated with the client to ensure
            that our solution satisfies their needs as much as possible.
          </div>
        </div>
      </div>

      <div className='exp-item' onClick={() => openDescription('gsbcmusic-description')}>
        <div className='exp-text-item'>
          GSBC Music
          <br />
          <i>Released 2021</i>
          <div id='gsbcmusic-description'>
            Created a web app using React and Firebase. This app lets people in
            my church access sheet music for various musical departments.
            <br />
            <br />
            <a href='https://gsbcmusic.com/' target='_blank' rel='noreferrer'>
              Visit the website
            </a>
          </div>
        </div>
      </div>

      <div className='exp-item' onClick={() => openDescription('pnwcamp-description')}>
        <div className='exp-text-item'>
          PNW Camp
          <br />
          <i>Released 2021</i>
          <div id='pnwcamp-description'>
            Created a web app using React and Firebase. This app lets people
            sign up for our annual PNW camp. After signing up, the user is
            presented with a code. That code allows them to update their status:
            either deleting themselves from the list, or updating information.
            <br />
            <br />
            <a href='https://pnwcamp.org/' target='_blank' rel='noreferrer'>
              Visit the website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
