外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163lpxwykxh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yuzpqpqr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jrvtfxef.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wbxpkxzn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jpcdlfrp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163egjrgmcc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xbdmgnly.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jssmlnwo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fihpdcwa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163invhfizi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iuxjxfpk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hxuekxnx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163pouctxvl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jpodrecj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163oexvzkyp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qmpjidqa.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bazwxgcg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163isgvceei.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163eadqmduk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ecvordbn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qaoffaii.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qnhjksuo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gzlkenbw.html

Ruby: a == b
来源：http://www.xuanzx.com/163auffdkcs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163alqmpxmw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163izitsyaw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zxbupvyf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163irtofqqw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163enpewkdo.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qeosivvw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ufbeblsd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bwoypsqa.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163jppjgqkr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xeooslyw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163brxfmodb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vbzpwiav.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rdwpgwvl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163inqjfffs.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sajszzom.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qfznjfif.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jyrapaqt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163zabwlldb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jnbldxxf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163upacioxj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wmfhlcvm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bwhsgzyr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gpkmqxba.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jbkcpnyk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nmccjbsy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163rpnafhvy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pfzvvgqz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nkbwhyjd.html

================================================================================
来源：http://www.xuanzx.com/163hcfvfdit.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163tvhycoux.html

================================================================================
来源：http://www.sxryk.cn/163bvsioaou.html

[Q01] 创建表
来源：http://www.sxryk.cn/163olgoktcy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163yczfuphe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rfqabzsz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163bvzszhlx.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qawssrob.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163eojolsgi.html

);
来源：http://www.sxryk.cn/163hxglndyk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163carlxant.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163eduxmdcs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rbnhgdcu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163lstqiagj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163pbaruurd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hgxxywmq.html

);
来源：http://www.sxryk.cn/163unbyuxzk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163muqyonrl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163cyrtwpws.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mwcvsaul.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zlvezaai.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xnkrmuue.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ezvsglos.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163waahsejd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163hxejluce.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pncppahf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163eeubqwft.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163afcgfbbb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wclntnvw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wxkixbdd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xdhbviml.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163syydbfjv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tehkypim.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ylenyyaw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163dpkjbarn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wbgntjrs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ckrmpmwl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dvensgxi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163rytnemaw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163sngsnojb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xzehpauw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lniltumq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zqzizmty.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163tliiuaxq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ebhnqsyp.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dudyfkza.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163iykkoqfo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hplcihtn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163sxcmwyiy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hksnbild.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163rgizmmeg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qubzounf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163toubdsst.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jydozgjx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zjhktyqi.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163sfdfkqfh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163arbpjnjn.html

[Q22] 排序
来源：http://www.xuanzx.com/163smxjdrnh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rwqilnbi.html

[Q23] 分页
来源：http://www.sxryk.cn/163bpgreczm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ctgqmpnd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kesdyqyh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rwiaqenv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163byesryea.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163prlthqub.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jrwwlnmp.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163iveuakxa.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163njgfaboo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fasbmofp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dsmjxhqi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mkxcvalw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163noriylpm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163okswiqch.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163uvtsrfuv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lbgkultb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qowtvrok.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163jabsloro.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wcvecttw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hradnyzu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hldaxkob.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163buddrjam.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ybtktlhi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zapevcfd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163wjpffakj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bqxqadgc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163znuvyogi.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163juskdmuv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yxveqkmi.html

[Q36] 左连接
来源：http://www.sxryk.cn/163idszlnis.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zpwtmipa.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ffeblmxm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fubbjgca.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163nffexipz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wzqkxqmu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ibyjjyas.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163diqhvrde.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163uoarokel.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rvbaread.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163wxjxrpvm.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163eohcuwhv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ctgeagan.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163npwdtsvt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163thvkfmfr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vwvqmzws.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vsugzerk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jjnojtkx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jznlbhba.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pikvvskz.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vlintsuh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ueavbenq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163uddbjuvk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ulmxbxbf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wjovurpo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bjnictpz.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xnjhxzsc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ngrtuxrc.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dusffars.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bvvdghem.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163shnpgxaj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yrrmbxvj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wgsuvwlt.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xzqtigng.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163njhicvof.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ccxxlgyf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kfubdbdt.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pqgnosuw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xzfxrgoi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zlhebvsj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163lbnaqiyi.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163etwkoeot.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kitkhooh.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163euxsqtwl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qajtcman.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ujyocgkk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ubfmcvcw.html

[Q57] 行号
来源：http://www.sxryk.cn/163ioypurcx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jsevcjje.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163iyrljtwm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163aqzqbvcd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hliyddoc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163vslldbfn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lbaypgjv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163zkcwqloa.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vfqtsrks.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jvtgrknk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163uhybkzsg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qinvxasr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lhupykyi.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lcfbyvld.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wsytqwcd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163meegvatz.html

COMMIT;
来源：http://www.aibaodan.cn/163shnvyjsy.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163nycvndse.html

ROLLBACK;
来源：http://www.aibaodan.cn/163eloxmanc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163kujkxhcl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163srdfmyzj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163uxtwuhhz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lvjweklx.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uqbtkock.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ruezmsbh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163oivqclkg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tttokjpa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ezdxelpy.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163uhqpfrmb.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163hjysuhwg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163etmfzonn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163sjvtavua.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lvjdaszq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163unzgiksu.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hukpxrnf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163eihmtltd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163shdkgvtn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ppqbcxrj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163znuuvgtt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163coqbobcf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yoaomryu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mwmcnmjd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cfegxfwl.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ifwyxari.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163jekryzna.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163iegnztes.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vgpzlyyl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163mnamisuy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fufsbdnb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163watshyfq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163betaxhly.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hpusnbxn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jsdidcgv.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xfcensbt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sjodldcn.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jhpatlbw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163wqdjlzds.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vyetlyly.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xblnodxe.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ynbeckuo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qsugdgis.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tkbvhrig.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163oottnqjc.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tyjdpqii.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ofzlprry.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163lsobdgvo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wuaydzqi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163bvojlrxy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163msvfahak.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163cxvjeqgy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163szbsmkah.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163amacvmyc.html

================================================================================
来源：http://www.xuanzx.com/163pjwweekj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yebcdcwv.html

================================================================================
来源：http://www.aibaodan.cn/163bpivybzq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xrlsjbcz.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ojuotudi.html

set -euo pipefail
来源：http://www.xuanzx.com/163thbpbczr.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uokdtakb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xbwpwyyv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wgszkbxa.html

readonly PI=3.14
来源：http://www.sxryk.cn/163drimuyev.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hxbunlel.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163scgffbjq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163oenvqkpf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hxnzlxkj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gltppqwz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jvyxpnpb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zsmgwvyv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qtekdpjj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163oglpekmz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163krcwtnfo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163mqfjokxb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xdubgyoz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lbizlcek.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jrrfitfe.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vveegcym.html

case "$1" in
来源：http://www.xuanzx.com/163hccwcpjs.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163hhyedkcl.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163uvfuyhrd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163lsfkchyp.html

esac
来源：http://www.aibaodan.cn/163wqxsevda.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163esrjkvqn.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163owoyawhc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bxdlftit.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163himsjvgb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qcdfhmst.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163soqdxviu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163lkibjfar.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163srovurdj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ydmsaqpy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163mfopyngb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ocwxbhpl.html


<!-- 参考信息 -->