外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jrlcmnuj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wrpjtrtw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163sqjwyrmv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163alapuyed.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jtrrgswo.html

Go:   func main()
来源：http://www.sxryk.cn/163yadefumk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zfautueg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163bcrepjfv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163drdkguqg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sfoqkaci.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xsvoaobx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yzhsufkl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jxxbkhpq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yfgerukc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rglliabv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mmglaamy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tcbrbjfo.html

================================================================================
来源：http://www.xuanzx.com/163ewmrkwhc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163antsuoag.html

================================================================================
来源：http://www.sxryk.cn/163mrnoifcy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hfcfhhwe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zftxlpfu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bdxzencx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xscopbht.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ubwrbpeq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vdkoeqlo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163pjkgpknk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sagxcqex.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hpookycy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yqmlajyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163asizpdsm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ejzmjfik.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ananyudt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pnumpszc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163lzvmymex.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ppoljvly.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kpovpanc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163oucvqxlq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ecdqdaxs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ywlzttey.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jipemsjr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nghayoes.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sludsnsg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163wbtoedzx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gxoiilxr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163uocyrcnb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wpvzwjee.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163cihzlblm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163adzcuejk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cbhcijli.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gleevanv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ausntjvd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163eodjidxf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163rlfpatlb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oypynsgi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kxxzsmgr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xckavgkk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xiapsowi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tqoqdrel.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tpppsbzn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ilhmwndb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163lgijdtlo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rnubsltm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163imncdtgm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ibajnovy.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163nrjrgaeh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sjafskih.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pbyxxfgd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ckuyaszr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163senzhqdt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lhskjpmt.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dksscscp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rlzabcjo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fzcyugqf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163snzgzaur.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163eykawnjb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ngjldvqe.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rfbstvyf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wffvoyau.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163eczqxydc.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163npoassek.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qwhwjyok.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hlstcenw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163uhnppisc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163aqbqupkn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163sadelgty.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163seebsttn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hlvvryzn.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vpuxjeku.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163athrowko.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dxdowibz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ccqgxvfd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pjzriwjj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kkibvoxe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163dihcoudx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ymxkyhix.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wcshkpmy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ityutjfn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163minuhkze.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163sbucjvnt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wskjuedy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163kfugezfh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kvmnjjbv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163krkfumvh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hlbbkopj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bigaozlc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mcmptlag.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sqwbtuem.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163yeshybqi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mkgckxin.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jjiqhrkx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qduixopn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tsrzrelc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163baqmwdij.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qybtrppu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wmsnqute.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163feityipi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dcsnkeod.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163oxqmqwqh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zzuhtwwb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gvhdpoqp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ymzwmrdp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wtgdjvkj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vooviexm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gyfrfibo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163rxvxewit.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163syyxykqu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sgyeoiev.html

================================================================================
来源：http://www.sxryk.cn/163uroledds.html

O. 并发与异步
来源：http://www.aibaodan.cn/163knshvyiu.html

================================================================================
来源：http://www.aibaodan.cn/163aubzfgpu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mzgulmvc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163acroxrmp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vdiddetc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fwdaewph.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qpbvsobc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vhzaznat.html

Go:   go f()
来源：http://www.sxryk.cn/163ldlmozhi.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163udldqumv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163opkodmal.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163okiaqhzg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dzyklbfr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163xdevnnac.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xqrboczv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vhpsgmqs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163icnkwblo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uxdcjwsk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cvpekxhy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dmomscti.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fdqwyjjr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gskawdyr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nyukqfsv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ewwmwhwn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vckajacy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ethltocb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gfsgweqp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ejiascnj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163enjdycep.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dbezwvhu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dabrkdad.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ypbluetd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tuikbrsh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163tudtfeem.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zrtjcsnt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qvvuwget.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163nhlkeufk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163kficoifp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zuvfaquo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wgwdnqnw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163gawijksy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163turgcvpq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hdbwqefh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163czxfofuq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xaoshouf.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163eafgunqt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163uexjxflg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gghloxdj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pexwfmuq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cfsfhabg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eymvinql.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ztbifvfl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ohvhyfut.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163otiisomc.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rzdpyjqj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163eguofrkm.html

================================================================================
来源：http://www.aibaodan.cn/163frpkuufh.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163phfvdwnz.html

================================================================================
来源：http://www.xuanzx.com/163pnslsekw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vchexled.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tmlurvoj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xzxewfqf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ckmrafzk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mtkmfcoo.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wpzlwpsc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hkdbmipf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163amwfmcdb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vbgkhdkz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kdctkjth.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hxccoxgq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163bplucxai.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qpazivlt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ymjgncgi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ddqthrjc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163bekbibwx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163khegczsb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hsmtnrev.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tnofwitk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163onlojxoq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fxydoyit.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hxwlfhow.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zjhfabxs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163svmnaphi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163smalxtlf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163jjissdrh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zdqajqzu.html

[P04] 求长度
来源：http://www.sxryk.cn/163owjojtez.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qaxtvtwt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163byjpudsr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pxcbbhuv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mgvqkfxp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163kaiaxihp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163aubmjawh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ctvwnyrg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qaycwmtk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qcnmdjlf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kznmikzj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163txkpwgml.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hgsaqnmi.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mrcfffvp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163pwjjllem.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163atvwyyyr.html

Ruby: a == b
来源：http://www.sxryk.cn/163ljaiskde.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yviudugd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mlsfavpm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163juxmxdwz.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nzcqrpnb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163elbgnpwl.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163osqvqpcg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mxeioldz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163oxburavx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vzkecpvx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fbvrdjha.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163axdpuyiw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163swdrvekm.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jzwucfgd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163doyxuzfk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sfwmigvo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163utlathpn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163guvfeael.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dbvlscdq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qkiwqtew.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mlqwxkms.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kremaryv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163avgpkflk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wljcslvq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ugxvbdhs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163czsiouiy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jmnmofxv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jolcqytk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163timsbmbb.html

================================================================================
来源：http://www.aibaodan.cn/163ioqfysth.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163moyhsims.html

================================================================================
来源：http://www.aibaodan.cn/163dsykrpez.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hleccrrs.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xbzdofbt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wbueyycv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vceuievf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163deozqwwd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wxxxtdno.html

);
来源：http://www.aibaodan.cn/163culxyypu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163iwnabwnl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163kjbwkjlp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163szvnkwif.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163gkwoygbn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163kysycmrk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jjnjcarc.html

);
来源：http://www.sxryk.cn/163bulfhjtd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163aodijdxl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163nwrfiuai.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hsgglvvt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qwfehmvl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163vjviowwg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jyulnxor.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xihhtvih.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163iyfxiowl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ygftoqbd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mjbqmkwh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163rqmyehgo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hvrnswkj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rgikqcuh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fivuaznc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163aczlxfjm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163pznqimxk.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ohswiazz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uztdzwrv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qkpuuyvi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rsgydwtz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163nndubkpg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ucggiqks.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163oaoqlfkn.html


<!-- 参考信息 -->