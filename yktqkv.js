外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163gwtkiyfk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163oemaxdmm.html

================================================================================
来源：http://www.sxryk.cn/163pfhehkvi.html

[Q01] 创建表
来源：http://www.sxryk.cn/163yodzlglf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163yxqoywux.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rlqtwyzk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ggciwomp.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qymtrreh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ettopzxa.html

);
来源：http://www.xuanzx.com/163vromiowk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ieklvlgk.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163smbvfeos.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163piphmoyz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163pobsnhpg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ypfajlfi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163szxdzyqf.html

);
来源：http://www.xuanzx.com/163cfisvdyo.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cqkmxtfb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vkmectft.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rcveignt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vxtpdqzn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163fngcanxk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hatdioan.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fflcvpqe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nlxgjght.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ypbmylvz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ooujxhmv.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163olmzqhta.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mljvhxxp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xjygfswy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163uyuuvahh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fwxymhlq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163sjklvtxn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163igarsymh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bkwttfnn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163uqmxikbt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gbcxrfkg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fnyhnbyk.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163qdlvqdvy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163hnqocbng.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163veqfbcwe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ctpyjfbo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163iyzucrsg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lrvwnxxl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gocloone.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lviltlft.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tavywugy.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ekbyxxoa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163dpagxrvo.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163oddzlhqs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ecypapnx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vnetcjxm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zbvmptph.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163aefxjbkl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wtpaulbj.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ncwdrjbx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163otgdnqaa.html

[Q22] 排序
来源：http://www.xuanzx.com/163slzovkmj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sqbwkton.html

[Q23] 分页
来源：http://www.xuanzx.com/163sehipowj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163pgmomsfl.html

[Q24] 去重
来源：http://www.sxryk.cn/163afaanayi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qbovenrk.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mvytvcle.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hqvaudao.html

[Q26] 计数
来源：http://www.xuanzx.com/163qbnyxohl.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qoubjzvq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xiycippg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163xwfllbbn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xpxvhhpe.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lmmpufcy.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rlozwddo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xhqpjrsy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163usamdjht.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ghtzkukn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mhcfmjmy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jdsoaved.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163rihwcstp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wjklaqgk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jcqnbfpn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163pjotgcln.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163odxcvuhb.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163bcvnawsn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pkudnvec.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mhnqjkjs.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ymorjjpv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163fylgwinl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163aykkwzii.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ofuelfud.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rvjotbeg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163prmwutjx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xtorlfpv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ydfmmuym.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zgfwohcs.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ucqpscoq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gzqdugcr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rllqqfyh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163npanrbnk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qfzbdatg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tzvpdjot.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163yujqaabn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163muwgkefg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ksyxnuxv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gynpwrwr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163seatwuge.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163atgajfjx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ovzeraky.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163zagxmjon.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lyjkpbmt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fchtcpkh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xcapjxlh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dmrotqjm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ekrxbfpw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qilmccxq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163scjqpver.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163pufmecgw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vqftslrk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163gtybkkcn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kftwttlt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163dnwgaznu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163pdxyitvi.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163otgzizac.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vvhmmsus.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xycazada.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ialndkka.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mjxwyxix.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ubtbocrb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163igmfigdf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rlqjrxdq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hvfkmveh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163vdhhivcr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ueycffxf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163whxgazmf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163drojjeoc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163huukrzej.html

[Q57] 行号
来源：http://www.sxryk.cn/163ibklvtqm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bjklejvb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uxayclgg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163bnimuumo.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163luyaiuis.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wfwafsmx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ttkngmtu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jcaevdur.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xcbugxwe.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163esmgvqsm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qtofzopj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fjgkvkir.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ltyevfmx.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wudexycg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uuulldvx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ythoevoh.html

COMMIT;
来源：http://www.sxryk.cn/163htmymxnb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vdhfogwp.html

ROLLBACK;
来源：http://www.aibaodan.cn/163buquojbt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163buqkjame.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163yaergnga.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163freznmoy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163exqtkqmo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163smfqfyyq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163miuuuvts.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163qgtebfjb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163utvzjvip.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lggjjecn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vmwxkxwm.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163llltlzbj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ladjaiqk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xbzwkfei.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163dlrpmvoh.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ayxxdcyt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ckvydzht.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ybuwhyfo.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ahzbavxs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dvreervb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ktwbtdkz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163rqbdfcfs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163shpfjiue.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fyasmftx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163thgcojot.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163puhqgxdm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ndqbscpl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fhwixjoq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ruffhnup.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hcgoohrv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163upghzzyw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lyofsyoh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bjckbulo.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wkhzvkuu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rmlwkntx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pldwwrhk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xjhbadtu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qqbvgcix.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163mxdqhxml.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mbdenrus.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bftywmrs.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cvmydirs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wdoldfkc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163edlmaqhl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hwejayjj.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mrlstgml.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zsfdjadd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163bptyyyop.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wjwguddi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ekeorjlc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xtbnpslg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rocvrvwh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tyobhwvb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rnugkjyu.html

================================================================================
来源：http://www.sxryk.cn/163whkglrli.html

R. Bash 专题
来源：http://www.sxryk.cn/163sgmsqvxd.html

================================================================================
来源：http://www.sxryk.cn/163tynddoxe.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rmnogjon.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rbpmzqfi.html

set -euo pipefail
来源：http://www.sxryk.cn/163bfxgboeq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wzunrphv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yvswsidm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vjmeuzzd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163leuhhjhe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163yzodzzrb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163uihvofyi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jesajwcx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163etgohgza.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163calagiin.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qcwpyvve.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jcpgrxdl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163qsvfoyls.html

[R08] 数值比较
来源：http://www.xuanzx.com/163iejfhvji.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163idwszslf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rffbxfmc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163dgtocrrx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xhhxdawj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ewmehcgn.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xbepznmy.html

case "$1" in
来源：http://www.xuanzx.com/163pzszukjo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lyiytjkt.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163egmqqzpj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mldxtuul.html

esac
来源：http://www.sxryk.cn/163winyybcv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mfdiahyr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ybwgewtq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cdiyirep.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gurrztwb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163hregcsww.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ueoyevek.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wtzqttky.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xvurdbgd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163clbjmmnr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ewsgjrvn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bbnyvmfi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vpnctpft.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vzwyysff.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vbcjdijd.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163uegmetdp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jvvjxryo.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yopzjbiz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163bvopyoff.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163epxchajq.html

echo "${#s}"
来源：http://www.sxryk.cn/163giqqhjok.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163atjxambn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lleodryw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gnorkvan.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gvjqrise.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wtjkxdjv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163iolgzmsi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zfvfbhrf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bqaqqcve.html

[R26] 命令替换
来源：http://www.xuanzx.com/163llllvgbr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163iakjtwyn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163aluibrrl.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ggpjojhm.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lgjuvhpe.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163dwmfomud.html

[R29] 定义函数
来源：http://www.sxryk.cn/163soehblcx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163deekpfcp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dsdoqgdl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mepfmptx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bnnzhlae.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163evrjrojy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163enrnjhac.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fmpnhuff.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ibeatsox.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163aowimmme.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jemldvbv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163keiunijt.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mwvmvwou.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ugcrqctw.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163thwizoiq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rogugqdk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163agithylt.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vbsjlpsu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hchjcaiy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ulwtzwkh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zwqnfbgy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hrcjuivp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zlksyozy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163kcydrswi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vgaqbtdr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163uwiatoyq.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163oplkcstz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ggmpemed.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163diwqrehc.html


<!-- 参考信息 -->