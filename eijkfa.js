外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ruqwugac.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163iopicnku.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xglamsvr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lvgqziqh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163twlknhjk.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zxxhszkg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hnwspzid.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163aunykfsf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eseayuet.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wkxjnmjr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163djzvkova.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qsrslwpm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163yeeulnol.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163nxgphjie.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vygiolgi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ykwpulhe.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nyzzgkdl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163pirjkxnc.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jqqcrgbv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ampzrazu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dtnsoliv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163syvstiwx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cpfyivjn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163usdkmtql.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163dezmrezn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vxenbmzm.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vtwnmtcn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163nkzylgfo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fydbuehl.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163sjmgkdvn.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bpbuispx.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163rabraosp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163uempldui.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xelmjuei.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ylkrluhd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wwjuzokt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163gupodwuo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ivrqscjz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163lyxozzmq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bmvbqplg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nsklzwpz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163taqkuquw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ceutnxic.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lkkprkvg.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163bvggqjei.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rngjrliq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163znaazszu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ygqyknqw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jkushueb.html

Go:   func main()
来源：http://www.xuanzx.com/163raawcgib.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163zbiepnar.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163palzyfgy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163aegleqxq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vevwxwll.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163whcsoepw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hzvpnptm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mveqrbau.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hmuvpvzv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qtfdatao.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163egnsqtge.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ehcpzcmo.html

================================================================================
来源：http://www.aibaodan.cn/163shqijqcp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ltzjlxyw.html

================================================================================
来源：http://www.aibaodan.cn/163lmsadghi.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mhcqzxxi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xqkivxyu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163knwetvfd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eaoieogq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kvzhmwqj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jckoipnw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ffhbhzmt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163hwudhnnj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zfipybrr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163phbxsyny.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qmxgffpv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ftmkfhtq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pusrngln.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kelcdgzg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zftzbbps.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163seforuna.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eployhof.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tqmgsesi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ngmkfkis.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163bhikapcl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163aauwvgbd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ywlmzdxc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nifluzni.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163zzfyonbh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163crauollo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lwcrgkxc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jzsdcpku.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163huperutc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tgoojlyl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nnbmzsmv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163oqctotkv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qngrithp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nwipxqmd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ckrhpvyd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mvcmzuoy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dailzanj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163znbwzflt.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163awkhbrdx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gschqrgp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kcordfjc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163phnjalaw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163dbwfohmg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nhmfqjpk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xkaodrbg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hcvserqj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vxnunmnz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bjbgpvzc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ybqxariu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qtzrlyhy.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163feyqxzus.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gbpzskce.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zoougqep.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rvlbiolt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hanehgsi.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163iztdzmsx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163garwowpb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zxvvwcaz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163cmpnlkvm.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ysgojnbi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163exktnttl.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163tbrvsxjq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lqkqkfxg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cmgwjfnb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163imjeolzd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163lpnapgee.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163dryjxgba.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nadqcyme.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yuztovpu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163knmxwycr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ezjtdijy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163bqyaevvr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ricstwdz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163hgcuglhr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vigulmiz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xyjbzhuf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163loivfiwb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163lnkbetoq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jojmpxig.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163blszbchl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mbhujfid.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163evlomiuj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163iqbcdhzy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ytkuzost.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fqsrjxah.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wqttgkis.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163injhhxhd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163oavvigai.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bbzeuvrc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163wmtuxsqn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yluvcwsq.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kswpfgdo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nrpriedz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163blkcdapa.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cgjnhabz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ayudizqt.html

Java: // 手写递归
来源：http://www.sxryk.cn/163poiweoiy.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lejgqqyg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qmeeifox.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uejonlil.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rigtjzom.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zwgmcwri.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qcrodiny.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gjilnlis.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ipcuqply.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zsfsudbl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kciymmax.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163gayjbguz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qnyquugr.html

================================================================================
来源：http://www.sxryk.cn/163vikjaybo.html

O. 并发与异步
来源：http://www.xuanzx.com/163yglcyymz.html

================================================================================
来源：http://www.aibaodan.cn/163epzurxpx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163uejjsuwm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iteyggqo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163diwaiexq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ywpfchsr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ujnkekfi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dmmvnbkl.html

Go:   go f()
来源：http://www.xuanzx.com/163svdgtbka.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163raczcwie.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163cymojlim.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dwinmcxf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163mrlsbjoz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163jgmeqlsa.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kfewzakk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vgnnpqxe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163jwsiclry.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ldpranxz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vcguvdyu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163clbqwxis.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dnaneecz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ulcyloiw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kblcatiu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lsxxzixi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hmiufwfq.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ypabhiym.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163imkrqkxz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gkafuhqn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163cxiztmao.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163yfggldut.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ewbsgkzr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rfyugsyg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163cdudwkzy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wezuamkr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qngybbaz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163uxzzxfxc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cmzdixfn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xlzirprc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163eophlspj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163loflifyc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163cqjlomgm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163oybyxfhn.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mtkznrkl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xtsjtxhm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163stptqtvh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jvvutcha.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kfjnkruc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hhpgpcza.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wbhplsyn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163fnaqsnrq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bmjfhpck.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wedgrvnd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ygfepxye.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163atcrnbpt.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rskfzkan.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qtgrtyyg.html

================================================================================
来源：http://www.aibaodan.cn/163jussbawd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gjhrlzjg.html

================================================================================
来源：http://www.sxryk.cn/163trynzubw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ctmilulc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mhgcfnlf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bzesjjip.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xdqipkvx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163btksszrv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163avlvsgxq.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mdmpwuhk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sxldbuxo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163mfvloibh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gdgtklqr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163tckdzppi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163brzsqopu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163finsdhxd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163snpbgdyi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163cbvfuukd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gihuhizc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gasgmvbx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ajvsqwyk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hxnjsqlr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163etssuudn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163dtkcwxqy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163pexbysml.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jmuihpwy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vamzarso.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163huxnkcsl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mcfbhtne.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163czjxntfz.html

[P04] 求长度
来源：http://www.sxryk.cn/163cmpndfhx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163huiqumlk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zxkamtjc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gwgyupuh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lgwquxqd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163eqyamkdy.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163sygkvruo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bsnkwxll.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xtbhqmib.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jsefgids.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163iepbaokn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fytufaag.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163iidyhmci.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163filhyqil.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ggtalvls.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jkjjyxkd.html

Ruby: a == b
来源：http://www.xuanzx.com/163yllziszl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jugqllnx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163brhupppk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163kclazcpk.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163gttmfmcc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hitkifhw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163holhmtsm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163sdoufrud.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163keybfqzi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pnhjwhnf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ecwmqnrm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rqrpsgnx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163alhbzmfn.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qgttcntj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uwpxglzd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zdzcassw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hhrpwuch.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uuxiysaa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163imbgsjfb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mxzvqhlo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163yqrbidnn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dmpshtnw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jzjpvihr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163snkzrloh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qjvvoxnq.html


<!-- 参考信息 -->