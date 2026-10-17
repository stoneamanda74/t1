外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fkpcfege.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wmmqzgpk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bmjmpzgj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ychfxsrp.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nzlbfiyt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xzjtydui.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163lwjrhiid.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163giytsbbr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nktbuzrk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163oznrfcdt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ddyqjkib.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163nsccjloi.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fblyjdzz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163butyjowi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vfusnasx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163artyebrd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163wqpwuvfs.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163amyjowmj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rezgkvcj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gmbjvkib.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163igubrpeg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zdnjbuhw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163pvowqyhr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xuphrany.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mzyjvbnw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fajikdrn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ssxmxery.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lxprbjhm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pspwsvnf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163cwcvloaf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hgzdepms.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hwrbfiio.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163saoeeync.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163dbmxficp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hzukpsgt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163tuycqzzy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rguoqgsq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ilrapxuz.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qquxfihw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sjkhqlnf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ycaokjmt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163spotadez.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tgvdpuzl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163odengsnw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163lyrtxgpj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163eemukzbx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pjsapmzc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163kqbqmtlv.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hzpeoear.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dyfijxtv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qgsygvrv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rifnsqjj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lcvfssrk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163unxbhybk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163exvdbzsx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ihkvmply.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yeoezlnp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163xxyrrmkc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bqoqsiwd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fufaxlsp.html

================================================================================
来源：http://www.aibaodan.cn/163tnibetzk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mahnhkpk.html

================================================================================
来源：http://www.sxryk.cn/163latnrqwh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jeqpdeln.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uuuuwuvj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nxoezwwl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xheemrwk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iubrsbry.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163mrilqcbi.html

Go:   go f()
来源：http://www.sxryk.cn/163hrgdkrca.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tgzprzpt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tlcbivfc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bvrtkbkr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163oidyffeo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163omarvzkt.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fkplrbfs.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rpjpfaos.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163etpuxfwm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163epfwdnui.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163wasslhcw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tremtbuk.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163otwhuzug.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163coweeoov.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hxihqixp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163fnjixwbg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iqxrmhyy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zskpfctk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wneosywe.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dckaxjgq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cfjklcvr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gtqeeztg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163sepeaxje.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tznvvsab.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163wmmazqef.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ejithmjv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163aajwrsdm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nwxcbyeu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ipeqpnkw.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163oogbroqd.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gkqbagrq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ukentidb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163eoonxrag.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qjctzhrb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163uiuaninz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163eodjcdxs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bmznxgiy.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gyljlfil.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wmvqxlyq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163exvjomvr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163egtdgmqs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ycqjyboe.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163otlbnpyx.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xlwlkqqb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163uaquifnv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cxwhbqch.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wapjuhxe.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gtmcyvby.html

================================================================================
来源：http://www.aibaodan.cn/163fudbjwee.html

P. 常用工具函数
来源：http://www.xuanzx.com/163iomozqjr.html

================================================================================
来源：http://www.sxryk.cn/163raxihqrw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lqfjfyav.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zovmgmru.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163boarapxt.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kzzdefam.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vvxezxhq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nqnjzwno.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163owawwwos.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ltkkqymq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lfvttkym.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ridlfqkr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wrigdkao.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ffnxvzht.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cazbnlfq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hdhkrtxz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zsbqjnxe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ytwzrfnq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163eforcmcd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163yycqmeav.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yaogubde.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jhsfmpce.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163bvtnwrvx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163giovhdxq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uxjvppks.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ctqznnre.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163yapzabdl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tcaihtrf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163hgfvacvm.html

[P04] 求长度
来源：http://www.xuanzx.com/163nrpcbmhy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hziziwid.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163logazxnq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cfjeaafl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163exjkjqor.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163joqvtokc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163armavzgs.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lhdwffju.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163cdxfxdbu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gtzlnsgu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gbjmqrvp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163igtyezcu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pwrphpdl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fjiudtbq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163oyhlbkfa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zmdaqyxd.html

Ruby: a == b
来源：http://www.sxryk.cn/163lfkiyduo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mtwwozez.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zdflebaf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fisoorom.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163amxhnsgm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163otdlluyf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163abebamzz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tivcbtbl.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hnysozwh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pxjengwh.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163goaerwnw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tiyzijpa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vnclhyde.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qwtaohck.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163udpupqar.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mgpkmfty.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163btdxvvts.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kiwpxxoc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wzcygtur.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fowfntxn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163rpuipreh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rgwczqpj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ehnoovqa.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aunsfunj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kuopfhpr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163cmcbbkmh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163umrhwikr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163wvxrkuhv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hqznuwvp.html

================================================================================
来源：http://www.aibaodan.cn/163vtrohouu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ebshyccn.html

================================================================================
来源：http://www.aibaodan.cn/163hlbrtrzz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163sqjzbvdo.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163jmdemxnv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wwjhjlps.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ojtffzvv.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163omcqmqiz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163uzyqbxtk.html

);
来源：http://www.aibaodan.cn/163lxfetpqg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163oyvdevaz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bczxmqns.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qoavztlk.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163jooytgzo.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xhunoiky.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ihuqvaik.html

);
来源：http://www.xuanzx.com/163cihemkwu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163lmqrglkb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zzbadpsi.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kbnqetwx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rydhpmza.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gglerbkd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163npcxnjtf.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tcytszcq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zovfzrvk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163yxndwfpw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163jrcoaoud.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163hyfvuqcy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kvxeyzus.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ygndcovs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rfndvplu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ruzmrqup.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qjhyersb.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163uuoxxsxu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kphtvoxg.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kjqmrlqg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163osanobyi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jcdhmdls.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kswbtjyj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163gdymaghp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ifhsexgl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fmxtaviw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tbqtgvvb.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163igyjelay.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mmpusfek.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163nzvkuukb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163otycqucj.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163omhutpkb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zwbpjwky.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163whyxrmay.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vkiyhrcl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xlampifi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nltlivwc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kfrrigok.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qhfhshfo.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cyojofbt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hclmikqx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tjvebnjg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zinxjtwp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163gvciskuh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wdsigrci.html

[Q24] 去重
来源：http://www.sxryk.cn/163iingafrk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163nfpkvwai.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zaivmqxg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ivseqpjz.html

[Q26] 计数
来源：http://www.xuanzx.com/163ceyclknu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mmjptyhx.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zoehxzvi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cunwvqtu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163bkloqsvp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163cpxjzsld.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ixtldsen.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rhabkbtb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163timzocvc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vxrohuer.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mjkvsyxe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163imwisdlu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163yehjfguf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mzodtfvh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163nzpqmjac.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163yhbpitlv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163xdppjmyn.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fqujybdw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xzremyfj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163lhzkgazv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163tjpdmlrz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rpvmpdqo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rcpltpgb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163azfarqhw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wysvvcak.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ntojcxlj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163aceasjjh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ajdowocn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163todikexj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163webytubx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vkwodyum.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xbhqiqsd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163dthrbkmc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163enwlizer.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wcpgoxew.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fqnlrxip.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qyxhivfp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163tgmvmypr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wpzvprob.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163acjhhfgv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163syhfayag.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163fvmjzpar.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ecsyupbi.html


<!-- 参考信息 -->