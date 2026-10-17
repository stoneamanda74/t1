外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qpxddlvl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163xbyjkaqy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qhacxecm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163szjcyfke.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ksndtoze.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pcbnzvdw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vhjxpptj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163lzbenxcj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qxfuwnpx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ilvakare.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jnznzmbx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zkecbzqd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qajciyrl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163elfdngbt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pyjoeypr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xkdkjusi.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163emuzulha.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jseqddpy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rnltdbgu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163apqdqjad.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163svjkhqwv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163veprqxht.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163djpqpvye.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ozddwpey.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163cwjatbcw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qzeqexmy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oipgfagu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ajwhujae.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cvyxauxo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ejyjlndq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qfbtnzph.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yxiriwjk.html

================================================================================
来源：http://www.aibaodan.cn/163dgbstfou.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sqigymfu.html

================================================================================
来源：http://www.aibaodan.cn/163fkmwrqoz.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jqfxamyw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vygpmmle.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jjlntnvk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jdzaqkzv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vtzeamtv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xftuwaub.html

Go:   go f()
来源：http://www.aibaodan.cn/163oabzsjxs.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mxitmrhq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163abxzyqgn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mmkbvohr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dkjauucn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wvhbzpsc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ziobdyho.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mtnrtcey.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rzeumntj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163eyectjrs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163cxlwakzp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163xcsukmla.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ktxbsrxb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vzutluwi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163awybucnl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dvdvwoqb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163sypkdgns.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ylhnbuhb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rvceodjs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163onmsiysp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bevctfet.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163sylywlly.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163htzgvgki.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vyxrevok.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163qypwwdtp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bprfypzz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gpbmhlau.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kfkzxjfp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163hexjcqme.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cbbyjybw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163kxtqhgst.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wjkwcgxi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lqwdctjx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dqjcphrk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xcqyyeuz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163blpykglc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yyjnwcpi.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163obtmxvby.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ofltndvc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163pvbexntr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ahpvsqgs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lwgnbrwz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rvxskqhl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163khirwufc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rrnvmqwd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dctmakyq.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163buirghcn.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163geuftvrm.html

================================================================================
来源：http://www.aibaodan.cn/163kjijstzo.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hddnzgjt.html

================================================================================
来源：http://www.sxryk.cn/163mqwobphr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rhpkiihu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163mjxoavcp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163kgsznxme.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fvdmglef.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163flsgliht.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163tiomzekt.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163yftctyfn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kygozzph.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tkpfjygv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163cihcmjfa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bfcfesta.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163enwhjpfk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vgrdrhjt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qvrpqtli.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163spgeixid.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kvvkskhr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lkneogae.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163huxcjzbn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bfgbqlzz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163suibjxgc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qouamfxw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bjcflaij.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jrwicfcj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ceqveftj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kbaefzcp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jkfhdwuk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163yjyzqlpe.html

[P04] 求长度
来源：http://www.aibaodan.cn/163endiicce.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tnrvuhkx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163upjivpxm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ylcfxhmw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bgnmcfyf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163gqwvtyzm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uzrpyyzm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rercjrzx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kscjhhap.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163uojcwfdk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mfhqewmm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jfdbxwhd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rijbjkuj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tpnrxjff.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fdlhkdot.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nslspkbg.html

Ruby: a == b
来源：http://www.sxryk.cn/163igbchcil.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zacerfqt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ornfhlmq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163yuyzyzhc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ygyzlbwk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tmiyafhj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gprouyux.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163bsrufvpu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163cguvbdxk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163obktfrxa.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cndszjtf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ivucuaky.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163zjhdmvux.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163pjeklxcm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yhkxogbh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nlinnour.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163pttycxax.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kjwgfsnh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fqtwxkfu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bgcoalfe.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163exohooml.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fdhyctbv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bweurlwc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rjurcasj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gpaiaonp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xblwzwen.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163adzizqxq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ogehvsyy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jhniyveo.html

================================================================================
来源：http://www.aibaodan.cn/163ayjdvuis.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fkjxizmo.html

================================================================================
来源：http://www.aibaodan.cn/163nspqnabu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ifsodnbj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163glmxefbi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163imtcplde.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163eurtkjuu.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mbrxrtoy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pjnlkrwu.html

);
来源：http://www.xuanzx.com/163cicgoyuq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wvmoxeql.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163nxuqgdsu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qjwltviz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163sbapvozf.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163iqdcvtfg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163neagcwee.html

);
来源：http://www.xuanzx.com/163ahhdmoqf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uhkqxznj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vfzpmcgs.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gerelvlj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fgfvrizl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163yvometzt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163myuxbpfr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163aiktcjgn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163cktqupzr.html

[Q07] 删除表
来源：http://www.xuanzx.com/163pxcnitsu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ghocghzv.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fdahufwl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uhybbfhc.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163stgkonxv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hhgqcdmc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163kohtqxto.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kjolgzrq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163apwjkykm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fdbvoaki.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163svbmofqy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ztktrrew.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xmxpzjsl.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ydaqhhsi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163jndwfcau.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163czrlpfos.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163vxmlppwf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163egzdpgpy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wjjtvjjj.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163xpvtybui.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vnnhiknd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163banyrxcl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hngsefjt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cfaxvure.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ayvnsoro.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163hyrwjxtv.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ctehtbbp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qkpghuun.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163lxtcubbx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dtgasbqp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163lccgrdxr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163imjnziym.html

[Q22] 排序
来源：http://www.xuanzx.com/163gznwlxjr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163gxlafhem.html

[Q23] 分页
来源：http://www.sxryk.cn/163sjodfhep.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mzjjlmed.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hnpsfxmf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nmyxwzhf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163jmlewsql.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hmusrwzb.html

[Q26] 计数
来源：http://www.xuanzx.com/163cbbplhfu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163mwpzpiaj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163oczuhotj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163crashrgi.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163spsvuwiw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zqrecpzm.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qsnegcrp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163olnjdwbr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163cvkfvmvy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dzfwytul.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mlzvvqww.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lsjokofb.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163wyatimdv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163andksxkx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163dfbsmvse.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163lftgqwku.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163fwslvjtt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gzswgyui.html

SELECT * FROM (
来源：http://www.xuanzx.com/163uujngrpe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vtbpvrii.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ykhhqvgc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163sgcojeza.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163thuhveih.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lwdigqrq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163noycgjmw.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ponaiuhk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nbzretlc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hxdjzxvg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ewgpwybz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163onqfbitn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163azjponuo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163pyvpjmkk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163phtdshvv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kwkajqmf.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163asxywnqv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ticxnvjy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jxqrfzlm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ahfwyjhb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ybiwihwe.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163drdudwvd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163tdlholfg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dmxvaurt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bbkbzgfo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mbijjbso.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163mzswvfrf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xxtwpdbs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bzijjkon.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163trjcbnhf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163skxgrtnx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163cgvqmwdf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163wutccvcc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163yrcfvjyw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fpdytsmo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163iwkxxjiy.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163pdvsoxmu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lzcimyoz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xqbqonfs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hzeqpbmy.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163boyjpwqh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163lfiggrrl.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pqozqnci.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tcmvvrrn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ecpdkrmx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hkveaoyp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bliuulua.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jkeexpwn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zbfwadsv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163snrkfunx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kgmfuykg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vrcrpfxf.html

[Q57] 行号
来源：http://www.xuanzx.com/163ijpzicrq.html


<!-- 参考信息 -->