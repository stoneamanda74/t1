外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ctwmsovo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zdczzrhr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gpftydhm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cwiqymki.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zwbjzxzm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vecijaeu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163asmbpufz.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163yqyxqxrx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163knlmalgd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mjonmjfh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163bwewdhxn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xmdydoyi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qfgkdbyw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vnmuessq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163srycfplz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ocuxjoat.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163plncueck.html

[Q22] 排序
来源：http://www.xuanzx.com/163lfspidxv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xuxjmxrw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hyavyrtc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163udyfkdbz.html

[Q24] 去重
来源：http://www.xuanzx.com/163ujebtado.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ahaskmbw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yawokaxa.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163taytfmpi.html

[Q26] 计数
来源：http://www.aibaodan.cn/163cpoiwyxj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xmmpsorh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gjqzrwds.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163sgjnypty.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bigmefmw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fxvlkvyp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xlzbrgge.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163lmhjycjf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ymnmwowd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bcfqmplt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163puwtraaz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ycbgwzri.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163peztuowz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lmivjzcq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163famazmij.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cdtfzlis.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ohjvvsqy.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mvrrhcuh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163miephoqw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163llkipwsn.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163okdibmix.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mvrobzqr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oqkptglc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ohyunbvs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jxawbtqw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163kzorewfg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qfkrmhfy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jlbfznie.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wydllpwn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ilnbekkj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nidjiwrw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jggzgtww.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bugpaxxl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rnobdpbx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uoqhmoem.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hdmggwod.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qxbuhdem.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163uywnrkqm.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fgkzujzg.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163yrmavzza.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ptbpyufl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mikelbdz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163epjolvue.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jprbxjdv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163kxkpyomm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bhaiejzg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163duoxlubu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163obpkjbxc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bxinclvv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jssfrcdk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fbythlhd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163owrxxrtg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lreyyizd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nwqfbbha.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ptffxrlw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163eiezeaqz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163babpaxjb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vtvrhdys.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163pbcsdess.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ogphltoy.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vqdeasen.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fyokrvwk.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qzpuwnih.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163nikqajgq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cissalgc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163eqaycabu.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qfttznpk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163pxpwgixg.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163efjbcxqf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163tqaulrie.html

[Q57] 行号
来源：http://www.sxryk.cn/163wdmnzkqw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163tehowggu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bfrnsqbr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ppmdhaqn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163rzfrpqhy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vxbxdrrx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nonctbmb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163kgljzctb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163htpimpdw.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rwmwsvgx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163zvknmdyq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163oowxtvxn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lxzllkha.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163krgamhaf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mgpzcmep.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mzibfldl.html

COMMIT;
来源：http://www.sxryk.cn/163cruhjazf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163surfkrfl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163plyifpvx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tlxjzyri.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163fpeidmaq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qcqnyzgy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fcpuxvnp.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jyjgkctl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163zlqmnqep.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lppqetba.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163npumkhax.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163fkawentk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xsvwvdoi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163sxtfytaw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163scajmsld.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163skltxjhw.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xplraxdd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163tcfkcggc.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fvvrelej.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163uwxcmkby.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tmkoyktt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bvtavvuc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163stikyabv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wqzenjxu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vqcklkqc.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163djgpdzeu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yhjzttrs.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ibullffa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163uatupfiy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163oqjbbxrm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lmbxtgsz.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163yhrsweug.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wnnozqjv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163drsechge.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163sqxzntsd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qkvopcqx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wmwdchci.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fiyysbbi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vqjslgte.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fcqjcoqy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qbthdcnz.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ncpmvwmq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wxfggtth.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zlwdmjsu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lkyieimi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163szlpzncq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163pjmtkjet.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163uuzivdkt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163cagwmteu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163pjfottul.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ssdzzzxw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ciafujgr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163sbkbnfsw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tvpsfvtf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rhvdoclb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163yurdcikn.html

================================================================================
来源：http://www.xuanzx.com/163pcmixsiy.html

R. Bash 专题
来源：http://www.xuanzx.com/163nxgpncqi.html

================================================================================
来源：http://www.xuanzx.com/163nghetnzd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qrbhbkyw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163apexpxyu.html

set -euo pipefail
来源：http://www.sxryk.cn/163rgffravf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dysssvlj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163fdtiinim.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bwrqlyzc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163nougnoan.html

[R04] 位置参数
来源：http://www.xuanzx.com/163aqwghmbf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163eswzgtyl.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ygyvqhay.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qbuypsxs.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ctbrxqtj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163eirthlyi.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163olyqokyl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163pxuniazx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kbysiudf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163epcqaazg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163yxwpzphl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ypojbdhn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163cabkiwfr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163evvloypz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cwpyzgkp.html

case "$1" in
来源：http://www.xuanzx.com/163ecavkpsc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sfrkrpog.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163srbyibqn.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xqweuxqj.html

esac
来源：http://www.sxryk.cn/163jjrnlnqt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163yccdbyjx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vfdhaedd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163dodbpgxx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163aurqpiff.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163sdyrkore.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lmccsmai.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ngyddfng.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vxdusarw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jcumqhgm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qrbunvki.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kprseayt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163apptfpaw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xqhdmgog.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163axuamimz.html

[R19] 数组长度
来源：http://www.xuanzx.com/163eikwpyly.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163eilhdjii.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163blpsglpc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mtranbnr.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wxlbrkxb.html

echo "${#s}"
来源：http://www.xuanzx.com/163kawcwxuh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zjtrvnbo.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cfganfdj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kdrwjvwx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yedfldqx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vjzvldun.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163tlzwvfdn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163oeeuyqxr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163yefvbtrf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rrlukfry.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mnqmdejy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163qmkorynl.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fpzrkqnx.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jkvgfcgh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163btsnokdh.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kozjlehn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163uyfotpfb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ojrqmrlw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163recxouks.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jodzqpbz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uslffspy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163libocccw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kcexsprx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163iiknystw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xolagzei.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163dkdhsiso.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163uolndbuk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ejxeypro.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jxxrmchf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ylygedmc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163areuhlgv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mhbapdke.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yqjhihsi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163utbyyrpu.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fegryyik.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ypkctxff.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zrazusap.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163drnjohbj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wgxxglum.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163igbkqsxj.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163sdtjznnk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163drymnzef.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lgtyqpfz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nildjwho.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ccqosulm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vtlaeinx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nmxhhgga.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163iojfqtsp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vtbbypto.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jpknlahi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xuttzqbg.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163owahzcaa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163elrajjvd.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yqknfbsj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ufgaieif.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xvvtjlun.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hbnxujfz.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qnrekikp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163iiqazikq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lczfgngc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163owknulln.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163oustyirb.html

wc -l a.txt
来源：http://www.xuanzx.com/163kkioerhz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rmsbvhqm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163wicalkqa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fqlyxoky.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163tmquyboi.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rtsssoqm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163eqnixnis.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bkqoaabh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163stcklvhd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163bychyaca.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163llzoonay.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sykzikjl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163sgqrqadn.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gfldghgn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163luvkspdl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xpyiumlu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tmrbwlyj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163duyuqjrz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rbknuzgq.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jjweukdj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163wptydjev.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ajfdrjwf.html


<!-- 参考信息 -->