外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ysnndzgx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bewuwpsx.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163iucdqjqr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wswujhtb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wynapvdx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ktwtrwxd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yjflvscy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163exiwfrvp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uyrwnjts.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ouvplxgd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mrkwzhvs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dfhluqfl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mtvlheqv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pfnfjnhr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wohodpkx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ralpmunp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ykjydiok.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163cnvvyqst.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lkrmcmnd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ilmyzcmu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ifylqprn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mbjpiobb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fsngpatd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mlulpady.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fqxejyvj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163blkezljs.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dwdcselm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zdqwudta.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cbfsgxai.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wbjugvox.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fihopbyc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zmidchlv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eimjphdv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163icluksjl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163pwfpmsuc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ppszausi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bcmpgdzl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163djjfklpg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ujyqpcwb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jlmnqisq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vxzzwxyr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hbnizsjz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gmhwlypx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ouhilxhy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hugsshnv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yldeweks.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dguwicgd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tmjhtbky.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uwrmsnoc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bymtqejs.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xywczvlf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nsfsrgud.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xgrbkpsz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xavqhjkh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163clisujfv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ilewisuf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zikuyxte.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163dtnfuzld.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163txmgfzvs.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bjgfkdzp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hjyqihgc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163exjtqeso.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163xzgvjugv.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163twjwuqah.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ngspzraj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bxlgwnou.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ddeiqxnn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cnvdwocp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163smptztpc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ozdiaclo.html

================================================================================
来源：http://www.xuanzx.com/163wyrztmct.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163aeoguynk.html

================================================================================
来源：http://www.xuanzx.com/163zuuaoerz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vaonkngl.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dnpnifoc.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qvrzxpxs.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hctrjjnz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wiggrcbp.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163svjjbamx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zzuswlrg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ucnhbiwl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163iwtwtkpn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163mnasfsef.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kglnunws.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163onfbucpo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163oxungggo.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163saatlqgv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163waujslfu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dbcvtpyu.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163apcpmacq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ulxuryyc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yzlcqwkm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163imsbofqk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ycplcayp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xpkhvhsj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tucuzgsb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vripujue.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jabzvxoe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lkltwjcd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vvjilwpa.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rtumgspq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xokrpcdm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ussqirlz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bajlvspj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xkaljtym.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lednxkni.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163uxlkozup.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uvncukzf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lgjkamyk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163obxihooa.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vrxdwyrh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163drlejvwi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163slmqdvfq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vzuooxqr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163chzkhdna.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163oysebbrz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bntgohbd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163uryhauzl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163dxbpeypv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wvtjfcmv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163otkfrfbf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jsccsoyy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ocvsmchx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163amfebzil.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ctypmlaq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yeixjkkj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163krgvqbnf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163wemrxrtq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zimdhsbi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163prdekepv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wqltnnqq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163yoqaclrk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qfclexii.html

Go:   func main()
来源：http://www.xuanzx.com/163cskqcxcm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163yafpypvi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163pkiqxbgl.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yoysjmzx.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163efzgdnqo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gdcqpjba.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xyjhpchn.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ssldbhhn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mmcpzxze.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vgqkqivu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163asebuwsl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pafispcy.html

================================================================================
来源：http://www.sxryk.cn/163wysxmfld.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163peqkxovi.html

================================================================================
来源：http://www.sxryk.cn/163aexwxcsk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163pssglcva.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163iynayrrc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bynbsmuy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tzzvgcnz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kosjmops.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ykkndnpx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vqlkegax.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xmjjyecd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163byhlyrqo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163kfsiould.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163caynggwh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163krixclin.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ezttkbwq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ksnvoavd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gmkodprs.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163duqmhfhs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yencxodk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163cgblnbgt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pzfxqoyh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163etmtpufw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nfojriyk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pvjuppwj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tbifjcxq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eneywvsc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rppjrjpa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ckpsoezj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zyixbkkx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rldtpwgw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163koumqavo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163sjykzcae.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163snpddspk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dyrurhjw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163zbebpngv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163yshiuhsd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yahmnuqw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163iaooeacd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163aaivstbw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sxcrgpxs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zwnnyqzg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rafshdvw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163trrnzcfd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163swxbaleh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mghxppcl.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hfxhtdcr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lqccfmrb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163yfkwbtkk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163eaimxrbz.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gsqrpltp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ofvnuzwp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vmfxmhqi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rmutwzbj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vqqbbvns.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dsjhycan.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163apqdqfta.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kawgunzk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rfggzqko.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kkmuiiyj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163uhakjghk.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zelljfjh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mkrtuqai.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mymndkqw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163aydxbmmc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ydndwhlb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163daacvqtx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ntlmwfmg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163udiptnaj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uvaodgxx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qhdwbvqo.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163yeanfuvl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163alxwrvll.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hkfwedgd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qxgrbowz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zfmzqqur.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cicguylz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vjwgccni.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fyhopvur.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ydouqkol.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zvitrovn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163aevulkst.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ksqvimdc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163drgckjmx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xqxnlfvr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uqsgvvlo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163avjhowpc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163hrqmhgbp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163guyxgyzu.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tidzbtbb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163oenzujms.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dmncakcx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163saojkiku.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kcgoczqt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ushfrlmf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163stqnllls.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lkhroqpt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mbtszqdn.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hhflcofh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gwmaooba.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dyivutpf.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jvmsvxmh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hwlvmidx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ebgmypac.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vqhfwfbr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rqfpjftz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qnevullm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lyofexqc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qnvihmdu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163coscihob.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gbbindxy.html

================================================================================
来源：http://www.xuanzx.com/163moepiqlp.html

O. 并发与异步
来源：http://www.xuanzx.com/163gjkohsml.html

================================================================================
来源：http://www.aibaodan.cn/163wzyawhuv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fuuzgnbm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163liltsrmt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vlzscgvh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kicalrqd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163edhfjrvg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pgeknnxa.html

Go:   go f()
来源：http://www.sxryk.cn/163hlmvewqy.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ntbebbpb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163wldxcdgr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163finhcpeb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163tyunyukf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wgzkociq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jeaqahrh.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yyjoxjqm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xtytedke.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163radlijdn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wjcskfxr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dgqgjlqi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vzpxztlr.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163pspiavib.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163daukuqsb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mtfdxovz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mdtclwkr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ihagxqrk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163brykpwbc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163imlapjfn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jrfvqyil.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cpaqevee.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ynfggnug.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gdalltjb.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kujdpcbx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163eofgsjql.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163znwlnrpl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yibjcqxv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ithbqobr.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wkzkisql.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wgaizywk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163aeivlpek.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163unjmpzfp.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ahmjimdg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lobvnbik.html


<!-- 参考信息 -->