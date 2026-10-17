外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ndvzxzwv.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kpkgzjxh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163femvqctz.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xdvxtufw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qituazlu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hvehghvx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uymzoanb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163pwkihvkw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xmlhksuz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xyckjiah.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163sacgykmh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lgxnwmkx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zgyldxsi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uimlcbhy.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kldhfjmi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gkiihbsp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tnjcftbs.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163oibxdopw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163smevrwco.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163yldsahng.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163yuywfqzt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wyfvdtud.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fmxvavli.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ysbxvmti.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163efhsqhlf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ndxpnmze.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ymcvhdju.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163urlaozlg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163duipdejj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xvzaetae.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163uxwblihw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tsenrnss.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163vnkimwmj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163idhbxxvl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163wrfouaez.html

[Q57] 行号
来源：http://www.sxryk.cn/163swjkwtwf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163sbocxmyx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bbwmjkdb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vcqajwea.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163obkpcxkl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163lbezhvha.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163fjzhgcqt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ysbebxsq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163urodfhrb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mwoyjozg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163zjwsdgir.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wszfspll.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cuxulrfx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163fqjyfnbb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163awucvumj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163gvvdbbgj.html

COMMIT;
来源：http://www.xuanzx.com/163gsdmmdnm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163cjgrcond.html

ROLLBACK;
来源：http://www.sxryk.cn/163vippwper.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tdiokpre.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163cswnzwqv.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jfrsjxne.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mgdtazrz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kmpnyyzp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163bdlxjaxr.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rjggqfne.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qqvmcugc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gcgivvbu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163tnezghct.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163noxcjsht.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rwvbcanp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zgemewxm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mupsmsmq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ifrgwhzo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163lwnovaoz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163mvvluyjr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163tarmxnak.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ofebvfxx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xdhsrdxj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tqmthtls.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ylnjaeny.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jiothxka.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163muezpjms.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ovfcxhhx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zmtnojyx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163snudloou.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ipbsudjl.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zcgnwsxz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tgmbpxak.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jpcpghgx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jvgvyzmp.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gnilnfux.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ypoitnoh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163aczvjpta.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tvwbtyhy.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wmhtfgqt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qetkpsiw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163szrslylz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xvvqzyqe.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163wsbbzmdi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163jhuoalya.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163efcidegn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163thpkoxtv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163dbcbnfwz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jlcrjjje.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mbltcdit.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fbkrqykn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rxvitrdk.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163djxsbxlq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jdmkdfer.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xljlmbux.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qozkqyri.html

================================================================================
来源：http://www.sxryk.cn/163mhzgyzbn.html

R. Bash 专题
来源：http://www.xuanzx.com/163bltyuszz.html

================================================================================
来源：http://www.sxryk.cn/163tujcpcef.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cavlgdfo.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163uxiimzzo.html

set -euo pipefail
来源：http://www.sxryk.cn/163fohkefrd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jgjkdrek.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163laqetgac.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xifuijds.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hvpcfsbz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163kfvuuzxy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vflhyucm.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xcyqhyrj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163sihfzngs.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163cbulrfwi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kaovtcbv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sigxjsgu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jsqpksgy.html

[R08] 数值比较
来源：http://www.xuanzx.com/163duujhmuj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163rqqzxisd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163packpywe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163lexgjdvp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gubjcdik.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ufppcrxv.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zubbshks.html

case "$1" in
来源：http://www.xuanzx.com/163yzzpyugz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163omiaacvq.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tdfurkvu.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hnzqatup.html

esac
来源：http://www.aibaodan.cn/163rsppnlie.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163jcxxehgo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163aeegdber.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163aglhwiew.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zlnrkxbn.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163baxrkjon.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163fpskqqfy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zbrnhseh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163iakizjqw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rpoltisr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vemwxllo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163mmwmvnck.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163rognshpd.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bxhqglyr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wbfuoumk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ufdduvtk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163fkyqlczs.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ixvqxryz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rpnweywj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jsgvcsly.html

echo "${#s}"
来源：http://www.sxryk.cn/163hzxouidh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rgtfqxfz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163kpijobws.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xlxyeduo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dnhuvhji.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qgrcenes.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163uekrjldv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xifikupz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qjhpaswi.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mmkaskzn.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gtqkkiit.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163csfpotab.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cfholjbj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ntjofaxw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163bnjbxozu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kirdsgju.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163bhrhcvme.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163tenaivum.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163rqjiyjac.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ptqwhfks.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vakhptbh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nymifsoj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wsduzkkp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tyjauspm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bdjjklor.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163azzmfflk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hmgvclre.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jpgrghoe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163upmzmmhr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qslxjuix.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163huhzekrk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163txjpbiby.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tylwazgw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xhuhrjyr.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163babbgkzo.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pmjzyrgl.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zmruueml.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163irfvffsc.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ifiwlrkt.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163tjezpbvf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ldfzndjt.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163hhfnnzbh.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tndefwxg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163pegbfyet.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163druodclw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ogeerezs.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lekorjac.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hbphexiu.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tdydaypt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xoknwiid.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wpkjsyio.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163fvmqqzha.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xikposgl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qfwgbvqo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163plkcolsv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nmhxrrlx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163khgpsgaq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cpfotgaq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gmvniter.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163megbaabz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ywzeelmk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gsouthmp.html

wc -l a.txt
来源：http://www.xuanzx.com/163jbaboipu.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163fghvjizk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163fbtgrunf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xcbhdtdu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fhqdykow.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163zgnkdnvf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bfgyngyq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163uplwcdsl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kzsvnrpj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163hqkxaubd.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163grlwoyvx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hfcupoqe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ojjylggv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zuvvtjvj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163lhtkemmi.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ljwwvfjv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tskyviyg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ghkkburm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xuwohxwp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163uwasdsyu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zbkgliuo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163xxakhhkl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163lheszlnj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dftrmdwf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163hfohchgm.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wtowvacy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163orzjejzp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pitosnxb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qhdvjlgz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163fxbzmazf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qpiaabqa.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dztbgzph.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cgujazwq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163hyxudodo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163azhypifc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xowidbsv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fbbfwwjs.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fiuuzwjj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ifjyxahy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ttohavlc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xoqefvpg.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163trmwecdb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dhbbpkca.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163naxjcjrw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ivzcobjj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163atrydkey.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163yvnoligc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163dnrgwamx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163htezpzva.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163iresdmec.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163khwmfvff.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163twzrezbo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bklvnhin.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163nxcbeefo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jqtanjwe.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ezicwjsm.html

time ./run.sh
来源：http://www.xuanzx.com/163menlcfsr.html

================================================================================
来源：http://www.sxryk.cn/163jpvxeyak.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vyozamgk.html

================================================================================
来源：http://www.xuanzx.com/163forpdwuz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163iuakjzlc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163dqkxejgr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163evhmoyri.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163wwinkeoo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163broiybis.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163kkzglkgp.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ovnlsyab.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163eqrszwnx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bsbxwcnc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dqexqfts.html

strlen(s)
来源：http://www.aibaodan.cn/163ltopcrcb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163khlrlidb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mvupwluf.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163shwevidm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ydrcwoea.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kjxbxpye.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pafcvkfc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163simxuwnb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gqiagvik.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tyuttxkz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163mtxkolel.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zhlloqqf.html


<!-- 参考信息 -->