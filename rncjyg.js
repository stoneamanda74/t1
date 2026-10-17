外链999!wailian999！

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kotcoibv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vuibtmql.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163djemwghu.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ioivcwya.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163awkezilc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163cjryuoxp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163iyvokzow.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ibnmzkfc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163kosxygrc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gmbszeij.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ambqcvfp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163knzubmmw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163kigxphdc.html

[Q22] 排序
来源：http://www.sxryk.cn/163shcgskqr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kkepawbf.html

[Q23] 分页
来源：http://www.sxryk.cn/163tdsjhoir.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163tgexrjzk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163wvijvsvq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163giuontqt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163oqsjmhqq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163majspgjm.html

[Q26] 计数
来源：http://www.sxryk.cn/163xqkoxiud.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163drqdsips.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163juxshqsw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uvwgubsr.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163liolouwv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bnlmxwin.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163teehhacb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xbovnxxq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163hyzhvvgo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uuoemhdy.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mmpkepjr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lvvukahd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rgnyxajy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bfvmpuoz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163jisflpdu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163kpmqhthf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163cvbpvrzs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163twkvzkvg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fvmgrnuq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ifzyhzuk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163axcwbbss.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ohsriqkq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vhsmvoxa.html

[Q36] 左连接
来源：http://www.sxryk.cn/163sgsqppgv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nhstrisx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163aifrvapx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ocgrgtdb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163nmmwzlad.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163szijjfyo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163niqyglht.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163udzbvzcq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163lttrlkxc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pyiblwsl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163gysimdkj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163keacswjd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ollyypmr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vydyfwfz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xuuscqcn.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hzdxsqzn.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zpctkvsm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163cezpdyyv.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bdfojjka.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fxihcdnh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163eskvmali.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163tpcxysap.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tpsbwday.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zlbuzupt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zmmegxab.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163geqykfbn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rtkjmmnp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163gmziyrxl.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tgsfsoku.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hhkwejnt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hundirfa.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163asjukajf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163alzyacsx.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gnmukpqf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163oehletpa.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dkyylsdd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163cdmtusql.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hxzwrote.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163oxcpwawo.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163guqovxrc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163lxlgehpp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gturwtwd.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ecgkksox.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tfwmyqtl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163iavguebo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xhnzrurs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163oexrpkul.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tmsythta.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qpmccxoa.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vdmbmtnn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vjuzetxi.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163uroayysa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wppbntoi.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vawtzdvi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163zgrzleed.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cmjtqxyb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163uaxpqfln.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163vkgrpxlh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lujuambq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163olnaalna.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163pthtslej.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ggmhukdq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ddwkkzbl.html

COMMIT;
来源：http://www.aibaodan.cn/163wstdamey.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lgflwois.html

ROLLBACK;
来源：http://www.aibaodan.cn/163cmxxbhvr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fuqtaebw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qfrjruoy.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163brsfuhim.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vtyynyxs.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ppchaznp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xuwuebfd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163wxtvgeph.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vwjvyaks.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ujpjcosx.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163eidhklmv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163azgdcgee.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bpotvisa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fkalyyjo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163hggntppx.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jbzfnome.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163srkhuuer.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163msqjtnaz.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163fppjjflf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yjuaithd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163dtuaqofi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163lzqmgmly.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163tejyuojp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lvdpfiaa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wxdmkzim.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dllnldgu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vkedgisa.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dhnxfrsr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163obuzyecw.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mqfjsggr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rrwpdfvr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tejijknq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qsqizxir.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163usltuquf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mawbqfeo.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163prbiztek.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xlhqpyic.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163qnpynqnc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163eprjzpug.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kclaggej.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163klbmfkjm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vnodpssa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vdqvysgj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163cfvteorb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163sfhsveul.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163eprmplnp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mjhofnvh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163whjxjtso.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rbsxlszf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lveuzhxr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163inzucsbn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163kxguvqyx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163jfpghxfg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163aiafpyyo.html

================================================================================
来源：http://www.aibaodan.cn/163ntmeqbjt.html

R. Bash 专题
来源：http://www.xuanzx.com/163rojjzckh.html

================================================================================
来源：http://www.aibaodan.cn/163aariqaic.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vgqksoqb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bjgcbufc.html

set -euo pipefail
来源：http://www.sxryk.cn/163qlwelgef.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163yqarmnmb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ggrvrnmt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tokohkig.html

readonly PI=3.14
来源：http://www.sxryk.cn/163tfxpqcpp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ntxfqwzs.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zetkoyqt.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kktyrdvb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rmoahzpg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lvwzqtja.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ozydvzgg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zskaefgx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lhnrtppj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163qgszksjk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163altrracp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163stkcdmlm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163lmjxmlhk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ghaofkcn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qlwebwht.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163gofkycqs.html

case "$1" in
来源：http://www.xuanzx.com/163jjsgixmq.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163skkdnviu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163lkjsuzjw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jwskyewk.html

esac
来源：http://www.aibaodan.cn/163lygmrkej.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nwuojtsa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vwocadts.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jnlyewtt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gktvtgns.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163atfcysxr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163xyymtuoh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163msumovvw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163lsqerutp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163klgybacx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mohrfxcj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lbmfuchs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163umwaefbi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dsvsdtjb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fodrsdfo.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jkefotrp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fblflozj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lybiyleg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fphahoho.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163enebjdqp.html

echo "${#s}"
来源：http://www.sxryk.cn/163ydgocxmk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163bflvzjey.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163sbmurhle.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qpvylbyf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ngezxvsr.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rrgpqvtm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qzfdmkyp.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163eaqlysfh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ocqogihf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fvvmpcon.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sbjrkkml.html

[R27] 算术展开
来源：http://www.sxryk.cn/163leffhmvi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163akqqogvw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pgpojvht.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dbkvltii.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hfzfsanm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jcaulqcr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rvssbztl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163iafpzolc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163yworchtt.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163sasrldtk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163swpziohc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163snxaipbl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163izwydcro.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163vbpszusb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fbpywwla.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xeggflev.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163uqihldhv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jmdqmzua.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ttdyprha.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163djvapmnd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tmlpaykd.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ofxyaded.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hizailrq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lzkkyviy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qilontsj.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ppusjwlo.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ipqdzfzu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ttdqtaqh.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xpimqtih.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dabwzsgm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rmqjpaau.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hcbjexek.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hpguionf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cpegenxx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163atmhvyap.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bdfxcxaw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kcekdjas.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163acqfpxeq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jyskewjx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cuuhcffb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163fdqdpvgl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nluzxlrq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xsmqelkw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163eifwtjkm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rjrfcpzz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bekcawba.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mjsdntjj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zfdryqck.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163elurtcjb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fyfxkuwm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163sciauciq.html

wc -l a.txt
来源：http://www.sxryk.cn/163ugemxsns.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mqapuwdl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pmxfjnco.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hssvlgdv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ltzwyqwl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gusafcti.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163emfnulnp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mgqnompc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dnszajmo.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lanufnhk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qsdzbciy.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163loxktmlw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zdochitm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163affjoocg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wydylkwf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163awxbyxhq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163akdyfacc.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ziadnzjk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mdlenwcf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hspjzgif.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kzlejjls.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ksilzomy.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163cyavltyp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qrsonqta.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163cphfmfzl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jhetsuzz.html


<!-- 参考信息 -->