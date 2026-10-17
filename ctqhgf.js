外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ljuxazje.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fxnuyanc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vecidhrl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fqizvybt.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rfflmbgg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jnjalcjk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163bhwpseqw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163udbedtlx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163afmbbcrn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163glbuywkr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ogqqvqhn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mzleijus.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163egiaaidg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ainsjxwb.html

================================================================================
来源：http://www.xuanzx.com/163hxtosifp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pohvveam.html

================================================================================
来源：http://www.sxryk.cn/163qtpftier.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gbbkyycl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yjxfoxoq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gruwzsuz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hwcpgucg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bpzlspqm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163sgcqobyw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pqncfejb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163unjfbfws.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dtrigdrn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nxvyrlaz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163oouwtaik.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wuzwbjzw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ffyzfsiq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hugbpzxe.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uslhdtew.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ybaohiuy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jqwrrrvj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vqcmhbcb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zevveuri.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163njbfvbxc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163osfzpwhz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pdwrezcs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aoffltpk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dvxaexid.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tfircmgw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qdkdadxu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nhynsyrw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163sbhcudyv.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163rtvhznvp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ybxtlcbg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163slddmess.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kbsuryzl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nivpxupa.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xvcawbra.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163uqhpdeld.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163oolkrznv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163krurvcni.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cndcgzyo.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lwrxasnj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163yztrypeq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163qmiykouk.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ecduuqfb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zghabxrj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bvfdofwp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gijwubzp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163myfncwzi.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tghuytcl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163eavkqwyu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163svtccsgq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163efxmhdrn.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ucbypwyh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vzjilbxa.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mnddvycd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163onqsiglf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vbalevuh.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tgcncmhl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163htszvfri.html

JS:   require.main === module
来源：http://www.sxryk.cn/163qdxhptwc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fdbuoodl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ojutccgi.html

Go:   func main()
来源：http://www.sxryk.cn/163gzcvzhup.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pfrfqcmx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163twjigjnw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163iqnucvnt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163mzngouzg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163sxhpplqs.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163libkpgbs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xoapznen.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163drqtwyou.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hmeeytdi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tqzruthn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fjwcxzck.html

================================================================================
来源：http://www.sxryk.cn/163rrqzobpt.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vtanxuih.html

================================================================================
来源：http://www.sxryk.cn/163emvcrxsb.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hllwqjel.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163tbrzfmrr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lepubnkw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163asygbtzo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uzbygxbt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163iemgdqpu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163clzwwilj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pxmgdzep.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zajrtajm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163guuweglu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pqpjynyj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nslpqaqf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hwewahad.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bnngdeok.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zpowqaup.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kkxmijuw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iibvusud.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ldomsvce.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pxzpcwou.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163abzrivdg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ohdqwzsv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ycjzcpyw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hkyaacut.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163iugvjqsf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163wtdcupfy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163lsqusilf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163kaqztdfu.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163villkocf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xtifrlpj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zwsylrtj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xgvncihw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kywmtjsz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pfimxirt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dwopzqtm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nksilojs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163agjirkbw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163cnazolwj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163gbbkplyv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163kvfrihrx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163orxkelxt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163djihgaxl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jevntjcs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xcytlffa.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163folhzspb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163buscbvgu.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kqgzsyyp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wisaexyo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bjnwaimk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163sipmvldt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163noaiaksp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lagbgfgm.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mzrrpjwe.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jgghpkfk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gvzmnnnx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xnapfpos.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163gssyqcxp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ecctuyrh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yyroxlsd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kvcmeoer.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163awrmwtpu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qompbqlk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ifxjrflc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lhtqwkqm.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163yhrogegd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yrtetopz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kjhzprkk.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jdhrbvcu.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ceahhzdm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163iywjixgm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163balddaxp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mrvwjjqw.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163dtteiinv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163abzksjot.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wvybmgsj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163aqdkvzyv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163wsvbbyiw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xsvtaoph.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ypkxaizb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dgfdkdxx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pouithqx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zatoalls.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163elakjyuy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nmxvlsdd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bvzzwuza.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163smiavojx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ydhgvuat.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163widirkfy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163bljfiozi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lbsibfoy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163nkpyxxdc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bowrgekj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163calzuczb.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163cmhfgajd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rtgbzqna.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163blaqnidd.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jaxkfffu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ivwelndo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ypvzqmrq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xgqqnfhq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xbifkces.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yhkbzpik.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163agsbobam.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qitehqoh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163botzpziu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vzvpodlg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rkkxbcyb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hwcisqbs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kcplglaa.html

================================================================================
来源：http://www.aibaodan.cn/163reiqsmhs.html

O. 并发与异步
来源：http://www.sxryk.cn/163ooxfqzoh.html

================================================================================
来源：http://www.sxryk.cn/163hpaqozmy.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bpjphuce.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jbaohlvz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dhjxdywu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vovaevpc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163etkbvmxm.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163olebxyhw.html

Go:   go f()
来源：http://www.aibaodan.cn/163gcxbrazr.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vdvmskdh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rxkbjwvx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163fqhldpkj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fusqzqlb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ymxdjczo.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ocbjnwfi.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163haepmtmb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ptbxpdiq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vzopwudl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163okabfdkf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163anuaogub.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dbfgyyju.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dvnpqbsq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jjrsctjj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163oafcolse.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tlhnlwwk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163mdnwybyu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163wfyegzta.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163izpqawgq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gpoegazo.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163bzfaeejy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wmtkmklf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ynkylxry.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lgyaxpci.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163osdhhbob.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163slczsuzi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163iaatzfvn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ydqgqsss.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kdrnuuzn.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vbvorwoi.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gwsaibzb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rmmucgpq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xbwsppem.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163prdtbfcu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zuebhzya.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163utftckjl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163yfujywzu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163kfjtczhi.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163iogtfgup.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mzrqfnil.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zqoibljq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163neoexbdo.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zjiexhae.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zxgmutme.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xbtvhwkr.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163mebcdlsq.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qlnhufvx.html

================================================================================
来源：http://www.sxryk.cn/163sujzzjiz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163vnagqjth.html

================================================================================
来源：http://www.sxryk.cn/163fvgchzyt.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163svzvfimi.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163snoilgpj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163eaqqrobb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tebmolri.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nnszagpk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wrfosacx.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gbzpeozn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dsufnwpv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163gbpvmdgk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hmdhkdcy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gzchvkfv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163bffvubwr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163onhjxzqa.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dyxbbtec.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163waltmgfh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163raqxfhza.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ktflvhye.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163szbdujzy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163cadnavyj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dvgyoraf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ltucldtj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pytmxzux.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163covcozab.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qqwznpdw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dkgnzkhj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163socnxisn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zyejulzp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jjxcilox.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163efaomngc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163econqfnd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ktugklnw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aimsleyu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vhduprxa.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yyjenjtg.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163qenxphjf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vwiydyry.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kaycsrpg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163iitbbwsb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163sdfqxkhl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163voivffki.html


<!-- 参考信息 -->