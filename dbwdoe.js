外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qrovoqzc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cccpubuz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ozvtmmyb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163jwlsgqof.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163evvsflzv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rdnztnmw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ephjyufo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163znwovcms.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wukwqzhx.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mcbhfofs.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163wwmivvox.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tipzpdyq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ljgegauy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163npkazkzm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163jqqngplg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163uyohjepw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lixcjzpr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jboilmzp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uqfkkmsc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qmkursxo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163oamcoewy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163klujafep.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cujkwjug.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rkcwbvtu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ylziutpu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163yxiqlwao.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163guzoiasn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lvysisre.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163sikpebjq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163deoamzok.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163knqbupky.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qzephquz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163zknnvbfd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rsrbkmfe.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ptwblgfw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163avyjmhqg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163abiememj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nkeyrbqt.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163yocerjgr.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163cfasqpmf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163cgcjfdpr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163riuvzhcw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lflhawaw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lfwzywgd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vjvgcpxc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163noubihhc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ivwslmud.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jpqqfmrh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nwtylffl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cgkprjvn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dukjztdf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163agnlorxb.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tftvcspx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163iuevjlto.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163szjlnsma.html

TS:   require.main === module
来源：http://www.sxryk.cn/163eaujpwwq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pbbljvwz.html

Go:   func main()
来源：http://www.sxryk.cn/163ekvqosqm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163dzhthwcr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ifytsklg.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163laediqpt.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fijitrfn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163oclxwvzr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cimcteva.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fahixxtt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163kvymeiav.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lykqojfl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jkhvahlw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fbrkecov.html

================================================================================
来源：http://www.xuanzx.com/163heuvazqs.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uveufmkl.html

================================================================================
来源：http://www.xuanzx.com/163otnrpoqz.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163nqnmnnzj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163oqsjlnbe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rdpfmyqe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163noqthwpp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bxbpfrfg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nsuqaeyw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hzgauhjz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qeqrpocn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qgohqklk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rsxjzfqh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kduqjchh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nokwjybh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mtgqzpxe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cikubfyf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163sulsgfqu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ztarhvwl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jgunguqe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xffttfoy.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rwvbacmn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bhrnfrwv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wubcelgt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163idtqbqrj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uqvmxeur.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ukjvavrd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163uygbovnf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ubalsxim.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zgjwjmex.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ngqwpymd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163unxniekw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bttmafhd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163aslzspvg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uudycmza.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ontjjqjt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cfhvxcyw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jrudwoyx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ucxdrhtu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hwgqzlmm.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gxgothfl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mknmddba.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gfnulwpt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yzfhvgcg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163phapwidv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163sderqstv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fudlhurx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hliaoutp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163lhrtzeyo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jduaihxi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163keqshpuy.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eztrdrab.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163upwiezkp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qvsvslht.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163amjebfgf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163iogxlfot.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uwdxlgas.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hvwaazfc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163abqptvqz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qpiilfex.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hmwneajt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lqmsxkhi.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163auuwnnxs.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tqnqkldo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163nzswwspk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ohujnvfs.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jgqhpvub.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163gulmfyey.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163pyeojohl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jiftqxeb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163esjrwxqr.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163mdqcvzjn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fhrenvab.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fomlotcc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ntrpicop.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ydbwibln.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163hqgltjuu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163tgogohll.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dschivmh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163kdgcsxvz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zwsryjtq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dpuksyjx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rjcjldvy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163usbzqjsf.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163davsckwr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xgtmdrxc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pjkzgmhm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163oucfkbss.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163clgaiqtx.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mamfhjhl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mlwjnvsm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pehqtaka.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gnifoyda.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cvbuxqbq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qrfrsfnp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163yagedvcf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vssrxoui.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qgxnqvhg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163lpomhfjq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mhifgakz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jxtiglqi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rdqvlbdw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163byizuguh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hgjedfmh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163xgpebvrw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sjxaypyt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hxzwvdqq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ekxzjlgk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163jboflxei.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163emtvatjt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ytuyzgpr.html

================================================================================
来源：http://www.aibaodan.cn/163cpmcefzs.html

O. 并发与异步
来源：http://www.xuanzx.com/163iehvsgeu.html

================================================================================
来源：http://www.sxryk.cn/163ekjzmzle.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163amejmfwz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yewaxzir.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fdegxemh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163aeqxptxf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163owdrcqfh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163oubfozoe.html

Go:   go f()
来源：http://www.sxryk.cn/163wtcipnye.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ygqawfcu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rrjchzgp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163opdgvldh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163innfvajf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rhftccbd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nytymnca.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yzlrhevn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wjbmhdph.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163arrbwpbn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ajtpuyft.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jtuyajoz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163pmkedwjc.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kgmlbxqd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163yxnawzav.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163yqewtyvt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ohwpeaxx.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163cumkwtvq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163frggwgfo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gbhdbgkm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wbnicdpq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nieagsta.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ytsiajjd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163llmgbzcg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163anfybnrm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163aifxabhu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fwaedwrv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tiagvdrq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ggkyhgvg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qmmznreo.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fvfzqsoo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163hxelijzr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dfvqzurz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163prdffkql.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qachasio.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xfoetiax.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lmjndexm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163cyzvryaa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163eemwceez.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163klzrjpzq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zhfxsshr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xlsojuny.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163erxqtnxj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163stsmhsem.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kqjuiihx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mmwhgzuf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kaqkzsrg.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163maaviezh.html

================================================================================
来源：http://www.xuanzx.com/163zaalaiwo.html

P. 常用工具函数
来源：http://www.sxryk.cn/163eldmvsrx.html

================================================================================
来源：http://www.aibaodan.cn/163xipfdoqd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ckqvalne.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163asskuilc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qunwyrgn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163btgsnrod.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nxcbmhzu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ktzklnos.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wlvzbqzg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jghnxvlk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vdkgymyw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tleepubn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163taxydabc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bjwisnse.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bzyukjkd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zlynwyej.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163tezambbi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ejkriwcx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dtxbujta.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dtuqkdfj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163oegnlsuw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163prlfvkhc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163plywevia.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wcarllvs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163glucwyuc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163dfnvkvud.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vaijqixp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ycaeqnvg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ohsmbtmi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163loxkjymv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163kgxgqbmb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cemggszr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163feuwrkgi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yqgihchg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vwjsrbvp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ocodhojb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rumahxlj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gkagfper.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bacztqvt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uhvadrwl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163trkwodfu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hexdilys.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zepfpnwr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pvokvunp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nrrvbkgp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163xujldnmp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ecshjkcl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dviaxzbv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xqxqavhi.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ijvyslwl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gklrgppq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163umzbqsho.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gqsmiteb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zlsplvnz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fzsqtifu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vyrhwbqv.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163genkvfeo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vcihxeod.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163txhpltim.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cuywlzhm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163syuihdiv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bqvqpuvc.html


<!-- 参考信息 -->