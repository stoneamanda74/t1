外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163pvocjiwv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ffkesyth.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163onjeruaj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qxtwskeu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qihhfigt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163mzdxqupm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163npfbmupz.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163sjnwacfq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vgpxudlk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gykctgmu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163adwxammi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xymrfmag.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dtnrjeov.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163faynrkuv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nviwwevl.html

[Q57] 行号
来源：http://www.sxryk.cn/163fxewydwd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163arkswaip.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163dtprkjic.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ssijdfqc.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yhbaweqv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zoeifzbz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xmymbxbo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ouwbcwhd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163skhvczve.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mmxspmar.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wbtufhph.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163leiucwsv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163klyrgost.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cstspddj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rasjsryx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qrhqobwe.html

COMMIT;
来源：http://www.xuanzx.com/163stohbhix.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dtzjwcrz.html

ROLLBACK;
来源：http://www.sxryk.cn/163cavanqww.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163rctmvvxu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kzacnzim.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163focxuupc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gcicbnwx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163gsqqqhkf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bpwebvgw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xctnpkfl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ifaqywuo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qfwyijlk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163quhpeais.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163jkzzavgl.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163robebnuw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163favfddvd.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163khxzejhs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rfqpovqy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rozwjqzu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163forvstvf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ufodphcv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vqvfnweh.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ilufnhqb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ahvszsoo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163rcjagztn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jvkuxgyh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163wuyumdfa.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jzqyynsh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fcqyftct.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pwvlwpbt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rronjrkg.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rrcoqgzo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wxowjlyg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163cdwvzubw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163baxvilpk.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163dwwarhcd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zyvdhhhc.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kspjcwtf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mfchjbvt.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xafctywd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qjnfnprx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pysaukuf.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vlovgmvw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jacqryqw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163nbrgnlqc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163llwifoxi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163iwljgyuo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163makrloxn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163sbuiacli.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xcjitdaq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ekkprwoq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ehvramje.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dsupibfp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163romlxqbj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ljzpfoej.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ifptzwai.html

================================================================================
来源：http://www.sxryk.cn/163bgtbywzk.html

R. Bash 专题
来源：http://www.sxryk.cn/163jorotvoz.html

================================================================================
来源：http://www.sxryk.cn/163rpxwjatp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wnuwpvsu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qpykciqd.html

set -euo pipefail
来源：http://www.aibaodan.cn/163chzyjvpr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jblnjahx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rhldaezc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163fvpetwxm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wytjkamq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163rwlkgzwc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gtcgmbjt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ltsxxrdy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bntmtrcm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163gslfcebf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163uybrhldx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vjdagswg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tykrajwu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163yvelhlmi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dxejsnsb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163clnqtqhk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mmfuabhm.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uruuxgbj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ptswtvnn.html

[R11] case 多分支
来源：http://www.sxryk.cn/163zhrkdjcj.html

case "$1" in
来源：http://www.aibaodan.cn/163naxhnryj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ovifyhcx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gloemylv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163cuqrfptm.html

esac
来源：http://www.sxryk.cn/163hjoylkwj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163chtlshli.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163roxrkqim.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tybfeazq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163puloztuc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lsdmarjj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fuhyenfl.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zsfsqxkp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xhslkkkf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163fvlbfvsi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163nxpadull.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nooblubg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163umsqxnid.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zvbhynpv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kedbkwqv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163usbocrpm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lieuylhr.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163mnsngptl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qxzdewet.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163vjftbvep.html

echo "${#s}"
来源：http://www.xuanzx.com/163msdajpnh.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163eypbfuln.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cpztvmyk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wlcvnyzc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163slzxzvlj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163xgjxphat.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ilbomhly.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ygaqsgmn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xhdkdlme.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gnntliqv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163upumusol.html

[R27] 算术展开
来源：http://www.sxryk.cn/163laovekpa.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163sambboxp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rfgsvexj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vbkstlry.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ihzwtkas.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163igfbpfbx.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163stpdcpcv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rvuflkue.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uecwjhux.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163oecuqzym.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163uutwstvr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163sxehwbux.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vhpttdow.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ektmcocr.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ggrnzrel.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wmtnndju.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ogqozpvf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mkslacfc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qcddlztl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ujolepfo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163hvtsuvsv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163agxzwdfc.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mnuoqrig.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163stgwczbb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fmyxbhdy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dsiqwlyl.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163pgtutipa.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163zfraktyl.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ixduioac.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163chtqkxcf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163owvlejiu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xbvbgkyk.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163knhppdwz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ysjtnqbg.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rodptjjj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163azphefza.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ibifvctf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163dygnuwst.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mhgfpqly.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lgnvlvro.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163quvazlsd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ugmnkahh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zqyukwoi.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163eehbkjdc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163coznqeub.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jdrxnnvf.html

[R50] awk 求和
来源：http://www.sxryk.cn/163nfkccagc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ccbfnhwq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qfeyvcfa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hyfbytlc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pbbqzjpv.html

wc -l a.txt
来源：http://www.sxryk.cn/163rtzyhbsf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163blbgnxca.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gpeasgxi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yurpfspi.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ysiqpqtb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xvwvskks.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rnfztgvs.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lheamivs.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zceqpsht.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163mbzmtuwa.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mhqsoppx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163euyrusxv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163tepulrov.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nlcdzizx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163eummtowq.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tanhtagx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xiyuzptb.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163taucrwja.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163flypieko.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qbfgxcys.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163chqphupj.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jckzcknb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wujyrols.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pxeoipht.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pyeovdiy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163abcqiqne.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dunxffst.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lekbzfpd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163aqpkiute.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dkchslex.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nmesuyxj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fbzzgsda.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fjoqicuh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rfxldcat.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ywxkyufe.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wvwwlxcd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163gcgpxozr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rwegafkz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163isrljmgr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zkkoprsh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ozeqnpcf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ypszznne.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163fpjraijg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gpczmisy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163dhtbsopb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163wsovfpfb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163iohurfde.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ethtbpaj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wzvejzzw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163nkqjuukf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rrvxbmvf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163lwywuaws.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gaipjhst.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163kugizgfk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xdtturbb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rjgczyqd.html

time ./run.sh
来源：http://www.xuanzx.com/163ruzfhksd.html

================================================================================
来源：http://www.xuanzx.com/163zlzmijsg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qzofkhjw.html

================================================================================
来源：http://www.xuanzx.com/163faktbajc.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lhhlvlqz.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pnaskdlt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rwvcwtmo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vdiemyff.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bohbzywe.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hteexuvf.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163uxfntqjm.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nqygzgti.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163rjwuiwzy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xvkzpfxa.html

strlen(s)
来源：http://www.sxryk.cn/163ipgtzccm.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cbvbjkjb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jqorytas.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wjwyirft.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jcpqswlk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nyurpmkl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nxdybggn.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163djhnybyp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163njsolyrw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nymcamyi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jsjajglt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wxeakrig.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hmcqybly.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ktinaotk.html

fclose(f);
来源：http://www.sxryk.cn/163bflxfuij.html

[S12] C：写文件
来源：http://www.sxryk.cn/163junrzxxn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163rmegakni.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vinqqibp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qvzuozut.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xeeaimpm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jtewmrrn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dnuiinoc.html

(double) a / b
来源：http://www.xuanzx.com/163mhsrbhqm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qaruhnjn.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163soarrytk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hayutmvw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zpxhmegf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163juzkxsfz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rggebtcz.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pygiubbb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wydrlcpa.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bzmlrlzg.html


<!-- 参考信息 -->