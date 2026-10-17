外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dwqhgpsw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fpnjfarx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163capcxeov.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163nhwrrvzk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jfoypako.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163tbbzwlaw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xfvzddgq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rloykilp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ajiwicht.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kmepkcax.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pqhdepxi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163visrvxdy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yvotchhq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wfoszcbc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ciurwxqe.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hxrmcrlx.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163exflopxq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ncecyiks.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163luotitqm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qrhsknpk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vnvmtxxy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zxbbblej.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rkxgxolm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yxwsmxgh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163songubgb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163evqfmnqi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163iddsvgeb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gzpivywf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bagzyshs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gshekoui.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163abinnhdg.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nclntppa.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tjchrrkh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163tviorcyt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zfokwasq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dxaacbsl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qgwqhoxj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xrqmdniy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wnskifvo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ehustioa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qnwkfqku.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vjsxnhnt.html

================================================================================
来源：http://www.xuanzx.com/163dhovrmjq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163fmgxvjds.html

================================================================================
来源：http://www.aibaodan.cn/163spbmbrgl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163bsieckzt.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rlltkvmt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163urzsnkcw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163drimciia.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163iqzrxmse.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ggnkoreh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163kfmjtsvu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bkiikjxp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zilpubra.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ylgxitsh.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vdiqekxf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163yeiqfvmj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163eawfview.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163skkmgpgw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dgkmxdjf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163gdornwvc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zjbgdjot.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163eilkggve.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lbvzmmrh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fptfgups.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ylkifglr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qmnrylie.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ksqzkyeg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qomfuqnv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vwcysmaj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vpelogsk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ytagfdqz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gyoypdwr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dlkbfkmu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163yvrpjsmz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163hzybrcvv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ffwhmhis.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163tdyuhkqz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mikkfxsc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163pqpakvwv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uydwfgzt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kwlyrmko.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mguvmbba.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163slgykqwi.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163fkzalvwa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vdlkcisw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rysyjlth.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163slzufcau.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ppkyrsal.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jyxyanml.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xyryptsc.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uoqxewur.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nmlpdpdy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dkavjbju.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mwbgfjgq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qnhwlngw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163gocumsmk.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ykvvfytm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lrzuyzpj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mjqpqaud.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163nvkxvrnw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ubntzcks.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ylozhoiz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163flkmgdtr.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qfofncjg.html

Go:   func main()
来源：http://www.xuanzx.com/163yayxyhfk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163npyvnqzg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jefdhiml.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wdoasppe.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vukxqrgd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zzkyzavq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zqoxpbwz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jxosopki.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fepbilik.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163eousshup.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hnqiesqn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163fkokqjvg.html

================================================================================
来源：http://www.xuanzx.com/163hjfghszl.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163toqwugdl.html

================================================================================
来源：http://www.aibaodan.cn/163gsscuhzg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ztkmvwgl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kryxmshy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163cvzjjlgn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qrlbdoun.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wgeggmka.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mgytenbx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ghwuepxd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lyosagbb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fwzydxjv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qecmybyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nxkuhzeq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tnfgyjzg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zqkugjfa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ekbwvgew.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163tudjfkxr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tsjknmge.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163thbmqech.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ivbfwmmb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163udvcszws.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kehelavr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rquuvsli.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zwnfyjfb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pbpriywj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tryhqsmi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jrkidthj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dsjgtghe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163anerwuyj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163civnxshp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163iboljdue.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163yntvxofk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ryzfutqx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dirihtrt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jsaqmhns.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vvguhnam.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163llyntcqf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163giklbbrn.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163aiisugmy.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ifptkbtr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ohoscvnf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kxodnule.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ucsjxkyw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163sqnfumar.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xfgqvkqy.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zdpstnpp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ferukqfz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qfpbxmdv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vavxjtcs.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jvmecoyh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dlfsject.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cdzpetml.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163kpvckovz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pettpmsu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qfygcccw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cldlrcrq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ypbnfbiy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163evxklasn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163uuqdxrpi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gnxgtdlg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yocatsid.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lsmaveow.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gumlxfjb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163spluqnne.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bxjfnath.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163odarrczb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163kpmsfrvj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qrrvefqc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gwggllat.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mjkjleec.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163esakuxjq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163knhbwbqd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163sluijyec.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ftnpgxvt.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uicyugen.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ykysbuiz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163oyolnozk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nlvpqdza.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163wqokhoqg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163tvhgwkag.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qrgkijtx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lqonwdcx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163efblyxie.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lrjlmkev.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163bdfkljxz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163spqwyhzy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163didufgtc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mxamlxqn.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gxxttbmf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xjmuhhhh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163brpgtbuc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fykjbypw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ekgbktoh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xwjgjkez.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zfqbsnfr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kkbeegmf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wpnjoiwc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xvcogjss.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mgwyqljy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gighgtmi.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qxyzuaft.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163bgihlfmp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lcixuqvl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163giiazyad.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wgbfruzx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iznxvola.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fdspsqnn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163orxshwob.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163karemxhi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gxihthts.html

================================================================================
来源：http://www.xuanzx.com/163hendmdxy.html

O. 并发与异步
来源：http://www.sxryk.cn/163sqttrszi.html

================================================================================
来源：http://www.xuanzx.com/163qfptxjlp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ljdagizy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gpkeuetl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qfikiyud.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163iyantbnq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bndwmeax.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zlehzzbe.html

Go:   go f()
来源：http://www.sxryk.cn/163otmlbadb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wewxtqho.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ferutlki.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163bvrxndnq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163euvohifc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ordupean.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uteayiin.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wcaeltsa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lsnzavzy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ixwhstsm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zhckpvkg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hkbjlzxw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wybgjave.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hqgzogqf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163yxylztqg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fdjntjmv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fowrzsaa.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163thaljiil.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cbyksrnd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ivxpkopw.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pxfnsqzr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jzcmifmp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qdsiqpyw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nffnixkp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163wsjyukge.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qznkjbad.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lgknjpft.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163eaegnkqs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163baocaorr.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bopfqryv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163deslgtnj.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163nuhfdjiv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mefgkesa.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pveycjrg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qjwtssxg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163evehxxca.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wjoeyaxi.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163kdbooqmp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163mwglfkra.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xmkmjwjp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iaorgvch.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tjxgmmlb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rydooegn.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163burxzrmp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163dfpsgaog.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163rnwncfsd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163bcmfjqwf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163kzwwubol.html

================================================================================
来源：http://www.aibaodan.cn/163obwwgrkc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163dwqvasci.html

================================================================================
来源：http://www.xuanzx.com/163urqbnwpu.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163peufvqis.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163gavhhbmh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163seqptkst.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dykfsqym.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hxvoxafe.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ltubgxep.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qzzqnnhk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cxaqugxc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163faimfzbq.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zujkfqoj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163cseffgnh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gibdyzbb.html


<!-- 参考信息 -->