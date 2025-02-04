export const WorkExperience = () => {
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
      <h1>Software Work Experience</h1>
      <div
        className='exp-item'
        onClick={() => openDescription('jk-description')}
      >
        <div className='exp-text-item'>
          Web Developer @ JK Boots <br />
          <i>June 2022 - February 2023</i>
          <div id='jk-description'>
            Using Go and AWS services (like Lambda and S3), I created a system
            that would receive order information, and print out an order label
            that would get sent to production.
            <br />
            <br />
            Using React, I created a web app that allowed employees to reprint
            labels, in case there was an issue with the original.
            <br />
            <br />I also engaged in support of equipment like printers, and
            guided store managers when adding their devices into the company
            device management system.
          </div>
        </div>
      </div>
    </div>
  );
};
