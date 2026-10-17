外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hwewzody.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iruhiemu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xufcnpis.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mamrbbjl.html

Ruby: ARGV
来源：http://www.sxryk.cn/163iqpcmlrh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bjsfqrzm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vkyoozht.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yotwrnsw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rshimhbz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ivpbuiez.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mzlpntzs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163djheufjo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pgxbddwn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jxjphzrl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163noxvwtro.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zkssjpud.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qpcdqajl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163osxywawb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wjqrkpir.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uoemejnt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tvjthotl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163clqnnbiv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ylefvoas.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hpcksunw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dwilwdti.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163leqzikee.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163vqlnpqei.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ghrikiun.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lemspjec.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fnoefxvw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ctjpgnbo.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wekqkgqg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ecahbrov.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qrdnctoe.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163upnrppma.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163awhjupxx.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163spsbnntw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163verbjstn.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vibcvwdt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kapmzlag.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xriordiq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dhxwqgyx.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qqvdhchi.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oebrmaos.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wrjioode.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163skxehhvk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bkcxssap.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163iddkpjjj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163hmwhowgd.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qqherext.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163sfgbqvte.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163cmfefnpm.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zwjwpuyu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163srrawwzn.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163knfbyeno.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jgdsscry.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lgamheaq.html

Go:   func main()
来源：http://www.sxryk.cn/163wqhtgfgf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163anwzrhpk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163juxlvfkk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163sobejjkj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vmgsyktr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163kvlzkrao.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xkxbxrdc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qxdgfejw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163zlebvjat.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gdxqaztg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nvtwnrxn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tvoweokw.html

================================================================================
来源：http://www.sxryk.cn/163wguosvzh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jxkptckq.html

================================================================================
来源：http://www.sxryk.cn/163xjmeysoo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163nasjzvmg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163szkvknws.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dpthbdki.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rohtvsqe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ivpotigz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zvypyzvm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163odojduni.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ypzkjtnf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nocvqgoy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rcdsdkek.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pyblpain.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163sbrzbdwv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vgeogozj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xbnoxtap.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163cefpyssj.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yqeduhat.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kqfwyxxi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163cykjfcwm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163znkjlrzt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dyvkmvvq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163smjflckw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yfoapytn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vtcucmef.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ajjyejzh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gfjcytcr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rulyvikk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163yxhefbxf.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163esjthvfa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163elogqkxc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tibpgrcx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sboedgis.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fslwlvtf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kbrsqcyp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wsbfixnt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163spmhoezq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163clpabdlx.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ejzuozux.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163weshzgnp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163qrlmaedq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mhrgftev.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qarjghap.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bjfcrlqr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lbeffqhe.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163oqlbfbup.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163rsopzcar.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fskwfwar.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ktsfgccd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ztiajicr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bbwzxifj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xwoxtkwl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163egrqukrx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163psdgynvc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163npmrkwqf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163udmumzlm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qpbcftoj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163quowrfop.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vpagyvdg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mpfqwshd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163uusydvou.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163trmkjule.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qkqxjric.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pttiigca.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163itspnani.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kdrsvoqf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163rtvaybcc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lylengey.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ovzetzip.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jcjdtbcd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163cuorpsos.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163czcmgbqe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163iygtbinu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bbctowlz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hgepontf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cqmgfvlc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fwghqwag.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dgovosjg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163yxfuzryx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vzgrkugg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nhoyxtpm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vwpnhduw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ldpqrhdj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hfykjtqu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163prwjtvqi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163frgfwocl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ullkrbxl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vgwbpjhx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163akndadmm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hbyncezj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163cfwvmcme.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dirzjtff.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wbtktsvz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vwblrkuk.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wvjooqma.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jaugzanf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dgjaboid.html

Java: // 手写递归
来源：http://www.xuanzx.com/163uvucvtil.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ewdmyrxv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163oezjqbxc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bpsqmbfg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rocjslgr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163oeuvmyfg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jmhqvheh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jhjixdbj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bmqfdjne.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fdfhskeo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mvhxrnqv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163bpmqgfsa.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gezkypzp.html

================================================================================
来源：http://www.sxryk.cn/163scmhmmbl.html

O. 并发与异步
来源：http://www.sxryk.cn/163mglemqwa.html

================================================================================
来源：http://www.aibaodan.cn/163wtjylfxm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163nfxzulcj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qhyresal.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cpgstejz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zpllwmzm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dxqtlncp.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fqfsaftt.html

Go:   go f()
来源：http://www.xuanzx.com/163yumyltss.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rhimggju.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163axlkxoiw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163symnsgyw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jukedpvq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163djtkemda.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jdjxsbdc.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gwdeluth.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163woewrweu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163prbtjqws.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163mkkseijs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lgcjbsxt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rnbccebw.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ymbonzel.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qwydamqn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163egbmpysj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yrprwfen.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hdhyyftq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xjvxlmdc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jxalyoeg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163tukvcrcm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163meaedlcy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163waoistrw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bydmerwi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mcfrhfnz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qrgngxwb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163kgveaqan.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wyvikzoz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163mrkvneya.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163rzuumcmr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163twypzmsx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hhhyvjbw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vpidoisf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rpmhyahn.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kqchcmhg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dtdmglfp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rbkkucob.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163anqbuxbm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163cflnohlt.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nxxiiqvz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kuzjpxel.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rgtvwyjo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gbdvspwf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dliyjxfb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qsehtrqj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bsqobfke.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163omifereq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mjiofyqk.html

================================================================================
来源：http://www.sxryk.cn/163gdieepro.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nmvyrgas.html

================================================================================
来源：http://www.xuanzx.com/163xprjphft.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xzluklxz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gfpklnav.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163dtguzvns.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163znuuyzzg.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163pjoopsrf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cacaejgy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163btsldmer.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sccmkvep.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yfhjslrv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gbvajgao.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vxqnyefv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wdwxsqhx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jeyujayl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vladugia.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tinpmjeo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rppixsgg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163aqszthqf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163uofspbzk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163papmkgkv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163kdgodtwv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ikbnicuk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vquevbwr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mgtoqqke.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ypqjztqp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vvbjjnwt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zfivipky.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ssauxktc.html

[P04] 求长度
来源：http://www.sxryk.cn/163ccltvncn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163temocwaq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bwovqswv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nhxfwqto.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zqyerimu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mwjssxbl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ioirqjcu.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163uansscji.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vkdekryw.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ogsncdix.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163nwbesczc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pfuzlxgv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163bzwhdpnj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yvirvqrx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ykdiyrgz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fihxarbn.html

Ruby: a == b
来源：http://www.sxryk.cn/163nzddcujq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163uqmtkuiu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163oioibwjv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lldkiwiv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163nomfbicz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vwxgxwxg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qumwcvae.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xjvagdks.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jchefcdw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mukwxrdl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163sspmxvow.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xcjhbuuq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fyjmqsab.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ugoaqugg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iimtqqqw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qbdpnkqw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vgzgtdth.html


<!-- 参考信息 -->