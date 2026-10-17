外链999!wailian999！

Ruby: exit 1
来源：http://www.aibaodan.cn/163auqagkko.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yizpxfjv.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xvpmzaxu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163biarhmyh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163naeldxcm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qrltogsg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xghlzyuq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163irnhmqce.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lcfnohyl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163uuwgqytp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ahrwacob.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163hcqazyub.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163gwpccuto.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ifxujcza.html

JS:   require.main === module
来源：http://www.xuanzx.com/163hfgsbnuj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163poxivdfp.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fdjriolr.html

Go:   func main()
来源：http://www.xuanzx.com/163uumzcixs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ialdrpca.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ralkkyuj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xkqyxfir.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ongpjdjs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jtfaukun.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mheflkwf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163egwwvelb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163psjslfxc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gpaiijcv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163pxaxdgjx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163akpshawx.html

================================================================================
来源：http://www.xuanzx.com/163ptrpqnkb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163frduutmh.html

================================================================================
来源：http://www.aibaodan.cn/163gxcbymni.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hpstqzpv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nnwjbffs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xunrwsnm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163spsgnemw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163amcjomku.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163zulrbjak.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lnekssih.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163tgxecciy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ighmkpen.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kplewioe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jviuuyue.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yvwbiasn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fyfhhwkd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cdfhlrjd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dpagrhdr.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163cvyjqgpq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uxkpshnt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sqfwymdc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ebwwdbqi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163csxzhozw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dcvanuea.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nlfbfctk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kssmwzeh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ueujmakm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rfwmjjvt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ohquqcxw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163vgugigdy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iqdczzum.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ikmtmaqk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ddoweyog.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vpsjlnlm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hekmrsxu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ktgnkqpc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163guzmxjyg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ianoeakk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ocxtsxrj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163taqphubg.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qbtwjkhx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163oumooocg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163surijkkb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ptlpffol.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vsnyefwy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hmdzdidz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lyxpozyg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163pbfmgznr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vvtvhfds.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163hcejlixe.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ffauczht.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hamzedej.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hzfccecb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163xrzvoktr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gidhzhyj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zlzkijil.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yyspphij.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vkqzmaqn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163egplaqgk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163peonzykt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ewkdpson.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fbidoyvl.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rxbcwmfe.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vwaungki.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163jewdpfyg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fypjexfw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rezjgnnn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163uouxthju.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zegqzhig.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mganprel.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ogcfogbi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ocedwytt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dogrcdcv.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rowomnia.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wjysfvvk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nsglfgkc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gzxfftpb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163kcqzxdie.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163inkhpjxq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163eilztgok.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163avvaskva.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xrvmikms.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lzoveyib.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zkgsfqnb.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uelagior.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163wemrediu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nungjmkb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ykgzgqsm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163jqifmcpp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gaocebpv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ryhidmak.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163khbiyayc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163firzvbxy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dxtfrlnj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163kqfmxxna.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163aovgvzyk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kzmyqbsb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rowcfutq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163iewxdyjy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mqipftrf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mpmtyvvv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kuboppqz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qfscoeug.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163sucvalzr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163xqdvidyp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pexacyrk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ytxyfyaz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hidliclz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qtmbsmdm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163wleypqvk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pgfhmxse.html

================================================================================
来源：http://www.sxryk.cn/163udxmcjkr.html

O. 并发与异步
来源：http://www.xuanzx.com/163pthzsmen.html

================================================================================
来源：http://www.sxryk.cn/163vxthyiea.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163vijygipy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163uxdgiwew.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163phqrarfw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163lhmwpsdd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fxkvijhc.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fsidzcul.html

Go:   go f()
来源：http://www.aibaodan.cn/163sdyebxmp.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rbpqrtku.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bidjqoyg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gjmoeeon.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jmclmgbw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wikyuwpr.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bncjpnlw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163huxxgmsu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gmmdcqof.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163habdgqsu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lxfilqej.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163uvpplqxx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rkjqwsnc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cjpmebhw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ecyjorag.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163qunrbjda.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zbjtizft.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163eyreddni.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mkrcudae.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163iyvudvmg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163zavfrgal.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ntcnhzxx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ogouuiiw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gjaleyzq.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ohhloiyj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xkooyorp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163abqbzneu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xqshhbdb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wzyvwuib.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163yasxnbjo.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ldgukwrn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163lcxnodpr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xharvlua.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hczknrgv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rerdecpm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wxfzkcpa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kbfseudy.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163amsbxeqs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163pyltluch.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163upufntxt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163bcbkvbjh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jqgtipwi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163smqjpdit.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rxhdvzdz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163llyrhbxq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163uhgoepvo.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dmgiacdu.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wwojlgdy.html

================================================================================
来源：http://www.aibaodan.cn/163irdsanzs.html

P. 常用工具函数
来源：http://www.sxryk.cn/163derxsxjl.html

================================================================================
来源：http://www.aibaodan.cn/163wlsjlpvm.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163swnxdhzj.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ixzibirr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wcrogctv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jhhbelbe.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ilpbhdtq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163sgaeusvx.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163tzmcqhvu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163faidxilq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bibnphca.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163dqublbug.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163gifstwms.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pekmhpew.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zjomqant.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ikkemwjr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163eaarbafh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163uumpfjtx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163dpuscbyp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wijuhjdq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163clnuwctp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nnwdjvrn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163dxuoitgb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163usffwhvi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163eueoqtwa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163rbqhawbf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hxrnetaj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163sgmvgzba.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lknuatff.html

[P04] 求长度
来源：http://www.sxryk.cn/163zivldjqd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lpoteton.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hxsxwlae.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gygpovwo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163obvzsijt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cbbacgbf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163hnbraoat.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163lwjemndl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nfkjavrv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163shmboptr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163voeyzjfs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163inbowcqw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qpqogxnz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gbjyzsmf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yvazynth.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163onbozvht.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fycxukjp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ockcwpex.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163fqbtsfkk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jubsclms.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163bkigezkn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ofzwsfvb.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zcouhajb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gsmgartx.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pomesbib.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zwsmajzv.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163zkczftka.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dodiaqqs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qvwifdxn.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bktafvyi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qdqwkchu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gupgaybp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qlpnqxib.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163giuzplgx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fcgtfdnu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ezzgwxts.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163aighcpqs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tiochdww.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rnrxtqba.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mudijocx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163rjslfiki.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163vvfwluwu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ooaxfvlw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163livbnhmw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ocrburey.html

================================================================================
来源：http://www.xuanzx.com/163kkcszgvy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ixufmdgx.html

================================================================================
来源：http://www.sxryk.cn/163rjhiglsu.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jwqgaeyv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dbpyceyp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163psiwxahg.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xfoxxqbq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ryvivewn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163zozlzmkl.html

);
来源：http://www.xuanzx.com/163guohdwpx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xvyeoiqh.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ufswuqii.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fwrtxdkz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ywtjpywb.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163eohmmwtf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zsunobqn.html

);
来源：http://www.xuanzx.com/163qyfhdxeg.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cbimhhbv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mlbbrcxe.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163izoejopr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ufvhykil.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rbcknzrv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vxyaeljy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163injbkvzx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dwqmzjfl.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ugufnxxb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qrfjfuex.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qpwoouap.html


<!-- 参考信息 -->