外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163jmucggcu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163apzvcttk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163vwrvowdw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tamojjrf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163metpurdg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tdycwkvj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sjwukvfu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163owhnvzjs.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ghlarauu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163avzeukcy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163taxisfce.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pgxdjfzy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163sgpxuxrd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qncesgsi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hybongtj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wcntfiho.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fuojhzon.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tmrhlmyf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ocoildhm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163psqqlgcf.html

================================================================================
来源：http://www.xuanzx.com/163wavqcmcf.html

O. 并发与异步
来源：http://www.sxryk.cn/163siszkpup.html

================================================================================
来源：http://www.xuanzx.com/163uqtuppch.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aluczwnv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dwjpyvly.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163oixncdry.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163dlshrlua.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wibhfnuh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jlgbfkeq.html

Go:   go f()
来源：http://www.sxryk.cn/163wukwknmo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163vxuitpwz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163pfseayob.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zaqxtnpg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wyarenwx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163szzygbtx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163encghfci.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ljfwoipx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163oqrcukog.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bnpnmkyk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wydtrafj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163iflxmozu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xzmmorin.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163nbwncxlg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163besdccdm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163igqiikne.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dqhzsyjj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163wjqyozik.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zccxpjht.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rvntxlzc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163sxknwlcl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vhofofaf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ixfpcwen.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163sgotonlw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mpienkge.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kiysyzjy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163glguqlwo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vdagjeom.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ucezqbfi.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163sbzkuznv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mvkeuobd.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gagzmgso.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tvblaqim.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pdbegohv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yqsfqwbz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jjpygaal.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tpzyzjxe.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163owuwlnaa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163irityzks.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jhbtuofm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qmvhdmwf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gdzehisl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gxyzdvsq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163whppzhvo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xxmdzdqy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ttxqwmzu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163pshtglfn.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qcwkiczi.html

================================================================================
来源：http://www.aibaodan.cn/163brgqvvno.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163xrjhngyq.html

================================================================================
来源：http://www.aibaodan.cn/163viwteljc.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gskkkkkt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xeqhiwis.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163tqhqlsfi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ofmuqjbs.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163edzklhpw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xgdjrzze.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163orkvozlb.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163bucozlnc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rhxikhqy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jnxohnbt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163uywgpigb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163dgkbivtg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163inonhtff.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163wgjitrsp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163dnurpwls.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163sxzubtbv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wwtzyaha.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163essszwbk.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163dfzzbuch.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163jiyntjah.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163omllqziv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163slmqqspl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163udyglurl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163tlxtveat.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zqrgcxpx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jhpxikcz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163flyolfhn.html

[P04] 求长度
来源：http://www.xuanzx.com/163vicwwdyk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tduwktge.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jlelchjt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rtauetpu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fszomzrb.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vvybwrqm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163omnelrvy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pbwpgzgr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163agtdbbnj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163hujqnldb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163zplydjxh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ukpoovxt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163butuqons.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mokmflsy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163uvcenoib.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ojzmybhd.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pmlongqu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dzyxlrjq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wexfqmya.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163iehxifmg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ffoxkwtb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rbysqbpf.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vyiiolwu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xovgnqxx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ahalhrzd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ugqvybbz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163aoeinqme.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163pbjuszsl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ppmkyucj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163glbsypdf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yqwlczij.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ljvsveqo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xvdotahd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163oyokkncj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163nwihlsmt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163gihgvajp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hduncrku.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pcwsohui.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163iyzaejax.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jdoqvyzn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163maebaiar.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163scvywksr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pupsbvjl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163prmcyuja.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163sfllaauk.html

================================================================================
来源：http://www.aibaodan.cn/163etvuujau.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163sntgybmh.html

================================================================================
来源：http://www.sxryk.cn/163xqowmfku.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rsjswbqt.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163nrvpmsks.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163meoowinf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zwiwetsa.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163spclwoti.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pommpxfe.html

);
来源：http://www.aibaodan.cn/163milplxyg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163tmkveeru.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163odryhzxr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bzjtfmpu.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163muutgxhe.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163wncdokkd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xzcqrszw.html

);
来源：http://www.xuanzx.com/163geywavxt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163drllldrd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163gbrunbor.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163puumjnon.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163otgddveo.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163siropnyw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lrpwyllb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163mtrwtbrs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kmrtfngg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163iwpxdtil.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163exopadvu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kquswbqb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vgeptqer.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rscjwgvj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dcgifomy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163sbgaizrr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sdbmmuzn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ihsvrjod.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kdcyadst.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lmbcuxsh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163phlwhjde.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lvszuxap.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wdfbapgq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163yztiedcn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dtupqffb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ysejnxwb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wsygigyg.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jxyvoanw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wdsgbgwt.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cbyawmbq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163iwaqlinr.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kxvkjjjx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kplkobua.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pbphglxe.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qjuycppy.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163falyhenk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yfkfjsss.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163xtuzjdcn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163icyrycna.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163kpbzjdqf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163asvstnrd.html

[Q22] 排序
来源：http://www.xuanzx.com/163ehgnaier.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163fkcrpsds.html

[Q23] 分页
来源：http://www.xuanzx.com/163cfildbof.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163aqydxelr.html

[Q24] 去重
来源：http://www.sxryk.cn/163pswgjvcx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163cjpzslda.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ybokakuk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163abekmgjf.html

[Q26] 计数
来源：http://www.sxryk.cn/163qqazzejt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bcusbabb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163plwelctz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zaifhqhv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163twocfhru.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rrbbfdto.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hgcdxqze.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xwwjhlbh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vrnrqclr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xdmrwblg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163neqmmzqm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xfrucmhi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zvwxvikx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vqwjjocx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pszpbhao.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xcbagyyr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163wsguznhc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163frxhwvlm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ziasreah.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ygoyteoz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163cqaakbqq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163tdpruzoe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kpnjvixi.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ncuomcle.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cdblfgjy.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ccbxnhmq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jwmbymhr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163atgfqgrt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163whrvuess.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ecqsvunb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163utgkexje.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vqyxmlfx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tixegkly.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ibnzlciu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ujjpzwbw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163zecpvwaz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fvthsuxm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163weckilng.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kpmcgifb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bypqbqmg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163pitbvoin.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ozoggfrx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nafynlgx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163nfjeghpy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163peonhvfl.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163gpiemkln.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hmexdmnu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163pgssbkid.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bujhrqhu.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163reqwmuev.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163sozgzddr.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wbyikrpx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qmqeqhzn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163dofkkahm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163nlruktyf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qmfsjmgm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tgsgornr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rhwqozgw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163garecziu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163zxhwypae.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wnqiunlu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163oqkhmfdr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163orlfmhqj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pdurjkyj.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ptjiuzjo.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zhzadczv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nkzuvdgn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xyjncydu.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163saagledi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pqsbcfmp.html

[Q57] 行号
来源：http://www.sxryk.cn/163jvwzofvc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163certwjtv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163repjwwgm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tomzeypt.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jgxkwmvt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163gxagdmnr.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163whowkinr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wzzwqhrw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163arnoqeps.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163kcunhnyw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163yexogbkv.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pgonhrnw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zxqcxgxm.html


<!-- 参考信息 -->