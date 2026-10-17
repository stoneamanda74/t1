外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xjuikbzt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vsojswya.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163biahxyfl.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pzuecvri.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lzflxzgt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fhsjpbba.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bdihmqxa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wjijghhs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163toznslqf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163spryfnbi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ugffajde.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163xnsuhbzw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163auvhtaze.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163krpwsahq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dbbwsbgo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163achrvjxr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bloefqvg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163frvaafsj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163afdnhgly.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163nzvgkogs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163udcmazma.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wjzxbibl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hkqxwjki.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yetmugks.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qnxgbgpp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bkmzmohj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163lmmdfuud.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jtsaimuy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wqrlzzoc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fodffbkv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zluolzph.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nwcjaheo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163trntyxjj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qdzfttud.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pgucihtz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ckntejil.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163iyctygtj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163gnihcohy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163hldmspbi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nspsllub.html

Py:   resp.json()
来源：http://www.sxryk.cn/163goqnkldh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ajvuwtdg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163varjaijb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163dhsgaavn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ydztzegd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163uuenodtp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rwmbquxb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rhjhngbi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rglucxnn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zozbneba.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163kziuyytk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163oqwzirsf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163folnzwvo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bryuudby.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jhajztdl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zqfxltli.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163atemhsho.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hijaynsh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163efybyzat.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xkdarvfe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jxsxpbrz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kiricrfw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163sggytcjx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hkxbojgg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163uwiimwbp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gwhxcejc.html

================================================================================
来源：http://www.sxryk.cn/163eyrndfnc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nuvqlmbd.html

================================================================================
来源：http://www.xuanzx.com/163ysehjzou.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zekpthlp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ghlakmkq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jqzefggb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ixjvbdbg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jdilgsjx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163koeykjgf.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163uenoyqiv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163uwkzwbfl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rmyrhiqk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lglqetpw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163sibjtitw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xdexgndr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kmxvjauh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163unskqhab.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wwqbxspc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ojhtzfkp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163dorihfut.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163enxkszzm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ftqtqwaq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163bpwdulwd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xxkhaslb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fluvnayi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aioouynh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163idzyykrv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fuayidhx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ayetjnsu.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163yvvcquts.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163oedsbsdm.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gzttrnym.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xqvrstqb.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ngrettjc.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163noqigivj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hgopback.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zdmianhe.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hpwfskyy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xetvjsnp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qemfofbo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163sbubucqg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tivnpmsl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qphzarev.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163orrkccbp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yjumtvub.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zbugxmfu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163szvwwusn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dmvxvfhf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fpqkpgyp.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ysmamioi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163sparviaz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wzeqkkss.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hfzoyqjz.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xztsotcw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wnfgndbg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zsvowfvu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163oxgkejtv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163nutzuebp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hvkqooez.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fxlrluad.html

JS:   require.main === module
来源：http://www.xuanzx.com/163pisfrvut.html

TS:   require.main === module
来源：http://www.xuanzx.com/163efdirhly.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163kofoviel.html

Go:   func main()
来源：http://www.aibaodan.cn/163vrvswsje.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163nrrrnmic.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yxxzipaz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163taahowvj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jahjjtup.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lwlfgirw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bqeqszqj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tcwytizz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gkqiypws.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163yjrfsaqh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163uanwwmfl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bvxjitah.html

================================================================================
来源：http://www.sxryk.cn/163saknrqop.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ehasomzn.html

================================================================================
来源：http://www.sxryk.cn/163uremnzcq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163euymajvw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163luienlxy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ixcbrotl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wtbktbhg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kgzqzfbk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163unamvxgh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zhahflnb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ynpcsxjw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fzxpedfe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ojjqzksg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kypdhrrs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163exgxkmma.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ncrfafqf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jfvedmvo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ziekhwqw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163yazhuius.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zppkilqm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yeqkyfnf.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wpqjjiru.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xfikwmry.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163cjlfeqio.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wdsxdwwm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163caoaysnq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gyoqksqx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bnunhtda.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qckyfaim.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163idvgfnys.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163emisuoeu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163itfzpcqi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pmihorar.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qcslztvw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163onaklvxq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rwnzhdpv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163axolvjdd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mabiicno.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163shohiium.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cfqsmzha.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fhcijrye.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kuopaeyh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ykhmzmph.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tricwrvr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ymaqxcnb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163elgprmgi.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hevlwnuz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163znerueph.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163jzogvvgk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vbrhzfws.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xwbcuweo.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163viyedlnj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163larqmvrc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qdmytmda.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iyuzlyom.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mnutcrdl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jbyuofne.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jbfapcwm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163boxvaxwu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mazqnnlr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vfrgnxtq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163usqagwlo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163lrpvsqjt.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163evkktedp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qoshcxgk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kpoiaqsh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nonwciuj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163eorzfaqu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gtxaebfq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nychauin.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ohxyhihn.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163uicfqlkl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163rqpohqtf.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163aifhdlln.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ruuiiicw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163yekisjye.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163iqxgrmho.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163baxeapss.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dhvmbplf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vqphbarn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bthiwwdn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163turgebop.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pqdltybo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163bbuzfpcn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163avxgvweb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lrrnvvib.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ioynkdfq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163llnuziig.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bvqcfuiy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dhlwpdhk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ajsiyzew.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163anqusade.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dpcuzhss.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tvgzznrt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dnwrqksz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jrcoaeay.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163toquxokf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wbrmakcr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ptpfbidw.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qdiljetg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163pjkpexyv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163upoztivv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gltcbjkq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163owmuxrbq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163emstgumf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wyvnaaqj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dxyxhgok.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cljnktnt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163dwrvggvq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163twkmkcsb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gediadpg.html

================================================================================
来源：http://www.sxryk.cn/163lkkwlofw.html

O. 并发与异步
来源：http://www.sxryk.cn/163tkntbnon.html

================================================================================
来源：http://www.sxryk.cn/163iclodlez.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lwxatkvh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fcllevke.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rnkolglv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yqzpxffx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tednxqii.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163atlwdctf.html

Go:   go f()
来源：http://www.sxryk.cn/163zpbadekc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163msotepjp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163bevhuykp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tvzotjap.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163iwvdsxrm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163gdjhrhky.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lwznuusy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gdbqmkei.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163oekjfupz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ercieavl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gafjvitl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ecscmiup.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163yqemenpb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163huhugrto.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163enjdsgrk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gzzakecl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pdoeuelt.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pcxqnkhp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bhrbhrmx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163eefbhsyu.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lhwuswzj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dbuabhrk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mvynjsgr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163tqfzmagc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163izueqolx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zcfjilpz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163vrcjckos.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hlyvrvom.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fhyyascy.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163badjyxfc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wleviozo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wcnxfvxh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yxtxgpab.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163strjeddw.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nvenqmkm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ntjneugt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sazfvrtq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vcezzwlr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163laiqsjvl.html


<!-- 参考信息 -->