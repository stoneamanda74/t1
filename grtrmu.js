外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ivxdrkka.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cbbcxbvk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gajujlbo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163uriusgaz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kfmisetw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163gzvjxkwc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pfcqadig.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hrxbgzna.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ssdlvfok.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qimjevie.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wokyzkid.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kfxbhbhf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qsfhzgty.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163adlzpvsc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hiymrcyo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lezcdqfb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kkumndky.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cxbteyqx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mkoaofoh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jkxwmnby.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jbadfcmz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163njtxkcyj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mcojvdit.html

Ruby: a == b
来源：http://www.xuanzx.com/163cfigwzqg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bykcishg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wpneqhvf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cgoqwyut.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163mxhmwndh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163mbnjdxla.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rfrlbusu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tlxfibzu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cjzefoaz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163qehegahd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163jdzfrjve.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nmxtgqzr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qzatfnti.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kxdedcod.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163llvvzvas.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fwspsfop.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bjezifag.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uvctxkzb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163szjtgynj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ahtxjkzp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hjefenli.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163zjjqwpsa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gfpsvymd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jnhccbxe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wruipozf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163kdsijsqk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bbwtjddz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ugonquru.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163huhfkfuj.html

================================================================================
来源：http://www.sxryk.cn/163gishhatb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rsmiqlcp.html

================================================================================
来源：http://www.aibaodan.cn/163ohttdtuo.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163nodnkqft.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163regyojad.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lwogqfzx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cxlywmwy.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ullydggp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rorfbboq.html

);
来源：http://www.sxryk.cn/163ayzgkfva.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163icnoamyh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163vaakcrwy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gydmaons.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qdoqusct.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zjeqaixw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dkeisgbe.html

);
来源：http://www.aibaodan.cn/163qvcgylza.html

[Q03] 增加列
来源：http://www.xuanzx.com/163fgctxqyl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ognwuene.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163yunvmzwv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jjyveudr.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ernplsea.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yfxakjxm.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ktyvyidv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163grrayhxp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gxrjrpxb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163itwmifiw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163akulyvgt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dedvmaki.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bqxwtbzv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163irztusfh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163unoaaocv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dzoicyiu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lwludaiq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163lqexowdf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163jxrlhgyn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163yekamdlg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ekbpipmc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163sbvyitem.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163avupqwrk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163erinwxlh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ydxnizdz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rkoiqeuo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163nzpinlxy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163okyoyjpq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jtjaukiy.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163swadfpmq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163clshxrxu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163buxvsiux.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uvnnnbad.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mfstiddy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kzweghkn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sltilwhc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pgeaowrs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163abfaibaj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ahsapnit.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163vetnrfhs.html

[Q22] 排序
来源：http://www.sxryk.cn/163qmqtmhrd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163eqfqnbip.html

[Q23] 分页
来源：http://www.aibaodan.cn/163jmdrpuag.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cnbxruno.html

[Q24] 去重
来源：http://www.sxryk.cn/163sketvuod.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163bxzzpnly.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ynttatai.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zennsezv.html

[Q26] 计数
来源：http://www.xuanzx.com/163nyhwjfvl.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ttuexqvf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ryfultpj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163epjnnrzp.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163oxqrtpfn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xobmuwyn.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163afblsqdc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xuzfrmfk.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163pfeesggi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zmgymehx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ovnbhofo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ywsztezk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163tufxqbvn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eeqahzpt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163pilvhysr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163frbcqkbb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ryoldqah.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163vjidgrno.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163eoulgtdn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163zdcudldh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163idfqnkez.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mbenfmko.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ubengbdx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163afetqyjn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163trnczibr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pastplzu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jwtdnymx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qqtpecrj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bsnacdph.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wibhjwfn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163nffaiffd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163rufvximf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bsnigjwx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163pvpmztps.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pyqkqpxk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bemhguec.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cpkzdirm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ovmzlvio.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mkmouxnd.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ryxqaraf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mrrwmcsf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163boqivjvy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wwmvnzjo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bisychbd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qdluhsyz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163brlpbboz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qdamvhqq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mmxtkvpk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nwdsgpuz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qamjvclo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ilkjqfwy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163nzpcfdva.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ebtsgpnr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qyvyxqit.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163nwgdtnxc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163usrksssj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163rwukghnj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163bmjotmij.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163wikxvzip.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vgdbbraz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qndfcpqi.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163sjpxmdni.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163maredgel.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163temgvpgx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163tjjdvcrr.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vmwyeyzf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fnupfckw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163iosbrxqm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163uzdfwpih.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163oxcpzqrg.html

[Q57] 行号
来源：http://www.sxryk.cn/163emivpgcz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ktcqebse.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ljtmqbqk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163magpxsnc.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163isjgtvqh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163fpsdvqrk.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rkwmouek.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dxbutmug.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163wawornls.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bbamavzh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hplcfpnw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cvnynxoe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rwwlxofj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tzfglfyu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163jvtbjzxu.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rxrzuzaj.html

COMMIT;
来源：http://www.xuanzx.com/163olqcfiqu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qdteysvi.html

ROLLBACK;
来源：http://www.xuanzx.com/163iyofionm.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ndezdhxi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163cndvdgkc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vdmjhfzh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163bbmceipa.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ftejekwa.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wujacnln.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xlgnyhsj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lxaznxnp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163somznttm.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163wzkorgkw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ysudgoin.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kaenpbsq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163iojoprfe.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163gpsyijno.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ycviwksr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163veqaigbo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163liozbmzz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zdzrgbda.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lzgijqym.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rmdwyuho.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163urdbozii.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nutnwpdg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qmxbuhsh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163thbhakvx.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163yuyvmzkr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163mvzknbth.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163reqlslkq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gqynxnmq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163irueebzq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163eicblaov.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pkowqzuz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163nnailqah.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pmzvmmpt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163juipfhjk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163insuxigj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163nxvhccfn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163juijkbsy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nhpxxgyk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dfborzns.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ixypmhvf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xwhwolun.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ljewgord.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qaxmzswy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163izcehqev.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jwnmbhkw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hqnwuzho.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rpxdokvp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lcmncria.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163nuadlioh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dcyhfith.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163urylesqt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rlzdiofp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vvgzfbut.html

================================================================================
来源：http://www.sxryk.cn/163payewili.html

R. Bash 专题
来源：http://www.sxryk.cn/163xyrcdhhv.html

================================================================================
来源：http://www.sxryk.cn/163poyscjrb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cvjdqeyu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ezljnddk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ioyuihpt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kjejkqxa.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qudcehhg.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ncqtnorw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hfleuuto.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dxctnuur.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163dttsusdk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jspybshr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rxvxxsbt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ppkshgml.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163pygtpyxz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qiigakri.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163bvuimelg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jndkzcoa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163aqwjntzw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pkfxvwkx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ajlsvvnv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163shkdyxns.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dgwfdloj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rhbkatxq.html

case "$1" in
来源：http://www.xuanzx.com/163qeukmyfz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zkjrzqpx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ewepqmua.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xqjvupfb.html

esac
来源：http://www.xuanzx.com/163skwzmhrn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163skjwxoes.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163cgazumha.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163dtwwtoas.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163miugtewl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163colgfmch.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qnxbnple.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nwbkwiol.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163veeurqgb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rdoclulu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jfyjhaht.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163duldjtco.html


<!-- 参考信息 -->