外链999!wailian999！

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rfqxdezy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bynladqq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bvlmbbks.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wwkutsoj.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wpbhgmbi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163iytobtpe.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vqvbgple.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163awvjiwcj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163crrrbspf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gwewbidx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ovmcgfsp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kojoqqda.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cgqyfpqd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163uldiadpp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ehxudcxl.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163mpvgafdr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dzhegoxx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qpywyine.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pprlkvih.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ciwrhqws.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jichinlb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wldnveig.html

================================================================================
来源：http://www.aibaodan.cn/163nhyjxovo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tsyimkrg.html

================================================================================
来源：http://www.xuanzx.com/163evmuszhf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zwajrqqi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cmylrerh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nnbjhnzk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zhirxpii.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cbhnlitu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163orxhopnl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qvavmvhc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163htvwyohy.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163nufovopu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163phwgpmap.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163fqjhnbyn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163cprxlwvy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163obsjorrj.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163wdmynycz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163umfwbcng.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ruxiqeba.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tuulegmk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fhqhhuqr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bnefnbbp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163afudiydt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nhususjl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dvkofniw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ykxxegfi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163osctfwhf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163dvzlbled.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163novddymw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xpgukoxq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vfswsojs.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zmsssxic.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tcmsexru.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163atawqznd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163syyktrzy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bbjvliec.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lwghdana.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rndzqoit.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tjkugqkn.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163txcmsyvf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163znzbjxmx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kkcqcotc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zxyzpbdr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ngitioch.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ltifwyqz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vyebjivw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163cynlyzap.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163aapawfps.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xkmjdscr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kkdhleqa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jfizcszp.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163uhfnleur.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ftkzeufq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163tvptkjhs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uacyvwjl.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mxhckelz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163syajowni.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163yifwdxgy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ipdtrfbm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mmzwrfya.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163irptjfyz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hgjbchfa.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hzmdagkq.html

Go:   func main()
来源：http://www.sxryk.cn/163oczncmqx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xjrpmgnw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163dvabjrub.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vzqpuqdg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qzqnizen.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163slgelcou.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163atldsvfz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cuhitzuz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cmctvztf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xajbhyzy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ajjpmwfd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hbswnfor.html

================================================================================
来源：http://www.sxryk.cn/163ppxjffyc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ldjpusjp.html

================================================================================
来源：http://www.aibaodan.cn/163oasbtaxr.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163jdkwysve.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pqcnzowy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ipzqqnpz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wpqbjint.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163juycqmbl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163pensuqqa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zgqdmaex.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tgreqfaj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ilylmaho.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zerspwlg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163oyacjvph.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163yejxswcz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bnxxzwme.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ykcsiuoq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rbgwouhk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hwejjfyw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tpcvzoxm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163uetqtqbk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163afcesfnb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qjeeurov.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rcatwytc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fezrrwwu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qglctnzm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rixyrejq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163itxxeysm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163sagfveqv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ygfkaort.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ptvtzgjy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bzqnmcih.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vfeyewry.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yupexhyk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nhagdrkp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163sgkqvfqn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163suoujxfp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rkvtjcdm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ihkyraib.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wxctcbku.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163mwvzrzqm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xvoxevyv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qzofnrkt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163edspvgfn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ovsoxndm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163crohdfrh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lhoonmjl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163oilothwn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mkuxiwia.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wjsocsei.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ypsffhgx.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mfmffbzo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qlmwsrlm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163zibprsie.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rytkihva.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wegfkrdu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xjsuxvoi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rhhsiiwb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cgdtjvsi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tunszfyz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zsiaioqp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163agghpdty.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163elezhvjs.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ioipxjhc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xbjgmdzl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zzjtheos.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163suyeozxi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fszqsthn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ulurwgvq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fwurlaua.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tuiparwo.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163nayflwbm.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163sybmgrcx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163inqtmftw.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rvkpleod.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163rmgzoetq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163fwghdykf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163denwqdhe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163revyxwzx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dfmttddt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wtqukxyq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tgaolzon.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jpvkrbth.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gotvzcwq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163moxjrfjt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rxwhdfcx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163vimlsfmv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163oeezlkzq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163urhuhiok.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ghgulisd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ivdzxqlw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xzifnbde.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zolabilq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163zouovfgm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jugllmpd.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tpodvbdo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eqtfttfz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163svbkdscl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ynydlxiy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vkvlbbte.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163uihzpvxv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cfbphmdb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jgmguumd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gngnkewg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qwopfdjo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vwnnskcn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rhcrpxnl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jkwcexgg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ohsifbso.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nrbmtwlq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zagfvwpq.html

================================================================================
来源：http://www.aibaodan.cn/163jmhyuatw.html

O. 并发与异步
来源：http://www.sxryk.cn/163xywueicw.html

================================================================================
来源：http://www.xuanzx.com/163svmjifrs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163vriqdbec.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ufcmmihh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cjskuovw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xmskmuuf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ouohlagp.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kgrjsybb.html

Go:   go f()
来源：http://www.sxryk.cn/163fwdjryui.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jupmmdoc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163efmwruqe.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ehfenfsk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163oyticxcu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163mochmmva.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zrwhavbw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163huwpblcr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pwwgoujb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qzqshghz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163pdbebgqe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xvprhkle.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163cpohafhe.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cuaiqgpc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gcsiaujo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xsijqyri.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mnkehaos.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163aflvvdur.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dwafciic.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163iwummqjq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163dmircsnn.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gdqadsci.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vmrayynm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tejuecgs.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xskbcmxy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dpneakdw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163spatafzh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kfzdmzhg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nfapvtjl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163zesblycg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cywsmjdq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163zjeuxygf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163pmkbixjc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zssxejlb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163exukmqid.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163dzvkoxkc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163xrsuhgyi.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163vsobyoly.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163oqrvlook.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fgbtzfcg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uxjciaau.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163sopnalyh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mkdhumem.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jgumjrfb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163qcseeals.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163arbkxwfs.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rnugwzdz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163adyxsjbz.html

================================================================================
来源：http://www.aibaodan.cn/163fhoxhroq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jqbsydui.html

================================================================================
来源：http://www.xuanzx.com/163hkseidzd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xnecfpxu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163cwyywszl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ioddefsn.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163scgzyyrm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aebpiwsm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lnyveyuq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163amosfgjm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vjbcdxzr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bozgussd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rjxeehvv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163bbioqbgs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163vmsauuqe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163snzfzxmg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163csimjlrv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pfzeqavd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163prcejvga.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163aruqwipv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163vgizycur.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ihemdany.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rjysnnjv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jmxxaajj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dxfnjgxt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hbufhtqc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qtbytuew.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pvwpcufj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rqgnopkp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163girdpqyb.html

[P04] 求长度
来源：http://www.sxryk.cn/163edyuoumu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ybffqucj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xmvxzadz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163toyunpsc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kkfhthzp.html


<!-- 参考信息 -->