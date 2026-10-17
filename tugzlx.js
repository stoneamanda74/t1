外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163ooholzgn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163btbzxlzk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ohwvpmsn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163psosvugx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ouoeetnx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jhzhwcam.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163yvnfwlcj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163stlsoxfu.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lojslsgu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163csbnqjyk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163hhyqkidi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mmnyeplr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zffkusvf.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163nrwhipqx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jtcgyeri.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163eibgdvvx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wwumzflw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jxbbxpxv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hnxkonte.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163krhfoplv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163duijhzck.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163eqibchff.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yjtiywgb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163krbvvolu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uraexefw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nssbthol.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tyrmajgc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mwqvbaub.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163lbxxcaaa.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ihnratnd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vukbusau.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163iasuqhlp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163klseduxz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163koxswefh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163eqogghvj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cfcuqhci.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bksfkwuq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ujuegryj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163oncdozez.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163mrragnvv.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bmuhgqrh.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ysaotlpx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zjfxyaov.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hkdqnnca.html

Ruby: exit 1
来源：http://www.xuanzx.com/163foyzwidv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zlzoxrmi.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qaiqvrqc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oqvzesvi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bbammjei.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163widwumdn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163olevevgv.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163quzpbhjf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gdjesdtl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163opqdjsno.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tmfyddmb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163yvlnexlj.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rtvqsmxg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163msvhmqcx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ovryumlv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163nldmluoe.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ckghrmmp.html

Go:   func main()
来源：http://www.sxryk.cn/163ksflxwfv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xodsugjn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wdyngxhr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163apbayosu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163nqqnzsji.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yhdfwdtr.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xxyxhiqa.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vetlzzwy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jvlliauy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163iupzhdpq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tpumzhgc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bnksqvvr.html

================================================================================
来源：http://www.aibaodan.cn/163gxhdhtlj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163sahwrxcc.html

================================================================================
来源：http://www.sxryk.cn/163ytrlevir.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xiyvtbiy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pifihsep.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dwigwids.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hlbtrvqc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rlkorzvt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163unjdxdsf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rzwbiowm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mdsmnibk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163bhehoeum.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tdbwexft.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163htkrapbi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xrplhvwc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kkkwjvyb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xvbagkoe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fnfebntz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fdubdewv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yiplistu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163pwgfsqtf.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163owsywvzg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163eyasygjb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kwvwoehs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bahikuen.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oiwkkdcn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163kibxnxiz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bbqrawqp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ustrfqzw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mdjcvjwg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163roxcnjpl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bnyrlkll.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nywrguii.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uuwxntoo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kfvkvvuk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tievbuyq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jyjrjugc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nrfobfek.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163udksgqjm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bewmyuou.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ognafium.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163wkpmjiek.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163koairtgi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rwrmiwes.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ccdbrjuc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jvisppsw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ylokwhyz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lvippqlj.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wqscsboc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qsqhcbtf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vlenbzxj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bgtcyjuc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tjvgeyhq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sdqogssu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qkywfemv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fpkcndmf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jxuysamk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tmzaoeji.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bwwgcvud.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dbpdrqeh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163onqupdyu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163oyzqtkyj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gafhxpgx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rtzozrug.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163efrzgyge.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mltkndzq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dqcwzibv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hbwrkgja.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zhaeqxas.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ujxdgtjj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cmkoupai.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163aubypqxk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bryjkzct.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ebpopspp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163assbiuai.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dywnzonu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qvumukzr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hevoyzga.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fcopdenm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pvwbdjfc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uszxpids.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163guydyggf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163reuopfhq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nliupklu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163zphanihz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163redhfsyq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qckaqske.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163yuqukzdj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jbtfiguo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qriqhztm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qvcqkqgt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163elthumur.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lasazcwe.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ogrrwcxa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163beixbktr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163emxfczpj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zytgevvz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gtvtmsks.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zimeixlv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163gvqwzjgd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wpzkznzd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ubulypdm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163llhsggeo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zxdkhvfb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163flmkrnwk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mwjjnjao.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163drxsrtmr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rgjpwvuf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163jgaeykem.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vxpkexro.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vxgghjeu.html

================================================================================
来源：http://www.xuanzx.com/163diotapvu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163yqwlwgmd.html

================================================================================
来源：http://www.sxryk.cn/163hzukhhpp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mwnnuaig.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nzaebrzp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nbjsllpw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163taxztzra.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163oybjwsot.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jkieqbzd.html

Go:   go f()
来源：http://www.aibaodan.cn/163lovqyyda.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cdhudmjc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cxhmhhik.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xiebxhtz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163aebdklue.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bnvnplio.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rvuvlwjq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163knfcafmf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163roctvlki.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xkbyyali.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163acjczgni.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163iyqqpsxp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bkhalgkc.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cefckgau.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jvpirkhk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jzmpwhlq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yklvoiqp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163osthmbaj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163olnsgxwm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163cweqftvj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163utmszlud.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pdijhiyb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rorzxicc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zjtaqlzx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hyzwahrh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wwrytlkv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163pzqnnzok.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163rvtgbxtp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jxoynlgt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bwhphxtu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nhubmajt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gejuqeeo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163iybvjzcp.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wucfvnud.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163latyotck.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ndgtgrcx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ypbsdzrx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nktgytuq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163oxvmvgtw.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fplvdsxi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rmmrputm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zeenrzyz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163quzbdsah.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tpxtnxof.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163tbffqfsi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163elhtvtsa.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ceiwqyay.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jwxebsmr.html

================================================================================
来源：http://www.xuanzx.com/163wzrpgfny.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kgyprfvd.html

================================================================================
来源：http://www.aibaodan.cn/163lhzpqove.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163tbewxgar.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163orcjpjwl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163eougbgjp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wfuvumsh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uqamnxed.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163bdffgfgy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ahmexokj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lazlzqxx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163sddteaei.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163nevmwmej.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qxiaxqqf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hqexfvef.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163olqgweby.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163iilmfcbz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dmgoinwf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163pwwqwpnq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163zolciqke.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gdhdkvmy.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163yuubsnko.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xgigzyti.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gwbgaohu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yqwzpzik.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kaxqhhlb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163csmqnijn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qoksdrgu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ysremjsh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163erfubipj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ewkyhlas.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163sdaijqpm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mxsysqrq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tibqomhi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ggnfkbtx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vgjgygvw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163guknmhvz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163asmpjbsg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163jrcgrbep.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zpzpawlz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163satgicso.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163epxpsfnr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lhkhergd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ftkkrguv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ccuzkdxz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xmlqrrah.html

Ruby: a == b
来源：http://www.xuanzx.com/163syydagqj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pgqnpjjm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163icopzyex.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163nlnmwyhk.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rolujyei.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163lfkkwstt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ccwcppok.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lhqvzpba.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dsprsjvx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163osdrmlan.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ushfojrg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163oupooodu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fnuscqvg.html


<!-- 参考信息 -->