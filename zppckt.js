外链999!wailian999！

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ppyvlhao.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163huzwgfti.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163atcsjkiu.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ckztmlzu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wpdmkvrt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xqqzvvnd.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kjaedkia.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ziqkjume.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nawprswc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xckfayyn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rxikoxqo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fyggfcyd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pduueuxm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xakzcdpy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ygfqsrrj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jeloxqmk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fgcooqsq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xgicxrxq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163erhngssp.html

TS:   require.main === module
来源：http://www.xuanzx.com/163qxigjofz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ofofmpmd.html

Go:   func main()
来源：http://www.xuanzx.com/163jiwkinvg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ptemlurm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mktrkgjp.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163omfocfwz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163synqdsgf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163notrkdvb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ajlsepdn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kcxwnlsw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163lcicuito.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qfjxpqau.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163raagtzuv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vvfqkfwx.html

================================================================================
来源：http://www.xuanzx.com/163udorvcri.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ulwmtjfd.html

================================================================================
来源：http://www.sxryk.cn/163ktedkevm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dgkiskxn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yfncrxfw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bhhdbvpe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ualvxvku.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163azsehbud.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163talaoojm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ftztllyu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163uamurvfo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163sfzydrey.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yxsydjao.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163crnwxzae.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163iikajucm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fbwosobi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kwtnirak.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163efmznmvg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163blrgqafn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wvtvsmbh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163krzkjuxv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xkhbnxeo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163iambrvwz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yclerunt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yxpjcpzg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wvbbznsi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163zmgibygf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nnsohngy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sfjqcnvs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ivnguafh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ljewmzpf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ffhdgims.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163bynvhlih.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cyucvtur.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163aosahssh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163qwpdlkpx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163iibkgibh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iepbozdm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dulvltnc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ntbxobqr.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163irhzkigh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vahmgyjs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qicevfwe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hsqowjjf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163giiycyov.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wampcbnv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rmurpaxb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163uhcwxqat.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hbnitlsg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ofczlnvg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163uwdbnthh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163unkxnqgg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kmcuajeo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163szmwwjgs.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lygqjuhf.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mcxmgptc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hgmwxngl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xqezezdg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163dwbhxxlu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ahgdjdbm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mlwclixq.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zxmypuvv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mmpvsivf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163nabcoowu.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163stuxwaea.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wasuanfu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qlmothct.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nwlyqxyw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bmoaltfr.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fgushssv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cqyxnlwx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163icyaxjfe.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zpuacwmh.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zztajjfp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jeymxbmk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sruritug.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vccocpsl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163shdokoxx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lcrpgano.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163iwhyofof.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163osuzzhrg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163cnyszbso.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pvpgjncy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ejeezzhs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qdzdfxgf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kchbyfuu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eafovdeq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tzqmylgr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163aulxpsmg.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163illeskor.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163fkrxeddx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163juoislrd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kxeyhyip.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cwplawrk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wixvsfdh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163yaeyheow.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tedwfkhj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163srbrpyht.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zykfnskr.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163rwalktud.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ytynlpyh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163igqgnrfz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zlcctniz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163flktedma.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bghnkzxq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ncjokqqa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xzvbfahg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ffulxvcj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wdspdhia.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jnjuqgjj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ugbocyqc.html

================================================================================
来源：http://www.xuanzx.com/163upgblspy.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qlihyjze.html

================================================================================
来源：http://www.aibaodan.cn/163vggfahaj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tmlribbh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fprzwfeu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rqjldtmg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163znubasgm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ddcelwxr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zctzwdoq.html

Go:   go f()
来源：http://www.xuanzx.com/163dvhzccvb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xtposppn.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163peqrdcxb.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fwmtdxsa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yjxzfrev.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163kaokcnxy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163norxgins.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163aaqfsgja.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163agzxeobm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163emekwxsl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ranueixh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lmgpqqax.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ictlxdpj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163phanpoda.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163otqklziq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163asjdxflo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163drwgrpnh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ahupshru.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bztsymfx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163svdrcpsp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tonzodew.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lmcxqqxt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163uvgmdxhl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pszaoskv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gaaekdky.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cvlewqnm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iqjugalz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xicroahp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bxuexciw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163merbzgni.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lubwhgio.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mfagfnte.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dikfpsip.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ribhbqik.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ptxylaod.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qneagjwy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163clsbhaal.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163quyvnfmg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ppwzteud.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163wcstiedc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163gaalncgr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jqrxjhdu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kkxyncck.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ccnircwz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163iyqkmuer.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163flosnyvh.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mgjzxtng.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163aszrumks.html

================================================================================
来源：http://www.aibaodan.cn/163lrunkfri.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ytqdoodi.html

================================================================================
来源：http://www.aibaodan.cn/163pbfyavjr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163acjqypab.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163piakxfxd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jodskutw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wxpycsqp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bjxylpdh.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zygfbooq.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vfupyahm.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lqnjqpfn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lmkxkhre.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vzjtdvyk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163krmkqrkz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163twznjxou.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163fqymbavt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163tnzbynzw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sjvivibr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163bccjopxr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163anhvgzit.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nxcqhzia.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ncykpwcd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bfoppnsb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mmwfaffb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jvniczlr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jvraicif.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vagdafuu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jqhjcjrx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tgoyoble.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163eciigzgl.html

[P04] 求长度
来源：http://www.sxryk.cn/163grpqufoj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163klfwrdmb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163znmurugt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xyfmhnqo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fffmegee.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mclyvnps.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qxaqeatn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163iukopsqz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vuoyvgof.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163exklhltj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bfccagih.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163yknxvacu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rlogvvgg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ucagzomj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hylpoetv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163exhthtzj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mkgkkixr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cfcztaim.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zkzkzekr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rcjnmmqz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mfwlhxov.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tigwgvab.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163phekxohv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163twhalkpr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ugsnmrsv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ylcgdxec.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vvflqlst.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163uvvvjqlv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rydcqddh.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xvpdbfas.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eqdzmuky.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vytazbtw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rwlwfqow.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163idqwvxpx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163efmimriz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163pmuthqgo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ypmlsnmk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dudraalw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ffwkebps.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wrexmrva.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163larwgqde.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lqdmllmb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wlfgchmg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163mkpfjdih.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lgxajyhg.html

================================================================================
来源：http://www.xuanzx.com/163vljlwpzj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uimtonzd.html

================================================================================
来源：http://www.xuanzx.com/163ggmrsqoe.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gjwmlxlf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ixtxhfbf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tckjrffj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wfbvksnq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163vlcvxfww.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bdpdfomh.html

);
来源：http://www.xuanzx.com/163ttvwgwkm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nosghlzi.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163txjxstck.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dgxhkmxx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dzdqfsum.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cvvioqrg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163smzwewej.html

);
来源：http://www.xuanzx.com/163jrorlctl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163lduafdra.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163llibgxip.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pltmpikb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bjfenexi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163lisevcmf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163wakdetne.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vpwwuufg.html


<!-- 参考信息 -->