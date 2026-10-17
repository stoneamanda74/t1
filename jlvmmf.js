外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163zczhdczo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vligbtvz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163fzkqlhgi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nbrgatui.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163aefkglji.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qivfipai.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cknzfhfp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hoblxwax.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163eblhpcma.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bppcaozn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wdvcdybr.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163edvefdyn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mihdnzpt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ckqonbvf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mbsowlej.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163bsqxwbjf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163netwlkdm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zsrckyvj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jjukrmaf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rnyukusn.html

================================================================================
来源：http://www.sxryk.cn/163nnduieze.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163myyayskn.html

================================================================================
来源：http://www.xuanzx.com/163zrlxxshf.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163anxzdoxn.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ahpmavon.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163khnfeaca.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qmudyqdf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163usvljrfl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163izpzeqla.html

);
来源：http://www.xuanzx.com/163wwatoaoy.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163dnszwivb.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163sidcvsbz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wrdaikpv.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163bhtgrfrn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mjgrfsid.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163lyejbdfj.html

);
来源：http://www.aibaodan.cn/163hmipgrrd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pfaclzur.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163klswnntv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163gulqamea.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ykdjlhvr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xhennovb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rqnaunjq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163crubxtfh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163kcrymwtf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163flisivtr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163uniwnxdy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163dqvopltu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dmcpasyn.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ynbpeaxa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163olbpmcyz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163epbimqeq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163zmhhuajh.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163bcpyzsnt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163csdsghpm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mvrtowiy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163balctaih.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163quacjufy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gtvzhewo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mjvxybnx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ucdymvgb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vfmyzjht.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163vioinbap.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ywzgqpnd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163shngtcao.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hlddmywq.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nxtfwgvg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ymgkgloy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cyorjyon.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163pgmagupw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163dlpdrgdy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163oodjsfgj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163lxiuyerr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163rojihgtx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qbjfrcup.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dcbvvxff.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bwikljzv.html

[Q22] 排序
来源：http://www.sxryk.cn/163vfnwlsqe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ixmhmskc.html

[Q23] 分页
来源：http://www.xuanzx.com/163nmrzevio.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163sooerrdl.html

[Q24] 去重
来源：http://www.sxryk.cn/163qhirgoog.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163dxndzryl.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gttsyhlx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163udigdtyu.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qozsqkcm.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163qlbmdpkw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qzksgxue.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163guchkbmt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mhylmucv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163iqkpzhgc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163isepzjzz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nycgdhfw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163blrzsueu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tgicaarv.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163buinjxhj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ppejnplj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163djjbacjf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163etxmxhxt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163amnbkfyb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163waqxpyxe.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163icevuzyj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163olcamkor.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mcqdmyfc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dflkpbph.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hbulheai.html

[Q35] 内连接
来源：http://www.xuanzx.com/163uejtyyad.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dzokidsp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163kwcjkent.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fyutwjcg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vwebwmbd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lhupjipl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163npgrhhry.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zeouavog.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163dvufxoep.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ukcxgfej.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163twccpnqc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lfgsvaxu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163aadjdjon.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163shfpgvld.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163annzqymj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rusxxryo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hdzytrtv.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bdoiqlih.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163xafbzhyj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qlobbium.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163qvywdoas.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xmcordog.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rxnyiwno.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163lxptrsam.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dizcelfg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pumumyio.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iaxczzbm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tbwpjyet.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163fwtcqwfe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ozaypujo.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dvltsvec.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mmomwffw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ryiogmxb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163hpywatpc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dropsrip.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jzqyhvbh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lfwdglxt.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163spjmtevb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yoeliyzy.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ynmfmcly.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hwbbhdhl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wmtbojpe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163vregstin.html

[Q54] 清空表
来源：http://www.xuanzx.com/163eesjwdbh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163tjcflfhj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163krhrtwaj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gqiajknb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jwepkdln.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vtrdsxkp.html

[Q57] 行号
来源：http://www.sxryk.cn/163cbqmlnmn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163girggaza.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163iwfyvbcc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ijpihrhe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163mitxkyft.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163sphjzjbn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jxaevbua.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hlipgehu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163huagnfyj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ikhflsct.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163keyrejqw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bdbeztzn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wzyxidyq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163usicyiqe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163juamdmpc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hzavtsou.html

COMMIT;
来源：http://www.sxryk.cn/163rzgpkrtn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163wobjopit.html

ROLLBACK;
来源：http://www.sxryk.cn/163gqxxttpa.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163stzlglqf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vncziuvw.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163slocdnhs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ukbebofs.html

[Q68] 保存点
来源：http://www.xuanzx.com/163esnqrpsz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cmqdsren.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gnboxavm.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163woxmitcv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163maeikyvc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vkiioito.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fomlkzcs.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mirinrde.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gnzdtuhc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163putlbmxp.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163sdvcxbab.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163kcyeqooo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zbgubchb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163potmhcoa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vupyxsof.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163aevldler.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tatfaiqh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163smebayta.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cqgkimra.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163pzpdbqnt.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163uyssrmrp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rcviofhn.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kufuetnh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163oaratgbc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ybjxpnxt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ihhqetvq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ctaebnia.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163khzcciqd.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qkojvyaw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vmefwydu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hicxqabu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wdkpymwm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163sktlkyry.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163conhymae.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vpfxckvh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vahloudd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163rjcahsht.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163krknqlrz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jljptlgx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wfppakit.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163elkvkhtq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163dcsovxay.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zsnufckm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163oxoyiasy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nrftxvfj.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163meqkqkdl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ezbowzzx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163gynrbxfp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wnqvqtzj.html

================================================================================
来源：http://www.xuanzx.com/163nqkmcnvp.html

R. Bash 专题
来源：http://www.xuanzx.com/163kjehzxux.html

================================================================================
来源：http://www.sxryk.cn/163ktpayqcy.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cyibwbkq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ryuvdveb.html

set -euo pipefail
来源：http://www.sxryk.cn/163tiwdcxgx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rmbqzean.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163odfmpcfp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yqzsdmdf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hkdkfhop.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163igwqejmx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ixmayinw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hjkxmyba.html

name="${1:-default}"
来源：http://www.sxryk.cn/163besmpvvp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163mawxkbjl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163buhylyft.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163pxrvwncw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163uaoujvtn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xyfwrqse.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lijdlofb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zygtvatq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yzgwkyun.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163khsfcobk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163aiyipvab.html

[R11] case 多分支
来源：http://www.sxryk.cn/163igkkxhzc.html

case "$1" in
来源：http://www.xuanzx.com/163sndvxuko.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qccpaplp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mmlzcmyp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pgeyyqtt.html

esac
来源：http://www.xuanzx.com/163litzwggl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xoebxluc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163inbyucnd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cwvgdnhw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zzmvqzeo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163dhtqbdju.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163unnarthq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163sgnxmcvj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xmcwzxxh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pclluoke.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jjxilhxm.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163twgaooxy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fkvmvgfk.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qzfxlpuu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ohchagob.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mvkulaxu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gzxcypeh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bduhyaqe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163diuycvas.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163gkzuflvc.html

echo "${#s}"
来源：http://www.sxryk.cn/163yzdrkxws.html

[R22] 截取子串
来源：http://www.xuanzx.com/163tgwmmehv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163nsbyxksw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fwkeqvrv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163twudwgij.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hbschcgz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wzqrlsyy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zshhxrrw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dnpkvsar.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ssatlpov.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ebtyvwmi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163puesvsvm.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163irtkvgak.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ljtfcexv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vvmzzgkz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163orgkphbb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hnvnladn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ojhaucir.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zphxhnnf.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163dupeubkv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nlskgpan.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zydnqwxc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jmeiatzi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163btmgeyei.html


<!-- 参考信息 -->