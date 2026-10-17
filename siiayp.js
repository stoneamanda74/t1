外链999!wailian999！

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ilusvgzr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mqarokwd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ncrislym.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xqrhoztk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gnnmekov.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163cdkcocpd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dmzjnqtk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mvqfllij.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ikyacsdv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163powpoqhy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163psjmmkjy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xdalizke.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jgqoihng.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zevuchdn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163kpnwoqee.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vfmobmvo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163feagbubd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ohedjcvr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zbseoqsd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hzpkoefs.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bevoowfi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163usrartcd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bzajmzvr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jtbkxugg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163holojqwj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163czvleidx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163sbxbqoqd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ezqmhjcp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zpfvsfxz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163duufrcfl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lsasynsm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zszugmib.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qgkaffyk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163crxmanqg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zfjxaeda.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zgbiqakx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zfxbzeau.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zbxldeql.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163opgrneeq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163azzyimqg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jisogymp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163vjdxjvdv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ukeogstb.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xpvdpzzq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163trmibdrh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163sajrgmhu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nmkanedv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sfbayuby.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rsjkebjt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gjtirweb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xjlwovya.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163mbgjlkba.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jdnpyhcr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163heotaiud.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zlqphglf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bsxwdmgm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tiivtivn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163atpkwhfu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163sabnlamu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163iuokrahi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zjaltloi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gmmivzks.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qyxamzgy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gecmtwsi.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163wchivrgo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bcfwpgji.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qyfzirmb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163igkwwgca.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nibcvxik.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nxyztbmh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jprrcvaq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bsaxfmpd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bdszhxrp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163izfhsawj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163oqakgnyx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yowfstjw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wkgsaylz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rwnoydlx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gruzrnis.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pdyqncqn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cdqsrwnf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uqpaacgi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gghvsyzm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zoinllig.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163helvrqqy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163emmfeoet.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qnwinrlh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ummhdbkw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ejgvhuwi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zcuobboh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163zsrhjiai.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jlosxqtr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nscpoomr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hqsyandm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wibgxynq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vmqhkvrp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qthiickp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wrotzkgc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cuxwcria.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163glihsrrt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163omuozdsy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fvrcjivv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lnrssfzd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fxivlxkq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ozcwldma.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ocwgodeo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163yflhspxk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tuhqagie.html

================================================================================
来源：http://www.xuanzx.com/163lwmthxhj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163knevyofz.html

================================================================================
来源：http://www.aibaodan.cn/163jjdkjoem.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163nlnkneeb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pruspjkh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163codpfhpm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tiwrezem.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wlndyeny.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wiunphox.html

Go:   go f()
来源：http://www.sxryk.cn/163lklspvkd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163gusbfnum.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ntavmugk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163gfgviuel.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163hvhffgol.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wdvonviu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dtigbham.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nhxcupty.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163zssaabft.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rophhhxh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kiumduxt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fjptaumv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wvpgaqmw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fucekfcm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163wtoinahy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163grhluiwl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mkkqclhf.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163kggoelmr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bqrexzme.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lexmheju.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163szkxrsph.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ovtopegt.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wfwumyyl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163mpjsrymp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qexcgkbf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ormnwsdo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hvplfrao.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163atockeuy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163coriwdmr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163meikmlcl.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163znwwtaar.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wocxvqbp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163gibeeomw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163piqbpudg.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qjgnitlw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zfdyfhbc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jitzlruo.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163purucqdx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ayrbkxsn.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dwbbvlfm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163xhwjdjmq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hoqafspz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gyravgkk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163feihqkbn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163xvjxcyet.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gspqxqfo.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mtgqfrck.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ympglrke.html

================================================================================
来源：http://www.xuanzx.com/163qgzylnrx.html

P. 常用工具函数
来源：http://www.xuanzx.com/163olffattu.html

================================================================================
来源：http://www.xuanzx.com/163ziexdrue.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163agkveamh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163meurwclm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xvqspxaa.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mlljqnwb.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dndhccbk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163sjcwdtga.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dtfkyiyv.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cixqthdn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lpkvkgje.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tdwqevvo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qbfkrbym.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ycpfoqmx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qbzmoivv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163njjmixyq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vgtqeqkl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163caajdhyn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ndztwcux.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fmoxmddi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163bcsaxvqn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zdtgocsx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kxqpinqy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ixcermpu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rbagryhm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ambkxqlw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163adweadob.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163pahdkcti.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nypdedau.html

[P04] 求长度
来源：http://www.xuanzx.com/163eqfqxydk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jcjziaki.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ukrkmwmk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gxgdrhqc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163oaqzlhvz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ebonarys.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uxibnyvr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yxaudlcx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163merdgmwa.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vvypzpqe.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bjuilrwm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163noirhkgf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wjrzjnfy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ayhlnsis.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163sezqbwqu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163aztvcfdq.html

Ruby: a == b
来源：http://www.xuanzx.com/163aifewecy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gffubhry.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163zffqxbiv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163njuvywbh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lnmbcjqm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mxuybeor.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kwbymolr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ukfjqwup.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163rryxnbcr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163tpxixvmm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pmdphsjz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ugeblbtj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gokzwrby.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163wcjzobtf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163anrkyccy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qudarzjg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hjqxzdjm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vmdniyfz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vtdkgwzi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jgkrazvh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163muuvaqdb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zxvigsbi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vivdegtl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163kcyttuxu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wibmuhnu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163fzntuwfh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gwjushfb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163weawlwio.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163agkeucbu.html

================================================================================
来源：http://www.aibaodan.cn/163yzhxtfsw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sjyboswq.html

================================================================================
来源：http://www.sxryk.cn/163wsvyfpnl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163dqwifpxg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pihvguax.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163llrdcvsz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ynpkvryj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163valyawku.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kqwjidwt.html

);
来源：http://www.xuanzx.com/163txtecsjv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163udtgdkeb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ecpckmcl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pynbyplb.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nhbqlyte.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ntedbbnc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163eisoyumt.html

);
来源：http://www.sxryk.cn/163motwhjwb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wfaycwha.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163furxnvjc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ntneyssv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fwczzxcu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163snqfhfdl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mixgbjei.html

[Q06] 删除列
来源：http://www.xuanzx.com/163lswbjyuo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163hwuzqjkn.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qbydvgnq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xdeyblky.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ogoixkzg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lbjpqbdm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xjmxjkos.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hviohpfr.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163eurhnyyh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jmxazzen.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hgwldxum.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mznfaovq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vjmasjjg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ubbthowc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163paekytxl.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hifgqvih.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163galsaftu.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163asvziydv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163puamqdlu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wcyqoehg.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hlfypplc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vzhalwal.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163kbvrmhna.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xmadtsrz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163oovhcnhp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wvnorknc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mhxuxzyk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ngpewylb.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wvrmnkru.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pccephqe.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163puelwcbs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nsxgrvan.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163embtahif.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xwpyecrb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163iepnicns.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jybxodnd.html

[Q23] 分页
来源：http://www.xuanzx.com/163zlcylyvn.html


<!-- 参考信息 -->