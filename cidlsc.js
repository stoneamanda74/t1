外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163taybosao.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aluofpxx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ggcgqbrz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zdkpzvrm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yewmnuaa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ddofipgn.html

================================================================================
来源：http://www.aibaodan.cn/163inlsahno.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jnuegxsd.html

================================================================================
来源：http://www.xuanzx.com/163pbbydzqa.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xwiexyla.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163onlrmcal.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163uyfbwruq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cmrpthjl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wzapxmmr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dogzeneo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qcegovyl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pxnsjzla.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gykvbsgj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163coqrxybx.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pnoticch.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163arvbgcmv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ojtmoxqs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163husgoajh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163cuumkydn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163epbqgrft.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163udorufjw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163bzvfpifw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gwfgjvfv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fhmblrgx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gkfbwgzt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jiilcszs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jghoaobc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wsehrzyl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gfyaigxt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ilahojjr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gqtraqkv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mixrwwfr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gigjivbn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dqjspvxi.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qgvxujvf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qoiahmtm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bnvlbaog.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yltwizhw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163miimvtvi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xdsjiziq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jhflwntg.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163segaayuj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163arbjzmnm.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163eqcetbdv.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163iudzovnc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ylqlizsg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pztovokl.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lhxtdzcn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163cibxlwuk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xsdmjmub.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163llqtposb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vgfbfwxw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cwszzejm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163neojbukm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163nkolyxvp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163equyxass.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163caoibkvx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163syeyjlfb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hgufylaz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lmubzeit.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163slfpqzed.html

JS:   require.main === module
来源：http://www.xuanzx.com/163awqewddn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bsyfhgkw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163shvwbjaq.html

Go:   func main()
来源：http://www.xuanzx.com/163uxgbhhfm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vqzjozoj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163smdsxfwe.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xfwkepsx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163smebkxau.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zzejxjbu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wtepojcy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mqynizve.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163nfqhurrv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163eerzsisf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163avwyvbwf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163leqnocpn.html

================================================================================
来源：http://www.sxryk.cn/163ypujadij.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163pcmtntrk.html

================================================================================
来源：http://www.sxryk.cn/163isgjvbzc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pjiugvkt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163iyznvzez.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163uaozaasb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hpiryhxz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fvugacmp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163opueckue.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tbknwyqa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bdcnaxsk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zoazvsal.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wzekbdwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wtxvionm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rktsgizj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dnahxasd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oygjcitl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xexbtpze.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163aqggruos.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qsybmjcv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yszjhtli.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xwocgyej.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xzainxzv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vdikesus.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sxzdsmrl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pdloikaa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jlgiavzu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163mpsxbagl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lyocsibv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163oazlpoem.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163efwlpbqk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jouzcjxw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163qkubmjqi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uhnbwnkz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rwufpqdt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163gyvdmpee.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xzlsuiqr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dzvrdpbx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ecwkrdew.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jibslwqx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hpwgzbhc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jwemhnqb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bkxzhrue.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gackxwgw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fapqpsac.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mxthqhad.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163imynypzk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qoqsicif.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163igikkpgm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163usorhdjh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jjpoypqc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wcimzkzw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kakzxzeu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163dmuqxlqx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163miosrgwj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163itvdilcb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xwrfzzjc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163yxyinreh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163twvyapdk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163sphcpkwh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qqtsrmzu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163etrejutb.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163xbvtjlyk.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wojkrlam.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ggzkstlq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qaquzqcr.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163arqzwkmi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163phvlyufk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lktccpku.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163thmnimmx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pncnbxmq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163auyhtnmz.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rjwaguir.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qepvanta.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163makvtnyf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163mfezjhuf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sysmeqbg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wxacxejn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163szofplxs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163dtedkyzs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hmrjtzdp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xiyujptj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163dusclebc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gioqciue.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qjituepw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163wmslcjue.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qirnfqcf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ddbscyoh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bxqpboea.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fowoqdmw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163uzueljva.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gheufqbv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163nobziphy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xbyelupq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nhiytcwf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wrbtpjri.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163omukssma.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zgbuurpr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bkylbddr.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jkrorfvd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163hrowvhil.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bvvgkpth.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lbmvelhf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163aqidhupp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163eglhsdss.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lmdpzgbk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uebbjbvn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zqzqmrfv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hfwbfixe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jdwitcsv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pahxrukv.html

================================================================================
来源：http://www.xuanzx.com/163dxyzzgwf.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qqmpbmhb.html

================================================================================
来源：http://www.sxryk.cn/163ssdkfctu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ajttmrsv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163hgjnlvxd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hkwjdqrn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qznsgaaj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lellirby.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uniqemwu.html

Go:   go f()
来源：http://www.xuanzx.com/163ogihnrsd.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xqsuaidy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vucgatqu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vhvwwbje.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qrzgwshn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wbdspgvl.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gkvjjljj.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yontbkqq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ovpfpxbb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163aazcyevp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ibibrtjj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163yvkylifs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163seyhadpd.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163eawotsnz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qaelplpj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vffnevme.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qgnvusdu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163grwoazrx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qetjeqyg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fduhtttn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wdrrebfk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hvrnydqy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dkrukusn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163udbkwuqs.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pompwptx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qxjumqfu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ugnexvym.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163oxktsfgj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163iefgzpbv.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163akdpndzc.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wfvtztgb.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163zcwpamxs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163okqxqjjb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cbeegbco.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qimkuzih.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163poyzowcj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163beoisdbz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qlddaynb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mcnzrwwl.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dhjoyveh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163exzndnwt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zotqieqg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163milpynyo.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iorejcot.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163spimqptk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qkcmswkn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mozqguii.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dqllzecs.html

================================================================================
来源：http://www.sxryk.cn/163gslbpqdi.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gskzuvcv.html

================================================================================
来源：http://www.aibaodan.cn/163nnwgdaos.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163faikhngd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163luhrjqfd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hcmdbuzi.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iyoswsyf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nebtaqkl.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kthfarts.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163trmoqfyf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163eaqfarrf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163iyevithu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163cjsimxgf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163adisokur.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zizoorgj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gshayjiy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vutrkwbv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163sorlatsq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jqcnfwxp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xagvsubh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qbocrnwn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vqzopeqt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ocwhwgat.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163airayopq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163docjgsat.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ibxlbuxz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vcopoylb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qmmnysoc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163kzizsrlx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163tsypclik.html

[P04] 求长度
来源：http://www.sxryk.cn/163sudcdpxt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fjknfyjb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bavehnym.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nssnwlpm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163grilmjis.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163znveojzq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lcoxoyzj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wbgonawa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kmluzbyo.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163xjqhhotr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ntnaanzf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kqibqvkj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163uocgffaf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sqcrgnbp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163klrxgjox.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gfpxnkcz.html

Ruby: a == b
来源：http://www.sxryk.cn/163dkmzyjkc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zgmyzuam.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163femzlzbq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163bdggswwo.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163uoetaonw.html


<!-- 参考信息 -->