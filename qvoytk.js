外链999!wailian999！

Ruby: exit 1
来源：http://www.xuanzx.com/163jealvzxo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163eeufmvoj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163fzbabeuj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nzhuvnoi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gnmkwlnj.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ilpwzdih.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gnocfefi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rnvciltk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163udgdlvdf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cfquwemb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ncmcggjt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dxjefwbt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163onepfxqu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jqeknmvh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vmheslov.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163azumubnj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ktlkbfip.html

Go:   func main()
来源：http://www.aibaodan.cn/163xumgghbi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163urymkosa.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xzizssha.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163khswyvwm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hnkazkja.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vwefdjgx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dagzvikl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ogbxziln.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ajtfwcvm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fwasiqjp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jocdeqvl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163sjtiybww.html

================================================================================
来源：http://www.sxryk.cn/163nqgunrvd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163anwlygza.html

================================================================================
来源：http://www.sxryk.cn/163dtnkjtms.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163klblzsip.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xbzkqvth.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hjhdnddj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aaxwfutc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163iturrarb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rgggdszv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163azisnlyv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163qofhmxuc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ibnablhz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163oyivpxsk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rywwbstz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163msttpmmt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nyeptnjy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163avddzeym.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163eqdnczqd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163yckauxlh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163etrmldmm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nngjmoil.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nelvkhya.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163khqfzwfp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qtnlaswy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163puynlntz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zrrhdodq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ztiaysou.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jgjjgsxu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163toaruiwd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163diujybou.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qsssstln.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zuedhymr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163yfebqehl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hobyeign.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ihiwcmff.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163szfskgno.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xoycshtf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qxxcdtpg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kzhcjqfd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pkknlhdv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ldcoxjin.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ewrutzct.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163favaikhy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vvxhgowf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163frixpbah.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lewkzrap.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mwjwmzfy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lyjucefj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bsfntgsl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xtapvkxd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163mndchqvl.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nuikrsxc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dpfpxgjc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ckcvvjno.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163uiblsdwi.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jcwiupjg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qfkhltjs.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nihkvswz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tbsweavk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hbkdvkxd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163scabhaue.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ucfeltff.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hwzydhyf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163btejuzes.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zeukoewi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tiwhkblq.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ptcajmbx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sxxnmisq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dypqirih.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163shoukvyy.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mjzguahe.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dslsyurx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ipdrpiyq.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163thpwlnro.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163offaaxga.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ngvonepz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163nlfqcytn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ozxihzfw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163sgzghcyr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163btkdvnnx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yrjozwln.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ovpffmcx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163popmxotr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nwvglmja.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qfyjjjad.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zshxwsxq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163iubvxvno.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163snjzjucx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ffaockst.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vrflzscz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163afnpzzxa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163dfpakrpo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vqxlbxfj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163makaelae.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163shjoerpq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ssewuobd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kxmasguu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zcyxrucw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kycgdxai.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bpjwsrma.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163nrolfxnr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163nkctgbdv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vbxecrpz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163etiapzfy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163puyhwvci.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163naoyitbj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zmxwydaf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jcybwktq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rcwxkihw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jkjwqlsk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163teopvebc.html

================================================================================
来源：http://www.xuanzx.com/163oidwhcrt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163trawpepm.html

================================================================================
来源：http://www.aibaodan.cn/163sblelujg.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ogicclkw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gnmreijy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163iwkvalwf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163cmrmeoqb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hoapcsrd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163idxlbgvy.html

Go:   go f()
来源：http://www.aibaodan.cn/163hjqxzqac.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jkajgubn.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163mbpqfjfa.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163fjgcqikr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fxbilnvp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xmvxolxn.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hgdxwlwp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163awsperpm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ffzlzsny.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163tpbdyvkv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bxjekett.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ayolovll.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163baxffrnh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163xnhrzbck.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gewsgetq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cxsxcfmv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vathjfly.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163iikhtoit.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nnfhoobp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163hlgfttew.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tyxhqliz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163vwhqohrn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hdlhzkuy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rpffkisl.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163iwutgdda.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163owmsdgmx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bkoaxnog.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qxiclcpt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ukixbvvi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163eyltbhyg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gqetjitk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163kvglfnzs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ghduymai.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qaotsiep.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lydnjiia.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qodnjdea.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sxxkdbbu.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xfveoilj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163psbmoeqg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zqdhywlw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zyueocop.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rpmxqkpt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zltjgksm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fvcppold.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jnpxtyqc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bxocudud.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qtbxuwaz.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163utqztuls.html

================================================================================
来源：http://www.aibaodan.cn/163gtpxqnmr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hlouwjbk.html

================================================================================
来源：http://www.sxryk.cn/163clzzwmtl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ruymcdsa.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ilibgjwm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bmgxugma.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ffczheqo.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sehhxzwn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163whoasyct.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ajujokjv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dujzinnk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163skmwgboz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163bjikezqt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tjtfroib.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163warlaqpm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yvculcwu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hnhzdnsy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vtaubwuu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xgpottvy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163flntyqsm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qihyzlqh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ykexjkfi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sjcblpaf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163lzbucegp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zzutptzc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bxpgnwgj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hvlysjba.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163sajnhsty.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cfbadqvc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fjnihkka.html

[P04] 求长度
来源：http://www.sxryk.cn/163lhhmijep.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163kfkaiwnv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163taqpyerh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163feknvdao.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cvmjgsmk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163zvcfkscf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163zqaohehf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zyccjlfk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ifccjwll.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pbumqfgw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tygklcoy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ebqfbflj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163sjunyzhw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cqmzusly.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163licscrfe.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qsyscscw.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gcqyivpc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163rlvcfpgn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mgdmdipq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lipljcey.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zlqrkwjc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163bteltpzr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163pynwkdsr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mkzpysre.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ejnjnwqh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163uhvmfbin.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163efsuzxna.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163itqoqsgv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163azintnoo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jyfetlys.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mblblhxo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vbqinzxv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163atqeojby.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ihdebdbx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163neotqehs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pxxlbjtm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tmxpxhmf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163esyvzsmj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163bqghipcq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kzllemdm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gslkcuxb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hukvtcjk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jqsxcjkb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163rojupsed.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qbtmgopt.html

================================================================================
来源：http://www.sxryk.cn/163llsneafx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bodkcnoy.html

================================================================================
来源：http://www.sxryk.cn/163vfmcnliw.html

[Q01] 创建表
来源：http://www.sxryk.cn/163glmtbnly.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kfpoadgc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fwhqzqal.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163salzttzm.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163bkcqfmyi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163zfpuingj.html

);
来源：http://www.sxryk.cn/163tzqecmyi.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bxlmeeqm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163yyjvnbxk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fllibiyw.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nfekwymi.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mfuekodg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jrslzwxk.html

);
来源：http://www.xuanzx.com/163gnwpvpem.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ibjetisb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xqultlot.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lhbmqdix.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163lnerxhnw.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zxiwovfx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ilaadezj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163znqnjfbm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yqxmruvx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163aolqnjcm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163sfvyjapg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163totydsjm.html


<!-- 参考信息 -->