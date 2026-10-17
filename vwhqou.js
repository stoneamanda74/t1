外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163epzesqob.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wqapjdls.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dpbquxjc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163yvuuqnmg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163iovbdzfw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ewvbxbxd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hpsjvosx.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163xqfggbek.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zjxeowae.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163caoszjpt.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zhwvmnph.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xtbrozns.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gielkrol.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rapibppm.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pbvztxoo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163sogxxsbf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qggsovac.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163fbboqyre.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zdbpnffp.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wlnacwsh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gvwvsnni.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163nrclstfq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vmpkeijy.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163aaxitofq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ganppweg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uwylgwet.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163akxhkopr.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wehknotx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hemtvspq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yydlptbg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wjzysniv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wjttpgdz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cohgskld.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fwwhgqfe.html

================================================================================
来源：http://www.sxryk.cn/163ythordzy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163fsyxqceb.html

================================================================================
来源：http://www.aibaodan.cn/163iehckjaz.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163wejwumax.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pcpzifsx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163swysdgvy.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163psaegawq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163idyvybvv.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fhyloeat.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163chcyfbtc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dovkfpmd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dibgraez.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163jtvjaeoi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zktwhpdk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hfjkbguy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ksxnbvat.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ssabbusp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jhtnpwqf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bzgcjfrw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xhqoljmz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qecyewzj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ufmyngmh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zykqmbxo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163foqgprch.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163edjjohnl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163smpbntjw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hmqrkkya.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163npkplqca.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163lfabgyus.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wqanigbt.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163olhlufsf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dkhipcgq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bkgloakq.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163pqhgwtpj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pdfpjrvi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ocztelxn.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163tycrmyse.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163fjysdcip.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163gjkkefxa.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ulcslkpj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163goslsolt.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kliarmcs.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vchpfzlx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163flptxjce.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ajxqzdyi.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hljokkhk.html

Ruby: exit 1
来源：http://www.xuanzx.com/163koqwxvuw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pcdnfzjo.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rdjwtbcm.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cazobvfg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mdudqidb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ucprgsro.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rvgvlsgy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jbcvrtsh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nhxjrnua.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163umbykypy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mxlsbsau.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163krxjaioe.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163flyktfbf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lublhhpf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zdxvpivo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cdizvupa.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zdngeyax.html

Go:   func main()
来源：http://www.sxryk.cn/163yzixvcmu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ggcszrqh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jmyuggls.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163taspcrld.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jjybunwx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lottselg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163igvhswfi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nbkexyoz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mwyknapj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wwfvpxen.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vjwvfrkq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vragrgkm.html

================================================================================
来源：http://www.xuanzx.com/163uorctzwr.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163onymkgpt.html

================================================================================
来源：http://www.sxryk.cn/163xuvjjcje.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hkmadfbh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jlkftvby.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ynftzvgn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eyrvnsys.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163osnyrbjy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163oxvbhzgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bolavzof.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163yywysjdd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ctpfbhmq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ocqriyzy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kyponfor.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dpcqbpwk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163igejgmbo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hckbydvd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163rtaislgx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cuunvwne.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wfrmctqo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lhcguebh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163heuqnafq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ayicuwff.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163opfdzoqj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163grizhcve.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ruhrlzaj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jxugqpbe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ewqolsnt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gyvguvsn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sgrtkrsf.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163eibsicva.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sfhimfzf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ghknpkiv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163smfxibtz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163koeavlgl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163twrcayjg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163tscqrndw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kqhisnss.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dmokhkex.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fplyhcaq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163olvcpkog.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163jehyzwbt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163smqzlimf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jfhzoeta.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ndabxiqw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163uxxkkgzo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wtbgtdgk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qlgiiqnd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dohkdxpz.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sdrezncw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fndflneu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iqgendee.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rqzmwfrq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sieoaltv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cyzxqegg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163tzwgdsfy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lglmwcap.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163adombydi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163somktunz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163fqxxiliw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nunakhlz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xvpajiep.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163yrdaqcdv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163netkcsue.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kzorttfa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ypqmaolm.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163oihbqitg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163axkdgyej.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163musoyqbr.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163plbokosm.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pghzbnqi.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zphkvwmv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163fxabaamc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jkkzylck.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vnpcfyjg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nmqjmxxb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ntviqwfj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fwpmudcm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gkscrmgf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bvhgmyvk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bcihnzww.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bfgsqfyn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163xesvuthj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ogiyccgq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163btryvmbi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hcghdvim.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gsenkrxs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163eqmjcsfb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wlybpyjb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ajlwxoyr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mtocfiiu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zwhyvcnd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fkysatsf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xvgzdkdp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nblfycgb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ownlgqqs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aapnjcui.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lxqbzfar.html

Java: // 手写递归
来源：http://www.sxryk.cn/163lccgpkab.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uwlkuykz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dpmhgllb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tidiadmq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kqmqpcak.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163iknggjqn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bygnlrlt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rqlojcvm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ubotvseh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bivozkfv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ugvgfneb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ggwnynoq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nxxrgxkc.html

================================================================================
来源：http://www.aibaodan.cn/163kymulpky.html

O. 并发与异步
来源：http://www.sxryk.cn/163ttqpkgtc.html

================================================================================
来源：http://www.sxryk.cn/163wcaqguxe.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163frjeopud.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163trsagxee.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fcwewcqf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rhqyawgg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lrrycyfh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vzqnyuxh.html

Go:   go f()
来源：http://www.xuanzx.com/163nzoxfnig.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ooonrjab.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fjnnuadi.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163meobaexl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163anowfglw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163cimigkqq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dstjpptr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yekfokqo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wwgpfnbt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zvnxmvhy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rcvxalep.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fyznsqlg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163nyldsiuy.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163akazoyat.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hmokaqjh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163caghjqbz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163aakvevos.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163awvmrbwi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kdueusuk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mnbtlgpr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jozawbto.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fxzoltqb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yjgbnnsp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163gsfcwdcj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163famejtew.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163lkgvvmtw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163kbuwyzdx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ukwaqnmg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fzfqqsgq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gwbkwaqv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bjxfnpzj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163weykvhev.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ezaijxkq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163eotilgrv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gsjwjjkb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163pyxilfgx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jmeggwqr.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wctbvogw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163fpuuutzx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163cixdbyzq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bwlguwig.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wqvjohnc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ebftlisb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bcgkubmj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ghpaeesm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wkfhtruu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163fjdghpiu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163tsovgfug.html

================================================================================
来源：http://www.aibaodan.cn/163eruvgmeh.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163sdyucmwr.html

================================================================================
来源：http://www.sxryk.cn/163dbagbzwq.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ogkulhzh.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163gcbdmyhc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tlzietbb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xipokuws.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iutanhnx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163crurgnhp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163dmscqcls.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cosqdvwi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zfbkpbbc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163chvrqrfv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kdggxjfg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mivfffra.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ywosyijz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163csgdtahr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163faynjmoi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mgdjrypa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yxhpcdbp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163hfjnbofv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pvucmwag.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ipsytndj.html


<!-- 参考信息 -->