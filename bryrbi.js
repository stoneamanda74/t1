外链999!wailian999！

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163fdbvnbxe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163owacmjlj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jsexakqq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zfaicubu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163urnreqkn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ghnrxqku.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xojnocyq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ofciqbqo.html

================================================================================
来源：http://www.aibaodan.cn/163wyavoozm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qupsynuk.html

================================================================================
来源：http://www.sxryk.cn/163ugdvqwzl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ilzirxbx.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qbtpeztv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jcbpfavs.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163aidloxlv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vialmaed.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ujyrzofl.html

);
来源：http://www.sxryk.cn/163oimanand.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ppilxtet.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zquerglp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bjkgkvqz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ubczlplo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163umotvpnb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163sfubqxpx.html

);
来源：http://www.xuanzx.com/163tktthllq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tdnsejjb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fjwmmuyf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163soatkcfl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dksmwmwb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zzwupsaq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fuqvrozs.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ihegqket.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163crgtuprb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xnacpkxm.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nsmsylwj.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163cofqrymp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hcelicsz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gvrgsine.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163erxmjoxx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xpshlnhc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jcafjhqv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163qjyzxvtp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uksrlktl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xrwuacux.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hgzvjbod.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dibdfpgw.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wdlsrfaq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163pkstpoqz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hcjhgvab.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163snjvcyvb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163upjhekbw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yrbsnbcs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163fkmgisex.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163yvyiwbtv.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163idlcmuxa.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163juiwjiln.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163eceaeojc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hcevyjli.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163najrajjr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163xugisrij.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ceuduuuo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gzltgpvn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163xrmejska.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163adksimcw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xaicdyml.html

[Q22] 排序
来源：http://www.sxryk.cn/163dapyknvx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163njuibrtz.html

[Q23] 分页
来源：http://www.xuanzx.com/163hvtezhyt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gwwnrzqc.html

[Q24] 去重
来源：http://www.xuanzx.com/163nqcsqahu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163bxgxahfs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xklyfpfe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163xdwfprwh.html

[Q26] 计数
来源：http://www.xuanzx.com/163zdozivkc.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xfognvnn.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rlcqupxk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xjitjecr.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dxdalsjl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tctjnaug.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163pnmymmuf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tonqxzmw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pxohbdyt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qscppcgk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pwrrfpaz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qpbgfelb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ammxsfun.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oktgaxnr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163mmuhrcxw.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xmapkjbo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zypbvopw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rvbsxixe.html

SELECT * FROM (
来源：http://www.xuanzx.com/163kdwljnvi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mqrmirsp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163urzqgkcr.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vrifhtwm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dihtpnuq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lhxcohnn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uozdewsn.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kpuynzej.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163gzfxufzm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dmepaukj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zijezxmp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qknjywwf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163cdnwrspm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zrbimpke.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ykryzvlt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dkicnwco.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kylaltby.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163npizjtco.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163nabuxieq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163zwbuwohp.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wggpezwr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ksikloho.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vtjekaxm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kqjtzawa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zzwngqfc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163vdpoinfo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yidimisj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163yzsaompk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163trflajel.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163uunhoftz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uxgjwcui.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wxmmevdn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qavzbcvz.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ajluxqaw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vmeenmzg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ycpcyfwa.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lyzbjpmx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163pmusycqs.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tiamaddf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wabjecpm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uryvoqbs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ykzinwsr.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rouagesc.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163demrubrb.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hupebalk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163wvfikoie.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163azfoynja.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zqpisplo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vjpqrwro.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gpimlfrj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kwyhkevj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kxncxcyz.html

[Q57] 行号
来源：http://www.sxryk.cn/163pbtklfqn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163uojboxvz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163anickeme.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yazswkwy.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163axfstrxs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ounqbqwa.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163cdappufh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163tpphvqfx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163agodusew.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163eyiwkskg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163dpmxoumi.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163zxsvncjk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rufvtwmd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mltlxqtl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qubznchh.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vuysoeik.html

COMMIT;
来源：http://www.xuanzx.com/163qcgvagpv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wafmvwih.html

ROLLBACK;
来源：http://www.aibaodan.cn/163lugxyneo.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pethqhxx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kynvsetd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vnojlpjh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163cznffxji.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qiuamljo.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cstxbsfs.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163sfenjbmv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163tcpgycjz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163onmliaup.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ngspezmc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dwpstavo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163tccslcni.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zuiuwceq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xzmyiqdf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ixtbhxmx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tdnltliq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vdjwsrum.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163gspimvsr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163syoitsdc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ipskvpda.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kimrtsvs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163rnvgaupo.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163erubaxzk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dbhflvsv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xlsntpxz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hihljxil.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163duqrmilg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qmacyfxx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163skpgbyyo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wugmuzar.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ykqjxwok.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wsszuqpx.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wkonqund.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163apusyynp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rlhpsfpt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163csuvehaj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163frkjcvxx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ekabluta.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163litrjwvo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rmxezens.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163qsgosygk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fheycoiv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vblpxqmy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ebzppiuo.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mxqihlju.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163cvwpyzhz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mymfotkb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bnohhomm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163eycctzhh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ewdeifiz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bcqfwobj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ylzlyjce.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163uzcifduj.html

================================================================================
来源：http://www.xuanzx.com/163cjpigydm.html

R. Bash 专题
来源：http://www.xuanzx.com/163ixvfnctz.html

================================================================================
来源：http://www.aibaodan.cn/163zjaqerqt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fltjekqp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ekdqbcgz.html

set -euo pipefail
来源：http://www.sxryk.cn/163bdljzdhn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rvjylfle.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mwqrycow.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nkztcoxt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163npjbdgvw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163iwehppnc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mbiajgyp.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ugebtlmh.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163apveqhme.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ysruxddl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vmrqxsge.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qhjdamjh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ypyxbkyv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163prlahlrp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163okfjzmnf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tmkdunxp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hlomdttq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163uuvqsosc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cmxyqqfe.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bmrcexym.html

case "$1" in
来源：http://www.sxryk.cn/163hyaunxvs.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yhnixbxo.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163usqongvt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ixgtnpge.html

esac
来源：http://www.sxryk.cn/163tgkfwykz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tiptsrat.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zlpogilz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nozvpyul.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ifneyjiv.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tljczebk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163leqptaqs.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kcazhgwo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163cfnwpayt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163soggplcg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hickegcr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ekzmwlmp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hpsqdusd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pnodrtab.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163uzmudsyq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163najohloa.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pboqayxq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rjysdtpp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ehflztqu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ujaezulj.html

echo "${#s}"
来源：http://www.sxryk.cn/163lhcngwnz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ltltqcoz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gjknullm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tgzlkxer.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163qnnvdydx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kvtdbbpv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nyfdcgnw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ybvwyrfz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163cmpsqdmp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rcpleedz.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zvkcybco.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ionzuvpx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163abbciiwn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ykthrjor.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163oxkgcthz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163leipsdeh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lupwerav.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163akulcfjp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163eanjvvwu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ygbsuppr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mnosniob.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tbccmmto.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163chlyonij.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163lnjmlroy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163unygvtyq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ojsldakm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qbqtzbkj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cosneury.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hagpdmzb.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163weekpxfw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pwffrcuk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ejeyzgsu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163exketfoc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jbpammiz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qwvphdph.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kooadwfl.html


<!-- 参考信息 -->