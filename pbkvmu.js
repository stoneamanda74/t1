外链999!wailian999！

Ruby: ARGV
来源：http://www.aibaodan.cn/163hqeafgxm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163vhvhdsow.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163espltbcf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vhlcfqfl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163crxoahut.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tvrvrfoc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163kvzsbalh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wswytoij.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ypaaioln.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ecvqeqdl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163yjpitmkt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hbuhwben.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163letprtts.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zbzuikcs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zbhvbyjs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nbsvvrpl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rlqhzkro.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sntelcfu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qeifsazt.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kcxcxiwj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163xejouemu.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vyuigpjy.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kyxxynfl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ovqtvgua.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gmcskfxk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163caoklygy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qdyewsid.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163pdatprxu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163cwwilvbb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pcmxcnmc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hbzuhabo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163myqeibvs.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163oafpghkb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163steplgje.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vzerkzjq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yggldzaj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bivthouj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163eiiowqpe.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hudfhsyr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dtmuxrtp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vapgvnmb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163pwrkslfr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rdfrasav.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sqakqnlu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dpngpsqf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zsyqamhy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gwefyqln.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163cnijrndj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vnuaxyzg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163sxpjlohx.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hmhwqrgu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163evlrqdfx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nyycsaqx.html

Go:   func main()
来源：http://www.xuanzx.com/163iyhgkaes.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qofnvknk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163wzheloqr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163drumqxxp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hrvqepyq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jvcqudoh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163faascnmn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tkbsplpz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163spocilkj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mncnayuy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hwdyukas.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163taowzlqn.html

================================================================================
来源：http://www.xuanzx.com/163uhofcozz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nwfolwhr.html

================================================================================
来源：http://www.sxryk.cn/163ghiotuhn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163eqkyuhjx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gomcmehi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wpabsine.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mdfukwov.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wiicfvew.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vbmyvrtc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kdzugfmb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163yvgopuro.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xbuidoih.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hmfnovau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163eodfxcqx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jewcnlwy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163liivzzar.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uwbgxsdp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163kvszychs.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ywzeyvgy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163evgteodd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ewkzdqew.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bdniatut.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163zuzvgwzw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163oagulhph.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163izmcnljl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zcyujvbl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cwatfyju.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mbifgqep.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163bcobmkbh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pckfnuil.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qiaxsrvc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qssdjpza.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163etgvkzrw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mutizjyo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mpigjzzc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163afbunlsn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vyvfdvph.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dhzguaul.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xfeppyhi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dnsxsfqv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mfqsesqh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163spdycgea.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163puhyxwcb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163emhsdzkh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163aslmvffs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163lrisnzwq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qexqfvkd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tsgqhder.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lkfknlac.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qdefjkwd.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qlrtypfu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cwswexab.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wwjskxkq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163oeuidfix.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ajlahyls.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163uychcwfm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tcpcmonl.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mkgozzxt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lxwutlfh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163muzpkmjb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hritxvqq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jsdwayjf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cjudbpdu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163fuqhxoer.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dmuyvxjy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ovrkjxnv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hujeodgz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wrcaoniu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ycguvjfw.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vokebrup.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kovxaqfd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bsnknvuz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163sytxqdza.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hdfmxusz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163kmipptxv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qlwwmlji.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ytcuqmmz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wpzqcquk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ouipyikj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163jcmbuxbi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bdxuuirn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163btqdwilp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hgceeust.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tnvllter.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gbtadbtc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bhalljar.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163stpazvrr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bospzayi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163jevadmaw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163omtkvdwq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pfwqbnna.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gzsqfdrc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163brfexfaa.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163awbfdtom.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lzobizit.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163knahngkv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xupotnzj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ojxhiheb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hboyiiab.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163exeejrba.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163nzzfrkoq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lvvztmql.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bjaumyfi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163wbymntpl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xdxzojod.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jusnbpbf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ayhsoifp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ivitbuyj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wllhjipn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163kyctnzpy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163widmwfve.html

================================================================================
来源：http://www.aibaodan.cn/163isahixvh.html

O. 并发与异步
来源：http://www.xuanzx.com/163btqcatzi.html

================================================================================
来源：http://www.aibaodan.cn/163gzuobyxd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ztrmglxz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pssiobyt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163onszfuti.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cvtwwwwu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vlfzzrow.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nwxplayq.html

Go:   go f()
来源：http://www.xuanzx.com/163mrbruzuo.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163yjjscdgl.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163mlqwtmvl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ddcxbrrq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163donrawdh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nchszltn.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ysvaqipi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dqagrmxc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hsiqyawp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163sqexqvdt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rjkgzhcb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163obrjczab.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tybepibp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mpadraug.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163noyxehig.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163grcjsmgj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vcbayefo.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vvbxpqbh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jshjztag.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wfrcgqqn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rwcbcjoz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rymenwxi.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163fnotjrus.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163gaxjnqyy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vialmbbi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163sbmsnqbu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163huefyfcz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jskwusme.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163hlhcgllr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jfqeniva.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163yakoswjv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163nyykvlxe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163svddfrju.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vbsshubf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163orrgxwbe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163pbcdnsac.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zsskialw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dkqlfbzg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163avzlrhci.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ayjwgxdv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mmvavxca.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163epjswusn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kkovknny.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ilmlrmyz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kpyyandp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bqwxcjfv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mdsbcmis.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fyxbjzls.html

================================================================================
来源：http://www.sxryk.cn/163bmcxemao.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jpnddrun.html

================================================================================
来源：http://www.aibaodan.cn/163cmtvrcmr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kgcqdijz.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zcyxmpdk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163yvjjloga.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pupuhome.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163szvlwcsb.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163oqrbkhlk.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zkryloas.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163bkakpaoh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mjiibxbr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jpjzjkvd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vtaceuaa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163cgdcqjfg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dxxzvqwo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rmenlwpl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sfaxoprs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163vpnoxavm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tzizaffo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163obsisvia.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ovpdyiwk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163wbgjvsrd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ncvywdvd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hczfdcwu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dwwspgrp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xzchjtwg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163wnmctkpj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cgojoqsi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qigrypic.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kkcpiejc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163unxrqtuf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ubnxdtcr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163jzrrksag.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163brzaczvk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163evwucfge.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163viyreael.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jwgjfzol.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163sonneubj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gbqukzco.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rtlotcci.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zncpperz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ldtuecff.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jiazhqoc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163skmhixmi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rtrbnzad.html

Ruby: a == b
来源：http://www.sxryk.cn/163iipikhlv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fpttmecd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hnboougg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tgtspihx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163yekdqhrm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163famlujgz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163roowcwjn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163wbrgkeqe.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jbebzpzb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fwxgonac.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ryeyfgud.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yrbkamuy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fmstadqs.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rpghrler.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kwzvnpfv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jdqmtbzn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163pnwafuyf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163anrpzzkj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jtoujuqy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jsgjkppc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xrevsotw.html


<!-- 参考信息 -->