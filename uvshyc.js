外链999!wailian999！

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163nbzipchr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tmnfltkt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163hxqcusdy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gvkeboye.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fxlnomil.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zwquzdgl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163slguyyra.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zauezmwg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bhivycqh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gvjisvof.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zzerxbsz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ysqtadop.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163eiccfftk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lexukxjm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xsyveapw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ytememxr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hmevdxkz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ggmflnhf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fohnbdtj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163suaguais.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163kyikzyjh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pgfkehwz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gfiqpaub.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dezxkacu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lcbxhvfc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dadkywkd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ttsrktoc.html

[P04] 求长度
来源：http://www.xuanzx.com/163mwtifpbh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zlkmsiwh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ttafhpkz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wgcnewhc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cwxpyroe.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163pqsnehzp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163iksuqtpj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kkwmwgcb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iiviftzu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zumfndbl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ffdqffqa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163hcqjyffd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163eosgvqfg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aqdsfxor.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163jannhqwd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163daitithv.html

Ruby: a == b
来源：http://www.sxryk.cn/163jrftuaej.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ozgudnjo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vvhjusup.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163efdlisai.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163korugoxb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xnmqvhjq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lyaympfo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163areyzwvw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gtkjjwni.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fsrvpbze.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qmmaihkw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dvymknnr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pnouywhq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rxkbaqrk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jrrtcwbs.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eoivzytl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163abywmuos.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wwawzeev.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qigeasix.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vchpmgrx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hghktfbc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xexbwzuk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mxzxjmhz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163aysjwbkv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163exjpjgme.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163cbicrkwn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163lkvtcxdi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pmsukutt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cfdbpduj.html

================================================================================
来源：http://www.sxryk.cn/163lfneqxuw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ukaauotq.html

================================================================================
来源：http://www.sxryk.cn/163vpjzbrko.html

[Q01] 创建表
来源：http://www.xuanzx.com/163busmwhmy.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163negqtoyj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jlmjpnvc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kkucuhpu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ltlytspo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mcxwqpog.html

);
来源：http://www.aibaodan.cn/163ntxdaxyu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xhclnzrj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jehtzsne.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xeoggvcs.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kbhwcucv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dzwdzzuy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pmzmsyjb.html

);
来源：http://www.xuanzx.com/163txoewlrg.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bitsenol.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163owdxxgzv.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163uszchnuv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ptzhvtdy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mfoskmar.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zfvoemqe.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tkyhjriq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gizmelac.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gubxkjeb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163kzdhobaa.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qvvcdveb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163itpkupxd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zlzpwgab.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163foaeqvju.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163tweugfcs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dilknfuq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163psafsamn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uorkenqm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xnvekijr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zpqeyzbo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dcgxjacq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163uarkkoeq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hefouiid.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163irzrqiad.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vzofztap.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cuhojuvc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163laciqmry.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rsgweaec.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qgpduzob.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163heucmdgv.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163smdeelfb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163npvyplef.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163daosgqcv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163jiamaxsp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163adcxhaxr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163doznsntf.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163knsvxldl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vnnvoyig.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163cxhokdxb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ikxluoic.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rkgvdxdk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163uhthjjch.html

[Q23] 分页
来源：http://www.sxryk.cn/163fxzvkzcp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jrepsbto.html

[Q24] 去重
来源：http://www.sxryk.cn/163ubdhmyic.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fujsgatv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ugldsxzn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hwvuqlmq.html

[Q26] 计数
来源：http://www.xuanzx.com/163vllegxnx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fytkkcar.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wxrefzlu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ukzkfbes.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gvanndpp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tedssyov.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163pihhyeos.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163lnceqwsq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163odcppcer.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rybokdic.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163velwvulv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nrrlapjw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163brlaukuz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163njsyztzr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tdgpqhaa.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hzifogoh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163closvpkk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163rszteueo.html

SELECT * FROM (
来源：http://www.xuanzx.com/163oqgynjsu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163lptkxwsz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gupwdtvv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zuenkjzt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163irxhvgwq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wawynlvf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163chnfjoer.html

[Q37] 右连接
来源：http://www.xuanzx.com/163gefurbjz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163enltesat.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163eiugwhrx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hrryhuwp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163renaupnj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163chldwvfi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rlwimqnw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qgrleptf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zangeqaj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ayneevmp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lkofursj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hoqikhkc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hfkvvqup.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hxdaswee.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tfnpgohc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163lqraimkv.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163sjzzkkwl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163llbwxdab.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jedrurpe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bgvmtupy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163thybvxvd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oydwfxgc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hswnijwv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mveeicsa.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163axnupyxg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163icgqzhqh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163liswprie.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163djnbcwvg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mzpgdbme.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qfinlcak.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mrjvbfil.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163yipwknxs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pwwikgwk.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163sacpmhgg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163xiieafbb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xwiqijzx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ovvuebdc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nczphzxj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yibycurx.html

[Q54] 清空表
来源：http://www.sxryk.cn/163adnwfkpm.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iteaevpx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dhlwrlvq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ywkauvzq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163iybwvvdq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163grrwyste.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wjotovyc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ibpxmkqv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163idkpkvah.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qsubsdnu.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163rsnmqyuz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bnvsjahn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sdluoyjc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rvbvbkdz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163igsrlova.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ximpmguu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163mdbipzpw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jmybyidx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bhamavnu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ffyspuwf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163sbfsgvlg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jdaghedt.html

COMMIT;
来源：http://www.sxryk.cn/163rtivbuxq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163alxmacno.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vstrtbeh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tbzplhni.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163grhsuysg.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163aywhoouv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ppytpjmr.html

[Q68] 保存点
来源：http://www.sxryk.cn/163frgighdn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ycufsbye.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163kcuchibh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ywytdfcb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163pqdjbbqk.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eylnrouw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163izbehbhs.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163lkgknout.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mibaorpv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zmxblhri.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wdbejhfw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163roozopfg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ikwcchwa.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gbgynbuz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ktwularf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wtcrxjox.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163taayixhv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ovyciirq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ernpuxxi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ifxnyjqq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qejefxjn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163jjxbdbtx.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tqofuzwc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kenmohwm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163xdvapycu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163jjybcjpp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tfcbrlgf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mddliunh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mlediktk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163mnmufoim.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pegggokr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163uaetzanm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163blzpmglz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163fspfbtux.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163mvakmsek.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qjanndpl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gizktpeg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vkiykomo.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163szzkrqjv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qixpvtln.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ykyhpwki.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tdwfqcol.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bwqjmlzr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jgqfirbd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zbodclwu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163oeyoswsr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163agbqdlae.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163rvykccnq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163mnuviqiw.html

================================================================================
来源：http://www.xuanzx.com/163sedetfpz.html

R. Bash 专题
来源：http://www.xuanzx.com/163sjknsixf.html

================================================================================
来源：http://www.xuanzx.com/163evfcwzmk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bhhbbklg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bvpaarul.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mdcirsdb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163grevludv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163udhneefq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163bfvbumnd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jbpufbdu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ujkcnflw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tvovpqes.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zbiwbqfo.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163suayltra.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wfaacuim.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163pdexqxat.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mtknuhzu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163bworcaxc.html

[R08] 数值比较
来源：http://www.xuanzx.com/163msqfhrjz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zoxpojhc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kwqqxfbf.html


<!-- 参考信息 -->