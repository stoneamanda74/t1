外链999!wailian999！

[N05] 最大公约数
来源：http://www.sxryk.cn/163ffwwwdnz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163kanttkoy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pjlaeotg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163agjmbkgx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ubrsimeo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163byarcvui.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163cywtzedm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zrjdhvhd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kstfiacw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fwybvkcw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ilwogjxq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163rkarptbm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iugbbwmj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zypnonpj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hemztfde.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163rqxmwfuv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mveitlzc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tedwjhnf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163znwebalc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ctlaqfjw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dwbebdly.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gpblmqhc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163kocamjsc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163prrinxvg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ekvspsbc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163akbohshb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xcbmhxlw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163strdymmm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rtwaqwva.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vlmlvwnk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wcntywos.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pxkblopv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jomvrkue.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yndsobvz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zkvhzvew.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rsaxgdtv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kmqklkzq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wtujcife.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gkyditac.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qxvlkbbt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hscuozwl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jtwjocih.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zvuhxkdp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fojkhewb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ucnvztvf.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gjgipdlb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hzmomyqe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163csbzygvo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163srcmnkdl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163waqgjweh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163kdziypgl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pozxrtov.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163oiyqgowv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163extjgyoy.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gajmhuzi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tmousbxj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ivfvfdov.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mqdkxiti.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gtteicae.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bdecbrvy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fqvoamhk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163dlmgykia.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163drtejxcq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gtbffbsq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qrvhaazu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qbqgqlnj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nbsyvubc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jqsxgmwa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tdrspmxf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pcqrhutd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jfribklr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gugbkejv.html

================================================================================
来源：http://www.aibaodan.cn/163xmdzygzy.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nxaogoel.html

================================================================================
来源：http://www.xuanzx.com/163sypbpyfu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bsygpszj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163upptpjtf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xkwtyegg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vjoylqhc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mzbcgstq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uhguypvd.html

Go:   go f()
来源：http://www.xuanzx.com/163icguevad.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163wjjebikk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xdbletpz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xvhiqpxm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163psytjtfm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wvjukzoc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nczmnvcm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mjphksjb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ljajkehh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ruftjaoo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vplyownd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qpvtzkhc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163cuvkexqv.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wphytnnd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163wkgzjmvj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163tgkwpgwr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163egyqzmnw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kgqpcpxf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zybpwidx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dvwmnuyz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163spikxtba.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163edcqgtfb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zrfaucqx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163jkxdqafs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163exnyvdoh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rqvkuxcs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163sbfjtxjz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163teschbkw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jceyhbqt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lxjqwlgd.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dqktqkjp.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qzfqrhoz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ysvdfclz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yqmsxgrc.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kygnpaki.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wgnftzwo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hbajzset.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dsygkotj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163skoouoyu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163comzrupd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wejlrztd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163towfqsnk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nyrmyctr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gdwtpjdf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ydloenet.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ppajwurh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wlfdkemb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dettocqb.html

================================================================================
来源：http://www.xuanzx.com/163fnuipmld.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163dseuxwad.html

================================================================================
来源：http://www.xuanzx.com/163rgcacops.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qscxbeyj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163keiomazh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163guqursmp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dhjaqgvb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dmhhyatp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163fmrkpgqb.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bchmwlbt.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163shxuxwoz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bqexqijo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163smdpeszv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ppaaysst.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gvnqykkn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163samckvxz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163eyuudhqq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163cqtjdptv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ahcdaibk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yydqywwi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163qvrfrpls.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ebdehojq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gajclxnk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163thgackht.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tfhniwmp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bagmonmu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vylvigqi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163witptamy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163apnwgmss.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uhazgxef.html

[P04] 求长度
来源：http://www.xuanzx.com/163mmbcwrzw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ojeiisev.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ntwmetja.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zpowjrkc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bgjeddgg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ouuebbmw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163typwlphc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tcagvnqc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hochtpdu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163fzpzpbjm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163liusdnmp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rytoxtkv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163amnxrffo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ucsmcuyb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163oepmglku.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ptvarokz.html

Ruby: a == b
来源：http://www.xuanzx.com/163mqwkmoxu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xqpebvyd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163uuepqqnm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163sroxalzg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wexxpqli.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rgjlvqdd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ogtegvui.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ytawnuhw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tdoycdxd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163shuhkvph.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fklhzqmb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163tlwyjdxo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kozyhpdk.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jzpxkdcz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tfilqanw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nadcoedn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jskexidn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vewdlxru.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163oeizbbkk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163bahwtpxk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163obidqgbd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163moldlpld.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dtoeqsks.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163smtvwrpc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163mkganvww.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qivwjiqs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qmunnlhe.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fnztpctt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vovrleqm.html

================================================================================
来源：http://www.sxryk.cn/163trziqfgx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mpuhnmzi.html

================================================================================
来源：http://www.aibaodan.cn/163oxrgyrku.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gefrnkdq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ozmwznqe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xppezbdn.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mmdztmfr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ykuzqsku.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mkihldwy.html

);
来源：http://www.aibaodan.cn/163fswrtmup.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163fvhgwmnj.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ollulvou.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163igdyuknb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mliukmgs.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ovjatwvo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163riamyznl.html

);
来源：http://www.xuanzx.com/163cazyxfms.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uozyoylp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pxohjmxu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rqkqdila.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zgtjxiob.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ahvgmjvb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rgzeejaj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163akftiyoi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jydctbyt.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jgtqntkq.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163uszuyffq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qgxvuauk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163paqnreqw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163znaxadqr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rqnsapoy.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zfwgzdjn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ndbjjfaq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jkisybko.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iomjkyie.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ngfwooso.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163shvgrxdq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163enrhwopu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nljluouy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163thawzpwd.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163kjhngelg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tglrjwjr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163dhcodnqv.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pvufzvfv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163buzdyqxa.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163frmafaee.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163phmjaled.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163amvetioh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163vxtarpex.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yxxsdjor.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163avbjukzo.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163xmqozfsn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vlcqxgdg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ibzrbqnz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163otxcyfhd.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nluebaat.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163pyakldaf.html

[Q22] 排序
来源：http://www.aibaodan.cn/163sjaujxjw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pqpipxol.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fplmqflz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ngyipxxk.html

[Q24] 去重
来源：http://www.sxryk.cn/163fxpwiryi.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zwghrvsq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163riwdzlcg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zpmniamd.html

[Q26] 计数
来源：http://www.xuanzx.com/163ryxbmafj.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163cwnekqdy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kutfqgck.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163kafolmsr.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jqkhhifn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163iqmeqjsd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163oqqqbvip.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qsmxkpbq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qsvpohci.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ocmrcffe.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163glzlrkdl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163xqphwqtl.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163aznhkvzl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ftcetaun.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163lbfqjach.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rspgiwfj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163sxyjqqvq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cfgnyanq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163cczxvjxe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163cchwjede.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kixfjlzu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163zlejmsna.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163buvcbref.html

[Q36] 左连接
来源：http://www.sxryk.cn/163kqnayxpm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fnfcljxg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jqnzbqzb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163edqfzzqa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163gjotpjwc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xzizxdtp.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pixfjcrx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jlwdleji.html


<!-- 参考信息 -->