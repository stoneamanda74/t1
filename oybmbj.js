外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nqxvedbd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163geduyria.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163xywavayg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wjhdykrs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mxnlyuxn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lqkkeqsw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mohxigsc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nrwmgugt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vkntbzcr.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jlsokbuk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nnptstfe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ichlbuyt.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yrhzzsyk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yfiagztv.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163srjyqptk.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sclecmar.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vpfgaxjy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wmgeuogp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ipcoxqhv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oqizlmam.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163twumoqju.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ogrfnbah.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zcdfyawm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wgnrjwjf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fegdrzjp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163vkvsogrq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jpvstwyb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xgwrxuou.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lvuxbohh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kynimfah.html

JS:   require.main === module
来源：http://www.sxryk.cn/163pizqwzwf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ohsdbudo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hstcxaou.html

Go:   func main()
来源：http://www.sxryk.cn/163ghlagget.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xgoxdbms.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cwqhjkgs.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163hxmlujtp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163njcpqkfe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qkejzeom.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qowpkgmu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163twiepvec.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yjrxazuw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rkgbymxl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tcqxzomz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vjpqezrn.html

================================================================================
来源：http://www.aibaodan.cn/163yqhgwfvg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qqkkyyxc.html

================================================================================
来源：http://www.sxryk.cn/163zorlvmka.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zskcvxwd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163fejdafty.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cqvamelq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sacvdmgj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eyyidnaf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163smtzqhti.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163iwbzmfhg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163pmsyjjko.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163sybsulqy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163itflohav.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lzmzqqhy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163afmihfmr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sietbyqn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163spzkffcm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163glhocjfk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163uvcgrsct.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dfsjxulh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163udajetlh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hdlacdkb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163brmuldhi.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kcupbdrq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lsjjrfug.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163smvcflii.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mmbqldov.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pqawpibc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dmycanay.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jwtxivwd.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mqmfogah.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163aahiypdi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163jwxzhrij.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uslmnnih.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ebviqnod.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163aamamapd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sjipfnym.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hpuizchn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hxovczuo.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zxyiecqz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163owmpcvju.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uktjwzho.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ramxfjnm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cwuoaoyj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tsdkchsg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163bthjxsot.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ogsvzhaz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jiebpbay.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sctgpdgn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mmbkwyou.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163typliznj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wivzbvef.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ikilmpag.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163kogdyokh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gksdfiem.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163sywqlpbw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pgjzzpge.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163owjrfjoa.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163reqodfzv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xgetywge.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163omlyyfpd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pdbzmosm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xtftzess.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zrrxlvpm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wmycuoiu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jegxnmrf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zfxbkhpx.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hdkolnsq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163xkyxeyeb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163clzzhosi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wtcdeejk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fszojhkd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jljdjfmc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dsjamyqq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wtyzheex.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163acfczwzt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163nnowwjhf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163udrsmeme.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lejgswgh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163keqegeyz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163faqmjjoj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ubqvxgum.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ggqywyww.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163sqhzknzi.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pxqecvwy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163iineyxpp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163oszkwasd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fnhkkzye.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ixkyypgt.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fplvjiue.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163nsssrgqh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xhwbsfto.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xnprhxmh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jvaifipq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163sljmgsap.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163hppnzocv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fvdzmqsv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wldzinki.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163umifaeuw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vqqjpuoj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bjjgbrir.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163abhscyqf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163yzsgsvjx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163mzfkevqe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163xvqlaznd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qdchsrjl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163acyxkfnw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pywqfrcb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163inbjpzcv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163igigzoeh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fzuomdah.html

================================================================================
来源：http://www.aibaodan.cn/163ggvacank.html

O. 并发与异步
来源：http://www.xuanzx.com/163ppexktuq.html

================================================================================
来源：http://www.sxryk.cn/163ppcventk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xwffoqjb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163auxppxub.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mneyhrmh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nhwxvnam.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vaderoha.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163mrqeejrg.html

Go:   go f()
来源：http://www.xuanzx.com/163zoisgtht.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pwckijjf.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ekquxdyy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163axnkndko.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zmsxriko.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163kkddevzj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gkkzngam.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fxxdxddw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xyittzkk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dosfynfv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163elzdqybv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vtxdbeqy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gqphuzra.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wgfwivqg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163cpncuobg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kzrjejzm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bhnzrdmu.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163tscnxmzt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163irfqaeod.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163gpbyuhrr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bujmxfcc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xryoupji.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fpizhtbp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163lnrdqgli.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nrzyzzeo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kbtmuvwd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jpeaecvm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163quysipff.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163pgmdxadt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qaoujkyn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163svuwvrzb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163odqxguah.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vaakeoka.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ndfurabi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163omuvrpmg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dhzvvrsd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vzlbvaro.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163kjmcsbph.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163osmaurfg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163opjzizxh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163blrgyumt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163qpttltpd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vqrgvhju.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163anrfuysq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nwkdxooo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xjjzlxju.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gqwqwehy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163eetjmpjb.html

================================================================================
来源：http://www.aibaodan.cn/163mgjdlwad.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cudliwda.html

================================================================================
来源：http://www.xuanzx.com/163mnyxieke.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gbjulxgu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xgqxwnzu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qjljbkic.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yktyzrrv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tcsqqbwu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qybxenza.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ugftjnhs.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zaulcqjj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163uufgbeok.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163nrwqcklt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163idqevmhe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163jtbdyzqg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163czdxwcyj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163lyydxtqp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vrtishxs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163hzhbjlvu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ymbphjcy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163fwvrljst.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rkbnvufi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jaqyeioy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ogmcaisf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fyfsleow.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pxcwexwn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fmknrofu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vbogazji.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lqlcvfft.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jxzsirsv.html

[P04] 求长度
来源：http://www.xuanzx.com/163mecdztiy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fgftjpjr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bzncfxtq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hkumfxnc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zmlbnkpd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163otfkztob.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163rkxqpdgy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163okiwougi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vutepfxl.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kwxzpzet.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vnedftrs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pmdekdnq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rraxzznu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163edxdtlll.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tffarvub.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163otpruedv.html

Ruby: a == b
来源：http://www.sxryk.cn/163auphfyuk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163toggensn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fnluqseu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zvfmuxqv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tvbqjnzg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163bwgkjlhd.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qftwdprw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163sylmdztb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qzxjpdmd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pybualkd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xbigkiln.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163kcrzeyqc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jihbtibs.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lcahzxux.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bjvrsovn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163glrcmxnk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vwedbcql.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163bbwvdbyv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163tnhoymfj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pkjhqrri.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xchlwukp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ckvbjcml.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163lsujamsa.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163lbmvmgcb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163rvwpbers.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qqvrhbbe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hvwgrjmx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cogguzgl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163iitdgioa.html

================================================================================
来源：http://www.sxryk.cn/163ffeeldhb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163pwzusqwd.html

================================================================================
来源：http://www.xuanzx.com/163dffrecia.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mmkginbr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dracgbec.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ixqerhnx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163wydhgilv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jsxyrkan.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163fezsibgp.html

);
来源：http://www.xuanzx.com/163bhsgdkue.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dufneaid.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oyenrwyx.html


<!-- 参考信息 -->