外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163enlbmoar.html

Go:   func main()
来源：http://www.aibaodan.cn/163fwuxwlof.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163flveesuw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gzdwztqe.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163biawgxkq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cmhcryrs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pqflqiij.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163txfigeum.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tlvhbgas.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mesofjjx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163pupiuohr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nwtqwefl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ubwcguss.html

================================================================================
来源：http://www.sxryk.cn/163mhbrtofw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kaedonvq.html

================================================================================
来源：http://www.xuanzx.com/163zstotfdn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163goxzbins.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163dqaqxxja.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xixhikem.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163iqwwvubv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jevpccjj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163zbqowiik.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163plndpqis.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163nqcwkpjr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163iisbsmyi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bnwmqrfj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lnqxsmqh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mlqobqyf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cjvlsomb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163owvrufpl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lxzxulaq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vfovflvx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163waaozvzz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163aaqnhfac.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xmodsoua.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ifrbmbmz.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ziblzyvv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gzijxiux.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eoepxmcj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163tfwthnpb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ufdddcqc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jzpjhqpa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163qrmfxkqv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ekwqywrj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gpgrlywe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lgiuoyjy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xmdpwuxu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163otjkjgty.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fkcoizcu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lvzvnrxf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wrvnuniv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163marjytll.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lsdxifll.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163fdtcatss.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cmxgffhu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mkcnkqrs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163psprxovm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ecgyldfe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163sbxylelj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nwwzsuuy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163oozcnbpw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163btyephzl.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ujdsgijp.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163eerbqtkn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zfpyqzad.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xdqkppab.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zkhvqjxq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mpgifssm.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zsvxkrxc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hdnnikvl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163crmeyshs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jgcekydf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rcygobbn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xpjlsbfb.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163yyiexlbl.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163whqxsytu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163prpyuutu.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163godtfiju.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jgricltd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jjulkaar.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nwgyahzc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kpwhlijs.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gpfcltne.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rvdqglgg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gfzetkeq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zafhydjj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rsjnrgcm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163coemrfbu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nihieznl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163zqrwlmlo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163kivmspzm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lckimlco.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163eobiotmm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nnptlidi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163iefqfeut.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jylmphoo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qupxixty.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163invsttkp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kcrhbbxs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gevxurpu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163kfgigftn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qpljyvlj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163muanjubf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rcywzokm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163syoesvrz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163yfdweogm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mopbcdnz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rnsolwda.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hhywiloc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kdglijhd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163peghfcrc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tlsdrkmi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ngzokvjk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rrkeirpy.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ufkjmxvl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wdyyvyjh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163mrsvqhqj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ydhsklua.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163intpgnaq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tpnyysbk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nucpkpxq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wkcixlgw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163mswbppfn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163sacszrav.html

================================================================================
来源：http://www.sxryk.cn/163ytrrsbwy.html

O. 并发与异步
来源：http://www.sxryk.cn/163glzuqwzt.html

================================================================================
来源：http://www.aibaodan.cn/163idqxwtro.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jtyneafk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163aoxcauku.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qshpsrfu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163wlrlprbk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mdgwvvsp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tvkrfmzs.html

Go:   go f()
来源：http://www.sxryk.cn/163dczqotcq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ovyycnly.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mykvercw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163umbrqszi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fkmtffap.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jditelzu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163aakwasgm.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iwfbljok.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dplsfhgu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163iuqnebnu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ciskrygu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mbfluers.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163etenxksk.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rrgawaod.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zwbsqylu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vifxyfag.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163opsumkrl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163nikvfprz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163jthbfavd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163nixjfylp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gzmeprwm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nydpxdqa.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zsmupdmr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163btzuecea.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fjsvdttj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163acsdzmfn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jzmnqyyy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fsdiglmm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jzxwisit.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rigtzvkq.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163kysacias.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163bjxlebpe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wjzvzgyk.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vlkszbnw.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wksosdbf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rjvcujpj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163atxcsprb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wdvgtllh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163zlhxpttl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oqkjphaq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163oaqybfgr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yxcqkvjh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zdhwybzm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163btrntftd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kknwdzet.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163rjwzlvsk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vgogwlxn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jxdakfdz.html

================================================================================
来源：http://www.aibaodan.cn/163ohfsscba.html

P. 常用工具函数
来源：http://www.sxryk.cn/163exfyezrv.html

================================================================================
来源：http://www.aibaodan.cn/163przgoubs.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bxvurgpx.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163zxrxpcxx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ibztlqrj.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wxuzshdc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163whyetzzf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163nvpfizpt.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qnuqsylp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fmwflebx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ymqbblyc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163smjomjfi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fhimydco.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vsgoyuub.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163kktpphie.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163paxhtpuy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mzfwrtxg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qvngfzmc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163auxaveuj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ozjvifjl.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163goavfsmx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163lcziizym.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jiatnwub.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163evmzzvxm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jhztjsfl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qkljztyi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fkorbkdk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163shvpvvai.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163lddlgnsg.html

[P04] 求长度
来源：http://www.sxryk.cn/163yxnhtgcd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163sxhqoaqh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xqdpskmn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tcjgyqqp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hnhtlimu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lwquwqem.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163euamimwc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xqhzzgol.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gobrjfot.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ofksrwrp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ordwguke.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hezsitwz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163aofltmgw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yveemjie.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163nvnrtnqp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jmbehqbr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cdcrmfpk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163khhjmkbb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163vpnwpewa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pdvouajx.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kbmlprni.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163fwofmyrn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bzatsclk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dwbslhaw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163fyakuklp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163kyyazkbr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gjrfkadl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163cgawsbxx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ylzsdcie.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rjczugfh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xxcztjaj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eerbiwgd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163yqvyqpns.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fptjtikp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dopcipds.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xuzqictf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163liukhdrl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zfgazaig.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jtskyazm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163btmmzjdc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163mntzoixv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163pumhgkcd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hcukcezp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qjxocezb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hxhiimol.html

================================================================================
来源：http://www.xuanzx.com/163owyvoqjg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vialbjeo.html

================================================================================
来源：http://www.aibaodan.cn/163nrgbpzrz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kpdvuzbi.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163kztbejsu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163phbwvfkk.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163kmibacfn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mgpcdfzt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163htrzulgg.html

);
来源：http://www.sxryk.cn/163ccvzassj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lcrtidxj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163aoeubtrx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ccubzvmc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fbifwwez.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163wyhrdosv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zlsepwyi.html

);
来源：http://www.aibaodan.cn/163hltjobmx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163otsrvrvt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163dfbkgawf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ggptsqyo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cdioawpx.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ldumsdhx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gunvgudl.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ebnqfdhc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163neyqwgaf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yssmjqgr.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ovrxixug.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163keevrjmh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163vngknvvk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163tfnnmdgg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vrfqmvgc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163lyxljvol.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yevhlhau.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ixxjekjc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pkvxhshj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163yufhuqcu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163etgdapqq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163nzkndbye.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163iarjpmaf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dnmzymeu.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163oknwciul.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ucuirbax.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163mbucqeze.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zxxhftbb.html


<!-- 参考信息 -->