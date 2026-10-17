外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lfkeebqt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163twnudrrr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163atpglsxq.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hrqohzzk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nrhrdjbh.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lclrprtz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163eydlcadq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lybdtjab.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163gcikuyny.html

[Q54] 清空表
来源：http://www.sxryk.cn/163qtxdvozl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dclfkhmq.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163cszqhhvo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tyjgaqbu.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rzcdimoc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dzkihstv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163evhtmmag.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kdqshkbs.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mqoqlgqt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mckqqgoz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qszrvvgy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ejxwobjm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163udectzpo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163uezmrdot.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bawonnon.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jgmmgotb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163czvctack.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ktfabdif.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163plofxljh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mqdaozvm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163srdpepjg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vzistino.html

COMMIT;
来源：http://www.aibaodan.cn/163rpshybma.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163htyplmwl.html

ROLLBACK;
来源：http://www.xuanzx.com/163dtydvgxj.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163djtxcgla.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mrmibgxd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163etkitlcc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ksrabpyd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163hewqdoeq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wyguifvp.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lffigwlu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bbvrnwnt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163adaucmhr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163oqakdseo.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163pucziwfc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xvljsvmw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ibvqvlwx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tpgponhu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163xzyxugfi.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xddtgiiq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rfzobalt.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cclvadyo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nublmyji.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vzmzkhdq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xervnhab.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163kzurubxb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ewuekgvq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ktntqwng.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163eyowrbbv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163zddcuqps.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163smiamsxq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163uvfdqlku.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163aysiewcx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163pcvnxgbq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163aodzpwnz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163meouonps.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163neljaycr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jykqcvlc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cxejdukv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mzpmjoed.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qkqgpodx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ccwokith.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zolwdqnl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ghfcrraj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bwzxiucd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163anczihvl.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163livruixd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ipqjyfgo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163idjusaoz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xcvktjej.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bxngfffb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163asoenrtq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qtbznnut.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163cgaxtllo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rpfcwucc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yminbinv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163pbpelssa.html

================================================================================
来源：http://www.aibaodan.cn/163rnmcqckk.html

R. Bash 专题
来源：http://www.sxryk.cn/163lnzxmcoa.html

================================================================================
来源：http://www.xuanzx.com/163bbnqdoij.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vpcgckrz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bxzslwpp.html

set -euo pipefail
来源：http://www.sxryk.cn/163jwxqlpyo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vzrrfevo.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ozqloaxa.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jhvaudtm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163begverbx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mmejfjzz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mgkuyezo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yxqgukzi.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kvrxvcdk.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ljctuzim.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vsahirbi.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163etwssacw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ghrglwjh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163jhztkbik.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fxnyrlpp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xnmuklrv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163aysszmxd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163klllhocm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gjkqhpth.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163pwswwpze.html

case "$1" in
来源：http://www.xuanzx.com/163fonkjvfd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ymauxhka.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lovjoncs.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mdnqjvlv.html

esac
来源：http://www.xuanzx.com/163peqzgjqk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hlknhcsq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wnoldavl.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163thkoogrg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163isdvnusn.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163bwzugjgi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tcnptpdm.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163grrjcygi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163tfvwhbtw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163fvcqbagq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ajkaqfmf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163iicwsard.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nnxbnudi.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nwzfztqr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163uybpsiab.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163dimzhpnt.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163invsnkzk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bbgjhivj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163cngccszc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163yrkpziti.html

echo "${#s}"
来源：http://www.xuanzx.com/163xylxzhyg.html

[R22] 截取子串
来源：http://www.xuanzx.com/163blwkqcmt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xntbgcuv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163cfyuyfoe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cgamkxii.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cwjxccii.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fseaosrw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gdtnascf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hlrvqupj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mbregnmt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163egsqyjym.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bjevggnz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ogpdyyiv.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163thsigatk.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163itnvyjhf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163erqlsyiv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163bwdujkne.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163asctntzp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tzqslslo.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tonmbzpo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jmxfitwa.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cxnrrvem.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163bqwurmsa.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163cqavhujc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xtpjjlgc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dfeqneix.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ssyeovbh.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vyoaisok.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zuiijtph.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ykzwxemg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163mnvejxrp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ocqwtypu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ifvkqqog.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hyidlpni.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mqbhfkbw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gbgyyllx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163brczqdnd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163prilcsjy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163iitcqrsa.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lenzjede.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mrhjoxdu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xamjurum.html

wc -l < a.txt
来源：http://www.sxryk.cn/163mfgahrww.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163sftrfgqt.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vewugqwc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mhrtojah.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ampujggh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ziqiuusc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163lstlkxwx.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163rkwlxwne.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yczyowdc.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ebssjzmz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163btvjhyph.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163jaxldzxv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163lmmmqmbv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163inxnyvmw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163agkkpxvp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163tczdatim.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163rtxjmsnb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163mlhrrvwk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163alkgwxmi.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vpjmptbn.html

wc -l a.txt
来源：http://www.sxryk.cn/163gyrviycx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163izfchntc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vrytgrmm.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163koaoyhlf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163eycosfwq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163odtcuggb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tiqaaqvr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jfguxpvj.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kcprprob.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ezewlztb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zytculbv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xifcwjbs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163yxpjjdrt.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163uxwjitcm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163usxslgzc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163slstnpyx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ihbfscfr.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163didsrlji.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cyllgiub.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163oozfcwty.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zkbgfahp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163umfdoirx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ytxnrnkm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ksnuvioz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dfbqcleq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163gmnlfsik.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ifcoasus.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vawzayzz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163evjgqihd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163hrboynsc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wqdteulc.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jrlouxnh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163icmukarf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163npxbknak.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163cavkguuq.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wkifrzzv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163owndbiyv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nvgztyty.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tpnyueuc.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163jicnkgli.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mxvqlmua.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163otvtywiw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qfprpaco.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zahipnmj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ldaitfco.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jkxmtoaj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fzvfcers.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gbnyzgso.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qowhgmee.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wmgqmfrg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dmzhbqgu.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163itrrmkil.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cukhmbmz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163oezgqkst.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bgfljgas.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ilqhtlsx.html

time ./run.sh
来源：http://www.xuanzx.com/163wrqcijld.html

================================================================================
来源：http://www.sxryk.cn/163rarkvntb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163hnuqxeua.html

================================================================================
来源：http://www.xuanzx.com/163pkzjmqpf.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163haisnwua.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bxiqrrtu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qavmtaap.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163trymuott.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163uzarouiz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ahffqqrd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xciwgiuz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163tgsnxgta.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nlzdzbwb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163yuibwdxh.html

strlen(s)
来源：http://www.sxryk.cn/163njxivdvc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163umpesnjd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163oikdmawn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lyornvho.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163bvtbbsrj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cefwpnvp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mpjziloo.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163unnpbqus.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163piqvegfc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kqdtbnmp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163umcckbyv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163sdmfnrqu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163cnnqyisd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mkkvdckh.html

fclose(f);
来源：http://www.xuanzx.com/163favcfcyv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zzcyecut.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fsuxzpbz.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163cvjzgzmh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mbtekuif.html

[S14] C：枚举
来源：http://www.sxryk.cn/163anrfamac.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163drnrqlsy.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kqqrbpli.html

(double) a / b
来源：http://www.sxryk.cn/163mbnxqwry.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wibntlhm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qgytbzlp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gyisefar.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lnqyvxix.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fcqrjxkq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vqoleedk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163hgrosdmw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ulgyexqo.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lepnkfrz.html


<!-- 参考信息 -->