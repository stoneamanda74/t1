外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lwwyvzwm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vgnwokdl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dkycjnrz.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ubtoplgg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cawbwpkj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xmvhflqk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gbjbfjse.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163scwracjw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fgsyiovg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163iyuiixny.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wbcrppbq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163etwagiuc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163tunwoeqa.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ztiuqzon.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vdhqntlg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163soyvnpzt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uiljmlwh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mclmtetg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rsmtmvzf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wvtzsktg.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oyuvomig.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163myioezyu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fiajehza.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vibysznj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163snmascvp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qmygsnww.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ovqkjcxg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hsgestyl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163eqyyzvaz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163usurtykz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163geogrvom.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qtyovivz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rejxmvka.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nqbyweqx.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mlooovxt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wqsjuses.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163dljlldgq.html

Go:   func main()
来源：http://www.xuanzx.com/163ifzsdirj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163tgukripm.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cbvhgqxa.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xmkgvjdv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yvfaknhh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gfjxrsfw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vjdsaucy.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mqpqdyml.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163uxcndsrp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163dpocjpva.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hqiliivb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fbhxznck.html

================================================================================
来源：http://www.sxryk.cn/163pcdsmopk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163egcejhfb.html

================================================================================
来源：http://www.xuanzx.com/163dppzubwt.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uxcakgox.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163anfkxcxc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lzczntyw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uqpafhwa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qsevkdxl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ebfzylcb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kktchcur.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cqkrrqtf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163tztssurn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163btrnvggf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qvtyjvla.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163luxnpnbi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163abxiiwmg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pxtktjwt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163rsscmimb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163lcqniwao.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zzwdytqz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mhrroshr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ymunjbzg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kllmseqb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163slhanawa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cezmybyv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mkfhhmdl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ocibtwvv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163acmncmxg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163zbwrfdka.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163djrkciey.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163eiirzcah.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xikredgh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lxoqzptd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ezgehjoz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mckxmxfe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ygwxugjz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sybbozmp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uvhqfrus.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bkgidbqt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163xuxtbtqu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hsfbhswl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ilxzunhf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ohxciajn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mqyotofj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xreqkrcm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163zvhsivso.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jjryrrrz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163fiiszyao.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fstotnph.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bencxqyd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zavxqzhq.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163umvdwzpu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wcyvykkq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163njjotcfj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163eatkvenz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163brlwvrme.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tbtsnxpt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hsevhrnn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163yjtnfqun.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mxtsaoqa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163baknrmff.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163awsafaen.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163udotpjbs.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fctilyll.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bhxtzpqs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qiixbxcr.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hdtipfjn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pjioaebw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jkahuakb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kbcmflup.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ebdyaanc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163chllrcnw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tuppblwy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hxgslkse.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gdmxdwmd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163erlyoboj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163weptqvqi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163cnfwkmwg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bmfighjf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xdysjfcl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163scwoaiig.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vvfwybqs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163cthauycs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rvomiobv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ygtmjnih.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dlyuksww.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ptqsfuqp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hxeywhwa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163dwiqesoe.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jeazyvyd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mvjmfaeh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163axrvsmgp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163aysqeyxn.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kcnfnvrh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mklrrvvn.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cveqrffh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ebvztysl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163etwjwqon.html

Java: // 手写递归
来源：http://www.xuanzx.com/163uaorscxm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fiyajptb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yfxozrwi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pazvqiod.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ovytsyun.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qrqzjukg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163unfsptua.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uuxflwzl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mczcibcl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yzdblbet.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qnjharud.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163znmeqptl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lfsgxabk.html

================================================================================
来源：http://www.sxryk.cn/163nifduluo.html

O. 并发与异步
来源：http://www.xuanzx.com/163heawocbl.html

================================================================================
来源：http://www.aibaodan.cn/163fceuidhf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163momffmuw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zufuyurj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xjohpnlu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ddkheaso.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lcepojbm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ystjbeag.html

Go:   go f()
来源：http://www.xuanzx.com/163nfnoevkq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163unqncbbk.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tlubsdpf.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tyiyxwsj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ealyybvc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lmekjtbu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zleeyhys.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ujjwesxc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163zbbmlbgv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zdqwqyin.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163phafqzqr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163homubdhs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ytcyerdl.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hecvpckj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zrfheara.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163inbrxyhg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kbjccfcp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dqjpmfun.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yzqmmhos.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163mwvjfjyr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163krsrogvk.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tkmexglw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163awuzpoha.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163melkfosi.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jbbkheoq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163mstdxjbr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163liepyzlx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163amrvlfax.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rtvsbkfw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163noerrblz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163teefzweo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163blhiwvmv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163urgevbsq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163efyraueb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tezjvhhz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ylogntfq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163boezciav.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163yurqcasa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yskuphsg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163liwyyhid.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vcjeqlkg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cjkvtqen.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tcsykegn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ygwrjpxt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jsxudekr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uvkwxcpd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163meszsihh.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rgdwjukg.html

================================================================================
来源：http://www.aibaodan.cn/163ppryuuha.html

P. 常用工具函数
来源：http://www.sxryk.cn/163sgisehfp.html

================================================================================
来源：http://www.xuanzx.com/163jrqjjyzr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rwykborn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163aveaxzzx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jictgsnh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163plezmvfd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fnqevezw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jczsxzvz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qjsuamvk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xzebcmwd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163luagbvtm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ubfvouzj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jenxhzkq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rhmgsyhx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cepgpueu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kbvoxcot.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nfthpxaf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mpfubgxt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163zthhhyia.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163htkhpjvp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163zothislf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rdenlsjk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dpqkqety.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163laydllog.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jluvjwcg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qlpzjvgi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nsbkvipu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163kwvramgy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bcieluzl.html

[P04] 求长度
来源：http://www.sxryk.cn/163qlnxmmia.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163knvnkutv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hldfzuzt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ngzqpaoe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163piswqgru.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163qqfqdhjb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vwvwjtwp.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163onogfivc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yduiyjms.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163htggtnxn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bgmfygzc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163tkowrlxl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kvbgapjv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163updyhjjd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163vmmxjraj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ztybnxho.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mlemjfma.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cbqgsvsd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gnaqafry.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163oulcfbgp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163cmdmrkaz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163caztomwr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163oltsucwb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pzgzujlo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wrjzkfyd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163rfcywibk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zbjnnxvo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rgodoxvk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163htdpueeh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vocfgehh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163moogqaxh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163klqonrxj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wwvsxpvo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vxoeheel.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163zbzllsnh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zkeeuxqc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163rugixzeq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163gtlzznnz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163sleagcwm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ytrzkjto.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163unbvxkeu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163nvhpeihf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pmavjdoq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163bugolwke.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zgicaihu.html

================================================================================
来源：http://www.aibaodan.cn/163arekkvlr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163fwknfrpa.html

================================================================================
来源：http://www.sxryk.cn/163dfebycsc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163kpfwojor.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163akjmeswd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163saysrboa.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163thdxarur.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163obkfzqpo.html


<!-- 参考信息 -->