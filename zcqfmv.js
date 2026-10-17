外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lpwtixxz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163sewpagsu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gjgbuqpl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rokczylr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gbtvnhds.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tuuggzsc.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163olhotdbn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mzwouwir.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hgmbftzx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bwjzhrjc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hrlgajfx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bxdduioo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163tumikwxe.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163glhmczsw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fgevgsbi.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lbrmwoup.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163powytoyg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dnxwyvwa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163utukiupa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wmdskqtk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dkfixuax.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ntawgdru.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pcqutctn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pzqyvnur.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wluzhcsz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qqqmnfht.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sizhvrys.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ztuoybfq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zavdekng.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jzulxcnl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163roxyyadx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qyarnczd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pilpihzp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ptrzimyt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wdknyeyi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pohvbtcu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oaurkwkd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ohifmfah.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163onmcfcln.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ucvvwqqq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mkxtluml.html

================================================================================
来源：http://www.xuanzx.com/163afztmvgl.html

P. 常用工具函数
来源：http://www.sxryk.cn/163iqvkayyx.html

================================================================================
来源：http://www.xuanzx.com/163skcucbfb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163redazlpb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zpdigvkg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xrgohelc.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kkdknzma.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jrsrupqw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163bcixxzdr.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rjrsykqf.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ywqiloeo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ttcbfxre.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gtxcwfmu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fdypxbzl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fkbrcpro.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163mpzmnjtm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163mzpfsonn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163uecynnkw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163iixlcqlx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jgjivfnf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cyquuzgt.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qtmdahcx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163kagkrmok.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163madefjna.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rmqhxlol.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163idahduev.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mimdybzd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jkvdmbsk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ksmdorrf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fovnzyba.html

[P04] 求长度
来源：http://www.sxryk.cn/163jlruszqt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163npfkrdpd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zsawggoj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vldatqox.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163myaplxlt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163gwzfduzv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ibvfyjpe.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163scsprana.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163aplgdpyf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kqspjpvx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163syswtyzg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jlickmry.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163onajgrhw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hbngrszu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163smrtbngr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163erlnpily.html

Ruby: a == b
来源：http://www.xuanzx.com/163ygjovjhg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163frntncof.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gpwazpoa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yscwfklp.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163szydkygy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163awrhkuuk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163lbjtdjfj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163nuetkune.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zycgwdmh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163qfhkzxfg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gdyoaaaw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163yllmdxki.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163scncsjsr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nncfiqkm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xqtsabev.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rtncghgf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hjdtwgat.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jkkjzonc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hjxecrqf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cqzzwmyk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163zreyjbyb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rcnrjetu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163uagjmrrq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163fjivlnhb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xokyuxdb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hlpuqdxn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qtvzqwuy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ovltcvjg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163avyyhcbi.html

================================================================================
来源：http://www.sxryk.cn/163hmlcglpy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bislnazl.html

================================================================================
来源：http://www.aibaodan.cn/163bannqhuv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163izhorcky.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vzinyhnk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tjgkkosl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163pziienah.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ovhedkrv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163zkankrvq.html

);
来源：http://www.sxryk.cn/163efucbmcx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lafphjqz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fomkvgla.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163trgzpgqq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163lltpdqvk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ivdgsvrs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163naaebpdz.html

);
来源：http://www.xuanzx.com/163mjzefdvi.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163imxmxpdf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vlfdklkh.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wsrfweec.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ljaahmzp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rqkxrmwn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cptgbzlw.html

[Q06] 删除列
来源：http://www.xuanzx.com/163fkiifqll.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ispvzwbt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163pizkcnkl.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vsbihlnm.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163vzilgvvc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ohqmamzk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ymnqbxck.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163irvnxdco.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163oygrtfdr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dgcdtwic.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163mzmlimla.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ouqnpfnk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ecekkjzw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163cciljphx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163txqeldtn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163rjxkxubx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163cydzqczu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163knmlgoll.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ybfyfgim.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tlvmnfic.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qnctemmy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163cuuplvrx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163huspxqst.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163uueyxfyn.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qbfnepzi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163okzzrrpq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163boizpssh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jmnhjhbr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163selhyljf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wgoblwud.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163orklnyzq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163eyhahkwx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ajhcrfmp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sndhbfdy.html

[Q22] 排序
来源：http://www.aibaodan.cn/163cxgvjaqg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nczgdgxf.html

[Q23] 分页
来源：http://www.xuanzx.com/163yjxdwqvl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163kafreuvj.html

[Q24] 去重
来源：http://www.sxryk.cn/163aklkihdt.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qypqybia.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163eovuehna.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vkgxccxi.html

[Q26] 计数
来源：http://www.xuanzx.com/163etvsrgrr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163itftwbhv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xjjnwnpm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fnzhnkhh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ebgfvhgh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vdqjmzau.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lazarjgn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gijvnezv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mgwzavvh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163juyysmtm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163pwmyxssj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163iwunvvmw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163idgrzliy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163liczlssn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163yjdxkdii.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xpzdtova.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163skogashz.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dioxuebq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163uaijiqgp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dvbfxlwj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hqltepnm.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163abquvszi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lzxbaalu.html

[Q36] 左连接
来源：http://www.sxryk.cn/163yrirmctb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tidauhpg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tfzefelw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sofbzdju.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yatjtbje.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nkqmuzss.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kozypwxm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163olltfktd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163oexkqwqi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163nwwdkkxe.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163flsntwtg.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nlzobjff.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163wfnuvsqi.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163saaufkso.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zeobqtew.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163orltwtbd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163shoiftvp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163yxwlretd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163swzrnkco.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ftvtxptg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163igwptuyb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yceexhsu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163trtwqhdr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pcwtfpyd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fprgmpcj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yasihtfn.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163oniemevh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zidruuga.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163abzqmhjf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jggggvst.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ipaumlwx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mpxitgbf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qgxdnign.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163cosgmlfj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wesaxprb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hehcnvgg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cdalctla.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163comwthxe.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nayhrluo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163staopdmh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rgjcetdn.html

[Q54] 清空表
来源：http://www.sxryk.cn/163guhizzud.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bxtmkfss.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163huwxkqto.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zkkcjlxz.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ookfcmmk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163szomcrwp.html

[Q57] 行号
来源：http://www.xuanzx.com/163cunrtbqp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fddmoyil.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163tbyrcjlb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qfvlffqw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163retjlhcp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163htgrffjx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163dommgmia.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163asxzkyik.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163bkesdvdu.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163imoruxly.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163impgeiyo.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163clhutbfi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tjmtfikc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rkopblcn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163abdztejq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xioingwb.html

COMMIT;
来源：http://www.sxryk.cn/163fmonsncd.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163onkcwivl.html

ROLLBACK;
来源：http://www.sxryk.cn/163syvdeqhx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xiducmyr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zgtxbpqj.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163unvfbofz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163eoxemuvo.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vdpuwggj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163fyjffrmo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kiqqtsfn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163pfxqeiby.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163kzoukmdp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fxdpjkzq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fazyzezt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163urvdprds.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163cwkoeqnp.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vduxofwj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163musesbyt.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vcqznony.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ktulwpwx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163kmnzncnx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163dirulxli.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163trmdvotn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vnisusoi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163nldzggdn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ifzvmspb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lnueymbc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pckywviq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163cxoqcxyq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163yjnofkoz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yvgpsshy.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kantbopv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cvvbudyu.html


<!-- 参考信息 -->