外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163iwkmowrb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hgpogoin.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ykyjyagw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fpadoueu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163qocitfhw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pnxwrust.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hcafnnvt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163tjjahnob.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ltdybgkj.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163znqlhjtx.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163sjdhioot.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zmomlsot.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mkfxvxyb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163enoghdhn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xmmxliyp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163datpiqtv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ygvkffit.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gswhpoyh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163amvdriwm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163yxgsjqcy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163slsdbnbn.html

[Q22] 排序
来源：http://www.sxryk.cn/163wtvdwzwf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163fcumrcnv.html

[Q23] 分页
来源：http://www.sxryk.cn/163boqvqmqv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163adbesfuc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jhzczzpg.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ppqsnjxf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163auewjswz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163djkgjuqm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163haceeric.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163iifxrioo.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vwowciyn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tkiduhzs.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hdnlzuet.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wnfuwgnp.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mskpnoiz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163hkhjlbky.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hadzyqpa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hbcvfswb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163giissyzw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163erffpoof.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163mogrcqos.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163daoivgzo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163dqhamqgo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163iaftmeer.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kdkftsww.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163iqwasrdf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jgfbqzzg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ajqlqbet.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163rbgvikil.html

[Q35] 内连接
来源：http://www.xuanzx.com/163iiswzmtc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iocjwjpa.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tpwqeejc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sapwmdqg.html

[Q37] 右连接
来源：http://www.xuanzx.com/163axxpswkx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uczitdok.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jsjvgfvf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ohduucxx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wihidfsd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163trjudlha.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rebzmfvi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vryxajzl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hevqhetd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gfsufyde.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tnsecqdt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163oayznwxu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163dqcggjml.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163nkyhamsb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dlvvuajj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tvmxrydo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vzbegppl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zgypmdlx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ysqleuow.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qhhoicri.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wmqyfuxo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vzeedifs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163kuhapgqc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xbdrohft.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ygwgetuk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163zabccnrq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ykphrmuf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163apihdqsw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163bznqmvji.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wauijxgw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163axqwtcky.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dbufsxut.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163xmejdshg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fbcbiyfl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163owtlvbxu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163zrihxryt.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hhewixih.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163whtmwqoh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163akmsfuxa.html

[Q54] 清空表
来源：http://www.xuanzx.com/163rurvorey.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163emtaldwl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163mdcopxpj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cncqmnst.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yqnskdec.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dgeqocvn.html

[Q57] 行号
来源：http://www.sxryk.cn/163zaoxjmpd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163entfiufl.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163kjbxioue.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ocjvzrea.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xxprhbqo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xgovomio.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163trdtgmyp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163lclgpzbc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163empkjlih.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bsjoqiwv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163uctrsyzv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163upvqmfvd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163aiwxfhjy.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ygbtngtd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hhryjvbr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wzgzunpd.html

COMMIT;
来源：http://www.sxryk.cn/163esqhqpbb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tubtdfag.html

ROLLBACK;
来源：http://www.aibaodan.cn/163cjnojksk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hsyklhbt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ragnevxf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gjmyjnoi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lbhgkjjs.html

[Q68] 保存点
来源：http://www.sxryk.cn/163irxzktdy.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jfzwlmzm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ohbfrxce.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nxtdaboz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bihqyclp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ffcxcuwd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163akvmnzxe.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163shhzwjwb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ixjhkbnp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163qahbgmhu.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163vmzgmjpe.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fumrefxb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lpsedhkf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mmnkgtik.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dtwdipcg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163egxgjdzq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163gmswknpw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mxmxqjcx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kwbpuqzb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xmcwnuhj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dmwjawii.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163smvjdqcg.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163iwerxhee.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ersuuyda.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163fkqnpubs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163puvyqgrb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ixsuxupe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163pximehmt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ooteazdn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ucqmbkpw.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gpuzunfi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163jiccyxyu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vnijaaha.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163wjibvjdv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pbuikyij.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163fnrlhghm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ubyndvbb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163sselutrz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kgvompqu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163sgiataup.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tondinqr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jvcbytow.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jhgpgnyd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ccgttxic.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163bfpiijts.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163bbcgfceu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163aurzeuzv.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163eesjhtul.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163uostlodx.html

================================================================================
来源：http://www.aibaodan.cn/163mapruaor.html

R. Bash 专题
来源：http://www.xuanzx.com/163neiakvcp.html

================================================================================
来源：http://www.aibaodan.cn/163wkhrxjio.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ckmwomtd.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163arbyjcpc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ripkbavv.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cxpjqiba.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163nuoepiwz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ojhlgmje.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wbfwzwsd.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gtolgksq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163zulcyfbo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wkwqcjpm.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163phddfjsy.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sdfctcmz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163pyaukrdv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163njmrxjoz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vqlwjvdb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ywwskwwx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163blpcabqw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jawblwhv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163kgyyarxb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163iznwjqlq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mmaqjiqq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163opdmkjbj.html

case "$1" in
来源：http://www.aibaodan.cn/163mtczaohn.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tqyiysfb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yewbpuvk.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rnutgdph.html

esac
来源：http://www.aibaodan.cn/163wrpcuvvq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mfczzrbm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163aphcipeu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163iocamvsu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163aiqnjadu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163yasufiro.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tqzfanwk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163aqwutiyq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163utidinnd.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vwgcttdn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163kvpzdkwq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163fekljtge.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163odtakcti.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163kgzqnjbj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wmlmupfk.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dclwksfv.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mnzvulzv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163dqhdmaue.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ynpeguod.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163yrogguso.html

echo "${#s}"
来源：http://www.xuanzx.com/163bycotxhb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xcvxonir.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163sqjnxbsq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163zggwhkhj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163urnlxdkw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163eiycrxuw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lsmkbyer.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163rjclwrgv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163yjmqqanf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jdeupafl.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xopudncn.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bscxvryr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163swqvfuwj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163aghmbuxj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hrvcgzfu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163eurnpfai.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tsnsnmqg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163yhgkudfr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163nkntymgf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163xggmdrgi.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zthbwqlo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dceyusqo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wwgoaiuz.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wsimzkrb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ypfzpflr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cyupqeqp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163imsjsbxd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ysctmjzb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xtfhyfso.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kzntrrxw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163whfapaef.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ybqtlail.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nctcajci.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nrlvzabq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gyjfiqny.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xfkdmqvh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163lgtgzgci.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163kwjjywmf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163yyqsqlrd.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ntlnogpl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hfyytgng.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mohpypny.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fiodfzaj.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163holmbkkd.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dhsnozzu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wynsdgxg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wrgdkrzd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nvijzaqa.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wgkbbaqm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163evwawqkq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163pfplnldc.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ekuhuftf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163szkzcfww.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fxrzdpih.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163duchezsx.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jfhvebpn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ozbdjoka.html

[R50] awk 求和
来源：http://www.xuanzx.com/163owytftkn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163lvzdatqp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163wpvnejsv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cxqecyrn.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wwvbkpxw.html

wc -l a.txt
来源：http://www.sxryk.cn/163dyhkdzfo.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ezbkjant.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zuylcish.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163nuagvlqs.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163afezntku.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lwlanhwr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163arhcwybs.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163vnwijtsc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163gbcduimg.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qfgblrpp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vttnfjlc.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jypwsalo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ajhabruu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rqobbjos.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163louaglul.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kojbzidc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163irtlsbvz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tqakqpck.html


<!-- 参考信息 -->