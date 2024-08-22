import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

function subscribeToChannel(channel){
    function setDetails(id,json){
        const db = getDatabase();
        set(ref(db, 'database/users/' + id+'/subscriptions'), );
    }
}

