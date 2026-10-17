外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dbeqmuhf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ttxdtskp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xymsezdh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163sfcoitqy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163czyvcedu.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163yswkmgek.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zqvapypx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bybiwbod.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rbmugshd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jtpijewl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yequspgg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mmdtmxwr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ggsecaca.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163olniyqdz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fpytrxqe.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163aqucfinq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163povyutfh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163chhlcywo.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tzskeylf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ckvezvmz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163msbqkfsw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163pikuaare.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163loxlmoag.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163buzdhdmt.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qfopmhpr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bonsjzqw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qxjzjnwg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xdjcmmez.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rcuqykad.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gpjuxumq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163frctnlap.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163kfkcjqsq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163eedqzssm.html

================================================================================
来源：http://www.xuanzx.com/163mibddqdz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ukwtamdc.html

================================================================================
来源：http://www.xuanzx.com/163glhlanfy.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163biakncsy.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163umcspslk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163iifhqlgh.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jwjabnzo.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hxcdukiu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zedtnxpi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hujuzmqw.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hrlvywav.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163tvrycakd.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jiuenjva.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qbzlnknq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163hdwiutns.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dlypwfls.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163emfawjvi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163avpnreeo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163czyibbiq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lbuauyct.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hofeshtj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163foddephp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hgqbpnet.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ckelpvte.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bqzrocgc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qlgjgqmo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jcdrzbvy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dgliyqkj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163uccgqtfn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163rxcfunui.html

[P04] 求长度
来源：http://www.aibaodan.cn/163yvrdzkhf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163nplitand.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iwrjftgr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163etlaiinx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163refldcnr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fobgdilo.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rtsyoezr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163zuciwcci.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163okgqwnea.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163siiggyvs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ibdzjaji.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mdorcoxg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163pvhwvavn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fumuxkrz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ivufkawo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rzsmwtho.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kxbvjppk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163lpwyzxpx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jhmxysdw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163uvamhwfb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ffukasdq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zigsesaz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cxdmwaxx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163rxnfajba.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jedxgayb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nipscslm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163thvbbgmq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xczcyoxy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163yzvybzbh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163exemdvkf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tutmuezq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cctymfxw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163yutzqich.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163nzyhcosl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ssrucoxg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163apmbwrcp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ogojuxec.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163plrbfhgj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wooszrun.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ynrgekem.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dzjhihza.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hmczqhzu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163bpgcjkee.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163djiulres.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163rapvrxis.html

================================================================================
来源：http://www.xuanzx.com/163xjdmynue.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163atkrwhbf.html

================================================================================
来源：http://www.aibaodan.cn/163fgucuztk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kipbcqni.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lkxokipe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bmngrcdv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163khsblacm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163udebqppx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xqfjilpq.html

);
来源：http://www.xuanzx.com/163lapepvtx.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nwrixoej.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163upqozvnl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yznhttkd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163extgyvwn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ditrxlks.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xlzwjzfn.html

);
来源：http://www.aibaodan.cn/163ntqcotfo.html

[Q03] 增加列
来源：http://www.xuanzx.com/163pgxpbfeg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pkzfuyui.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163nmxqnjas.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tastaefa.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163inppazqn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ttwucuft.html

[Q06] 删除列
来源：http://www.xuanzx.com/163zaxmytkk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163hxwirzut.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xdswcqwd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163aedpoxid.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jjwicnpp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163pltrofph.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163trhwmyac.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wetnjfqc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163kykbdkxl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163aldvslub.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163whqqzink.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163sifgedmi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xbrqsnst.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lmciourf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qdjicczm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jyqxiwwm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lnefbozn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mtbibkbe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163cijnyqdb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ivqmcejq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163agqqjrlb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zedrgrgy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tyzfwkmp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pradehog.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qroaihpr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163tkngrnme.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163apxvirpy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yqfyfwlj.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rmuagxee.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mjtydnpx.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nyeuqxnp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mqywesdn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163iowcadwl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163pkbfvspa.html

[Q22] 排序
来源：http://www.xuanzx.com/163rejklgza.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163uboqwkvj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qydzvcip.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163meyfbiar.html

[Q24] 去重
来源：http://www.sxryk.cn/163moqjzlnq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163igoxioza.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163rnknbkvc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163swegxfrx.html

[Q26] 计数
来源：http://www.xuanzx.com/163wrvkhgho.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tilyowvw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ozekuzfg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gufyvprr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nhtispjg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163cqdnpeiu.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rhcwidew.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kogddjnm.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163baccpkon.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gggnkpzv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163wjhvkupa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kviqioow.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163oqrkcllh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vlqmgjiw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rifeqmaj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163imjasrwf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163squtoruc.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uckndczd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163oplceqos.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zxgwxdgq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163cnfudfat.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163puqcetxs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xaikblrc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163sqqitwcw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jqxkeqdo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163glcjstkt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163cyujajjj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ritkgndw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163yaapknrd.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163rhwjjvyj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163gbcmmjtx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163adcobnov.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ayjmgeby.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163sllvwiru.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gvixmvoe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pvmivefd.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163qqcavzsw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163edwroipa.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163emqowonv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mnrrksqs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hyaxvrzn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jocwgyti.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zfnvidpp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mtamorcf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163susucodv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163jhoiapdy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xxaohhuo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163caqnfntx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lobkmvcz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163perqmwwl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163demkmzsv.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163hcnrphnn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163owbxjxhg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163eowfflhg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163boqkyfuw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lzgvjffg.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jsgfbqqc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163mtzxkhej.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ikvioobe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bwosrgnr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163iunizbif.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163smtqvbwi.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163guxzqkvn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163zyuztmgw.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zrvypepc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kjiblrlc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ipocefrb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163icbopchq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163iocmdfqs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gchpkfum.html

[Q57] 行号
来源：http://www.aibaodan.cn/163cettjvyc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cvtyfljx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kkynewxj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163zsfwhkga.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ocjeuqev.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163acbzbpii.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nshaklcg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tcgnlhne.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hxgnnxky.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163waaipqbt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bnuhsqll.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163lsgfbbqy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163enbjidqa.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ydvyeuxs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ygbqqcmq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ieiaitjb.html

COMMIT;
来源：http://www.xuanzx.com/163guchaauq.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163shfafigx.html

ROLLBACK;
来源：http://www.sxryk.cn/163izcehywn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wqcejgwn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163fyoqoufx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163sgdoarbl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eqxcyhap.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wukosrpi.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163sphibouw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jmcfyiez.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zdhtjvxn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fmwcyzai.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lvpidakh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163exksbrzy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163fmdaljxy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kjtqksab.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fbwuwvno.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163tlmeoycg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163diekcljo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163yxbldaon.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xfkqmlgs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vertjdld.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vowmsnkt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163rirautuk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gdocmche.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163aehqorep.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163nnshmnts.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ztjuigsc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ijvayhtt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163aoooiujb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tagpzpxr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qnkzqqem.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163yetkqwyy.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163paneopmh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163eltryqwa.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vehhxhyu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sjgntbga.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163prchqdxn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dexialmu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ibgffmoh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wovzdxcc.html


<!-- 参考信息 -->