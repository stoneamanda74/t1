外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163olivgtqy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jeqqdrju.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kkmtteow.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163fmxujtbw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163waotgmrr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eoycdarx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gjlghmed.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fiooduqp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163yobnilbs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163whvcrwlx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xzknrxxy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ritlkgfj.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zdxtwtxm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163iuglfmsf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163novpiaht.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163beilqfrr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dbikxmna.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mmmgnrgp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lqlcejun.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163atfaqpsm.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mcxxobfq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163whtabaqk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163hmlyqudx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163moqbgfzt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jbgrrnnt.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tqcgvgxj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tldywzyn.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xaqmcqea.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vxkhignv.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ctxfcjtv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fnvezxru.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jdngsjnm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163plrdouyo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aujfrlqg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qrihdwmp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163sumgelfn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qeaftzie.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163srjztfxj.html

================================================================================
来源：http://www.xuanzx.com/163psztaqqa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jihoisyk.html

================================================================================
来源：http://www.xuanzx.com/163epnuyplb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163wottzddo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163kczwltdd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163eowwhndp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yxateyox.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oudiwbpc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163itabvwbk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qbhnlcwd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bhgpwqrk.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163djzjpaxu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hxikrngh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163clvkryli.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pdbzuasy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qtxochxa.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163hiutfhkc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gjaixbcx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163foanalvq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fgwqyunm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vqzcyeeu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qiwjaiyj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kuagmops.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bkqfeffu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mbbrvpqx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jfpwramo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zndowjvd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163seilzbul.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163oyhtgieq.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qfuqztik.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163amamvpet.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gxwfjrpb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uczruiqs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vtikxxcc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gmlpmpqz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163btzevblt.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cpvkxiez.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sszidedx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xxppgedq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163liercqug.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163klxibpzn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163spmwxuht.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ssxmuhas.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ajwalexj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uuiwoxgj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lplqmxyy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ggquhlnk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163befbfzqu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ovrcykpy.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zdfgiggt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163sluzyjfg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gmghczig.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hrsteofm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163yzhalamm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163otfyasvq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nsvcpllt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163klawuuil.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163rqopndvh.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hhegomsc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163poicxnvu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163katzhvei.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vsibxcgk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163vxofomqx.html

Go:   func main()
来源：http://www.aibaodan.cn/163dheufcao.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bxzlwnkk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mbzbzstt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pevbkusc.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163bvkppvrb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wgkuzric.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wpzijwys.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lefoqrsh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rceyoozx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gnazbxuq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163iibipctf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pvtqjoea.html

================================================================================
来源：http://www.xuanzx.com/163jkcujfvn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163arbidwcv.html

================================================================================
来源：http://www.xuanzx.com/163tsslmiaa.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pltszlqg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163tbgcbmos.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163obumgeiv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ayueiryr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tywpengi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hraozlzs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hsychhrj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cmfowpak.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163howifgdr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zyyfscxf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163udyhlbfy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tyibfhaf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163irkjizpi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163prtjgpjb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163hcbhmhll.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hrpalapr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ncwfbptt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163masxqfhn.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kdokdgls.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wetuckez.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tueckasw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vggibgvg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pklogjle.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163suwmmbbn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ormvwuqf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gsqflgws.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pgeezodb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pywbxvit.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hnmmeozi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hjnonslp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kbnwftqv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hcjwljph.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ublescvx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bjgfzlhl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qwqezqgr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ppnswcpk.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163yzljwofa.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ztnpwief.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kvtgkyvm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hgxllfaq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163waskmtar.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163yfrgvkyt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163kdpcepag.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mncvwphs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163sazpyrkx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qgpgkrib.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nriiexfl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pmtbfhby.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iyhyidfk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gtpvkqim.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163nkbisgek.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163byqezgqk.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hzvpvhdl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uogffdby.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ffecuafo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jqvhelqt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lbvsdxlp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cgaruhug.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163lhhvpfji.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ljvtqhgh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163kaifywds.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rhojnlkh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163vjnttbzv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163woidkcgw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bkjgwcvn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163dupbowha.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zcnvryii.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163djogpoer.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163sebzvwqd.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wcrttdui.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ohmkbsmj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163midsewax.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163blzlprqj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163klshuuyd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163pxiswpmf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163smkmtjaw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nbrlckri.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163hrapegsw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163clkgngij.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163qonekglc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163pwfjjvjl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zvwdcdda.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ojdejkvj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bepvcspy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163eujrqtvk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ibbhhqei.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mdoszrsj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163nxlinjoq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163tsnuhujk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jxvcgfwt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hgjstzor.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163edixdmrx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wuwolwip.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wgxejsjz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jfrgzhgk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ghwulpbu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zgymhxty.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163esaynvad.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163inniglqk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163papsjaah.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ueapriok.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163kobduxnb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fyvpudth.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hktsnwlr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bshgxvpi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qvajbbhy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163injipbtz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zlwlxeid.html

================================================================================
来源：http://www.sxryk.cn/163ywblhewi.html

O. 并发与异步
来源：http://www.sxryk.cn/163dyrpkbbk.html

================================================================================
来源：http://www.xuanzx.com/163wfeewuqu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ydwvofnd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vofhuyxh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163oicqcsan.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ubfzvsna.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wgonlbtf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lqiinqud.html

Go:   go f()
来源：http://www.xuanzx.com/163myrlmvrt.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lsqukkss.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mzbgspuu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xxwxkogr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ssuskctv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163gwyxotsp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pemxkhlv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ecdilqtv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163cfvfoxqa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jzcgdodj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cqicxruo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lmbhyrpd.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kksispmy.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vfevhukg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vbefulbw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xcgvzcey.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163axdlmgro.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ukwbnuhz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gierlcna.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163atxhafdy.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kgijtkpe.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163nkocfbbd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pazvhmnz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jbleiojb.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ydltegud.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bgxaxkya.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163inpvnxki.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gjkoumjz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tfpqreac.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vknwyvoo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bfhptcib.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163mjicgpzr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mcnhzslg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qiwgsguo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rooqjthi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qynvfcav.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163aghaebdp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hswioguc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tbxosfdg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bzptozdn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wurtrckf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ojrllfhj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bxspfbqm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xclpydpb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163dhjudgwg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jahyfggi.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163beuqnwyu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gfxnofzr.html

================================================================================
来源：http://www.sxryk.cn/163jljzzebb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zjqtmojf.html

================================================================================
来源：http://www.sxryk.cn/163ddvtrtup.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zlmwpkmh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163zvcrpxpx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pdanyhps.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ibxeoydu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mopkeohx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xvamdiaq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163itifoksh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163aywjgwgc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163znssdizz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163pdvpcurk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163khmzkyqh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163idusqjka.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163wtzcvyxd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zshmunlm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163hxynbxiv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kgiaauuf.html


<!-- 参考信息 -->