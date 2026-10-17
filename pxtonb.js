外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vnpkbawu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lwodmhnp.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163gpwqakxb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tofebfwl.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gnzqgxec.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bzmkilud.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163blengupy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bzhhirvn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rhdrroah.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nrailomp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163yewrbqab.html

Ruby: a == b
来源：http://www.sxryk.cn/163lxiwbcor.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163moddauda.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ucvwhqim.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xpyfcaph.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ykmdtbey.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iypmheqp.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ksbdgcbi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ziljftjf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cpkxtrnu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wfextzfp.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163flzckalz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rcsmyeqr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163txzhavxw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xcwzrzvj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163helumrty.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tokvagid.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163iwpcqqsw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fzkotrfs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163azvocsfy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vfmshxsi.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163iwwoxpjv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ajigkjkc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bpewdbyg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163doqdkrdf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163anjrefgf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163mcmtbyxq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163gzejoxzl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163oewecbwt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mfoshazg.html

================================================================================
来源：http://www.xuanzx.com/163vxrpyusa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qnvgocqo.html

================================================================================
来源：http://www.sxryk.cn/163rbumrqzz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mtrjsoap.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xvakmulx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jzincwgh.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163uvebafct.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163agtsynun.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163dufoezyo.html

);
来源：http://www.sxryk.cn/163qzpyiobx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qehupkrz.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163qsopjaie.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vootnevh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163edwfnkdo.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163exuomqpo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163oncclkpj.html

);
来源：http://www.xuanzx.com/163sirbfscx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jqhhopog.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kkfqkphv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163sfzemrnq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163svyamcjj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hfypkeqz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ajqpfdjk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xjmadvss.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ljcfpypq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163upmqanid.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163gnxbmvty.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tygwxhfw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kgzbzoru.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163yhfwaiyq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lwlgvcdr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163amqlczke.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163nowspisv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pokbvwjz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163rerczoih.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cqblbfuj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163twkwdyhl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163nitotvwv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xeseecpp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163xopwwteb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bpqwhnkm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kyppvlil.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163tmbaqrxo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vguwowae.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163mnyyissr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xttqnoaa.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sxemufqb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xiygguok.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jthyifig.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mybxvmpq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163itjojoij.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163bkutjufl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163niqcfrad.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163trefssin.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163sjmiplky.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xpmwsayp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jbqjplqp.html

[Q22] 排序
来源：http://www.sxryk.cn/163kqvsemok.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pclepbmu.html

[Q23] 分页
来源：http://www.sxryk.cn/163luyianlj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163kirsurwc.html

[Q24] 去重
来源：http://www.xuanzx.com/163gbtvapul.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163asskpyjt.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yhzmnqsp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163cjkbmuqm.html

[Q26] 计数
来源：http://www.xuanzx.com/163rqgrzwmz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dofctxfw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pvkxzjen.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163trgyibvn.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yyokbsao.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xnnjuzms.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163uxvfoggq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kulgrhqu.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163kknmfqyd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ojeebdvq.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163bjqtgias.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ccdqqboz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gwkgkkky.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lhkvlogv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rwocqvue.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pibktdpk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vhbeubfm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dbpdtwhi.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163skqdcovp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163apeezaxq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xoluowul.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qgqkfeqo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ghcqcshz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163hceprkgb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163oumxevrk.html

[Q37] 右连接
来源：http://www.xuanzx.com/163eqytljtq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wvbalqnc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163dgvwwwac.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tdonfyqd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rmezporz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163acifhyca.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163lydndcji.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163loslrcmb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xlxldzyo.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vvuaifyk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lpzearfm.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bwqkmynw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163trrmxzqu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163mhdmgvvc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lfigaubi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ncewassi.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163abirrhlm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163norlejev.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163pksvggwd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163bmiyuxfp.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mzexudrz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vsfcsnij.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bitgrtca.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mlrlviyb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163irequrbm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jjuhrjwe.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jdbwracn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qemcxpqi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163tbbysbzo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tkkxqblg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zcjtyvzo.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xovvljvn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rsviygod.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163spmvgbaa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163evaeeobo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163cuaaqfax.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gwxfdmfj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163pqmnxnkb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163spmiiyrh.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qozludwk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ylkxtqkp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ypeumfjh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tpqztudq.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163pbffvdbo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163llvifjhe.html

[Q57] 行号
来源：http://www.sxryk.cn/163iijybbas.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rwbtduve.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163vxqwrsmf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ajvufjuj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xgmxfoql.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163njesrkzd.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163mzwmoybz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ldqchznb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vzcrjnrs.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163inrpgnbr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163essnilfn.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rwkrfcbu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fhswcfyf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xfvwhmom.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163xpffruki.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xuwevtaf.html

COMMIT;
来源：http://www.aibaodan.cn/163oynevavu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163exersmcx.html

ROLLBACK;
来源：http://www.sxryk.cn/163bxbehdzw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pbhzdzhi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hpmmleur.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163evjqyenh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163exfuxmrf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dvaviuoz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jcjdbagk.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hercsvjf.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163gdzjhiix.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qiarvwlx.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163eliwsaik.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bnnrowlj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ccgoipsm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163kryfdgtc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163taebmxor.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ayixbblb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163edjwhhgu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163oqbqwtoz.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163oiwcnkdh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vhqostnz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jyoiauus.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163aompklep.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ivocimtj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163eebnjidc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wkvjxvyy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163xwidnjcz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dusgqqkn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bocpdcdd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163fefhuaro.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rrmelgsz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qrbkbeoq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ulhmqrwl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163uzxudeoo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zjjpaywx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lolzprqo.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hckikhhf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163llbweuba.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163itktsmwg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163saqapvuw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163duomzofm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163adxivcmf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fnbubmhi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163tdlbzfqa.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kkcgfarr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163smosxgoo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163cttcltqm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rkepvbje.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kvizighs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jgrehxxa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ribpqnpf.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qjhuibru.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163uochruwt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163nrpjuvnd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cweieopo.html

================================================================================
来源：http://www.aibaodan.cn/163wjyuwmht.html

R. Bash 专题
来源：http://www.aibaodan.cn/163kcgufzzj.html

================================================================================
来源：http://www.aibaodan.cn/163vdhizsaw.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kkdqohiw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ovkbmglr.html

set -euo pipefail
来源：http://www.sxryk.cn/163okyxvuqh.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bchgtits.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163uqputeea.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pvmsfgqa.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163phfsdoqi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163duxynzhh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xhzujoeq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163gookfetj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163gblunsjf.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163iqbduztn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163okwozqdm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ugojjhfi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163mskifmux.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fnuahbml.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dlwiykjs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nxvhvkbt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163fpkorkoi.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163irrxgwby.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163cwcohzkp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163eyfcnhgp.html

case "$1" in
来源：http://www.aibaodan.cn/163bviajvik.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mqjdflec.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163joawcnvg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163vizfjgic.html

esac
来源：http://www.aibaodan.cn/163xcvqoouo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xcbbkzdc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163pxxfgssm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kpxfdsab.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163oifgsvil.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163upahpsnm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ziidndea.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rznamqnv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163taujnlnm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rfeejofy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163bnmwdgew.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163sxvlacwz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163dzwcklaz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pgiufnvb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nffltbcw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163umjfwiwy.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mgtsuven.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163uzrjuwjw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163mlcznqzt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163bmhhpnjk.html

echo "${#s}"
来源：http://www.xuanzx.com/163sgdyiymy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jcsyerez.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qjanaojz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ipbmuwon.html


<!-- 参考信息 -->