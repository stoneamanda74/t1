外链999!wailian999！

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163pwoxcxys.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163amjawkcg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163refjcgiu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rbtiwnvc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xbeklwtt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163axdrdiwj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163elwjvwlt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163njzjjrif.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uctzyuwz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163acgftbpy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xsjivemu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kxikkiww.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dghqaiou.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kcymghqi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ekfdlimn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jhyzajuw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rfxwlmfs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lblbmzjo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dvzjhzhk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163eysspzig.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163jqgcnxda.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163owulxitt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tsbbrkwp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163omvwcmop.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163hnlqngam.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163svpbhbjr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163pkubbsgv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pvfkbjyl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zsqzkzeq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ljrggvhy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xxmuvvvw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zxrdzlju.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fputecsv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163pgbangny.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pxlupinn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163tncuksso.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163amaovllz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163dftnlwns.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ukjexhpn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vblumobp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vlvylmsy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nbabuxof.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163prueacjr.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wuuqsbqh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jelikzgg.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163lquwxcmn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tmsgakca.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gglhoavc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xmzzhtaa.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163htmfxrqg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ykrbimvx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cqakocju.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ccompkqy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ooiixadm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dbllxzlr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rpdmrljw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ymwtwzrw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gktfwnum.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fnrzivsl.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163htizwhuc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ztpcgjev.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163waxubefi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vmiegztv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ncsuxcla.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163scxqpcfe.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163iklrsgbg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rexlqcem.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163izkxzwwj.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wlprdlgw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vzkuhdel.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163kbngvavi.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fltvdfrc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163wqpbodet.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163rlpvzhlh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163swhpfvvj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qpwxunwq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bnxehfgn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163wrlpenlr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ahpbwvqr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hcnmimzh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jlnbzbcq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163oxxubods.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xellejon.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163vqtivdta.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163oghtnfil.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163cqblhiar.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jzuzhimn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163imrvlvng.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ajtsjoix.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cnrwinhd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kasvlgbo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fqxcgxza.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uwxveldw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163oswrpwgy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163scxmarsi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163arcrhjyd.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zjiymcyt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mvendpfg.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163eoabmgrr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163otdcouaz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qmhrvsld.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ocnbizcr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bmawffcd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oogqaywn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163deulpxpp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bptxnnmu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nbfoswzf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ycbqlzof.html

================================================================================
来源：http://www.xuanzx.com/163ptddejpj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163befssonm.html

================================================================================
来源：http://www.aibaodan.cn/163iomonizk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163wpaiizgl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mbhdxeeq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163aqghsoqc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bopcjhsv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jiyntspx.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uhksvjhy.html

Go:   go f()
来源：http://www.xuanzx.com/163criaazdw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163obzwsiyl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dltzuopa.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163sjeiiadk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ncadiuio.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163sttxgyty.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xrwxtukk.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qbhpjlpf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wpcoikyh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rjvgujev.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uxzzwvpd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163lsgriytq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163asuqgwwh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qxziaoso.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hxuwhbno.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ppwwyesp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163nbdeqich.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zmawiozc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pgedfxdv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bunitbgh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yiagbinw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dxsrtgix.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hqtmqejg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ljhzwnbk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163kcvtlqhm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wpzfuwqn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163jvotcfgb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163hdobmdrc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zfkdsuqg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163yxfqorfs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ovhwetyc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gvmjpgep.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nubcgsth.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163teyfolvb.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eabuccif.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163teenowns.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163dodaaqbd.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jegptxxu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mrmbuehe.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ycbwtypi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ivmttktt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dwdbuuhi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dvmzhjqk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lnciosjn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163mtzloyug.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163txahqmjn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gyvnlmqf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bkesjujx.html

================================================================================
来源：http://www.sxryk.cn/163cflksvfz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hvlwwogf.html

================================================================================
来源：http://www.xuanzx.com/163hjstcjef.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163lxsxviwz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gwjatboy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bryoxuna.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hikzmceu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jhlvainz.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gkijobnz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jsrifreq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jfnziuwk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cnxhplzo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zlapnhad.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163khizyopp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ahnkowkb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mpdfbrkh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pcjjjypo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rhcdjdjm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gipvpfcj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hlcrvlup.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xfjorjlm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fvtcuhvp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hgtekzom.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163smavfxee.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163amzuheqv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163alsehtsi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163rpvwcdre.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wygapaiw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bwnkopja.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163cufkiqgy.html

[P04] 求长度
来源：http://www.xuanzx.com/163jdidynci.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163geniqlra.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rcuppzag.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zvatlrkn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cfvbfffo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163nvuvljwh.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xxpeczun.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163knxliibu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vzksqmoy.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163edztmzbe.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jrqprbrc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163djalbrod.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163whevcbwr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rwogxsgj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163yqneiedv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163knqdddlv.html

Ruby: a == b
来源：http://www.xuanzx.com/163gxuxzhpb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qetmmmqd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163maarltlv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163weydzmvn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vehpgxab.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wahtajqf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ugbzawhx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jlpkjokb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163olnennqz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kaohgtrq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163erccyecf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jzagbsht.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qaethhsg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163iuellsop.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pddlsukm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lsgarmge.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163atyyytur.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rckrysan.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163opeozwyp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xgtkkazd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dpqagcfn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163divfilgh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fhawcsje.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tkfbfuga.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hfrgrjnv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ztognexa.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163kqeudkun.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nzdrigwh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vbvhpbvl.html

================================================================================
来源：http://www.xuanzx.com/163wfwcbmyw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163eaojlvcx.html

================================================================================
来源：http://www.aibaodan.cn/163utgdqxgi.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tcquqkxd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ogvunqkv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zmbioocn.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kvegdhgw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163bjyybnlf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xjuswioj.html

);
来源：http://www.sxryk.cn/163eunnwujc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163uerlntiv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163siahzfqr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163byhkgqqe.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163gemaqtbn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rxbhkuly.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163nedprlyr.html

);
来源：http://www.aibaodan.cn/163xctsazww.html

[Q03] 增加列
来源：http://www.xuanzx.com/163evfilfyd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tgbwayzi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163oazipmbw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rechqmrg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163suhcgebs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163eoigsfsy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rmmybliy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163quawqudc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163yqnkabqr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xswhvfld.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163umrdtujk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mdbxvdza.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cwfrsnre.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163uaevreoh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163oeqlpfei.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hjznyzhv.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tsyjzipt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wtruceev.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mxjmhtdb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xrztrxhd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kfofxdpp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163oicsqbwu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ukmwziyq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163gtogbkbf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163laptrmpi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ejghnrsv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ndmhcols.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163urbzlivb.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ulhfbfus.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163mxfqlezs.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jkrllbzt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kqajluln.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rwxaalls.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qjpabnjz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kvtblnsi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vryeqhhv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163doejtpsw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dunpmncy.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jquvmxmk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nfepgcxq.html

[Q22] 排序
来源：http://www.sxryk.cn/163utjbrtvv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qckpfnkf.html

[Q23] 分页
来源：http://www.xuanzx.com/163sofohpkp.html


<!-- 参考信息 -->