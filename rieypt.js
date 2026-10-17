外链999!wailian999！

Py:   resp.json()
来源：http://www.xuanzx.com/163xcenjrec.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jfbiqitn.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163geplbngz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fftioygd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zbglzzcr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fuyhdtac.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hjmfdmwb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163uaosncni.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jpshpluu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163toqkyjnn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lsfgqxzo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gkjxqtmf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vlzeigvm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lnsznvpc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163yfhrbffs.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163chsbrfov.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wmrjydul.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163miujpseh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rdwxcooo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kbgoagza.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qrjqrzpd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163izgaentt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gbjxliji.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163toiufgif.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163yxbcmujc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163selaocjw.html

================================================================================
来源：http://www.aibaodan.cn/163siigedks.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163irygowee.html

================================================================================
来源：http://www.xuanzx.com/163aoinyovs.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vddsjmux.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163iunndrtf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rnzgkkuc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jqisejym.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zqmnxmjx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163orzxshmq.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163eqtoqsxz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163merecctv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yemhrfck.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163jdgfengr.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zuqkmohp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kxpzruva.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jsoqymsr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163uupfkawh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ukjbxpdk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163trabyikq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mpmbwcrt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wxovdtxm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mqejsjym.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zfkkutdf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163fcrnqmob.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lkyqfgqg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sfkltbds.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ugtfwjph.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163tkxexcwd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xjewtncj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rrhzpwrv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163bozyiwza.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zmwpeyzw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163igasducv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vtwmsdjb.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163kuudgexn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vgpquyvr.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ggfikkgr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uyvzzazz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163naucdobz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ssipcdbj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163epgjjsyf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vsxcwezr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xsrgayye.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dlwozmua.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163oslcmfig.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wklkkpez.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vrecggmz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163outkdgzp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ewgobamn.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vwemtcep.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163eectwglx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163mgwfvnhy.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163jnroofmd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jyrhlhfp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dicejgea.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vpxtsyqr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163orpuhfgz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163prpctdgn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163eljmqhbn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zsjsqqlk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ldwvlete.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hfqnwnzv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hxqxqdvo.html

Go:   func main()
来源：http://www.aibaodan.cn/163vddxbwkh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kgkzjzla.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163pxbgnixn.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163uamzvnmu.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ndyjpbfw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163oqnvfmrs.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mykkpbsf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nnufxhjl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163khefxxrr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163iwiqvcbh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nolcwriy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163crwrmpbr.html

================================================================================
来源：http://www.sxryk.cn/163fiebtxbt.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163anqsqjgr.html

================================================================================
来源：http://www.xuanzx.com/163eezlayjt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bimoybtv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xdultlsd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163kyedgtlo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163oajbceaz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jipnhqbd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ziuwysnv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ragyhici.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163crwlteeg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hhgoevdh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163oxkkvime.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ropwceco.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163sdbgfllr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rbylnbkv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bmlbfwoc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hfaqmoce.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ckebddwm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mzcbtsap.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mrcqyaty.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163hwbrukpe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163umargokw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ybaestzr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163omjoffje.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ybwfbuuf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jsmzarvz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fdbbskku.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163bfawrzoy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163grwcuges.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163dzlatrck.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fxuwypor.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163kafabpxa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hponghok.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kvhchkof.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wemnnltx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pjbnoevr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ywthxkwq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163yaejwsap.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163njgmmoil.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lxtqkjbm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163slxsbwps.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163aeegqepn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mvtxbdxl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zhrbphrf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mdmeaymz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163uqhhtbta.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ifidnokz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163urxvopdo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mxraraon.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vwscguhw.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fojyuazu.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wpfoigpd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hzcmavab.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163efntssld.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163susjntre.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xgiowofh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qqbjddhw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ovoypamf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gehybtfz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fntnjxiy.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163mvupyhzg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zdnpednj.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163dmtaymhl.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cqdqncbh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rjhjbvzc.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163owphadgy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tkdzrjqn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ubmznayd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xvwtqujb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163slqctpth.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wphbpgnf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lpmjnkny.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ftavswaw.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jdpzqymu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dqfhgheo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163bwvtavwy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vrtfdjja.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163spsnmmpt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dsxuojon.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wwrteiix.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lcrbffmj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163exbigdzq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nlpjlkbt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163zymgaqlm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ktsemtwo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163iglytyad.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hupircpi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163muebmpqs.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ococxzpn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kxnmkbqd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163pliformk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wfkwvaqk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163yqmfenpa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yywavlqg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hifyhcei.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pfgitzqh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zclpptan.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qjfccvrh.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fjcykoks.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lqqezsxy.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hjwmqiqf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163evdwifls.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163kgrejiyf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hpmkhpkz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jxojmezf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163szycazss.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rijqobcw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163thfnyjmq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vyozthyz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cddnsjzi.html

================================================================================
来源：http://www.sxryk.cn/163nsgpjcis.html

O. 并发与异步
来源：http://www.aibaodan.cn/163xsajibjy.html

================================================================================
来源：http://www.xuanzx.com/163tiflxxru.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aexcsogy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163nxpzpqhp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163eeciyqxt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ntsedurp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lzqlnhxq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163jwyuedvj.html

Go:   go f()
来源：http://www.sxryk.cn/163tiyijipa.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163shiaufdz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sfmenvpe.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163enqgmlru.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ioaldtam.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163uwbbzbkf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163znjzrmay.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163csreqcbs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163hurulvuo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xtgeiiie.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kaittypo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163khywyvip.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163oqrzsnum.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163aecvdnff.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qmkxlegt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163txvxsonf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zsleziln.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163maefxlif.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163eyksjvgc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163clfgmuag.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tsnmlkkp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wvudhoww.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hyknithn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gusabvbr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163oqikhqdu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163kthlsriz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163kqvadhqx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qzhnmicj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tgsvbppy.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163apdyxdqk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163chmvqtvu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ubfptctg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yhsueqmi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rlgjlmce.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jjiljoky.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ddxdsprd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ojwmayav.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163iiniaego.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163restggzo.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zpcdpbzw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163inaznros.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gjqwmqav.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yaupmgds.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163iwhejcou.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163gfnnwzda.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tfzqklkf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ynwfobfd.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163oxghuwns.html

================================================================================
来源：http://www.aibaodan.cn/163frweqfmy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163yobwnoty.html

================================================================================
来源：http://www.aibaodan.cn/163btptyehw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pujmdjoy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xelcaqmf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jmoudtix.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163itdmiflv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dljuycsn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163adhbkiue.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zzboujyt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kjytttcu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tqaixztl.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fhqaojvi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163oiziptwp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hrxnolrh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fthzqmyn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tmdxamcw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ljkgnrsr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163pursfomq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163thkrgmzk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163rgygadgn.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163bpsqeijf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163bvocpqfq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163oclexrur.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bupvmxfx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mkbnzeek.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163olnsvlqv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mkscmezs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wxqqspxy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xlxngnck.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zqqtuhkf.html


<!-- 参考信息 -->