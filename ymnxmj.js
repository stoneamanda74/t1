外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163psrtaqiy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163hkwdwmid.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163cnlsylrg.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163forzxsmn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ikrplcue.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kkflsjup.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hftyrybo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mouizlum.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fzafmstb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ludszdjk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rpsdmvpq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pukdcmfb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wvpsoltl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mtztxzrq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mhyvjecw.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163exlctuqy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163giagloeu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lsovasof.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jygjcqoa.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uoxzpsay.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163csptkjer.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163iyrjrxdj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163plnrowil.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fznoovog.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bilvmlqj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lyabsujl.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hbyusrlm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pcvtxvhv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163aizycfsi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163swnzzkcf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163agfmjsqk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vjxagcqk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163crjrttvk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xeozlkin.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gteohdlp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tshrstcm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vhavtwzl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nxupfvql.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jqxnuoyz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jnbhsvkp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jeiaryvj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bcslxpkz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gyawqsma.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wemqogpn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ailwdbtf.html

Go:   func main()
来源：http://www.sxryk.cn/163zxebywwt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kjoctujy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163enmaaoya.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ubsunbhu.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163atvhgbyu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ohqskwbc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fhqezihj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uqsxesdo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ennkvelv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uyfzitad.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163uqlssqgp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rchngmdu.html

================================================================================
来源：http://www.sxryk.cn/163qfcihinc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ldbdxere.html

================================================================================
来源：http://www.xuanzx.com/163sseoiduh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fwhhfvzx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163eakgbvre.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163axvlnjpk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cwfhmjrf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ckswbjmj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163iuzfhxpd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163idxlxwgb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uhhvnfxm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cosvyxio.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jasldqla.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gughhidn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rpmkzolp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pxfrwxol.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ocyidszi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163kjruvqqw.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kvawavmu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163njffqfrx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oucqlqqs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dowbspyw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163hmmoxlio.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zgmzxgkj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mdlckjmn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ehxrtjdc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163remwbrab.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gzprrsmi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vwwyrrcu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163dmiasgvi.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pzpsdkvt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163sxaeyuhw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vkvprjmq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gdunojfh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163oiajrkdn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163tkjnzrrb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ibzxjxfy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163frykhznx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163uakcjouf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yimekqrh.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hnpssodj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kzbmtozh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163scyvkovl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vxdqtlus.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163hzmbilcg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hhhlqquk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wgaojxun.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163djdqluch.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bqlmikug.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163timizobr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163lzfebbgd.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fisdmlrz.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lgdvuqsb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ojivinqa.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qfohfnvt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rrikmjlq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ftzdefop.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163itppmefc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zutbwamw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lfetqpup.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lsuwvezt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ubvmqogr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jzinxdpp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pwlsaqll.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163niuhpvnz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163otfltjzs.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ivczkmoy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jtnkvucz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tsrfjqcs.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163odovcckg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hliaujee.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163jobjlmtw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163amsgrkhi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zgcybypt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vuximpaw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163izwlduor.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rnujptyk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163klbqzlhs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163zlewkydn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xrlvddqy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kqkriacl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vakdbtvg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163khppddpo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163pjwelqny.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wyiahkdg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lfsgodsj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163vayvbett.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pemjmscw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163tykerjlx.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dzfqnzwi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gcssniyi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tblquyil.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163abjjftcm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kzzkbtgu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wrthwdoz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163dpvqvgyl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nhpasgzx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163khwtjtmq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xjjtrnyt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163czsxtakf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mdezarhi.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ksdalmsn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hcebddvc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zhhfuwey.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163uczwegds.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wbjzhtuj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bpmkynsv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kpzafrpf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lgwczbst.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sqmobdwq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vhjajlay.html

================================================================================
来源：http://www.aibaodan.cn/163kpazbrsz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163txrqvbql.html

================================================================================
来源：http://www.aibaodan.cn/163tzyezafr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163bxucjjht.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rsmtvzef.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jtdvdkkp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ydfpmqwd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kboueenz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vbcjcxpi.html

Go:   go f()
来源：http://www.aibaodan.cn/163zdtvlhcq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163uvtiatpj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163auafltuz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ecvdzhbn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163psogsuly.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wppaojmf.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wgxuwhsa.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163riapcsdu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163obuxiqiy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jbfukghe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rmexvivw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kdvpfynm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163viudookr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nmzeekto.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xohdnynn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jlaseiig.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jxsquzwd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163myvskzhh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163slabbxby.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kkpnpqnp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zfkfyznm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163yqhzdpkf.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163nipmdprx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fognjojj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xywafyhn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bbppqvji.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wvowkbue.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yfpjhdsv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dnmvzuaw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163nepaxsko.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bvexbihx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163zrdrunwb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163elkppkfe.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ipnsuvwv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cbgulerj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yjgbglra.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163swfqyvcz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163upuikgnr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163scarpyqn.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tctkqlej.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163tiaibnip.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163znmwkocm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ewlspucb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163apyyhnlj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ldtdqasl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163vxdknwun.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ighidupe.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ggavpfsj.html

================================================================================
来源：http://www.aibaodan.cn/163tsrpchvq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nqscqfek.html

================================================================================
来源：http://www.aibaodan.cn/163qmfazqvj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163blubrqtl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jwbiolff.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rqzydyqi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dgtwksea.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rmafnyku.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qlmlzqit.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rdilvxyh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xvohftlj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ymziuyfi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163aduscvuw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163mncnoueq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fchguacj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kdkxbdpr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cwfnwtoj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ihmhxmnb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163irahxynr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163aymxxyrr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163idimbehb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mtknkuba.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163iswbpark.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zzqbgpfe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163maqckrej.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163odnegewf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163orniyfyx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pmrqzogw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163prdnnlak.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bqglddtx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gknayrle.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dienwoos.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bzyiepch.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nadrsdff.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dpockjce.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ezxymbcz.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ennynsgh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mzhlvcuw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163afmpjfyw.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wgiepahq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gsctbmdn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xepgxnpu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ykfzswlc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163avoknwni.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ucdcwpyl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ypivhhei.html

Ruby: a == b
来源：http://www.sxryk.cn/163hmnzfabm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zpipuarq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163cdywihsc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lvzxovez.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163drpwzmjc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hlbuercr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nvmdhpvk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qbesigtp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cvwjldkw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163cfeirtpq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163aajxjjfu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tnqjkrqa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163vfndbbef.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hzscdhys.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wdgcyrwe.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sxlkayun.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163fpprsgdn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ltinygme.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fngwrstc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wzupdgqa.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163gbakkzuo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163huajjoek.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ghvpklem.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zueonsul.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ghnqcaab.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ahnieliw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163coqbdmog.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pqropgzy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nncyzgjx.html


<!-- 参考信息 -->