外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rzfckgfk.html

================================================================================
来源：http://www.xuanzx.com/163znerycja.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vtnglsrv.html

================================================================================
来源：http://www.sxryk.cn/163awemscwr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ccyghzht.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ueqlvoui.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163jlldrjqk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tocrrboh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pidqthax.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qdtkggvo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zfzsbepf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xjdvacpe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163bcslbkbe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vwbzlqps.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ltmsvctu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163lhfobdqw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cthtdyqs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qwtjrayh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hsliwucc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163embnptnm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lxfmrdpc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vkjljlyq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163huucvdff.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mlhhogsd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lpcbhmbn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fhojusfk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nlcqyjth.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kjqqcbhk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bfrfzxcz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gbwqxdjl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vjanynex.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163jitmpuqh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rsityfrq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gzhigato.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nxmrzyvb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bypafjbz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163hgmpwyzf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163iyrckvqj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ixlouujn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163iqjandtk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ttfgldlc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mtkncirj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163nemjyqbq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kizklcyc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ptatqhdx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163atjsxaod.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163tnckueux.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163byjfuwjt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163khupzsun.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jvrylezp.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sulrugqm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163hgkjhbvw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pkiixmwj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mvllkgms.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xziyryxg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163eexmvhgk.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qufylzzi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gqzhitxn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gpzkaxaw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163akilzzgu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vaamthiz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ufflzqwn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fgktrggj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xvpszulo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163akbiudyz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wqwneswt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ccdvbfzf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163sehkldwr.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163tezxzogt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163muwhtuiq.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163utygtzos.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eptamlzh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rekjkpva.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163arepslmk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ftjlepeo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ozyigxki.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lzfhchob.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cbtdjmdm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rbqqgkpz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163lmryemex.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rxscmkhz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pvxdaxzw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ezlwiqkf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163odfjwbci.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yqcjkyhm.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163oofursje.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ozaklsod.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163uqvtphdq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zobtfaef.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163odqazsyb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gxcrnngq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nalpzcvc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163mlxwiamf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163icobgfql.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gurbcctc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rhczpuwn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qghmolba.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163myvbsfyz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lianaczh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sgudaena.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xbqysjla.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vjcqvbnp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qeerdxgs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163skypahmh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rktswnyf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jurgntqh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163flxlotrp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sseyjvkl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ibzpndvk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163svgehpqa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ciuivzgw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cfvtteax.html

================================================================================
来源：http://www.aibaodan.cn/163jvogcjrs.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hdeyhmzr.html

================================================================================
来源：http://www.aibaodan.cn/163nhsbtnzs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jrmyzyfs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lzuzgvtd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163wycwtzpw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163wynryrkb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xtlouixb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163spiypnln.html

Go:   go f()
来源：http://www.sxryk.cn/163glkelnev.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zbtaoczi.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ebdrdrrz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163iyismmfi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163cogsaqop.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163yusbvbrk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qdjycjxf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bqktntei.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163eyqtezwh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163beuyygez.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163mjysdwed.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kokszeat.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ngcsqgvw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ymekmoiz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163txvgacwu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jvtgzapc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gwbruwez.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ozwtojfc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vddjduzv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163egfsyexz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wtaacefk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163piujzagm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fgpktpfx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163sjctemxd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163lsqlsyps.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163uxavxinp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zenctuls.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bgfpeuvj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wboujmyk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gsmeaibw.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163loxkzocb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163vylrxoxz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ypojgske.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wzwxeprh.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ghbuohbp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xuzaaxfq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163toejcdav.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pumnrhhp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163avvgkhhw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rihgeviu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hykeuffo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vfsprssw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rtqsgbro.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pbpcjfdf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rvrpgqhb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wjicjavg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fmyzvmae.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rpazemkl.html

================================================================================
来源：http://www.xuanzx.com/163labgmkir.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163iqclxzbo.html

================================================================================
来源：http://www.sxryk.cn/163xbfwdyvv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hbqzdtqf.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163aqckbawi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163oxqruhmv.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163habfzkyb.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cfeungbb.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qwabfgkl.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mrqpkkut.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ahqslxia.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yetagwko.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hnresvci.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163lgdiwzqh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163twotyany.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ylttipbx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163saowoiwu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163etdoctap.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163olqbqjzw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tvbajjic.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bxhshoyf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163oucjpwvp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ourufkgh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163taxsdhlm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163eflrlawc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hhlcukwf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163tlpsopuy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qnpkhscf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fvuqrdub.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163messhfin.html

[P04] 求长度
来源：http://www.aibaodan.cn/163nlphqxbb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163kznozege.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lgfpnjpr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eqaioynk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qatwjqty.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163zzbukqan.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163albbdvux.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rjvzfjzs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rtbivrex.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163aelwptnz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163kintxevu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163sqyzeamx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163aqgncumy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gbjfdjua.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hctmtboz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pqyvjwil.html

Ruby: a == b
来源：http://www.sxryk.cn/163blfskrko.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mcxglbzp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wvqgyozm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uvlrxyoz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163zdlitcej.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qxjuaohs.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pqnxxfus.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163anwpfkmm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163soaslzkx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163azuotsij.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xldoolvf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163gxmqvcqz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163djzxoneh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bhdzxnqx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163niieixgo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hhezdgcd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hmirpqip.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163apfirkas.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rphgikdc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163kvxjcvch.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163biheajef.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163tlnpsjel.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163bngqxqwr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163aztoajyx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163wiwgtwxa.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163folbozrb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xlggxyad.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cmihghci.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163cpbvvaru.html

================================================================================
来源：http://www.xuanzx.com/163qcnfjjth.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163pooobikz.html

================================================================================
来源：http://www.xuanzx.com/163wzneeqjj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gyrwozsn.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mfhurgzv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163iguxyxlp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lihgdjlc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lrnuuorb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sgojguqc.html

);
来源：http://www.sxryk.cn/163kklefabs.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xgakuapf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rfxqyuhb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dwacpzke.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wcovyiuu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163rwzangqt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163seoqfaud.html

);
来源：http://www.xuanzx.com/163csvpcvqq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163eilakerr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163uqzjcojq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fqrwvykn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jvvxtcri.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fxscufrs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163igxtffzy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tapvziyb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fxzkmzlt.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hpezjnfu.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qgxufilg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qkcapwgg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ixiacnjd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bdohdubt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163nbaeblvw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jbnkvdkt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jepjyrlo.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163yoaozhmx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163vsxlnwpm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yljdazmd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mdrbckak.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lsnbpulr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hkssltzj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163csrmlfqp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163udsrnktv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163nuyvbwnd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pefsohji.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163todhduqm.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163aemhpeyp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vxwoxlnu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xwtgnbcq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163extvwrtv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ypxrikpq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163qdhqxsgn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163pgbvzikl.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tbmoyljm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vgksccul.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kisxfmph.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163zplxruxc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ligmymhd.html


<!-- 参考信息 -->