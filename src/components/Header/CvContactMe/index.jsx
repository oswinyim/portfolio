const CvContactMe = ({ isHK }) => {
  const resumeHref = isHK ? "https://oswinyim.com/oswin-hk-cv.pdf" : "https://oswinyim.com/resume.pdf";
  return (
    <div className="cv">
      <a className="btn" href={resumeHref} download>
        Resume
      </a>
      <a className="btn btn-primary" href="#contact">
        <span>Let's Talk</span>
      </a>
    </div>
  );
};

export default CvContactMe;
