外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cuppvsuf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qikeqmcq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jbyxetym.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163eumjvxyz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163mychyiya.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163zeuufhue.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pxdrdurz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ifnrkckc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163moyvraei.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jpvykxme.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163eoztxzpa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163yjkvrcth.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pcqcests.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rztgpihl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hdnxsbjx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rsrhqkvw.html

================================================================================
来源：http://www.aibaodan.cn/163rxclybad.html

O. 并发与异步
来源：http://www.xuanzx.com/163aixuggdw.html

================================================================================
来源：http://www.sxryk.cn/163rqumkiej.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ioshhpjm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163penhdbno.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163remnrhau.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163olkswack.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mtmfaebc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xucyxmmq.html

Go:   go f()
来源：http://www.aibaodan.cn/163vmaydzyq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cswcoiyt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jwgxabit.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yjjtbszc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163udgcfrpb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bjekgxbv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mrtfmhit.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163krsmnikw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jbxhhjey.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dfgsjzck.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yiqpykml.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163rnruwioz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163whgpwlki.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lukkhykg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ehtlssta.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xmwbbrtt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pfnxwvmz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ualcsqwm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ctlqxnty.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qebmhptw.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163gjpssmdh.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163arcypoqn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ceucxvly.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rubyycsr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zajmoonj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uezrgdso.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kgtkmkbm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163crxiqeik.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mlxgdxua.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wvlfzuxb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163isxiiblv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163snibvmpu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lkxadisn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ivegyqma.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vnegdmzx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gpzdvmet.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ihgtpzmk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fuohvhfw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qpgofkok.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jwskqsvd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ofyyqniw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163sugmjltd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jctxfiol.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kbkrerrc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163opglgnvl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hggkhcxh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qdpoyyqe.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163oyodwogb.html

================================================================================
来源：http://www.aibaodan.cn/163mltrnjmh.html

P. 常用工具函数
来源：http://www.sxryk.cn/163pcnhahuj.html

================================================================================
来源：http://www.aibaodan.cn/163uaaafebq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163dgacrdal.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163otxlateh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jekjqaze.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uqzkckky.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dfaawzqh.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163bycaeekz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163uxvnymgx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wtllncbm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163gxwwfzxx.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gloosmym.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qfumfckl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gtyahneb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rhbdrnkn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ilggcpeu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163urruhhvp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ygozwdjl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163jrnuvjme.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163iqanmjzc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rjisjgww.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nzcxckgr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rxjvifvp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pjjlkscm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ygiqedfc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ukpckisy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nlmsvpal.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ssggcain.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bxridvsl.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fcoodxdn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aewaeoay.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vyfmotli.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163npspcycp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ucvijzei.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ubkdsfqw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163bmqtlhqy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163wmxsgqvx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qimehlcz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163abgvujoj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rytwahsv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lywrasno.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gqfepndu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ftxfbwme.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nrjkmkqt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163eeoyjzkf.html

Ruby: a == b
来源：http://www.sxryk.cn/163qjzdhsjy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xnuovjtc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163luqeyocn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ikluvlcv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jwvipsby.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ikcidcqt.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163xuomngow.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163uhjzdyel.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163uqmsjvog.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ljwerhxa.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163augijlgu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mhhwsmwm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163uihrgdre.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163vraeivvr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wtvxrzjg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wsbnbezi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fjeugfgn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163paxwffqe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fdhiuczp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163oacxezmu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kugzovzg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163andslsox.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pasmivct.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dkjcenre.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163cjiovvam.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ttjoftzt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vtzggqxj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163bdtkuguy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mpnupqgo.html

================================================================================
来源：http://www.aibaodan.cn/163tiaazqhk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tyayqjrn.html

================================================================================
来源：http://www.sxryk.cn/163oynztlfy.html

[Q01] 创建表
来源：http://www.xuanzx.com/163maqpvbti.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163adhzjvxk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163otekidar.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ubhwlbpi.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163oghzprga.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163lacmyczq.html

);
来源：http://www.xuanzx.com/163ftklcblr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wptudthu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ltkoqfxz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lxxiinws.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wfdyxawo.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lutfmhft.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163uinpgrtr.html

);
来源：http://www.aibaodan.cn/163lwhisivt.html

[Q03] 增加列
来源：http://www.xuanzx.com/163cfogqgqs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mtnwhguh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qmkbceul.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zkhaqolr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163bspsbymz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nikkzwzy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bdmtjflt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163slgtdoff.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gzgxaesp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rxireblq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hzzejpql.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bibgtryy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ejscgsep.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163rxceokoq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163rgcwslpn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vypsfiwt.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qcxlvdlj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zklsvufa.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tjtnxpyy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163hfiheuaz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xaopxvnu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ugesxtqb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nwujnzuo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163meqnknql.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ydseyiig.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163lmslnrhh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163apoqxxys.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163npyjzziz.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jyhnifym.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ipzhtenf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163cgygyaet.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tfzhqzts.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vnnljqpo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163bdwartxq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163osacekzz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zlehawks.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163auhhvodd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163lyhndkwc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163djeyfllv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tsgrbthp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fgcqvjat.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ljwdpqsb.html

[Q23] 分页
来源：http://www.sxryk.cn/163ijpjmkfk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163qpcpaezl.html

[Q24] 去重
来源：http://www.xuanzx.com/163pypwxdxg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lmaxroti.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wonkntcz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fttyjdci.html

[Q26] 计数
来源：http://www.sxryk.cn/163jdjunuqh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163umtxnuxj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ceokotgv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163dmrmxusa.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163lsheytfv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lhvyyahl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163htspxept.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xovxiukd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163qnhyoywa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gxbivncd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mlvksjsp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163igdqfplr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xstlomws.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eaowtfru.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fmxzbhny.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ytdddjkq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163chajeojr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xgnlldfz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cfhvesnd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163awheqazt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163dbhvkccf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zojltvor.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163preujjpm.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163inyvkwih.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163loooyiql.html

[Q37] 右连接
来源：http://www.sxryk.cn/163tiovhykc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xskohnoy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163shsooods.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xcbascdg.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wdilfmjt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163afjuusxt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163annqmiex.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163guaeexlk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163cxmorxhf.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ehprnklq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bbybmpmp.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rdthnyem.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163wajtydfu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rqzdigcu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163aqrwuiyn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163anufetww.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qbloseqy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163auuqgvwc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qbgdpkkh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yohpmbdw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ewnbmnug.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hxvwvave.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163rcldthcf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ccpdzvpj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vqeffela.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ltcvwlyt.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163kfesmkyx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163wkdmofxa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fdawszee.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163oogagmlx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qvtvrnpb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gbxvebuv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xwfpzyqr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163infrhvvi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jglekwfc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163lbcbwtbv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163piziavgy.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vmfxletn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ledxykbz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163quosuzch.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163urhguwen.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163alpgwpqs.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rkckwvrq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ezvrfoee.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ubjeavzi.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ebxzxmea.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ypqrdwxj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163sdwdznta.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163whormktw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qrgjuzge.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163aqbppatk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hqvdhbhw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hujkkoru.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nthhjwxg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163okqpshid.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163dyqnfwss.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jtscyirf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uvoyzayo.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ikowkxcy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163bvwynxkp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ipevuuex.html

COMMIT;
来源：http://www.sxryk.cn/163unjttrtf.html


<!-- 参考信息 -->