import DecryptedText from './../DecryptedText'
import './Readme.css'
export const Readme = () => {
  return (
    <div className="readme code">
      <DecryptedText
        parentClassName="about"
        animateOn="view"
        revealDirection="start"
        maxIterations={10}
        speed={250}
        sequential={false}
        useOriginalCharsOnly
        text="Welcome to my portfolio! "
      />
      <DecryptedText
        parentClassName="phrase"
        animateOn="view"
        revealDirection="start"
        maxIterations={1}
        speed={1}
        sequential
        useOriginalCharsOnly
        text="✨ There are no shortcuts to excellence. Success comes from effort and perseverance. ✨"
      />
      <DecryptedText
        parentClassName="phrase strong"
        animateOn="view"
        revealDirection="start"
        maxIterations={1}
        speed={1}
        sequential
        useOriginalCharsOnly
        text="Web & API Development – Databases & Infrastructure - IT Security & Networking "
      />
      <DecryptedText
        parentClassName="content section"
        animateOn="view"
        revealDirection="start"
        maxIterations={1}
        speed={1}
        sequential
        useOriginalCharsOnly
        text="🎯 About Me"
      />
      <DecryptedText
        parentClassName="content"
        animateOn="view"
        revealDirection="start"
        maxIterations={1}
        speed={1}
        sequential={false}
        useOriginalCharsOnly
        text="I studied at Universidad Mayor de San Simón in Cochabamba Bolivia📍, where I graduated with honors for my outstanding performance in my final project. I have built all kinds of websites throughout my journey as a student, mastering top technologies and applying the best development practices to create high-quality, efficient solutions! 🚀"
      />

      <DecryptedText
        parentClassName="content section"
        animateOn="view"
        revealDirection="start"
        maxIterations={1}
        speed={1}
        sequential
        useOriginalCharsOnly
        text="🚀 Work Philosophy"
      />
      <DecryptedText
        parentClassName="content"
        animateOn="view"
        revealDirection="start"
        maxIterations={1}
        speed={1}
        sequential={false}
        useOriginalCharsOnly
        text="I work effectively both independently and in diverse team environments, bringing strong communication skills to foster collaboration, streamline workflows, and create a positive, respectful atmosphere. 🤝"
      />
    </div>
  )
}
