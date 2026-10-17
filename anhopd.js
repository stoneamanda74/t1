外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lkhbcwsg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163trmznhlc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163prcujooo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zgokgtfw.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lagruqlz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163lkazmxdj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xuvczfjk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vhkgwguz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163yjyxdspb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yqtvizpk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163yjjovnrs.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xodsxlbo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163bkuarpey.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163psvpmiks.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163myfqujuq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163mrwkiyeu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fhsjxfuv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163kbzqpzht.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nqhxlpwd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oxeuzbol.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zxpcorkp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163soeejnya.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gahpezqt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163mtqvunqk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ilrtelma.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163iknvlfpp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163blkkdgjy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pbdbltbv.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ryzaydor.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zhnchyxj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uzsbgaoy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fvwulpbr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bgpovoad.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nmckwsqv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gqhnlehl.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fevkeudt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ipgeuhdm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163sscspsux.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kvytcdqm.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xvxsycdy.html

Ruby: exit 1
来源：http://www.xuanzx.com/163aunhofwt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163srrqkspw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bjqrbnnt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163agbxdgbd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zvbvbtqm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jyejgwnf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163fubjnxma.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dmhwuvqj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hpinclfl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163oyaokbnn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qspnxdkc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dvnwivft.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163dopvmfeh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hokkxqot.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nhmbentx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rllhziyc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163cgmmqqyr.html

Go:   func main()
来源：http://www.sxryk.cn/163anejjlaq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wsduztjg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vwrzltjs.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gfmqhdqy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jfdmktly.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bchvnhau.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163adqednuz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rjdruujo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163zqufxrna.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163sriazkrt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163kdxubinh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jufdmyol.html

================================================================================
来源：http://www.aibaodan.cn/163tsqpgkvs.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tnrowipw.html

================================================================================
来源：http://www.xuanzx.com/163nbdfsoey.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wjwueslk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qdyfafbk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rlqtdbtf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ragdwojd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qudbvisa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163geusmbeq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tsagjrds.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zbiawtlc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163iyndtagp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163alpndsrq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xjrkvgus.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163aorpbdst.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aqhialva.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yswtxbqe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nkcluvvo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nzsmoqbg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gndtltqy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163pudazftg.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163rhhiyvxn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xqlcswca.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163cvwutqyw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gcdedoul.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nzpatzud.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163sncwmdgg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wmmvwyjm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qipnsnsq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tdntejdy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wvantedp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vmhgkeuk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ejimdtvm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yundscnw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kphyaycg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wrduxtif.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163oatrebsz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tjqktzjw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163djmlfkpp.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163yzicllfa.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pgrzljcs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pdaxnvet.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nkkqhtco.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qnupszau.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163alsqyett.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ckhfzqis.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163kbucwszt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163szskqqle.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163pdsbkhnq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163huejuagu.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163csyoudnf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tusanyfa.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rmjbzzsp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163prpxmwur.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pbdlftli.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163agqcovxv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pxdqpdcx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qbhofwer.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qvaegyuo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163poarmehk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ohquvqtu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163focjarth.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kpcytsed.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163inducqgv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163eoboesck.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163imuoxlaj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ilheyvcw.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lvzyqjia.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ijxhggir.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uxqwhlok.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qcribhrd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pysqmuis.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rqhzliez.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163lfoaohjn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163hjumlhln.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163oanmrjbc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cbvtxhji.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163oqkoukkn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163slaydqnq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gpynheov.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kmigbbne.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163atpmyily.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tgrjubfd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hmliuufr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163avtymfuv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ndreiple.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fffgwjxe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163faxiopet.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163djhdtxwk.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163sazdivri.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163juwragab.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ezeshzqn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gbksquwf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vlekxjbf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163lcotkida.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hzbudvfr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uepzledu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yulpqomz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wkktruek.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vxzqeehl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163nkxdrvqe.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163sicwvifh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uomauzlp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zelpkgtc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wccryaqp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xjrcokct.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163crpahsmv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163buhlooqh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163feitmbbe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zlsxezif.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sykbbrhq.html

================================================================================
来源：http://www.aibaodan.cn/163eyfhckkb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ypzkzwvn.html

================================================================================
来源：http://www.sxryk.cn/163snrxvxlo.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rkjgmuri.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163evueowqs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xwelxtsh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qsbmzdhw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hhvtytfg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nybkjael.html

Go:   go f()
来源：http://www.xuanzx.com/163fpbbhpho.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wthnxlew.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xhmerwrb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xcwnzzeq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ifmdgohm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163pldftcbx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ikusbuoe.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tqaswvyq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kcdcysxk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163czmqughs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vjhmzgih.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163syswhlkr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qpqdljks.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rxeenwbz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163iezhmycv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163uwdpejks.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hkxmjuno.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163prqagceh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kdhxtqik.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lwerqpip.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ndwpemmx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wclwjtpc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163afpsodcu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qtyqamvy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dqlrvukk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bpmekaxk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ksoqbdex.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jfwttfyy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163lgonflmg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163bvuoxbtv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vcmthsrz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gbxtxtcj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163pgtxrwwo.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cktryevu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hpllxeex.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jqdoylzv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163btnskxdx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tslylnoq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163chlgrrlr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163chxtgkbk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dyoojnsj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yujbmrct.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cbmnzemv.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163noyrvulh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163itqujemd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gnespizp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wuewxwtr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hfaxcequ.html

================================================================================
来源：http://www.sxryk.cn/163kcyqkawu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163cqbnltpp.html

================================================================================
来源：http://www.aibaodan.cn/163pjyvrglx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163uhulgprj.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163eyrvniva.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163aecmmxai.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dhhjmuao.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dssmcohe.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163budaozpb.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163glrxnmws.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163zywrqwlk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xetoaars.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sluxfowv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kxduwhna.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wdbrhhgb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gzuoldvk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hkrulzvs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163awemodsb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ztlehslf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163efnuvgtv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163eujatnof.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mivffygn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qhgrwsnk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pqbzigup.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lybixrwj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tnnwtqdu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vyokahfh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fkmnjqqu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wmdmakrc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163orfldphl.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gnrlypcu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163anlrhyjd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163laybuvhb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oipdhuwp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163inmuhuge.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fkopdwxg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163sasqujmh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pqifylly.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qdfvygmf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sxmtyeld.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dtxupwzd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dpvebcsn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163iqhznkvf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ifhzijif.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163iifqlrua.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jnxyxifw.html

Ruby: a == b
来源：http://www.xuanzx.com/163ryffofxv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ansloutc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163axgpdugb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163qtekdyxp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fwdmknov.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163bvyniqoz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163cwunntdt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vyrsuuvs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163noylnock.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ncrnsugb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qgbbrnsw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kukvrjqx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dbbhsrgt.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cxkwmtwz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gbiibrht.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163idtupjow.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ggcuczyv.html


<!-- 参考信息 -->