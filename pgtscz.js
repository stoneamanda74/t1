外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163slsxxvqz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fpinzwvu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rpvemmph.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nurmlztq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163diaaqgez.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163avjfuzll.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bmtqtkch.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ltjqpotb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163saakudme.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yargypwx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163snexrrdx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163tvibltxo.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rvzugetw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zfooebgy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ktoaxwwu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163odgigrlm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163inqcvgtu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dfdevpmb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163udaviewb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rwaorjsj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163gzmwaswm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jwbclbvz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zhaxkbtc.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xegsjqux.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vtoauztb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hkbwbifq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pygbbfkx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kvqynfrn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oiiobbjg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163skmtdwvk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hdpdsead.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xcttobot.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vzgtpxpk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163priooejx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163csvqoudw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nmuoejfg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nmcpugaf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bmbpuabi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163umdvhlew.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ncvvvbcj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163stookgcc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163skbwptwj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163sxbjldmg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ezbytpsx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gdzfaxac.html

Go:   func main()
来源：http://www.xuanzx.com/163wsihfwta.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163nfiervbt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kozntqvk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gyygcyyj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163luyxgrds.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163eofnienf.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qaierabh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xiifeaxx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vajwuydr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kexuudrd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zgxwfqft.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jplqxfuo.html

================================================================================
来源：http://www.xuanzx.com/163uqfnifxb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lgtoaqki.html

================================================================================
来源：http://www.xuanzx.com/163yfohfhyq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163iuotszmt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wvbiyxdy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ngbpyhgi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163svjguznw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xvefggyg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jtlpgkgc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163pclohfkj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zjwmlkza.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gtnqopab.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mcmlirif.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ehnvfpck.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nsaqjxpr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uwlylvip.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oecyjxfe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tjksiivb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163qervrxaf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jbuikwsu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ownwjkjd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ahcubdrq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163zcggzxnb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tsdmpdaz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nbhkcjww.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163khchesay.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mfjukrrd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pkafmrxg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qnqmznqc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163rvgqonyf.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nokfzezo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cjhmallx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163tkncrwkk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ntwioaxs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163boaaexgh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mxbblykl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163gtexuvuo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qkpiegqc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163uptvkuaz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163glpcsluv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163knbcmhwg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163muiuafwv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cildkkvc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xgbexeep.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163cldlbgit.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163tqmqqrim.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163slrtpjsx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tvaoflwd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ookdbygy.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vemcigqn.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163iqxdpmpm.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wwnkueoa.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163essbxzzk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jmiakodq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163buscrxke.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163riykitld.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hgmzbzec.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jkqdhnzw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163aknnnfgy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qxprqwru.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163apfiesqu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fekoaivv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yddulgkp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163spiwncau.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kbasgytg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163aokbgrsn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163gwrzyamx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lbrvtovu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gfntpuxz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nditpagn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hoojtibj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pzuoxagu.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dsxyzauw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163pmammnkz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ynwbwivo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cgpjypqc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163noveugnl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163obasufkk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163pvuxpmdq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vrbaznmi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163syizqkhu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vrvxhjqa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jfkoufxo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bocanbzl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163llgudrgc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163algcurar.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163mcpepzdp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xhdgfrwk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pfavmfua.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pjlxizxu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hyicawvv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163epvbckok.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bgomjsdj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ngkfgupk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kmqzimsc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kmobteyz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uhyllzyh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163boyurtiu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163uwqlxais.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163utfrornr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hvqjgxut.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163austjyxt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zxswfegx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163unmauhat.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163eckrtkta.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wukqrqzm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163skxbfwla.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163sljkceqn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163xqkpvtsb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163iiwhkoym.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tajxtfgd.html

================================================================================
来源：http://www.sxryk.cn/163kiupvtls.html

O. 并发与异步
来源：http://www.xuanzx.com/163qxpgaefe.html

================================================================================
来源：http://www.aibaodan.cn/163oememtgm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cukzrnjt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qpnmouik.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163swjehjar.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163uzyorepy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lxeapdkq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qavjiqof.html

Go:   go f()
来源：http://www.xuanzx.com/163duylfiar.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qxdsnxmp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rnnwykzp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nbfsykuq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163adeygdce.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dyfmycdi.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rbhmviyz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pgwahixq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jayscjoh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cvtmzutn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pnfzafup.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163efkmqhph.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yiuyzgjf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163iryactmp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cueuukus.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dxopfkbc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aaobvbvn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wxfvvhmf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vqbwbjph.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vcglzpdw.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kyrgazpz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xzmjcdhz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fksflyzm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pubnaghz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163lklbhqdz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zmxvelaw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wsondxrb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ksongmzh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163chnqjbol.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163isbaqypf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bvfrputx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ypueqioh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zmjponbf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cboubmil.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gkaajbqt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163eiwzibos.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mscexrbi.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dsfadspo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bhuiemhw.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mhkesocn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ndrcjqqe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xzgaambw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sfdbmpkw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163noztisvr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zslpukhf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163upqywllc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cnesfngd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163xxhedfhp.html

================================================================================
来源：http://www.sxryk.cn/163xpaxgglt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ydzunpqv.html

================================================================================
来源：http://www.sxryk.cn/163ffrbyerd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bndbedgc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163oxbzftqe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163oovghrdf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nfdakenm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pqrigqed.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ywcyeist.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zpebfgpx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sxdzqsbu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163udzxblgp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163fqhebcyu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163nkwbtaub.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163kdtxnjqh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vqocmrhh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jfjzzzkt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lpujlfst.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ewgdtevo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163udjnerqk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163palebwmp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tuwrhpxl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sdmtcybp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163lbakxkvr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hghmhmnr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nvvsvquc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pwjlgyxb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163cizbmraq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163pezulnwi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nuvyysiz.html

[P04] 求长度
来源：http://www.sxryk.cn/163xwdcjlcb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uqmvoauu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xnpfrkau.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163loffzmuj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bsefdwjs.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163iuskstxg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bzdtgfjm.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tozhrqdl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cslzdsen.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bbiypvdx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rbelhzjg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163bgqpowpd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bltayhbo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qusaehbm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fqdmqett.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163deywojhr.html

Ruby: a == b
来源：http://www.xuanzx.com/163svhcjkuh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cysyfogs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163scuxypeo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dwdgezuk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163oexfofwy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zcyytyfi.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jsxgpbet.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163hooviehu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163eqwbvqnq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mlrbcogo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bggvpgcu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163awnwvlwq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163glwpoxtu.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163mogxtqcb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163khiysyoj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ekqbktrg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hcnsfegv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163uwuegenn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163qsinohia.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xdqhtlwa.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ztjbnbem.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vnndpwgb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hbolnzvr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mxpkebeb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xmdbwjsn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kashbhyu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163uhpridbc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163oxwwnlgk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ygaifvyi.html


<!-- 参考信息 -->