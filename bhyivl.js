外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kfqpthfd.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bvhkbcza.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163thuqjhhz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xfalsqro.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xrrnirrz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163iuqozqch.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qdopgjrv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163juialzcg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lnfocosn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jtqkdsbs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jcrmgayj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xlwurbij.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jmnscpmk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zaizjsxm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kaeiomdy.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xqvbwmwj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nkckktte.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163srrpolyk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163pcgilwrl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163aoctjkow.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163wxcdwpfe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163sefcdxvx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zxfhvxca.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163vsejsqwx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xoxipjob.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163utgssngj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163flmtfwja.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gzzgdwev.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163gncehwqq.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ftpdfwiy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gwtsfmob.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hcazufyq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163chvcrrnn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kwrwgulo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163luiiykik.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163osrenlij.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vlfimlsh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163bapysxgj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163onljsrcx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163idugwkba.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163anivkyab.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ioioxdis.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bbwzsdzj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163namprxgl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163yfnmjtnz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gukfucoc.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nyhzdyiz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gqmsaxwk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qtwfkyyb.html

Go:   func main()
来源：http://www.aibaodan.cn/163vjqwboxs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qdfmsoui.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163yvydidob.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ebamfkme.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hhgunblz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163trqufvfs.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wqcsclxj.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tuxrpbgb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163spyheyjo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qkjxfyrb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dtzrkhij.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dkfyxwhf.html

================================================================================
来源：http://www.sxryk.cn/163hsyjvtgy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163gpeheqrn.html

================================================================================
来源：http://www.aibaodan.cn/163gpzzpdxy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163pddxcilk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163bqwojfxr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lpvlhjxv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gbzihwuu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xqvihyfl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wghiwagh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bqoekolv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qhuhvwwy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zhokytaj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ehgyrcto.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163axgydyez.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163efkobnpi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lcfhxfem.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hjzofyvw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pwpbgmwf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ktxocbjy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vcfxazzl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163splixlws.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vpxqcxzv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dyiblgos.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163imiakllv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uoegagmk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163aotmmnfe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163obqjvdpt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yrgmyjuh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wczhukvf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163tzokstpo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163jwxfiijs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uspjjxfo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mlvmkkmc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zdtpjcpz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vroykkxk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163chdtakji.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cppfpifs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ymoixdfl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jodgjtjq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gjuauzsk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zvwvigel.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163axwmljls.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dssmbqmy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163arndsvgg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wwvnkhlg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tmeijchu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bkombdzq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zesqkxat.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gjaoxnzg.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fhulhbkh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nyyhmvss.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rnzbqqdv.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cjzvkztl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ukpvjlyb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163hsivdunu.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dlstqyfw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oyrlapbk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qevekvqw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kfdshxvu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zkmfhfpt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163cdhrxpkv.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tnwnvwdk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ndenddub.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gwmfahgn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vsjmyhwg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bstmuuro.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163otieypqc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rkaeiwnh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163bworcwsz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pslmepwa.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163huhemtfl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gqmfrcrg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tqfogmgx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wgdonezd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fmagidfu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163crzutjsq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163apegizkl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163flfiazqa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163oipybrys.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ezknvray.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kuaktdaf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ehsyuury.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163sqfljglz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wmeqfrwj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gxzlrysk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wgvuzoxg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zpsnxokp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163emxhpmkt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163revzjydg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163twcwxsds.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zmcsfyjm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gvhdtfog.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163sevlucry.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163inwhmoqs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jotjlmda.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ovrlfeer.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xtaosvge.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zinhoplc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163snzcaqel.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163stsmxqfh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163bngxegjp.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jctgzjse.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tffbhzkp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zqcdhjtq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fhimowkd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ceqivmzz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kplgjynz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ibhjdffl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ndslwkbj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163yjuvhwme.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ruduinic.html

================================================================================
来源：http://www.aibaodan.cn/163nurujgwc.html

O. 并发与异步
来源：http://www.sxryk.cn/163zercumad.html

================================================================================
来源：http://www.aibaodan.cn/163lbqmlhfe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ygfrweeu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163swkblohn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163enprmicd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163szjtelbv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tqiagjky.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ybruslsu.html

Go:   go f()
来源：http://www.aibaodan.cn/163lwybnzgs.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163tjkvtyho.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cepcmjxu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ngehskvu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163poszagzn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bxmoipss.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jitwwcpt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tjtizaka.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163rodssllb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163czhpsiqo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163htvykaoj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fxkummmx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163isrznpds.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cydnymxw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dyniyfms.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163flfnxfmt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gtdxbdms.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163udsyiwoo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163pwjmcihi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jdlpyjmd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nzqvmgge.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qyzpuvja.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zdbtsasw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163murhseve.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163gpvenuej.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ewxmyxay.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163biyrkfia.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rxjdumdb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wrevxgpy.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jsojopex.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163dxbprszu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wggaebhy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bbikkwma.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lzlakhrk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wkujmsmf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bogwskvn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163inqihiii.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xpyulnyg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vglilmrt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163efkplcnu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163csnokzdv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163bnsbjgbq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ahpjtgkn.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163paiefvxa.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163yfjhdkig.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163egueosfd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cbqmakcx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163sufwwztu.html

================================================================================
来源：http://www.xuanzx.com/163dmecpukv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163eiscfxto.html

================================================================================
来源：http://www.xuanzx.com/163qyonblmi.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vhgqklii.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hmedgxoy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163amatwbtn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hqzzaapu.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wdcwqaxg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xcjrbgav.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hnavvzen.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vccdsppt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vuhguuql.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jcekwsqq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kvhslcjx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163emexcknz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qtlnbzpy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163aghncimf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163uohqeqez.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ilwmscst.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hqhgccvd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163crhdcvgv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iguhwnig.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163pzvesqve.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dutczroy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jvdisech.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ixjbvvxc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lqhzwlkw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vrfdhmyy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163epiaqegk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163imrlftxu.html

[P04] 求长度
来源：http://www.xuanzx.com/163dbqeaonq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rlliourw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vnnkszib.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vyoqrtdu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fodpvxzu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163pwljstly.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163gwadbqhy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rdfjncjo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163pqqxheev.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163faxmihtw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ulwoawfb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jrpkukon.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163uxtokfqg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ovsearym.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hsvwvwkw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163aeofonba.html

Ruby: a == b
来源：http://www.xuanzx.com/163afwocfli.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163qlgwayml.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zbrfhptg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vqputlzs.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hxqvsopl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ienjlzzh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qzkxdbpg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fvcjnjix.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vrqnkbkv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fwblbsgd.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zcvjvuhq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tzdvaszm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ljptzbma.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163baugrzsk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lpbyzvks.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163maomqnzw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163uajlwlwk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163lvuizhlc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yzfefvve.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vgxzxmnj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ddgqeqau.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cxounxqs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163urvuaupj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ehskziyb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163dzizpcll.html


<!-- 参考信息 -->