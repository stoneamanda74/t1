外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163kcoypdxd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163tdgbjlks.html

================================================================================
来源：http://www.xuanzx.com/163psycikdf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163bbnefvji.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cfhvgggf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ifyzdsgv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sizoncsh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vdfzcupw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163bfzsudwk.html

);
来源：http://www.sxryk.cn/163ujtkpybm.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vxhanzzp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163dnqyvupo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mdytqulj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dxktnxtp.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cnenuziu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163magxrxqm.html

);
来源：http://www.sxryk.cn/163rczcouzf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163buxpwrfz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ocupazuq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163isliwcdv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vtbnnqxq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wvdqrmob.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vgretmpu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jlzpdbav.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xlqfgpqp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163orwfmcjg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bzhmleht.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kdqoylhb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xlpmiksu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jciibibf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163pwcmrdai.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163yraspbur.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163mcaqkwap.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163rgrekfsl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163uzhnmkvh.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163enhsuyxj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jzozynwj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163guvxpwuu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163gevvkobv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bnjjjbhn.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163cfalzewb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yjvqnzxi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163fnasqxjp.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163aghnseni.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fotvcbuq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163reozwzuh.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mdjkkvqn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ibnbgzwl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dagtlgtd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ibbbwtoi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kpzltqzb.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lzjpqufx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163zapvtmgs.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bqyiywam.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bsqnlcic.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zjhsplee.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163dfdwueab.html

[Q22] 排序
来源：http://www.xuanzx.com/163hokdkxti.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163unapylgm.html

[Q23] 分页
来源：http://www.xuanzx.com/163wapdmkmb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wpwddgnc.html

[Q24] 去重
来源：http://www.xuanzx.com/163xlexztvo.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rzeihpme.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tkxymwqj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163lzefwwyt.html

[Q26] 计数
来源：http://www.xuanzx.com/163kcezrbiz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163cukcdtqx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kpwvvehs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163bpniecxd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163pxvlhkxm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rcbrkass.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rualxaay.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kjearjcg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zyufjhdu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163peqbmsda.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xvcfzdvu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163iyrxklkd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163urqfxhwr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lfnyxbtz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163duutpold.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ckwtnfsv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163krmrtuwr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rcvjucdi.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163iqyrgrsb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dkvmkjzk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ajwuzqyo.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mlefxxcr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pqqotsbi.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nwypvaki.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rcdsyddh.html

[Q37] 右连接
来源：http://www.xuanzx.com/163edbuzqke.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xksycipr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163buejlgvi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163aezaunzk.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163quzcwzjb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wjanltee.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pmggkhgp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vuazuzhz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163aemgtmaf.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hpwlvihq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163eiozfhjb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163htwlbuuy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lyivgtee.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163nrdxemjb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mtwocbyq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mvjqdlhd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vykdjibo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xxwcavzf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xdocmoas.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fcfzzkkz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163wtzimtgb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bpzeypcl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tawmslxi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163irktboom.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163kpfkmtll.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163zovgocmg.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rwypthdz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163fnzgyajz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dcfzkztr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163axvhysfc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wgydfjfq.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163yavxsjfz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163pjilonon.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163xlzuiide.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163urcorirf.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bfqnqcak.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163geoylqlk.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ortelfcy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163teslwudw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vxcsrosl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163hqpkxwfx.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qqibnzvt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163chshtefo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pejplris.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ocxzoadz.html

[Q57] 行号
来源：http://www.xuanzx.com/163qntwhjus.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163eyxhyrcm.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xsvbuvmw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163csjuunvw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fkylemhc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gcxojtbq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wvgikmzu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wafyqvbd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163tfpfgeuf.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163nrsahqwt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163tdvodujv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163krrbsxyw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163firyuqoj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163dbydvuxs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163bpcrzczv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163kinzzwtn.html

COMMIT;
来源：http://www.xuanzx.com/163ysamixka.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163yvmrliyz.html

ROLLBACK;
来源：http://www.xuanzx.com/163ovcqhmqe.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163spmjdbye.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163dmnnvsle.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ueetetzr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ozldivtb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vpfzssgw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vlfbtigb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163soijfzir.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dykupxam.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163buawctqr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tnuqfnxq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163imnplurg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163irzgymef.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fmxrvslw.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lsnjakmo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wzrdprfe.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163kspthczt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mapzodth.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163oenfvbqy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zkhedgpv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gvgigjgu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163yfpdzvvb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163rehurfjx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vftkwrfn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163uijuknni.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163maupqodr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163sonhjxfe.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qfxuefjn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hsrkvmue.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xrlewovk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qlyjyqkd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qszwhnjh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tfzstbqo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gxtmqcud.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gcryzqlh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163efnoblqn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ydxdpyme.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163rmiznpwt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hjrawrfc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wzjegstq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yvkxlygy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vyctbnex.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lscglsqm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163mwbpbxtp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163udpnxuuf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ypcqnhqh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163blkriiqx.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ccikfayr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163okhrcnix.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163epwktsia.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ymwadsxo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ttvcfhzh.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sjzwiwxq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163adlootxc.html

================================================================================
来源：http://www.xuanzx.com/163ddrudauf.html

R. Bash 专题
来源：http://www.xuanzx.com/163edlithyb.html

================================================================================
来源：http://www.aibaodan.cn/163xecwdodh.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rqwddohs.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163asnhkmer.html

set -euo pipefail
来源：http://www.sxryk.cn/163xqomxpsi.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163lmlhwyul.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163oxjingqh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163znidxhib.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fmiibuhv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163obsydzet.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163siwmeiit.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xesjvifa.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zofznxeq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163tmxobgze.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xprbwviq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163nibjbkzl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163punepoct.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lsunmzmp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lduxktcr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163prdzqdya.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hpknlavj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163wugwcclg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bfefyqnc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vxeqnyyo.html

case "$1" in
来源：http://www.aibaodan.cn/163dsiqehrj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163svitqbbe.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163fjgpmopj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163avnrwbyd.html

esac
来源：http://www.sxryk.cn/163gfylxono.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bhckjiaw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ypzjfarj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163anyuqyay.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163purjrrdi.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163uemuvdrt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163tnilhelt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xtteceiv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163aahojxvc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yqkncohm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ampznjwl.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ojlvsfhz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163zstopnmp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163scbtthen.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163aeejsnhy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163iwjodzfg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jitnneeo.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hheyxvxa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163twywfule.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163sgxipjjn.html

echo "${#s}"
来源：http://www.xuanzx.com/163shijvhar.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xfnkbjyh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ulxeetva.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163dxmwwhqe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zzagwcyt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kmncffmb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163brgpndte.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163sdqytenn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qqmofhry.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rpnzrzta.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163hyqkhqhy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163txpgxjns.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ynjbvdxe.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163axoagobn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163sphxjdnw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pqtfpwpf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163okesazjz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ihgjcnrq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jdhhlrys.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163cnxetxqr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163zbqretda.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ejdhqudj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zdvmqqbk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ltnfwrkh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nbknqvaw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lmhhdljh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cpujducj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163kyffrkbq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hutsvden.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bgazbozz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lzvkbybx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ovyawrtv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163slwgfilh.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sgrmerru.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zebtmyda.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qlhqbiaf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163uocefzrk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dnwhnyle.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bwzdgvyv.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163yuexcsni.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ssdwngkp.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163koxfbmyg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jmdwhqfv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ypwkknwd.html


<!-- 参考信息 -->