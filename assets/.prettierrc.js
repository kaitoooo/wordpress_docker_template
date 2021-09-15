const config = {
    semi: true, // ステートメントの最後にセミコロンを追加
    singleQuote: true, // //シングルクォートを使う
    tabWidth: 4, // インデントのスペースの数を指定
    trailingComma: 'es5', // 末尾のカンマの設定
    useTabs: true, // スペースではなくタブで行をインデントする
    printWidth: 120, // 折り返す行の長さを指定
    endOfLine: 'auto', // 改行の文字コードを指定
    overrides: [
        {
            files: ['*.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
