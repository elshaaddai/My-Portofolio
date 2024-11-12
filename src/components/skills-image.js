import canva from '/public/svg/skills/canva.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import python from '/public/svg/skills/python.svg';


const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'c++':
      return cplusplus;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'figma':
      return figma;
    case 'canva':
      return canva;
    default:
      break;
  }
}
export default skillsImage;