// tailwind.css の生成設定（README の「スタイルの再生成」参照）
module.exports = {
    content: ['./gymnastics_delay_cam.html'],
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#081426',
                    900: '#0f2342',
                    800: '#16325c',
                    700: '#1e4278',
                },
                brand: {
                    orange: '#ea580c',
                    orangeHover: '#c2410c',
                    amber: '#f59e0b',
                },
            },
            fontFamily: {
                // Webフォントは読み込まず、端末に入っている日本語フォントを使う（Android は Noto Sans CJK）
                sans: ['system-ui', '-apple-system', '"Hiragino Sans"', '"Noto Sans JP"', '"Noto Sans CJK JP"', '"Yu Gothic UI"', 'Meiryo', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
