外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163cwdsercp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163npinlrdj.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ijnxucmg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qbalxyyu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163iidqsnee.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hvdlzsgm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dvfagluy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163vzjxgyhv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nojvewfs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ffdtpbye.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qwoqjtdn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163swahpmvp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wqqfepah.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xlfeavvf.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tgrjwyat.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163gwowlhec.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163esidykzx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kgvfwjfb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tzzbqazv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ffluishu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163esdmbakn.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163skvsnlbj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qxgapvlt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163yognulen.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163abmztuir.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163pqoemcfm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163srhswpht.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163dqvllelj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163jcbwfzyw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ebgszypy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ajovdhlz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163vlvyyawy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163euuxkrvn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163nftsmrto.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163htmyfyph.html

[Q23] 分页
来源：http://www.xuanzx.com/163vltharzy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pvhqvvfc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hpnmyiqm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163qwyhynof.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tuzminua.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ubnjaoaw.html

[Q26] 计数
来源：http://www.xuanzx.com/163oenijxpg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163oyojlzdf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tawiityf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kwmrhkph.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ynfceilj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jkzhobrf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tiljcdjg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163riayacyq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xygnmkyt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fsgvnalk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ajvzazom.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ahbkocun.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qhwcgsvn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cnunirha.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163lbgoqsxm.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ceknenml.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163iaapeoup.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mbmhmzpf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rypgfvgq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163uqfvzqbu.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163onqmnmcc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fknknuqk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lhobghzy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fnpyfxht.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sicxworv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163rbuedxra.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163muqyycea.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ugrmkzbn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jcvxjvrp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wvueioov.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163duimtesi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163gkuhtioy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163nszpgdlv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163blxdbmgj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ihmmuban.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163nvmodckc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lblgcneo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163owqiovyl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163usygsqru.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163oxcufbzp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hnbvmlwx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ldnsatbe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ieicduws.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163cctglrem.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163iimhpvkm.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163eqrzeinr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rgdegnpa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163skwmvinn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xwnqgpcp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kjihrmrp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gguepvml.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ajzmemyn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163phzxhmbx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163lefyefee.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163osjnskzt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zxmeyrfj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qufjotfw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ivywollq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uyagygwp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163nqctpvku.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zhgvnoyu.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163udlpeuvp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163knhgeycu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hajyvhxo.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vauezprd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jodqbhdj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163qpetlocq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163blpfpoow.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163emtxdubm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163psdeayyu.html

[Q57] 行号
来源：http://www.xuanzx.com/163wkjzmrvv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163czwaedbk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163evfiwyzk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163dnffaqii.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ydftufum.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163dienqczy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wbskeqwu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163avfgczuf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nyeivldr.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163krnheklk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163zrfpjfdh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163qpkltrny.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rlhojxiy.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ervfuymg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163npsgjzcr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rhtokvzr.html

COMMIT;
来源：http://www.sxryk.cn/163vcdjnmgz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lirbfdha.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gwpxtzkf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cazzvund.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163upqkngdk.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163cipmjpxc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tmigqumc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163yxjnooqz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pampxqgi.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163btzyaiuq.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163dztozkmp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ywaewggh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ovrgkkmb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163sntfvyou.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163skwbrhae.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xioarjbv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163acejznje.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163dypbsmyl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mqvyocju.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vkusrquf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wyummaol.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bhjbgsvq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163biacjsig.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tqdhhnrd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ndamiqvi.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ozgmmjft.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gwyhyeme.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qyeliqhl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wwxmcnii.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163prkygqzx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mzipwfwr.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xiboirnz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cuzusoje.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163rkkcsfwm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163azuoejqs.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163aibuwmoj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163danxjfgw.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nnttguld.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cvfbzknm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lozdmmnl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163mjlohvxs.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jqcqchfu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163lsnhxovx.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163lptkgrkb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163aeuxjtux.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bwecghho.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fkideksq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hgmnpdmd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163icryacko.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jlrfmtzs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ztopwdqb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163coykholg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163bnsdvffo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tnqhgzca.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163egqopeea.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163psmvcqhk.html

================================================================================
来源：http://www.sxryk.cn/163rilciccz.html

R. Bash 专题
来源：http://www.sxryk.cn/163vzcnhyck.html

================================================================================
来源：http://www.xuanzx.com/163yokpgfan.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tjyfqlvb.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qccxcixj.html

set -euo pipefail
来源：http://www.xuanzx.com/163ziijueyu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uurtrcru.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zmxricwc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163froqzalr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dnwimoho.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mydfxrjz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ehkhmxrg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jqzxctbz.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163hyxbkxer.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163uqsdhfmq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jfxdrbro.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xstwkuss.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vcrzofew.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pkunydzr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xigwgxil.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hxpjcwqh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mcfzcyjy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ttzdgzcv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qwnzdaqc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163igoyrana.html

case "$1" in
来源：http://www.aibaodan.cn/163htluxlog.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kdyiwujn.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rxwxdnqr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163duhrhklj.html

esac
来源：http://www.sxryk.cn/163auucqnpl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ionlxmhr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vhynttqn.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163kalguqfh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qrahpvoa.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lzzredvq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163suycpyxd.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wgoavjsm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gyklgora.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vhqwywwt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cbxxdari.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qkpymtfd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lffuqhwn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hhjsolsg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lshxsjqj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163uwdwcive.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ipgukpjx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fnbodemu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163meconwwp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hqzaqsfl.html

echo "${#s}"
来源：http://www.xuanzx.com/163qxyvhdpe.html

[R22] 截取子串
来源：http://www.sxryk.cn/163emtgxtxy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163msuokjot.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163eillfbze.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rkffiuxy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163trekvgxv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bfxtodsh.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ktfxqhqp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hjlvcgza.html

[R26] 命令替换
来源：http://www.sxryk.cn/163jmphpgsf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163edybdktz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vetfkkyk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zuoqwaky.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wzawvvps.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163olpgncqm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gpqwgiqn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163qtbbtrob.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vyprbuzb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163awcmaqzz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163nqpgxrzf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ngxqyupq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ucgnwqqz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ajvnllva.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163olppepkz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163slnvnrjz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163oljencvq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lcwgoaot.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163lfzaqnoj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ztrhjceu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ijggfuph.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zobvsqgc.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163emwdtjud.html

files=$(ls -1)
来源：http://www.sxryk.cn/163oesxddhs.html

[R38] 管道串联
来源：http://www.sxryk.cn/163eyyjjjsp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163nqtmuznl.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ctoakuww.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hjhdrubj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oeedjpvd.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jgggdacp.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163unqrdxcr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hithzbfh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rqodaebv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bxrzcmov.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163kydfrzym.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hwuopvmm.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163obsqboqy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pgohvctk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rstdhlic.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xmlmnmsv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ygotxhuj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163okqvequi.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tcgzomrn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zipotecu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lsnbmiyx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ypioeezt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ndjklfyv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zylkbnqr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jnjgoxag.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hafvqwsw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rhsclxaw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bolcyqln.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163odxacynp.html

wc -l a.txt
来源：http://www.sxryk.cn/163spthuszj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gboydsar.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163wewsxgrp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ktkofrbi.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163nekakdkq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fkghovur.html


<!-- 参考信息 -->