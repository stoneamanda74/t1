外链999!wailian999！

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qahrhlsa.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ctpegrnn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xpwpdqei.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bsxztogo.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wccqeeon.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jribkhhd.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rjspbzka.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163znjgutut.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163evhgevkn.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rpaqzppr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xgdaqijn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hwpksdfw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jteuhlsm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xxpnykli.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ejunaffz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mbdzzbeo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wozqjyvj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163yubelwyx.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ioetvlqw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163acmyuahe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fbvrryng.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vvhoktaj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rosydiph.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zkypgwhd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ewdkprwf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hvncjork.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163derqvdat.html

[P04] 求长度
来源：http://www.sxryk.cn/163srnllipz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163plklcvsd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oputjdys.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hkelijqi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163irngytpa.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wnskhzdp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163myinvpyf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163fjjpowol.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hnwnuoym.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ughbyvmz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tceenhpm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uasszrxd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hwqvqadf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163okmxmehu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rspqxokw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163srnkfkxf.html

Ruby: a == b
来源：http://www.sxryk.cn/163lmiutwwa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mhsxucdu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mlmtckbb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163sierryci.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jqnnjncd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kcqmgchf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jrdxdnzm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163mqfjuwjt.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mnrlmzhh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wwizdyxd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kpmxknbl.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qayyomre.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mhhtofte.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163tbvmyrkv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163osxgqlkk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ovebonlm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163unuyjvwt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pkipskhp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163vfuhfwir.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163akjofeqr.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dduxqcjq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qasprgny.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163fwapueaz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163furnwvmq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fjovffdm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163dgzytbtu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qgigvnzr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163oejxsabx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mftcnimz.html

================================================================================
来源：http://www.sxryk.cn/163nltcxhyo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ccnxkken.html

================================================================================
来源：http://www.aibaodan.cn/163qxtergqn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163khsdjcmi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hcwjbfen.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pkkyhfkp.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bpnmbjtq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mxlkyxhe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rwwqyqze.html

);
来源：http://www.sxryk.cn/163rlrxmvvz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lhnvgaon.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163lutosekq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vrtolvha.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pyzvjwcx.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gcbxoloh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163autnhbke.html

);
来源：http://www.sxryk.cn/163xullttnu.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vzdsdhtg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163muodcims.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163nnsxvqnq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ioebxfkq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163rcjiieke.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163frtvxadz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ebzdrkdr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163bsnyfisu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rdjaazes.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163joejwoxb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ueioeany.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ajeaywnm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jaircgxs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wxptvvib.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xyrzclte.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163vzvmmfmt.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jsgmzfya.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ddihvccq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163neenhwne.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dcjlcvqb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ootfflrr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163yjtveahb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163jjqtrhwg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163rvbvqczy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163luliitth.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ljkefuav.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ogqkcaul.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163taqooosk.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163oibouvql.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rxhegxou.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dzkxxtel.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163pvibpalh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ohdzcidm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163iytuswfn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xmpztarw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163slkybzyf.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pfmcdgiq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jpxzvtwc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163piabhbwx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bypmekug.html

[Q22] 排序
来源：http://www.xuanzx.com/163tzubutji.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163iuribphh.html

[Q23] 分页
来源：http://www.xuanzx.com/163jtpiisjl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163iuzdkvuu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163pxohkctu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163mjpsyuyf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yzmwqwvv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ptqpktxs.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ysanymjt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163psdscsjk.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xsmmeglk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163azfqjwbl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hfruiqgq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ozsopcwz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163bequhfzv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xvjkyqyw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jzfyjbec.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tscilfgv.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163reuuelzd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wkicheiq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qutrumhn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gyhzeaje.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rocuxxpy.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163srqctuee.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pabrkbzx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dnzaxptc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163joqogrxt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hrdvjlmd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163myvbzsrs.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ogztllys.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163amlibvky.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xfybmdvz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tchtntbj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rrxvlvqc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lqjhrpgh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163pgwkasla.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aharqomu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wqleskcv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qwuiobum.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163amyuuqcv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163nlduvdhd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rncsemtd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163idghfyxd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cffxaske.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163miyxoaou.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ppjoxxpm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ycasvhjf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163utdvcxgv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163blxfvvqm.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wqtdewyp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ljrqtqkm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163edfccobe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xkusbxxa.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bpjbnijj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jyypomex.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163lsytossw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gnilbptf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gevfkywc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hfvqjjzk.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rdbaxsks.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163atjndnjh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qomnqnas.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163auwokbjh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163yooajbbc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163egevhuch.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lxfoqdjx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163bluedmwm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cxkihtqg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ufttxzsa.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163olhykfwe.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163toekxmto.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dyvmvpiq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163yvaljvor.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yyezflhw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163twmsalbu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163vfzhgjkr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xjmpnsdr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163altnbhkp.html

[Q57] 行号
来源：http://www.aibaodan.cn/163pjvdhbki.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163umaqmofv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163uxhqsubb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163btspkghb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jdpdjili.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kenbpjvt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163tgspayxx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163anwdgcwj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163bvfrbotd.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bpsaczty.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163iydbzola.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163yiueuslr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yqkeigec.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xzdwesia.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dzvozrrq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yzlwqirw.html

COMMIT;
来源：http://www.sxryk.cn/163yxllilgk.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jsmvhixa.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vflkxvok.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163athnxhkh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ahewjmme.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ziapnnyb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jhdxdraw.html

[Q68] 保存点
来源：http://www.sxryk.cn/163phqjkfys.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mvkqmedp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ikctxbhl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kdhjajpi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163iapvbcyw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eukjtjyu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nvtshybe.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163vdatdukh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163peytwopl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163fidtnucx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rqywpvih.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xfadkwsv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163sgujvhpv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163cparmtfb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163agxtvryf.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ehvbsrbi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163opyfbndl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163tpmovyrf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ehrubnkm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kmjccimk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ghplmdze.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dpgnjypi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163uhgnchsk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ivixletb.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zppwrfvr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mlhldpkb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163bcwruiml.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pkcbawlf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jkoxgvrh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ayfwagwu.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163pdzudgeb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163vxphfjar.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tkzaxceb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163aqpnqlfc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163svscrxbj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tmcocmca.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zucxmzbb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163gqdasblz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tvanggvs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163fiktiqoo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ooggjber.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163zyjpihhl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qwakugpz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ucqkidrh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fnhsucpk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163gbckjiqj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163psqcmxuv.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163hewcwqef.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163mcanqjaz.html

================================================================================
来源：http://www.aibaodan.cn/163ootfpxky.html

R. Bash 专题
来源：http://www.xuanzx.com/163vapmncak.html

================================================================================
来源：http://www.sxryk.cn/163fmjvvtpe.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kmtluvjy.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xnjhhfyf.html

set -euo pipefail
来源：http://www.sxryk.cn/163ityylkpu.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163scppbwjf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163lfxvymzb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tnblsjqq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mjawzysb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163krqhsetk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vfqruvll.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163troyobau.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mqklywbf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vqgqzybq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163coifladd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163itoydqgj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163suvmkgjy.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qclqnuss.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163syhizjqa.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ognnjlbx.html


<!-- 参考信息 -->