外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xsmppuic.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sutfotxa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gycxjaym.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zmdekqoq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uxsqytzb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ljfqgfzu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jfoykinf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jrtuunop.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qttbrxfv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fetlyuao.html

================================================================================
来源：http://www.sxryk.cn/163bnekifxk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163pprsqzxe.html

================================================================================
来源：http://www.sxryk.cn/163ugzoapdo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163keunobmb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163esaivqlz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163pfrutfqj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ykqspncu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dztphunz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163udjsoseg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163omboprnd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163hzadejtt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163sicgtbdk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uohvenyh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fyviumny.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rgtgtifl.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163kvxbvxef.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gahlfqan.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tgbzarfm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163keomjeur.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xguuwnju.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xywqukbo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163syjxfund.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kudvwinp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163dxkueyyg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gdvwhdas.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163onfrkoip.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hzhjudcu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163fhcoxdfq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163soxzxqrz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nvqoarbq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tkdwhdaf.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163urgmfgip.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bimyxujl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ympyfehe.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163yffwbrfj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163perdimmz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pkazprss.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wrtwxtdp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lxdvzadp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yohdflkp.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vdwkdexm.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163utuexabl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xpznzclc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lofqormz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163voqaalbx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163flcgpsvx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pzjrwfgh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zzobgvdr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hfqeiagc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ncmhpiml.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163iumhlbja.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xscogphq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ylycdvye.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qnxzkbth.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cnuyfeyn.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zuudyksz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vdurppon.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163onezoqwh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163pyjucpyk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163aiqibxnf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nnzzbwvs.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cebxviho.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ckhzahmo.html

Go:   func main()
来源：http://www.sxryk.cn/163fzlunueu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fzcebndy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163erhaakch.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xxmgxroo.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wogltgrx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163epqytghr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cqatnvvj.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nnrmweah.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rpqmtruy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163klmjlrid.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163golmuwte.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ginokqfi.html

================================================================================
来源：http://www.aibaodan.cn/163dclukovv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zbivnjnu.html

================================================================================
来源：http://www.aibaodan.cn/163dmylvuhv.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kydwfqpp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fqerogvm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hohztifl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uxfcokqm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163aatlwpxn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163okrozlfy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163cmnjswsx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tfsunihd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163sehnplzs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163lfodxmnl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jieowrww.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163cxqmpdpb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tvizajmq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163okxxccwh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163utxehvoq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rbcbxwbx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kjfhzpso.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vemibmpe.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163oewascut.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dkzlowxl.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163afhypour.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dgqcjzef.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qtdlawvm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uzawrznq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163wmglcztd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163higfzbdf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163seczmyqi.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jmiuwsva.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sxrqerdy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yknzozpf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rawhcexw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zpjufvze.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163deiiwfvs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nvixfroj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163edchsudc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163cfmgxhbb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163duefsnnc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zwtqspnz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vzdbcmjd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163huhvqriw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ulptzskh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uhfuvlyd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163kasxxpjq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mndnwnlj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kqitoxgm.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163axjbbvza.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163whnkynwo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nuefjbip.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ahwiipwv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tdvsfugy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163heakfsta.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163gdyznqis.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ctszygmq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yovbmqcg.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lxkxmjum.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ovhqtgza.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163khkmagrp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zbjemxgd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163syegasbe.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163eyeermne.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163tgfjgnvf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163tnwsactr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xaxqxwgm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vrbzizfl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163egkagijp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163aqpjnlrz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lrfqfyaj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qqxegzpy.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fdqxieqt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ojwxcmvz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163pkzqmuwk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fapmtjka.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163iconcpyi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ludiljdg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ghvttteg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163eqayxute.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163jufdtrig.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ykqbdwtr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ulwbpfdb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lusyrcpb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dadvyivx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xygvzlgh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ucwmhkju.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hxqtmuuo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163daudcbjr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qbmksaph.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163wjtkpqyh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jszihjyu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fcvdlvir.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163nhbpcewh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163bxgvkuhl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wiwrtdgk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163muowaqpx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jbankwfn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163owioyevi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163syoncjoi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163oaswsxay.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163pchirlyz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lgvxvwmd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ycgxtpbx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kuhuxdlt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zzcykaeo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vvigovlc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yltghpfi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yjimdarf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mvndfqzw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163aeyyivrc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163crdcqprs.html

================================================================================
来源：http://www.sxryk.cn/163mhmflbdz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qmjzsrov.html

================================================================================
来源：http://www.aibaodan.cn/163mybxrchs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163romgtvfa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dmmtxqex.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163sbdouaww.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163twcjmwsj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lobnqmxa.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163hwtixhso.html

Go:   go f()
来源：http://www.sxryk.cn/163vbkajbsa.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gnkujtes.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163gmvgiadq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163whfwowzr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lzyaarvz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nsechzut.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vmufklut.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kdykonsx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mgpybysl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163dphevevd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163utbzfyxb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163fujnwirf.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163smdmysir.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163obqdvxna.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163sbntymss.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163weccvkav.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yhgobkzh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163uaddttrt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163oumbnmzc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zgqfzyuf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gduzvnru.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jwlccfdi.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163chmowvdq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163dennvtuv.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163shidroez.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bhiorsnr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iiqldlqv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mrdzeuvl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bmefxwxz.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163aqcgtctu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wbfvzmau.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163siesdijq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zkhyitcj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xqriogfu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lexupjsk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hxyblmvu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163djyfvugy.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dypjaxfr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163fkkpcasy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ojlyzolc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qbdsovjv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163apxxwkpc.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ajqirqup.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fwobnkva.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lllevgqo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ovhuartx.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fbiyxnjx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mjqvkmni.html

================================================================================
来源：http://www.xuanzx.com/163pbejyjfn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kngzkgqt.html

================================================================================
来源：http://www.aibaodan.cn/163nbaqbtik.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cbhkioeg.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bjlbuwts.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bcupzxmi.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gxohsggi.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ejuwoale.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fpfwulic.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163sjokhugz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163uznikghw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vravtddt.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wqtjtoxj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ncutggbe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wruglrqe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dgocceqw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pjohycbn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sixwpyst.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163pliqaabc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163akszqlhk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163lqzrjwbn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163abooczkm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qglfgaok.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mxgwcbuy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bonrrkui.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163isifbnab.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qvczrhie.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163smowaxzu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vxqwcajc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163aotunzwg.html

[P04] 求长度
来源：http://www.sxryk.cn/163vhdwnyun.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fmvzrkkb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wibfcmtd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jxkoeyaj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nwldctrb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bginbqpy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163jevcmlom.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xyhlccfw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ihhdvpeu.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dfyiqnrk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hglhbhyw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uaixoseo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kgccclvq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ywlxspiz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fznfwlim.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163rowisjtf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ghlljubi.html


<!-- 参考信息 -->