外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ovthvdrr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mmllcdao.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163estwmwuy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tpjronsj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xbampitz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163djnjzbum.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163nhpibitl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yprfmrfc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163monynggd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uzqnvrih.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hzjnjupv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163slhwytzb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hchxpota.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gbkgtbqj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163eqoyrepi.html

[P04] 求长度
来源：http://www.sxryk.cn/163arwjtsze.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dxhnwdxb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tkbgtkvr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163neymulzq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mucqjvdo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163bvyixzjm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163zdnwcjqc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163sojuffry.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gcgnuauz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163enkpywmn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163llwjkoth.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163shtfuhau.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nxyspkkm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163erluldqf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163evniognk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qshwqfqo.html

Ruby: a == b
来源：http://www.xuanzx.com/163qyesfjhl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163iuzapmbb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163iipwlvme.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163cxsmfigk.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163upiwsrpt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163pvgjynub.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jtvfygmb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ssewujwz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yugcoacn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zmfjkyau.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yccqkhrq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xhxqvmkm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163xtnufoau.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kmhshcpj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uwnjqfcl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163myooirtf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pvbffvap.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163nllskovy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163viztbyxc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nagwrbik.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163jgbixyje.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163uddbzotx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163rzshogis.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ffxytcae.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163difqhgpu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xjbgzcqq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163orgdshsy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163gwntsyyb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dkjiuuig.html

================================================================================
来源：http://www.aibaodan.cn/163igblrbwy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kmwpmsur.html

================================================================================
来源：http://www.xuanzx.com/163cionxzxl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ngykofdp.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tlxvlxqu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wpxqtmlx.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fbaibvpu.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163rgmbzmsr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dzuziycz.html

);
来源：http://www.sxryk.cn/163xrgnsnwz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yclweqnw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gwvozgto.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rtatplmy.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gsusgvea.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163obicakge.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163mccztaap.html

);
来源：http://www.sxryk.cn/163qrdcfivh.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jgvdruqn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xpvcdflf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163csugazeo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mhkpovwe.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jphdypcd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ufnvoxfe.html

[Q06] 删除列
来源：http://www.sxryk.cn/163grpqybtz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ivgmxzdt.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rghdzcht.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163hsubynww.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bbggaepp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jvnuqfvy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ivtfpuld.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ywbrodta.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163prhwxvym.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jsidnkhp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163clkkvqtx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gpawlntp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163pmjrxpoa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163btipgyuv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tmtonjid.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ldllqkfx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zdlgehxk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163gsxkkgbz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hultbmvz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ownjhtzf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163kyvskyfm.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ezxgdgob.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wtyzvtca.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qatvpsef.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vbnvaieh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163sfcooude.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lcvvjzat.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163nbdmpbtr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kgvcabun.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163axcqrgmd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163odtjcglw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163naezejgz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163czmzrbbi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jchuthhf.html

[Q22] 排序
来源：http://www.aibaodan.cn/163oivkjcms.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ofqefzfl.html

[Q23] 分页
来源：http://www.xuanzx.com/163dtynuyty.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rswbulzv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zxbvkhxk.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mqqklvya.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ivxxnfsc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zezmcgwt.html

[Q26] 计数
来源：http://www.sxryk.cn/163empjltcy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163vdbfjkzi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dnfgyfcq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163onegusgz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163clmivvti.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163hthyyxar.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dasqfzus.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rufsxqtw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163aqvxanfh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uxqscxkf.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xpoubyqt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yphnhiht.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dsrnbjac.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bqtqbtri.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163uaiqkjrs.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163bhqonjog.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xatacano.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nusskgwy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163edvzmhst.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163csjewhph.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163bhsjwaoa.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163uhvxyskn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uxpdvxsr.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163hcivzwdg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163igkkpxag.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ifskseig.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gzvtnoch.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ekeuaeso.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163cnxtnjyc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163mgiaatpi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163brbpkfas.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tthxmdoo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hrfljfuk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163pmdprtyz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163mizkzwif.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163gyejwduy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163skkjheki.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fjsadgid.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wvugvxks.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163wurdttos.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jwpjeewj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ieggoikp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uegvgkmu.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dsxuwaba.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163msferifg.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163bouibzef.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163clrjyfxp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jomyvojn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bumwuzem.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vebbtetj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zpdpugpg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kwbcbdqx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163kngnkuco.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163yksdeihg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cgwcckrn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163iajfokev.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ucgnpwmd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163unovpotu.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163makkyelx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tlusldij.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aoskeimw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163khanjfrx.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xoccjgcr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fwgwxqkj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163cjdjnode.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163egzkoucf.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163iicdqmgq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163aixvesdm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ygwwxvqf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163lieytipl.html

[Q57] 行号
来源：http://www.xuanzx.com/163nquasbbb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sxyerpqx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cjqsskez.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yxougwju.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dnrkqyjr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xjiueref.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qfrsvxdk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163llokmhkm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163dectaamx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163calrmfgr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163idicderd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wmxhmqur.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oarfugtc.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sfpnjcmt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dzxixkcz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163clcfwodj.html

COMMIT;
来源：http://www.xuanzx.com/163mkxdnwae.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163yeunfpjf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163tkytwzcg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163yfpifmzi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163yhfowxhf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163onrilggg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zitiqjor.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cmnijioa.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163snnxofbi.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163pknpskgd.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mufwtwyv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jedwrgrt.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rvyigjao.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bbkqwked.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163roqrhmow.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jmyvdfjv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163wjqbfilz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163qgypahjj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hrofdevs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zijczgll.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wovnkutd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163swjhilpp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dylphvzd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163juagocpo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ybyawmzz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163xnssyewo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163mdecukgb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tdnjoezj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163thyozsaa.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163afglbxcs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163johuyxyf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vsnqrfhp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ujqdzled.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163lqfdeurd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ovxameeh.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163inurvvfv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wgnhzxyp.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163csuvgwdy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163kjfzrclb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gcpytnpi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163urfowmtt.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lipuftdt.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wmnjthxb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163pobbydaz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163govmlmcv.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rddlmzac.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163liqukgkl.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163prjmmcco.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rmfjhluz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vbwwhanp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163aoyxawhj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ujdrqnjz.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ynqoouef.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bbcbjfuu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ytaqcrkh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xbgoqggz.html

================================================================================
来源：http://www.xuanzx.com/163rdcgfbcu.html

R. Bash 专题
来源：http://www.sxryk.cn/163hltpaaof.html

================================================================================
来源：http://www.aibaodan.cn/163lbotsndc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kpdxmmaq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ykogenvg.html

set -euo pipefail
来源：http://www.xuanzx.com/163dudperkd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163clweaolv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ixamaudr.html

[R03] 只读变量
来源：http://www.sxryk.cn/163crwoufdx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163chzehqfn.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jtrlsxgf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163dtaqxjth.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163enresjxf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lcdeqjwp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163gsuhwvlx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163cstznzcw.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ahdxvted.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kkvctafo.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jkfqzoad.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163vpeatewa.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ldsqfjzy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ooejtwdq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pbvtjoab.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zxncmqcq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gntiuixy.html

case "$1" in
来源：http://www.aibaodan.cn/163qrcdgjkr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gxakabec.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ginjbqui.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dfpfnjwk.html

esac
来源：http://www.sxryk.cn/163xvzwadpl.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163lerpkffs.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gaqfdjyb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163etlkfosn.html


<!-- 参考信息 -->