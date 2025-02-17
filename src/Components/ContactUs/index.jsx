import ContactUsEl from "../../Elements/ContactEl"
import FooterEl from "../../Shared/FooterEl"
import LayoutEl from "../../Shared/LayoutEl"



const ContactUs=()=>{
    const display=(
        <>
          <LayoutEl>
             <ContactUsEl/>
             <FooterEl/>
          </LayoutEl>
        </>
    )
    return display
}
export default ContactUs