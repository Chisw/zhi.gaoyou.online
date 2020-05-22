import ImgGYRB from './img/link-gyrb.png'
import Img720 from './img/link-720.png'
import ImgJI from './img/link-ji.png'
import ImgWYT from './img/link-wyt.png'
import ImgJRGY from './img/link-jrgy.png'
import article from './img/icon/article.svg'
import github from './img/icon/github.svg'
import email from './img/icon/email.svg'

export const NAV_LIST = [
  { name: '高郵州志', to: '/gyzz/', period: '乾隆四十八年', year: 1783 },
  { name: '續增高郵州志', to: '/xzgyzz/', period: '道光二十三年', year: 1843 },
  { name: '再續高郵州志', to: '/zxgyzz/', period: '光緒九年', year: 1883 },
  { name: '三續高郵州志', to: '/sxgyzz/', period: '民國十一年', year: 1922 },
]

export const LINK_LIST = [
  { logo: ImgJI, url: 'https://jisuowei.com' },
  { logo: ImgGYRB, url: 'http://epaper.gytoday.cn' },
  { logo: ImgJRGY, url: 'http://www.gytoday.cn/' },
  { logo: ImgWYT, url: 'http://www.wenyoutai.com' },
  { logo: Img720, url: '//720yun.com/t/567jz7ukvf2?scene_id=9813419' },
]

export const PDF_LIST = [
  { origin: '维基共享', name: '高郵州志_乾隆四十八年', size: '560.68 MB' },
  { origin: '维基共享', name: '續增高郵州志_道光二十三年', size: '206.24 MB' },
  { origin: '维基共享', name: '高郵州志_重鍥本_道光二十五年', size: '251.08 MB' },
  { origin: '维基共享', name: '再續高郵州志_光緒九年', size: '888.97 MB' },
  { origin: '维基共享', name: '三續高郵州志_民國十一年', size: '477.29 MB' },
  { origin: '网络', name: '高邮州志_乾隆四十八年重修本', size: '222.57 MB' },
  { origin: '网络', name: '续增高邮州志_道光二十三年刊本', size: '63.66 MB' },
  { origin: '网络', name: '再续高邮州志_光绪九年刊本', size: '95.86 MB' },
  { origin: '网络', name: '三续高邮州志_民国十年刊本', size: '156.39 MB' },
]

export const HISTORY_LIST = [
  ['春秋', '吴邗沟地，越国并吴国后属越国'],
  ['战国', '楚并越属楚'],
  ['公元前 220 年', '秦始皇筑驰道通海滨，经过高邮'],
  ['秦王嬴政二十四年', '灭楚，筑高台，置邮亭，故名高邮，亦称秦邮'],
  ['汉高祖六年', '分置高邮县，是为今我市境内出现县级政区建置之始<br>此高邮县即今高邮市的最前身'],
  ['西汉', '先后属荆国东阳郡、吴国、江都国<br>武元狩五年，置高邮县，属广陵国'],
  ['东汉', '高邮县属广陵郡<br>东汉末，高邮县废'],
  ['三国', '地属广陵郡，先属魏，后属吴'],
  ['西晋', '复高邮县，属临淮郡'],
  ['东晋', '高邮县属广陵郡'],
  ['东晋、南北朝', '高邮西北（今金湖、天长部分）侨置幽、冀、青、并州及后魏平阿县<br>由此形成北阿镇（三阿），与平阿湖、下阿溪三者合称三阿等地名'],
  ['南北朝期间南宋', '置高邮县，属广陵郡，又划设临泽县，属海陵郡<br>南梁起，先后置广邺郡、神农郡，辖高邮县划设的高邮、竹塘、三归三县<br>临泽县仍属海陵郡'],
  ['隋', '竹塘、三归、临泽三县仍并入高邮县，属吴州（不久改称扬州），后属江都郡'],
  ['唐', '高邮县先后属兖州、邗州、扬州、广陵郡、扬州（均为现扬州）<br>玄宗元年，划江都、六合、高邮三县部分地区置千秋县，天宝七年改称天长县'],
  ['五代十国', '高邮县先后属吴都江都府、后唐东都（扬州）、后周扬州大都督府'],
  ['宋、元', '因置高邮军、承州、高邮路、高邮府<br>领辖过高邮、兴化、宝应三县，为淮扬间繁华之地'],
  ['宋开宝四年', '置高邮军，直属京师<br>诏：惟彼高邮，古称大邑，舟车交会，水陆要冲，宜建军名，以雄地望<br>军同下州高沙郡，辖高邮县<br>熙宁五年军罢，县属扬州<br>元祐元年，复置高邮军<br>建炎四年，升高邮军为承州，领承州、天长军，辖高邮县与兴化县<br>绍兴五年，废州，县属扬州<br>绍兴三十年，复为军，仍领高邮、兴化二县'],
  ['元至元十四年', '置高邮路，辖高邮、兴化二县<br>至元二十年，改为高邮府，辖高邮、兴化、宝应三县，属扬州路<br>至正十四年，张士诚在高邮建都，国号大周'],
  ['元末', '高邮改为散府'],
  ['明洪武元年', '置高邮州，领兴化、宝应二县，属扬州府<br>洪武四年，升守御所为高邮卫'],
  ['清顺治元年', '置高邮州，属扬州府，不久遂为散州'],
  ['民国元年', '废州为县<br>在中国共产党领导下的抗日战争和解放战争期间<br>高邮县澄子河以南地区曾先后属江高行政区、江都县<br>高邮湖西菱塘地区曾先后属天高县、甘泉县、东南县、仪扬县、仪征县'],
  ['中华人民共和国', '仍设高邮县'],
  ['1991 年 2 月', '经国务院批准撤县设市（县级）'],
  ['1991 年 4 月 1 日', '正式建高邮市，实行计划单列'],
]

export const ABOUT_LIST = [
  { icon: article, name: '建站始末', info: '本站创建历程', url: 'https://jisuowei.com/post/i7a46r' },
  { icon: article, name: '高邮地方志考录', info: '高邮方志可考记录', url: 'https://jisuowei.com/post/rv60m5'},
  { icon: github, name: 'GitHub', info: '本站代码仓库', url: 'https://github.com/Chisw/zhi.gaoyou.online' },
  { icon: email, name: 'i@jisuowei.com', info: '联系、支持与建议', url: 'mailto:i@jisuowei.com' },
]

export const PY_MAP = {
  '檕': 'jì',
  '栞': 'kān',
  '睂': 'méi',
  '歬': 'qián',
  '鍥': 'qiè',
  '圩': 'wéi',
  '柘': 'zhè',
}