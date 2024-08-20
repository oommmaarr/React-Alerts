import Alert from'./components/Alerts/alert'
import { Ban, BellRing, CheckCheck, NotepadText} from 'lucide-react';
const App = () => {
   return (
    <div>
     <Alert type='alert-wrapper' icon={<BellRing/>} title='Upgrade Your Plan'/>
     <Alert type='alert-note' icon={<NotepadText />} title='Note'/>
     <Alert type='alert-danger' icon={ <Ban />} title='Something Went Wrong'/>
     <Alert type='alert-success' icon={ <CheckCheck />} title='Success'/>
     {/* <Alert type='alert-wrapper' icon={<BellRing/>}/> */}
     </div>
  )
}
export default App
