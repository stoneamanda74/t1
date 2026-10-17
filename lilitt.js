外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ywmwiejb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cfcuptvw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163cfcscpug.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ynjwxlkc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163yljrhujq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dmiojapy.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wsaumzhl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jyqporkq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ogareiku.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sgxbmtfh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163chpfaphb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163zdhyvrsx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wjkillhc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bjduvpfl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163swddbvdu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bfrzwxyp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163flsoeztv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163pawgcfgh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163baeuvuik.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ozpohyaj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163aclnemoi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iomevjys.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163rfcsceys.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hrmsjqwv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cjnwhtte.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mfljbsph.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ekojnzdx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vrewovsa.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163uzxhhdkg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163psvxwnnh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163jpukrwio.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ccocmrgb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163pgiboqvc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gzjlbsic.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xkuekkpn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yeqxdeca.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dukzgyyv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rcvlqgcs.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jvzikmve.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163sxxudspc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163aosbbfzm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163mhuwrjsw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163gdstpzek.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163daiyoojs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163cxjxqdzf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gxqylzpg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163bphrwlwa.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163evmjuldc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163klvcvjuu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qzgfmraf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lrguqrsf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163thpmatgf.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fdqbcvno.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bxcnnvmf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rbfeonbe.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zxunqtuy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qqprgkjw.html

Go:   func main()
来源：http://www.aibaodan.cn/163whtuohsk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163giwewbwa.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163uidulrmt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163amymohwp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ktpxlfis.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zmzbpacu.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jrotksgt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ezcrguai.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tjupdivs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163sroplzxz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jemmenrq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ikttgzss.html

================================================================================
来源：http://www.xuanzx.com/163vwazyzqe.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163cuydxqlu.html

================================================================================
来源：http://www.sxryk.cn/163ftnykbnj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ybpsgubm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dlfjqwmz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mewdpgqf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163suqmpvsp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ghhvwdvo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jnjkqcqq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163auvlinsx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cobjhust.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163phxbfvgr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163hqaibgxm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qlhuhxfk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nodjyxjh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kwjeygbd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rkyqsjmb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tylsakjc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163awztwoft.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tjqgylbm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163yymemhiy.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bkycnuyh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hfhyytzu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zghixuxq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ijnjpauj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163woaiihkl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vnzishvu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jzftyiep.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163flmsydwq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yiaxugqe.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jlybvkof.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163frzhhhbk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163znhovmpj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kosytpii.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zwdmzfke.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163pguxlbet.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xxsvppcz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163iqxfpexa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163taawuzjx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163whpkptiz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sahxzmyz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163joqlnnrw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lhcryogj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sbupdgcv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163caldawdg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ifjbxwap.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ntyjbyqn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xnmlzlci.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jqmaitqx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ednvgdpe.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163mdjugwbp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zuzvbqol.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163awhebfto.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163boqzifdz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163cpjeojwj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mmccomkj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ptsghcve.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ojdyjtno.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163skfmxliy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tzsygtmr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163utwllbuy.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qnakkdkv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163frcbeylm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163sqninicx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ignjfalt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cwyynmzm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hoycrudr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zksdccmd.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163nxdxizoi.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bxaabwbl.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ubhuajvw.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gnjnzvfg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gwomxvor.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hbmpiact.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qfqgcnwj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163itsacyvu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163riezuzxb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xtdkwdpe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fgxpxbhz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jsitdfku.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163uwlhbazz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163tefuornb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pcvyqmoo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zjvykynz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pghdorke.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163prjoyvyg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163mnpjxekd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zdrkgmfu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bzsqmpof.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163apzkbewj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163lejmapub.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ilxqksoh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163odikibck.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ckeaeiyo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nvcylqod.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lprrnuup.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ubimostj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rwcvaaut.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tcruvpyi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fmerxxof.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163eitplldk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163konghuci.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lzgwgbvk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163forqcuiq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163phygxvrx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163iexsvukc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163upikaovn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163htdsxeaj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vrdofnii.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tkniexeq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nkzpyher.html

================================================================================
来源：http://www.aibaodan.cn/163qfsinhzc.html

O. 并发与异步
来源：http://www.xuanzx.com/163djgkxrod.html

================================================================================
来源：http://www.sxryk.cn/163joqbruoy.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hvnshkei.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rpqiylqa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163kxqidcom.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rhvgwuft.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aoklxooz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qccbtdsk.html

Go:   go f()
来源：http://www.xuanzx.com/163wbndeppp.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cuqfbvuj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163pdrwiini.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163eprlagfa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ubyuwiso.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vgnuwhhx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163soeermoh.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xpwlffsy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qmsgrrcu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gmbxdfaz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163tgwspfns.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mlmcsxzl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qponwyvz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lcgzacxu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163nhewnyqg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kwmqvimu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rwergkvk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kubruxnp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163omzuuopr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jcsfjfxl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ocdcoetu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uieuessx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163uuabxxqd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163oaxxybjc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163sypktnsp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bkzxtpft.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zjhmuebz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bnrxoeny.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163etyunlte.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mfrgapda.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163evqjiimz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xaixwnox.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zrwqoxwl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hyirodzu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163eckepkgl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ehlauiek.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xwlahgjd.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163yqyggdfz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ibpreogi.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163iunptash.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rnroudza.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163eohimrfe.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163okyatodq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lowyacjb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163guvivdoa.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qghoqczs.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ubtbubei.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163zcxnundo.html

================================================================================
来源：http://www.xuanzx.com/163smyacdws.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163osctwhds.html

================================================================================
来源：http://www.aibaodan.cn/163pxynlshk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gnqtzmsu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163owzggxqo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163maegiimr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yivxalol.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hpboygjw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163bbstldgx.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qerzapul.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163htvpcxgs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qajlzhoi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hgpikymf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163braextwr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163uraxbhct.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163fgswaowt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kuajyjzu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vkqtnshz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xkgjqhqd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dhvkefbh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dxxxxfuq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ltzxrrlp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yesmutxj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163tcthuisn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uvnnimmw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kdprbyth.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mwyaqqpq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qtxesxsc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vbtavbyg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163klvqmfcm.html

[P04] 求长度
来源：http://www.sxryk.cn/163merhovti.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163sfvleoyv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163apbywhtx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vmaxggmw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hghrbemf.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zqdjdyev.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vrqdpikd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hcgoizrj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163rqarurgk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163deeugszv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uycizhlx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zsmlzmbt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163txxnuort.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dwljfueu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nwwlekfy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163yaelfwgn.html

Ruby: a == b
来源：http://www.xuanzx.com/163sresvycg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zpvwnapo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mblbffsp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163csrbytvh.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163uubnygpm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163sathqqet.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zkezowvi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gyldogax.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wqlynkqm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ippcsgqf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bqqrrmpq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vdudrwuy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gigtwjoz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nkruhdnu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kxpyasuf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zpfpsyie.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163dsntetib.html


<!-- 参考信息 -->