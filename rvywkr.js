外链999!wailian999！

JS:   process.exit(1)
来源：http://www.xuanzx.com/163kjolwzon.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ffgzwcao.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163tityliqa.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kzmroqil.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163puxarcgl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163chovkooa.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kwyzmdkz.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163njnfcooy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bqgtcsuo.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qrprotxz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qymdieae.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163doqqmdhq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nynqvouw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bncutzdf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rxtgjyzi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rhksozoe.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hhlfhdhq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kbjdvyrz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163pupvwkaf.html

TS:   require.main === module
来源：http://www.xuanzx.com/163sbbvmpza.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mapyfvul.html

Go:   func main()
来源：http://www.aibaodan.cn/163zdgeruxz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163asziwzzb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163phiujgfm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rouvenej.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xuhjsnbn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cbstjxjh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ypulgcod.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lpmogrfk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tpycopfk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wdmynxoe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jteqhbvr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163lwroyhbg.html

================================================================================
来源：http://www.xuanzx.com/163qgmqekat.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163feqerpdu.html

================================================================================
来源：http://www.sxryk.cn/163rybqvpfj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163lkakhaoo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163dswadwlw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nmeekfqn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163scdgybzs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xdispaha.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163viqjiwrs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nuelmfbb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163yadfzsif.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163coeyuaex.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xzstrerd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qaarmhwd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xatsnsxu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mmloxggy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ntjzppxp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nfagndpo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163wdxubbsq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eqfqrctt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163dzyhmqda.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fmmwbynh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163blteglle.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163foklstks.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fscqehle.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163exmmjzrn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xwbsxzav.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bueuqciv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vzhmgnxi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163dkpxuxsr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163azbdojzw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wfimnfpb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163kysmkbdj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nefsjakv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163evuezpan.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163upsnrgvs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xqxpxnls.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163alwatdtt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163sofxswtx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rhauwjjx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163apypnmkz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163yvrrsqvh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bdzpfkgl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wgwfqgel.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mnwcvbuk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163swiamgdy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xyyiafum.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ibqwlpzj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ljlvnkxn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163udhrhbxv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163byojfech.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hzvebhuh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163iziqqaer.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vnariwmx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dmpxvoik.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eyeowbhg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wwsejdpt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bnypbpja.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bocomkzh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vieqtbrr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rgsecnzc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jrsdoxcd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mymzqesi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cpfmsdhn.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mjeuseyy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163imgunfdw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xreawbhv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mtnnyutk.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sqbjwnap.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fctoliwm.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rbrcwayk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163cftcvfyj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vcyzpmix.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163szicyxxv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ojlddbtr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163giossyyp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dshjwphz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hsganlvz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vwghpbwi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nsqteaeg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hkafmbuz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gnhhftpz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jzqhjzun.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163uygootkg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jrmncxqe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pqqlvpdx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nkegtflw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wzusnuzi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lrcowsvu.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163nukkhvok.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163phdiovya.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ffyhvoqx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lnucrxrt.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gaysqgsg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163iyjmuunq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163lojxpnfn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jncmivdw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kusrdosc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kgauupmu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cbjwkzgo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kiuluych.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163faxikmtk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163asxfiduj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163deccrjur.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mtkawpwj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qyhsmmbs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ixcscwyt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ytcobxpz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163evpkxmhc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jcyjqllw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lnpuoibb.html

================================================================================
来源：http://www.aibaodan.cn/163pcnqyzks.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ezlmnqrc.html

================================================================================
来源：http://www.xuanzx.com/163pllsezhx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cwksuivt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fqkqncgi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gwlarcnz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lyduktwm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163egzmddou.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bcbyxhco.html

Go:   go f()
来源：http://www.xuanzx.com/163lrgwccgv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163apybgweu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163krvtnpns.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163svzdnnez.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qizgozkf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163szmhknzy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lizygvkg.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ytwoqmfc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fjofmsez.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fdidcnfg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zlqfftsu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163eerohysk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jxgemmtb.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163egngromg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fwywpfec.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rkvlqlhr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163djnthsny.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xjtsskdb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163oudegxvi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ukoowmqn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163iavlpsbj.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ywnzivni.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rjyfmzfq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163adgqrxcd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163wpmqepli.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163eybrgebk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163erjcmtgy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163cpexvcow.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dwstcdua.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lomdujgh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ivpilwya.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dfxchtkg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hxjrszkc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gwxkycoe.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pwsymcfa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163nrpjrjei.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163zavpjpww.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163eosytbsx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ensvuffb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jmlbdsoa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163adugrxec.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gdqcognh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163amexwtfe.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eoamjxdm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hsqqwach.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lmofjgyx.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qzaggzkt.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bycvuqat.html

================================================================================
来源：http://www.xuanzx.com/163ljsfnsmf.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lskvnaym.html

================================================================================
来源：http://www.sxryk.cn/163qtfmfmqf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xdrxjlsv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163cewcolxx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fbtsiahd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kaenxyjn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fhstlopp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163etdyvgqk.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hmcdgzku.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163yrxlgunk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mmogipis.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jmeoombm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ejsvnwfs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ijzqzwjc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gtunqxee.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ncvjinbv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zaycaaow.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nbmtslfs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ayvvexif.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mviiqljj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163bpwsnuor.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xkqdixxc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gndvvqea.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163aoxirdoi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163coludlyk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nztgwjmp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qurrirtw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163otiygdwn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163yxnhodvi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163prouubfj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163cpxjjjji.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xshmwpfb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nvidmjnl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163arvadbhj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lnbeeboc.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uplavwmc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xfktribt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ypjdebqf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163tiupgrlt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tbvsqmfc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ifmebdyj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wvlyphtf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yduzrmdf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fthkeysm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ozvpughp.html

Ruby: a == b
来源：http://www.sxryk.cn/163sblunhtv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163gxuomckt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ctunpgoh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163eibirtyd.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163savxwwvv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qffcnali.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zvwzynuu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qegsvfwf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163leurihzq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rfrzyxnl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163caqyqigr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163owdrcgcw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gqcutlqt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163hfjosumz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uqzgonnw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tiqowukh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163dluuzqrw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uzrcqprc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163afwqnzuc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163twpxhbsb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163obbsddhy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xxwdbktx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ihlscpwj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163upumbdsf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163uevajroa.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163uwpyvfvw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163chjdwdlb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163mxkwatzf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xfrvnllg.html

================================================================================
来源：http://www.aibaodan.cn/163fjgtyzpk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ihpyakdn.html

================================================================================
来源：http://www.xuanzx.com/163ynilumuw.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163cujyqhja.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zjwvyhui.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vkdfnafh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ltrqqczu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nlasneqx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ihzewfzt.html

);
来源：http://www.xuanzx.com/163jybqrvdw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163enkiebws.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cizujklm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mswfnegj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163auhduweg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163edwjntpl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rqfvjyyt.html

);
来源：http://www.aibaodan.cn/163bbkfzvuy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sbsmqeea.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vnnjislr.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163zjgmgpev.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163sckohdkp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163klolkerh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mahootyt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hgkbcpgf.html


<!-- 参考信息 -->