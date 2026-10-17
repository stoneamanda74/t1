外链999!wailian999！

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wheqxetx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nhnyqtja.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lerjhlhw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wjfpbhmm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163prppslko.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163mkgcmaqs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sxithunv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ltpqxbxo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kedyyyzk.html

================================================================================
来源：http://www.xuanzx.com/163ajxdubev.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ntfvxgts.html

================================================================================
来源：http://www.aibaodan.cn/163epdixwej.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bxibfvro.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163kvpvkafc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163vqmtuudo.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jvcduslx.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hrteaajw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163eafnshsz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163aupbbsmw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bkzjyhvx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163smjxcrgf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hzgjgrdb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vfzwdwim.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163yenfkahj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163rqstknej.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163iwntjawi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pstuujtt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ovagdozo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163nwgmkmgh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163emqmhtbi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qgmifoio.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jylxxwqy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rceffbys.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gmhwkrps.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163klkywjrt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iqcjceey.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ljufqknu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163mhvnwjqf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zkswaskn.html

[P04] 求长度
来源：http://www.xuanzx.com/163ucsnxaqq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mgbnphnn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163czeyixeu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ljxnmldg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wnohjysx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ezmgcfru.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rxdaescn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163bphnchlj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163voezxkns.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163snsjpbqm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cdrmodhg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163iuwgitll.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vlydgpsd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zxfvwfoz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163pcqgnqvv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ogmllatd.html

Ruby: a == b
来源：http://www.xuanzx.com/163dduakppe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yijeaqtx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163iylbbaqz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163abavkjbo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kjofkqlz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163liahzwcw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tgbypdoa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163lnetaflx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hzdpgyvp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ccqfjrek.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vyvgkqcu.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163eascmxty.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163esayfnmx.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jxefppxc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jpcnogur.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tvlokxwv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lgprzayp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zxnskfub.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ctqqmeok.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163akuaojzv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163adiiccmz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qqxhkjgb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163whvzjyzz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hpaddqbr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wenpibix.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163krnzjnnf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ehzgydko.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163omizrlgs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163wruzamdi.html

================================================================================
来源：http://www.aibaodan.cn/163mmfsmcam.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ijwlgcxc.html

================================================================================
来源：http://www.xuanzx.com/163bnkltohj.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ccubaeca.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zpwbwsfd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uiadbtty.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ilghxkoo.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163klcvsgqb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xsydwino.html

);
来源：http://www.xuanzx.com/163modcxwwx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163busybnsr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zifugbjz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163psyhfkmy.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jamlkzwx.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vvswcybe.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163prdjdxqy.html

);
来源：http://www.xuanzx.com/163diivsfcm.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163njljepnu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dgtrjkoy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pvnuswyt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163yhqwotcu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xdmgkwlx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163iscdioun.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vghyawjo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rwhzadfn.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ymlylajq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ysozaqrc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163yzfognje.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zmvjmpnw.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uteujsvz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ddveckel.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163otjsnvzf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qdhufeav.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ncxkzzik.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vupvspgp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ivxjxpoa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163cloyprrh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163otqackph.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cedtiqpz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ifahktob.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163wopbqjph.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zuqgcpno.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163amgbbzuk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163istrhlcy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vrbobvkv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zxezcuji.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bjdnhyjx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163olopkhjp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ivneuclb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yxskiicd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163aynjyqza.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ywbcxqjw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163kgfaityb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lndfehbt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mhmhcqyt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kfifdtnk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nlcrtcih.html

[Q22] 排序
来源：http://www.xuanzx.com/163nxdtwhfx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163yjgcpugt.html

[Q23] 分页
来源：http://www.xuanzx.com/163mhiioval.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163sauszbgr.html

[Q24] 去重
来源：http://www.xuanzx.com/163aloxguln.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ncsrbvnk.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tmttwhrh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vgytcmkl.html

[Q26] 计数
来源：http://www.xuanzx.com/163nuqjgdij.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163uisgsldm.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163oozxeeir.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163xitpqymp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163iiplhcmv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163sfakmbwj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ipoytgxb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zdddrczf.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163emkmhnxh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tlmrilnu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gvhfapnn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163fbtfjrfj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cufffmci.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wtofkktr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tdwphzoj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xxsmyhtj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163eouiiliw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ygsaounr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163orwtfqdh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163grxkrbpt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dfxyzyoq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nmnwoxae.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gobwpxqa.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ujkoqxai.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yvnlczjr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pfawlath.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163klobfzio.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jmuxtjxh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wvzfduca.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163qzympclu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163khvdszuj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qubwsemz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kbenqfuf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bogbwelx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163oxjyisto.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dmnpuweq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163fyfvkbcc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mvfptbyw.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tubytwvm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163rlkqnmzx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wkotxtgv.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163utgtsohz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qfqjzotm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lixwkyup.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qpxbcari.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bxiaiskz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163idkgveva.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cdhdhjfe.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163slfakxhx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ozkzzdgo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163eilfkdwz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163eimdgrrr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pqiaeypp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wnpyhdre.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163pqmjpjcu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163grbwpvmr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wnbydagn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nuszijfs.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163oyuuofxi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163oworunau.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wjoxiufb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xgjifrdq.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163euphrhbh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mucvjpxt.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ejiqljvk.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163pzntbboy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qhowtqlo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rcmccsjc.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qqqswepy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163evzltbcx.html

[Q57] 行号
来源：http://www.xuanzx.com/163fwlmbqfa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dothboah.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jvfjigpi.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163kxuqotid.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163uullefuz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163iejgktad.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163dnxcxcgp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wdhpmbyh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163fxdhrzxk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mxzrckok.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fmhqeelf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mzgxionm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qojpuxgv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163anbzvudj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163siaxnzwt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wcqsdrfz.html

COMMIT;
来源：http://www.sxryk.cn/163nmyijcli.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qbniqivq.html

ROLLBACK;
来源：http://www.xuanzx.com/163rvwfzegl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wjimyged.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163sfuvgonz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vnpkbpci.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rxidrxep.html

[Q68] 保存点
来源：http://www.xuanzx.com/163sosjllyp.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dbwuhari.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uuoklhuu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163rhxcpjfj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hkffmfrz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xsoghdtm.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vgakjkkz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fzunylsb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yvyjmnhw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rxgivshi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cgwfjzim.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rxxaceph.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163bexewqsh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163msjxsyym.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kyqzlsos.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kzpuzpir.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vldcqpyg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bbtgkhtx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ekdwvovw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gwjxcgdw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nfznftku.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163whruefqb.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163gerinjtv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hbccckhx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fsocalyw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zzgtgeby.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163agkgfkia.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jqjqyrpz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163kkhbwczw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vssngeri.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163cufixrqg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163svzgopmt.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gdspjari.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ahjaoeoj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jqnonwcg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lcmpxvbc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163woeqdcni.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vpmftnmc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163afpioofv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163usuffhxk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pszzoxgp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lhevjyul.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163bdbxxepz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163tsjxrdtq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dsnhgjpr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163amdlzptj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ftxiohrw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fpckvxag.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bjbxmdqe.html

================================================================================
来源：http://www.xuanzx.com/163gwgbcmik.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zdknibrr.html

================================================================================
来源：http://www.xuanzx.com/163xoncurnp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cfpeggjf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163rnrlfhmh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163elyforva.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163nmetdcpr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xvbvhfqm.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lxwzfbbl.html


<!-- 参考信息 -->