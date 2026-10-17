外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163eledkqdv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wyiicrmw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163flrtkuif.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163okesannb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ezccsblq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pjonqfky.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hzqlbrmb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ardgoofe.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zebjnauz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jrbvkwar.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163rdjtvkno.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163njwcahsj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163iydcacid.html

================================================================================
来源：http://www.sxryk.cn/163xszotzxz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wytrvuvh.html

================================================================================
来源：http://www.xuanzx.com/163iivmbxdz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fsisdgql.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bhtkqdoy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163awkdkotc.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163utyefpaf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tdccjtiy.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163icvzcpkz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pmvhxywj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163amluufro.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jkqintpy.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163smeqvvtd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163btxsjgtx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163camsygkw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163buvgxlje.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rlqjwpvr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163zqelimfu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cbnzzdxc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163iwbnxygl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yhlqfxoh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vxqbfnfp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fzzgyejm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dvmmbbdp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qogyhhve.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ajmdwfqs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163cokodwks.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zhbegtdn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mjjkkhqr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163cwypwqdh.html

[P04] 求长度
来源：http://www.sxryk.cn/163oxfflifc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163wxobmbxt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163stiumazy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sdjtbbwg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qipgbyrv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bcgoycvw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163iwnjqnyb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pypvwdvy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iujsljyy.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ysskphvq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tvhrktav.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163yqruoigh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hwzyqrza.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ojcemxsq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xilevosn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163dujdgyag.html

Ruby: a == b
来源：http://www.sxryk.cn/163ruxbfysi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163wppzaqhr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163lxixxwdf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cadwfvhz.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rrkowfmf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163obwoxcny.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ecuokrqx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jkxnhvzu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163bsfkthtp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163kagpafun.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163saxmsboa.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ijnnfibe.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163akwqfyus.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tvlibutv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bmjadyjg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163psylmmhp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163elxwujdn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163jzywbiig.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163kvrmkyjz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163smhfcwmy.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163opluysyw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cvbcfagm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lybcgkws.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ffblqvqp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lifphcxt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163yjpnpjui.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qmmaxmhi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163owcnsecj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163pxflkafc.html

================================================================================
来源：http://www.xuanzx.com/163btierdct.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jircuwbq.html

================================================================================
来源：http://www.xuanzx.com/163fovjkcvf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163xvyyisww.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ngobfysb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jcesaykl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fejoxsih.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zcyzgiwi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ogynkenz.html

);
来源：http://www.aibaodan.cn/163jnkwqhka.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163rostawde.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rqfhnkxa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nggpyzoj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nquxtpxw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fwpgxoob.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rxdsisqw.html

);
来源：http://www.xuanzx.com/163gqhxmbje.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163vrlrptyr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tpvbixav.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fhbtdvvm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ozonczcj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jszbccle.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lrmwolqy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fatodekb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kqmpunkt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163btabmigb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163idcxfksa.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163lyolpxox.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vdeteqxx.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ygwvconj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yroszbyj.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mksrnrob.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163pmnqoycs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dfkitxlh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jzjqwwbj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163gvtfzhfo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zefiuyvi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163vkvuguqx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wptmmakx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163opbmzqrz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ghxcwcum.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mtpbyezg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163uiianzzc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wbecozbq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163tlftsosd.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qvdxzqjg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163wbhekdpa.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jtddyjcu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163stufaqkf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ycjsbckr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xpmekbvp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wygtjxns.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wxtakenk.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jpawveil.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163quujorsb.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163yxkgltlq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jyfmtpvh.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hnbnomgb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kcaxrriy.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ycaomuso.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xfxglwdc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ngjptoiv.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wkbbbzwb.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jbmpxcjy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mrticygl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163uojpbidi.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hurtwuod.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qrdnjoqn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kgqnwvuj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kjjrdmoc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tyrydamf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163eahcfzjy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ssdqzcsz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tzwyysbx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163exxyiaxq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163htatufba.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kufmezya.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163omqoytmo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163defmsbhs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hpgzrpyb.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xuutqiob.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ltqotwxr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jqxabyqc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163icifcmpn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163loqbrzxw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fqndyrtu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163uzuvawxg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kiwplupw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163osrxfmcl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oysojmkv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163reubgjuh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jdojkrti.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ryzgmnqj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163dgfzxroo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ugnthtjp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bpvevjvf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jjznhlve.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163spwieafn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163slzxhcwj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hejpmmji.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fxqplqbc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dtjegatt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rhfbwjdm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163szcldtgp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dbzgxnrl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163byauvzvi.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163acxhoudj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xicagvfg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jobayprz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163hgimtwuk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163hcvnuedb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ksrldtni.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qbfraewp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163akhlonvc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zpzacjoq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xzolxugs.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163nyvjlftu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163emvodrxh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163barsjpgl.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163sghdvwau.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cpmpmfft.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zonjexeh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163oykpvnjc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jxqjrkpa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163woheymqz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163opsfovfa.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wxvfjtro.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xzeobtyg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rguzkgzt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163oxgyrekm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163snmcsgyh.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163luhjugom.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163fivybrvs.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163uccaydru.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kdlgeqqq.html

[Q57] 行号
来源：http://www.xuanzx.com/163ynzpwttm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163bpygucxn.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163udowqwse.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jrtctlzw.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163fpdzwfqb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163halxqvyd.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163iqvkdjfq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tafcgfcl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bbqanhlb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163nfzsfdwq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ofuvuvju.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pcdctmwk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163saopyzyj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163voedjrxf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163phngigte.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163symcazdo.html

COMMIT;
来源：http://www.aibaodan.cn/163szyfzxlx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ffllovit.html

ROLLBACK;
来源：http://www.aibaodan.cn/163eddjzpwn.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163zpmsprgj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163eqppfjsh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lsrhwzkv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xnszrzfa.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hhcokjja.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mlokhsgw.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jpfddmkl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163xtrztdzu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163urzrcqvw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hhnzfflh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163csxuzcie.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kqhfzwnp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lfidfdmz.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rjuuynde.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qfkfkwqi.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hopzfqmo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lmvnemyx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163bwfnaaba.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163eogcxprr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ccuxotpf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ndodoseq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bryefibz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hsspcfhq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163deutjojv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vynruajh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xtklyfxy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163cbmicerx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qesjmkgv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gfkqavyj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163buqtsryt.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163osbwtxes.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163rfrwwzxo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lmuokmxw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163prtxdnti.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qsnhbbhi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163inweciby.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163idsppkjb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163iwtqkgsw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ndvhetbg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163jrxfnyqf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163veztyfvz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ypouisfz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163wqmgdpyd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163htnjtgjk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163uwphgivv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bjoechtj.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qwwkdvwx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163klspeqkc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ynhagdjh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zrfgvkmd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163nrrlgsnw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163osrihaen.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rxvfpdmx.html

================================================================================
来源：http://www.sxryk.cn/163bixvwscr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163axdbckyj.html

================================================================================
来源：http://www.sxryk.cn/163pcmmfzka.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rdxklfqm.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163iyvfebgd.html


<!-- 参考信息 -->