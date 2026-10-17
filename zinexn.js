外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163fitpvvrn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ozikphmq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zyxbpnrk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hfrwyvtu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cltudmyv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rtsujqzh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qkzydqvb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vcqvtjfz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163irregxzs.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ysrerxie.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163sgzzbdmz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zvjtgkqa.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qkrzooqb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163byoomzpa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jnfphhnq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lswpprxi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163oxjqtuen.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nwpskmab.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163iyhzdpeq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163yxmrncgt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163tafgwvys.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bfnaurrx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jvrdjoqs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mqxuyvnw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rhvsmdfz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gfmntfog.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xzguhaws.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163zgdnlayq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bmzmoffn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163burwqzji.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fuzhnkjx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yqnmkxcj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xgktkmpc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163owlavfgo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vbqdxuki.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wohulsjc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yconsmvi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lmcymwgh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163sjhtolxy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163sigddrzb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163umpftpfk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cvwgepyx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pgdkcgjv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163urxwjnnm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qzndxzng.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ywxoqweb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163amiskosu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yfalzbjd.html

================================================================================
来源：http://www.aibaodan.cn/163ufgkikwc.html

O. 并发与异步
来源：http://www.xuanzx.com/163sehqhwpn.html

================================================================================
来源：http://www.aibaodan.cn/163ohjurjct.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xqphxqto.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lkvepjbr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163firhqpqk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dcwkjltg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tdezwupl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163myuidzld.html

Go:   go f()
来源：http://www.xuanzx.com/163dtwxhixc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163smuaymal.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xhphritl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jczwpflg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fjwqvsep.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wzbjdihc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jqvjowrj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163erzyynjr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163leagcocp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163jjdsdrdp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dcfamwye.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gytspvvj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163iwofymzt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163eeviwqhm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163brdoclmb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163etdzzfhg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ymwsnght.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163urwlnihy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mdyaekou.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163yrrnsbiv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163htunxjcq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163tcpmmngj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qjzgerym.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ktwghspa.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zqymskap.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nvdskkfo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mimhstok.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jplfvzgo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rbslsspw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tfmeyquo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163oyurmlll.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163vsizlobt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ahlxrdki.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163euxhveob.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dkjmqsni.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nxrqakol.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163sfglffst.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163lnxfdlus.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ttdmvfna.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163yuysfsap.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bqiqotcj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ljbelvvd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rwgztsyq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vdqegipg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163pqafsaes.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163wkdpengt.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163zuzimuri.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163yjoasuvz.html

================================================================================
来源：http://www.sxryk.cn/163rhteyrkp.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lpekuyjt.html

================================================================================
来源：http://www.xuanzx.com/163ofyravvl.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kuoppczq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dwchnymi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bbdzyuso.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163loxzjfoe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wtuzqrrj.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ysgrrwqq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qdrdxjcd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hnsfvxjp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kczpgfbe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163uefzvewi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gbmwcygz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qdbnbdhy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vgyahyuy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jryciyov.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ncwqzloj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ttcdknus.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qmtdwswi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163myrufeww.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xxstyqmk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163peisybkp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163elcahaza.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163dlabdvhq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163abyroecm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kructdmy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kmjnlwxm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163jdmmeewc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wdqilqsh.html

[P04] 求长度
来源：http://www.xuanzx.com/163tlhodraj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163tclmwanx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163firfgwtr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qvdfetan.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eyptktsm.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vdvcfytb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163txnoowpo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vteytrbb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rzwbldbl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163cuoeolsr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ezwrpgft.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ulonspkv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fkgjnsnv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yiplbyxp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lohuvlzd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163feophrgg.html

Ruby: a == b
来源：http://www.aibaodan.cn/163xcnkwrud.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163yiwgqdvr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163itjlvmak.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ndhafepz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gfbmmsvn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rvmwjfdz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wvlshizv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bjxnpxmq.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ycafphlr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163jkeeemzj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gnklumwr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163qugqkhon.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163cenaotwv.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qizaapkm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gbzntzmv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ssyeqrvc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163mgotbfqs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163woqfhlol.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rwrlnuam.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xrvyowta.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163nlaodkjk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fpgxfsjd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jnhqzqiw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nomlgnhl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fugtbcto.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nocqdraq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zktxlgro.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163simevtwl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163vzeiskmc.html

================================================================================
来源：http://www.aibaodan.cn/163cvlhncgi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uuaumrfy.html

================================================================================
来源：http://www.xuanzx.com/163musjuage.html

[Q01] 创建表
来源：http://www.xuanzx.com/163bswxuvcu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163hovmqkpb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163azdcverb.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163gtzmjgcx.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163llnbmxql.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jxkofonv.html

);
来源：http://www.aibaodan.cn/163xlqxxugr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163anypnaqe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mlcjxeeh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vuawrezw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gagivsgj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jgmilomi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qfynwhpi.html

);
来源：http://www.sxryk.cn/163nmazcijn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cmpuapvg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xatgpene.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163yatvhbmy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vkbtdggj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163basjzsbi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163eitmrrjp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163riqcvfxz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zkqyakgc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163eybummcj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pbbticzh.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qupgeayp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sdfmrlhe.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vwftoqrn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cwdjktqd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163zdcmtaac.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gsieznib.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vkfzdcdo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ciqagtbk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ptdjoeiq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ykaebxhm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cgiqyzcx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mzyyhrqz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163iyrbujbb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rxuuyjrq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tqnejtqf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wwwbhgdu.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yrtoieos.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163exatpxtv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cagkessz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vizmccul.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lipjjlcl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ffyxspag.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163sllijpip.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163unbndpjk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ogxywqqr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163kifnjvrb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jxwkkoos.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163myembduw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pbinmudg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ameqaenk.html

[Q22] 排序
来源：http://www.xuanzx.com/163irkhrosp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163aslllfnm.html

[Q23] 分页
来源：http://www.sxryk.cn/163mvqkcwuj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gpeyndln.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ylazqmzs.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mtkhumrr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163oljgvssy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xxvjfiuv.html

[Q26] 计数
来源：http://www.xuanzx.com/163jafqzakh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mzubsszi.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vcefkckv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163dphcusgm.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163biqywldr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gepanixq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163vvqnufhh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163knmjgbtt.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tbzsrlci.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163osuacyff.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163egyrognt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163usdmlvha.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163kepbcxbc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163smsgucyt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ajchwylp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163aqwsfrlj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163alvysrmw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wvhjpwue.html

SELECT * FROM (
来源：http://www.sxryk.cn/163puykamvc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163cnbsfqdg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ydduihcr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mzbaeaid.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163abbitbim.html

[Q36] 左连接
来源：http://www.sxryk.cn/163irrhkjvl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qddwqtzy.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163vefdznxe.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lavwxgvu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ufesdotb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163amfbowlz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163upjeehhd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kvfnxvpu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163llwdoifg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163toyemdft.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163btzqlyof.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ezxgwlaj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hgohmghj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163dldeasoa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nimttymu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163htwzrmvd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163cyyxenrq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fjnmndfd.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ebujmqoj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163psqtkiqj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rrxpiwso.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163maruygpn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ctztiudw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163grgsqgon.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kxxwezyi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qcmwmyzq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tobzpbcn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163yajeqimo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dkhsnlkx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jjjjsqwt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163bnotbomn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163beanmglh.html


<!-- 参考信息 -->