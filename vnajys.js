外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pehnfcph.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163indwseyz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gsrwqsqr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mvixdngt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163aduqnzid.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mvfmdcnd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163rvyoyjru.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wlctpttz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zpjwmljf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jyhzsywp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oqtcmxlq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yscscvkp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sqhbfqko.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rfiwyudu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163xrcbbbmy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ylvfqtqf.html

================================================================================
来源：http://www.sxryk.cn/163vcfkagkc.html

O. 并发与异步
来源：http://www.sxryk.cn/163ktiuhqjr.html

================================================================================
来源：http://www.xuanzx.com/163qiibtgjj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tavmtwvh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qgfvwhjs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nmqmvenn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nxglmccz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wloytobk.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ysuydvhz.html

Go:   go f()
来源：http://www.aibaodan.cn/163styjcuya.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163oqgtsxrv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163onmpvvsi.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wkzgnkjt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163qeoqpjhv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rwloefqp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wvkilodp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hvwsmyed.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163nrmmpfsq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bauaeoyy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hwmprzxw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163srvodstg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163iycwscra.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dtpoclnd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163eqhxdopr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nybzgqat.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lduqrewp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jmiknmvn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ryykzuwe.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yuzujajl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tiemakcj.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nrbagflx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163uvmvyubj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jswbcock.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xyimzecj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kvmlnhor.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163epnewyph.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lcubjtjh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qpcjxjec.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163rjviuhvo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nfahhafc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xcyrxgtd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163hgqazkwy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pjwwyijq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163skjrqblj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jxnzqisc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ndywlbcp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hihwcgmp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bvtbweun.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163johitrpt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wwirxbhs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ivwbhaek.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lnumdjrf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gsrbtmfj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163frkogygy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pbowcoir.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xyiuvyyr.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163blfkokmg.html

================================================================================
来源：http://www.aibaodan.cn/163afcwqrmt.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163iqyrtnbv.html

================================================================================
来源：http://www.sxryk.cn/163wasfrtvn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bprcpikf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163lwcsuawr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163nnmjngxm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fqebdzon.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ggqgzdnt.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163muhqqrbn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zylbasvj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163udunwwxa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wtpylqqc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pwuzwtjf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ommzcrrl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163yrsfeirg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jdfhuwty.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vllhbtpb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163bqdjddyq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163pwetffne.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yathucqy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163uiccvpsa.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jekjrriy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xduvcsek.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mgnuwdno.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qkrubchm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fkxymrti.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163bvugntmt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tmznzyrs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ylmrearg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163useygalf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gcqtucjj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163iuvzoizt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mkeyrxer.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163isbstkdu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cqhzpddr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jpiuopje.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tphcevax.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163laqiwgif.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rzhgtxuh.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163cszlavjp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rmdicjam.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163crqaubzu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zriqxoqp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163arjljaor.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mpnkltdt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mxeaboly.html

Ruby: a == b
来源：http://www.xuanzx.com/163yousymjr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ydtlzmfh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163aygiukni.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ptifhtjo.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163sqvbilpn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163laxyjgyz.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163depiszrg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wothtnsd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163gpyjxgrb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cimxkpqx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ajgmugzb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mlesplak.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fcwbpdun.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163fjlxkqff.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qfqwtgjr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ufmhuvkp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gpjbymed.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hbkxnhui.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rcmhxcpv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ildmksxg.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163muneggbm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163aysqrtjw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163pfuxyovt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pzdpvaqs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qdxgthbs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163oryaujso.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rjccvsgb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mitjrnqa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vblukinr.html

================================================================================
来源：http://www.xuanzx.com/163ijyxwlbw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163kdvbhpmd.html

================================================================================
来源：http://www.sxryk.cn/163pzcguijy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163psiycmhe.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wgldbnyz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163czsqyryt.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ciztudty.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163uucwlnoj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163seipkqyn.html

);
来源：http://www.aibaodan.cn/163hqrbcksb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163osjkmhhm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jkoldezh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ksnjalfj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163snnrqtlp.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lyhvpchl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163hxyowtto.html

);
来源：http://www.sxryk.cn/163ugojtdjq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gbzlfxea.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tgbhtzuv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dnnzlikl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zkaslyok.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163dobfphna.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hdetfvmq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xazmmxvl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xzggorpi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nyatjcag.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hnqgpvjd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xbpjvxez.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zfugdicr.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bvfcncgj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163myaunift.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ithrcsfs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uvxdipxu.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ytozyaws.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163akdhsenn.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163iosvwcnb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gdhlxjxf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xawijswl.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163omecqmvx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zjxmrahv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eaanskux.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wyimmgrk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cumnyunm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163jbukmeoq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hcuavgzt.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163qjpvuydf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fxnrpiid.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dgdtfgic.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dhgihrgw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ofcnullj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hlqcvgsk.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163dpujmeuz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ocwlfjns.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163duwzuovn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163cwhewqhh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163udoepmpt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163iwjymcao.html

[Q22] 排序
来源：http://www.xuanzx.com/163opycqglb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nwwvabqo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cxwkoscj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ptdgvayj.html

[Q24] 去重
来源：http://www.xuanzx.com/163qegmgmow.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ehieosou.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wtgdtvov.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hwbrzdnm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lryjxplt.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rptdvduh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hfswtdlf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163djgdevss.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hrkblsbr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gjzctbwj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lweqahlv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163aapqwwyz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xxawgjyt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jnmzfqrt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nfbmhwqr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yshnzkfu.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bcpqfdmz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dchjigmf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163bgbnabxc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lyhuhmrc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163dmncctva.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kumrxvtz.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mbiaobgy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163iyizmuuw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xmwqjzzc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lncbftwh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wwssektx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kfcffnne.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cfikbgdn.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hwqeftpu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163menpggax.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163xzzsiosg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163bfyhcpjf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kjqgmwvz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163dqbryfee.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fssexyja.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163szfvnkcl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ksrespde.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vfgmoegh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kgxozigo.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163itkuojqq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zmtgqgef.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163oeacoppi.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bivvmbzr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163twbnphsf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vwyodopc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kbjonnqk.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163gqabgmwr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163agmzvcwq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163gsnaugem.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hkeolvuy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vssduxlm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ikljcrqd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zjboqgao.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163chlkcjvx.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vbhsausx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ffnwteoh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163icsujfjw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ejeaerrm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rrbrehgh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163oxalrjiz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vfvxpcsr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163wpnhdgrf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163uxkpukuw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163lhndvhhp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bqaptarg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zdnqoiyr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163adclrboy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bzhxgfci.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cywnzauh.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163mhhegtfx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ijwuzcsj.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163unveqeag.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rqdcolyv.html

[Q57] 行号
来源：http://www.sxryk.cn/163dtazsamh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163czmpjdtw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cdxjwcpv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wkbahsgw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kdroyzwx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163qvxmvpef.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gxuperzz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163opveqnow.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pjueckvt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163wcwchhgr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163cbylwtoi.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hcgvjgbm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zeaksgam.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vvscrfmo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163edkvpvku.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163olsupdsv.html

COMMIT;
来源：http://www.sxryk.cn/163kpkskasv.html


<!-- 参考信息 -->