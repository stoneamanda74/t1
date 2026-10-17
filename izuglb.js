外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hxvmkqsp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qewwjbpe.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mgbazacj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lkawoxqe.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kxmamwez.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163uywfssjb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ukuvoqbj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163tipfkjwe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rzypezvl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163iammjtok.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pbmsplxx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ewcnzhrb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mwpxciau.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163kolcihji.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163inrbspvv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163orwmahzb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163uiwbwdpj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163xjdfbvfd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bfosxccg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ftzpgvgo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jwvpotri.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kskxjagc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jtosnxip.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ederirme.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163apuntwqy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eylidqpd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sbvajize.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ebddtbyl.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163iukalaiu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fvsnnagw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zrhwquwk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dxiulehc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163panoxnkp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mmrdqpdh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163faxcjzwr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kcrvitfg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pffujwrn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163nwpxtnwc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fewbsvki.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163oecvgacj.html

================================================================================
来源：http://www.sxryk.cn/163tmnzwclc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163wgfxkeja.html

================================================================================
来源：http://www.xuanzx.com/163jvzxurys.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fdsyqxjr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ltxofvzg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mdfrimgj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ydttjjuq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iaecwdwd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xqveyzhb.html

Go:   go f()
来源：http://www.aibaodan.cn/163rpdxigzc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rggssoct.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gwszfsim.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qrrgsaes.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xkcwcqzf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zjfcxaxn.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nwtfdgqv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fbqiklio.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ctvdirux.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uzktrmnx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163qctzmyny.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163yjikfnay.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kcvefgqd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163obfefgqa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163eyaiakww.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hkklqolf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vzakewji.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jstrmqdr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163myvalnnn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hpowxdfv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jpiuqete.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163wutjzoem.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163xefvrlvx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gmagbgxn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nobedesj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hnwhwelu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hxuregsx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gfuuyacf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fdrhzzdg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163eurdluhf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vnqsvrid.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hksqcbdv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163utkkaakw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ivzuneel.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xjpsesee.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163utmblall.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nzfcurfa.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kektgvzr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163inblpjiv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cesmskki.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vtrlpqcp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163joegrjwq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rlzonrli.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vkjwowfl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fpmsynzt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fozleeyq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163mlzgeeyf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jvzmrcqv.html

================================================================================
来源：http://www.sxryk.cn/163ekfigvzc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163luqsrbyx.html

================================================================================
来源：http://www.sxryk.cn/163pcqfeyrw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jldxccdk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ojnycygy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163otsvisnh.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vrewoujp.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sfcejtnd.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163fgfajpfq.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rucgpnpn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163aeijqgst.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163udkgiodf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163buhfibby.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kbrqtkrg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dbevryel.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163evictdtr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163chtudrbs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163yeneqclj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163edcnuvki.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yfyndtjl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163zmxhzbjg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tidwekvl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ostednqz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ztalunoa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bvfidltx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tnvfxasz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163pilyggce.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ewppddxp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163iqdgbhra.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cjophtgn.html

[P04] 求长度
来源：http://www.aibaodan.cn/163liglcuzc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163exjiamql.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uymqrizm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163oteccdhc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oqfetlwk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zhydgupv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163fuqwsirr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163scvdxrhi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qkzzqjji.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163iakqidcs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dyhjhtth.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ggmgikro.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vdozzper.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ikckfdtb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163cshkxxas.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ghpxguhk.html

Ruby: a == b
来源：http://www.sxryk.cn/163dhszqavd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kfdtfkac.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rpkylumf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ocbqrvyn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163suhaehdx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163yoyllxth.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163torbcnkw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hkhfeeqt.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ttbzlzng.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rdsqbsbk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bspuoyha.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163mhibjphy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163diexlnyl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gujprwdc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163usyjprhw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163erpdwqpo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163srzrxkuh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rgmadwxe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rztiemwk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mhixutkb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wnnxdngn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qwmtogsm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tiqetgxf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bqaqsijd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163kwumfykk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ktueupyh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163fenhkuww.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ombgpoti.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ixmpzgtj.html

================================================================================
来源：http://www.aibaodan.cn/163yetegzrb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xumowdpt.html

================================================================================
来源：http://www.sxryk.cn/163feflqhuc.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lsvwvlrw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tccnasxe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163evnepren.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ldxrvbce.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163twbyjpbe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rzikhblh.html

);
来源：http://www.sxryk.cn/163dolnigvy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dswpknxi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jjewymvm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ebwjrabc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163vcsmcoxm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xwjgzmrd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gaicrhyi.html

);
来源：http://www.aibaodan.cn/163eeryubvy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vdpsbenz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163torlhrso.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lxmlcequ.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163clpnensi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kzmhcpyk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rjzhbffl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ysgyqhzb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hilxowhp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rcoqfznc.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163lslvapan.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nrzztuid.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uyvvpesn.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jejjdmnk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163kitlzmfg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163yroevlsq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gzknubal.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163krakppwx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pnytnptp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163twoemngo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ucotyiic.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kwglipxj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nnorhbne.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ltfioevb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163qxijgwsw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163laafagis.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ocgqgtaw.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163nousipim.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jdggvqjt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163lmzlyjaj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163lyweybic.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163krbmvapg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ulwdlfjz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gdwstqdi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ixwxhsyl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hpqgrjjh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jwenybep.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jbvcevat.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163vojzzsur.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ptshdtfc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163uxqkpnng.html

[Q22] 排序
来源：http://www.aibaodan.cn/163itoixeyt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jypxqxaf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hcsvfvbl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jodjvsjq.html

[Q24] 去重
来源：http://www.xuanzx.com/163ckvlklox.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jitxzldu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fnyxfclk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zczbberz.html

[Q26] 计数
来源：http://www.xuanzx.com/163oekdpxmd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163pzlhffvb.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yzeyuwfd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tnbxkypx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163gdfnfbot.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bmoxxnwr.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163sgtshgrw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163bfwcpicu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163iwdcdepu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fyoousju.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vqbflcoq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qnviotra.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pzpqxwaf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nakikmyp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zigmgxac.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163puzukenb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163iduougbg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nonapyej.html

SELECT * FROM (
来源：http://www.sxryk.cn/163anlfuqmg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ctbiuaml.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163piuydxho.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nnpmncpv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163csmlbjio.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gtslqqdp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zrgpcnzl.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163pbwumnar.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lyhchdqq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163yybgbzsh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163drrfryyg.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pjvggoef.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qpbxbsah.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163amzppyah.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iyvmcoaq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xtsbptkt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ibpdskkl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vdrcbqef.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163hwptmfza.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163esvfchlh.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bpgbylmk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163oplcgdrq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ptpkxwpf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163szzpoxsy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hotsacrd.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163myhotiet.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wtsyipvo.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hnsqlczj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fvpmpfhh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wlqqxxas.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vysshrcy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ogkzcapl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163llroytqv.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yienpsfb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163smemknda.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jloefuwu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vqrokdhv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ffzypbld.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jheantbv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163swlbjolt.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dsltkuzv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163fnnsvkgo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163cmzicgdy.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bibcwaew.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tyzpoznm.html


<!-- 参考信息 -->