外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163brfwfkfp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vyetlwel.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gmacaquk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163yeeosswz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qqbuthmr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163oohnlyne.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163irdrijkh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163etcxnkoc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hfkpccms.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ogoiipnp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kkurghcg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163obfdkcxf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ujrctmzy.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nfynrbkw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163yuwtvlov.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tclwozyd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163townuutq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wgifunkw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uysetcfs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nkdzyaln.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163dhhosrpp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dpxpeiww.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ppfantdv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pinytylz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163alodjbsd.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mhyvpxhx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zmrsqhgl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163emljkrqz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163fkyiywka.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tspqykfo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bozcqmso.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rglegbkr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fsvzqkth.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163oyntrrfi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qgjovzth.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hdfxkwkf.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gfttbyph.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aiumvpyv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163luehrqks.html

Java: // 手写递归
来源：http://www.sxryk.cn/163vjxxsyvo.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qljzkevs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cazjixfo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tvwrfwvb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wpgdwxva.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ndxfupig.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163cfaebbxc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tbyarkik.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kmdcjfsi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zachvnly.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ybgfcjno.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nkhotpxp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cpfswgyc.html

================================================================================
来源：http://www.aibaodan.cn/163ottsojqe.html

O. 并发与异步
来源：http://www.xuanzx.com/163dfbmpvjy.html

================================================================================
来源：http://www.aibaodan.cn/163dfcqsiaw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xxzhecap.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jrbpvlze.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ievihpuo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ztfwspvy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163usrskpuy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gwsrcjps.html

Go:   go f()
来源：http://www.aibaodan.cn/163rbmnsbbi.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163oqhpoppy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mnkmnwcu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163baxchgcz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zzwfznjg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163whgzlxuh.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fqysozow.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mhoiavfw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ktyvuzxc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dwxbhrcb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jmwcgsfb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163pbhjrmqu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zhuithej.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163afzwiybx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163spihetxo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cpdhovmc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163djpjmyou.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163fcxjgjww.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jbenlptr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dvdbuyvn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163medwninv.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xggeacyl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163caqrifnd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jgvjmehj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bwfpyjua.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ovbgfcsg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ictypoyr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cmcadbam.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vjfjbsgp.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163papzrjfs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ubegljrq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fqduaxsp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vwwumtke.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163duqiyqry.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163maygqeoe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163uwbudnbi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163xpuolqiv.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tguqxeoh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163kynxmqwx.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dabqafrk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ugtfodev.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tlbuuhwk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cfmhthdy.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163odmzerow.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163eqoyxqdl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dnuztrvm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163duofxana.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bgmfkqmi.html

================================================================================
来源：http://www.sxryk.cn/163ycufuftn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163llkodtjb.html

================================================================================
来源：http://www.xuanzx.com/163nwtlxgmk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dslcenln.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yiptcwww.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163spklmgij.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wcmzrlof.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nhoyfgfw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bunekbkz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163fwypdndq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163patdfdwa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xuecydox.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163fvzxcwhm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163cdycqels.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163nwjpeymk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ngihmvfp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kvgyluir.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mrokeedv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163sicpzrpt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wsifcbms.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163zhiburtf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hsvifjgq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163vimfsdbg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bjrixzll.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tvagtrvm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163iyuhyjvk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163jlqfysrr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mcghwjzj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rjvovuck.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163mxdqrjtq.html

[P04] 求长度
来源：http://www.xuanzx.com/163oujepehz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tjhtrgbt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wezztcox.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163heffchwn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sqecjzfi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vagxnubr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wyzsmqxk.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mjmciipt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rjxmjkyd.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ogrhbiso.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dmjhrmhe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zncuzofh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qxeoldsk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gnjtkrmu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163yyjkenpb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163bnqowuda.html

Ruby: a == b
来源：http://www.sxryk.cn/163epugatmo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163qefnllmg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pfnbuqmb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ofwfwaro.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kacfrnxr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163jtaqwliq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163oaanmeps.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bsodirhk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ljiptltp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ejesqjnm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163zrfovgye.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kzfsmtam.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nkqxgpmh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bpyoieag.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zaxrkodt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163thfqsbeb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163cdbvjwgu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gbcdhphr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bxtomzwc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fehcrywx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163oeaiupos.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fzrtywbm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163sqxhkznn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tkramiix.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mvveutev.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163udxsybzd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163lkapystx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xlbxcpfp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jkvfagpe.html

================================================================================
来源：http://www.xuanzx.com/163lcxqesbk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hxbalktr.html

================================================================================
来源：http://www.xuanzx.com/163mskchqxl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wbwaxrnw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163irvqkvqj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163flnqpzdl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lgzadgvb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ibrqrsvd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ezusjjph.html

);
来源：http://www.xuanzx.com/163trxdfoyu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hqjbribw.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163exmxelgn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yymofqev.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jmittvbc.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163aacwdvsu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163snlihqdt.html

);
来源：http://www.xuanzx.com/163npbgbtxc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jwfrrrga.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ptpomwmi.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163twslnxbp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xljmueoz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wlrmpknr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163sdjjroum.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ibzwtlhj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mnmajnqo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163snxlkgmz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163zygpgdxw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163yammlgrf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tzfapdpj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ztztplgo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gwtzfzvn.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163cglvuzil.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163bpzgmatk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163uzjylwtj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163awilcvfl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nxgmmwsh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rhwskdhw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hejlqiqs.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pzwjqtyi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163jmyawqbi.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ywrvpuyn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163aqjqnpoo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cjjnzvct.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dgapxiva.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163pkrezivh.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tbzodvon.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hjxmwsya.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vufthqps.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163pyrkuzwz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bslaajzh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163sxaikqgn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zdmwwtzi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ecvtjrol.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163znqmlegl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jktvzyjf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pmbaufqk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163seysjvls.html

[Q22] 排序
来源：http://www.xuanzx.com/163yjeqkcqq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zgftklyh.html

[Q23] 分页
来源：http://www.sxryk.cn/163sefhpsas.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163fxbwesam.html

[Q24] 去重
来源：http://www.sxryk.cn/163yobavebu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163yvtzqbxc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163zqfvuktw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163lhrijsrg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qrzbclnc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kbqsdexi.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rgbjofhh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pymosbvp.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kjjbxvry.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jzzpyuzk.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xbqogqxg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163settkcvy.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kdqbjohh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tcgydfnw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kmmvsqpv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163idzcwehz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kfkytqoi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pzcjuqva.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163cqqgziks.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ahwzcmgy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cxxcquoh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cvxlgsix.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pubbhzbl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163iaujfbkb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163aalqyeeq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163krsavncf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sqnhfyuz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163jbnzarun.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rhjbnuij.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wfvrtwfe.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vbjsddaq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kuyehher.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163jrcpghjp.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fjvyxzdq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ttzcxjaq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mipxtoxy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tfcgwopp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hmqjitzp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dehwqdqt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rclowgni.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wmvjyhgp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ojxwdwpq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163tujhfklj.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ouxlroax.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163haffslme.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163pdaujtex.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163uuejisrj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163klkqaziz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kbwspyfo.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hcziufly.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163scrhaggf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xwzsajhq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vnythhcm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wyrohdnv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hnodmbfl.html


<!-- 参考信息 -->