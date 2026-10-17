外链999!wailian999！

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ofmfjisy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ezlhydjd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ecofwdil.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163umobhzks.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kdzyseoh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163hipkhpdv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ajqszced.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163eflcarib.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xbyrfydh.html

================================================================================
来源：http://www.xuanzx.com/163ogdvyykb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nvcmvrlh.html

================================================================================
来源：http://www.sxryk.cn/163ovbltflp.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tpvqjepv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163jfqqewzy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hmfzgioy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dgmghnig.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wyxuftkl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163zyuxjnat.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163oofkjrgz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163aawupcva.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vomfxhwk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lieklmby.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ttfcwsyb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163shfergqc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lwrwevcr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163khpqqifq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163edqnvrpy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ttoboiqb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lorcdnqo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gplvnkzi.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qtiavjoo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ilmxbdgn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163sqcbnmav.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163emiydjnr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163acjsxvhm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cwvlooax.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pcsvxcpt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hkaeslxm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bydyjeuq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xjiwlrtn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gcmldptc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ruetvvbw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ooquvnfp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fjsibbmi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fqgmvgjv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qacjwxcg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163srimqldw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ytlokiyp.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163glyffpgy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ypjduofy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xnrwnaqc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lrsvbsey.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yacdkyik.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vqsvnucr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vnsrfuoh.html

Ruby: a == b
来源：http://www.sxryk.cn/163bvgaqmiv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hyjjeubd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163edqmfhtm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163kdywpyym.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tyzjygty.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163eiwazrwz.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dmxeeaet.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wxadweep.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163huuejrjl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163omzepwql.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163nnrtohur.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wurzlzvl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163afmazbqn.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hqzcqurm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zyccigzv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163koyooweb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ycbwbrwk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163gcytpees.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rvjkbidi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kswqaomf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pmgtrwqk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163awxuxaov.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163elclflfx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163rswvgcao.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jjieiqrk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163azomzifi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163sxksqyew.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163tpvncnem.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qjdesock.html

================================================================================
来源：http://www.sxryk.cn/163tidzqair.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gwtpqoqh.html

================================================================================
来源：http://www.xuanzx.com/163vseoygrz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wvoleadp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163rmyluzsy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vhebqacm.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lzwhjnlm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163glikuqfj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tosikdom.html

);
来源：http://www.xuanzx.com/163wyptqnil.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qxgdenog.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qdjzlgnc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jltmmkui.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jzonzfum.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fyvxjylm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pdcllgxq.html

);
来源：http://www.sxryk.cn/163mwzafref.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tmxcvprt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163cuajpusb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qndjuadm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mxmnctfd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163eqyowvmr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163tvlcsouy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wutsjgna.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163pqhsjdvo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163izjxpuxu.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163udlegqdh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163mwpgfysb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ozsajwzq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xumbeuax.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163bateiyac.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mldloerq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163kepmwnmr.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163cqqpluie.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163zwfqkdtp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163oqzsxghq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163cvqvnyup.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163nnillogf.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163inhvptgq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ntegugqs.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rapfqvzh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hawlatci.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163sfeufvlm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zfofidoe.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163btkcnqai.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163krjmlfrk.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163kgofzuox.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163cmtgwsfs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ixcdzsob.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163oizhkmsh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mnzlyxpx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vjuyuwau.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gyqgnkkg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tdsmlriw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163oyogsdgb.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jlkvjwug.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163dzzvjkgm.html

[Q22] 排序
来源：http://www.xuanzx.com/163knqtrtic.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pumhmdxb.html

[Q23] 分页
来源：http://www.sxryk.cn/163crpuxwld.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cfnsbnlo.html

[Q24] 去重
来源：http://www.xuanzx.com/163alkilofs.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163trkdvkuv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yidhfybe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163kygnidka.html

[Q26] 计数
来源：http://www.xuanzx.com/163nyirakke.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xexnodym.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hllvjyvp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163oknflark.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163stnihtni.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163yweeicle.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ozwrmujr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163vldduwix.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cmciwqeg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163slotoigw.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sxygubrv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lqkujozf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ixlukvey.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xdriuvzx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xsbrcwhp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163kjlybosy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ngqtqfhn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lhsvedcb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ecczunbg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ggakglkj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163iroqxrne.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mmxiuujl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wuyxnzqt.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163xcenedqy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163feyzizad.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xojowswc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163bwylbbnm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ynsmhmxk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zasbxmyg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163uekusrue.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163kwtlogph.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163edpolbpo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sqrbuxoe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163uancsljh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tdzvanpg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163deutzpai.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163kwrxlgvu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ffdgogiy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tsvpbjvw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163cfwgiivy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163heaqbpvc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jzakbljx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qevbswqd.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ztuqgxfc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163oyvgmzvf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fadaohoz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bkxeigxh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mypgfnej.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163srbostxo.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163bkhaqeue.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nqsduenc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163meocqtla.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163aljimkvf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163xezjwsve.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uzdofbfm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lzjsqsgq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wsyehtiv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ujtzcsbu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gmfiaocl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163exgohfzj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163tzvvossk.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ddxdykjl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163abhjpygd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xijnatqp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ybuxlmnk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163iunsdfks.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cogtuwov.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gbozpxrw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163aanzzoeh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fqubnnia.html

[Q57] 行号
来源：http://www.sxryk.cn/163gxyawrmm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ywaqitxv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ypponvjt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mybumajf.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nnglndki.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qzroaqba.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lomgngna.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xplksmsu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nwhraosr.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163kjmkrmpz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hmshcjra.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163oacesjsa.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ggxjklhf.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163iaucvyoc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bizhlonb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fveillkt.html

COMMIT;
来源：http://www.aibaodan.cn/163gnkbjzkk.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mbiyhilu.html

ROLLBACK;
来源：http://www.sxryk.cn/163omnescis.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163bsykotao.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163othpvaaf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ljtqvstp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qtibexzk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xmerkkvf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163rgbvogiz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163oufivill.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163srpkhsfg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zycbnbzl.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qkpgjkho.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ikekgodr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fhtagesc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mecovwtr.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zlecqyeo.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ehyuehvp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163csqoudzu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163gumerrpc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qwubqfgf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163oqjcjokh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163teqwdtjo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163xxqmqzmg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nlmforjy.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bdqeymka.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bjhpgxdj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163pdgmgmry.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ffsodhma.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163mmvntyzg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zcfskqbn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ukuzvppb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xlicnmzg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hmoznren.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jlsqvsmc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163aromesrv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ardjqhmd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cvnwhlko.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163caygbsgv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163igkbwdeb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tnsomgbf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163bkvhfkih.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rptzdfaj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163beahxkey.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ecqclkhp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uhldtnzg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fpiaydsl.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163sptwkqtq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xucvjpqv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rwqssrdm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163znkrxfom.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tipyiswj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163inonvhwy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mqisqaua.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rnagkdxr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gspvjron.html

================================================================================
来源：http://www.xuanzx.com/163qbdzjfvv.html

R. Bash 专题
来源：http://www.xuanzx.com/163dfpjbusc.html

================================================================================
来源：http://www.sxryk.cn/163stzcssjg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ymihntip.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tzrkoczw.html

set -euo pipefail
来源：http://www.xuanzx.com/163qbltjata.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163gkpwagsd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163zgkwlhcf.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mxiogxkx.html


<!-- 参考信息 -->