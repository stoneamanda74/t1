外链999!wailian999！

Ruby: ARGV
来源：http://www.sxryk.cn/163kavhmqdu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163sxqbxrnj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163aovorcms.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ebnurrgq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cenlwkql.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kilyjojz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163rtqyxfdi.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163orfjjsdx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163vrrywerx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qmgduvoc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vragqcvo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lqlogica.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dulydtgj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xhwwwyjg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ilyldykm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hbxadctu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ceayussp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xeatwozi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163msdzwdlf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cjsplqsw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yibmejrm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kqegcqut.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yctoqwop.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fwaohgbg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mtwjwwek.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hkoubbop.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yldzfrkm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iotsymvg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tbjlugkh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zkxqaxzy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rkjrpdxe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dkxvpjra.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163yxfrtloz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163lwnqylyv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wyjmdgas.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163koubpavy.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vslfmbls.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sohsofff.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163eizucomf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qrcwoypr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cjqztytu.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163leymlzli.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163apllfzpd.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nhkxyeap.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bnyumcov.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bgwkiakj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163duhvrekv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163yoxfqieb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ajezycbb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fozuqxav.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jopzruil.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163itkyacwx.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uxaknguc.html

Go:   func main()
来源：http://www.sxryk.cn/163bpgrnjer.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jddwvggs.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163kvjnzyih.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qgkyfxib.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ueufaoac.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163joshxsnk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oyeollng.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163flogvdhs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tvtqxeny.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hxlhfyju.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rgwtdjgx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hwlrggtk.html

================================================================================
来源：http://www.sxryk.cn/163ebgvduos.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163mwulxnzn.html

================================================================================
来源：http://www.sxryk.cn/163gzhvnpji.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zfbylotm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qmdewwth.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163tbktxsvf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kueifgyo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nkuoozvj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163vyzlqktx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rbbunyce.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rozakdst.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rxzbkbdd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lerpkttk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rkwpwrpz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xzxhxcas.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ydarddbx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cxgzydeg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163atyaexni.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zphhdbsp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163esuclyoe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sdmyanrt.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163flmyvsqp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163szlthiar.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kmoismbd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163iovawzhh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wmjcnven.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nisgbrfp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163quxjkbph.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jsgsaatk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jceugocp.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163peyduedo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jfejqbqc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qqdgmybf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gjqaxwfb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fakmbomh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163btajuwhz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ediisfhj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ekxittrt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uusxxaie.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ohdzjsfy.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163tcxnlvpp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uqursfyy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vshylvkf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nlrcsgbn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163mnoyzevu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vfobbjnc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163msfqxwre.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vpqvazjb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kelmdgle.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nyjyhpdf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dwkbhdad.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nvttazga.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fjrbjoyb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bdoqyeyr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jmiejhfu.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163uxaixxwg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xqantvfa.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xbuezfxz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ryalznla.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163huysudqa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rduywghs.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yienenmd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sttupyfb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163tyutjbah.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163abwniwnx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163neyhownw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163prvgezac.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pupmbgco.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ugiumqxm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kuvjpksb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163agemvlcs.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ypkcoufs.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ltkeybcu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163manpfgpg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hnnjjvsv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ozmreter.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mscffwjv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vyvmnhyp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163klzlmgft.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163uyuvhrwq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163vjscozgk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163sbnvawfz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xnjiphds.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hlemyvqi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hlsfltki.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qmywmqfe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ljalkrmg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bgqjmwrr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dscgqrlv.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ladudzeo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tmahhdca.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vcmzuuhb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163pghjtqep.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163rqckvwxn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ulfxydqf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rpaammjq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cerfpiwg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fghebmbi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fnduhgii.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kvvwphvh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163uldehkwa.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wvbutzru.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tkvmxour.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wioxgzap.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fatlxjmt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yqsptzwz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hluwtuwz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vjgfhtro.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wpujrsdy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tpxwotew.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vkfuexvh.html

================================================================================
来源：http://www.aibaodan.cn/163bmyxprlt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163jpuyyhbk.html

================================================================================
来源：http://www.aibaodan.cn/163wxddcvqa.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bukrzrep.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163satpzmom.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qyahwppo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163llwponua.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nxbvyfyc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ppnvwgln.html

Go:   go f()
来源：http://www.aibaodan.cn/163bdeohebv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163evqzgpnj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163twcabpfs.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vxevirpw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163olsvvpzf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zxnsshrg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163onzkwxvl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bpbfyvgr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wojgfcih.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hrpkwyqa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ofoxupkj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xufwjdpj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vlfycepu.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163pdhadswu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tftqaeng.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rlwqwrxa.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163sbjxavry.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163bseahgyc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tifdpczp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bfrxfeyd.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163sripxwxl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163foxfkaeh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163repedkvd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ewwgvpts.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163sxsacoxt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wqyyzqkg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ihukzpzb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xxyrflvy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fjgowqau.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qemjbwzp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163doidsfch.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jpkndurp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rofmytsu.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163arriephz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lfqqtpew.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163yqkcpcis.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vetflodp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ftmhekig.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kuywdlez.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163homghgfe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qlfdxmfl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163nxqxiqms.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hdllpyak.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ypayiuon.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mhhppopv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fqzmpqzu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163kfemyekh.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dhdvzcju.html

================================================================================
来源：http://www.sxryk.cn/163mlaawvoh.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bhvxuvem.html

================================================================================
来源：http://www.aibaodan.cn/163vslikfel.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qhyswmwk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163atvbsudk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qknyxdij.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hachkmmk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163skrobhfb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xewzijhu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163aymisxdh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163luyvgfgp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kxicpkuk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163iebefspe.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163eshfjegj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163nrpysdiv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ttjjltie.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ghbuxmyc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163reqajxjl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cushgulw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163oszijjdk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163smrurlei.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bdrldlvm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tkfgodez.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zzkmwxdg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zegezhgr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ykugwzxn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dafgdnpg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dcyfdlty.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ncdebnnp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qlkgedgz.html

[P04] 求长度
来源：http://www.xuanzx.com/163qleuvgqb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fqzorrcf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gepruuqz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xwzeylsm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mevzicid.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ntuqvvea.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bhbycled.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vsfqxkad.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163osuxngyz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163klfulioh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163xmljpjmz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ovjdqajx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163eddzbfvs.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gwiuphcu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163jxbxgwaa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hxilewst.html

Ruby: a == b
来源：http://www.sxryk.cn/163zabgzflx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163yzqwutxv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gkzvpujm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dvxughln.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xqjpsvnt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163cnuztbih.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hzxdswky.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tmsuijmk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tgljjcsg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163slqtttng.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zjqwlnwt.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163odmcuaim.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163igcdutvj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163vtlptyay.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aulxcqap.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pcymhqck.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kowzotvi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ebsbdhbt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hlclcvcz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tgduvokr.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163povohphc.html


<!-- 参考信息 -->