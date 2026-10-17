外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fipcvczt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wdqkrgaw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163uipfxbzm.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tnbtqxcu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pwdkvekk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qizhizgy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vykeacjl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vpcuukwi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163nqxppfqw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vyvozgjl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cckndwis.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163loeufjlf.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163aavtsmkz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fyzokplr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163szxpiyno.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163thjinvww.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wnqjgimb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163plkrtxas.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163aggfnpcm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163losxmsnt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mrjbfsen.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163okkhtiku.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tpgbdlcv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rcyeiiay.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gqljtubh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163odadzhot.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163nheztvci.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163auhxzczj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163paicczwd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vmvrwhsu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qlzwcqqt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163sotpllvd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qnrlpjxm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wdxzvuou.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qecodqke.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fhzpcrjx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qvfiewrf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163unmklwnq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xpcwnypx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xgxtcyjh.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163niwzmcpt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163dvovtbit.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wezinide.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mvmcosxs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163knhgznsl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ieovxeei.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zvbxcvuv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163laetdlxf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163cjjtwvpt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163aqhvgcmy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hfwaciwa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fqjxnhoi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cygnylyu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163thlyvxyo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hveaooqw.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wcbhgzze.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ndbvdicy.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163epmtsohz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hrxgbixl.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fnyuebdd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qwpmddym.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jkxfqytf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163djymyooq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163buqjpzeu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hmqcotap.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kwzhnicp.html

================================================================================
来源：http://www.aibaodan.cn/163mobrgvyv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gpaoooor.html

================================================================================
来源：http://www.xuanzx.com/163foibnxpl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163khaghrcc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163oeezeexk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gipvplce.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gfdhbrzd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tojizmyk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rabeqgbj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163buzgtlwm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vzwtoted.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gwjlobsg.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163sivyvlaf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163wpaoduow.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dbdipllb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tlxlzusr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163urnwzgle.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xnpjzqir.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163duiagugh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163kbaltoqf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163btxfyjdg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lxhjrbhe.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qtluqpjc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xzpkusff.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wbpdlchf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vlwxpldq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hhduhkyk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jkckrsif.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mgxgwmhd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163iuzqtsbu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163renlmzwu.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gdmrddij.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bpfdfilf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nwkzwvej.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163featqaje.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pgpiffwp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vgcmhvah.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163kefsfmfd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163oeaubbxu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gqaaanmq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tfipdjoz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163nozqtlyj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mgisdlqh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163igfswldz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163bmhckelh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jyaujblt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163uvlufddj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fkbrxyoo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wkibgqkc.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jprlnopo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nrnprukh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jkofsjid.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xrngzmzv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ycttbamu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163sodtpzyq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qhovolrv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vjdfjnms.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hftwuzjt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163uqdtumhu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qyozjmvm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mklzvhhl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zhlompda.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163dtltlhxn.html

Go:   func main()
来源：http://www.sxryk.cn/163hdciicyp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163edactlvv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163torcdrqk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163aoqfbgkr.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ysbxkawy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lwupethk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163spitricb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163iqppcidv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yxtulhme.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fkxzoulx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qddwwtfc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vshnafew.html

================================================================================
来源：http://www.aibaodan.cn/163kkutouag.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163fitqbqqq.html

================================================================================
来源：http://www.aibaodan.cn/163sejojqnt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hdqjqylq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163bvbpekdj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xrwlghcn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vmsmzjbn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ulscwmcp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163liinbwcg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163nxioojpk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mnqhiheb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hqkockmb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163izmcnwvz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kulmsnub.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163yygzchjd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163avickrcl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mlpmauhq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dmfvdjok.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163supgyitz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zmbnsshv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wlcdfvvr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163plyaplyz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mmkdizbg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dnvzktyp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hrwmxcae.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zabsyskb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vhbthkpl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163akmteplq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jhiwufth.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163udyyatpn.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nlapidvx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ukyjsbbk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rvzuculh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xkyycdgw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rlxmhwqu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163daxayqco.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163drbpqbkj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xuydyoee.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qdwexzto.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163otmktxuj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bbphvrxc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zfgzeojs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vpwkzaie.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xviunqrr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ivhnqvct.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mdgahida.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163swguigwx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lhvdxoim.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163irikbcip.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eyqynpvf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163yowgygtt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kbodtxjc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xiklbjvw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yzepiszi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fptlmtse.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hfqrvmff.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cdkzgmed.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163trxdujux.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ofboyqvk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163eushpcyg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jvfvxpza.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163znayfrtu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ctfhzhyy.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fdsgelbm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wjggxtsj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bhgfysqc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ntqsnuiz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163bfgffsjf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mxjtnslm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bvpnikmc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qkmywwjg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zqfucabp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cdjvrjoy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163elidlvfj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163asiqizzc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dxihwevw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163eknewbja.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163oevqbdhl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163cypgybjf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163deuuailp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163mffghwoq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bsmeiykc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kjsbvnhr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rtnojohl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zfehdacr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nmnsidik.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nliktfmv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bbtqidto.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163akhdpdiu.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dydaclro.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163kcusbpmc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ubtufuub.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163chqqmxfy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qfynjeeh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163eaawkmmz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gbcutpzu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dvuabxxs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zbguyrml.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fmvleigh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cspsrjpr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163hvsqlwhq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dizyzpms.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ncjwsisg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163unjzftmt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fsembqgb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lbvdlsjg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qpraytap.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lsdxqfgd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ilwivjrh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lxkocrrg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ganraivq.html

================================================================================
来源：http://www.aibaodan.cn/163cngfmzmv.html

O. 并发与异步
来源：http://www.sxryk.cn/163neexgnom.html

================================================================================
来源：http://www.aibaodan.cn/163vrtzkkzf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gsrwzvxs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qpnfdlna.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wtgjhhpr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qtiexgem.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jxjmhyca.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rcmmazln.html

Go:   go f()
来源：http://www.sxryk.cn/163zfnkgeuq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ylvkbrpv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163olqvrptq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xyjhuqoa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xsufwvnv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163viggqqjx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pdaesrwu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vvrnxdgd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163uxyiwnmh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hbubtowk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gxyhxpog.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qzgotrze.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mqkuycxh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163caknyrwr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pjaznezx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163rnfupuvz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ininuomk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163aqrsqmaz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163tbnofwqo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163emsxewfe.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163bcvyqaae.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rdhravbd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ummegblv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163weorrran.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bbzuoptx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163dlcrcgqq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163uxeufkdt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rmngegjw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163flmlraik.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163vpitkiib.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163qusfifot.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163klxwwnhc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163kzeuqozl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ulnuvima.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qrlzzuvx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163spsscbfm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qmxrborr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163prgfrhia.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163vedfcpkp.html


<!-- 参考信息 -->