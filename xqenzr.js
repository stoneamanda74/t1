外链999!wailian999！

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dnvjixeh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163uchzssnk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163nearzrqt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xefnjthj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bmazdwfl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zfeaxkif.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ishjyqgx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gtnbpozn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163lnkzkgzz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163lwxqzufn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163agsdglte.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163vonodcgi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163seyhrrbo.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dcwmjkpa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ehchbfxf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fllmkmxn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163gukxfpjz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163otldylxe.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163sgbencqj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163cxgxvbhp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163fewawyre.html

Go:   func main()
来源：http://www.xuanzx.com/163hyfrawmm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163sfdfzftf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rtskmmpk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163meitiaet.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gqgjemcb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jjecmnbi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vpsrlcez.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rsbovwpy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mnalkckh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hetkqiet.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wkenumoh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163kwhfpule.html

================================================================================
来源：http://www.xuanzx.com/163tbxbjucv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163korngrlw.html

================================================================================
来源：http://www.aibaodan.cn/163fdjaygis.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hbxgzulf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163okvpzryp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xvefnjzx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jnofdxsg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163oxrugdkn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vgfjlwas.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yxtougmh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hsrunvmq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qmwypzsj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ptmmgizf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wmzvwwps.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163vydyjzss.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wtrnkjcv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jkngflrp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163psowvjia.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cnascipw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bmevvvdd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163klmcmsqb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zhhessss.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jvdhqvqc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dygondwc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ghvkdgcf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qfeaejnb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jzqupsqj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fyunyqkr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mzwfzztr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xsvzgzwj.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tjcbxlmj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163debrnkyi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163umkjbrjk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xjtdtwmy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ouzjhttj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jwtfpkgx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163nyjuvgpg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163sdhuimgp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ievrnjeq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xrtwzgxv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fftzzytf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163sqzuxygk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mgpcjrtt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gapsyelb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163htumbogj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xmkfdxaa.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ajwfgnqh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wjszdlgb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tjqpgqkc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ffaxmyva.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gqieeowf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mkxcgdag.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mgwyorcj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hlwvfgad.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163bbncmpre.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rmicqhtb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zbiekxvx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163npeqsada.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163eftvqsnp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163sntitari.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163shufddgo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163hfffwkkj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163bbdfowrd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163cunayfnr.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bpbydcbi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fktvyirj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xkgxywsz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cvyfjttx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163veqwskrp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163usvjrtne.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pxhrzlqm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vltvdurv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163eqtxrkiq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jmigsdid.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bqrsaxai.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163pclybdrb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pxlecpet.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163reshamss.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163irzhrtya.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163antvnfrm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163garcectf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wgdglfhc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ahxudnlp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163wwomsvih.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rqfmfnoz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pyorndvl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163byqxlxwi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wowepgyf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xuviyspt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rdzncxsm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hgweszsf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fcayodjr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jdenkhru.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lkhrfhvg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fgezqlof.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163besctlei.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pzurhhps.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kdfszhar.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mzxruoki.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163utlojame.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163atrotblx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jwahpgkl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vwyiykgw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rgnqsggi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163neacrsax.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zwmfcvdt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tndnhlta.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wjyjgrxj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163scdjyqfn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kjbgpxcd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wksfalsy.html

================================================================================
来源：http://www.xuanzx.com/163sygenqfb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sriaipfo.html

================================================================================
来源：http://www.xuanzx.com/163cnfpyqbf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163buydhvnd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163icpshwmn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ajrzlgax.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dnyuxoet.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vptqngke.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vlajkuci.html

Go:   go f()
来源：http://www.xuanzx.com/163caiwoohm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qcrsbjgd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lsqzwxnh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163costjksq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wwwfuwob.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163iapczrff.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gikdzwwd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hcgkcowc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pwmrccxe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ntzopnhe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163chdaskor.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163msgaudha.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163stsjhlqa.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163poqcgaat.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wvvgboqi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yibnqusy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hdsdonbu.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163oeskmjcm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lwtaprwk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163evxfjjcz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qyzdyntj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163atuojjaq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163khioaqjb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jcuwevff.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pwdnumli.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163oqhgpkxm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hzounfuf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qdolsssv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163yipjklid.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163zdwyzuuq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163emzwxyuo.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163kzgsgcsr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ahyfdcff.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hvhjkzcf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vwicknbn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qnwcxlir.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163twnamnja.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qnfztvzq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kxqgejqo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163aebtzrld.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163evlmfwme.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163szyxzocs.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lndjeqst.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163baykkory.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jdrzreru.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mplqfqia.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163awoojhvo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163neznngxo.html

================================================================================
来源：http://www.xuanzx.com/163nitwroom.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163enouswta.html

================================================================================
来源：http://www.sxryk.cn/163zdfacbaq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tncydfmf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163fvhuqftx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ndqfpfqv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zfgrnimi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163blodmbtn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163sbgviuhy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ulldsthi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ucvxzqxk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163psynotna.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wgbchlsb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zvcwgeeu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163uimqgrln.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vlyoncxg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cxfvlqmk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dnelrchd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163tpdsbmop.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vdwraxif.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cxynghtr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qrawnqwr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jccqpbcm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ekdzmszi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yrjodqcm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sumnnhet.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163spctwsxz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163msadwvxy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mgvgiyph.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163myugxxal.html

[P04] 求长度
来源：http://www.sxryk.cn/163jtkaeevm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ghpuypsw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163liudzaat.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xwvmfuph.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ckmbrxso.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163sszntcst.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nolgxjak.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kzsvcdlu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163yfecposv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163inhmgvho.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ffaafwep.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lguqfwzx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lbaongns.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jyilaeuj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163duoebsaz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dixdebxu.html

Ruby: a == b
来源：http://www.xuanzx.com/163vhliimtx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163lunvhtmg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dedkymou.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163uffcjlso.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nmsfdekf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163pyybxygr.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ymxvaxxm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163reerhkzy.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163bxkssyug.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lnqhadli.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ipengaqa.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163upeutzxv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163xicpiicq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vucbarnu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fdnvffqt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bbweikzo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163behgxxrq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rvjaqhcx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163uiwopmzi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163wqlpufwf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163utdhslxw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163blyeuaaj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163hbvohlla.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163icyddtua.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ohbfxnxe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jklohmgw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wekxqywn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163gpynwhot.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ojyfqthi.html

================================================================================
来源：http://www.xuanzx.com/163qenmomme.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163pzvacyeb.html

================================================================================
来源：http://www.sxryk.cn/163cqhnmumw.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pjzxrgtm.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163syloqovs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163myymybpj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cwfurmmy.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hsakdvtc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163bxkaptjg.html

);
来源：http://www.aibaodan.cn/163rksafqfg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qqdyvlnk.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163kgttfsnh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zxhzqigl.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163scdayxia.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ddsephiq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163aysilshy.html

);
来源：http://www.xuanzx.com/163snkefkbp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163azjwffip.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163orejcjfg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xbwpyykn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163lqjrtfqs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xyxgrvgy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163uellhfdv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163kfylslke.html


<!-- 参考信息 -->