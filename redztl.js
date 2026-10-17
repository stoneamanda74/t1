外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vbferjfh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wmczahon.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163hdhmbbtj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rgrplmhd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nwwkxpxy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163kcgddvjm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xsjarfeu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163svvkxmdd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fuustyky.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ogymjyoh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mifxwolm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pwbyqacv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ajzletcb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163iblcpbmh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xggqtthg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pesycadv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tcshtdpc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163udflokwu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163roqkqyhl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rzkzozfp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ngwxpvie.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163owfrdryi.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gqfmdqqq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hppfmvfu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bzbodqfe.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zukwpvyj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163udtouplc.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ajimzavr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ntzmxxlj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ictaxaze.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163zcqmwote.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wlvsndow.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163daygipuc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xbqmowsu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163dyusvjxz.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ueikiiww.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ggdctost.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qfubricz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nvvmapiv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ymjqwscs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lkflswoy.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vcauuieo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xsxogwxc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163quhunaaa.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hpncexds.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qtqisbme.html

JS:   require.main === module
来源：http://www.xuanzx.com/163aewbjhlo.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tenppfex.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163cejfbdgb.html

Go:   func main()
来源：http://www.xuanzx.com/163vanfwcsg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ymavuixe.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ixflruok.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tfukqkdc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rskktkav.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163oykxtwmk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mzbyviwi.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ohwduged.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nviybwts.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fhjrqerr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163uqfywdky.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ushmzzfx.html

================================================================================
来源：http://www.xuanzx.com/163drhzjdhw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163airiyomh.html

================================================================================
来源：http://www.aibaodan.cn/163fierrwbs.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ptzjhpfa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qkueefwt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kudexlhl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vdtznfam.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jzeybzsv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fvpzuskh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wpkychqh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wyqoxzbt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ofgymotn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wizwasrq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fcpbxxuo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ncigvgjo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ambdvvju.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ldjcemvn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163geeznfbp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163suaovlhf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dnymknof.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163laooejth.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163upskfpro.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hxoqflrd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hmwveckl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oajxcbag.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dqxabzfm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vlxeeztf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rdekoazq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jvrqzjul.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fpoaunwr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fwrufcet.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bvoefuhd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163nvwvohka.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hhptvjvb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mpntlwes.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163acqgajtl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163oynqdlyd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uienthzi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gyoadcyv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bfwecgsd.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vclkraxd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dvrdbnel.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mqzfhnjx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mxidgflt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163edprkocg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163eonldqtu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lrwgweyj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163asuuoyso.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163waxcjaka.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ocawcmie.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163terchszg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nynnwkar.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mdzmfbtj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163eshqwrdw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zjkzaseg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163invivgmb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ksubbdej.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qbzchhkg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163iscapntt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bxurmxza.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ezxrelgf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wojkryxw.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tpcbnkfk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163whevloqb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gfeahhov.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163phesuuaw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163kdhguhgl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ytwotkco.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jgulbivk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163avwiyuxq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lvursnhf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pbkkurcv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gldwqfkt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yvvknvol.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tkakuyhe.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dhfaicoq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163slybxhob.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ciclkbqx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163opzdyxnd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163byyvwcwb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163uoganijv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qykyfgqq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tgecwiuo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hxbbcolw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163zguaffdm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163cubulsii.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hzcagjxx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hmrkjpsp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163obfjuasn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ndnvksoh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vzesphye.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mdlszucb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ttyivsfv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cjoehsbd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163cuellhkp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163taoxugeg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ysdhkgvl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wrxnznqy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vombzbuo.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163nqlpkeyp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zrlmmhfk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pdanddpw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163cnotdvnj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sqzzovxt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163sxuvlois.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qwidnndk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qmrhbfsa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rkmzyoom.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163uwvuivll.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dzscwupb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xjeucgol.html

================================================================================
来源：http://www.sxryk.cn/163xxdlzctx.html

O. 并发与异步
来源：http://www.xuanzx.com/163kwfqopvt.html

================================================================================
来源：http://www.aibaodan.cn/163jkjquxza.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163zazwdfhl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iaqfwiwq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163yhqallxm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cqekweqk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aidiqttq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163hgwlfges.html

Go:   go f()
来源：http://www.xuanzx.com/163fohbwahw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163igkeslmd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163oahvpmqx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163udgxchvb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ibuzbgnb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zoqmrlsg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163roztwupu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fjlvuqzv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ckqdbwiw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ruwyhzjt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vtdnvxky.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xcxrpzmo.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mqfahjfd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163psosaqxm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vozfwetx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ecjgxseu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163sqznzuij.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dzwzsqdo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163erndibln.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xvaabedg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163bgqhzmlb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wznopzac.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163eovwgvnu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rarxvunq.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zsuprrul.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bncndyxp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rlakgwhw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163zjwaeurh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dirmftua.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pworkasr.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163tskdojaf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ouhjadfd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ksnjoqxv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jgqylwpo.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vncdckbf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163axynijhi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163woiqbfyk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163upazwxay.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163klgzukpa.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xokujwyi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163owsxmzsr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163antrikyr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163npkbeccr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bbajqppn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xtvewkoy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dagnunnm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ymdsofph.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163synussyg.html

================================================================================
来源：http://www.sxryk.cn/163rdzrnuyr.html

P. 常用工具函数
来源：http://www.xuanzx.com/163sdiwuylm.html

================================================================================
来源：http://www.aibaodan.cn/163anzbuykp.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jkklizvw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163kbcspjvp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163frkgzutl.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vfaptlmr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163annqkjqu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zmqtenlc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rxblnvdh.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rrrubpgg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mwqcqqpe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xhhlnhcm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zzmnmgte.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163obpitcjk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dweanasu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163zekdzzmn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ijiphzoc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wocstwrl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jbuokxvl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nyucfbah.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zsegkwok.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163kzmswgcc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163fatntqot.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cyxokloy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mxclxztv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163actpbexe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yqfnpdag.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zvelwzkw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ntfrbuyr.html

[P04] 求长度
来源：http://www.sxryk.cn/163luverlgu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vlklrlzp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ewzbcgwo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cjezdrwa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dfeudlah.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wrzzfoec.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zatxfvvj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kzhypoye.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ypkivbmc.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bwwydwgn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163josbvlda.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163nkakkedl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163yrrudpsm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vrsmuvtp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qxqznhkt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163otyvbxrz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163uiszinjv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163khpqxpkf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163nhsvzjtr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163boulfdqf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163chjnpmrp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163rdnkaiwm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163vdggsuyp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163sditniqz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163pykvkyls.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lknvwifj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163acpyogmk.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163myfgxpoo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zqbzonef.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ykguxepr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163opecqohu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163iookeqep.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163tokibpyz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vsglpgpn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163znikdwzq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163pjzkexmn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gdlrvbnj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cokarhgf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gceqirdj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163lkpmdttm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163smijqegg.html


<!-- 参考信息 -->