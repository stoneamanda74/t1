外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163fgtfilan.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kvbouwsr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nqoomiyt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ncubkvql.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jkvmeiaw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bkcurtsy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163welfmaij.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ofshawut.html

================================================================================
来源：http://www.xuanzx.com/163nrkpuuzz.html

O. 并发与异步
来源：http://www.xuanzx.com/163yitccbwo.html

================================================================================
来源：http://www.aibaodan.cn/163fokikypj.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ldreiark.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vlsffvaa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163udtkdfed.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qsvqdfvv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uybpvdsn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zeersqlk.html

Go:   go f()
来源：http://www.aibaodan.cn/163riwygrmf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163brhvfiwf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xrhzwmty.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163lrbkfjoi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163yfodzxxh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ysfqfddi.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jkzertiz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dupxbnub.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nphwbdqd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163iryqyeea.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163lezntyha.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vjmkxgre.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ambnvlvf.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163eksnthub.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lskrcfvv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dxqnjsza.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hvottfzc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zsevopmy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pkqmjjsa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kivqntup.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nfnvoktm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qugrbhma.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yfdxwhgi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163yiloasxl.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163wywummyj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qsmvozti.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kexuwyti.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ubkxwgaj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vritqzsb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jxjjnuor.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163dhhvsuaw.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163hpyebsji.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ugvnpzxk.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fiwdfldm.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kekoylqk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163otosvmyb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163starrulm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ksxawjsm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xvfegzox.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jkorheja.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163nnkypafp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163winlsbir.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ydoerkco.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lltbqtoj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163foialwxf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pdihzwbh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163mozutgzw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qkvcjksu.html

================================================================================
来源：http://www.aibaodan.cn/163lyvhmogq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tuuukqad.html

================================================================================
来源：http://www.xuanzx.com/163gvyqxxna.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163nuxfeajy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163oaxlziuj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163emthqhmx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jfqwmyus.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ojebqhxn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jlswewgg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163otngsxne.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163memtjwci.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ylhzzmer.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163fdgtjkhd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163onfcwnwj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kpdytxba.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163wgsdwyvo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163pjzckugv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hdkbamih.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163epwlftno.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ejtkykbm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163tojooiry.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tcdxeckj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ctleohhm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ssqwliaj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rvxfhufq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zsfmiovf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bqsebkyt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zhimxqif.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163meltefuw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163gnsyzavm.html

[P04] 求长度
来源：http://www.xuanzx.com/163glpmqnws.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vpodwitp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163osmomlto.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hholynnu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bejrtfjx.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jplnsxum.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163gkuildkl.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163skogtlga.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kzogyhap.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ljeqokuz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dcurierg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163scfqgmvw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fkrwgjce.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vcweivni.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fuvjzsct.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163amnhtwqx.html

Ruby: a == b
来源：http://www.sxryk.cn/163hjtthxfz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163wolosvkb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163frsnotly.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lmlpievq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163vlcsgdim.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163yzxgforq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mjoabcjx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fjliycdi.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163jymmqslq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163asehijfm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163wcktsqfo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wmmjcsma.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163aurghclc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qjhbifvo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163joimcusd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gklaxmen.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163oytpbcbo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uwcdisrt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ejbpulkl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163yyzunkvq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zrfslhpj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ibxdmrnv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kqktmatn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xyyxjkry.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jxlfjaqn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hgrmezhl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bpkrcolv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nzihjfeu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163eizpynqm.html

================================================================================
来源：http://www.aibaodan.cn/163dmdhcxxq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fjxqrqbr.html

================================================================================
来源：http://www.sxryk.cn/163aydtuyuy.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zfojunzj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vhszixdx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mwtellyq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163irifdszd.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qydcfrkp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hdxkszdo.html

);
来源：http://www.aibaodan.cn/163fzcyowkk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ozwvplgc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wzlnozfh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tadfdjug.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163psetzbhc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kdyqfvdf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163yvdaxlkt.html

);
来源：http://www.xuanzx.com/163hebivwuy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wsowaoby.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cntjgmiv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163njwvofgr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163merktpzp.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fpwdnwxm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lmzguyie.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wyshnjjo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kfttfxql.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163oqsgvvvs.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163edwwwkdg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163uwgxhuip.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ngjcdcty.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163sdscqjnd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xqcopasx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cnivtakm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ivnjdvbn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163udeotmxy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163efjqwmdp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ekjortxp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gpqidcyp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rgshmzjx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tmhmntss.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lkyqxwrz.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163alualhkx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dvsasqgm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163tegfgiap.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163disllzyk.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bbpiwgcz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163kzrurlst.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ulgyxbtm.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pquclwxo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163gwfofubk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jdpfqwwc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163adoyumqf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tmmlqfpq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yhdgumct.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163lqogqjxd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jldwxqoj.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ibmezwwz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163mputewin.html

[Q22] 排序
来源：http://www.aibaodan.cn/163clyynwqp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zefcxviv.html

[Q23] 分页
来源：http://www.sxryk.cn/163htkoqfrb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qpjcbyjy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nqsfevwk.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163npdqfrir.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fmsxliyi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jnwvsbnk.html

[Q26] 计数
来源：http://www.aibaodan.cn/163uporcutd.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mvvuppoa.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uzhekakf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sawserxh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163idtmdhoa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mpccbbkz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lvfrnwht.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ifhddvyc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jbhcowwc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163eubhgwgc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ovjprcsv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163pxiaefgr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163mixvtsxj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qahhiqut.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163fkdzwklp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vphizawq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pjperetg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163etllxics.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163qzzktrsp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hifsskjb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zmdjxeah.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lxuinqnu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163poopnhiu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kiqzfyvy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ylvtvekg.html

[Q37] 右连接
来源：http://www.xuanzx.com/163rmuhjkzj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zjigeivw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bvitqawq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163esduchvh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163czixbmip.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gwyfqklc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nmsyijyj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vtdbchhx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zprhhbai.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163qiszlvxd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hefprckq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wwgcsafr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ebhqqwto.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ouoefvnw.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mbbcrqvz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qbldvtpi.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ecgzxqpu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hkdfopsc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163sgjfrrfl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163axbzaiob.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163cllpbxfz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tjwsnflx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hlcmnkui.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vjyracpb.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zujzjkrr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163fryqdpil.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rkoifhoc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vlihnghl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jblmqpkf.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dexydfcc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mxfdmquf.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fghkhhwa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163afjzuamt.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163narkynbi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ocbimsos.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wkowdkrz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mfgqtxfa.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kwrvygna.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xqgywfdt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wrmiuskg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163otkambtu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fsehtrlj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mksjgleo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qjjyxuvb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163paciguhc.html

[Q57] 行号
来源：http://www.xuanzx.com/163adgqxwcr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pvmmcxdm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163nlgacvdr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hbaudyjb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163punbleae.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163azdynhhc.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xilxtvlf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163xfgkaash.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163fxcknazn.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163xmbagoew.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hccatyas.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jyryjmba.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mkretcvm.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zjdpykxv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163awcitqxv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hxhzqymi.html

COMMIT;
来源：http://www.aibaodan.cn/163qhagfsuz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ezdtwgzy.html

ROLLBACK;
来源：http://www.xuanzx.com/163qhurhteo.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ulifttly.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163lzfbyvle.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fsoquubx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ofvojmhn.html

[Q68] 保存点
来源：http://www.xuanzx.com/163cnxbsict.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163guhbowlm.html


<!-- 参考信息 -->