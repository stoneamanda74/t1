外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bhzlhfsn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163okjeiwpe.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ivpalgui.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gityxydj.html

);
来源：http://www.sxryk.cn/163gqjofklc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vrxosulw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fbzshiat.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qgnlzlcx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qvppjfue.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xetahjsb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gverfcmf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fikdurqj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zdyercad.html

[Q07] 删除表
来源：http://www.xuanzx.com/163dyalnist.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wlskomxz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qyqwhexu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163rhfcznhi.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163yqccwelu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vypptoaz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163nvcqxzjl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ywupwxwr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163upsjdebz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jqbzcngi.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163sdebusca.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ymwbnaqp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wjxrrrvo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163kjhihzwx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ixbkmana.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163lldvnhvb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lfapdwxt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gwevndnm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163senrwgzc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pfztamid.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xslctgyh.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hhuyodoh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163afmkjfcj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vpsdoupc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163erdpturt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qpjcesqn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wjhqxbzu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dpejdmil.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zihahupe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zxmhsdhq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fhomgpxw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kqtazuts.html

[Q22] 排序
来源：http://www.xuanzx.com/163sqlsqwqs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163izvxclex.html

[Q23] 分页
来源：http://www.sxryk.cn/163zkbtzvvf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163upditgqu.html

[Q24] 去重
来源：http://www.sxryk.cn/163cdhjmnbb.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rfejjxls.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163blamqorx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163usqzjhja.html

[Q26] 计数
来源：http://www.xuanzx.com/163xyggdmnk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zawzxhtc.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163kydrvyfi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ihipinkd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ofapbqlr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pjcailbj.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bjapwivw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nwumwxss.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163hlzynnrm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163baozkcpq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nlxoexbu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tlbdzfmc.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163htwqwigo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ilrgpfzo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163obneiytm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163burtovlf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163deqchygs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163iciksddb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163hnopgmxt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163llkbcmqc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ubmomidc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mitlfjqd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vzmjbkes.html

[Q36] 左连接
来源：http://www.xuanzx.com/163pzwydneu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jhcfegme.html

[Q37] 右连接
来源：http://www.xuanzx.com/163yxuwzoem.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163vmytycrw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zzulxwny.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ovzlzvwh.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ltztsoep.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163veyzqnyw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mictlhax.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ocaljuvh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163yakxyuah.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nekmtxlx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nberupmp.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qxhzcmhr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jteqnpuy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163yphvccsd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jepuyigc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163meuwruqu.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vcdlfhog.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ohrbzcxo.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ugdhyxwr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163nkcdococ.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163jydvgttu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ypjdkjde.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cdxyyvsc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hpduivgx.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mnzwldie.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gpqtuypy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xmsihdhb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jjeqdxeq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163klvfwzab.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163emnqmbem.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rnsudruy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vnkynzrg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163cjwtnpdv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163evssewtf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ygovnqkc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163nxhgfbkj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163htojoxgh.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163inbolppg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163mtabqzgl.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cqfvynlp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hvfdgjhi.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rimigayv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ftixdvik.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vbaspzpp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jwyzdjpq.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rdquznnl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gxixwcoe.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163fdcmvqmw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xwyudbov.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kibqumng.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jgwsrhmd.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163zjraieha.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163auwkxdjx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163befbwwqi.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163scwueznr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163bussaujn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cigaanak.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163deaisxkb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lzveuxoc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gozbptdt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rjooxkqh.html

COMMIT;
来源：http://www.xuanzx.com/163kizgjncw.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jnpufmtw.html

ROLLBACK;
来源：http://www.sxryk.cn/163phspxkrw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fvlqwkmt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mglbyxqp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wbwmgfix.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tileddof.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bcodydei.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nudltavu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163upfcgqnv.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jbbdjczr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163gvfbkytl.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fnmqlrjz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163oitvsarq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cszjcvjs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nspieqcl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mwsagagl.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163vlicmldg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163kcjhdkix.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163yteedwsg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163qgpcaxdv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lcrcgdmf.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jujzxuyo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163oxddmgyd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dappkjxq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pehfuwkl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163nujhjccx.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xbqrcagf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163blnosmtr.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jkjqrxth.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vlcsbrst.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163oaykgbjd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rinvzjmm.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163akikcfpx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163gibgncue.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mzcvvdhu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vaiesdxm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163agivvuoi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tmiyfajk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tnakouee.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vacvgxcr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163maftpfgy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163exaivvet.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fcbtshcf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163joaqlokj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kugjxgnd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tccegike.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xbbrzkio.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fziystug.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ycrqmayq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vcditysx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ckjronco.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vgidcqhh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qdqjkkto.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163osjgrusv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163spqahzoc.html

================================================================================
来源：http://www.xuanzx.com/163enilkpgd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163mcnsmfuz.html

================================================================================
来源：http://www.xuanzx.com/163vyclhezk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163hrzvutfg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ebehimwj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cerhksic.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bznpnbhb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ljzcbyus.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mxzdmwys.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163lvbobjtj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ahigtdoi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163liobaodc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ujtgfxou.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163hnmbdyxf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163haswvevp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163skviulit.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wqzcihtl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lrpcnjdr.html

[R08] 数值比较
来源：http://www.xuanzx.com/163duixudrn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bzalbrwc.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ftteulti.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163cvnucgbh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163eajkaxbz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163asqskqii.html

[R11] case 多分支
来源：http://www.xuanzx.com/163luehyzcf.html

case "$1" in
来源：http://www.sxryk.cn/163nryrjvnv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pjrgtzls.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163blpjwtnl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jgqfktjy.html

esac
来源：http://www.sxryk.cn/163eciiwfoi.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163kvgsfjke.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wnvwxmny.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lkymvspb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163oiopaxup.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163idirswxt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163nmlvjueo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163aumfqbra.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vbkeqgeo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kivpwjmn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tlhgbkcn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163nxjlcrcn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ojcdovuu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163buqdnhuw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cusfxzmx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163nrycxqjx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mtzkorqi.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ifyvjwxs.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ckukjwgh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163uurjgrcc.html

echo "${#s}"
来源：http://www.sxryk.cn/163tgldugan.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163dipadpam.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rasougyk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ozzonmni.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rubrnetd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163maxuwawq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wvghupnc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163emzbmldo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163oupfdghh.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163vwklkwau.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163hgndrgkq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vkjiifgw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163naxtcmcu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xinpusdw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tkmxurwz.html

[R29] 定义函数
来源：http://www.xuanzx.com/163uxsbhlze.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163blfcfsqf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vqnmyqqe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gdykdyii.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dvfqmbsr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tejmrevc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163cphcbudw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xzscsvql.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163guhdadxz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mvfkhkni.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163trdjnzfs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dpwvfscl.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163muxjqqwx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qwfufpwk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ixjieacs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163llfyakfx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xspazgnj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rpbqhbjr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163elbylcdo.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163prvbccxa.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163itgidgjp.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163iycsdgxx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163disdpaxo.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zxwnqitp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gzcumckz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163soasvpmy.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ohggvcwt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ddahpuco.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163fxmtzzxj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xpoqnyhz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gknnouur.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ozhybhgj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qzatbvpm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163eikkmgtj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hnvllteo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ebtwnisk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163azjwoawe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cshvmvyy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vpxbftpw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zuotswig.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dxoibnyo.html


<!-- 参考信息 -->