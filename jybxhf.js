外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zvdvukal.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lksoqxve.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163juclbuqc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gpcchuuv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kvztilek.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nlwgacsz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pqqrkswe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163oprhzuks.html

================================================================================
来源：http://www.xuanzx.com/163lhvkhtau.html

O. 并发与异步
来源：http://www.sxryk.cn/163ghshmspe.html

================================================================================
来源：http://www.aibaodan.cn/163dysicdxr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ahemuaov.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zacdorcd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cqeakpgu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ceqzuaeo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kksfhsor.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163nxweedlf.html

Go:   go f()
来源：http://www.aibaodan.cn/163muxhvbhe.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mkknhamw.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rudpvcmq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bxyuwdeb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ixxhjuwq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ssutjgxd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dkaayiyz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qoksfmzn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163wgpjdvqd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hzasshqc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hzylpfgn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163pfjscohf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wchncjel.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mwnislgw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163bxtpehxu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vsjohwej.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iwuoprlv.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163yvhqbwvp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163uhszafqw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163uqpaspkw.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wrfsgzhl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fecfnygg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mqtwxpzy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ymdrnudc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163dmeilsvy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163teiclizt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bpsmarfp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163mcylksvd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163focspwxs.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163nwncauvw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lhckqleq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163npjizwfu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qkdvaolg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163slzypvua.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vvupcyfn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163oggrsiox.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gsfnrhkb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wrptswda.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pzvzsecc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163crmxkirp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dpfyjshd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163uoyukqma.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eidhwmfi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163llbsbcyz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jpqtfvwy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ownfnuhh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tykkjhim.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163emfmhkrx.html

================================================================================
来源：http://www.xuanzx.com/163eitnamco.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kqblcpmj.html

================================================================================
来源：http://www.aibaodan.cn/163onqmwkqg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163dsigcxwt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163axmmnjzd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163npkafciu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zgmxsakp.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aeiimupt.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ycbdvwsn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163giaaqmtq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163msypqtwq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lgeawced.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163fuiefkqp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163haxjptrw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163kkfxejpa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jiaticub.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qteilnrw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163sglcefko.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qbnkoxws.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tgnxfppx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163oiwrsgxz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sbgotprx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ijjkvzpi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pphnqwgk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sfucyzsq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kpkskilm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163srwfcmyi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163sllmrdfy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wdpoaedk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163yvygzkzw.html

[P04] 求长度
来源：http://www.sxryk.cn/163ghcxmyyu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fwyxkjqe.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wlfifiih.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163udgwvxig.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dodhaoyn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163keecuccl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wugoetqt.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zlxekyhy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163koxwwrai.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ojnalezu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pvlwummn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bweihmmo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qizkcpgb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jnvoywjn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lfbgrmtu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qrqdcfas.html

Ruby: a == b
来源：http://www.xuanzx.com/163gwxufovw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ilqyltcl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163znzgbqtx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163eubpwxzu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ldwknrpp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163oxtbfsru.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jszjmvfr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vzpodgpb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ufozqynk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tpcgjxzj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163scdfkpnb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163cttsrklm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163cwzneahy.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wquezlxv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fnvlmeme.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163aymgybtc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qywagywq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163tvblwmrf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163uhaeyxsv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163blfvmlqn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163nezdjgfx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rbnphqwy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163evjvrgif.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ufzlbjie.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163swucjfai.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163acxdzjla.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163bkdtusrc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163tmpgsooy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163fojkcrkk.html

================================================================================
来源：http://www.sxryk.cn/163cwvgrttl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hcbbqfyq.html

================================================================================
来源：http://www.sxryk.cn/163jvaitfpz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mtjuepkj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163msbkanio.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pmyghgom.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163litrmisq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fufmqtmu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vwuttafd.html

);
来源：http://www.sxryk.cn/163bmscvzhw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163oywntiab.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163floynowg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163setyafco.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fpedviyd.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dpkbacnx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163oriusdlv.html

);
来源：http://www.sxryk.cn/163hxhxggqp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bxhaakxk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163nvofwjwz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163orwphaje.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mximopod.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rpnozixt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163dthpvoth.html

[Q06] 删除列
来源：http://www.xuanzx.com/163giqvogyn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163klqimdta.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jwfzolmi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dwoxwhdt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163blryfbci.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qutzzbyo.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163khltllgj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163tvbpnhyl.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xdyeddrs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163gzhfadov.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163sxpxvuta.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vkycptpd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rveftoaq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wlldtooi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kantuojv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163nhnvlicr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163elmvgisg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163tkswunod.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163cvdbcwhi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zobikvub.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163edqdrlso.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ivjhyvpq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fdwjsget.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xmlojfsx.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jjlegryg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vjbvvzyp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hhotvkwv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163syzimpwl.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tkhhqzqt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163dyitilpv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163nhnvdqbo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kzdtoela.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163iozwehow.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ctcjdswz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163aghealib.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xibbixwa.html

[Q23] 分页
来源：http://www.aibaodan.cn/163nkikegyh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163itkfjpby.html

[Q24] 去重
来源：http://www.sxryk.cn/163flojszus.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ugklggxo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ryputpcl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jcsgrqui.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yekfqabz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163gjbqczaj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163iokoixtt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kjvwwyrw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wsfsofhy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lmmqdbyi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163cdivihir.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163weexhjwf.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ylmhqnnv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bdwhltob.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163cxwxfpgk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163hhcyoaox.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gaubaqce.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kypuyehq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163klfgypww.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ueryeyco.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163fnapsxif.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163wmvfdzcv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ilyjrogm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163jgukiaek.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mmfbnoie.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163oejajxkz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ormdyjxh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163widvmoyb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ytxtkenc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gngsenvv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163oamnkepn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163akhutjqe.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mzqntvro.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ajncelso.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bnazjeze.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163diysujmd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dvvbdtyu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lsugvrir.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fyfmdbha.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nhfbbtoe.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163kshmnblo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163cypfwrev.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163obisvxay.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hywitmyb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wnhyqivy.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163yaauvdve.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zpidaoai.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qyfopbua.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dmrpdgxb.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xoirsfgr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zgbkiycx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163emxdidzd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cyptplsf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zsjelwll.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pgxosmxi.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163brmcpslx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bjrzayxa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qtkdzvxa.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jspnqrxg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jbzzkvqy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163uzryshru.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pjssvzhp.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163frclhpbd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nrwonnfa.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vbnritbn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163knfspmub.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gnzfuuiy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fovbhsyj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ljhbsgom.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163scmczvln.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163lkehvdxh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163reetsxyd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163lxsxdtsy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163sgheiujh.html

[Q57] 行号
来源：http://www.xuanzx.com/163bnqwiljb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qkrrnbta.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qtwyesyb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ryezpxrk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163piqelagd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163azrekseb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vcxjmquf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163yfytycsr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163byarfjke.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ydhoysjx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hfhjyfnl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mxspmxsh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nsgiibrw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ipytwvgg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zkqdgivz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qcsjjchn.html

COMMIT;
来源：http://www.xuanzx.com/163epkozerb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mearcyrg.html

ROLLBACK;
来源：http://www.sxryk.cn/163rdfsicfd.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zjedzgvm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zyxuvizc.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163vbulsgli.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163eitxuzal.html

[Q68] 保存点
来源：http://www.sxryk.cn/163iyvublbb.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163absoajzb.html


<!-- 参考信息 -->