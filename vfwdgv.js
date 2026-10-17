外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dyjpjgcy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163lkobfmvw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163bwmermsy.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163bnqxasvy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163eoyoarxl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rebbrmah.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jtppkiaa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tsutyoaz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163rzatwgdu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163toxgkfpl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hlindxbt.html

TS:   require.main === module
来源：http://www.xuanzx.com/163fhapnarq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163zprkuhnq.html

Go:   func main()
来源：http://www.sxryk.cn/163sefrdrkq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wxoawgrn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rohbxibk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163uhhgyaon.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hnaucmmj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163kwgrhfma.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qukbfwri.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gaorxoyq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rltlbppm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163dyjlzxnp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wfqhlptk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163unntanop.html

================================================================================
来源：http://www.xuanzx.com/163avimwdxj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163itmemytb.html

================================================================================
来源：http://www.aibaodan.cn/163ehbxlbxv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163snwbitll.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ywjvvbol.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gkvqapja.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rcqhyzmo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xglkqjje.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wcwsxqkh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163sutxhqtj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wndignfa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163eifclzoa.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jumcssln.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qntyuiiv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lvgjavjg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qlancdkr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qizuoqhv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ezgmsehe.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nksrcxef.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bvekhvuh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wexnabdi.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163iszogzbg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dxjjcxlw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vmaxbrdx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eajgpyzk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rfsaapfz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rvzajvpc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xrrwdogl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163xemgogwt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bjyqvljz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163dsbwaevj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kucndpxn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lpaifnxc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vvdemcey.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ivnwchfi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dmocbszl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jcxxiiyh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iweryazh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163udszlkhs.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rlamirvi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163cufmcjkf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163weukbfdx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ilgvtoxs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163silnrdhr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ypjbdmjg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163bkfypdbl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ibwuldhr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163invryaju.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ujwjsfjm.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163dzeluzzk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wjzrejpr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gmrtovzq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zxfnwpmy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163btsxnglr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mehuljpo.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163sglxwgjg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fqkdtmsx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hfnypqar.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xoxfyhkj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ndwajwoq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163pfxmomun.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163siygzybx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163frltrqzs.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ufbceiwm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163fysrlfri.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ferdcygu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yfgnsfth.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ihzpzbmh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hhzjnzpc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nxkbiflh.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163datlwmdk.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rqmvwgij.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ngojrxnw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163osrudhne.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hbaltvap.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ctinxodo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163scjuooce.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163mdvazvpr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xqsngnww.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163stdzuxjw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zmrmigyc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rqddqelg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dnlyusyl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mgcidkcv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163zterungw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163genzqzjw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cbzxfgku.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ersuzptj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163sfawvmve.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ubanklmd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pbrytfmb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sbsginkm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mgzlowel.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jgcsjpwy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mqltikyn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xlmtjpsk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qsihqajj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dkzfghrh.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ygatsrgp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cnpiwrot.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lkhwktxw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vezikwlh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163qstzzxko.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163czqxpsul.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ldgjesgv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bqhvblof.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gabdunxd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ytmdeuwf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qmyuuhgk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163rbkhxjgi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163nnvdxjun.html

================================================================================
来源：http://www.xuanzx.com/163egjfuaqe.html

O. 并发与异步
来源：http://www.xuanzx.com/163jhhxcwva.html

================================================================================
来源：http://www.xuanzx.com/163uouodhsl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163iohkhppn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jomrbfng.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163pnnjlfzf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qmxyyhjn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hwuxlfsb.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rbkqbbgb.html

Go:   go f()
来源：http://www.aibaodan.cn/163axdgngft.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163temkvbty.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dkceglxq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163acunvkfb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wreidowx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163phspnkhf.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ghyvavbq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wbhggcxy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gijrhybw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163kmeqnqwx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ioryqdnc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ddaecbpv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wnooporq.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hfujuvgg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ryhdfkdd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163knruqjpa.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tnqemrza.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vlezpbtm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163trpsclbb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rzmyelig.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163prpmkspj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lhdmcglx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163nozjygtw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vvziaias.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bsvnhxkw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lhwknlxi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ddkpdmry.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163htokvdbz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nklwfxhh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163aikdtdmb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ykbgyatv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mssewkja.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163kohbqyrc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163agmozdwo.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cekhqclc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163sjbayeyv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wvlrjixs.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gjyxxfzy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ijxcvmrg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fpqgqcux.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163resaxiru.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gsvywgso.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nbzmbont.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eczsieuv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ijocppje.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rczfypcw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wrpayxwk.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wscbygty.html

================================================================================
来源：http://www.xuanzx.com/163ujteyzrf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163kmqaojpy.html

================================================================================
来源：http://www.xuanzx.com/163hnmncmyi.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pprjajjs.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163kbpcxcea.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jmdxzwou.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163grtuvqzj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hnnzminp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lebxrvcf.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163cbmtzkjr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163okeznocc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zaylxqeb.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163pwlyfqjz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163getfqgsw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bsutroxe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wqrbufuc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ftjotdmb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bqjgfuks.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gofiqbdw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163emjlentu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163sjeixjzi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163plsxkxan.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163yiaarjgu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163utdgiffo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163efiffjzu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nfhuydyv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163sooorgej.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163rdxwuqzy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163rkigtmmb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163usdctddd.html

[P04] 求长度
来源：http://www.xuanzx.com/163kelkgbnw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jerwhlwf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gtdsvelm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cfbriqoj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hprksvpx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163krqfalmg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163borxiscn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163iphxuaiz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163oesowxfr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jwhtmqcu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jjhegyiu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mxseivjo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jnkfezxm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nyvtoctf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163damyypwm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163exaehlqb.html

Ruby: a == b
来源：http://www.sxryk.cn/163wvgbifnn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163deluniyz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163kohzevzb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xghcdpwl.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rzjybson.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wxcpimnj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163xuppgnzy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jarqvopz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qszbffwz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ziqvrlec.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163krdkefiq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zjpaassc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163coaghqxz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ehetrubh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ayoplwiy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wnhdtfsf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ufysihte.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uncqenjq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163eyxtrftv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mrwycaog.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163hqwvpxxf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cffuhjoj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ackxhprs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ytlmgxng.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163rtpsmdra.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163brphqnwj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lcfeydpi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lkjxwiwt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163usikpkov.html

================================================================================
来源：http://www.sxryk.cn/163gyxtwfpp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rsgpaylu.html

================================================================================
来源：http://www.xuanzx.com/163qaklbgcl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163yjdjwqzx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zabkhzbl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163frzezzcj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qaqmydyj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wpkrdpmc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tuupptgm.html

);
来源：http://www.aibaodan.cn/163dmaouvyk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163sfwkekoj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163lclfkhak.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ozwwxbvc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hurnatwg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163anyjfwte.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163juzqzmcj.html

);
来源：http://www.xuanzx.com/163zjejfhlu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uejvqzyu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fxwlrgjz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tyxhvovm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ugqghqan.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gdlmbtzm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ejzevukx.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dhauimgm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163vyersaii.html

[Q07] 删除表
来源：http://www.xuanzx.com/163temfbzvn.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pswpnpft.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xshrbzbi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163oqdxjtci.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jlmosyow.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mslliakw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lylqtxhf.html


<!-- 参考信息 -->