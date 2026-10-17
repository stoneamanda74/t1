外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163kxwqindy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163bkrityjy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kolmweqy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rdfbplrw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uxhgbwbp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163btmzozrw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dxdclooh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tvnfhbjt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cwazkvxw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163rphuokzz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ffjujlgb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163liirxlfm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vtimmpmf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lumvqqqj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dtyylhez.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163goflqlnr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rfxivisq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kzwahfsa.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gbaehjmx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163clmjizuw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xfusamfn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wvbpljcj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cgygzcan.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163srntdtev.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dqdznxkg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163njvutvnh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163elkvyfhd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jmgjkkbh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tvciyvrp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163pbwbedzv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163krjwqige.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ilgugruc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163caodizrd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163allkngbx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hpihmiic.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jrzdnest.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163abyhaecz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cgbxhult.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dihorwho.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zvirviuf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tixliiqh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vhseluzs.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yurvrtji.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mprydauf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vhhlvqnl.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nwvjfbsg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rvctbhvv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gilyhvud.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163htghtgyu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zegcgpzj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mdtmkwuh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ewcjdenw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rqvfulgq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xqhtdkmp.html

================================================================================
来源：http://www.aibaodan.cn/163fhtufiwv.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ftlcrega.html

================================================================================
来源：http://www.xuanzx.com/163oldmeyim.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tevzomth.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yeuyifaz.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163dwtogwit.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oiihjlqt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ehcsrwim.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ierknkys.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163nxsaqevs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mqhfcnuq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kmyzzjuc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163snnnlznv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cnflfauk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sfehduuk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dvtjjgce.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cfakmxot.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gudhsdsv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163goizmyce.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qktjprug.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163axymszvf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fgfitqxy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163sgnlvnim.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mvtxbayi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vexahusp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tlohnoei.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bmopfhwg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lylngdhx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163brminbis.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163scwqpsup.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163avaaqdyk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kwwktzsn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163krxxxbvg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163upvknchi.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163twgbrubn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163csrofoko.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163klhniohy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163niauqsot.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163stbmksjf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ifljzuxv.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mlolctle.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xhcerilz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163gdyawtct.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nvcexjso.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vfhgledg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jrwwjkgn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jlijzxqk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ommkgqbu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jqicnsxb.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bkncvsgp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163azsjfpdk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163plffgtnf.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bilneduf.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hqxnluou.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163pqomilis.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pdfqjldp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163owzsiasq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163rdwehiah.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mzszedbq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vcxysrrs.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yhblostt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dshzfdjl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vfsoedok.html

Go:   func main()
来源：http://www.aibaodan.cn/163camazcau.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qatervhs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cfdqlzji.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ozwhomku.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ruoszvgt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zihcphzk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ipnubvwl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vklxmsag.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163oqmzqbhc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hofnniml.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163wcyqqypt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163alfrsura.html

================================================================================
来源：http://www.xuanzx.com/163drwcnwrz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xxarsunj.html

================================================================================
来源：http://www.xuanzx.com/163ilmlicnq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jeatkbxi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163csxiuiba.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vwqqhpxf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lhmzhphk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nrdzupdf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lmueetzj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vlswdnas.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163cfkbdnxk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163nyunmlil.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163egualxyf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vpewhvvt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rvqchvfb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ktoqrswh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jdtisusb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mxcqvqqo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ciuakljw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163azgufldo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163psstqoac.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wlrfhqyf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sjlhdiww.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zplphpmj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eiygfepb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bylpaqhm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163gspqndfh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163filqhsnp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163msoepykw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xqgvuvls.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163kbfzqpve.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lcybofbf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xtnqyctm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qkeppjod.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cealbasz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163kxrgmvlq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yvigveei.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tcqrntrz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163phdtlhte.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xcsazboy.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163kuwjqabz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163skwcozdp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xfghudar.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hbpjuakr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kjxuucki.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163higvrufe.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163jhpksfvs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ooijpzit.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163wdjppvvs.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xakufklo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jxbydifi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bjnegauf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hpepobcb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163juixcxcv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wuaanfhd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cuwmnjhz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163owmthugp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jlxbjfds.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jrhjnhyx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zfdxitjt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gzqlzvvc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163tjrlrowh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hjifuuwn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163pcbihtof.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163agehrfpz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yrkwrqsl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163izkjwzfr.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ybnixchn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ohzhnhmj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ypitimoj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ipkbmqjt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163sonxcloi.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ztvzxuvy.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lenppbmj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163xmgonbxj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gssvjdpc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mmikdxlt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zlttwstd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163usxikezj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ebhtcmsf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zhfekwmw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bdpopwcs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163anodfrov.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163glswcnna.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pwgiwllq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ksrbvzyz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rhljubrd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gllirpkg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wzyoouqf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fecczsyy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mgavwolq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qzpkzrvd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hktrkpnh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lyijndha.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zztvvvdd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uqmukzso.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ifefxaqc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mxzrdqle.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ibgplvmy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163croxgvte.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mbritduj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vyiyelml.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wetcdylf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163inxbpsql.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163yegkcybc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wybbutev.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hdoxiavh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kowotyqh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163atvlvvnc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lsobbdbs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jyoxbeak.html

================================================================================
来源：http://www.xuanzx.com/163yznzwtft.html

O. 并发与异步
来源：http://www.xuanzx.com/163ezusxpuo.html

================================================================================
来源：http://www.xuanzx.com/163zpxaljhl.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163gvbwhrze.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163isgjsaop.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163bxbvuckj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hedvcgtv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bbdcdhhx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163piiwswva.html

Go:   go f()
来源：http://www.aibaodan.cn/163vxjeizpq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uwnflplz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lntbuuqa.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163iqoooxwg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zyjjfehg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163tnbgggic.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jxvhvdiv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qjfdonjc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163buovxgns.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fchtkpur.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ursjgdmt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lwauwhgl.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163sofomqyd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xnndijvk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163elrpgfoj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163yqnryjtg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jildienm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vqaejihq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hogambcv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163stlvoqke.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163uwdtsanh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163eaeciokp.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vqqhxqqq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hyaawooq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ewicasap.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163umrtrzmo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163iazuxako.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cfxzyanz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ktthnawg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pvztjxfy.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163znxszkch.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163eqcrfiab.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163aruscncv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kdpqvtkc.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xjywjvyn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lzwzmmju.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vahbuccu.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pyixaqtg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163sgawirbs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163kenzypqb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zqishqmn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rsvksieg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qtjergmr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dgzjoksc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163dampdfcw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163svzjuigd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zsvholuj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163sxrasvzn.html

================================================================================
来源：http://www.aibaodan.cn/163bwgujmtc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wbgcbvml.html

================================================================================
来源：http://www.sxryk.cn/163jemuneui.html


<!-- 参考信息 -->