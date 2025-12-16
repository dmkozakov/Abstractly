import Button from "../common/Button/Button";
import Image from "../common/Image/Image";
import * as S from "../HeroSection/Hero.styled";

import heroJpg from "@/assets/images/heroSection/hero.jpg";
import heroJpg2x from "@/assets/images/heroSection/hero@2x.jpg";
import heroWebp from "@/assets/images/heroSection/hero.webp";
import heroWebp2x from "@/assets/images/heroSection/hero@2x.webp";
import heroAvif from "@/assets/images/heroSection/hero.avif";
import heroAvif2x from "@/assets/images/heroSection/hero@2x.avif";

function Hero() {
  return (
    <S.Section>
      <S.Heading>Well crafted abstract gradient</S.Heading>
      <S.Text>High quality abstract images for your projects, wallpaper and presentations.</S.Text>
      <S.BtnBox>
        <Button secondary>Learn more</Button>
        <Button>See pricing</Button>
      </S.BtnBox>
      <Image
        src={heroJpg}
        jpg={`${heroJpg} 1x, ${heroJpg2x} 2x`}
        webp={`${heroWebp} 1x, ${heroWebp2x} 2x`}
        avif={`${heroAvif} 1x, ${heroAvif2x} 2x`}
        alt="Examples of abstract images"
      />
    </S.Section>
  );
}

export default Hero;
