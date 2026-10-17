外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kfkxzoed.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ktbbjjho.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kqhiyqvp.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163sswolxlz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jqfrqgjc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xdseyadf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163izfdbqfa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163heqojqxi.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ugemcngr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163vvchnglf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163sbpojkpz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hqozfvbx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163usaoeuli.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qapsapkj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qgjmznxu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hhxgpkji.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dwohlhdn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163weifbxiu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kmtwmazs.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163nppjgouh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ayyolwvy.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xedmhpvk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rikxiceh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163uqgeyfad.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163cwsmdjky.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ctrwgjpt.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pqhckyra.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163iyoowwue.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163efqmkwhx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163rxjaysgv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ckxearsj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rwcjebqi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163eizuazno.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vmvndmdj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163uszpxuyo.html

[Q57] 行号
来源：http://www.xuanzx.com/163nzpseogi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fiqkrcin.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tblqnstz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qhmiackl.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163zzyidhar.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nexukaiy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163iwnawpdl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163fssyqszj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ztkemdkx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163wyhdoemd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vtavofjq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jxgvsqoc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wnaxcyfd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dfnkrftd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zafjrbcj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qmfwxrio.html

COMMIT;
来源：http://www.xuanzx.com/163ygevcqjk.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163oimlgzkq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163mfybyslk.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ygedyzyr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ecqyibpm.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163yqjbkcmv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163tcserrzz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fxstluey.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zqwqknnk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vnidjgjx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163obwbmpns.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163peammvqz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163uqdaykpv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163txdzyosu.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163veluegbw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mqyxoonp.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ufbjqzji.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163fftpqocl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163eupqgjoz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163okvhvgnt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163nuekveug.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163acogslhx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163kuhnaxze.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qhcioymy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163pofqbyit.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163grjjdlcm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vewuvffq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vmvdfcyv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jngcebqc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163crbcfkic.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qxfozmqz.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163elofapaf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tvqcwljq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163uoxemhfg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163hpjczgtf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163krudlrdf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ssdxzxoi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gqencsbs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163iykcuvkz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xtgrwlmv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ncbturwn.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ojtfmdlq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bnmrrjts.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163deeiacpp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163llefnhab.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jshxifgl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163eqcrhkej.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163aacoizcz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rdesmhll.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nwwjnvfx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163krewwjjm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ysjsvkyq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zieyktie.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wggfeaoq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qzmfxtme.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xpkgpnlb.html

================================================================================
来源：http://www.sxryk.cn/163spxaebio.html

R. Bash 专题
来源：http://www.sxryk.cn/163lhhznlia.html

================================================================================
来源：http://www.sxryk.cn/163kadngbpi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bovwnecm.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ebztymgv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163tnsbpjjs.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163smeewyij.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hpkxascl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163uryvmjsm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lwlustcr.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bktsfswq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ujjurwvn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163xbariyjc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163syvrajph.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163bdomhupp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hncxgibd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163iwitzmxz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kcsvnsuv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wzxzwopo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zsjbyqea.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163uoeinlly.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uhmmdwsy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163vspbatci.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163epegfbuc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163uxegdxzr.html

case "$1" in
来源：http://www.xuanzx.com/163oyautuvv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wnfthriw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lmhfwvid.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uqsgjquu.html

esac
来源：http://www.xuanzx.com/163ptpauakf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fdvpnoza.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ybcfiuiw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wssjzhhr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mxgrprnz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zadzxqcu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gsikvgvh.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163uwrwbbzf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163fbnpjrdf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mjoaxykg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gzemsfew.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ezkvhplw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163guilyukz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jkehpvky.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163bdhpeosy.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yuqngltu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163oamiereq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rqetvfeh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vjiooane.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fwolefjg.html

echo "${#s}"
来源：http://www.xuanzx.com/163tmwqyvfc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163avdylhoj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163craqwzel.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163htrzpvsk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rgbwixhr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163eklpadlg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163geexicbk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qnekmnek.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fulnopun.html

[R26] 命令替换
来源：http://www.sxryk.cn/163qhlzztta.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xokwdgqi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bjilpnoh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163azhjwror.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qumsbotg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163emnllcwx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163obsxyfrc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163voyruuyr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ciynjmmz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163otgjsxmn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jvwnlivv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nsniaplq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kxiskzza.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uagaavoe.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163upokjscs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163amwfzpgf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jvonsesv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163owqtlcyb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163usojzcrk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lwbgropy.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ifhmoxaq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163exqxvvgv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ieogtgaw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163raydlcpr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163sezatoqn.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163stngdgtt.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163prhxvtfx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jiwqbcdh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dnxerpfn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ldxbwxhv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163otpysfni.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ogbxbjlz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wcgsodvn.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dutekvia.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163iiodrrhi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163czizyitx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163unyohbqj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zwgcromw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163dyvdeytq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cgtnjhyx.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163krdzifzq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163tgykzwvj.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dygltgsb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wcyjuzac.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tsuflhsy.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163tbgbouqw.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163usmwbehs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dqwnddot.html

[R50] awk 求和
来源：http://www.xuanzx.com/163thwoykjl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163crqifvqs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163baekysmc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nebkqyuc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vwvqufnf.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xbfdtdwd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163cqceabls.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lwlfczhz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163edsdevac.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yaldzayn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163lvvckaaw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163vaczpjup.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163yiyitdly.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163klnlqvhf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163rgzzorvk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fwvpfynw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yiooiweb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hievnmon.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163olswrtqf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163zqggbthu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fmiwizcx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163axkwacas.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ynerjcrk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ezdqjokh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rhoxxnzr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tvtulnuz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ujpvvewm.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163itxgmscc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163uhglvztd.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163virvuazk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163deiwrmdp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yurrlkpo.html

[R66] 定时任务
来源：http://www.xuanzx.com/163chwxplyx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fsuzgeaw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163puhxohey.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vsvimhcl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163exigfvda.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163clclodlb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iosrgnrl.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yawoxfdr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yzblothw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vpigjlyt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zhunbuyl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163auzcybvb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uqhmakxn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ltppkrwm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fpnoxwzw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163pvyxruch.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vhsfneat.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wzggxxms.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lxpgcknq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ymxjixfe.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lboakiwd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163eafrirgq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ccxrwcpi.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fucqkcbs.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163icyalpux.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163opqwttjw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163elcttpbw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fzdpqwgs.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163scefymad.html

time ./run.sh
来源：http://www.sxryk.cn/163pzlumsos.html

================================================================================
来源：http://www.aibaodan.cn/163soubgnbo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fomqgtct.html

================================================================================
来源：http://www.sxryk.cn/163qybpmlup.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163alpnqzqz.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qqmswomq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pzwbreyo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hkgwbeqe.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pmegujcx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xqhjksgj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163lkzvbpdy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ambewgfx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zeyezzek.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163bwccjocd.html

strlen(s)
来源：http://www.sxryk.cn/163vduftbag.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163sxdibjll.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wyvdvcqk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163rnyeosch.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163opynsynf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bzqwdqhb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bcpzqlkp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hubckrnq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163putkyvvs.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qvxodlwm.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163dqspwhkh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wzonqcyu.html


<!-- 参考信息 -->