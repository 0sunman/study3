import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";
import PageWrapper from "../Component/Common/PageWrapper";
import Content from "../Component/Common/Content";

const SimplePageTemplate = ({children})=>{
    return (  
    <PageWrapper>
        <Header/>
        <Content>
            {children}
        </Content>
        <Footer/>      
    </PageWrapper>
    );
}

export default SimplePageTemplate;