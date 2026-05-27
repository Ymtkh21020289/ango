import time
import sys

# タイプライター風に文字を出力する演出用の関数
def print_slow(text, delay=0.03):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()

def main():
    print_slow(">>> システム起動中...")
    time.sleep(1)
    print_slow(">>> 昭和大学 2008 生物学アーカイブより、一部破損したデータを検出。")
    print_slow(">>> データ復元のための暗号解読シーケンスを開始します...\n")
    print_slow("-" * 50)
    time.sleep(0.5)

    # ==========================================
    # ここに問題文を設定します。
    # 穴埋め部分を [ 暗号A ] のように記載してください。
    # ==========================================
    target_text = """
【極秘アーカイブ：2008-Bio-Q1】
植物は光エネルギーを利用して、二酸化炭素と水から有機物を合成する。この働きを『 [ 暗号A ] 』という。
また、合成された有機物は細胞内で分解され、生命活動のエネルギー通貨と呼ばれる『 [ 暗号B ] 』が生成される。
近年、大気中の二酸化炭素などの増加により、地球全体の気温が上昇する『 [ 暗号C ] 』が進行し、生態系への影響が懸念されている。
"""

    # ==========================================
    # ここに正解を設定します（リスト形式で複数正解を設定可能）
    # ==========================================
    answers = {
        "A": ["光合成"],
        "B": ["ATP", "アデノシン三リン酸", "atp"],
        "C": ["温室効果", "地球温暖化"]
    }

    # 破損データの表示
    print(target_text)
    print("-" * 50)
    
    # 暗号解読ループ
    for key, correct_list in answers.items():
        while True:
            # ユーザー入力
            user_input = input(f"[INPUT] 暗号 {key} を解除するキーワードを入力せよ: ").strip()
            
            # 正誤判定
            if user_input in correct_list or user_input.upper() in [c.upper() for c in correct_list]:
                print_slow(f"  >>> SUCCESS: 暗号 {key} の解除に成功！\n", 0.02)
                # 穴埋め部分を正解で置き換えていく演出
                target_text = target_text.replace(f"[ 暗号{key} ]", f"【 {user_input} 】")
                break
            else:
                print_slow("  >>> ERROR: キーワードが一致しません。文脈を再確認してください。\n", 0.01)
    
    # クリア後の演出
    time.sleep(1)
    print_slow(">>> すべての暗号が解除されました。データの完全復元に成功しました。")
    print_slow("-" * 50)
    print_slow("【復元されたデータ】")
    print(target_text)
    print("-" * 50)
    print_slow(">>> ミッションクリア。お見事です、エージェント！")

if __name__ == "__main__":
    main()
