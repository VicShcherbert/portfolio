export const LeadershipExperience = () => {
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
      <h1>Leadership Experience</h1>
      <div className='exp-item'>
        <div
          className='exp-text-item'
          onClick={() => openDescription('gsbcyouth-description')}
        >
          Youth Leader @ Grace Slavic Baptist Church
          <br />
          <i>January 2023 - present</i>
          <div id='gsbcyouth-description'>
            I serve as a youth leader, as well as a youth choir director. At
            times, the work can be a challenge, but it's rewarding when you get
            to see people become more engaged and more like Jesus Christ!
            <br />
            <br />
            My work involves gathering with our counsil, planning out events,
            and communicating those plans to the youth through a messaging app.
          </div>
        </div>
      </div>
    </div>
  );
};
