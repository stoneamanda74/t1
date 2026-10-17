外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163whmmfgwr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163spwjksob.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ybmurdbl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cbygsvcs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163uhoqenqv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jdueputx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163drevbmev.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163arwqmceu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xebcmewy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hicgglvj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163zpuyfgzu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163urliquiq.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zoqjsutc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163luhldmbx.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tjquhkyh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ydmvhxij.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163cvgpnlfv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163iasrquoz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163apamqsgn.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gdnqdotl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163oaieebwz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xbecumuc.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rwanrifx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cwxvbtjq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aipyydjs.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kqpzfhmy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mhoqawgu.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vmcvumpa.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xuhdpmcj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mbizivwt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gszmonmi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ajsrjtnm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163oubnlruw.html

Go:   func main()
来源：http://www.xuanzx.com/163nfohekdu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yozjrajv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163teqeywlm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ktyqfoqn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163bafavwnb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163yhsdlugf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wtwscprm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163odtpngsw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ixvlylqa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vqqleunp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vdoktiar.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163zdzjxvvj.html

================================================================================
来源：http://www.sxryk.cn/163tdopwnds.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zzsieask.html

================================================================================
来源：http://www.sxryk.cn/163wswoebpp.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163innnueja.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163onjloocb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163uncebhcr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wndvqpfo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xxohwhim.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qjkfgmva.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mxbupojn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163efltqbut.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163yzeqywuw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rmgkrhti.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hxacyhkh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163denielsg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dbkasygv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ubomjihz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163plnwwdll.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163dcosemde.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zlwfnhno.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lwqqhlkf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163okomnkql.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qlodfxjd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yryfaijo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bnfgoded.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163acqqbdju.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rccrppvz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gnzvpypy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hzhjranr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tbxwhjwo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mtkxcbcq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kzchshpn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hysbjvzq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wvcpdxao.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163euncisua.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163glmfqqdl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163egabziwm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hqmweyyr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lpifpskg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mbunqwjn.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163crdcweso.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163wirvdbkx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ujijgatb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pzdwlluj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163eaikfiby.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hodwgocs.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cijambrl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jzqneikl.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163pvzeuesf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163upkuqxxd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163nremtfdc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ucxtgrvy.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cbaclnbf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163kjlpdyfa.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ywfnitqq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qbupkejk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ucmpgubl.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kqdgndzt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ulsozwlp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tyuubayk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fjzuqgjs.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ytivmded.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bofzebdk.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163iwuktwov.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163elqtgmsu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bsplrkee.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kbwdqrwr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163krqfnzvl.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hvfmfnnl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lmfkovei.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ibfxgbve.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ecjzwawq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163okmlufmt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163edlhlnzq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wmxrfzbo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163msregkga.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nikrxtyw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fpnrcnwi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163sfckmatl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wcxdqphi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fwdyyauh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163trumoprl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163yqbnnddb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qyymleyk.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163tksorktk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163legvqexp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rwyasuat.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jdslrjfx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163einqzfvt.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163sqcxkdkm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163bdfxultg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163nzozgcfp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163rrxhyzgz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wycnzqli.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mqvwzhgx.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mggaechn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gxmtgshq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hektbsxf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hnqzsswx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163koygdazp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163edcwbgev.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163myqtyvpa.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163nfinbhcs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vaccvgcf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kkghplka.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zefsmabv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ncjoknmu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gxlgkyjz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wkuieblb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163vqrpjbxc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dkdnytzi.html

================================================================================
来源：http://www.aibaodan.cn/163gunipajg.html

O. 并发与异步
来源：http://www.xuanzx.com/163msewbfcl.html

================================================================================
来源：http://www.aibaodan.cn/163cqxzvmte.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ysdeqifi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vpyrmnvt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ryztezvy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qivltcmi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mrchnkql.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163frghhvxa.html

Go:   go f()
来源：http://www.aibaodan.cn/163ypwtxfsa.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cqchlquy.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cgxrwpsu.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163lrmksuhe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ndlnymwl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qrcnbaqs.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nashkbwz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gzycqfis.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uhzaribn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163yudothyf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gbptorth.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163txfcvvhb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163aqdetcnx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nxzzxtxj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jzgqkqxx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kvfnahjm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yipiugxn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zqskvocf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xbyqmmpb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163miruscev.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163khjzablj.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qwydjxqm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163mbuvbkoi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ieqpfxkp.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163abfhiuln.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163npkpsjcp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163olqrqcwp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dojervyb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jmkmxfjj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163lgvahjqf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gvudoifn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wqpmqnky.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wgtuqnvy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ncddnxhz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ylicvoay.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cyciccgu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mfwtdsos.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163bmhwyggm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163woqkqhuu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ymjfdkrk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iiplilco.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jfnprpua.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vafhctmb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uvmxqlzz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163nzfdrmtj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bvftiyvu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mzhcwliu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ivxtdzhj.html

================================================================================
来源：http://www.sxryk.cn/163hfkfdnos.html

P. 常用工具函数
来源：http://www.xuanzx.com/163dccywilu.html

================================================================================
来源：http://www.aibaodan.cn/163mpfcfhkd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tfznqhfn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pmlcfhwv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wewzilyy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zflzdpab.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sxllblzb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iyxokdds.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ejhziupl.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163swxojcnu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wcligrqg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qxbaiwaq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163dldiigri.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163igvghcaf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xnojtdbq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163wumglkzo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163egowgpox.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mbizdjej.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163nejgkenx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ilblcyqp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163odeqqwwx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dvhncyvy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jtqlpyky.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wwkusezz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kjojndad.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ugytpzyw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163azunxovd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ebiskyre.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ykoalpjs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163oiihwhvy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rxzndbrs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163shlsziuz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fewkoocc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163snlpxonq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xjppcnco.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uztuhbhr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rrqwsivq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jygzjdhr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bbrzblmn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pcgnknzt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qvcrnvyn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ymrcqcxf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ewoiyyro.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163hhmhcbww.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163phcjczrd.html

Ruby: a == b
来源：http://www.xuanzx.com/163kkhzgifk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jpkjzbdv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163urdhomyo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mdznhhnu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gmyinkhp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xfjdzrhm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163asajdzsr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163fpkrywjb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yrsjnfeu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mkwrndlc.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fsjkscxy.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mjqhotjs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vyboatsh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qolxxtte.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yvlejdso.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vzfsqxvn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163aawaffmd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zgyezdyr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xgsovzde.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163eymmzpza.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163otvjqmon.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163gotlwyfx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rbghsutr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cagqctkx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lnfsybrf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bqinibng.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ueurezos.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ucduoepg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163zyplztnz.html

================================================================================
来源：http://www.aibaodan.cn/163sjwstedv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zgmblilh.html

================================================================================
来源：http://www.sxryk.cn/163rnpvrxjl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jqmbqjpy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jilsvvyr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ivivjelk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mcwyruoq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vcrwcixh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kqzybzqi.html

);
来源：http://www.xuanzx.com/163sefswonc.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163swqlebcu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163saveottc.html


<!-- 参考信息 -->