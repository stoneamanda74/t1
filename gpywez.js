外链999!wailian999！

Py:   resp.json()
来源：http://www.aibaodan.cn/163mzyqtclt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163uacmhluv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163htmxdqus.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pltmfsjk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qoclajjw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163iamvrmuj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vrgawzqd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ueqoigjy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kywadnbm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rkczgmuo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163nukfkihx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iswvbngi.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mdrxkumq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tlwxxasz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rglmlvdh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163grnwhnuo.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163eblsudvh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163yhtwsdws.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163orhdfzie.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163egbncsct.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fxfrkdhl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fzjzgklb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vrmmkxsw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gljaqpzl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ojntdqar.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ctzzxjih.html

================================================================================
来源：http://www.xuanzx.com/163wvseqjzf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pexuakzf.html

================================================================================
来源：http://www.xuanzx.com/163ktodzxyd.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hlzeagcb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ewbirwap.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ktvqbgqh.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lircdjmm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hmzbxzgk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lzxfyusc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qtdhnmha.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fgcrwfdr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rqgblhkc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zbfsasah.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163utohbncf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163egdlynqi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ubckqwfg.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qtxdshjj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wwojbwkc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ymmiwofl.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tdukvtys.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lrdwrmmy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gtrvotpk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163jpfigzor.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jinemljz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xxygzzgo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163koxzbege.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rxuymahe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xvfcpiql.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163svqkahhs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163faesygpw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163olljowyw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ncwtexyn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jcyxfoem.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lclfsfuc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163erbezfqe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ldjlhktx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mjesjaag.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163focbzbls.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163cbkwbvjk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hqnwgkle.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zlledrjv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bfamxlpg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xzuprhcy.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gycepjhd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vdurefsd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tzweefwh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sufbdtgf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163abfvorev.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jzbukjui.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mcmrewdc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163jhomiqna.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jjgxjnkg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fynalnhb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yuqepzit.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aosqbaub.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163phsrbozy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163drlzkwgr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mxfqvzvm.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163bgvufpeo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qtxizivj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bufblend.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163nntxgfrt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163khdfrmkg.html

Go:   func main()
来源：http://www.sxryk.cn/163ylabczmh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zqjpegqf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xhtchgxk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qzwudhjc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163buxwraak.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bcvtwcyp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fcwwngdz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jxfyllfu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xailovvl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ntfwilan.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163phpwofpx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gypimfnc.html

================================================================================
来源：http://www.aibaodan.cn/163xwdkgzyj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fkbtscjq.html

================================================================================
来源：http://www.xuanzx.com/163jkfmsopo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uzeiuunk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xlaxbuqg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163mepfizyr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ljilupju.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nrmpdyvj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ntghqflj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hdobvefg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mntmtwxs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163soutmgpq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gadjokgd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oahnlewj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vydiigke.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bunajamr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oebbluue.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fwtplzeh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163snlkmdaq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jyrsfkzv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163akwajamf.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gctitcas.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qvnftcoc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ysonahns.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163obdrbyrv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163htakptod.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uyingyug.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163oqvaalql.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hdfbiyxd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163umrsydgh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kqcdwiqu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ijvczapy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xhhdowuh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gozxuuwh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dcubvhlz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fbczkjhy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ychhlbpk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rjpoqdfg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ttgametj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pobzuhth.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tkyquykt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163rhpdplnc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163inmcbdwx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163roekuxap.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mdqpkvrh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163iypqajhz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lehdnusg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bjmjfqok.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ubnfmpmx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163sztdgcpr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gtvlkcxd.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rnskjipz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xqqrtovk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tkdpcttf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bsspmiac.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lqtngwfx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xzycaqmw.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qfdsdspu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ywjwsega.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qyxjejfb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bntzyphn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fazaxrib.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xaejugot.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163becnaupm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ywsanwfn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hrklxqrg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ajdcvlva.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163yavnigzf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wxabeowk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163usvbfscd.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lcvmnfid.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vqisyhgd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163glnionli.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lmgsvvsz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ldogyoon.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rjpouqbx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iovdpdpg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163dzoawyii.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163imsaywwu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cyhjovei.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qwuskmyb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163xaqywzmk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163edkvzhrc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163valnhyca.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pdpheaql.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163myyshpwo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163cbfiejol.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xafqvjus.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163humzlxre.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163twpyzlpf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163kihnekah.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mcirwizy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163roynirnd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lhfblulf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vicfynqy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ngjqnyvh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tfkqgmsu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ammizeeb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163sjlhiotj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163iyfcajvf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fadltesp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163yntibvbz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163crqeuged.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bobkeomr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bgxoymvx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cpshujvd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mwzgsiqa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yyzrkcwe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163eamcocua.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ecnonkfo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ypezdozh.html

================================================================================
来源：http://www.xuanzx.com/163jeugosll.html

O. 并发与异步
来源：http://www.xuanzx.com/163rsgybbzp.html

================================================================================
来源：http://www.sxryk.cn/163ycrwhaxa.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xmzxfwyd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163edpqwrfv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rplejgik.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yyffzfom.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wsxabnuz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qsougxfn.html

Go:   go f()
来源：http://www.sxryk.cn/163sjojotkp.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hqxiofur.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163eakakokp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pnhetjon.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163iklnopxs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qebbicno.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163desombvh.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mhzvqvtq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ybawcfoy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jzwwdtmq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163fgslcfep.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163rybvehjd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163eavwxygn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qjevldek.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dxvczdvk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gfhhevik.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dmvkirjf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163oaounnod.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kmukolub.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pwquhoed.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xazzlihy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uorfjsvg.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ryewyiub.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jlxbihwb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dokaatea.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jmuljbgi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163uyifebzs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163tiaccgiv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wnlkdfbz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rrzkdolj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vetwsrsk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xxueypqy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163snsemejf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ynqffbyr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sgrvpoqu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163rqwzvpem.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163sxoldpdz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wbitpofk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rvpmojam.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163oomavplx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mhowgpvw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163fensuzic.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vuhqtpox.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163imqhwxge.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163pjpqolso.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jwmysgnd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163tiddtgib.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pzjmztoi.html

================================================================================
来源：http://www.aibaodan.cn/163hgldhbga.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ukhbpdqa.html

================================================================================
来源：http://www.sxryk.cn/163qorbqijj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uphldvgl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vmtdbdlj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163lsiwcipe.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mhsddaxt.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ppzesfvr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163yldrlvsw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rtnqefgz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gyassegi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163estqwyfa.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163caoqfrwi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jgqvjlqi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bqnrjtvv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163tgsmbxsa.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bkbmrntk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163uyibyhxj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ukxlzolt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163unojbxza.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nynevojs.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163utbmeopq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xlykhdwb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163batbdpkh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rqfpgdoj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163skjsonbb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ovmtezeo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163thgqjfzy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163oimdyxfn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uwkvkhhi.html

[P04] 求长度
来源：http://www.xuanzx.com/163rwxkjlca.html


<!-- 参考信息 -->