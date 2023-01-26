import { useTranslation } from 'react-i18next';

function MainContent() {
    const { t } = useTranslation();
    return (
        <main>
            <h2>{t('main-page.content')}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla. Facilisis volutpat est velit egestas
                dui id. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sit amet est placerat in
                egestas erat. Arcu bibendum at varius vel. Etiam erat velit scelerisque in dictum non consectetur a.
                Ornare lectus sit amet est. Ornare quam viverra orci sagittis eu volutpat odio. Habitant morbi tristique
                senectus et netus.</p>
            <p>
                Mi bibendum neque egestas congue quisque egestas. Risus pretium quam vulputate dignissim suspendisse in
                est. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Erat imperdiet sed euismod
                nisi. Vulputate ut pharetra sit amet aliquam id. Turpis egestas pretium aenean pharetra. Adipiscing elit
                duis tristique sollicitudin nibh sit. Pellentesque pulvinar pellentesque habitant morbi tristique
                senectus. Viverra suspendisse potenti nullam ac tortor. Mus mauris vitae ultricies leo integer. Faucibus
                interdum posuere lorem ipsum dolor sit amet. Sed nisi lacus sed viverra tellus in hac habitasse. Nullam
                vehicula ipsum a arcu cursus. Lorem donec massa sapien faucibus et molestie ac.
            </p>
            <p>
                Vitae sapien pellentesque habitant morbi tristique senectus. Pellentesque sit amet porttitor eget dolor.
                Sollicitudin tempor id eu nisl nunc mi. Nisi porta lorem mollis aliquam ut porttitor leo a. Ac placerat
                vestibulum lectus mauris. Pellentesque habitant morbi tristique senectus et netus. Sed sed risus pretium
                quam vulputate dignissim. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus
                faucibus. Pellentesque habitant morbi tristique senectus et netus. Sapien faucibus et molestie ac
                feugiat sed lectus. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Amet dictum sit amet
                justo.
            </p>
        </main>
    )
}

export default MainContent
