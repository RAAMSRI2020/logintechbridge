import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./Feedback";

const Testimonial = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative md:ml-40 sm:ml-6 ml-0 text-center text-wrap w-full`}>
    <div className="w-full sm:ml-0">
      <h3 className="text-2xl leading-normal font-semibold">Testimonials</h3>
      <p className="text-4xl leading-loose font-light text-blue-600">See what People saying about us</p>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1] ">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonial;