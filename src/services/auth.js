export default function signIn() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve:({
                token: 'djskajdi424242423jk2j32kj3k2j3k2j3k23lll3j3';
                user: {
                    name: 'Luis',
                    email: 'luis.rabock@hotmail.com'
                }
            });
        }, 2000);
    });
}