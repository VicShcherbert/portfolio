export const Education = () => {
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
      <h1>Education</h1>
      <div
        className='exp-item'
        onClick={() => openDescription('ewu-description')}
      >
        <div className='exp-text-item'>
          BS in Computer Science @ Eastern Washington University
          <br />
          <i>September 2017 - June 2022</i>
          <div id='ewu-description'>
            Course work included: Java Programming, Web Application Development,
            Data Structures, Algorithms, Software Development Principles, and
            Relational Database Systems.
          </div>
        </div>
      </div>
    </div>
  );
};
