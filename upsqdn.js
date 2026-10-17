外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kidrshkt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dhnpivzf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fmcntbrg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cqxhtfhh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163sxvwjsid.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163kyiioylu.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163enehbpya.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yscdbysm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163gdjnjaye.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163buwajaze.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vwosxjng.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tepzeaew.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163aoumovti.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ufduogsh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163dzxmnckm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fitdynsz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mnaovkma.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gtiamrfx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163cfzussjs.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lbrrgapp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163nwngdvqa.html

================================================================================
来源：http://www.sxryk.cn/163kgffcyys.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wrowevun.html

================================================================================
来源：http://www.aibaodan.cn/163yvwlzixv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ymqdmyhd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nxlbcisz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fezhlozf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wmwgkwng.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kldvynyr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163kcvdhjqn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163otnoikzv.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163stjnztby.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ciduzgcq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mteriqkt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jjzeuojy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163twqdfoyh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cjeufuyy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163jpliihrz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163uatzktmo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cwqgbokx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fanwvltp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163sotkhuxc.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163makoqnih.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pznwwfry.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qkdstlog.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163smodxgdh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vbizqfmg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xgdmjbpc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kikktfzj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tvzhtszb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nfputtdl.html

[P04] 求长度
来源：http://www.sxryk.cn/163lwdxespv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qnsnkjjp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wyglrdyw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hzypyjal.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uvsnjzmz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163rdyqfzjh.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ofcdvrak.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163napkcemn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jchckcou.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ccuhcsyf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jcxfqrto.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lnypgggk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pbcyfbip.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163quzfvfuh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hdqefvse.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163lywvrqio.html

Ruby: a == b
来源：http://www.xuanzx.com/163acdyhlax.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nsispilz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163xxqxonfb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pifrsedq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163fnmxdmue.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163fqwfweec.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nraxvawi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163udgswdyz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hvoqbgzt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qfscvejv.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163cckfeqxd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ytkvidmu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163dhfnpqfp.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wpalgljd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lhbbveos.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rtqfppvw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nqgmqgtl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163huzxotpc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163awxzsokl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163usytrbnp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wolicrdb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uezfjvoy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gcpjneif.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wkvvwtwx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nysnpmye.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jrqpvngn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zkydjuru.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fnycnugh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qetxwyxb.html

================================================================================
来源：http://www.aibaodan.cn/163hkktbfzb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qtcgzjff.html

================================================================================
来源：http://www.sxryk.cn/163lhhnrgry.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ketnlbyp.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gbbbyukz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hiopzprc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ooepkogc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163llwwdfyf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hsnaqizj.html

);
来源：http://www.aibaodan.cn/163dskqcbiz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xjeashkv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jhdpqrsa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163janbbika.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fpcsuxar.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kspugbvq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163byppbsge.html

);
来源：http://www.sxryk.cn/163xfopmgub.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163llnfaahj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cgwgxeqa.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dzowompi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163oohqdivq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163miotpzai.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163pumttiyb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ebggrqoi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163uehzjhhk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163wfgyvewr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163qohvwyza.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tdcnshjf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163fionbebm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hsawqnuy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fwrwgfnx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ikxxbzzv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163owzklgkt.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ulbwxkln.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gqupgyhl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cqxtgylq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vdwzgtfj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gwytjzzo.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mnznoede.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163dragnrwy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cgpujqjc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163kicnhszz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163xozdeshb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qkjpglxy.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163iqapuzpy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163mxtpkdey.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163sypmutks.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163efilnvlo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163lnopegnp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163xpjfpipq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qtnpbmeu.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vqrfebjm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163seysnxpb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vytskmkl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163upckzsgq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ariyljnn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163yoleofgl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163uklqavfk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nczzupjs.html

[Q23] 分页
来源：http://www.xuanzx.com/163xpdbwqfr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zwijnnnw.html

[Q24] 去重
来源：http://www.xuanzx.com/163nzowvvdz.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vjspqwaz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wlqkrsyr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sjlblopt.html

[Q26] 计数
来源：http://www.sxryk.cn/163ssewmory.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163vegiruxn.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xqjdmvyz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rwolvsiw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163iwlszjlv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163kntkrcff.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163fzrrbdae.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nbpngfnv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vbtapllc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ilrkycvi.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wokbqbeg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ygllalyd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jpatcyse.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zkaeuhyy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zvepvmnp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zhkdflce.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wvwkxbob.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163neraszjl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163cvtybghb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jhkfjrpx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fjstuorj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nvozvtqs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ioajjnpq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lolacuzc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kfqposho.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ezpakbnz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bxqqrpiq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163hjdkxbqs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mxolnyyt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mdaqszet.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163rpcibzrc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ssqmghce.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163divtikqh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163urddvqvl.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hsmjeese.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hndxbtvl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lepdmntn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vutusezx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163liodyjrx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163gymvhqhw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jrnphpwl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wzcigjyd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163anihxdjl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163neakodsn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ubzwvvim.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wphgvvaw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ssjhbisx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bljzlasu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sdpigccw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163sagidcaj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163gadkroik.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xzzipmbj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cygshsqy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xjgxgmoz.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163inrntrac.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xotqizrd.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163pqqlabjj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163guznrtvh.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163nmrvlnca.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wpcnylfz.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gwpwgist.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fiujigok.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163anyykumk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163thzibozp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xyymmfbe.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163eynftqcy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163sbahssti.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ajplhtml.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mhojowcb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163puswrwlo.html

[Q57] 行号
来源：http://www.aibaodan.cn/163diecgzqh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163aoieoqaz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ycjwjadt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ljkqpjil.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ojyhjvun.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rzrnmpjv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163hotywurh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tqwdpxsw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mmdwzvvg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163unggmzsu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lxeunaqy.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163iyvofahb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gaxjtvit.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163pldwiiil.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163vggjxkvw.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163gecnyqtp.html

COMMIT;
来源：http://www.aibaodan.cn/163thtgtocb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vkjsppwo.html

ROLLBACK;
来源：http://www.xuanzx.com/163nnalerhr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163nnkpcczh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163zgsgzodu.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163txwgwxfu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ithjmqry.html

[Q68] 保存点
来源：http://www.xuanzx.com/163egcltsoo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163zfcaluaz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163sfxtzldg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163wvcuhpvy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wcrkhouf.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163oxfqtjva.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gpyhgcam.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163otmipaik.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ojwleteo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163edlotkjx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163qwxjgesu.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163zsowgutx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163npgyaaui.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fjrwlvlf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163utpexbcs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wujtcnem.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bxswcaar.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rlfvqijv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wctniauy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rxjqhuns.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kyhxoxgc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163uzhqqpfa.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163rtipnsmy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163tdvffcyr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zivayfae.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dwaawwfv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163flwyrqcu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mxdbttna.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xsgpkexs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zvrkgcpn.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163twakxgos.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hkzrocjp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jwtwpyxb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zdakprdh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163azomnimo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163dctnuqad.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vjcihxly.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xxnorvrf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cbommjqu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163nhqwrnxi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wpblrjuk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qrllfmiq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163jrevpzze.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163cshfomrk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163aiohwyzg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jwvmttsa.html


<!-- 参考信息 -->