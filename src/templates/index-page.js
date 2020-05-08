import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Center from '../components/Center'
import FA from '../components/FA'
import Statistics from '../components/Statistics'
import { LINK_LIST } from '../utils'
import logo from '../img/logo.png'
import { VerticalNav } from '../components/Navbar'

export const IndexPageTemplate = () => {

  return (
    <>
      <Center
        className="h-100vh bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(./img/banner.jpg)`, }}
        innerClassName="flex flex-col"
      >
        <div className="h-2/5 flex justify-center items-center">
          <div className="text-center font-kxzd">
            <img src={logo} alt="logo" className="inline-block w-40" />
            <h1 className="mt-2 text-xl text-gray-500">華夏一郵邑 神州無同類</h1>
          </div>
        </div>
        <div className="h-2/5 flex justify-center items-center">
          <VerticalNav />
        </div>
        <div className="h-1/5 flex justify-center items-end text-2xl text-gray-800">
          <FA icon="angle-double-up" className="animation-bounce" />
        </div>
      </Center>
      <Center>
        <div className="mt-4 font-kai">
          <p>春秋，吴邗沟地，越国并吴国后属越国。</p>
          <p>战国，楚并越属楚。</p>
          <p>公元前220年秦始皇筑驰道通海滨，经过高邮。</p>
          <p>秦王嬴政二十四年，灭楚，筑高台，置邮亭，故名高邮，亦称秦邮。</p>
          <p>汉高祖六年，分置高邮县，是为今我市境内出现县级政区建置之始，此高邮县即今高邮市的最前身。</p>
          <p>西汉，先后属荆国东阳郡、吴国、江都国。武元狩五年，置高邮县，属广陵国。</p>
          <p>东汉，高邮县属广陵郡。东汉末，高邮县废。</p>
          <p>三国，地属广陵郡，先属魏，后属吴。</p>
          <p>西晋，复高邮县，属临淮郡。</p>
          <p>东晋，高邮县属广陵郡。</p>
          <p>东晋和南北朝，高邮西北（今金湖、天长部分）侨置幽、冀、青、并州及后魏平阿县，由此形成北阿镇（三阿），与平阿湖、下阿溪三者合称三阿等地名。</p>
          <p>南北朝期间南宋置高邮县，属广陵郡，又划设临泽县，属海陵郡；南梁起，先后置广邺郡、神农郡，辖高邮县划设的高邮、竹塘、三归三县；临泽县仍属海陵郡。</p>
          <p>隋，竹塘、三归、临泽三县仍并入高邮县，属吴州（不久改称扬州），后属江都郡。</p>
          <p>唐，高邮县先后属兖州、邗州、扬州、广陵郡、扬州（均为现扬州）。玄宗元年，划江都、六合、高邮三县部分地区置千秋县，天宝七年改称天长县。</p>
          <p>五代十国，高邮县先后属吴都江都府、后唐东都（扬州）、后周扬州大都督府。</p>
          <p>宋、元时期，因置高邮军、承州、高邮路、高邮府，领辖过高邮、兴化、宝应三县，为淮扬间繁华之地。</p>
          <p>宋，开宝四年置高邮军，直属京师。诏文为：惟彼高邮，古称大邑，舟车交会，水陆要冲，宜建军名，以雄地望。军同下州高沙郡，辖高邮县；熙宁五年军罢，县属扬州；元祐元年，复置高邮军；建炎四年，升高邮军为承州，领承州、天长军，辖高邮县与兴化县；绍兴五年，废州，县属扬州；绍兴三十年，复为军，仍领高邮、兴化二县。</p>
          <p>元，至元十四年，置高邮路，辖高邮、兴化二县；至元二十年，改为高邮府，辖高邮、兴化、宝应三县，属扬州路。至正十四年，张士诚在高邮建都，国号大周。</p>
          <p>元末，高邮改为散府。</p>
          <p>明，洪武元年，置高邮州，领兴化、宝应二县，属扬州府；洪武四年，升守御所为高邮卫。</p>
          <p>清，顺治元年，置高邮州，属扬州府，不久遂为散州。</p>
          <p>民国元年，废州为县。在中国共产党领导下的抗日战争和解放战争期间，高邮县澄子河以南地区曾先后属江高行政区、江都县，高邮湖西菱塘地区曾先后属天高县、甘泉县、东南县、仪扬县、仪征县。</p>
          <p>中华人民共和国成立后仍设高邮县。</p>
          <p>1991年2月，经国务院批准撤县设市（县级）</p>
          <p>1991年4月1日，正式建高邮市，实行计划单列。</p>
        </div>
      </Center>
      <Center>
        <Statistics />
      </Center>
      <Center>
        <div className="-mx-2 flex flex-wrap justify-center">
          {LINK_LIST.map(link => (
            <a
              key={link.url}
              className="list-item bg-white mx-2 w-1/2 md:1/4 xl:w-1/5 hover:bg-black-100"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.logo} alt="Placeholder" />
            </a>
          ))}
        </div>
      </Center>
    </>
  )
}

export default function IndexPage({ data }) {
  // console.log(data.markdownRemark.frontmatter.path)
  return (
    <Layout hideNavbar>
      <IndexPageTemplate />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        path
      }
    }
  }
`
