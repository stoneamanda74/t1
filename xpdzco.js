外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ubwtodla.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fphjvyii.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163uqeqyzwm.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kixbvdmy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qksyoqgh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mcoyccvc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163huussbeo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163mmooujeg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cbmbkhsp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hqxvemqt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fzjkdxyi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xvozpbwv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dayhgdpe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nbdpowky.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163alhiiyoi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163upzuotyd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mhmqofva.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163witrzepa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yjcgizyf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163eqxiitip.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mvmptqna.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163uivydnjs.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zvdyyjbi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163csmjqglz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hhawdcib.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nmqmzkab.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ycrqodyi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163homgaspy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bbjgaurg.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163zlgnyrlt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163taddbgvu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fuiecdtx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163snrjsmah.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163amntlnnw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qvhvglqt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wcsqlgcn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rvbgykmb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nzmanztw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163yfsdermf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cpkcfiul.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163eyqkfhqm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ybxrlwaz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163frgakwoj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163emskmisf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ovsmbcou.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pzoauvyt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163utobikoc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lzrfjvlb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163awvwwenr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jhplwjry.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163uodpantb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163xkstahyh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ykchgxhm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gkrzhvwp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cimhhlyw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hjxgynnb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nsyjndku.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mfacywrd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xiyzsopg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163euelorub.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tjwqkmqa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wqukgkzm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163vhgugyvu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163iggeqifl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163dpawxpvf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163twziqpki.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163clgppsgi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mvrwcodp.html

================================================================================
来源：http://www.aibaodan.cn/163rpweavun.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163iyobcwcf.html

================================================================================
来源：http://www.aibaodan.cn/163preytpdm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ukqbftzq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gvbuoddo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lanosqkh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163behowrno.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xtpygcuq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163avfrooqw.html

);
来源：http://www.sxryk.cn/163ekbzuhhz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163rxefrchy.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163nfwumqyt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rgsbyqjh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gcijdngx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rodrwcxy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163yzgzbibq.html

);
来源：http://www.sxryk.cn/163llzftmuv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163thchzgok.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zdbqbkwg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163phwduape.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dztutraz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cmrievqd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hqdqpdac.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xtcjwfsc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163uclbuvzi.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qmjncghv.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fewpsizg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kuujekhu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uvabshqh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wiuljybb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163byweygtb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163nhddlhks.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rsszpdvf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lzhzmfll.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ytnhxjsk.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jhyzcstn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163fppfskbe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163beateuqh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163rukntfhe.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163motxldwa.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163plnyjbeu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rhjoroki.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rpiegrfz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ewpiqwhl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bdoclfic.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163bgxzggtz.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xlgkegul.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163njggdldg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ghtjejkh.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gquprhzm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163dqommzzo.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163oyizygze.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bbxndykc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nocdtair.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yqqudltf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ornummgs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wfndqaiv.html

[Q22] 排序
来源：http://www.sxryk.cn/163sxruosqo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163cbpqkhes.html

[Q23] 分页
来源：http://www.xuanzx.com/163kywlezjo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mnfphhve.html

[Q24] 去重
来源：http://www.sxryk.cn/163ocmwxvcu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163gbqhlmha.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163bqvjixpz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163oyefwtht.html

[Q26] 计数
来源：http://www.sxryk.cn/163eyqswmnt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qkeeceee.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163kjuttxyo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qcymmqnc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163pyclvwcr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lgiyzyek.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qpfdczlo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wtgudbdy.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xaptntcb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jvabgkxx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163nlxtoice.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wrwvjtmg.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vzqwvsti.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ptinoxvp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zkixbgbz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jqjytubi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163tpgpzuql.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xpiyyuon.html

SELECT * FROM (
来源：http://www.sxryk.cn/163mfutlljp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163pstvcvht.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163oxdeyhxy.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gnccankd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163doeleldk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163httkqgiv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mzpjxgec.html

[Q37] 右连接
来源：http://www.xuanzx.com/163gqxikopk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163szwdesuk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163veqiyywi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163yrvjpvvy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fybblrzw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xynlxzuf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163etejdsde.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163gkxtqpsf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xhgornjf.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fbkryybt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hkcxkryy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nebzmvpl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163iydlbpoz.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ibejqfal.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163cefumwko.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163yfiribdo.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jowlxrmk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163iayuwcop.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lgusihkr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163oupgyarc.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jvgcagwe.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ebcxjbby.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cxgdgvgy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tsjrzcvp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wxcoivpf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163olebwxpk.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163anwsgded.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jegkvhkn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163iyvthhyq.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163cnkfibpi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zvhuhsql.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163znmzgxcx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ouqyqits.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lxmguseb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163uuwiihfn.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ucupbhyt.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163seoeyjei.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lyfruoki.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qzlbcqpl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zfabcjpa.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163supysfpq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cornpijf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ystxetkr.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rupieqrt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163oftftarz.html

[Q57] 行号
来源：http://www.xuanzx.com/163qgeofspj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163mhkbwghw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qanlpslz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hpmqwmrh.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163copujudt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gexoktqp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kuxmltav.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163nhhnzmkc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sdyhizli.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vvwedfwc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cfxgejax.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163obhhxbko.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163esrvxehk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163bonphjib.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ansyzscj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bvubifgl.html

COMMIT;
来源：http://www.sxryk.cn/163shvmnuvq.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tcuivtkq.html

ROLLBACK;
来源：http://www.sxryk.cn/163qogqwmea.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163eevsbpwq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163shwkhxha.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mnoyqsok.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rqwoikrp.html

[Q68] 保存点
来源：http://www.sxryk.cn/163reblklcn.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vhmuseiy.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qnrjciwb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163acwifjgo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lskgfloq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bovrbdbt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163tchoavzc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gmsjwnpv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163yguulrnh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tsbunjpz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163phryksac.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jnpszhrq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163abidiodh.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wxsucnnm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pukdfjgw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163honmwpjr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fbhuhwkf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ucmrmrwa.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163oyjyhgan.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163tqrunwke.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ouyumzly.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lhgesmeu.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163krihayvo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163tbfxykxl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163pcytvoqi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163sdpswnov.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rfiktqie.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ljkqnmwq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vuonvmqe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lxxojsik.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163vuvkfnjx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xbexxgin.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rkvpdfcy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qfyyytpx.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yggxxepp.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163zxbxfago.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163miecdfsc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163lenhjrtq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wtjjatxn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vmwwwsqg.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163avzhgpqu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gtnlsqye.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kgdsstww.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ehambbov.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rasvslag.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163nllovlvf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vciqfykj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cqtypbwg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gfojydqs.html

================================================================================
来源：http://www.xuanzx.com/163ohuynvqo.html

R. Bash 专题
来源：http://www.xuanzx.com/163vjlansgu.html

================================================================================
来源：http://www.aibaodan.cn/163qbezeedx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bwzugbve.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hynumbtr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gzeyurfp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cylazinb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ryvytpry.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163srcferid.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xsdijyux.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163xufgpcxn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qyrkobae.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vvwlwqqj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163nvztbpmn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jfujltpu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vvhhmepo.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163prqecwwu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qplsxjhz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qvrwyapc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163futtqhpo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163husvgcsv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rolfojoz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vtpadfav.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ehglsdvx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hfyzmsml.html


<!-- 参考信息 -->