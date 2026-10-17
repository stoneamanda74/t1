外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163abavzajk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ndkrnjsn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163yxfrbriz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163oejwelgq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qfmggpxp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kmtoymsf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163kabhmnoy.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wjzsrhzd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sbdffwfe.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qeohvkdg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163sxngugze.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dklcegej.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wwkyrmot.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163udfzkvps.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vbxjkxiw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163uxhwpdyh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163meznrvgn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gmmxakrm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ndgbyfdm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163dqoiqytk.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rojynozt.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163icfgqhmy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163nrkcwdev.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163mkivsdts.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sucpelrj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fjpfbmiw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rmnyqbwj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163aetcywsc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163okuxdcpv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163pkbpgijb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163tjhbftcm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ujaiuktj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rlpqlyfk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ywmrvopm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bqcxgikv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163koztaisz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bxnkuehz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163xbyzwhyd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163omjwtrjo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ekwqcbvj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xlhsxmxu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163thjiyqqy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163atyswtmw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nsxjbszm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ouyaamoh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163jtdmtlme.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163muncdotq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kujqziio.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163cycnuben.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zlgzwtcl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163qvcsinwy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tmlrrllv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163utuintdv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ctltglik.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163edqxfruh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163iwtkzuoz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rdumckcp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163dlvwkuwc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163gqgfhqno.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vugqcvze.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163alkazyfg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163btppxmhz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mvntywke.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fqleuwlr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vbvtxadl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163iwuvaube.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tpxndtcw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163byphiiez.html

================================================================================
来源：http://www.sxryk.cn/163bcimegiq.html

O. 并发与异步
来源：http://www.sxryk.cn/163eyfhbetf.html

================================================================================
来源：http://www.sxryk.cn/163gjtqadfc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163wcszyvnn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163stxzfbbu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pivlgypk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nlpoheuz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jiwerxvo.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zmhiizfz.html

Go:   go f()
来源：http://www.xuanzx.com/163hsubrglc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163oanriigt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163urlaogoq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163raapfirh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163cxftrlpm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gibfgxqf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wpvfuktf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hyihfsya.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xecjfoqe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cwntvmqz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wrhjawhg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mpqaebcp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kggiskgu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163sikofvwx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dwtqkplg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163accmbgaq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vdnwqdnm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163pvpdgqdu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163zttsyxtb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ztecgosn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yifssedb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gxufudhv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163sundnpna.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163iwprhzch.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163avkvbxhq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163burvmqnw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163okrkadbv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zamsepwo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hupuzaez.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pycjbsgr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163uygbncfe.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vxfpdmjj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163tdxxuwft.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yzdhceoi.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163utmbwmnz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qlrvytch.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lluxsixj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xchuzygr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163odgalqmu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163iccpfhlu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163prufxigu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163bmuubgdi.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163glozaqsm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zjxngthj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163nrfmuzmz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lrsetssn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qdxzltga.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ltprnqjr.html

================================================================================
来源：http://www.xuanzx.com/163hhjqfjrc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wsdtwdtx.html

================================================================================
来源：http://www.sxryk.cn/163gmtslxdm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cnofrgto.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163mldfwdxw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163owflghmc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tfhzanvb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lrigrtax.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163phymsckh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mhhvdvyy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163yzmaydxa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jsdjfkxm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163jmnnseow.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163upulmhir.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qebxoxix.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lphducme.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rfilarar.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163aapniinh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163eiphdvce.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cwcwemih.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hzwicgoj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ffkucbon.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163axvbyemr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mbihhmzi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jkjkytep.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163odngdtwy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fagoqyet.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163gputnmft.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163pcqvdrkw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163htyvciqv.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kuiqwzis.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163stvkedmv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tghrvkyn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163aqfjaish.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nqwjhsjy.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163izatosoy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ogymysrw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nmythvxo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kmwlhgck.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163rvakmbku.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163srorcncv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vydzikmf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qnahkccm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rjdrwrai.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fqahsuru.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163rbmmlvzb.html

Ruby: a == b
来源：http://www.xuanzx.com/163jpuzppfz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163pbmzkjva.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163jalritlw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163temdelbq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nqvhyfwd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iqdzgrli.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vqetfddm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ksjwicix.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163cwnmijef.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163dhdbyfnn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163glsbhjvv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tajcmnls.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ehchvxmy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bzkyqyai.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xnxdaiwg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ybnnghai.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hyvnabqn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163trnadozu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163kwvzbwem.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ahxchncl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163nzrxzzhq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nobahlrj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163yuciiiac.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gmmbjvpo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ylbmwazu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ghbfsagb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163srhjlucr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163tiprbzbh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qmarukel.html

================================================================================
来源：http://www.sxryk.cn/163eercvvqa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zcwofitb.html

================================================================================
来源：http://www.aibaodan.cn/163pwsqssgd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163erjkxiep.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lvgolbij.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yklnidbq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163intednwj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163imaemfme.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163dknqritz.html

);
来源：http://www.aibaodan.cn/163zkduxggj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163boxqsvum.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163lcaebswr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163iivqiics.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163pjowgoom.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wwiaighc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163teleepku.html

);
来源：http://www.aibaodan.cn/163dggtonuw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ejcuridf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163chjlaius.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xbyjswhf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xplsovnl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163gngtcnkw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mmddmhqq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qnqrhcnv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dhqtcphi.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rppvbesf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jcaednhy.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jwcvumys.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jzhzssnh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cypyjofu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163yitmfsdr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163chzgiolp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qroncrct.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163agkxydlo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pjptadxz.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mieosudg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163natljwyn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163isxbczen.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ayshyqmd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163qxiepibz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xlfqsolr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163viavbzyz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163qscxpahw.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163eemqupux.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iphfufpl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163rqtnkwhn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yoayaxbt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163mvvgobiv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qpnldwqz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hfoateur.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yormsjjb.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163bdtfibwv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qhabrdxr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163fzcysbwl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vzzuystc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nhzplbxm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ulhfqtbp.html

[Q22] 排序
来源：http://www.sxryk.cn/163vuurbbkf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163njveshpt.html

[Q23] 分页
来源：http://www.xuanzx.com/163lstztrig.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163prigvkqv.html

[Q24] 去重
来源：http://www.xuanzx.com/163vtjgqwha.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163utdmddwt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xghojmxi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163frndwfez.html

[Q26] 计数
来源：http://www.aibaodan.cn/163uqpdgngt.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163iavfapus.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rclwkmyw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ztjmxvfu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qydayzvz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163cdpthxtr.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xiqzpqdf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nkqslzmi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163rwxzufre.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lgfyyziv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163wnhspldc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pbjbkano.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163iknyhiqq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mouxiafc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ikkirxau.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hkehebtm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163nsovoqlh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163etfaynss.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fmvzxicd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mznbdecb.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cpoahwrh.html

[Q35] 内连接
来源：http://www.xuanzx.com/163itogjsjc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163swzatavz.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lvounzxw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163crgqkrwe.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lllfdvxt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pndohyor.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fbywspuy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163szkyykgb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163hagbqmyu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ifbrvawk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163vtoeckmo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163gpcoanuq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tdezyauq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zclecrqz.html


<!-- 参考信息 -->