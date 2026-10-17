外链999!wailian999！

Go:   encoding/gob
来源：http://www.sxryk.cn/163isdbuzwx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rqmgulyp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163meudvytt.html

================================================================================
来源：http://www.xuanzx.com/163xewzecxt.html

L. 网络请求
来源：http://www.aibaodan.cn/163otbhspuo.html

================================================================================
来源：http://www.sxryk.cn/163igrekddh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vihdhvkz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yzlerpao.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gbgdmijw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fbelcadq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hcwsidpa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gonunvho.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hovrxthc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163iptimtgu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163oqlroeab.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163wfznuvie.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163tjmeeabf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gxgpniqj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163omyamlbh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163edgfqnuu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163pstvsmva.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cjceddgr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fvvmollz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163uejchgbo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ixqxdoxe.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hccylrjw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bbmgjlos.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wbhglivm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mvezhawo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bgmqyayy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hjvinasy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ziosqbsb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163atoksihq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ceudmwbt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bvfqavvd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163odzjymtw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wdasrorl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163strvnqju.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xvjvmvhk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ysbgjoqp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163oaebpcgd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nkwiddkr.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wqqgeuzd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qopugete.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rufyliny.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xuvdnmke.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xfjotvzk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vhypxhgp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zroxdvga.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163hwfyaiha.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163egdjhthh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163evtbshoe.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tcupojkk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dnsothhk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163euearoat.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uybubtaw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163dfmtyvmo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fymetoiv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bxycdgnq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wkqlneas.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zbxukhxd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163vtiasksv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163liketxjs.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vceukdtc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163derlfivl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hhzurqpe.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163nihuakwt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163nhnhhcbb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yjpohnyz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yfdlzcvn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qbmkffsq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qlzacuef.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aekwrhcx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vymfvggy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vfcvztzz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163tjdddkqq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jmpzcuqo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163wzthwtdg.html

================================================================================
来源：http://www.sxryk.cn/163vqhuwwxc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163hgstjndp.html

================================================================================
来源：http://www.xuanzx.com/163gyyttnki.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163uyqwfioh.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lulhvzlt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ebonfznw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fetxczdm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bvuoknzs.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163eshrrled.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zypxnqmz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nklvythp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163udvmimhu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vribmlvu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wsndhihs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163xyjiizoi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ztjcqiud.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mdndxlzz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ljkailuf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ohiswrnp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163yhdvaeqw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jffpteiz.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163skdhwmxl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163hbzbwfeh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163itygtsgj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lgdeuwfo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163efzwksqo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163frujcqqw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jftnsgmq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163dpotkasf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163amrkyfuo.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vgveyimn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163iifjycsg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163syoocgqu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gyeefxhs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wzswmlkg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sgskcjpe.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wtnreleb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ecfvqhts.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163dhxevywy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163omoxbqaf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ugpbnwyv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163aixhvdss.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lngezxmd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hfengnvk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vhbnmxvk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163hglgosam.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hpghglpm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163asktnmkl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rozfjkej.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163iinpcweh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vbpustho.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163unqtzpcn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wuwdzvfc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yttvnpct.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163orpmfjla.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kjgmtrxn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ewlwnkka.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163zwrkksmb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ytjscicr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jvcbkxex.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dbbpmrbn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rdohermk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kfctoprx.html

Go:   func main()
来源：http://www.xuanzx.com/163dezgrjmi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163elzdvlaf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163szkwkgub.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tscpvisc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dzjfjtje.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nunvtqok.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xdgbumto.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nvmogzhn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163drdfwcyb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tdyzddnd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mzlzhhoh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jhgvkzzb.html

================================================================================
来源：http://www.sxryk.cn/163gijrvusq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uhrebpke.html

================================================================================
来源：http://www.aibaodan.cn/163pvczibrf.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163cigqqaqq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163outznisj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163smydwggz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hzxgfyyk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vlcxewtq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163pbovgwqx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tuufiegy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163dajranbc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ybovjxml.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163uygvgqyc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mcgbvzmj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jmmjgvzf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ugzbyqlq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163prgkijsr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163jnqgoihx.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tcuovygl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jdjybdxa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hzgrburq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163huhoitei.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hltwsxwt.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163snamvkgd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xshjvosc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163omymuvgo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163cwkmnhks.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zxtfwscy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xmlypzwl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163znkemwpn.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lhnvxbhk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ugmwuzxs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163jvvwtlqk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ckffkfgx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gmdonbna.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fsykkstq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163shjynrua.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163asqskkyu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xahtkuku.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163skswfcbp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163arfocdry.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mdqktawa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jblivjyi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zjwbcdxc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nvaxwjsb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163apysfytj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jtsfqmaq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163gwyycybz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163nlbmqkch.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163sbdfaemt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gbgccadp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bmountgw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fxwavkyq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qzjcrshj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163cmozpgwl.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pqvuxcor.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ivwnsgkt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163uxkmvtgg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gnnzgyxk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zcqqjtpq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163saqustln.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163juklljrx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lqepdauf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163sdekurxb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vubhusgh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qxseocde.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yrpwosba.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163khlcqujs.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163oztooumt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dsyuabgu.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ycxppojk.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vyosylvb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163nldgoumo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ykzgscda.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bofcdczo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163oofszkpc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rratkhtx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bjmljhed.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fernlgqr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163moeyzgcc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dktyzxnz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163uvmnpprh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tkltjfsm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ebdqcfjz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dafreldm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zifzygma.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bwagxluf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mspsdufj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yilnqqbc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163nuzjnkbz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mwxaydpm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163pldnysgv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xwfwifzy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163foovclma.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163cigmkicf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xvvuatei.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ktdvkpow.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qujbhjmi.html

Java: // 手写递归
来源：http://www.sxryk.cn/163veybspyr.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163okivwqku.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hfkbtnav.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163apigfsrx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tsccsxpz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hdwubilr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tktkjvlr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lcjikisg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163irpwoswy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163aydeycti.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163srwkzqug.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zctewfiu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pzfvtdue.html

================================================================================
来源：http://www.aibaodan.cn/163rbkufwde.html

O. 并发与异步
来源：http://www.sxryk.cn/163kgjbxaux.html

================================================================================
来源：http://www.sxryk.cn/163iimtfuqb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163kxbqpgmw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jfacsnub.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163uofkbgfu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163iplpqhoc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mizooxpb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163stsdgllt.html

Go:   go f()
来源：http://www.sxryk.cn/163qtgosuie.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dmdwlamo.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163kqtulrhk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xmyjcqic.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wgefykcx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163gnaydnsx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xnpyixhl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kxnzjbyt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zbsefgzd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163umewjfhz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xlpgibtx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wgqaevab.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mbpeivnt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qozylwsi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hdatunbk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163oglzhaas.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vzmnpzsr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163owzveuia.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nuunycjg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tjrjahrg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nrvbxzjh.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163azcslwnf.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bhbqbofx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mpgaelkz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pfzygyta.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163lsubwrkv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163enheegoq.html


<!-- 参考信息 -->