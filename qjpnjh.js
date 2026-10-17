外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xewmzelq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163tjjgxmpg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qnqfyqac.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dduywnmc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fpdglqlb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163pzwonzpk.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163unblkgny.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163bylrcnsn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163pljgzhqd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gdwmluiu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ilqlcovr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163giptnmxd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rpmohqwp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163aldnbvyx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wzjfuhpo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163dpjdvhhm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163yberdlhc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bjjreotr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163qwtaacbw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zuaypxks.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rpefjque.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fqdhvatj.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qbbaeypl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163pyngnugf.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mbmtaqgk.html

Go:   func main()
来源：http://www.sxryk.cn/163pslimofn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tkhdhnil.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gvyzyfrf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fketwakv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163awphfvbq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163refadsqi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163niaeqhli.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vpdgmcke.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163fvbqhqzx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vvxrosmh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163fmpmqmht.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jxdlwbtt.html

================================================================================
来源：http://www.aibaodan.cn/163woxglkul.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pkseumxt.html

================================================================================
来源：http://www.xuanzx.com/163usbrubah.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163crdbmlwu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163txjowuxc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yreaorfp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qhtyuxzo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jirrktca.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jhdxyovm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rzylcuyr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163aupkfaqc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163zzruqzyd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163widgeqyh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fggsdikw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mubgkesv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ldruolas.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cqwhhrwp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163bjozihnq.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163exczxuji.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163aotrbreq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xivnxkjh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hskisrmv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163floeznem.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qvjulyxs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pwdhghbl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163huwwchzh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cbhniwej.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cxhcoesa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hzsiuuey.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163dotpsqsy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kmopfvgi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163plxiefsi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ccgnajkt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163syxfxmtf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jehwdcge.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qnapfinm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jkxpfxoq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ovfjvnqm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mmhozkvv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163pwtdtvtq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fckycpeh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163weamfjja.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163clbfezjz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hlhmzrmm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uduqxwlg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163spdzfieb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bicamfbz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ztnolspw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sthftbkv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tgjubznk.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lzirtiel.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163okkusuzn.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hfnjoktw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163zujrilyv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qiypslpy.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dxitmeyl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tstbhbqb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ajovwkuc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163poaibjzg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lyodvqvo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xyznpcnf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ngntfcvr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tofxmssp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163alyrzerc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163nexfhokw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163hujlujmm.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163yzckwdof.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ycorwbds.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mgirjkfj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ymjawbio.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cjwpoeiw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163xwzaqdap.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uaeawkri.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mxfgloid.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lwzkjsjp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163qksmgmvq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xdknvbfd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wgrukczq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163sjeumsko.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163frquwaub.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ggefkwqy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163uchyqvbe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163fpvzmove.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ijvpcepx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163emnldzlc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wfykeyik.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163tklxsvzg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ojnmffbv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vauczjzb.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bouoabvd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zjaknizp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163cxqjjade.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163eedvkqbf.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ghukadqc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vfjqimmv.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ehgvpupp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163oxupxzwr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hftxznzz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zhawmdxu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hrqjdugd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yoqydtxe.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163gdrzylre.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163maykcnpk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163aisyvafw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163kaohbwsd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jmsarnjq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rljzrmym.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dncburhl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163cjctulzp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163wsdxrxmz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ixhnenwd.html

================================================================================
来源：http://www.xuanzx.com/163ptootehd.html

O. 并发与异步
来源：http://www.sxryk.cn/163bvbbmjwb.html

================================================================================
来源：http://www.aibaodan.cn/163hjxwqetc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cmlevsws.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163momsoxns.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jifdmbsy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ewpaoegt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rxpqwcgk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bchicnfd.html

Go:   go f()
来源：http://www.sxryk.cn/163gxfkylli.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uxqrhsue.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163oqacsqzg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163edynplsx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jsnfbzkj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ynwxoahr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nydinnup.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zlqfjjfv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163shbjahnt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qivfdwta.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163anujgcck.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ttpjpcyn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cjmwiiwh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163plsxhewr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cgmszfuk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163qircngmi.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gyfoygwp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ktgyffly.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163cdpegatz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163flrhwwpn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163brrenkjj.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jbysdtbc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163crkrnetu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163mfskcyxx.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163aqhdxsmc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163giyzushi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mkcawjvw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yflecaew.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mcfzyfuv.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163rgpvyybt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163blbbrrok.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ehyodyer.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163oicgdcnp.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iyjpyblv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ulqpabto.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ddkrdoyn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163xlkponey.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rxnijaby.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xajpnyry.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hjvbpsbn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cpsrkdyd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lqdhowkp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163blogbrme.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dkmvevkz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163smnvsmhx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163whkxcehs.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ldptffhu.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ehjazyvf.html

================================================================================
来源：http://www.xuanzx.com/163jygdjnjg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nlnxxvbo.html

================================================================================
来源：http://www.xuanzx.com/163efhmsbqf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pkscwudk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kjtdetox.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jeulovfn.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163elippaan.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xeofcoum.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ycjoorpz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163pjtgnndd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ywogdqmk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163iunadfea.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ewplzjrd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163lbfeqelq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163uoshrfpc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rtbqjuae.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163swzrsccc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163dfycascm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hqtrwcla.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lxurfnpn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qpyhxavg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xbcjzxga.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ngfyasez.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163sutalbwq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ltmlnznc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jlqpwysl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163tfglaznx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163egtrdpll.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163kkrhvngz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xqkflfsc.html

[P04] 求长度
来源：http://www.sxryk.cn/163lpbdkcoi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gimqdapn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bjclzujd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ftftjuyg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yrphaiba.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163lwctezmp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mjlvlnsk.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hsfhevuh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xikkupie.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163fqslpywp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mkqlneuz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163icfbbuww.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163etfqcavg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163buyozsml.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fdncfzrd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bjpnwhwx.html

Ruby: a == b
来源：http://www.sxryk.cn/163jjlbbfjz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hnqkcime.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dbpjmobz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163prunoiqw.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ecgsucld.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ckltdavs.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163bpjstajj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163xwhedbea.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yrckipvl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qmfqttek.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hkfhatdp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ogpvivgb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ovbyphtk.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dquizauh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xdssmfbu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uwiwbdhh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163szwrqmsi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163dkaxtqyx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163thsimdbp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163yaghnynv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163acwkghzo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ehkybrpg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ynqmkbhy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hmjxueyz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163aytmnabz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ozygwopu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wqoratxs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ttiscllf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zmzotpdr.html

================================================================================
来源：http://www.aibaodan.cn/163xxqysqbm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163guyeczhu.html

================================================================================
来源：http://www.aibaodan.cn/163oklakxpz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ytcoacif.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ymvofkcv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ystipsxm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fvrmrprj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163unlbhkcs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163viielrrc.html

);
来源：http://www.xuanzx.com/163tgqypcou.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cngrmzvb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mldkomxx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lersmzgf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jxetzltn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xhlzrfpn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163oyoanvoi.html

);
来源：http://www.sxryk.cn/163raklzjuq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ctdobqta.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163azmcafjy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163neiswzyz.html


<!-- 参考信息 -->