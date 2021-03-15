import VueCookie from 'vue-cookie'

export default {
    validate() {
        let status = VueCookie.get('isLogin')
        return !(status === undefined || status !== "true");

    },
    login() {
        VueCookie.set("isLogin", true);
    },
    logout() {
        VueCookie.delete("isLogin");
    },
    register() {
        this.login();
    }
}