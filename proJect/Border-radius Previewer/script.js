// script.js
// 初始化页面中的DOM元素
const previewBox =
    document.getElementById(
        "preview-box"
    );
const tlRadiusInput =
    document.getElementById(
        "tl-radius"
    );
const trRadiusInput =
    document.getElementById(
        "tr-radius"
    );
const blRadiusInput =
    document.getElementById(
        "bl-radius"
    );
const brRadiusInput =
    document.getElementById(
        "br-radius"
    );
const cssCodeElement =
    document.getElementById(
        "css-code"
    );
const copyBtn =
    document.getElementById(
        "copy-btn"
    );

/**
 * 更新预览框的边框圆角和CSS代码展示
 */
function updatePreview() {
    // 构造边框圆角字符串
    const borderRadius = `${tlRadiusInput.value}px ${trRadiusInput.value}px ${blRadiusInput.value}px ${brRadiusInput.value}px`;
    // 应用边框圆角到预览框
    previewBox.style.borderRadius =
        borderRadius;
    // 更新CSS代码展示
    cssCodeElement.textContent = `.preview-box {
    border-radius: ${borderRadius};
}`;
}

// 为所有输入框添加输入和改变事件监听，以更新预览
["input",
    "change",
].forEach(
    (eventName) => {
        [
            tlRadiusInput,
            trRadiusInput,
            blRadiusInput,
            brRadiusInput,
        ].forEach(
            (
                input
            ) => {
                input.addEventListener(
                    eventName,
                    updatePreview
                );
            }
        );
    }
);

// 为复制按钮添加点击事件监听，以复制CSS代码到剪贴板
copyBtn.addEventListener(
    "click",
    () => {
        navigator.clipboard.writeText(
            cssCodeElement.textContent.trim()
        );
    }
);
