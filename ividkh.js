外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163siwnwrah.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163uxysqvqz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163srowqlvj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163tfdlfvrz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163eodszyds.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zuqtrmxx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163crturetj.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163effbsqwv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163veqdcncn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rbkfisty.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mpgpjcwe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jhjvfvku.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jnfoviks.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jvmeiazm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163eivzosoa.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163epiuuxkw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vdxunjpa.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nfeajhkf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bbvjuhdi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mduaakpx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jplxkumm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163cbgeoite.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163iwhplypw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163midyhgpq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uvgchbrf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nogbxjmz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ykljhrrv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163prvpnwes.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ohjsmtdw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163fonkiyzc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163srywffhc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gmeqsexe.html

Ruby: exit 1
来源：http://www.xuanzx.com/163zasitxtb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zwkobmkl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wgulgtod.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163swongohn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ymezzpry.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ylinhkdi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gzcesqhy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bkaadncv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fdkozfvq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fdirqnvq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vaqxpiil.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163nnsgsytd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xuabjvab.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qtxyemvd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zdykpxpu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163plrjjjsd.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163fzlqmyku.html

Go:   func main()
来源：http://www.sxryk.cn/163eurgtdzo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kayolubg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fsiovpgf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zstxxggm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nkronuos.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163vkihycvy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163okvaxkbc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cdcblpoh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163natjyzsd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qnfqcdtv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163egaprjag.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jgwasbmk.html

================================================================================
来源：http://www.xuanzx.com/163muxbjmbm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163gocgebtr.html

================================================================================
来源：http://www.aibaodan.cn/163poagnrzy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vdbcdunu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163wfokhexd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mjubygws.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dzxmsroo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jsbyfncp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ljjwveus.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fyvwlkfh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163grgvuvjy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163stcpggth.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pdlsywfu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ruxepivs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kplizftp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dfiotmgx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jgolyyho.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163klmxhegr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163galgtiyg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ubrpkdmr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mekyjwdm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kuervtlo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ovtprqdm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fitjgajo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lhdjbrat.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rugxnzbj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iiebctzg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pisvpljb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163szrrbsra.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163euemxvyl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hdepmhnt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fihbbbks.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qzvnwssr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vvrqkjvd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tbzvkngu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vygsjgwk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mtrdxomz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vtqnapyq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163umxiygtc.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163abesahnq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pvjfbyvw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163aapvgawk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pkfgwqlx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tsusacns.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vyhhxxba.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ttzboupl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163yqknjryo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lzgohxju.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bwclggnn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vsgshoop.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zmlxpzlz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163owpekblf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vjedfube.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qmkxopse.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hfohqrei.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163dtiahhgo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cqhuvnjr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ttkjzrhp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tqqloecq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163fesygfzv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ghvovrxf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xgkvraic.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rtkctbgg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vwyhzcvn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163aotigeqp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gnvqwcgw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bisvyfii.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zocszuzm.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163foyekyzy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ojoatiwx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sjbxoswj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ccujpmhv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cpmcaaet.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163okxewpze.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ssmdwjfk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ebhsugwn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163iokoxhch.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163jsejjqee.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163krlbzpxk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163shzqplhw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163sfyihkyg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bqnkkmnq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163srdhlhmx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163bbetawoy.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wyhcazjq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rgfqhpou.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jahngtob.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ryzzjksj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163djqhsrfr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bjjsswnf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xfatjdix.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ecbextcp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163siouaqqv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ovvuvpmr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qweogcyy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wcdlprhd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pdbsjmgc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wiyojnks.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pwfesbej.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163sysrmstn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163nthnlbzf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ixnzhjnf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bgjjbbcg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yjlkomlo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xmlnfeyh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hdbzqlyy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sqstjujm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163opnpfppo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ntfzsqpl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nxaejwtt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sxoilgcg.html

================================================================================
来源：http://www.aibaodan.cn/163froglwpg.html

O. 并发与异步
来源：http://www.sxryk.cn/163qpravqmm.html

================================================================================
来源：http://www.xuanzx.com/163jzthjmsu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lijjfgih.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163emnblfdh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dwubvfix.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xhendezt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uxsbnpdz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qyuqaucf.html

Go:   go f()
来源：http://www.xuanzx.com/163lmyqvvsg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xjrhmroz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jsifnbtt.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zbhzbohj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vpramfyv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ghkoetxg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163emfbelwh.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xaritkeh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zhvjfflx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xaslltot.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tmkplkqo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163idxezrqq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ciqnidjz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163luvronqi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rmgfsqgs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163mlcyvtwz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fldjihov.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163nwmhtyzx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163wrkyuhbh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xauezofm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wygvvxpa.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fnuabwlp.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163fnnksqsm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dxjmdunp.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tesvlzke.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163moovqwky.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163iycghhtm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wopbwdjs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xzgxnwgu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163mlvvyolw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wixskbjb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pqjvjkoz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fyiynhxw.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pqgymgcq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163httlhvwt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qqkdsszf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163haqrolmk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vesuqiek.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ozynykaf.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163yufdbyka.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ushgrojb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hntvqmea.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xfaghluu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jxfuocek.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lddylqct.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bfobkhwt.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163exiludqr.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vxmybrzb.html

================================================================================
来源：http://www.aibaodan.cn/163uphenrjw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ovbwcuml.html

================================================================================
来源：http://www.sxryk.cn/163xnetrfpg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tjtuequh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rpwnirqq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163aclnessj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zhsjyezj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kzxhevxa.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wxktnndf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vhdpqdcf.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163uifnmvmd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163fngbjtsz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xhhtqjyw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163eqezpvkq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163rylyblah.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jxentmne.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bklkfjaz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ikofjgyr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rxzmatlm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iqjqxjlb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ejoonbby.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qzvsxpnz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163idljezys.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rhschvov.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ndgixelv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ohqxwviu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163eaxfjxqt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163uccppnkp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wylgjebj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163dprydmej.html

[P04] 求长度
来源：http://www.xuanzx.com/163naecxkaq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163gbldfacu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163remmjfnl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pjorhfjm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gycyuszk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jjfoqhnn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kyantftk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163vvcmsaaa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jtrhbzit.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kehuqtno.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zsngtche.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kuhqvdbk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163budrdfla.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163espivfii.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163wpdbpksx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163midxhzuk.html

Ruby: a == b
来源：http://www.xuanzx.com/163amjcrxaq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163armzjsse.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ygazeeyi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uaphhsrr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163oqxzhbpi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163runutzpz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ieplnmoe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163quqbarqi.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vzuprval.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rxxyarca.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ygiybppb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ksealzgf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163okicvphj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163tedokyvf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xkcjebxr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163khuyluqi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163stqtxwvn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gogvppcf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mieuhion.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hvxehjeu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jpjwwefn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163krvtdlrb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xllmfotl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ehruaazy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lahppmns.html


<!-- 参考信息 -->