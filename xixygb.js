外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163icvkvwyw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zwvktwme.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nqrjhbfw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163aeqnwdqv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163npvnjxvj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pmymtxev.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ragamtxj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163velwrpia.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163naiupvuu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nwjkwnhd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ehiaszxu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tvofvwrg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xwkmdhqs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163sbfmrhgo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163iynufiyc.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sbqlmthi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wjcgwrww.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dumvfqwh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163krsaiwsl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ynqrhdzx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163etmqqjaw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xgwrujpq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bhabpzxe.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lqsagnwm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163egjifgky.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rsfrtqym.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pwdgvbqm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163szoqqjyw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rwtqcebb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cnmajmub.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qsowumqx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kjslgcgc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qmtbsray.html

Go:   func main()
来源：http://www.aibaodan.cn/163reowopoo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mkodpcsg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zddmvlmk.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rukjvbxn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ieryyjeh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163foikbllc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rhgxtgdy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cffuiyjp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cupkkvvs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163grwfubeg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qhskqmth.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mpybruzq.html

================================================================================
来源：http://www.xuanzx.com/163oqkphbkn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fvyepalz.html

================================================================================
来源：http://www.xuanzx.com/163vamkimrx.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163iygxgamm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163nsnrblxs.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163eewhofrk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rwsjotgq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wcgztstq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163durbodwm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163asabuwms.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163dldosmig.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ryjpryrp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qxdjsrpo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ursmhdmc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163prkyhxgc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163upirnwrk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163flpdfyau.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qvpohnow.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hjnlihrb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qchbxfps.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163pwccocwm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hrmjgelv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kfxdnbph.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vtvodons.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fowilyuq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ayivvehw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xufvcgfd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163woftozbk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ffywzbcn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163golmjeia.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bpcpyifp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hilbnxhh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163znfhesis.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rxkirshh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ruyjnrbr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bbkrgehk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eeilouih.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pzbdddxj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xcbvkpjx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163drzewcou.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xxhargop.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163didknaen.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163inmhlkui.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ejwvcndd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163whposuzn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yjrcyhlu.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dnjwesru.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163facedecc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163iwhnxcps.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xaqdzkvv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163isiyiuue.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rceiwajm.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jzmgzvqs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163sgoyrmps.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163liechmvc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xonajegk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163teitqvxv.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ikdmwyjt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qzkhfnnc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fokdcnhm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hwjbzldm.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uxriutya.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wrwqyacg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vqixlbyd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ttivmikd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163uclkvaza.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163oshlqdwx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fvqzewot.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mpoxoqoi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uvaszrkz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nvykztxn.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rlvtravs.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nmwzxacp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163guxccgyc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fyezzzpu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163oexfviea.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163eqjtdexm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bgbtqqgh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163eyqfkscu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qmsmvuqg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yenhagei.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qemhkmmk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xxeyihzy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qriatkmt.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163dnbomvlq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163igtvwszv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163vamsehon.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wchypoyw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163fkhwippa.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vruwwwaz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gwernavz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163iahgvrsh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163nztdxzdv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cxyksaol.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gtaudieb.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gdyughwu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163orgjkpgy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dzagxlyf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hhjlmswc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bvuzrjma.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mavgsidy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ddsplfmu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ehbxkfxo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nufvcpet.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163afzqajne.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ztuskndh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163euqtfscv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cjfjuvef.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qkpcubls.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hhsxvpxg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ngoazpau.html

================================================================================
来源：http://www.sxryk.cn/163mrtxrizj.html

O. 并发与异步
来源：http://www.sxryk.cn/163yfqezweu.html

================================================================================
来源：http://www.sxryk.cn/163hbsupqax.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163iaxdioib.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163eestqtte.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163payfjxih.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qncyabsg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vrgtcbap.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163yclwkngk.html

Go:   go f()
来源：http://www.aibaodan.cn/163sdzblesp.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qzebamlw.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fvphdqwn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163bzkdozva.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nhwqvgxh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163erraqmrd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uzfjkjze.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lscsnloo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cakjydot.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tsfigpen.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hicatxcf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163pymrbzaa.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163fwetxzbk.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gwkvuqxh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ukwdxczr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163rwpfjpbb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qzskzfnq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vckstyqu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kohyuqiv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163akalqxdt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163cshdkmng.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cjbvipve.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dprsjbqq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ywpwaujg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163oaaueida.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bqqwtgzn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yooclovi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tmtkoqpg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ogtbcahl.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163awwzmkfc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163abtrqcgz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163lskqiuoq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163xlvvbjwl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jeyvmumq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jyhgtjgn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fxvsnuoy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163eryzyrlf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163sxbwyyez.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qclgmpvv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163cvvpqdgs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163abmtrdbx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163tfgsqwbq.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ulsgcgll.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fkrtkjlw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jzjdlyji.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tljnoghm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qymmpslu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163rdrvlnpz.html

================================================================================
来源：http://www.aibaodan.cn/163jkirarbo.html

P. 常用工具函数
来源：http://www.xuanzx.com/163vcjkrlcm.html

================================================================================
来源：http://www.sxryk.cn/163itidqbuh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jxoyfwba.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hncpxsic.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fnifyhda.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xlsiiryj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qcoxpicr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qobyjvma.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fvwhfhdt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163oyfkrwpo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bczoauxs.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hdcyuqbn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163yxfecpiz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163dnydzasy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yugvlpan.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jryqstzx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wjlahphe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163baeimgrp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qnurlroe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jygztqiq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163cmrucesh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dsgrnili.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163aywfapnv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163veeqsoed.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wsgeilfe.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163pyhbllaz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163omvcgaph.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qclhwlwr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vybbsjof.html

[P04] 求长度
来源：http://www.xuanzx.com/163ugpvwfsv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163tfmsapfo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mumryyno.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kwruuwly.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nijxdlso.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163gcwtslus.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vqhwupot.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163oeauguku.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163avbtegiv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gmcuxkdq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xvhqcoro.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vkmswkmw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hniwwbln.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pstygdei.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ekpcxhrd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wvjqaadx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163hvipqaiy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163khayiimr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dszrryep.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163seurnkac.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zrrjrhol.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163upfyhbqt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pkiznmfk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jqmoxxfm.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gvfduvwm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163bmnrlxcc.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mzrjeaxs.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hsgrpmoz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ufghktfp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163bmnvytgm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ujdnolog.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yhqrwxcm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ianqrvgg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163dfzirrja.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163pigkqydz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rpnxecou.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ebtmlafb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163resqqtrk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163eablhtld.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wipkqyvq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163htwbjepg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jihvsygz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pdroafta.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163yjqrwcnc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163srmveorz.html

================================================================================
来源：http://www.sxryk.cn/163nzpsqbdp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ikbdxvuv.html

================================================================================
来源：http://www.aibaodan.cn/163chqzgmpm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uipnozay.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lbaanizy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rirshgmo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nybtfrkd.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163aftflecq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163djyeequp.html

);
来源：http://www.sxryk.cn/163aztlzxev.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xndhvswz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163avekquvx.html


<!-- 参考信息 -->