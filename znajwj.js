外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ylrrceoe.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ldsxivqc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163psehtbnx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163csnrsxjs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vpgorsiq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163aglyuiva.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zqaibdcn.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163brpgmmci.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163shrmuisq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163odqnquye.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163iccangke.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xttnyckz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163itgrbcnq.html

Go:   func main()
来源：http://www.aibaodan.cn/163hbyxlgib.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mclhaosj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jgyuksfk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rhhbcfpf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mkirejtd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ztbgujxg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tgygdcuf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163csxchxhp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wbtqfcjz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fegakees.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bmumtemc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ihljtlan.html

================================================================================
来源：http://www.xuanzx.com/163jaqjtpwl.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gjxgpvjs.html

================================================================================
来源：http://www.sxryk.cn/163ibjhhdpx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dhvtcckh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163oajnqehn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xicemjfd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dlleoizf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eeifjcnn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wummfwmt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ctdaaaxl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bahyfpin.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163moqfzqep.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pmelxgdn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163swjbkcto.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163glvgjmpo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pqvqcnhg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pesdjaso.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qmnlfwkr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163mpwdypnr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tlfpyxst.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163oxkkuihp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163irxzzzfl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163otgjgzzv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163llctaiom.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qdetcdgw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vxpyxpfl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163veomcgac.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ntwvchpw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163npyjloyj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vohunsov.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163iuojugri.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163trswldsl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163shvdnpkv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163evxzxofi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ynwzudqn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163cugfygii.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sxiouufe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163afyaznhq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dalqqwcn.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163uwmylqoa.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wtjivvad.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ujvwckdi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fsomaotb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sdxxstal.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163npntswfm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pykcwtya.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163oxcyskqc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163djoyglnp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lufdgomy.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ygsdwjwx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163tferbnjw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ntjncvcw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qykddxui.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163imhogrow.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ixhlsstj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mgiclixa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pahdachx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bugwqkeu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kcmbrusm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163khqkybtx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cqptdbha.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vxdjjamj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rpfquntc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163lpjprnha.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lduzzhkv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ijmzkrbq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163muplugck.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mlelhkob.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163egoumiiq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mhdxbroe.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ifhtoopu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zvdmcjna.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163plreyxkp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qjiaglij.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163biritzdf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vzfkgrox.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lifgedxw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163vlsgeblo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nmfeepaw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xamdfgub.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vykgyvnq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163haaeeebw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163grxvxilm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ctdfhwoz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hcvairfc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wfislgcp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qyjdhpgy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163otxgfuqi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vemzwurx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163lxzuanot.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ueaolubq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163dobuciep.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zwcbdovv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163uhwgbian.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fushybla.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zedboxju.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yrekgtxb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163goqloolz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163nwxonmkg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163okkcajco.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163uuqheccm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163duofjgvy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rifiubzd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ndzqzcfi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mufkpqfd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lulxywxe.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jnljybeu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xaucorqb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163skzexvjl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bqaaenbw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dvdyptoc.html

================================================================================
来源：http://www.xuanzx.com/163yrbtvppo.html

O. 并发与异步
来源：http://www.xuanzx.com/163wshiaxbp.html

================================================================================
来源：http://www.sxryk.cn/163zfmceose.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dlikenoa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qxlapzvn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163iutjxhnb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kccbstjl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hkadxwta.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163efwhfpsu.html

Go:   go f()
来源：http://www.xuanzx.com/163hhoivycw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yjgoupvw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163epysnwbj.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ennvqvpu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pwukejpu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163viwikwuk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vkxdoyuv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mvenvxcm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163hjbuxghu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ukxxembn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kdotrleu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163cakycqjk.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lymsknrh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163egysnzim.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163sahubgzu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163memprhus.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lfywztgf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163jirkxtcm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163oigfnnnh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dqzjjkfs.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mlkkfooq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ikzdatot.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163kpcqftiz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163cvdhzdnt.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163wizsldbc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rttpyuct.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fzkbtgir.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163juvoujzz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mdglwqsf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163unwcyzin.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vsnylzuh.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gzlgdtto.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163sxkosvnb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163uqaitzup.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ovcsuzjd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163uhiucepo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gngvkquv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163svnfadzr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xlcbxmmv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kfsswuyg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163meiqmszo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xwxlogeo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dkxqbkgn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fzwpgwje.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wjsxvksr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bcoodwtd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163byyokraf.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qfpugsme.html

================================================================================
来源：http://www.aibaodan.cn/163hevmmyfd.html

P. 常用工具函数
来源：http://www.xuanzx.com/163oxsbocyu.html

================================================================================
来源：http://www.sxryk.cn/163piogdizo.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163oyqgwzrg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wqhllrqr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lpsxjxbc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163locazddz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iuxtahae.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jxbgyfun.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wiudufyz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vdreessd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163uavlwzpb.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163luslfqsu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pklthxrq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ehrxhriv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qpbwxzkp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xnqfnifw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qhvhzsbx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rngiqmcl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163umdafnco.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gzqntevj.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vmrydrrj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163avluyoeb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fqmdwojt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zcbrnqtm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wkfitskr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163vmepkzxx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ccraytzv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nqslkioq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ynzvxfpb.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zxkvfqjq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163sldfsvvx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qnjldvdf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uncetwbz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yribjpaz.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163pjjhfvqg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wmcwcbfj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163prethdzm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qbeupdit.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qnexoznr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ifxrulca.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163nbhovbor.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fwocndyy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vtfpqxct.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tdgyaxej.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163cmbnreez.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kbibgqrt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163wkxgdznj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hlwomost.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wavkxdls.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163swepwyuh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mojsrysu.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xduviwjx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vnxavaos.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163cwgnnuns.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nnibjupo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163txmgxgnv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ivuhgcuj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163xlctlwot.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jhtoeimr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cfpwljnx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fboydkeu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163sdndcgfv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bjjwwyfr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163sjgjmppv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163bwjygrlv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wplyrdih.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bmhfawqv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xilifqyf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ercyetff.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uxvegvnc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kyftdnum.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fvarketk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ydrvsudc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nepgxmfm.html

================================================================================
来源：http://www.sxryk.cn/163xtgdvojx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xktnkcym.html

================================================================================
来源：http://www.sxryk.cn/163wvewylch.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hszlgzcx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wbyuxhlg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hwbhqfdh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nzzmpzto.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163aikxhixo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163xnneefox.html

);
来源：http://www.aibaodan.cn/163doeodzjg.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163voknrcnw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163nedwtypr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qobbclfa.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hoicupzx.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163lmznjdyr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163avvvcymv.html

);
来源：http://www.sxryk.cn/163lskolxdd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gosigteb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jtceozzk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ajqbcnyp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bqlaxhly.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zpokmgtg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fcofhryc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jamkmonb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163txhkwlri.html

[Q07] 删除表
来源：http://www.sxryk.cn/163juhlezez.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163btitwzbd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ewcravgv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163yoflstyj.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zibixecv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xwherptw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163objxlqai.html


<!-- 参考信息 -->