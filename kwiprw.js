外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fhbolvvm.html

[Q22] 排序
来源：http://www.xuanzx.com/163sefclyor.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nstoymak.html

[Q23] 分页
来源：http://www.sxryk.cn/163luqmrbvj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163jgxxmsui.html

[Q24] 去重
来源：http://www.sxryk.cn/163fwxdwbje.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wizssuby.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pficdleg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bchpwjkp.html

[Q26] 计数
来源：http://www.xuanzx.com/163cdjlhydr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163szkmwtsy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qgjashfa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xvgeqjjn.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jxvcvdxd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163thwvygja.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mzcdzfcq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xpyuwknn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dwmxcqia.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sbbzvzcc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163tsukartv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rclxnjve.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mbazicuy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163braycxif.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163chutlmlb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163nqseigsa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163egikwtwa.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wmbttcnq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163egqwqnjg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hobbpqhb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ovnttrrv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lgoutblk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zuowldhl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qxbmkdvw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hznebnnm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ywrddgui.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163cksdigmq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163oejwcbmk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163atvzfugc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163qkwakqka.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163pxjcwuol.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wpeibwbi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ozuiquet.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ooiomyym.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zzjinutb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uoxrbcrf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163alnewifu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163akktejzh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163iwsgcvyy.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163esiggeax.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jgqdycsk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jenfhrdb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163unnczsjk.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xzpnrscm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yryprjkb.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lubizvzk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sfevonys.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163xgqrjdzt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ozjqahxf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163trkkqmrt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pfksyupx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163mbsxbzot.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163fkomvsii.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bfiacuik.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hotvedkk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163efrteiiz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jwrxtcot.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nsmvicnx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jtusnoad.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163sduoytpb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vwiavoxf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lumvgupd.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jiicisry.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163zetvlima.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ggwvnjhl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163omrkiokl.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163olcbitsh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qmvbziub.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qbyhyxup.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jiyxvkud.html

[Q57] 行号
来源：http://www.sxryk.cn/163gxtaypse.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ghjlowaf.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163fjzidude.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163agmtgpjh.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ckobbcvl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qwcbdwod.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ztslqjbv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qytlwwwv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zvdywopa.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pukrcdoq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ixdhcdln.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163elaeliqp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rahawjij.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163gzmmnhtw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163bhczbzmq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163nounglnd.html

COMMIT;
来源：http://www.aibaodan.cn/163cymkbxlb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dqhyldbh.html

ROLLBACK;
来源：http://www.xuanzx.com/163uyxxvsio.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163mdkuiorx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163llmifusz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ngrotkmp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jibaysrx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163rxylvdaq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163huzrkchw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ehhebzjb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vkmzrmas.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163tsanmute.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163typqqdqa.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163itbzckuw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163thmngpge.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bbvsmrzp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dzajzcce.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hyafuqci.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ljmwqpts.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163knriyenb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163jgqsvzhi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jmncwyxc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zlvlbxge.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fbhstxvr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mwiknziq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tflffnbe.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163tiapmxsv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nwwfckbt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fmmslnje.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gghlfzvl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hamhazru.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yhwjsbbc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163poyuxdan.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mfpfznln.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vshcsyur.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cglvrzpe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cplzaykr.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163gdjhcwep.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ltxyovzi.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ojawbblq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163foavdnsl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zudxmovw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wcvrrwia.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bizfaxbs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163prdjncnd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163dusxlyfx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jlrmnrzs.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163quvbvbkr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ovwozjgo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fdorycaj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rmbuafco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bplcgedb.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163euknbwbi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163swjflifm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ttpmljzu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163uughphna.html

================================================================================
来源：http://www.xuanzx.com/163vjkubgzv.html

R. Bash 专题
来源：http://www.xuanzx.com/163ekhpezaa.html

================================================================================
来源：http://www.aibaodan.cn/163evgzuavz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163qjnqdxvd.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tuyfhnac.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kztjhlsr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fbvpxrxq.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163umjqyxhl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ypzuakfu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gpmltoic.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ycpcnuxo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bucbrtgf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mpaiiyyu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ygiskcqe.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ejwydbdy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fbnvwfvg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dcnqnfbv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tgjsqnpk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163nwfwiaxl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wvcyollr.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xulsngrs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jvnhjvwk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pcbkqynb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ulnvvbfm.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xfpztioj.html

case "$1" in
来源：http://www.xuanzx.com/163bbkfflel.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sblbezct.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163lrotgifa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163drrphodc.html

esac
来源：http://www.xuanzx.com/163nseuclvx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lbujrxjv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ubyqrnji.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tramfufd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163usjvewxh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163pzpnlyju.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163yearwfkc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qgvrptji.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wdhxfljz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vfuczudp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163emojzzjx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163sbwraboz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fdlewvzf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163gcdpfcfn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xsgxxxjq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ituvkzob.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pokomcmz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163atcwlsnl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fqhamsyu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163mabqebzi.html

echo "${#s}"
来源：http://www.sxryk.cn/163tsfurqoh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163imsokjoi.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fyyrzkkn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rlkukkiw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qtfkjzam.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163soxjgywj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zxftwibg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zkzdfglq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xpmjkohg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bjbeqevi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163oiyuvgcq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hixrjyzj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163uqghpmff.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163cwjzvenz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mvkukkld.html

[R29] 定义函数
来源：http://www.sxryk.cn/163njmpeffw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dolkwrnx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163syalolcr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163craivryw.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pvybxocj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tzpisxod.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fvwiiujw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163sbvbortl.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163swajgzhf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yncdofqu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jwetvviv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zvbuxjzr.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mqwkkpuv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qaayszdt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ywrvimpk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qhefpqtj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ypwetgvs.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163mrugwdmh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ebbihypc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gplfdvnz.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gqwywueb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uiipmazg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tgwxztzq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xevvmrca.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163tndkskus.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kfwjzdwx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uvecwczn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gmjeavfj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163knaoacgc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nccqchol.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hijtzoro.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lsjhskmk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ogtncuvq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lfpngkpy.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163obclusak.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163htlcypbk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163shizuwvk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163twtkndjy.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vzvfmfqw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163eychevgh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163qvxhailh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ygfrqpbn.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xhjcykhp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nxpffrmp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163muajvbrj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bqamfiqm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lmbwbivu.html

wc -l a.txt
来源：http://www.sxryk.cn/163ttcylcpf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163pwlbthnk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uckodcxu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163eyjkcryp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pvmtvrpf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163npnemyes.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163lvqtdqul.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nqcxurut.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ldqpjfhk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ifmjeltg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ctcgsqeh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pqyaedtm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qxjfbbdz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163otukyjmy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fvfwqwch.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jplzifxy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qikmnauz.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163yhmhxhfd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qlkggafe.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163cknosgsk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xbpudmze.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163xgrmurje.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nnojbzdx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163nssenmqt.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tleimpee.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xsvkubrd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163inxcshwl.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163uqnwtejg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jqpkysid.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163unwvydxi.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163trhlagvi.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163mnxyktxz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ddzjyoel.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163zcjkelhf.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zpdrneaw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cdmjfewe.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ioqejzad.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163uayfbnli.html


<!-- 参考信息 -->