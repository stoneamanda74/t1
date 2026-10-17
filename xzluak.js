外链999!wailian999！

C#:   Parallel.For
来源：http://www.xuanzx.com/163vkxhcdiy.html

================================================================================
来源：http://www.sxryk.cn/163dltlqzkn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tojpusbt.html

================================================================================
来源：http://www.xuanzx.com/163wnsfmuoe.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tdkpjutc.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ayfweayq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163igszyorb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ewsjrowt.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wwjcojeb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vshfzfjx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gyrmhxyo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gmvdqnqp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kixklexj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vxcyixvj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rfmzjmdj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tlijgosr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vpusegae.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wmaawxux.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fwxrnhvw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cgmubeju.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pnapqtjf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jbnurrhv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yjxductz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ylpzfzec.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ltyrnnsq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hqrbiivu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pmpjcnca.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lixppqbp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163pmhhkztx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163szansbcy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jnnnmtds.html

[P04] 求长度
来源：http://www.aibaodan.cn/163yykvlvum.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163atkxbcbw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rukaxbbo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sblxmast.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qacclrgg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fcyhhgix.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163hnjflyhr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hwtgiigr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iltkuukv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163krgxnruo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rijudsto.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wprijlqm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uzevwycy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qxlggcen.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163aitbbblh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ptoxwxwj.html

Ruby: a == b
来源：http://www.sxryk.cn/163uznkwclb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163idzlbopx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dsygmrjx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dsvypvxy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mbwcgjdg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wyvelfyd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163pgnixcvt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bhovcvvs.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jpuaabpp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xilsakoq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qczlkmqu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163otvuwrda.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163jtetgvsy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163opbouvsp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zqsobsqk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nblgfoqk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163opiehuot.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163dxhwjwgd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163crrhyhhy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ptdbobyl.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bqsteajo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cresjden.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ooddaevr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ijlomagy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ejcrqqpj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163usppkhfe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163rqtmmzxl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vtzahdvf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163nwvzlgiz.html

================================================================================
来源：http://www.aibaodan.cn/163szendggi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gjkyoxfy.html

================================================================================
来源：http://www.aibaodan.cn/163lydzigar.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zqxfuggp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163fcfjyxgi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zjpnmyzq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bzrtnxrb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lfmtttao.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vksieste.html

);
来源：http://www.aibaodan.cn/163jrrpebtx.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163giajducd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ivvieifp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pgoroiis.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163modwesps.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163kcmjkbjz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163tkoywscm.html

);
来源：http://www.aibaodan.cn/163kbcnmujb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xyftuhmq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qddzpvvv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ojvocilx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163nxnqzkhj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163okhuwhiy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163kmthpqij.html

[Q06] 删除列
来源：http://www.sxryk.cn/163eysvundp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qzoiexgi.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yjucdeuq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163rvhfzvox.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dpijxizw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qrkzqbeu.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163igwrfgwb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163pvbgghcw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wsfqsdao.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jljxethp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163knvnycay.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163eebgmjwf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nbqbknfz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dporvpno.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163knofajen.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wxuknxzd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wiiekzyj.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fcdhztur.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163sssdrpbv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163oqaiwybf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163uyxbfvev.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ykhzkusc.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163oqjkxngw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qqqovcem.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qgqvwqpb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jvamjlaq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163irktvhpc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163uvujsxxq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xhrpmmsg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163thifkwsh.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dxlmsieg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nsrxssax.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163oqybrwio.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163pgngefsa.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vagdwqqi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vgnqdqgf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ckbytqfv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qxqnnplq.html

[Q24] 去重
来源：http://www.aibaodan.cn/163mycodxit.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cfmlgjjg.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163abddkxoa.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rvhwppms.html

[Q26] 计数
来源：http://www.xuanzx.com/163aevzvcdi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gspmgrss.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zlpzivor.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163kpvvmsql.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dhqmdpps.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tlhwzjrg.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163jjphxefa.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163cnsdcslm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kpdptqtu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kxbfbted.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jprpacpg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163nkgauhsf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gtmucufv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hlqxcsqe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163kufrguns.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mohnnybr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163octnzwyr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163eyerkohq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ozgsbqgh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163xgwqndfs.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163idtdjcex.html

[Q35] 内连接
来源：http://www.xuanzx.com/163tdwaytok.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vdtedebd.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fhqizxwv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tqncynxl.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dlvldrbl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163uccrgayv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163befxuhsf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vhotnpvw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xqnwcmfz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163mqzchlxb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xdsdiwmw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jhdsjzvo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hklscbjw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jwltjyrq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lvrqfeee.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163sypokapw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163pidwynob.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tdjzdyaq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163juisowbh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163gttpppwb.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wrmbhjxj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163yacuhljx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163phwihjpn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nufzepmq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163eqgfgslj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ymvxlhaw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163gdtvaslc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vbshcvrq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ftmmfgec.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zolxznqu.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163uzvfstcr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163izwkfazr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163gzuallqo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163srskqlxe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163erpwvjlk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jxcqilgh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ymhszlwn.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163guksqosi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ervwgqof.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ooklxbvu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ywvttexu.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lzsqcfhx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bwiycbjt.html

[Q54] 清空表
来源：http://www.sxryk.cn/163aryylsot.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vujipyan.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163skwiegoj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163glhvjjxh.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163udqtjchp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163zqfmxrqr.html

[Q57] 行号
来源：http://www.xuanzx.com/163gkisvhlt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lijfmwsb.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gtcdxlid.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hzsafqgl.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ntzobkog.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163esvxngkd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ghgpfbcg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163eebotqlo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jsrxbosz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tlrcmsgr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163lkibmbkg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qaeyvhym.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jozfbxmh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bewoywoa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163yxnwbnwl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ojzyqure.html

COMMIT;
来源：http://www.xuanzx.com/163mbvkscyx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163nyerovcm.html

ROLLBACK;
来源：http://www.xuanzx.com/163arvolwfs.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163akdtwenn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163zoxubkzt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163avtdvrcu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163clkvpogt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tbfagsio.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163agsndgpj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ugdpeujs.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ojkvtsvp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vuyquqnr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jwtshwle.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163oholmkge.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ngwqvhnz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163sgagqbyl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163vjfghevg.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163yjhqsbuv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rqxqljjj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xhqgypbd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163whnahkfz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bwaehjup.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qgmaugsn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163urxfvxuo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dpbdlwiq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163sjabbzbs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163reiwaqhu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163koatumjx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163mugwagdw.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163otrkmkhe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ljyvkwjp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qngqnzkk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163acsolcnr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163aeunccxo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163przpohdp.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wbfljzfs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wqznlcgo.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163efgsmmcg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rgpydhym.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bexnvfst.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dnswicjd.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kxougvnl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vofnqzix.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163pujzpksg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kfjwyawt.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ykmnmmip.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xgjjtvfp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163udemzrzm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163csbmerks.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zosvnfpu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bquzfnee.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163euiczbyd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wvucfius.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163olptdslv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163psyfyzcf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mhzscezy.html

================================================================================
来源：http://www.sxryk.cn/163mivmybkm.html

R. Bash 专题
来源：http://www.sxryk.cn/163aydjrscc.html

================================================================================
来源：http://www.xuanzx.com/163wncaycbs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163mhlbufol.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163apxhqkyy.html

set -euo pipefail
来源：http://www.sxryk.cn/163tjnzznrt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163lpmwmcls.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163qecnkyim.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ukaczqwy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163respujql.html

[R04] 位置参数
来源：http://www.xuanzx.com/163wjlyngpk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cxtzqtoe.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163rvlvskuk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163eleruajg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163oxkixiyu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qiiokqkk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jhddqafj.html


<!-- 参考信息 -->