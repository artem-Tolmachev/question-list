import type { Skill } from '@/entities/skills';
import './questionDitailsRight.scss';
import type { UserShort } from '@/entities/auth';
import { SkillsButton } from '@/features/filterBySkills';
import Avatar from '@/shared/assets/avatar.png';
import { useNavigate } from 'react-router-dom';
import Telegram from '@/shared/ui/Socials/Telegram';
import Youtube from '@/shared/ui/Socials/Youtube';
import Profile from '@/shared/ui/Socials/Profile';

interface Props {
  complexity: number;
  skills: Skill[];
  keywords: string[];
  author: UserShort;
  rate: number;
}

export default function QuestionDitailsRight({
  rate,
  complexity,
  skills,
  keywords,
  author,
}: Props) {

  const navigate = useNavigate();

  return (
  <div className="question-right">
      <div className="question-right__item">
        <div className="question-right__level">
          <span className="question-right__item-title">Уровень:</span>
          <div className="question-right__level-wr">
            <div className="question-right__level-inf">
              Сложность: <span>{complexity}</span>
            </div>
            <div className="question-right__level-inf">
              Рейтинг: <span>{rate}</span>
            </div>
          </div>
        </div>
        <div className="question-right__skills">
          <span className="question-right__item-title">Навыки:</span>
          <div className="question-right__skills-wr">
            {skills.map((skill) => (
              <div key={skill.id}>
                <SkillsButton 
                  onClick={(skill) =>
                    navigate(`/?page=1&skills=${skill.id}`)
                  }
                skill={skill} 
                variant="secondary" 
                img={20} 
                />
              </div>
            ))}
          </div>
        </div>
        <div className="question-right__keywords">
          <span className="question-right__item-title">Ключевые слова:</span>
          <div className="question-right__keywords-wr">
            {keywords.map((word, i) => (
              <div className="question-right__word" key={i}>
                {`#${word}`}
              </div>
            ))}
          </div>
        </div>
        <div className="question-right__author">
          <span className="question-right__item-title">Автор:</span>
          <div className="question-right__author-name">{author ? author.username : 'Noname'}</div>
        </div>
      </div>
      <div className="question-right__item question-right__item--primary question-right__item-guru">
        <div className="question-right__guru">
          <div className="question-right__guru-wr">
            <img
              width={45}
              height={45}
              className="question-right__guru-img"
              src={Avatar}
              alt="фото гуру"
            />
            <div className="question-right__guru-inf">
              <p className="question-right__guru-name">Руслан Куянец</p>
              <p className="question-right__guru-skill">Python Guru</p>
            </div>
          </div>
          </div>
          <p className="question-right__descr">
            Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
          </p>
          <div className="question-right__socials">
            <Telegram from='questions'/>
            <Youtube from='questions'/>
            <Profile/>
          </div>
      </div>
    </div>
  );
}
