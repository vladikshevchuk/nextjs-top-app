import React, { ForwardedRef, forwardRef, useRef, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceUA } from "../../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

const Product = motion(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      { product, className, ...props }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: { opacity: 1, height: "auto" },
        hidden: { opacity: 0, height: 0 },
      };

      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        reviewRef.current?.focus();
      };

      return (
        <div className={className} ref={ref} {...props}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              <span className="visualyHidden">цена</span>
              {priceUA(product.price)}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  <span className="visualyHidden">скидка</span>
                  {priceUA(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              <span className="visualyHidden">кредит</span>
              {priceUA(product.credit)}
              <span className={styles.mounth}>/мес.</span>
            </div>
            <div className={styles.rating}>
              <span className="visualyHidden">{'рейтинг' + (product.reviewAvg ?? product.initialRating)}</span>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((category) => (
                <Tag key={category} className={styles.category} color="ghost">
                  {category}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}{" "}
                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
              </a>
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((characteristic) => (
                <div
                  key={characteristic.name}
                  className={styles.characteristicBlock}
                >
                  <span className={styles.characteristicName}>
                    {characteristic.name}
                  </span>
                  <span className={styles.characteristicDots}></span>
                  <span className={styles.characteristicValue}>
                    {characteristic.value}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.actions}>
              <Button appearance="primary">Узнать подробнее</Button>
              <Button
                className={styles.reviewButton}
                appearance="ghost"
                arrow={isReviewOpened ? "down" : "right"}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
                aria-expanded={isReviewOpened}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={isReviewOpened ? "visible" : "hidden"}
          >
            <Card className={styles.review} color="blue" ref={reviewRef} tabIndex={isReviewOpened ? 0 : -1}>
              {product.reviews.length > 0 &&
                isReviewOpened &&
                product.reviews.map((review) => (
                  <div key={review._id}>
                    <Review review={review} />
                    <Divider />
                  </div>
                ))}
              {isReviewOpened && <ReviewForm productId={product._id} isOpened={isReviewOpened} />}
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);

Product.displayName = 'Product';
export default Product;