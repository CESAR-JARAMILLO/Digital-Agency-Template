type Props = {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
};

const BannerSection = ({
  title,
  description,
  imageUrl,
  reverse = false,
}: Props) => {
  return (
    <section className={`banner ${reverse ? "banner--reverse" : ""}`}>
      <div className="banner__container">
        <div className="banner__text">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__description">{description}</p>
        </div>
        <div className="banner__image">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
