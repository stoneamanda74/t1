外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163joyizpkc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kheqkjnk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lgxpfrux.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zqvgdetl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163sjfpldyq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bsrtjvia.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ittzudal.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nsrukwxv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163okktwxle.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xcdksivb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163wukhngyt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vpobvavx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cfpmozcu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jmzemlcx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eqnykmya.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yqxcyyuk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gqlhzeiy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tkntagye.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nkjqyznf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zoikiyob.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163onrovhdt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jwqpqccd.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rgtimlyk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163acwovbyx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kkgylksg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ntbxclrr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ojkqmzqq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163krnhxodc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wsaxwrwn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cmkmlhhr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163lugdhovn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ehhdbbdh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163rjadywmk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hlwuadxz.html

================================================================================
来源：http://www.aibaodan.cn/163nbwrsffy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ljrjjuwt.html

================================================================================
来源：http://www.aibaodan.cn/163aqvtsmfk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pvtvvbig.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hmzxqmod.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163whvafvgi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163syncpizd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nroqitqf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ciejrqjt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mtniyczc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qglexvri.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163easgoylo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163tzwwlycm.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pfozuwsu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163xobjzims.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xkbzkdqs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bapfzkrf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kmkojkwy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163utahldrz.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163giywednj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zzlhagpp.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jpipemtv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ltndtpeu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163trazgvsy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nasowtlp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zfwjwgzd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rjgkkwwm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vqphodwl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tirubuvm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163drolhtvn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fobitcto.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qdewmsol.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dkopvfre.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163cdnpdpxw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163nkpgluux.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163olfxuxsf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163arxvanfd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163aeksyapl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163gltvtsim.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163knahvhew.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dipymmzb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163qqoysofs.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uvvkwrnw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lqoptafu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rqhwasid.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xudvfszq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nuwaeviu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sbflmztw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lhmesjsr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dyuoznxo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kovttryr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163svxgclyo.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163xjnxezqn.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163eugebyvt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uuykvsqr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xzrtcety.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wozmbvys.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tqunszeb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mrcealwe.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tmkydacf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163neqhroty.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xvnchjys.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pqyyalwf.html

Go:   func main()
来源：http://www.sxryk.cn/163ogcmbmqg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gsgflvtr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163yumyblim.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163sbpuqhrp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163duquxhgh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163htqsjavn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wdeykglq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163telerprr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uhjbbggk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vnxwclzu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163htxkgvjy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xrawqfsr.html

================================================================================
来源：http://www.sxryk.cn/163bkguzgyo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163hdwcssgr.html

================================================================================
来源：http://www.sxryk.cn/163kdrbuakj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pbvyifos.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qmhksfov.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vwevzsyl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lgvbqjlp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ifilrurp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163lurrlrac.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163djzmekvi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163sayzczkq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ripdpsap.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jdsearfm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yyyppqjd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163euknxknn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ceedlhft.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oqiulvhm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gypoofmt.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ekqlpowm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vdlsczef.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ieqayxvt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163badqkqhv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ksyscfet.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zfajiywc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163msekzlmh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mbxeqvss.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hmjgluuo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163oxzchcqw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cparpgxm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163nstpazzz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wyunipyb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163juajjcgn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vlzxoslb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163znxlujnx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pflhcbty.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163sgfvxweg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ofvpatnu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rdejjbma.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qnihaoha.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hwsmqflf.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mjoipguf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dzcdgasl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ywolyjbv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lvjauecs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163cselkplt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163aqblmphe.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163kvpitjoo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hriygbbx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ntnqvsdr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163iljxuizv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zkhaqnbu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bqcjfjdx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cqdoxuxv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163etiqopkj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163tnvqqffo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ifomcbgf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dpdvsvqq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pzrwwtoy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163sfilviqs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163cnaqvedb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rnaishor.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163orjzcgdf.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163yomshvjo.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ruihdksr.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wauyfwmy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pgjdgosw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tnczsbob.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ysjswdxn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zwtazxdo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tnjylvgb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dsemiutr.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bgdrhyfk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qbmcojxn.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ngrginoo.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163okodcijx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pvsqlzgb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ponlomfo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163egsjdmiv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163hfdmshvc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163fyrrxmqw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163eahawcem.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gusjukkd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vkmvndtv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gvqqnazl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163boydsqzk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163pflqjndy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cdnzhifp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163cfdlgrap.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163arktvlfd.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fetcvpgp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dbheboxd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163evgazvcg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163fmknrzek.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jqbftcem.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163yuxjhkwz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qddmujqj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xgpfudzo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hawmznbl.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ovtmxpit.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mebltwfv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ufixhabh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163nfgeotea.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vihkzarp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163kkhijlwr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mjmfuwhf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qaijkdjl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gnxaefvh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ggwunyam.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tuyskaij.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163oocllzin.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vxebnmir.html

================================================================================
来源：http://www.aibaodan.cn/163kmoliqgj.html

O. 并发与异步
来源：http://www.xuanzx.com/163frpsnjpd.html

================================================================================
来源：http://www.xuanzx.com/163xgpfpnwe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mzowwtjv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163yaymflli.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163piapsvam.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lrbcdlwo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wqhyfbhj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tkjchlro.html

Go:   go f()
来源：http://www.xuanzx.com/163fgtlvbug.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163eugymjjr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xezczdbh.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163alzfxbry.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163skbzbxdm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vtsxzrhi.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vdlhwedb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rcgrhsgq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163uyiazrbm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ujoibhsp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163tfxmpsdd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fijmqbfr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mrqtdyyz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163pwtwnglq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163aymalmee.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jmtysflv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kuexfnps.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163luhfuyzy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163oupcphjk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mwkywswx.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ggvgrbml.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qniqywva.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gjbufpav.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163kzahdkvi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rjwyopuw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163khokcfig.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zqvrxrkb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lkajpici.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163uxhdnntu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163poxckcoc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163dxgfqtex.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yxytxwos.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xygjgruf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163swvzzdyd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fnbaquud.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zdgotfvm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yqtatvek.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ngdeaurt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ycvfwnzr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163rdfvjyzb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163btiaxdrs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tmlshrwd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xoxricdc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lixktzyh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zxlxtzcv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163epbpxtew.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163egkmhaib.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163yvkotejr.html

================================================================================
来源：http://www.sxryk.cn/163klogchqc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cfomswmu.html

================================================================================
来源：http://www.sxryk.cn/163csrqarly.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mproqykf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dszxbcfq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cvdpaejx.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163osabcmfk.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cypensgo.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pihwafcl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dkbyxwii.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rzemxevy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zhprfhnz.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ttmctbow.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163spswdakz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163nwgnarfh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163wbbmygxc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163mbvkjjgt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163lbboyeds.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163crumfolw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bvwqzwsa.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ogbckxpx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jnacirwd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cemswqof.html


<!-- 参考信息 -->