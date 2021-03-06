import Action from './Action';

export default class WinAction extends Action {

  users = [
    'isuvorov',
    'volkovpishet',
    'natavts',
    'anorudes',
    'immuzov',
    'antouhou',
    'yukioru',
    'durob',
    'AtNovember',
    'THEHVZE',
    'flood7',
    'romankalinkin',
    'Andru_x',
    'vozilov',
    'NightRomantic',
    'selslack',
    'Sanich63',
    'hinex',
    'xfocuse',
    'edinstvennyi',
    'ma3xxx',
    'leyoiv',
    'seegi',
    'ArkadyB',
    'hopacha',
    'ga2mer',
    'unipon',
    'dkorostelev',
    'demeliorator',
    'Grishot',
    'dinogameandroid',
    'Seempoke',
    'nenatta',
    'unrealjke',
    'kreynes',
    'rsega',
    'Khorunzhev',
    'grunindesign',
    'dwnste',
    'MagzNikitin',
    'fpsthirty',
    'zounds',
    'arkady_b',
    'MaxOlin33',
    'metallcorn',
    'dmitryvlasov',
    'aboolean',
    'f1x3rr',
    'Nikita_Solovev',
    'rogozhko',
    'Ghost910',
    'RoyPalmer',
    'superkate',
    'bethlis',
    'teslaaa',
    'romankusty',
    'iamallah_n',
    'Tetrisi',
    'ivbra',
    'OviNik',
  ]


  test(message) {
    return this.testMessageRegExp(message, /полундра/) && this.percentProbability(100);
  }

  doAction(message) {
    this.sendMessage(message, 'Нас АТАКУЮТ!');
    this.sendMessage(message, 'ПОЛУДРА!!!'  + this.users.map(a => '@' + a).join(' '));
  }
}
