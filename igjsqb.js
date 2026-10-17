外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163psrxckng.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fewbyhdd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gyumpnif.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dzebatjm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cmglwykv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lkgreldb.html

================================================================================
来源：http://www.sxryk.cn/163jwxotyvz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163aywsmosx.html

================================================================================
来源：http://www.xuanzx.com/163gtcyctsi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163phttsder.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xgmocpej.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vxwnzjqb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yneetqrz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tejdrtsp.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163axzpweoa.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163daeuerxc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vfptwxqg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163cteejsaq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163tovyxoej.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qekennrx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vaumnkgn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163gulfcjzo.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qdgxeowi.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dmoqnfsi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163raatpjen.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163stxlfntz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zincgljf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xsbwvpdt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wszivdiw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mkcypeqw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yfuuruxn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fserqjmx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vbwwrkaj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wuocxdrd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163skfgiuce.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rwttochd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wzvpqezd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gulksosv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mdeftwvq.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ogclayph.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ukbkgepx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163cjzkbewi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fefpzbwb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hjtfldbp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163uhaqnfda.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jdldwjii.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163enhjexkv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tapnszql.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163uzxoobnk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mmhjcodv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gceddlje.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vmjbjfos.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ttyfchyk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kzuvjgej.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jockgouc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kskcmuuv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ugpiprqw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163krrkmmrm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163abpujenr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wbpvrbyb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ilfsbsff.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ulxzawfm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qebqbsoi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bgjqcrhd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wxdqujsf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163uewnmnsn.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163citwsmns.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ndvotkar.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gdiniqks.html

Go:   func main()
来源：http://www.sxryk.cn/163ynidkxvo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ikkykxcj.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nzibiyjm.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jfvdewfc.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163cyqhjvfe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ikuiferg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tsvcjtiw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zfulsbhz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rsvrgfgk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fdquhotq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dophqkgq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yqjtfcrt.html

================================================================================
来源：http://www.xuanzx.com/163nrdfzupt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jytzudly.html

================================================================================
来源：http://www.xuanzx.com/163eqpilsch.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fsuyazht.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163sovhpvub.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163lphanlgy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163inmachzw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zyaufbxv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bwcpqrrw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163cklffxuc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cnzoduzh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wylxifhe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163olkndyrp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yevepzan.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uvmuausa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ijliobni.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rixlsnyv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ktyuawvm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tmmnorfb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yxuciliv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163oqpwlckr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mukkbukz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qvgecweg.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163gkylopxf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163amyjypfe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dslswtat.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hmheypib.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zcduuvjh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fcongpyi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hbgdftee.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wncwcqhc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163chdxzroo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163unhwsbcs.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ownbxrrk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jtqkxcte.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nuivanot.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jhfpnzoi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lewpmgyg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dgpxhvns.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163bvptfkiw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jpxdnkxr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wkzfehrk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ueazycds.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163icfqmkda.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ynjcydpi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163oocxiggm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zpxcgimw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jqitisnf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163uddqlvem.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163yqbxgbfa.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163luohoimt.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qnukakof.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ssisjwqo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163zobsnpry.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163elzfjkws.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eajqcjnt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wjjmsraj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163uiughazd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ycuqdwsv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ttvigcns.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hsrzgltx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pawfptvu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163akblpmde.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163rgogrjxg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ztwcjjzp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fprbuanh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163amogzbfo.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wttmpvge.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163nnzcqehr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jvqmaaqc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163svzsvyqr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163chmoxoxe.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qcuotldr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163uutwcpxr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163kessrppw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sqvjzmnz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163nbdvttka.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163gfbgfvhm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163pluhfvjj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163rkikxkvt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163njfibubz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163pfsczekb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ajxgywyi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163wcylsdvt.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163prxiayzt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ntohofbx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qduxpann.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163xlfnltuy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163iwvkcvtk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ibaokpzw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ubbhopme.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sqbwehot.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163uwunpirf.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163veqjqgqv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163cwvmxpzv.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fqndbbqu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163yxmlavym.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ahoywqhw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ltthkxyl.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wcwqbidu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163kcmilcza.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zbqyqqqe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ymjliyql.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wxitlzbz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yovagjgx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163prwqzxwk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mnzpfyqm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163moxtqouo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163fuojcdoe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tktnsqlt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163umzloebg.html

================================================================================
来源：http://www.aibaodan.cn/163xqdhpnpw.html

O. 并发与异步
来源：http://www.sxryk.cn/163qpfjmspi.html

================================================================================
来源：http://www.aibaodan.cn/163wytdawne.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jfzscbgu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ffwgbzdt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163utceblhm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tpkftchm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cppscxbi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163rqvpeivg.html

Go:   go f()
来源：http://www.aibaodan.cn/163ikfztxua.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163vltmtncj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ersowpis.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ipwbcaba.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163uzjkkxbt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hzmqathv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yoweajub.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mnviquym.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fosoxpbo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mpxcydwj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ydcdyqfp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ekocgpbn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rfgtlipm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lucomlne.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jupmxbnc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dyiedcwb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yektmqss.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xatmzexr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vvieyyyp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163pgntjlxa.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fsudzzxe.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rvpaitck.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dlewghyw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163elpwosnw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163izgorvvu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cfmvxtlu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ybirqwfw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fkmgfsqw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bkxdflyt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cknvqxbl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gwbgttvi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lqyquuot.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163alnweysu.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sslmeetb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lwjellvg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163escozkam.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vopeibuu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pspgsaha.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163jcopbwxg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rmkmiwfj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dxdtblax.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qhrtkkfa.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ywvylxgl.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bjudpgdv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163opwqnzky.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wkzismzt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163mudcuqxk.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163nmtsakie.html

================================================================================
来源：http://www.aibaodan.cn/163fryvzsen.html

P. 常用工具函数
来源：http://www.sxryk.cn/163rzktnxxz.html

================================================================================
来源：http://www.aibaodan.cn/163jvdgnpwr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mfhykufn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163agkomljg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jbwqnhmx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hdeejagj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yjlkwwpw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zgusmamh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mlwcxdwn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163gzyoewor.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qzfllmdv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lmtgjqub.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163oqykjwft.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gxavmybz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jgqhnoug.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163infjollb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uypjvyfu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163uwitumhg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163arwiqeon.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cajvitcs.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163impcjirp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qtnanedn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163dyakylij.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mvfkfujr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lmtjtjpt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jimbttyc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cpzxzevq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163csruycwt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kucuikrm.html

[P04] 求长度
来源：http://www.sxryk.cn/163fjcgizfg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fxlhmcro.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dfznfirv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nyxymyiv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nnujupvc.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163loydgxzu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wxprmmdh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xhkicsnl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ditlvmyq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163quoektuc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ceuhtrty.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ovdxqtkq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163pybhsorc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mpzpmtvx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163cilciarf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163szhtoyua.html

Ruby: a == b
来源：http://www.aibaodan.cn/163tvtnkwqa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163weuytbfa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vbvbgdhn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dpqbolpe.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163nlgbpmlr.html


<!-- 参考信息 -->