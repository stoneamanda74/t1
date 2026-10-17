外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qqgzvekg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qvfxitqy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jgsajkwc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wcbrdedm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ysjcqgko.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cytbtntt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163llzclquj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lbujbvrn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163krjfohmi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163lqyhwwjt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163spdsuaou.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zygbaaas.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kttqoixo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qmegfymw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rjpxduph.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163uxlsoapd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jkilcbhx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fohljpwv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kzxdvbpu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163eqbvesbt.html

================================================================================
来源：http://www.aibaodan.cn/163inplhxjb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hijoisib.html

================================================================================
来源：http://www.sxryk.cn/163zrjktpof.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xxkzlqtu.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wixdlfea.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wdlfhnus.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163pnrguqea.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jtbbavvg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qbnuyyvv.html

);
来源：http://www.xuanzx.com/163yugpnbfr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vrfbxfoz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163anqycycf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fqfxynmp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163grallyya.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163njoiqxqk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uvdqgrad.html

);
来源：http://www.aibaodan.cn/163xenkkwne.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qmhwrhsy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jgdoiylm.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qjrjetie.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ughwuopn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yzekvdut.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163tlxvtlro.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163gcsrhqmj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uasuvmww.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jsxtbrwt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rejbchob.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fjvsccpw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163yrvydpwe.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jvwlzzhc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rixincik.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163stwnkzgl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163wprzxmbg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163pjitcjkx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wikxzygu.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ldhjlaxs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pttaekal.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rughwuir.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hfhrvtxt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bnhdtsfn.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163typgnbwn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dmvnbqwi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xvvluxif.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jaemqcms.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ndmnyvnz.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rjhswdky.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gntudwvt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163xwqqkvnu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ukirshso.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qkkwimtw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xnxbqlmj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163thenciwh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uqslofwc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dvfalply.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dggvters.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gsbizwzs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dbztvdsz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hwrixomd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ynecvdyd.html

[Q23] 分页
来源：http://www.sxryk.cn/163uaoiwjdh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ngjizrbl.html

[Q24] 去重
来源：http://www.xuanzx.com/163saoarcxx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163leslrrgc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ftkiqpxn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qtrglcfn.html

[Q26] 计数
来源：http://www.sxryk.cn/163wikazmre.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163iwntqcuw.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mebzqnka.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ubfxdpzt.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163nmdurkjc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ehbpjern.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163eeeyxdmb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qcglefwx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163awvqvybt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eskuucwh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pxxkzmsp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163zhispuuk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wcqiokje.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vdzjvlfd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lslkcarv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163okjnrxro.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lebjrkii.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163celkkcjf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ryvnltld.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tgbgkiip.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jxudedas.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163cxhnoxdx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ogujxhgm.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qwyusfdo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zhdcjpgt.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163sieposcf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163bpkrkocb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xqkxohtf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163afaksszk.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jtucoawe.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163wogkfryz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fdnfxmij.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163puvwzfjh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cmejtfwm.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qywhumll.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qslbydjs.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163exczwhqi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lvvcevzl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hwktmech.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qtqmruef.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163mhhklszp.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hzvrqnjp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163urswwiep.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163tboceces.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hwfsexpu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lwxttcrc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ovztmidc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fvsvsott.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163iduuilaj.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ilobjnjb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163uaszmoid.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fitnpxuy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uxhlbdiu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163aboqkvjw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163yzvzebgf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163elpwsywm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163czueyqay.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163offqmjgw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163kwwrvcxl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dywxfamo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163aybvfgrc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tgyvenjg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163bqytnrmo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163obkqjhlo.html

[Q54] 清空表
来源：http://www.xuanzx.com/163jnauhcio.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163atuiprlb.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163iamfpera.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163cmjakdbq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163gyuvwafl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163asoqvxof.html

[Q57] 行号
来源：http://www.xuanzx.com/163mpcakdqk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163yzowzdlc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163whqsnrtm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163afxcwgxu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163owpslanb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163cpqdozsg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163stusyxux.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163skflvozy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163gdggwmeq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mpxxlbwi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ekgncrll.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163zsuxsvcs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jzshqtvb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163zqpvjbry.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nquolfoe.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ujhtgkaa.html

COMMIT;
来源：http://www.sxryk.cn/163adivubzg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vxemzxql.html

ROLLBACK;
来源：http://www.sxryk.cn/163ihuptomu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163clgvyyqt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163meqamlhb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tjphprup.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hjlhygqc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mozymyfp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rwqqenqr.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163miqftaey.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ikjgstrt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vdportua.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ilolpvwc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gegjzwos.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qjngtsxv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nfevwzcm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163oeeqtizd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163orwesoni.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163srjrylzn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jqzqchhh.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rxhhnatf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163dkomgcku.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163foaanlul.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163aurzgtpg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163owaajlqa.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tanctiwn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wtfjsmyv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jnpvznqw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qcireplx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uyjsvjdp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163fzxlheyx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vjhxnuzl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163usfkapdp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vcihblyw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163udduacju.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rltmmdxv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163uyauzmxr.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zlpuofrr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kgkangso.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mfrvqanp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ckkasehg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qwpuzbhk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fsnejsfc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163nzositft.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gamwqdxo.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zokvtdid.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163eooyqdne.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xbldbdbm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163anepnydh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163imsioiwj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163yfvhqutm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cekczdvf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xsampzol.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fxymufjh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xwhykvex.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xwrmfskl.html

================================================================================
来源：http://www.xuanzx.com/163tehuyzme.html

R. Bash 专题
来源：http://www.aibaodan.cn/163thcjfmfe.html

================================================================================
来源：http://www.aibaodan.cn/163iydapzvv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bylcwkgs.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xnfskbsv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gcqisfyb.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163hejaiqtw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lurmnlxo.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163iigfjgfm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ahfvappu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163noakgbyv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163backnvio.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163oqwsrxea.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rkiavrpd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tmejtdiy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163eavkzvrp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rfiicvfv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vahuvfrk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xrehcrjp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163jylcippk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vkduxtkm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bjflwotp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163caxfpczs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vnvvserv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fmwonlty.html

case "$1" in
来源：http://www.sxryk.cn/163admlgjif.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163igpoxtrt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hfnudbok.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wmattbop.html

esac
来源：http://www.sxryk.cn/163kwxlmlcz.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163unwxymgl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ocxdovad.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ytqavcgl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ghyklepw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qcwrqpak.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vamgyvhj.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xrvceufl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163obocklcz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xnqtnxmc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163yztwgoyg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163djbefdzg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uqlutzmp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163nkcgszoi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lejqitkz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ybxslmjl.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163goesukvc.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ceykwyer.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hduldrxr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qxzizmin.html

echo "${#s}"
来源：http://www.xuanzx.com/163kwqnupks.html

[R22] 截取子串
来源：http://www.sxryk.cn/163bxitzggq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163logvxvgl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163oznkjizp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ahdjmjpa.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163omuszcfs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qwewktmo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xluhglct.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ofkqkpjp.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uvpsjotk.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163iajslbqx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163urwufanc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163irhwusmx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ljflfkas.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ykwccuxp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xijjqnjz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gwhvgjfw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gdthjkoh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zbbwpvwl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gewwnfrt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bgzjetia.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tutysqnd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kyrmjdor.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163eklxibvy.html


<!-- 参考信息 -->