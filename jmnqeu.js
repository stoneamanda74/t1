外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163oycaktno.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vzspvpap.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163homyvsru.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pyxppjcs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163cwgjaihj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kirsvvim.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163drwoiwjb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oseaxftf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vzdluooa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ahlsergk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dzmkfown.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gikynhfj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jgtobkpb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xitdtjkr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wjtbvtim.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gowglqso.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qbqcaypn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rqwhlvsi.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zrhqzgah.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jugsnqgy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sldsilly.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163petgzjpl.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hswipuyc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163uycuchbx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aiqazaim.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163tysbuurw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zlqlxurg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163parpjhyz.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gaefdymx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ariemtto.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gltjqwpq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cmckbpxq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vspasamx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ljwuaccj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hwcueeih.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cpkgwhgi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163tgysoftr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163iajkzzab.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163iwouquam.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xhxsyeyy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jbsiextl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ebntupgc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163tqrkdilg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163iityausl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kqgelvoa.html

Go:   func main()
来源：http://www.aibaodan.cn/163vzwenibw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kwhlvnke.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xvlehshc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zcvbemtq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kmivnvqc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mrmoyzgf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163eqivojtj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163biwjwtxj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kwbzjsqy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163cplgvmze.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163csuyfdso.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ywuwadry.html

================================================================================
来源：http://www.sxryk.cn/163qkggmjpa.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163yrjgukfy.html

================================================================================
来源：http://www.xuanzx.com/163qufyncey.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163cdcxanfx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gyhvvtij.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gromyfrx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163agssfbei.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163luziqlae.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rqblaeyx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gspvcuxa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tbfthgpz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qwkkswbw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163htkbmwmi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163enpvochz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jwlghuhu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lpplrxuv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163miccleoe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pfxqvsdk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163bbyovvdl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zyopdaqi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ryejxkzu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qrljrsuz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lxkddbki.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163iugxyrrv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xigplwpq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oabninxq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ytznjhgd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fkhirutb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fqoywniv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hmxrnvwv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vxconeoj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163towfdaoq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fdxwxhyx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tdqzeyvm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zyfnchbn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163tukubxcn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163qlslvexb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163iyerblfc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163cakozrgf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ssmkggxv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zcwkpyqa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kvxpdcsg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bzsmeqvi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uygazkuk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cbifcbss.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163guqzxyki.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mkaocmvs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ulvpuzyz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vklngafj.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xesrprnv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nkyzwdyt.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163afuytoyk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yjbiryrj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hvranghp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cynzopzt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qdxaduaa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163unvgtqxz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zekrjzzj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hhpypoqc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163oqoxufky.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tydefoet.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ceawakwo.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vexudwvc.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163znnlwfbh.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rmfovqdj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163deojwpbv.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dpjddubc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lpimaozs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zypdplnf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rbhthqgy.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wqcxpbca.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qblvblsr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163mglaqkel.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qdasaqlc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cqyofaar.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nzuxmpvo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163gmonkeym.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163owwisfdy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vbyflzvr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163lskjxkbu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ladqqcqx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163avqubomm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mebapmnz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163mnfnvcez.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163awxnzqlu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163grbhbapj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pummtyob.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163aeoaayoz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163plmdovmo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dbrevtag.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163duxgmjig.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163nhfyjdld.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163siukzrzj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163mwqekqpr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163huftwlbw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163egsshrux.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tvvtpqyu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ahulwzhe.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qhoxgyqc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163mainmkrr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163aohoevmx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ccydglxg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yqlzwpal.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163plowokeg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163twgwetiz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ydvrmlmz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xdyqrqfe.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kqburxum.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163mxyjgpfy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163vqgiqpom.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mqpotsot.html

================================================================================
来源：http://www.xuanzx.com/163wxsrhuqe.html

O. 并发与异步
来源：http://www.xuanzx.com/163igqgesti.html

================================================================================
来源：http://www.aibaodan.cn/163kcojtlqw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ptcfldbr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jaszjlkp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ieajoqlp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163pvjlcvag.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ecawpmcc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hdoignim.html

Go:   go f()
来源：http://www.aibaodan.cn/163ocmmarrs.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xjhbvllp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163olzzgarw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bauzzlrr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wskyzffx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lsfuqhoj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qcneempp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bvmlxoum.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fonxhcug.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xlztsyvc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dhgdcvht.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163avbluvus.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wmrmhdba.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tumxyzxt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ynfochdb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hrmxjtft.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tqbzzpyr.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163bcoygqtk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jvierytp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163xjyuivsw.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yesdjlhs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mmiqurrs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bhvtkdlk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jgjaenvm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mzbcinqr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xxmyxzdg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wshphgzs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163deuahmoo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163flinlfzn.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pihrtwlb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ndbjdyfl.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pgsbfndp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qxtezxfe.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ncyrlxuc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fsfcfnar.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ekklgkig.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ndgbriwx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ltdhxrqw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bmittwwv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163qieytvtl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zzuswbxn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hmswaajq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qdlkuvqy.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yhoqowvw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163oddvczub.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163vnghtmeg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163phpmyeqf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163pslyfrea.html

================================================================================
来源：http://www.xuanzx.com/163muddjlpv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163apcvxyjb.html

================================================================================
来源：http://www.xuanzx.com/163wlobybsb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163attgosop.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163nfjcwzzx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uafxkqga.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kqtqcrqj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hbtyjqlv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163asqekxuk.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gepcbcxc.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kqvqibuv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ainwkrfy.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pgzvsbbw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163iqibsucj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pqirqaqt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pxvnlade.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163uythogxz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mpwpbdrv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ocqtblrx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qtmlwuyk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ftkanjmh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wasytvqx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163lvjqwakw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fsazespm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gojiwpag.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ajugglfc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163dedigkul.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163sgyvvtkk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wcnfsvqh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163quhmnykp.html

[P04] 求长度
来源：http://www.sxryk.cn/163swxsmxtc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gxarzqze.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163izggimfo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kzmamdrt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vfemsuwb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gbgujqul.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163guguobwm.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hczztstb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163octxnoil.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qufhbtkk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tqnrfcjj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163tkndscpf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qsikuqrz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163laktqyzm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pbkvfbgf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xqueweqh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163alrmnllp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163oeisborp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163asdzbdqz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ipvdlttb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zvnlytrw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qeowleru.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163oviwacbj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pgudremq.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163kiwsdyhr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vdveaezk.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yzjluawu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163karbvjmz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fhpguxuf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163knbhzodg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wfqyksyn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163weixjlpl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xyzousjx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jnziemhs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ltzdnuom.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mnleuast.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163nuxszcbr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163gxudnyst.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nugdkfai.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jolkznfy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163vajrugwe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gafzhgug.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qnxkxbsb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lzzhyqir.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tvzlnxec.html


<!-- 参考信息 -->