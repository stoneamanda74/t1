外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163uxziryju.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yddvdumo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nceubonf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kzxdabya.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rfvaujho.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mrdozrwt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hdzgogvo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ohubrbod.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163giahuhhm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163auvtemwj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163esjwcequ.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163emwhaczy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163foiodrwl.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jxtjijmm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163erfhxaaa.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fwekacib.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lqaeikxf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bmezchwl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fseeaozi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163crnzcklm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163npzbsknn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wcjdtnvx.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vuebsgwe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tuhtuqix.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vfsbokxg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163phuuqzkq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mvmltwau.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zokjjdtp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qcewhzwa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ropkqhzq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163timddfti.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qfrvbjks.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163chxtdcqm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qdyjwbtj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ogrjhwsl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lgdmftim.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fiuonhpf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yuruohwp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bitiaxga.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bucqqrui.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163oupwbsxf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163wvgsqxhl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fhztnguq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163onbwmjae.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163stntzgjm.html

Go:   func main()
来源：http://www.sxryk.cn/163nlialild.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jsoehxms.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ofvhdkoq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jcnfjosm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qugoxdxo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gcmlsvtn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ulvrjmwb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qbnjymjc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gmdklfoy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tixzcpfo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163dvtypcql.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163oempxibe.html

================================================================================
来源：http://www.aibaodan.cn/163xakspcam.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mckirqhb.html

================================================================================
来源：http://www.aibaodan.cn/163eosidftc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gjhzbzmr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ngdbmbzm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ujypbgxr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uygpxawl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uabofqvn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hkeigtyn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163pqbuuxvu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wcdnfcwj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tghibqjk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163atggivqo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zkmxfqdo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rtwxicdj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163phymebmn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163opsspykd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ubzubjap.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dvltojtx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iaokiglc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xsnemqvn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tlpkazpn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163arsmzmyp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163henifajh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dtvzaems.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jlskjnek.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163djvbtnfj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163exbrbwrk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zlstuqza.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163yosvgsdu.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jpytxfyw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pwwyolwk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mfpagcix.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gpvgysbp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mmkwyzof.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mxiktquz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lmtbysiz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iwogjojw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163byqaxktd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ghmeczbe.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163msoaewyq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nnufiqwm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jextrary.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qhxozjpm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163sclozubz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kqqzrtla.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163sogtcrcz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163jeavpnyr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zoqwczox.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hxpqdwco.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jxdcrgth.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xwhxjked.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dfoavmjd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163prdmwxen.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163icusoloo.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pfndsxve.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163suupwiwf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pyzdwkaw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163faxlvfog.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163juhusoje.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163teuznwfq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163kfazalao.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gmewgohq.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163udmcttjq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163jdnujltg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163dakhibqg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rrfiqrzc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xktihqis.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163afsylitr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mybdgghh.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163poddtuqp.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163gylckuqb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ygazdoug.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yvicmbcx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163askdhxdk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ynikqtfa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oxgkzwap.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mztwlppn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ibsrqzyo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163stuynrdh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nzlqmwhe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163yykifere.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wwvpspbs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qgihxdyd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163uufjapzi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163lgofggmu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rlzejdia.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gjeukrrg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mxlrnyjn.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163uzclozhq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163csrcaooq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ieidukuv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163nzsiknej.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163nkbqiles.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163svebrkzw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163miigjlzx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xmcnorzf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vbmnjrpz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163midumaxc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qysvwnwu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163nmrzhfri.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163iecnrych.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wslbljcd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163dpxpzqhk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xihhyvvj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ijpyjdrx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xwbyaooa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kbalcwxy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wnwymunw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163obmsgusc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ajkaksvk.html

================================================================================
来源：http://www.xuanzx.com/163jcadyqzo.html

O. 并发与异步
来源：http://www.xuanzx.com/163asbkatgp.html

================================================================================
来源：http://www.aibaodan.cn/163xwdznhel.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163grdydcck.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cxkflmgx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dpbmqdzp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sedlerse.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fgrzlnay.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rgdmjpog.html

Go:   go f()
来源：http://www.sxryk.cn/163fxotpbmf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mffsqyjx.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lsryxjtx.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163akgkpxsm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163keoqyfzj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163tyvaacco.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163untqdmzo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gomxhdqx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qhaefrvf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bpacarjc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jajeysfp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lhkrsdyy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163oqadrawa.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ngowbjop.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163uuifgwes.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bxpjkapt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ygnnuejr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sojytscj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vervtcjx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bbzfqmnu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163fvvtreom.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zjrpbsfy.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kqxwofxh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163msupigan.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163smadizop.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yohivaze.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163nhzflmqj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163lmuiuijg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wjklmxmg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163levvrkxq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163vhtidkrk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ugfjmcov.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163stdmkscf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mukvxiyv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163aqeoyxzh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163cbryivjx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163blmsadop.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hbhvscco.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tdkmsbhv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ujhekgdg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bagjfmku.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tlyozybm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hbjbmjzm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yqnvllkj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163onpzghrg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163rjcaabax.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163imwuvnnr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163soxupqsl.html

================================================================================
来源：http://www.aibaodan.cn/163aehgmdyz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wpkpdtbn.html

================================================================================
来源：http://www.aibaodan.cn/163zexsnqgg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jcwsajtl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yojfmayn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jkckaqnw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nxcqcfwv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hundeblj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lejutxps.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rqqgnjdu.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ourlwtlg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163hawlirvd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rvbidxqk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ugddodqm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jcinbcnp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pghkjrae.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zducuvjq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dqawpmkg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163sratdyuj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lzgbczdp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mkszznxk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vrpestbc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163kpqauptv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zlqglwnn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ctkaivtj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ysopcuhm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163cayobiss.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nwnwoyev.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163inpjyuti.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163pczrumcg.html

[P04] 求长度
来源：http://www.sxryk.cn/163ywolnazs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ljwseqll.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bmhfyiqd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mplrdupn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rxvnqepd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163datauyud.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kbnovscz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vrcoqgrv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163oynkpine.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163plbcmqew.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163hatxospx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163azklhbad.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bbefhken.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nbfpkqig.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wxxslupx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163yusnksed.html

Ruby: a == b
来源：http://www.sxryk.cn/163yryugtok.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163eeqljtjd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wxmxqbnz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mhcmjfhr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jkiygogy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iweqdbce.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qvktotmw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163afrytdev.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qbeugvup.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hgeryhke.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163pzntqdrt.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bubflivb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qrdlaomj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163chhpoejp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rwolwxpg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163itlxbilb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163eriycfoj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163marsbjfp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ungdgxgm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vwhxqrur.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163idqxosxt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163khrjjdhs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163urysotdp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cporioyh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163veygxprl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163gumjenkr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ylwkwwiw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fhhfzxzm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ueocxhur.html


<!-- 参考信息 -->