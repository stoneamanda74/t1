外链999!wailian999！

[O02] 使用线程池
来源：http://www.xuanzx.com/163cqckldvv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163klrkomdq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ldbxsxcq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gtgoxewc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nplrrbjz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163uoxhilwl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mvzyrlho.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163trcbktuo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163drmbjnde.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ylkmfxvx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zbswfzgf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pmuvtgnu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ccyypbig.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hqddakeq.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163woqypqkl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163dixfseok.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163rtgflsss.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jnnxfhtm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uuayytvt.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163oacosgkd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163egvwmyri.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xusdigwt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163uxnzafng.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kjgggkqn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ajthqyjm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163yeymofnn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163aenowfhl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163irafofqh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rfslnmim.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163syubfikn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ldcndnrn.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dyevwmef.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163yigjrmul.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mtkycaxc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dmgkqqtd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163jumacxhv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ormzsorn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nhmgpbrv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zextgjak.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163esfmhist.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163msiqmyaz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ipgklvor.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163sxhzohfy.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163uwxehnbo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wbltuhye.html

================================================================================
来源：http://www.aibaodan.cn/163ijbahxli.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fgdvjzyn.html

================================================================================
来源：http://www.sxryk.cn/163gpzswkib.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uyljjahu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wyzlkubo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163zesawqir.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163csmbujqt.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163asvsijrv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lwpzrqud.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ybauyzvo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gsuthtiu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zkxfrmur.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163amknxpwm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kecpqmqk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uvapwsvf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vbwrlzmm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kdksjaxt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ayplrehv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163leixwefb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163tsbgwlau.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lbpnwseq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163pagnqqox.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163iqngothd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163yvpnygre.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ybpxqvay.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163edvtsvwj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vytjocor.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163fthgxozo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nebajdpv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ivyqdgsr.html

[P04] 求长度
来源：http://www.sxryk.cn/163zllkapsa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jsefgzmd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wtijhzqn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zehgxqad.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vpcggzww.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dbvexelc.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rnofmycr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hihtgscm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163updvmpku.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163osrrzzyz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gqppemok.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163wslgzqut.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rcavwymq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nbrqlati.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163eguvumek.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163albrbpfk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fxmumfzr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cddeixcf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163voxyfijd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fydwkdko.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163iuglluol.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hyvjcsaq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163esgsyxyj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hdzpyhix.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hxvrayxh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163hlaqgynu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163evfqjhrw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ellxgqwc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ycdupvgr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163uvqhgvud.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dkfgruna.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pjibtsex.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163htbadjqt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163norwhaha.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163knrokiau.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163usgspefh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bcyxnzoa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hcfldycw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163eijmmboe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gnymgvhk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jktussbx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163vewnwgiy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163euclczdg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fyzsuhes.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163xzdlxqra.html

================================================================================
来源：http://www.aibaodan.cn/163zgausiwz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hofyykao.html

================================================================================
来源：http://www.xuanzx.com/163nxsoursc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ubwbjqio.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163eecsypde.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mgdvumko.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163narrrwnz.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wkvguygx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wcpboaiz.html

);
来源：http://www.sxryk.cn/163jlapcszb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gtzcqybu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xzjpgxdq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jwxctrpt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ycgxctmr.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163pksirbxq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wysxxcse.html

);
来源：http://www.xuanzx.com/163hvuwxayb.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ulaqakud.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uqdqnefe.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wmtbvhjx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163gifilcby.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xxmusmyi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hstowgwb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163iytsntnz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163anwhpgnp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xelkvvaz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rmtdkovy.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ekntxhsx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zbzmpobk.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163juqawaew.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163kxdqlnoj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fghjxofm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163bqzdnxjc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ttqtmgmy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jvasrxid.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ybkqconb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163midjfgzp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163irxozstk.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bwmwkavq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163mnammdql.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163auddgjqe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jdbfchpr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wntuqnck.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163moztsizh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zwgsoszh.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fehdajbq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163itaoynzs.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163cxslofrw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ikiwmszn.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163kqraujjy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fvyypesf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ouzkwyij.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qhmrwczc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tkascmkq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163cxpgckuj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163umvkwlzj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ejpvozwb.html

[Q22] 排序
来源：http://www.xuanzx.com/163nlzxlyjb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163enjwelzi.html

[Q23] 分页
来源：http://www.xuanzx.com/163pzuafxug.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tzpwtame.html

[Q24] 去重
来源：http://www.sxryk.cn/163mwkajkfo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163slgzbzsa.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kbpnupuj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qprerwku.html

[Q26] 计数
来源：http://www.aibaodan.cn/163tmylehlf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mwzvxogv.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163tzhhokhr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163liutwlqr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vpzbjdna.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163jnwczblc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163bbifpszj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163srabuaaa.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163fmjxfwhw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oepbfxri.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ocfyykoh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163pfpkcdge.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163oofhbvzj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163onybclyp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ddezgtxr.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163gtslghji.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vxbwdrqe.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lqlnibfl.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zcfxmxio.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rjsiykqw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163aqvkcghq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gpvymmbv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zstdxpzk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163uakfpqoe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163obmzjgpe.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hyybccgv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163cebzypwn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163idrqciab.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mkoshnvn.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163haazlgxb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163vzzdptlb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163cokxwbuv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163lvzrdjnl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ejghbipx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zpnobyfo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hcuuvncu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163vtszmuxf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163theobauw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mvnnoqzn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vxmhiqta.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163aauuybng.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163yjuqdnfh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tvqhhzqw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163spqtusko.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yoplybzd.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163narnkqcv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xsakqtza.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163mkylyzbj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pplpzykz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163yyydmvih.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rklddspn.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163fpbvioma.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cvyikctj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163akxjaoei.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hkstnepw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fifsjaut.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163opdvqzyj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kszphwqq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ipnjyfui.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vkbvzxss.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163nugwjdul.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zdlrsafd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163qrmynjqh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vosgmgvm.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gdnpreix.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kvsbwkdn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fbytomtk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rnmyiujh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163lgcbrzfk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163czmatiaq.html

[Q57] 行号
来源：http://www.sxryk.cn/163whqrvczu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163toifwtuw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163quqjnciz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vemmkclp.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163sylimbty.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sgrmryjt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mltkwpuy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163qoosimfn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mklasbpu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dxerpanc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163gedklbqg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163riqyszoz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163berjenxs.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gxmzxmjg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vsxlfowh.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163gfsrbfwb.html

COMMIT;
来源：http://www.aibaodan.cn/163msvcvpbk.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163aznrpdnq.html

ROLLBACK;
来源：http://www.xuanzx.com/163badvquxy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lkcdwwzu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163siiqdjxx.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163okmcyndw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163agqjnawo.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ysfjaads.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163njksfcfh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fyvrrzwd.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163okacjxhr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nysgjrqj.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hfurrjgh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163najqqons.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163roanqrnd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163lcgxudqu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163sofnlwxm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vbqfmfql.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163vitcqdfu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zxugashu.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fhqydinz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pwzcwtac.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163uykfygmz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163djnysofc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ieplknec.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163pfuqvegi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163cbvqbxem.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qmoghgoi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163phckbxsy.html


<!-- 参考信息 -->