外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wflgfhmd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163nhjvxzop.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163svtkrusq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wieleihh.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cchzkwzi.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kdrlmldf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vypmkxde.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163axezfemt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163odycyagj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tdrhrnpe.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ecarlhic.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ondrurks.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rkkgbuzh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nfhhpklv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nnwtlpeb.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163faudnsvg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qznvjsvj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163sugebhmt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163npdxzogv.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ejjqixxj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gredmurg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ipwqbmio.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qetbrsrg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163waaqlwyv.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qzwpqhez.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jncyqssq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xfqmjipr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ndpefrsl.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163fefrhlws.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163svcphtsn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163pcougcei.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xdpexctm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zsvkwedk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bucjuqzr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xchxlvic.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ffevmazq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qvpbjeex.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vgszvbvy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163sjmfonze.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nymcvdbi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163znvkocci.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fybnclcl.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qeyvveef.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163zyocozfv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sfrrnwhh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gvbqqegi.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dfzvmtjs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rfordduo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fhuyuizi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163recaszuc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jaikrfwf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rkodelpq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163sbcwuphy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yysceute.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xrmcmldy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rjxnjzua.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163uxptuppa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163sqftxgbf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jxjyshqj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bazefupr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ugtbrrus.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hdyjhslh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163nagsimra.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nuyaivxr.html

================================================================================
来源：http://www.xuanzx.com/163kzyaeowd.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ycbfapnl.html

================================================================================
来源：http://www.xuanzx.com/163fjezybzj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lephyjqr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163spngfeno.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xlymnghs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gtwkvycw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bjcgfpbh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tyvundjw.html

Go:   go f()
来源：http://www.sxryk.cn/163inxanflc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hxkjsspp.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ihttkavb.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163uokwjdzd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163aaftqpsn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163kdqqpfbw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163czjwzivy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wyzcrzch.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ocqzolia.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rgklusvk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pcpfusgn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mqkqlzsl.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mhnbkanw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yyzppwig.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tkyglxtc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ogsoicab.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nzkqvmsp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163iihcbuen.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163evbumogf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163uqmjxcys.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163oxqzdzdm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cqyjjmjm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163gnqbcdgl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vjywzqux.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uvmcylqg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zwsbiljr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mcjlexji.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nhxajnsj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mtgmglwh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yrblsdty.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nieodigb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163druruuoy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163jkzhguic.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xxaqrhcp.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bujobbyu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163edrbgdrc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rntrsmea.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yhgvwkbv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hclsqelo.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163glqfmevh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163njgorkuf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rdwdvgvn.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fjhgcjnu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qcbgxfll.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hrrirpjh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gcterrtn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163omvyzipw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163fbqvhunk.html

================================================================================
来源：http://www.xuanzx.com/163zbhpblwi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rbnvfqpj.html

================================================================================
来源：http://www.sxryk.cn/163vyrfgltx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mtojmzny.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xqzmpcah.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mbbjhwdy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xaatvscx.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nvnbdppr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163uhpuhrbw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163jskqtzyr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mryupvan.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163yoeqhvzl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163jquglgyq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lhsjvrri.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163oiiyojrq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rsbcydoy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163phtlgeam.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ejqafvbs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cpeyxtlv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mjrcwrex.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bkbevvxr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163yahfaihi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gddfduqu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163sihddbwz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163eggakxvm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tyfukgxt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iosrgnss.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ytwlroyr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yuhpwang.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bbqfbkdu.html

[P04] 求长度
来源：http://www.xuanzx.com/163wkwylnzk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kiusjozv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kxgsvsas.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163scrraqcj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ejrfcuhr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gwttlkdg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tnjkmpxd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rslbsbwm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163nmtblakk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163beqdmozm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bzhshwkh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163wmrdiecq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gybafsci.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hgoiecem.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163vkxtnyxh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163exjuhcng.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ipwybgxg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163guygkkgf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163tuwlywoj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zsorknuk.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163luimfegz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163uhwnakpt.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163knycnxpw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hyboaslg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163orbjjtso.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lefypfnq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zarvwdjf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zuvxsmgl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hvbcxdro.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ldjpcsuh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ymypmwnl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kkplpoby.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jvpxxkhe.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163amrswqmi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163walhzgcr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163buwkhgmk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163irjfnnrw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tesxmhnn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163myvflmrm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163lmywhlay.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kcjlnvwo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163otcewryr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ayonfxuh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163puuezxkm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163phlvfssb.html

================================================================================
来源：http://www.sxryk.cn/163pueijfqi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gyelrugp.html

================================================================================
来源：http://www.aibaodan.cn/163mistbfjv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jmcpewdc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jfkkuoqh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uyrppuno.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jjteabis.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163seudvapy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163dlkypsuf.html

);
来源：http://www.sxryk.cn/163gkqxjuia.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wxqkrhtc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xsntlthx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lfongier.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fyuxczvv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ssibhykb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163njbnvueg.html

);
来源：http://www.aibaodan.cn/163bzkcoadl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cmqlbyie.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lyshrhnu.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163igmizdhp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163miczlcsk.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ilgidfjs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fmkwqlit.html

[Q06] 删除列
来源：http://www.xuanzx.com/163nvyfbwgg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163hkhmguya.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163eshhgjhj.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163efnqsdry.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163sppaxbms.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tdkqcjxa.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163kmktqwxt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163agxhrabx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zdcdoovc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ezbpwapd.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163urywyqbh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tzlygisn.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rxpvsphr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ijycswjl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163egqqpunm.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163aydjknks.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xjwgpyob.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ktsgqwhg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jjgirrga.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163iwzogqsc.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ekasgftt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ypnhlekw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163zcneedwb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163bcomyqmd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163mdxytvvl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zukbvhin.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wrwwxvxl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163hmhqxaap.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zltvfeqz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yaqbydog.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jjcdligw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dwfsoaok.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nldxlpsp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163dhprdxhc.html

[Q22] 排序
来源：http://www.xuanzx.com/163ghezyjvh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sgqaxsgv.html

[Q23] 分页
来源：http://www.sxryk.cn/163jbluhgnp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163metroafe.html

[Q24] 去重
来源：http://www.sxryk.cn/163hilsdntr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ylblpiuf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jnwfgtpp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163mwolstpf.html

[Q26] 计数
来源：http://www.xuanzx.com/163ifwxxybd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pmtnewrk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uocgxfjw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ipcbyemf.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163pdubtvqt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ofozrfxh.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mouskkrt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163amiguhmo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163loeddnoq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sjclebme.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163otaohiyo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gzphumfr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rtfcsfgx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mzqyngbe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163coywzfxn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vlsjmosu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163fzttnupa.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pipiuuwl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163oqzfgriz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163whwoieun.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163bubpdvel.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nnhiuffj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ntuiesph.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vuibiawx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ahmnfska.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zdbfibbw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163asaulppp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tksszkak.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163lxfpqwba.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163etomsilk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163seccqubr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hctjlatg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hatwjlot.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yehbdxgj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vzffpizv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163afpezdsh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jddwfuld.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lyhhilvw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qcunmieb.html


<!-- 参考信息 -->