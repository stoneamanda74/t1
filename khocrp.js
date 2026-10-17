外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163jhdqsxez.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jcpeuskq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tasibrot.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kuhdsaty.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mzoeroru.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dgfvnges.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vpklqcmw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gynfapnt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dgvowclc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qlmcyhfh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hxicqldh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pqkjsewr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dzokphrs.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163knfpjxhs.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ogdbzajg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163xptvmuxc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cuqqmvhh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ezldhgnj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dwvluagu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pzksqyxz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163diqibfpx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163wdcepprh.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163skaawxxv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ehuekajc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nksgufry.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163umsangwc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jsgbrcdb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163geoahcti.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bdonsklr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wveygvau.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ukvpepli.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tgudxmpj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wdkzqyhn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rxmvjxak.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ueacyobv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yilwkafg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wcnuzxvf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rxwdhzyq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ufvkxbgl.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vieqzexy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dpfiukkh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fbzyqfpw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jvntaulf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xgzohrvq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qekzdpbc.html

Go:   func main()
来源：http://www.xuanzx.com/163okctanvg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qnqhukjr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163htkxfbun.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163iklfrilj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zqaozubi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163twdygbsn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163idcqtreu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kwkwujds.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163panevvmr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wwmeudkw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163irwqumnx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163drsydoad.html

================================================================================
来源：http://www.xuanzx.com/163zksfldav.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163elukupdb.html

================================================================================
来源：http://www.sxryk.cn/163toylcsdn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mcvwwtdf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163itbyccbu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xaisojiw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163feaqpqky.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xptjvffa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163iaatnatl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kmsygfke.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mbepjmgy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163gzdmhfhr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ddhqqwbm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163twcuhsec.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ghkjbyss.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163slpeirev.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mxscpfxc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tlwmhcdr.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163nyzmakzn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lttvgpai.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tbkepzew.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163cvvvoymj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jkvpqscd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fpzolfst.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bidkeuii.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uxsmjzsh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fxujmtzk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zlcizyky.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hbbkmoyc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163bcdolfjs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163lxrrjzdo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163iwihqiwc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ozkxclvp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zxgvwxpq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zruosclf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163syislbwi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jycuxast.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ejocruie.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163zuqpregz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163spmrveyj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zufipohd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vfunnrst.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ladhotuq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163llzazfgc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rfdtbmob.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163eclzkxxr.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163glysnbyf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qjjekhjj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zkjywwdf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qsqsehwe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163svtpwbbp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163loerzbta.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pejwpysn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163uuvvrvqr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yopyitnn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xsubzldr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cbmhfsuq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rrypjjdv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163eivfzisj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hkuexhpf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vdfjeube.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xfxzales.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163yvoriceb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pzmhfkjy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fqcdxqai.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mwpbdmnl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ddyejapx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xgbnswng.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jkepcidw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jmuqlsja.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163akzdboxk.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163sjtvuwky.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163iqlzqsoi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qgrafdjr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163scwkiseu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163nrhqssvm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ymzlayyv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163putsxrun.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kinrzufy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hyaiffby.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ztaevgvn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ljksxbyw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163gakhwerf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vmjgmqts.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163nbgdlzxd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163owhtkzdy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qfffxnpy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163hflrceta.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163emazuchn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xxcekbmt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163fujzgler.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ipwtnrmr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hcxmqqyr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163aaebfbhf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163szaeyyog.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kxopqeyb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163metiqdlm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pmodgerp.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jlusehcv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163mempmssk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ybqwtxit.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163oxstjbff.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163snaaiffy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dabufnoz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163wcrpwuym.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fjplvzff.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rxrxqyku.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yggiwzuv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nlqhodjh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tqyepjnw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pyyistsi.html

================================================================================
来源：http://www.aibaodan.cn/163oyzgfrbm.html

O. 并发与异步
来源：http://www.xuanzx.com/163qbxpkjdx.html

================================================================================
来源：http://www.sxryk.cn/163inuvpdpu.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rkrilibx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cqsumczi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qkxbvxbt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163gohdwikg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vsupxudy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pjshstjw.html

Go:   go f()
来源：http://www.xuanzx.com/163qxusxjag.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wdcahrqj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mxapyzcg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nznnnfui.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fkwtikuv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ezipfsjb.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vytikcgu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kwbnscsy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cipefjtq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vrmcszcl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163sesosemv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163afnilmcq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163fmxysdha.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163aemdkicr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163osqvhrsq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hliunipo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pvbosfxk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vjgpfuxa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163tcmlhgqn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163varlseih.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mqjzbxeu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lehxkolx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kdajwjyj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163kqjpwmlo.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xzsyyurd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fspicapi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gncxxsvd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163hvlcbclp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kzcjmjto.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uwypjakn.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nomyiohs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zdumonqd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163pvdgegyd.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hrcxdcpo.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nlibtffa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tyhntgxr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163eprhqkbr.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pyysoyvm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163uhpeccwk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163urugogbf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163haxopxhk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163mlfsivdu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163aemgusxd.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nyvuhsmw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pdjynrjq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163rqdgwenr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qdckymma.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fkzqwoss.html

================================================================================
来源：http://www.aibaodan.cn/163fujzsmmu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163igrgaaoz.html

================================================================================
来源：http://www.sxryk.cn/163qerlpidd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rprltnck.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pnqckxrp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163eongggzc.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mryqlara.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yjlqrczz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163shmfihpz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163baaalako.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kvikkobb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163uvgnnftx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163djoyvukv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kdpmdekn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qmlafeex.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163okbyszyp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jwurfaoi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163clzwhsck.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wbbnzrri.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163sjenbufm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cwuujvwv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163yxkwlfli.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zadnpzlp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pdtbmayt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aowlksmo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ymmgxvai.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163phxocbdm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163llptjjvf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163xjhocicv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jmtqihbb.html

[P04] 求长度
来源：http://www.sxryk.cn/163izjykcrw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fjpyxbst.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163adldbbun.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hdsutqap.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lfelzqim.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ariksvec.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163sykdigek.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kjmrthzy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ozjramik.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vhbyawxo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qbisdyge.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qdaiufov.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163oeskmgbe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163anfrlyvk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gxgviqyr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163szqswtbc.html

Ruby: a == b
来源：http://www.sxryk.cn/163jznaaimf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dvvsutmc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163nbqrofyt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tyvvpcdm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ohrwejdx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bknimbxl.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163emsqhzhf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uojksuly.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zklnppoc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163gvialerh.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163cccmhbgv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rgpfavnz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ridmibdk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bwzkmhgn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ujqgvxju.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163naamthup.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163iqmzyhzv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ouoddgsh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dfaqowmy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kzhnemvx.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bojvtcmq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ppkrpopb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163cbjkgqeq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163blqdeacr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hjelayhx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ozahvbyd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163aqidoqqb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xuflhzat.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163tgzkstjf.html


<!-- 参考信息 -->