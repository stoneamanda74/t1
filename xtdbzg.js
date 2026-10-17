外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rkufakcd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kiatwief.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163moaxtyrs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163auojntzz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163doqayuvp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tbbyvwbq.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lhrgxjkw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sbdrmqtf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vecrjfkx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mfjysamg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163oyrpvsyg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hiixzles.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oriimdem.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gddnwubg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nhbuxoit.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163meuoutkh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163pptrjkif.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xfireuia.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fubkdflg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163kksxfjpd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163xvucivyh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jmwobucq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wyttsfsj.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ysbmclzm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ywpsifwk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vdoqkbga.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nqwjxfxs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163dslqxelm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zhjalxbf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163atdelzeq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163lgczosyf.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ftlbkgul.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kbwjjxtu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163iltidgnb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163pbywmwsp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163gfjoqyes.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163miutprng.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ohroywsu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lvwsbsiz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zhwkegtz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163feszvuvc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163xxiwybuj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wmhlccpb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tyqovhmv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zhyfmlmt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163znzzvnmx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ukyiveul.html

COMMIT;
来源：http://www.sxryk.cn/163ykdyfokh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bhysaxcv.html

ROLLBACK;
来源：http://www.sxryk.cn/163vpcszdbk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163veirpwcs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163skvtibdy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163eswlorla.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rbjegxll.html

[Q68] 保存点
来源：http://www.sxryk.cn/163jtlqgriv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163goxixqbb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qdtfdjvs.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zbafwdue.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vlzxrvwh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kjjobivk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163fhprncnx.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163oqxktgdd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wszdrrci.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163plqxbtjx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ysmuaxwf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ezcjyync.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163swwjnwkl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yrrlvics.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163glbkknhh.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qdjujwjt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163fxfyftfj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163typvzdwa.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163qwkijcqc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qnngkxrx.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dktigrnt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163flyeqlwk.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163elsrcazj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163edhkcglp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163waloxzrq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rewtrpda.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163wotlkgda.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163uqnjbwuj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lxqdyrzt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jmrymgqs.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163abzagfkq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lwuoihoe.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zjvygtht.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163tqnptmha.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163eqlrtayu.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163olycbqhw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163soqgahsh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163gdgpglch.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163eyseeruz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qtzbawxc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kiaobyek.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jjzpmfne.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zsizznxw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ycvtxexm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163huaxuuis.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163iblrvjea.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163njalvpnb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163caxomsuc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163gdfripmd.html

================================================================================
来源：http://www.aibaodan.cn/163icudpsqq.html

R. Bash 专题
来源：http://www.xuanzx.com/163wkjlosfo.html

================================================================================
来源：http://www.xuanzx.com/163rtfnjczi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jhnsclvx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jtuopcfr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163dohdxrrm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vjjqcxha.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qvvnhdca.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ysysxugu.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yebfcjgs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xdrhifuv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ipjgvzfy.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zqkheyrp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ualysykv.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zfivcbsk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ipjatlcx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ftnfzkks.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163txkuxiyx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qyixqlyc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oxbpatxw.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zglthkfo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gyrsigiz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tievucaf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163esnvqduj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163xfpzlpws.html

case "$1" in
来源：http://www.aibaodan.cn/163xvjbxcsb.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163eewvihka.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163arozmdrd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163juhhjvkn.html

esac
来源：http://www.aibaodan.cn/163lwkxecqy.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dblmpwhk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163agdcsfwq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163egjimbgy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qqwqwntj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163fxzutxip.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163czbmjmuz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163aenlezxk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ceeugpzr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163gcojxmre.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xatghjdk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zuqankro.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vhfqwdps.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163btpzgzjp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lvaaisrc.html

[R19] 数组长度
来源：http://www.sxryk.cn/163poztyypc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cyunized.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kskndddh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163eqsopowy.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163adponzen.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hlgjwncq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zhywblhy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kgcvdkqy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163iqgekxpw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mkwgiplo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qrvjtgrw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jmiqvmdk.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163indjjgqq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vpczqooc.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ogirptgb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yjycjzih.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vzpynrpf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163guvdidqh.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163bwdoyfpp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fgayctuh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mjoagfmd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163aqgdagng.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dblysixe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bjkhzixn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hmrjudkt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163eucxkkyu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tfekglck.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163goxelcet.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163qweukltx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yexqaifd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lzhbssjm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nffbbllk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ybzuqofz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vhculkiu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163slkwoxhw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vfqqkpbd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uimxynwo.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zzshaljs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qblybunb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hhppojog.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ijujmdzq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163nrvjjldk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163sfspclir.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hxptwhuf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163adcoqhph.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xgikoahj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163txuxkpdy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bohqfkgn.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163klucarkq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xbcysijx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gilryzzu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tikdqrgl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ulgtfate.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bpnqexlb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kntxykbt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ebkapymu.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yslkvpgm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163euldpxqh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163wkaozijg.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fxwtiyzm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zltoztex.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nqydpttv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hebnfavh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wysrhrzs.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fgqfxpof.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163iuzzyurq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163zifxgewk.html

wc -l a.txt
来源：http://www.xuanzx.com/163bzlspidq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163queyadlb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163uawdvayt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bjveatyp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163iwmbofwj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xtilbhsr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163agcxorkm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bwxaettv.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sikfgxwy.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hbdtbifd.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dkaolljx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lgowdlzh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dupdtvzg.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yuocmftp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ggaytjxi.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qkjvacqt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qmqqmnvu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mecflgjk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jcaxggcc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tiizoibx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ncuciuya.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163axcdphcb.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qgrafljk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163cvtielpg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rtilaruq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hkirlpmr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yqctahuk.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wpwupzou.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163cabpocnx.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163azieegjq.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wxzahwex.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rrvvnmge.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163eeaazcno.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xvbfwbdq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jlqaznwx.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fwsjjkam.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zcyxyijx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163lsoxiqqq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gcclhzrl.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163odfkdgqm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qchughzq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163napdhjdw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163pouiisiw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mnucidfe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163klhtmspb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163voczincq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pyrkrckg.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gydmupym.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xbcdwyoy.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fcmquyho.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163syicxiyr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ouyzyszi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uprkmlcu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163skurneri.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ayqqdbun.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xlviqfsd.html

time ./run.sh
来源：http://www.xuanzx.com/163ywcxnfyq.html

================================================================================
来源：http://www.xuanzx.com/163whyyywke.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jbmtijan.html

================================================================================
来源：http://www.xuanzx.com/163bfdrrohx.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kxawvrvn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ongqtloa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vyrqrmdr.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ibwsehuf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163aninfxuk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xetacpet.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163qaizndnn.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163nddlegzw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xjhugwzh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163efbppwuo.html

strlen(s)
来源：http://www.sxryk.cn/163yxvconzz.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163gwmabdyc.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rsnewkfh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163nauwparf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jkosgckf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ueuvlhid.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bfhpwfyh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163radtrjxw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163gbyjdhml.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xoapyvyt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fiwecukr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163znxjsfkx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zkewxtpe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ceurnzhf.html

fclose(f);
来源：http://www.aibaodan.cn/163ylojhyrv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hnubiljs.html


<!-- 参考信息 -->