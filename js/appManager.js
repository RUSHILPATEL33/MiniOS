class AppManager {

    constructor() {
        this.apps = [];
    }

    registerApp(app) {
        this.apps.push(app);
    }

    getApps() {
        return this.apps;
    }

    launchApp(appId) {

        const app = this.apps.find(
            app => app.id === appId
        );

        if (!app) {
            console.error("App not found:", appId);
            return;
        }

        app.launch();
    }
}

const appManager = new AppManager();