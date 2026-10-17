外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uubyyecg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rryvqbis.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jelwuffw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163imsssnfh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ceeiigsb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163btvcwjnc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ifgoebsh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pyznbaqs.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163udyvqqtv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163phdjaesj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163iqldsxeq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jfkhyopc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gbdvgqhz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hytmtnag.html

================================================================================
来源：http://www.xuanzx.com/163heregyvu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163gnspaugk.html

================================================================================
来源：http://www.xuanzx.com/163ieymfefo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ujhspumd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qnzcdxgl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zjipuwqh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163apvjlzue.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gnsvopqy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xdptdkuv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163kyarokqj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fkhziklp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bsvgjkhm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uldisogy.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163iebxipjz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163khmrindh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163buxpzqdc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163klmuxhlg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163emaxgkcw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ydyrlgkz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ejwtevox.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vfsusmak.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163chkpnksk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ptsgwldb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xrufakli.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dxthknpx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fiobrtgd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cbjwqnur.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vywkkbtv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fopdrzuu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bxsihaqr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ekvftyoc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163crcoczex.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163kyiclthy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163afnlqgbi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bswxayhm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uskeyzgb.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yxtnypnr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163yotutchf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kounxctd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tkgimtjm.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163gelwwndx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gtoytpdj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jtfwupaa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dezgpmdx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jmxrpbux.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163osasumxs.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gkutqala.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gywwjfph.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hxinbfrh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sdlmvojh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163cngpvukb.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163alklblnz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163nmctmfyh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wbcordjd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xtuzxjqd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dtcknlgs.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nszywzkn.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zyakctjj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zrboqoxu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jakfmjgq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qjlzpjia.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jrjwlnro.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163heplulgu.html

Go:   func main()
来源：http://www.xuanzx.com/163oywxmgon.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xxwglvpm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mjtcrocy.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hpiaouzi.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163imjzgcya.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163phhmicqa.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wskmvrbn.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163sqybreox.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163llwnezwo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163kxniqwcm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163igrcaqom.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fbziiyrc.html

================================================================================
来源：http://www.xuanzx.com/163opouxqkj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lseywwfv.html

================================================================================
来源：http://www.xuanzx.com/163bneyszfg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fhefcugn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jxrbriwm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163djmuqaek.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hdgwiuuq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nhihxntf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jpqsopue.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163yrivdkze.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wuzxujlx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rhtsugiq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163luflrbau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kpcviqxo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ceyvrqrv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fkucbaps.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wdykvyex.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dehpkbqj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uquqdrdp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vfcxbojr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hdlebger.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163iooyhazp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sbplzqpf.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163djgeozsj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nnmxnsji.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ndgqqawz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163doypurfo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163edpncuuy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163yfnzvgih.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163trixxmbi.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qladilqj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pqphdwhl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qhctsfhi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jqaysmwj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bnqrtapx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163neewkfon.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uavbnigj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oitccega.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dhcpmwfj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163twrpuihz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nqxgqpiz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tuexvavp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mdpvzlvy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vwipvibb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163yiuvlgrg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ycdiuqvu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bzhldksa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ugkfayog.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xshbblfr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jpohzvmo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jiohxwov.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ovaabjst.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163soyqayfx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163atqknmgm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gohayarn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ycjlxpdh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163htavjlsh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tdrbizfw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gqumbakd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163llntbanh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kgjkkodq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hljnhhfl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cstdxoku.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163plvgqqsl.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kmhevufg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wbbmnlfy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163awitmlko.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ojrispod.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163mhvhvhuq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163caeddsek.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163djsyvhkg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163oqxzairb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163osagtpbm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ptyjtqmk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163hlsmxouz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vrqcvoot.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dvtystni.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tsffxddd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yxkpzene.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163iarpsfbb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dmosfjfg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dsuqqzeg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ajskdefc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kyvhzndk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lxqadrhc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cpjiediw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163osfkpibw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163mysjgbse.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163saenyktq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163akcpjaqo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163thapnbyz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163jhkhmovz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163clhfffmp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163khhqehfa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163eukacxeu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wtpljfxe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zzgyttdu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163frlckanf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ebpnupwr.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163mucqsnpa.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bqbnsmde.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vycrirlw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163cmaftjbt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ztteqodq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ssuogmcs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kajuuxtp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nwxrrify.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163spcxegmw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ajsbmpua.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163htoucquq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uqiaywzx.html

================================================================================
来源：http://www.xuanzx.com/163ewiyubwm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qwkdpamg.html

================================================================================
来源：http://www.aibaodan.cn/163zliadlcr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lhgqnhve.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vraqsxxg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163byufgrmz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cprgojbf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oswjtajw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kunutvwg.html

Go:   go f()
来源：http://www.xuanzx.com/163kymldnus.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cbqfwand.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163sdffbrxq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xbdmejyh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ipacpbvd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163azypxjqo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ftuncwfo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sjsofqhw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jyeyngam.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dfuqlnox.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mfhlkrqp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ikdzatet.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163stvroyzb.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163eiiueemk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163leybkuli.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163atzwrxuv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ndcvxegg.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zyausogh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zrnlbpcb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163avuaoprb.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nsnrlnhj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lddsyxxw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ojnahvjh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vtnixipv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xvrvlkrt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wgxsyfww.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gzskpzpc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qsobvpxf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163itfzbqto.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163lvzdcsfn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163uzwtqldi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163doknbhuq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zyxmzets.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pzvmkztf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163srjlobur.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qzafcjff.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163cnkllllf.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ksqmgwnn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ycvzkmxi.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dznwkyvt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163smmguqtl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163sdgnfyju.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gaumytok.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163snpavxyw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qtmnjpty.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qqfwfzgm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gidbxcgw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tyjilcrt.html

================================================================================
来源：http://www.sxryk.cn/163mskrbgaq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163edwzblbt.html

================================================================================
来源：http://www.sxryk.cn/163tlckynow.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tiipzmyt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dkiqmxfw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jxusouhp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mnduwnqb.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tayteggi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lxvzvzrb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lznmmflx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tjrkopcb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rhxjavhv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jfmogbgw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163mnnosrgv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163lfcrbvvq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163hsrmrrdo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163erkassfz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163tjptgvut.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gqyvczga.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ugretlth.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163cgwzmdgw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163miasmwgu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163czvnobpu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163efnqlvum.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rvotsfud.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bhujysdt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ozzrppdg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163duyhwbcl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163mfejwknz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163uolbukws.html

[P04] 求长度
来源：http://www.sxryk.cn/163ejqyxehs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zextmxqp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163chnyzflc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xralgyaz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ucjlfrvd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kpibvmtx.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163feomsltz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163suupqjpf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jicwxoek.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dbdhxptb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wroufcun.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hbisliay.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163pxobmdgh.html


<!-- 参考信息 -->