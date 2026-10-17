外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wrdnlbae.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hfyifywx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163iclikgfb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rdhxaidk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hfnbeutj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nacycxrx.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163aslcylhr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nxstarev.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163typjvjce.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163gcyuarfb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163tdkpsmvu.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tymxnwjd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163exmbhrwc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ykxnrctw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hgwuhwyj.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kjdyxeml.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xgnbgqiz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163aogiirde.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oesdqpbx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nsexnzob.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wrufhfzc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163saihlqeo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gslncgqe.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hkwhpnol.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zdmjafsg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tsaednvo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qlycghle.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fhvkrprk.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163rhrwtsct.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163tchxptli.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163cnfliqjy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163gkzeodhp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pdvxppxm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gsmserzc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ljwpewhb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cgblryvg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163faybyhzc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mosanwks.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hattgjee.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qsjhmxnn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163loiysxqp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163uqfnptkh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wvzdikjl.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xevpukhm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163jukqfywe.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ftnapfby.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wlvwxpsp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ylmokpyv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aqvllfnj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jvqdsewr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nvnwejmz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pfrbkghm.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163szwnvidh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zolcajwf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ugcfqdju.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hymtmekt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163shsbinnl.html

Go:   func main()
来源：http://www.xuanzx.com/163qvumjuaa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163znssipia.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163typplnkx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ahjxckwy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tztbwcaj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wlyususi.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tuwmwgpx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jwrhavhy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tsftjaxy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wsllqzdw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ezzkopfh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ntnzvtzr.html

================================================================================
来源：http://www.aibaodan.cn/163nyfrzdnk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vhiivkoy.html

================================================================================
来源：http://www.xuanzx.com/163xzrbglii.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ikznqvzk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ttzarkjk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hpvensio.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163emadyzvo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yyiwfzgx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kahilgvi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bxjjrqtm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163yrvrtuup.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163suqagksx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ibnohaap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pktccuuy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jnnorkcr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gnnvlass.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xvjlqrwh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ikprekfx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dswbnoku.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kkjqoyje.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163bpzajsqv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163iopabtbv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cgruzlcz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163jygkfcbx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163inyibvyh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ysjcqcwu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163oihtgutb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rzdmfdzx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fhnwyhlr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163daglgwjg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tlhgayix.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ptlkfdnb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163crckqpgp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yeffjajy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dkqvzckt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xawujxdb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163oceiedpr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ltitmmpg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ejjcoozq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nbufhrtb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pxcfuzdp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163shasmfjz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sywqaixm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yxcelmqx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kmlbjlck.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zaoheihh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163miupvzqt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qioywnpm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163yvagtyfl.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bzccwaaa.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vbojgdck.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163basaacyg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kyddzfvq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vidudbht.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163cxxadudr.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163pasjtiqn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gznnyjnd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ugzabjxj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lemkwxie.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pahlvncw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163xdyejyxd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gmmplusi.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kpgwbvec.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jszqflpo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kebdnmxi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lnixaobj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xkngbhrx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fyedpnyt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vusclexw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qzcofqud.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hnbffizk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jzxjduwi.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dbvezgkz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rgztgyas.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xdqgpnbp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mwekyydy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kguxdmuf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ngaswcsz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zbiabgeq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163phbrfxco.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wrdwganf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163epyxbdyj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163sidbcinh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dyyybzoo.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wwhrwlgn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jqgsefrv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fdwgyfqn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163igeweijz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vrwfvofq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163eoinjvnv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163stzmepmk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cqatsxyz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hoglqjci.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xmqsejmz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fleiooat.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163sunbnscf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fpiwokzn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vwsjtoie.html

Java: // 手写递归
来源：http://www.sxryk.cn/163vicypbum.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163nslfzjbi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163iyceaabf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wmaojvku.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163puoetbse.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zlxivqpe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pqoivjxe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lcjpyzro.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vofvcppx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zoimsqfy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vogsylzh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ilcfsigi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zbyciutc.html

================================================================================
来源：http://www.xuanzx.com/163lxpugxlv.html

O. 并发与异步
来源：http://www.sxryk.cn/163pykikgbq.html

================================================================================
来源：http://www.sxryk.cn/163ifrunmtb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ttuaoksf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163nvuynvgh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dggwieyv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163laxbhteq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ipmvufwu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ieaupifk.html

Go:   go f()
来源：http://www.aibaodan.cn/163ufstugnz.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163fbwmrkxn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lpkkzphz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163sekvzzsh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163netohtgx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ojtsavai.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mfrjbguf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hibvzufg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163araxmahw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163cppohrgu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jqjeptat.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163cccerzwy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tzondtml.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163niglrkuc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qjascfvn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rqiutuim.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163scqdltud.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hnnfdggw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bcyvoyzu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yjzftppn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vsnuifza.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pvotxxng.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dkyboukl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ryowxupy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163wvixtwwo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ewqockte.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163omtowkle.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163boyjjtbb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163eukuivxm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163sqvxxere.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163rqjlbmav.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dynxfjzo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163donaweix.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163grphemmg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163stpdarqk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wrhxbpga.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ueosknyy.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ivxrhtgr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163alwbevih.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163luihfjmp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163yqyeunqn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163eaycgcyl.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dbspfnch.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kzqbirrg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fzkivicr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ojtgrfsx.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163fafflewy.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wxhbknbu.html

================================================================================
来源：http://www.aibaodan.cn/163cebskqyl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163pyoibaqh.html

================================================================================
来源：http://www.xuanzx.com/163cbeaekef.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nxzhtkgj.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163emddkobb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163kbmvfcnv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163efrsbnpb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zpasamdu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kktkbect.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163lyfwxiwf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cmncujhw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163hcchhzir.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rktrbxpa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163yxxnzqvt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qgdnppgo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163nwxjknwv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163talppcim.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163aoiltoxf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rfgrclit.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163vzzoexmv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163aciaazzl.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wuxkwotr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hylrdvju.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163pgxldqpw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163etsnbvlv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163oxwcjhne.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gikgbzvg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163plwnodoc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qwjctcfi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163advtdacj.html

[P04] 求长度
来源：http://www.xuanzx.com/163ydnyvfzk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163uokurqso.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zjurpprp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qvcvbkzl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jorcefzm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163oaqmqwqu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163axuhxnjt.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dvyxjnzt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hrhgfuvp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163aveubciq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163soecwdbg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ntpgdccw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lilqcwow.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jdtxxcws.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163kvgshnyu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ymxkpbdb.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gegtzefd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163edpvsori.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yhmdnqdo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ddjhbsox.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mikzpjhz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ufbjuxhs.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qjpyucdw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dlioaenr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hyvyfzzf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163soiwmfeg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hcjarbhi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163skryamyt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ofwairie.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ivyyudru.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cewbbvls.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rdzkhdkj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163clvcxmvt.html


<!-- 参考信息 -->