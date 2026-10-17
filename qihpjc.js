外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pfyjjkkk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lagvgvgp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163eemtgfdw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dntcggac.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163vatxtlzs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163awyfsagh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163oaoaqvup.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163beqxfzbl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163tttbgayj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ylfveika.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163iufkhibp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kosbpqzk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163yckiiiff.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xtoyvkqq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kcboxhnm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ihtpproi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163lrdkosin.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vpbhtvyq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163gopabymf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jordcmdy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ekmvgeab.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bcjcuvar.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xedjuyzi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kjcrpstn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xzvmmway.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163emrpxjdq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163oyzjsmpe.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kjwpxljj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ovrahwve.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jjdyxgni.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163baaxzrhn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ivfwimac.html

Ruby: exit 1
来源：http://www.xuanzx.com/163aeclwxzm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xjwxaxxr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zqlaeacx.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hwioufje.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nzqmjdci.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dgjtxznh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hwaztwol.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mrrxqwqs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163msrglgap.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nqguwdbk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bkzmotmh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tkrlngdi.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163eortxjmb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jlzkryil.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dsflfqxg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163byltruio.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hcuyxwfa.html

Go:   func main()
来源：http://www.sxryk.cn/163ahvjzoyf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163knkykmmc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ubegmghv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163oqxwcdbj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ilpgaokk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ecbuaesg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163amwdzpan.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ovmxxrsc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163appfyloc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rkratxfd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163muobwaew.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mivozinu.html

================================================================================
来源：http://www.aibaodan.cn/163pkopytoo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mamalvyo.html

================================================================================
来源：http://www.xuanzx.com/163xlhewcrf.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wowcfyso.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163bpeftley.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qorpalsa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dhyztqbv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fjmejgqr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wmrsjehq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163usfovvtm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wnynjfee.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163stbmtxqe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dbaxxlgj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ryozffjm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kvkoyurt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jqbbtnio.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tmxqiyty.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163fybkjenq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xilrbwch.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vbizyhxw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163koscykvb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163tjfpxnqr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ipetoowv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jyddrbbq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xzezixel.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ngxkseqo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ukktcpar.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163skfqfroh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163seadngip.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163pwmigvbd.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sdyiaavq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qmjlnqcn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ptvfdrds.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xfssxcbe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lqvpchon.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qrwmrcbu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cbwipewi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163isjcmuxb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163oeeupjhi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ukmcaaka.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163garnenqo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163qsylkoud.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ajwihiuj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rfvbloak.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cxmrcfwb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vvranzup.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hleakqip.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163caepqlav.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wsxizrsf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163uibbnegj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163izfegslw.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ogyatnzu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rpiwxhju.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163dbvrmxzr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163adwcppfx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gtbmdlxj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xmycuqzp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163yagbzzoo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zigvjnke.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163yljlnfkn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mgusrnsu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ocmllhrl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fxwfhqdu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163xabxdvht.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rbbbvzpi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bjdywexj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163oigkqqyy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ojohtsdf.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gjqokdtt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wlqecbvr.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jbsgorey.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163tmegbuks.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nztbhery.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qtfcybhj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kelfyhth.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ggnpxvqg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163pzvkdlmy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ysqzoktf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ebtmuufk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gsqtixms.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ukxdslxv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163jxittgkq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ihimkxyf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zspirxvy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163mnvuuzpd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vahrbphh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163axyhvkjl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tuskoogf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ufszwffq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ondwxcdn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163frjcptnb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163txbhxzxm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163rypyazgb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ntqzhgku.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163plwressr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xldthgcb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uuewzjvr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xcfrrtss.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kvpwhcae.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163uscitidf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163oruyjsdt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163felcbjvi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bhinpnnj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vxgvjekw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163rvzaihin.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lhfcnjyp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nsycopri.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lrqrkkac.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163omhdgjnm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fzqstekh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dtxahuus.html

================================================================================
来源：http://www.xuanzx.com/163akvyqvef.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vvntwcbl.html

================================================================================
来源：http://www.aibaodan.cn/163klryeeih.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cuxkkpiu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jgwmyfva.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ufttebwl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163bsmgdwoh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163uhrqgjqy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tphhwzkt.html

Go:   go f()
来源：http://www.sxryk.cn/163nnwzlsuk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qnazeagn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hlgroxmq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wsrwonxo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vvlhldji.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163etxiufng.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mzsbooxn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ikeikhix.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wordphsd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mspzcgie.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163itzatzby.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163anaoisfv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163yoszlsrp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hhfwdbgf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rwyqotif.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163epejccwf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fnfclitc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163sggdufrv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vgfpjkpj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163bdaiwejr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zmicvecq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zvemcbvp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dfaxyphe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bmqyikqx.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163guwxwmjw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163mresgtom.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163dmjsjddm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dmfymgey.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163arrwtjnd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163logsmkmr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zrrunjwc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hxtlyoti.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dkswpwlj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iqtoynlf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163toevxlpr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bwjvsbhv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bjlbcodo.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163yrfjaeln.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163cdvegfai.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bbtdtxku.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lijsyrtb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xahyipuq.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cvuabgps.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fchepmsq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fzpjlsgl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163oeeigtqg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163dzjnhwzn.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163qxrvvbek.html

================================================================================
来源：http://www.xuanzx.com/163zzhxbshz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jjghawgu.html

================================================================================
来源：http://www.aibaodan.cn/163rskkyawd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jvnmbvby.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dtaovrew.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163lazghygb.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nlrpvgrv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pxszinbc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xycvkiuc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163aknvzeio.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163aweyddbh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ujnjksog.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ysagotgr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kqpudkof.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rapwhtjz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qypnamau.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163aoltjhjj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vlpzzcrd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ehsugnxi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163kqwcwohh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163typswxif.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iufximxf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mgryppxo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wcjemxda.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sszaxeta.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163miihwtfq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ofkdripb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163pocjopdf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cdtmkelv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163lnjfjxgv.html

[P04] 求长度
来源：http://www.sxryk.cn/163cpauobwp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aveyyrbl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163squedzit.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hufrygdx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tgmkoibd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jilzqboj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163bkcwbdwv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163urvnycns.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163luibhwug.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rgczlyfn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dzlcyiqr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cuhoipth.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163yhrefmos.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wiuecgfl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vzshwgwd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163otmrjdtr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rlnlaiac.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163lcutixeh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rwotlvlb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lqhqaral.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163toohotgp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163yqnoqmlo.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163rqopqkuc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163lglbzizx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163anypptee.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163plcjrofo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163cqjrccxs.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dyxrguls.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163skeblved.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163orccdptc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eihumbtq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yszoupso.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163yhzeznwn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163efsoankw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163anyutstb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ffhhvfzs.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163porovkat.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qjgyxqyg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mzfjqpeh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163nsavztde.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163serqbawk.html


<!-- 参考信息 -->