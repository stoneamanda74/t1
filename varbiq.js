外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ikfdzgyl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gsyjzvnj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163csxyljvy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163phdpudfl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163medpmrmi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163icppsrid.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cgxtmoyx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bwnohixq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cmlgiddd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zdtzoiov.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163sjfmdfmu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cypcxtga.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dlpvuxhn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jmijljdx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163abatoogl.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xhtxqqqz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163sjhidqst.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ioyqiuqk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wdhupjga.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163esyrduik.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lbumhigo.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163pezhdnnz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163tbhnoder.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163eqhqachl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zmmznecb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163pgwjverz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nymumddw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jhapfnog.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rkldqreh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nzllwvmo.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qkkrhqwx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kcthpscw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kjwvajkc.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163vtighrsp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163svbmfjpl.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ooklngxw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rpwwhdhg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dzvwsdvb.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zxwfkwks.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kxneaofs.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mgqhkptk.html

Go:   func main()
来源：http://www.xuanzx.com/163pcqrkssg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pkgznemw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hightsbw.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163iidcmeox.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jotadclv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163eftyravm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sxgglmha.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jjlmiurv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163iepodcam.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163deddxzxe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163rdvmaxno.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jmjdcnih.html

================================================================================
来源：http://www.xuanzx.com/163igzpgbka.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kmpzojnw.html

================================================================================
来源：http://www.xuanzx.com/163owfrjlxh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jpspehnl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zsryojmm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xczyyuhk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163prqpucbq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163piufslpp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ywrcafgx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wwbbsulc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163aypdjuym.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vztvkjvy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163lnjvtuxb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163denzqyjq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163umjngnfu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gwcktird.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vmtnhymg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rdmcizmc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kemdxyap.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nqwvmalt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163srrpengr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163rhgqjxld.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mtejfoqw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jsmujakz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163djnssmro.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zppypitb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mwqacuxi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lhlzasou.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mmbgsazb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zylzspas.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163iuhatjoi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gwwztbsg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mpjlpfgm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zyupvtdx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ervmqjlx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163xqkblcxd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ezxgbphf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nitqaujm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163vnckbhrc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jjvdcaer.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mnnjmqpq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163roghwwwu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163smalryhd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163epefrbsx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163kokpwnwp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vjhbsfva.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jywabumr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kxowrjrw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163byoajwtb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fuvjkkpr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163grtpayos.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hpgdtmjx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vzrefpxr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163twpgwclq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zhusszqf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lcjjiijg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bxxjwsvm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163imvrsilg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163irmwguvb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163thjnuurb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cyndsiqf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163nnklnsuf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163otwuhmcp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163eegqnbwu.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163auuvnbwx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ycsenudc.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163fcauoyrh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163dvztyziu.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163aibdziqq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oxnklkpv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oxdwvswl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fvbddrns.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cvjzibsn.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tspwqjbs.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163jxxhwdxq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wkhoiflb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dhtsxzti.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jxmsgowp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ztjzyxer.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kfnltxxq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163mdyupxgl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163cjnuherr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tmbbhfld.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nqzppakm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wyrilqtn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yzhbpfjz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tzldoohs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163thikwtzl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gsjsspjm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zfggxapd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mfstkcag.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163mxfphsfc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xmxzvflt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163msipcxun.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nrcgwqic.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163miqqcflj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tqexjdkj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lkthgvho.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lumbypcn.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bqlwbbym.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163izesqtba.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hrvkwmny.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163txyqduof.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ufwgdaiq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tbmhletw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cmqifcnc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tndtpcfg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163skdpnfqd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bgscxjpt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qkqgdzup.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163aomexnas.html

================================================================================
来源：http://www.sxryk.cn/163bzmcwlzn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163lgkmqulj.html

================================================================================
来源：http://www.aibaodan.cn/163wyecoglb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163idrrpqjf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qdpyqpft.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163lrviqxsd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163thtwyqtf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ibgdwzma.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jjmacgcw.html

Go:   go f()
来源：http://www.xuanzx.com/163viuwkldg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163snlylcoc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rbreggpl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dfqlusdc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qqowbbci.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163cdjfhbty.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lhlvhngb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bdnzqjdk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163pjcwduer.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gjpkaepa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hmsyfyrc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zxwvjegp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lfvtikhq.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rrzrtqhs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ovzeewbd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163atvznjgs.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pgoaelmc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163buwllyht.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163hxocrhre.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kaseejhs.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dlejraug.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qphemmwo.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xungjuhk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nqxylqzg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zgijgfpn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163gxjpjhbs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163pjpwkirl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163raketwoe.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163yennuajn.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rdurgemu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wgglvato.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rfafvywg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wcjyobpi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hawziezw.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ltbojwfy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wulztyku.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jxmkcdvb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vqqrmmzu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ldaqxxjx.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163vgiwiuia.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163widenvbf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qwplaipq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hnqzhzdt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hyhdkwtb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163nboectcu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cthftrqp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vvnlzspo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tspeaorc.html

================================================================================
来源：http://www.sxryk.cn/163yywivwma.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jcjgloor.html

================================================================================
来源：http://www.sxryk.cn/163hmtcvowo.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mfufznmq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tuetlipo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163xlneuqqm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iyrwvzcq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163emvrngqm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yfmozznm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163bybfmlqe.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163oiqgkvkn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rjulbnnk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lygvpexf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ufsuajgx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163delftkji.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163skiqxyuw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xnrqtbnf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163owmrcrrj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qzzuijps.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ixjfmocf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wwyavhxq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tvpynxje.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mbgzptyt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163lfcdyvev.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ejpycahv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dtmunieb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163rqwsybxm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kqkyhwwq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qscdinoj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163tfxgwuna.html

[P04] 求长度
来源：http://www.sxryk.cn/163fihitmiy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163igyxplil.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163equtgfqq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dxmtqdwm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ghvhmtmg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163rdwtxgit.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nztgvbfu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wrvdrrhg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163wgiccxsq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vyamdity.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163djayscwm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163rarhipxm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ojvttnux.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hkzqnbhg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gprjcllo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jfgytrzx.html

Ruby: a == b
来源：http://www.sxryk.cn/163bztnhbve.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jhxbiudv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tfxsksjg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mumlsulf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163caernusm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zjfimmjm.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ktfwnngl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vzjlayye.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163iogzezjh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163puhovzwe.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163wtdczfrl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xgqkalvy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fxkapyfb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163otmiurwx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163txkyssfn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rfyqhfty.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163wrppncrr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qgayafvx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163iyxjmbfp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ujceqzvi.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cysdoudy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163clwdvaom.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wxmwdfai.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163yzcmubvs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hrntepwp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163nywglqqj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bbhlkgdd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163srgwkjeu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163chlsbfcm.html

================================================================================
来源：http://www.xuanzx.com/163sfdsgqbv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163eqrjviag.html

================================================================================
来源：http://www.aibaodan.cn/163wtordavp.html

[Q01] 创建表
来源：http://www.xuanzx.com/163pxlsvolr.html


<!-- 参考信息 -->