class WindowManager {

    constructor() {
        this.windows = [];
        this.currentZIndex=1;
        this.taskbar=taskbar;

        this.windowOffset = 0;
    }

    createWindow(title, content, width = "500px", height = "350px") {

    const windowElement = document.createElement("div");

    windowElement.classList.add("window");

    windowElement.style.width = width;
    windowElement.style.height = height;

    windowElement.style.left = `${100 + this.windowOffset}px`;
windowElement.style.top = `${100 + this.windowOffset}px`;

this.windowOffset += 30;

if (this.windowOffset > 300) {
    this.windowOffset = 0;
}

    windowElement.innerHTML = `
        <div class="window-header">

            <span class="window-title">
                ${title}
            </span>

            <div class="window-controls">
                <button class="minimize-btn">—</button>
                <button class="maximize-btn">□</button>
                <button class="close-btn">×</button>
            </div>

        </div>

        <div class="window-content">
            ${content}
        </div>
    `;

    document.getElementById("desktop").appendChild(windowElement);

    this.setupWindow(windowElement, this.taskbar);

    return windowElement;
}

    focusWindow(windowElement){
        this.currentZIndex++;
        windowElement.style.zIndex=this.currentZIndex;
    }

    registerWindow(windowElement){
        this.windows.push(windowElement);
        console.log(this.windows);
    }

    makeDraggable(windowElement) {

        const windowHeader =
            windowElement.querySelector(".window-header");

        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        windowHeader.addEventListener("mousedown", (e) => {

            isDragging = true;

            offsetX =
                e.clientX - windowElement.offsetLeft;

            offsetY =
                e.clientY - windowElement.offsetTop;
        });

        document.addEventListener("mousemove", (e) => {

            if (!isDragging) {
                return;
            }

            windowElement.style.left =
                `${e.clientX - offsetX}px`;

            windowElement.style.top =
                `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {

            isDragging = false;

        });
    }


    makeMaximizable(windowElement) {

        const maximizeButton =
            windowElement.querySelector(".maximize-btn");

        let isMaximized = false;

        maximizeButton.addEventListener("click", () => {

            if (!isMaximized) {

                windowElement.style.top = "0";
                windowElement.style.left = "0";

                windowElement.style.width = "100%";
                windowElement.style.height =
                    "calc(100% - 55px)";

                isMaximized = true;

            } else {

                windowElement.style.top = "100px";
                windowElement.style.left = "150px";

                windowElement.style.width = "500px";
                windowElement.style.height = "350px";

                isMaximized = false;
            }
        });
    }


    makeMinimizable(windowElement, taskbar) {

        const minimizeButton =
            windowElement.querySelector(".minimize-btn");

        let taskbarButton = null;

        minimizeButton.addEventListener("click", () => {

            windowElement.style.display = "none";

            if (!taskbarButton) {

                taskbarButton =
                    document.createElement("button");

                taskbarButton.textContent = "MiniOS";

                taskbarButton.addEventListener("click", () => {

                    windowElement.style.display = "block";

                });

                taskbar.appendChild(taskbarButton);
            }
        });
    }


    makeClosable(windowElement) {

        const closeButton =
            windowElement.querySelector(".close-btn");

        closeButton.addEventListener("click", () => {

            windowElement.remove();

        });
    }


    setupWindow(windowElement, taskbar) {
        this.focusWindow(windowElement);
        windowElement.addEventListener("mousedown", () => {

        this.focusWindow(windowElement);

    });

        this.registerWindow(windowElement);

        this.makeDraggable(windowElement);

        this.makeMaximizable(windowElement);

        this.makeMinimizable(
            windowElement,
            taskbar
        );

        this.makeClosable(windowElement);
    }
}


// const windowManager = new WindowManager();