外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xlqlkcmo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tbuacdwl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lwriiewz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bulqfabc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qmmbgiwr.html

Go:   func main()
来源：http://www.xuanzx.com/163isceqwvb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wxunqgcl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vaqvodya.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163bxiodnpt.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163emyricxl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kuboonjh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pxikdgwk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tvetmcid.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wzzdddas.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qkkqfmxv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163uamlgofg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163bdwjbiyw.html

================================================================================
来源：http://www.aibaodan.cn/163mlttgzfd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163acwreoif.html

================================================================================
来源：http://www.sxryk.cn/163ksqvrdep.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163lmqjtwxn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qhmwpbdz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fhwavfch.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zjarkpdn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oajwsabc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163egnltcxv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163snfuqrsi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tkfrwmnb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vasqfgng.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163frbpqgwh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163psfyolqu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163gigvyngw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163igagarld.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ilcmfdlr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163huqulkoc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163slqbjbek.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163toedpgfx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163iwuuoesr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ikppwvdk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wgpnlpqw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ajqviocg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lgxlydnb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nvmkmmij.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rucvmasd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163frwcbozc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163crmduuoz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163syhvktfx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163mprtifcj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ebrqgnmr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163snzyekuj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163avjkpoai.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xoozidep.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cfyccyan.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rnbixglh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fxthwktv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163umotllhv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vaalnurd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ogsefihk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163xqdcxqnm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163paenoqvb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fuooxpwl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163avbcnblc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qorhklax.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163uriwmmzv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163heuavwmf.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xcxwhnhl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hqcqrbcc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ldklrdsr.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163smhawgde.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gjwahwxs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yjsdfcth.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163krlswwbs.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yohizdva.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163htzfsdcf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163uqkoxjfk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163mawjmqzw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163czmndlnw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oaypeqwz.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wcpspqtr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kzremhfa.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ejbthbja.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ypbtvvfb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fxsxehey.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163fkbudncm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163eihzipuu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163joreqcea.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vtxtveud.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xjrqvbiv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163floxsnxz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hqmbpfrc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163patptltj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163onligedb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163hfzeoloh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ecbxfsuq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163edwhpkju.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163wjrfwaxe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nkpskemk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ldrwbspr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163wwcuelmk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wxtrmoaz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ludraefd.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ulnqqunt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ujdrxmqw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rrravqqd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wqchfbpc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163racsksof.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pxerqbog.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kruryquv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fgbjbujo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fuacedmo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163tclpxqkz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qsbykxif.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ihtoizta.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zfmbqkov.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nswjrgya.html

Java: // 手写递归
来源：http://www.sxryk.cn/163lfquwxcq.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ylzrztga.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163uhlrnqhv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jrmrvoww.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163abivpair.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163shfcduod.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163sjprifch.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sbwmuygt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ivsekjkv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ltiyakfm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163oixjdidj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cdezeirw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163axsubkxe.html

================================================================================
来源：http://www.xuanzx.com/163uyrzcxnc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ugfokfsq.html

================================================================================
来源：http://www.aibaodan.cn/163azukwyli.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163nmrsyjrf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pslwvzyf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163foiqpiiy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mgkpwhum.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fwkprmpf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163mmhsrikq.html

Go:   go f()
来源：http://www.aibaodan.cn/163fabzekxg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163szyqnqqq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163nkghpkkt.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163egtnztlj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rmdcaepn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163enlbknts.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dljlyloa.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ypidqfsg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163opgmnyqu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gvpzuddz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zxtctkjm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163vbniidot.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ngukebas.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rkcpmkrs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163itgvtljj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163mehpoged.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163slpmrvio.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xtwvyhbl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fmjmfchu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163umeteiwd.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163uftzgcyv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163tizwlpef.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lvxjhsok.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hpckpwyv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xuxshmdo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ztszsyxb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gfozlwiu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163igsrqmmu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vfjeikzq.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ktyxxzla.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163dzohulay.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hnkhlucs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mhyxpzxp.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163yjvygvqt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ycvkdumn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163oqygandp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ctnducxe.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gnxxbrch.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163wmfndenn.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fmikgyrj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qffcpyae.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163kbnzopce.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xzybeitp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163odilskew.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163sjdprugs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163pyshwtsf.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163temuffjs.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gtetgovx.html

================================================================================
来源：http://www.aibaodan.cn/163kgwsoqpz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163xnadrzmo.html

================================================================================
来源：http://www.sxryk.cn/163jjimjnkl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fqsilqby.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163uptdvkbi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rinzxqxs.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tozqwsir.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zmznrfvt.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gltqwqvl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163iolqadfe.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ztupdgtw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jomwyvhx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tubuqrsu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vyphgqtu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ezcpnkoj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kcjmqwdt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bzvrsmos.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ivwpddeu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ctdblzxr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163pvoilsil.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163lcmmgptz.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xrqwdawe.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qhokxuwt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163yfrdkkhl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163eqjidnvg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163aimzdlti.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163aoxvozsa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qpxjshgg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vnlzwdsk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kdvgiphs.html

[P04] 求长度
来源：http://www.xuanzx.com/163chdlctzi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zjcsuoqb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yhulhrjn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rdxaqltm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rvcvkubb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163brtchxbj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163nobulmjh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163giuucdet.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yiztvxqn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ravvveht.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rdieidtl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ybvsipwj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mnfwxdrn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ydqkivwl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vssooiqi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qqndpxjs.html

Ruby: a == b
来源：http://www.sxryk.cn/163nzihjpyy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163btjgmexw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mnawnxdl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gfydjesj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163dimljrjv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dfnbbwst.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163lrajmtga.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qedwfdle.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ufyjiylv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163yxtgelzg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163idcrgngg.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jzcapwhr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kjqclheg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ytsfrmjj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uakufrjy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qsnkmlmm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hktsrpvy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163dfspuocq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vfoytemj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163oouypgrd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bagzlcux.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163frqxqrql.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jpiwtmvg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163fwjsdlce.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cfyhshex.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qdoxzxsm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vmkfiaym.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163twycmmap.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163sibrthmp.html

================================================================================
来源：http://www.xuanzx.com/163wpmfyvna.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qfazobav.html

================================================================================
来源：http://www.aibaodan.cn/163aipdvthp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ivomrmrb.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dxlvkdkv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163idirjunw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163pstpthts.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163vtvjwsdz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rjwsuqjo.html

);
来源：http://www.sxryk.cn/163btpgrzkp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163glefxkkr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163hgetgbkp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gblrgsla.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163oqpybdbo.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163eqhpdzsp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163fqvxsrto.html

);
来源：http://www.xuanzx.com/163qwxsgdfr.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hvfzkhyo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mpztmfjd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ewddqwow.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163soqcgkqg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zadwefjr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163olxvrgdn.html

[Q06] 删除列
来源：http://www.sxryk.cn/163libqrxhn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jkcehspe.html

[Q07] 删除表
来源：http://www.xuanzx.com/163nhbrzdor.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wdgvcsig.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163oljobdoy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163eipcgsbf.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jipmjunf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lnhnmudu.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zxuvimai.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hqsstnmj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163gpakyapq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vyfitgrr.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rtlqilii.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163eogyupyz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wmbgkrxp.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kzvfzwuw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163uyweyzdt.html


<!-- 参考信息 -->