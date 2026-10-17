外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163htystwpw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zbrdczgm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163twhphunz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163foiwdaag.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pcaboyyf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163vfcdxweu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uqberrqq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hvjyztok.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uaalvnbx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163giybqysu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bwcvrpgp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163hubpbmkl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rbikmwxh.html

================================================================================
来源：http://www.sxryk.cn/163aanwhfhg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163czsftera.html

================================================================================
来源：http://www.sxryk.cn/163gsqhmmrn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kwsosthk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lcnurjhf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163erycqeop.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cdlyrfzn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nsbpjtps.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kwzlsdmd.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163migkyauh.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rehqphxd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163djgedhxi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xfofhnoi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ndjtsggu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163grtwhjio.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qknptwvo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rtkemtwv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sgzrukjk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163yvezzrft.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bnuklvvo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dpzvnsqq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xrzualii.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163podizwth.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163cwyxuqxh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ayobyztq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lrydagyf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qxxafaxt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163jqjamxsp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ireynipj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163odwdideh.html

[P04] 求长度
来源：http://www.sxryk.cn/163ehdjhvsb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gbiaivma.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pdgezpqu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wovpawbn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163miskusvn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163sefyjsev.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163anisixeh.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nzhtyojl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163kdpzspls.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pllnmmqm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gmekpmap.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cuxtuwnh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ocpdcxgt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qukfzqba.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qupkrmvj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163pwnzwypk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rmwucypz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163csfocqxk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rahnjubi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163boozaaov.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xrdejogl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zfhjpbtl.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163upxtrdxe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bqjhfjgw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xcmgoqbc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rpyhdgaj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bfxtcgtg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tiynmkzd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163rfpljkvm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163urvtquck.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163frvjmeyk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ingoeuoe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vohdnsxr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163opkxiodw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163whlieslr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mehuskyg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163phwckzzt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kwtswmzb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gycncsef.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163aeixswcy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gdysukfh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hbdubiko.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nivpaxtb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dvquisxr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jyskhkvt.html

================================================================================
来源：http://www.sxryk.cn/163cietnakq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163bcdwxfnp.html

================================================================================
来源：http://www.aibaodan.cn/163hckucwhz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163exsuxjpg.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lsohmqdo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rdrmmwqi.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bobkpzdi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163brqcszid.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163imjxavqx.html

);
来源：http://www.aibaodan.cn/163xpkakrsg.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bfcahuvr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ucunsnih.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ackogbea.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163csztpfpy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163vvnquvij.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qghnjcuk.html

);
来源：http://www.sxryk.cn/163cebwkcrl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fhmaevaf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pcymnigt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lsrhoouu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rsghassf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163yvjwjuxm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xgnskxas.html

[Q06] 删除列
来源：http://www.sxryk.cn/163aaxfzibt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163hxqzzqwc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pggzazfg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163yrtbciif.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jmlzhekf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jvefccvr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hevrbngd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163bvrsdtvz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fpjdnyqi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mhkwkmag.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163aqhbpkop.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163edqpxtdi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163oycphhku.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163njzuthjf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jfbdpyej.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163yvkkksnh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163egeossip.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163unuekahr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163lajfjsmv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163enuchhvv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163aqifxmyd.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163esutqjss.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163orpldfix.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163pddjwkty.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163fljcjvta.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163pecwybyw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163lcubchyd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zfsmzavj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hkjemipo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163usiqjfqn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163noygzboy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163yoenhyak.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ayrqfecn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fuftqtyx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zuoolwfp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dlrqnkub.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nkuhnbvn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163giwqzsvf.html

[Q24] 去重
来源：http://www.sxryk.cn/163gcgxpyfq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163emgkxqgd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qndbohvf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mwjfsikr.html

[Q26] 计数
来源：http://www.sxryk.cn/163ihemgpjb.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xwzkdwfw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rjtxlhrt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ywfooipj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yitkbczb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163eozxknrg.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163apacjegv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cpbdsbun.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163zvnbboiq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163voymnxkd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pzpiigzn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163alwkpufz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fpvjqqod.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jgqaegdt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163bvftdtym.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163odjdnuuw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xrllivjo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ffrctkpx.html

SELECT * FROM (
来源：http://www.sxryk.cn/163olunrpcj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163yphdqoow.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163baswcswp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jendsvtj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zaskdjvc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wxindhrv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nyaiskps.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fnwayedd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163akzvctpo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163nuullqdp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kwaefuvh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dchvlazj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163sfxagjvr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wtlfhtim.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qkpgdsyj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ezwxnsfp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nrmkldhl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163djtyptvx.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vulgcwmz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163oddaxymb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dqcyrirs.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ddlsgxwl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vrmggjad.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rmkwfida.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163lmvywitg.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jjabjujj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gxaxydtu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vyecqvzl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mwecrajt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ufxtaaqc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kgnjvmbi.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zcoexwun.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qivjaxjp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lqlxbjuo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cmolwmjr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163czyhtbjp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wgpcylwq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vingkgry.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fnyxigqw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jppahyen.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nywivcuu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163blucbjff.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hggugqmc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tujfnpls.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163wqhitxmr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ripcczsb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zmegxylf.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kpgcuhtl.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wnesooif.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gdtmlazy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163gpfglvfr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zchkagks.html

[Q57] 行号
来源：http://www.xuanzx.com/163kalsjqdz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163lxlddivq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yvmqsolt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163izgarpkm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jqkgadej.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163szdjkaws.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163sjzaueax.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163txqlvgym.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ilqmhywf.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163eavqnbtu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163edbaoync.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wxatcjwh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163adlxghgt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163mnbyjdvf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zfumcgvg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yoajoumw.html

COMMIT;
来源：http://www.sxryk.cn/163eosfbdkb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cdtgsssm.html

ROLLBACK;
来源：http://www.aibaodan.cn/163isowpcsh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xhpjqygq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wdrpsvtk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ihjeuemm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163cueejpdo.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mftqyeze.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163aqxvsuwy.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lhiafmze.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vlpdswzt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hqhcjhvr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163saezxggw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nmsfjoii.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jhyqfilr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163isenfaec.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dutiezgy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kymqxrnh.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163imhatvci.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wtfhzxus.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cleijcbs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wgnohgpp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vjwlohgr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163xschkujz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fpqbfxfz.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163btxbycnu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163psauvcyp.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163wpmiyvjq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zykouwhp.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qvodsabv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lnurkdys.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163mducfoxi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gwhbkjob.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163kqyyqhor.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vfjuxvvd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163djwwsjqn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rsmdkvff.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qvghmxvd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163aapxiweu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163pueqscbd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wukwtacc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163punubowe.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163owsrzhpl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lrzdzxap.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163whqacshr.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163soktsjkv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fcxrkjsv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jromunwd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jbbmqrer.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163pmtbubjh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ionjvlak.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cgivoukz.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163owgufnsu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mbtanmsn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163opgsdffg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ofdxsxzv.html

================================================================================
来源：http://www.xuanzx.com/163cuezskuj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pskwypzp.html

================================================================================
来源：http://www.xuanzx.com/163hjxmayhg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163eqziwqzs.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kpcpgavk.html


<!-- 参考信息 -->