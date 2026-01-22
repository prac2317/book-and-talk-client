import * as styles from './createInfoWindowContent.css';

export function createInfoWindowContent(addressName: string) {
    return `
        <div class="${styles.container}">
            <div class="${styles.infoWindowBox}">
                <h4 class="${styles.title}">${addressName}</h4>
            </div>
            <div class="${styles.tail}"></div>
        </div>
    `;
}