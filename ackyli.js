外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qchuwzsj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163jzmqiuti.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fasjvvdl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lbnqqupr.html

================================================================================
来源：http://www.sxryk.cn/163vlgigqxj.html

O. 并发与异步
来源：http://www.sxryk.cn/163xhfltxts.html

================================================================================
来源：http://www.sxryk.cn/163ifwfyzak.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163sjmdkwam.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lctclzhs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163dldfdwit.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hsxgkdah.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yezfjhes.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kziszrqv.html

Go:   go f()
来源：http://www.aibaodan.cn/163yqqwdrae.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zdfjvhlr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163poraeflu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163votopmnw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163foxcqrua.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dkugcpiw.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xikalxrq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wtvpftrt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qgxupsgq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rbcfdfmc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jwlzqhsa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163yhvyhbjc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vwcboguq.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lahoucdi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wrajovcm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163lcmidopb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ihxhmstt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ksrryzoi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lfyemlzr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163eahfmgwr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mevlqmyy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163iunfjhrz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zroddbka.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163urbjskye.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jajdjaeu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wnhpbqah.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lkzzwnll.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163pwxcequo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hyrqhczk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zzckcpek.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pfuezfpz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163bbvvqkum.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163onernefi.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163olkxzose.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163itcwyhid.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163gretoojl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163lvehlcvu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163cytozjro.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163uiztmrqo.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xzmwzxzc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vmckqoed.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zxapvwom.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rlrcnbvq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xcamalxx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163tucmnswp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163juhgudsb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rpysdoqn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163oavtbthj.html

================================================================================
来源：http://www.aibaodan.cn/163vwjrgurb.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ssnpohqk.html

================================================================================
来源：http://www.sxryk.cn/163ssvtrhep.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gsxueraw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163kgzlcczf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163gzzaxdpa.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ldevvloj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cmeojrjv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gacifxam.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cpxmypnr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yzxzeemp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163eieubftx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xuompzbu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163luqolfyb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xafagpcx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zcqcbkha.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163gfswaoql.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qyvtpokb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ksricgqa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lyhcitey.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163etipdadb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pddhrcsy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tazxxzmc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xisesqda.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rhgwskba.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jvccytkp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mcpiaruc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nvksgabu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qubfjdud.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ldyatlbj.html

[P04] 求长度
来源：http://www.xuanzx.com/163xrohebjx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ebvjltkr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jgixkoxz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oabztzdq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163phgshkzw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kkgydeyl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163doeoricj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ggxlqurz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163dwfuqobl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163dezxhdgy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163slffhqir.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jgwsexqp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ewgzpfdf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hwaxvtsj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ecmdmhzu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ldxcefmf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rjfpbunu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163isfvxsog.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163usumorlx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163alnvkjoc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163aegchxho.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xjswhdce.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163eeuhaywf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163dhwhgqjb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mjlkatda.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163knngcxoe.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xawljbqx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163upejyufy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dtzpcqjj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kwhglacq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aclsbbht.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163epaehzvi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rrccpjtw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163cyicmibg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163lzejpyhg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163frvvyilm.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bnbsijiv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163klzucfcv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163evxphnmg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163kvpzuvjv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163clfjbpel.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163famqxttj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163dfenuwxj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163htgbtupg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jvjdeatt.html

================================================================================
来源：http://www.xuanzx.com/163zghlheoq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hpbwckiw.html

================================================================================
来源：http://www.sxryk.cn/163urdjrzwz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163satetgym.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163rqyashan.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uugglckj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163wigviuqo.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163iwtwmpsk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163grpopofj.html

);
来源：http://www.sxryk.cn/163bihsxzga.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xtwgnyyu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xdniusil.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rvdfxtis.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163baqqfwzy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163yshnpoke.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pwcdqsin.html

);
来源：http://www.xuanzx.com/163ybenosfx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hcctgzpj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163dewovlzv.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pwbzrtdo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bicthllv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uiwuryfm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dgxklned.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bmrbievj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163nyctyygm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gusuqgsm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bbewumrf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dhxeinnt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163pduehyqb.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163elltelaa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rgrfznwl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qwnimsrw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qqxrkyum.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rmjmcacw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163lfnltbol.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163nhcryust.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tdcoohno.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163pxymtsqn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163cvyewnjw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163oegwmuqr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163srzsetqg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163coggntdc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163qumkcaok.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qqhdepsh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gafxknlw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ptiinpul.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xqewlxoy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gujkluoq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mtlschrn.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mazwufzs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163whakusvk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163gtbghqmt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163igqkxwtj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qqgoqjfp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ixvdjfkn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nqsyxndq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163qtpmvsbg.html

[Q22] 排序
来源：http://www.xuanzx.com/163chuhkeqr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gtgkmugt.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ggetsrai.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163vonajnny.html

[Q24] 去重
来源：http://www.sxryk.cn/163zlzdvjdp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rshntdgu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ursqafrz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nkiaatep.html

[Q26] 计数
来源：http://www.xuanzx.com/163loryeyjv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xtawslnu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163okpllgxd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jabwbndp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163cgvcwsmv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163sigjgyat.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xafszmbv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ceejbsdx.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163sepwfycb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mqfxtywi.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fhxlzrfq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163feljwuff.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163oolcbqtm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qjmxxtrv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rgkkkyxo.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mbcxxfji.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163uarptucn.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ffwfqixg.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163idqvrirn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163taaacxgg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dhtfnazu.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wzbjhazl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tmyoqnoa.html

[Q36] 左连接
来源：http://www.sxryk.cn/163umxfsftc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bpmenitp.html

[Q37] 右连接
来源：http://www.sxryk.cn/163bdbfbhxc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xoiwnyvb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163zczhjxbb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163daknrilo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dtrkysor.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163tyxjamvg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jhswvpjb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163knrntoqy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163pfagoisj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ixatrxfl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163btrztywi.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hlwwrxfb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bralqqdp.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hzvozixp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wjuucojn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163iubxncqd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163erfkdaoe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ayrsqpdn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163swglqkmr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163nljgvlfb.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fqfbtmeb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vwgcekwc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ijtlfmdr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163akilvpus.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ivizdgxa.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nwhtdbaz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tuqzxxeo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163nhotoicy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xijvnsxy.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wufrstao.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163pxqhkenm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163irqrklzz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kbmifmlw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yuepcfmi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163cmobmtwu.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lzsorikk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wkhgzrpu.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163zkoryiqy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rsqahqzd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zzskhjop.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rizwqrxi.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ljqafyvh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lyzrdvls.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ahaojgup.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qdtqtlzb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fhjiqxjc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163miscuefe.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ebdvgabx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nszeoilr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xbyuzrwb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rgvkckwc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gzwbnpud.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kadfqryd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rqvcprax.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163adrbuwrx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nxcdxkog.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163uszhzjlk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mnryolce.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lzsxzilj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gvtoymjo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xupejser.html

COMMIT;
来源：http://www.aibaodan.cn/163ltlfwaix.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vxdgauor.html

ROLLBACK;
来源：http://www.aibaodan.cn/163feijxvcb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fbaruupc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wxoxekog.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kxetdclp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dhbpkjsm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qrazdkrs.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163npodoesz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163boafywrv.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wngdpgkg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tphjrxeb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xuuuycoy.html


<!-- 参考信息 -->