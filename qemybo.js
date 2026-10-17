外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163izfvnwih.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xlfildfd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163vstjrrnl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xxszwmlt.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163lgbtnvtv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lbasnwyj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nlewitdl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xuvczsdr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vjpncbha.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ggxkodvn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163leuepfxd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jhezxfji.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ezcnqnom.html

================================================================================
来源：http://www.aibaodan.cn/163pmalwzgk.html

P. 常用工具函数
来源：http://www.sxryk.cn/163alzahepx.html

================================================================================
来源：http://www.xuanzx.com/163yxveofjp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cxtnqzro.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rciunyjv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163iruundvv.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bnkevrva.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vdbtefek.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163clbqyxqv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pxltospt.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hwtipqwp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wwqezhxi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163htuvqigk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163aaakjnqg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163yeuhoxyj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163utyxnbur.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ljmbwlpt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dgkfvghc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mplmfdxa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163repmjace.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163xtmmhnvy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163jbonwvgm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yvokerrz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hdwnpgno.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tjjynhzr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xkokijtg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163aknndjdv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163xrgbicqe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163mwzowyxz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ibexxnxn.html

[P04] 求长度
来源：http://www.sxryk.cn/163kllkcjuy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ydtjypmx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gllkelnp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eluqitlr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vpxjkbqh.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163tqtavuyd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163oysjfphj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ucvajnjt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163uycwqkzp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gzesfkeq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gldalhfv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163hxxfmixt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163idmrowsy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ltwaqnbn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fpsunocj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163egnuwqav.html

Ruby: a == b
来源：http://www.xuanzx.com/163lgyosajx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pvklzigw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163grmztdpf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163errwkinu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163bqpiruha.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wvvlguyv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zhxtwtxt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163xtosyhbs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xjrbsiog.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vtcxtybr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163fmwfhpwd.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lpcqgyxt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wovjgpwr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163upwnqooa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163afhbonry.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pjuefngc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vaipgljk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163haoiwrmi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163eqdxfcwh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163clgkwwfz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163beugxqne.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163knqsggex.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nrxeelyi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163keopbbbh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163bcfywnej.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163gikknrbr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kmotupso.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163bnhzlule.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ykjoksdq.html

================================================================================
来源：http://www.aibaodan.cn/163ypdawgev.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163tcvijyyx.html

================================================================================
来源：http://www.sxryk.cn/163anbraeld.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wsontbtg.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qxydfhwu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vqzstats.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hpkzbply.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ttnazvmq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163oswwihli.html

);
来源：http://www.xuanzx.com/163ksydetpw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wokfizgg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rbyjjfpy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zcizmdou.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163msutladm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163epphnzmu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sawzbioh.html

);
来源：http://www.xuanzx.com/163xqysydhk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163szsrgupx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ubigpyzi.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kbrstpon.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163kmxcympq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163kowgrtqh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163djbtetxn.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163nuthwowc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163fyxcgiuv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163amkrwsxz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tznohksd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163smjexlcz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xcbmluvu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163lczczdpw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wbqykpkr.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ynkfrxsv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163imefyalc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kaepedwq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fcfjlxua.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jqpklpmm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jmgeriai.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cqcrdrij.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163irbckszw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163pkeglzkf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ygwagfzm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163iwopxdur.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bbzjayth.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pmpcotcl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qioiumar.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jajlueug.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xjxaclmh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zojgxlvd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163plzydfsk.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pmmlgblz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163dzcbuljw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163pcviqqtr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163lnqpsbxt.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163isdnuifr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163cxkgqvgl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qvapgmmu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wpmhbjbv.html

[Q22] 排序
来源：http://www.sxryk.cn/163nuhiytkc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163aaeqgsie.html

[Q23] 分页
来源：http://www.sxryk.cn/163rnvhbkmc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yojgbutp.html

[Q24] 去重
来源：http://www.sxryk.cn/163vwrlmnrm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163iakyoboj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163lqovanvj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ulpnurcv.html

[Q26] 计数
来源：http://www.xuanzx.com/163grlrhkib.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ypkaiqxu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163sopvoosc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bmmarhdo.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yjfvfegl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163efwdlwpf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163filimwnk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163sqtpwcgx.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bqqeemzn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qtmooste.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ogxjhxaj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dujafafp.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zczjxrkp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163furkluas.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rlzyylxf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163fttyczkr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bktqfzks.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163muofkfon.html

SELECT * FROM (
来源：http://www.sxryk.cn/163khhlckun.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ahjydcsd.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lhfdjulz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gpqotgyp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lirxqwvq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163huvikggk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sblrxmie.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ofyozhnu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163hvfmhvjq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dwwgvrjv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hbxowhys.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vpdhvbrz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ueexombl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pblzbjhw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163cjxgzxie.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tbxfvyfb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pnfzturv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163sgeuqsti.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rrqjakes.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vaihwweb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jtiirrwb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vtgsatgi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163agtcsxrc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163beudywni.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wambibqg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yyawwbbe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qcmnoxrx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ndldezdh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163npxdwivk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163oayodlrg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rzxojgvc.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163quxjctjh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163okharxta.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163aecmsvuk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fqvksdzo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vyymvkvg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hdlhcnvs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fvwepdtf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163clxbfspj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ulsuwiuj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163owrbzjog.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ipbdzant.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163axifsvty.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zwparijz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163labkqoho.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ldjbcfif.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kaxswbfb.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163balrtiug.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dchqxkkt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163auitsatu.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ywneryzj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fkfiengb.html

[Q57] 行号
来源：http://www.xuanzx.com/163vkcuutfc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163braizjxc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xsrypcze.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mdqvxvsz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jerskgoh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zsyodnrm.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lbsmsccu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163nhnhknga.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qslllzio.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163euzptzgt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wjxfgvlb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dtwbjshb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mdnwoxpu.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163tbrnouab.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163anhkqjgk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gkgjrdru.html

COMMIT;
来源：http://www.xuanzx.com/163vsgsfvki.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163geqzgbvv.html

ROLLBACK;
来源：http://www.sxryk.cn/163goiaozjp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163djwlzltz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163arqzwggb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ryrvjnfz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163imbnlhpb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163sxwfhrou.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jjfarfey.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vccbooyl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ivpdlzll.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vmrseoyv.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163flmcpgmh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163arnpeugp.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jlgqvxcf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jbkxstqf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163uxephomj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163liwerczr.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163lsnohkec.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ibjairgl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nyrpczqg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bskiknph.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kjileexp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qbjxmlxh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163uqcyuztr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dlnmdcev.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163sutnxoln.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cxhbhsbz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163sxuxpeyt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qezxomea.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163certakle.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vzarxmug.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163nyiqqjwr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jzreannr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kzkahsjl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163qzctwojx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163diijmjlf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163dwqkdhec.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sxolgmst.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163smsslpjk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163etndtigv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ulslyufd.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mwlevlon.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tnhhzpov.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163sctupppc.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163djkugfew.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163swqebgwa.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163gbmbqhlc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tszodlio.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163bpdbskfe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pkzrsnyv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163omcbslml.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ujynrynb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rdknypbf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163kthejtbv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cayxanmi.html

================================================================================
来源：http://www.xuanzx.com/163ydsbzpte.html

R. Bash 专题
来源：http://www.xuanzx.com/163tguzreen.html

================================================================================
来源：http://www.xuanzx.com/163tasjkbmu.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163yeegxxmu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kcwwqbvf.html


<!-- 参考信息 -->