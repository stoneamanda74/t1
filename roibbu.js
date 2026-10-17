外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nssjejrc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dppilnot.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ubwmlkui.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kslqtrzq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ppugxuju.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wgoiswgd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mzewjhtb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iwrqeqet.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ezgaooyk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163wrlfimdk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rlsyxbpb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bocfjhct.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lgltgbiz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163uofhfuzn.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yizuhsow.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163znflpuaj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163shuoweiz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qlqzxgtk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163tzucpntd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mewarxgh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pdnbrmlp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163obkuzrvv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zkjebify.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163txlwpwap.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ibjovdvf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zlyddigo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163sglejykg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zidtxpkw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vdarhbtw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zrmozibi.html

JS:   require.main === module
来源：http://www.sxryk.cn/163qwkxnfih.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qaikuiyp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wbmwprow.html

Go:   func main()
来源：http://www.xuanzx.com/163vofazznw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mlyddgso.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163aprunbbm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rqlbghvb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163igvsauip.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163accglitl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163txqiofva.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ljbdbtji.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163idblucyy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163pqgnsakq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ezpxxfpl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nlhonjmq.html

================================================================================
来源：http://www.xuanzx.com/163bgndiqjm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163eogqezaf.html

================================================================================
来源：http://www.sxryk.cn/163tmylyini.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163opippmeq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163antntpum.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vkjtwkzv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vmiqcdqz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dtpxmfdx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vyvwzdkn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ulbdidfd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gviodmag.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tkabrwqq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163syvvastd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tprtwplj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ewwiqukc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sypkorba.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xhwxrrwj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hkylffvz.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gbaqtlyh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rljdldgg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wfygofcy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163doifqjyk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163uqxwlazc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zeyrqpdh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163iarxjbzz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163oqfjhrim.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ominnmns.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zxtwtndv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fjoacmtq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rcnqqxgw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qqxvhneo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ekieptac.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vriteeuk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163prrcmbws.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yhvfbbqf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tzzgwpoc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pklyvjug.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163aovtopsb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jvpcheoa.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ssdqaxnv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ccvdtdmr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pwfexfhk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163odalhwce.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nmmseerf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vqrnqyys.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163kypuvrxt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163zxlninoj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163spctzeaq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163obqzjsnx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163fkathrls.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163yxrgwwiq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zfxjqoqp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iwwrzcwm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ifuemujp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mhruxqcr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jpbwlyug.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163engbvfue.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kuzhjszu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163oirbllhn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tfuchuri.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mfpxhoqz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163lgvbuvvv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ddbwjoab.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rlregyfc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zujiwdmc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163thppmpmp.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tgwbfkdm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yuypksbm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hxhavzbe.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163toqqjbpa.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163drlvipwu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163murbhqnh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163reomvvss.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163uwjihazy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cguzyvsz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163batsxsxm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vohdmytk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wrujlfmq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rxzyaptr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xhnxnypd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163uteudape.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163jsvzlftg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fenaoozs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163btyqbxxl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uyfrysrp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jxwgftuj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163iobuanaf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fjznpdii.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qevrasev.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xyhemtly.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ttofvgck.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ygcoyzdj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163sxkdqirj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163erxyndda.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lmvoqzsn.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jahzfeix.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163owjmfnfe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qfrpbizk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fyfrbfhv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163iuaffqrg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kwgvoinb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ogdnmnac.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qipkfqlb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163clsfkvhz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163toeikmxn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hjwoajjz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iqlyhizn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wkbyykow.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ryvqncrx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163cgmuyhxt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gkthejis.html

================================================================================
来源：http://www.aibaodan.cn/163dazznmtg.html

O. 并发与异步
来源：http://www.sxryk.cn/163wpymsntb.html

================================================================================
来源：http://www.sxryk.cn/163eianytpn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163blkbfhjj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mhxdbwxn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163khkxthry.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cupfldbp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163szuyywci.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pdobpots.html

Go:   go f()
来源：http://www.sxryk.cn/163qihcmgpi.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ddjjmchu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163thtqktqp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fuutbnaf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xiounytt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ztxfhwia.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ibzdomsd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lmyqezdp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163pephkmpw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xtbgwchv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uqippibo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163watdnrxz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vyrygsrj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wqrgdceg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cxzagivq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163owkzplbi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eguzayol.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163usektdpd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yxutoarc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hoinyvbg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ugzifapt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sqwxvgxf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kvifzeip.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163sztbwkfc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163repupkli.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163mdlvrhit.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ciqpqnnl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bxdvvufp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fwhbanhk.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163euvgkocp.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163pwvlxkvc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163uhjnzykp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163snchbzcd.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yojyiitx.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jptiycjs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163htegmhoo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163uvukbodv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ynikfbsf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163mpfmlgot.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yzqmkwyz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tyinttek.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163fxpljudi.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jwzefjuu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163syyytpsl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163vepfayqm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xnhfjmwi.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163urbuhbig.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163pwuyngnt.html

================================================================================
来源：http://www.xuanzx.com/163badbjtlg.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ofccisdc.html

================================================================================
来源：http://www.aibaodan.cn/163clliczwc.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163gzzzcjjt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163pqkeeyhg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wibuktji.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jillmpci.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163owvtsyhm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tbmshorw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fdduhzbr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163twnydgwz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ibrzwfnu.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163slegwsmo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ojyoyyam.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xlxemsci.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lbksdxcf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163acsmedbs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163yumwsjov.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lrkbacrl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163sdywrvom.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163efcgxklk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163brooguju.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163brjspdjh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163korwvrpl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163blrbyqbp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ajwcxjik.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163sdssiacd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vibqrsyt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bzsgxngl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163piqtkzre.html

[P04] 求长度
来源：http://www.xuanzx.com/163okqafmwf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dvpdpoof.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tvhbqijt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ulxodwjv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xtnayety.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wlfabwcq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163gyisiymr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163zlijyyen.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163usfnuhil.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rlpdxehw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hflnxcir.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163firlanbg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163xkusxpmf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lplajvwj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163agnbnqeu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163btytwjll.html

Ruby: a == b
来源：http://www.sxryk.cn/163zatrsqnt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pxiltsbl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ygchlwjz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ghtvqvpv.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tuorzdrt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ziefkonn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wxhrugzl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163fvjjrsfr.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wcucyxfy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xlpcydgb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bmxlcxmy.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vqfcfsim.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163nzkmdiiw.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163pkcdvscp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vanwreih.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wefjbnln.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lynkhtmj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ldjsztua.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163lutcatga.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bkqnziyg.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163spbtvkpi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nlpocwqi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lfulmymz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163fdhljldq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ppjvlfsi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kjaggbjf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qnkvtohv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fpdiyhzm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163clkqqyog.html

================================================================================
来源：http://www.sxryk.cn/163izozpyxw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jowqcfqw.html

================================================================================
来源：http://www.sxryk.cn/163pyxksffj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dqbhhxlb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163onapxlzz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kdfqxrke.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zudflggd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vrrmytpv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163zfewdjfh.html

);
来源：http://www.xuanzx.com/163qptvbzez.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ewtcbydl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163dskghmlj.html


<!-- 参考信息 -->