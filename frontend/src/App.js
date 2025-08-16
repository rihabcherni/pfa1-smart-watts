import AdminLink from './Link/AdminLink'
import AgentLink from './Link/AgentLink'
import ClientLink from './Link/ClientLink'
import InternauteLink from './Link/InternauteLink'
import './Styles/App.css';
import './assets/fonts/Anuphan-Light.ttf';
const AppRoutes=()=> {
	if (window.location.href.includes("http://localhost:3000")){
		window.location.replace("http://127.0.0.1:3000","http://localhost:3000");
	}
	if("auth_token" in localStorage){
		if(localStorage.getItem("Role")=== "administrateur"){
		    return <AdminLink/>	  
		}
		if(localStorage.getItem("Role")=== "client"){
			return <ClientLink/>	  
		}
		if(localStorage.getItem("Role")=== "agent-maintenance"){
			return <AgentLink/>	  
		}
	}
	if (!("auth_token" in localStorage)) {
	   return <InternauteLink/>
	}	
	else return null
}
function App() {
  return (  <AppRoutes/> );
}

export default App;
