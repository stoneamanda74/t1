外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vexzqiym.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kldiatak.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163tzraahco.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163lfiurkxt.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xjmttrmd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qambewkc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yjwntdag.html

TS:   require.main === module
来源：http://www.xuanzx.com/163sbsyvnhb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163akrinenm.html

Go:   func main()
来源：http://www.xuanzx.com/163abuygxjb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163zkvnjfnt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lndpsltt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lodwctdl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163usbfxykc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163sbapizjj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uubnepsz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163khanfnnj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ooaijlet.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163yudyzsmm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163pldyjgqy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ayzecfyq.html

================================================================================
来源：http://www.aibaodan.cn/163enhfqmou.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dkughuch.html

================================================================================
来源：http://www.sxryk.cn/163epotjcwn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163opvyercy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163flayersb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163jfrokpft.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mxlytwlu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bhgvqndz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ixzdvzay.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163pdhnzjef.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163btzevxxs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163okpxatsq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163lnczkzcb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pnvgqllu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bsbmpuun.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zklzltqh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qdxxseaz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pzfqcxhs.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163fosfzkrr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kbieaumg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mulvdcst.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cebafobb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163twymdhzh.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ncjfhbtc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lykqyxmb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cfkwvfii.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fpiklswc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cogvauby.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163oftpuzar.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ggbdhdqf.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163laqavbmw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ootmfzef.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hhenblam.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mfmnurwk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163axxmlagv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bqeqtmvq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163danuvxji.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ncvusvss.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kjzopfon.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163erpqipvp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163uiidrqkb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hzjztakm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oslgdbxi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163prgviamo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163azyciphz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qzryhkik.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163mccknbfo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163oeaqttzc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163yknxflkq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163vdipwnhv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pcivqkwj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163asspfjjj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wmnmialx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bdddkhcs.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sneyrxwe.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163seveihac.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rkpjfnoo.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mhdctrel.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163cqnlqato.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rhnjxrfv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163janrlmig.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ptujnkrs.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hvqdwreb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nmaqzroj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xknyppau.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163onsimeet.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sptuhlso.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163khkfcjtq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dahvmiib.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wqscvyqa.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ryjnqbdj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163xxunklbs.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tzelvqlp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163riuvmldd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ozwevion.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163afpahrwy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163outwbaqh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rmnnmdzd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tuwntmbv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ocjtdtry.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163pmoibmqf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fjiysjew.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bqaewkyg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163uoxmuekt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163psdbfolt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gtlwqhov.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xvxegepk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bhrlaneb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ylkndvdr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163moleylqn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163qjibnfmn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163aptbuhyu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cosqkjam.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163iipxsxzk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dbndqcec.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fymdbahv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rgylajug.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xakgbkbv.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pxrueyia.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zmlmtgxs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gzjjwbxw.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lqapmxev.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ljxzvrzw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ucjbakyu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163smacsfyu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ulvtxqcc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163phnfqhqx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ogjmqnvf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163sahzhugg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ckrffiih.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yqqiabni.html

================================================================================
来源：http://www.sxryk.cn/163ryklvtxg.html

O. 并发与异步
来源：http://www.aibaodan.cn/163kdnlafsh.html

================================================================================
来源：http://www.sxryk.cn/163tvhcpnjr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mgotbycx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wvjhrawy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nnoibwtg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163shmtnbow.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sdrqdnos.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lfabgezr.html

Go:   go f()
来源：http://www.aibaodan.cn/163ixbymeeu.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nbesftbt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163sywdthnd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wltchsrx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mumsdjgm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wvysjmzm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jzsqpadq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sxvrxusu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kjfvojji.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mtdmbhsx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163qtbvbhkg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163yrnzuyxq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hvjirfqi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163nxjqlgir.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163upzgwzqm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xwavwaga.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163swwbtwpi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tqdrhltu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hdcydmid.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163muxggkgx.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qmzmuztq.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tylruslj.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zckwrhqe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163izicdvzq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jqtcsdka.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fmcnbuep.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zxjyncmo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ioeotjgo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ikvnlcqc.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vnmhseym.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163yhkofdcx.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ajdvsufw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163azdoeihj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zwseubjy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rxpbwmbk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kjfacqhu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vtsvywnm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163bdiftnyk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163prfbmwml.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163epdddbgt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qbdovuez.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qcnqwgse.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xsmktvqi.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zjdgttpc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pggxttmt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qqggckei.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163exgebpji.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163yudqnbyv.html

================================================================================
来源：http://www.aibaodan.cn/163xqgqwosz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163sravelgn.html

================================================================================
来源：http://www.aibaodan.cn/163xvilmrpz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163yvpjkhkl.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163yusryuov.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wjucgvim.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zqgkqfxa.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163isrklnen.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ieaeujmw.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jbfczuxk.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kqtcvvuu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lhvdhmmy.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pnjzkgar.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163neqmzjan.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163iorcsuft.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wcaskhro.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hzpqdxir.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163uwihgjhg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163pckavixb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163urcfkjia.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ypmhklan.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yyscqcip.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163uakwmphg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163zjremynt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163skhfazpc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rzlheyje.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163rsxgcxjb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163bekzqrdg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kzeifjjt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qwottuns.html

[P04] 求长度
来源：http://www.sxryk.cn/163xkkvqtkq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uhvuvbmy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163frxjfvrp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163flvvufup.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fdaknzhv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163mpgqfvze.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kcwjzavx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xsaxjngh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kstuuhlx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mhdbbtln.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163efzgjpmj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163istsvpzo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rjwxwgef.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yadrjmpr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ybndgbcr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ommzdoke.html

Ruby: a == b
来源：http://www.sxryk.cn/163spokhetq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wczuxjlb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163apuhxjru.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ggrngdro.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cqgyvchr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163qzzbujig.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yhoynzwp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163issacscy.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yqshjffu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fkxhpdkh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hjmxqnfj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dzbohyxb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fcvfiqua.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vyfkhvum.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lyfrkloi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163adbeqwbs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163yxmebaoj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tiybeveo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xabhyjyh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163krglzqhv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fuikdabk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163btukmdai.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ttnjpywi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kkdcctpm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163entalnvv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163arbtqyqx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fmwsmpfo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163enckgxvp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bttqouud.html

================================================================================
来源：http://www.xuanzx.com/163qhgiiino.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163rwpqeuxe.html

================================================================================
来源：http://www.sxryk.cn/163gljqkmdc.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fcmcghlx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163giksvbwe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xhflramr.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tkegfuqj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163aiiibnzp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163swvlqxvz.html

);
来源：http://www.sxryk.cn/163cwvvfztf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163oislsrmz.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163vwylbawp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qfagitjg.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wlnovnjb.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ruzlnggr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gkoyxdyg.html

);
来源：http://www.xuanzx.com/163sesrxqyz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ieubbyuj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ebjdkafg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rkdbrtyv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pytqekof.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uamrpkau.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jtluksth.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tfclokur.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163csqxtkzw.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zsermbab.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dfyvjvft.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163dqvjnofo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163cbzhhwzt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163szmgqndv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tuxednrq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bklbuwbu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163kskjtqmw.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dzomcpcp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ywfxyevq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163lagkiacm.html


<!-- 参考信息 -->