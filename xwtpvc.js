外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163okxiijlb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mrygdskj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163xhvzactr.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sjiuutlr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163dkfcmnci.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mdwbwbrl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ootkcfvc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lfalnlmd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jkxvvhxl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163sdsfyfit.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163scrdxcsz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dxlfzhfm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mioxszad.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ivfhglbf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mgcohpzc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163aldpjvdl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kxmtnahw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xfkkxoet.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kwlictcl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163byouqsjh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163axtfxaki.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163nmfgpxue.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zjutswxp.html

[P04] 求长度
来源：http://www.sxryk.cn/163arfvvyaz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163qulescpx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vilhqfsx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pobglqpy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fdchxsnj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163hihsbpkz.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163macofrzd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xqvotmoo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ffxabcgy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163fxleuybj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163gpeksuop.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163chruzizg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163bxpmylqg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pseqgmiz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fnpueofm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163isearwku.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kqzivucc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ahexxmlg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163nqhqjtzg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ilxwnpyd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tastspqf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zglsqybi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jzrfidub.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qlxvland.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sndzsbto.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163trbzoyzs.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163iakqrzvy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163qgxzyjrh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kzwylksb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163terhiqkf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163csvdexkg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163loqpebpx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163povlykvd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gxfbcpyv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rxwlains.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rurvqpzm.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163coyplidt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163cpblpuij.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nxihqmuw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163osxrbeqp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163amfebwvk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ckckorbz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zfodaacb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163tcbwrntm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vnppytxv.html

================================================================================
来源：http://www.sxryk.cn/163vshghlew.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zcsjrjjh.html

================================================================================
来源：http://www.sxryk.cn/163grulbdub.html

[Q01] 创建表
来源：http://www.xuanzx.com/163thrwdipx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163npbjhckq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163klvsyrzq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163phbhukxc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163phxirqhz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ozpatjwn.html

);
来源：http://www.aibaodan.cn/163rbknoqnm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163smfsgaaj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fmvdkoju.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mxlpinqt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163bskfitol.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163zlkxcyvw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163appcqcna.html

);
来源：http://www.sxryk.cn/163ljudyxte.html

[Q03] 增加列
来源：http://www.sxryk.cn/163iqzsladj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pdeyrdrz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mcvcexpt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163koxtebwr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wdhovlxf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fbngngbd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kjwnbvok.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163pdmttalr.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zvomrvab.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163tregvipk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jlqzzqvu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rrulytmk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fwmiwwhd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163pyqgleuu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jemidbrs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163lgplznem.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vqroisfr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ghktibme.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ncdzqkjk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wkjeqqgg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fwdkydur.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dufwjcjv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zshlskfq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163jdjsefqk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163knugbolm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rrnkmtzm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xgutnlcr.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vjnqhuyz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hthbzgyl.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163lstgdoxo.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163oqgxtpdo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hnlgythr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jynblcop.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163rogifqit.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bxtdhktm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163rryiduwb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wgerjhvh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xjydjkax.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163uyqxuffk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ygecffgm.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jlvabmoi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163grvdwhue.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tglkscxr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kvnowghx.html

[Q24] 去重
来源：http://www.sxryk.cn/163lchkgcbd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163gfgkenhj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163wbmlwxac.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163cjrimohy.html

[Q26] 计数
来源：http://www.xuanzx.com/163nytnlxti.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163gryrsuqy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vncqqlcj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163essfcslr.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163grzhbaaw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163olzprfwv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ktjqmzyf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163roheofar.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qyjtyzea.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ansdrrsu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rtzjfpvh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163qcjucccp.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163haoqglxq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pmzhmfjj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163stgaolfq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ingktvdz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163nrpubgct.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163fguwtxzv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163uloprqoi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ejbchqzb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163oujmtkdp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163thlimwaf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cfniqhbj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163exbjxwpl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ddecxyaq.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163afenvxfx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kpufevfy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163rkmercxg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163vzfmipxa.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163htohdefa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163iniqiruq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vniefrep.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sursptku.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lwiljpwq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163barnujrf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fxjqlxhl.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163krombndm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163rxqbavlg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163vkkjtmao.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163twwtqyjs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163cpdbfngi.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yaihkuau.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163enqimuxr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163oqzrqqzm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ctqyoybw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163wztqohgx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ofilyvlc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ljmkzarw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zmbnkvwy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xnuxphwm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zkgjaebs.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163iozhgtkw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tjjpdqyw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hbidadwv.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gislzidw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163pbunvnwx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pumziqwc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163cvdublqi.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dncxnzeo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tvxanjrg.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163nwuaojff.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163trcuzwfo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ueszbzic.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163fnlbzdso.html

[Q54] 清空表
来源：http://www.xuanzx.com/163enxubpzs.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dmdeowhm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dfdsgiqu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163uppoaiiq.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yhmrcwcr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wxmbjcnz.html

[Q57] 行号
来源：http://www.sxryk.cn/163zhbvzpsc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163nzcbdqwh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ctktghtt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163zdydyrva.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jyfuxbia.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wlpxwnrg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163tixhpdbx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mbxspfuc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ozhbutki.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jnchcgdu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163mfxstvfv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163rdwrsbel.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gvoedsnu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ufslzutp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163invrmpby.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163fjreyxpy.html

COMMIT;
来源：http://www.xuanzx.com/163cneaekxt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163tizuqcrk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ewsclbwa.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zyvtzuim.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qlvvosbg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ohykrubb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gylyrnoq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wpszpmoy.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163hrrcykdc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163pbpdyhqz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163krrkeage.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nxfbpmgr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163nbhlfhco.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lycvkcrw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163eggumvgi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163muwzsiey.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163pkupezpy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jezhimtp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jeqgadvq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163lnodkpfz.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vdzdxqvz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ftosgybo.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163cpverlse.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163islabtdx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wlsmatuf.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fevzpxqw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hyqdpcsj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ghxliwdy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163oxszowdp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163brhxrvfd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jjiyuyoa.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163igfpqegz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163jnbwdmei.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lhlwpaco.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163beiceclj.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163czesridj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ouligyqz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163uftexxxs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mhxwciux.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zoucvcpz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163swvxtawr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xkjxefbs.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lonkimqg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163rwibfvqd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163kkarywca.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bhqrjqks.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163uovcmutb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tqipdomf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dratbhyk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163memxkfql.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163isdmfftw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ziucirrm.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wyocizgo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163enckcahs.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163oihcrirv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163pmmvnthf.html

================================================================================
来源：http://www.sxryk.cn/163tplsdjcq.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gcihtcgy.html

================================================================================
来源：http://www.sxryk.cn/163kdtsbagq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yxjleksx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163diviteyx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ymrbguxw.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163nfxosegm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qalysnaj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ggartotx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163uubdrydt.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hrmxudia.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qkvhvuuw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jemjsggp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163bhqodtsr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163alvyypne.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163wudoesik.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zggcewat.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vgnijlau.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rmojdita.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gorntjtl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ylntaedl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163uatzflrw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163jvnktbfe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rbmmcwim.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gpbxdcmz.html


<!-- 参考信息 -->