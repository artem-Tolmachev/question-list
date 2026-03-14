import LogoText from '@/shared/ui/Logo/LogoText';
import Telegram from '@/shared/ui/Socials/Telegram';
import Figma from '@/shared/ui/Socials/Figma';
import Youtube from '@/shared/ui/Socials/Youtube';
import Media from '@/shared/ui/Socials/Media';
import GitHub from '@/shared/ui/Socials/GitHub';
import './footer.scss';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <LogoText color={'#FFFFFF'} />
          </div>
          <p className="footer__text">Выбери, каким будет IT завтра, вместе с нами</p>
          <p className="footer__descr">
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу.
            Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт
            для ознакомления в Figma
          </p>
          <div className="footer__bottom">
            <p className='footer__copy'>&copy; 2024 YeaHub Документы</p>
            <div className='footer__socials'>
              <p className="footer__socials-text">
                Ищите нас и в других соцсетях @yeahub_it
              </p>
              <div className="footer__socials-links">
                <Figma/>
                <Telegram from="footer"/>
                <Youtube from="footer"/>
                <Media from="footer"/>
                <GitHub from="footer"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
