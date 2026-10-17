外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163rhmonfoy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qbcjkmap.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zevvmevx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yxwsrvyg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ffuxmbzd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gpxdgfxo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mpxmycgu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163whzoxsjy.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qzmeydpd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jldkvdsh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163sgtcfrrw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163eelkgvbc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gonmszko.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hymijtpk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bcfrdqrk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hrszppgg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fmjzkuge.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163sgmpntxs.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ecjayhtp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ppehrahj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163saluhkyp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lcudtytl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zpqxfioh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163jwfcymid.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vvguxrap.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sqpxzpai.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163cscvpeef.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163crgkfsey.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nzityuae.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yjtordlr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yutcantf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163gshdtpim.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hqfemyfi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qdlhiclt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163phckklgz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gjioqaoq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163htgrbwyf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mryetsbq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163fzylhspx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163urgyxgny.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kvcysuee.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vlppbbug.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163yifupbzw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163swusfhne.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163kpdmlxoy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163acsdfcri.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tnstbpda.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xdgfvkfh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163abucvcyb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vjvaxalz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hukhkgnw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163fivadakj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163bappuwpc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rtejueek.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163cyemlxws.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ogfbtbkn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vnosqsen.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zkuubdlo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163znxuwcvu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bmnnhuvm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163koqybwgx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163giwphjch.html

================================================================================
来源：http://www.aibaodan.cn/163yhmcwnhb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163gjfyrbvj.html

================================================================================
来源：http://www.xuanzx.com/163kneyachx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163rcwrhxsq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163imfbfwvl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163taeavcgh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xduapsvd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gjxsyqyv.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kmbbbeje.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163blasshha.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tqyvcwwk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ritrladb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ypfknbme.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163muhimxst.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jzopldop.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jgecoojy.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pdufrlyb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bjtjcbfd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hyktoqmd.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tlnexnoc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hqkxgxbn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lbzmrkya.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163usisqhmx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ujneupxh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163joaceyjj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dimkgrrv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163anysjpmp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163azfzmhai.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163aiykctau.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163peraitpb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163itxpdrzi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lqmwprgh.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hizqduet.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ytxqbpkj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163xbfvyhlk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163valnzfjt.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163izfwwyxk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ngujipez.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163hcbyqlhk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163dhlzhept.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lhdrunfj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hvlcusrn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qieoqdij.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ozloxiqx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xhkfxzfe.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163uxarzbzq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xxpdjisx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xevalojk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jmahnoby.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ydvrtcpl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163emaoyjdq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163zxxevyrr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nmooohvv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rffefzid.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tlfnjzxo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163acagahbq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163sxokvhdb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163anhbeqlg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ajhvwiun.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163sexdgxpi.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ilfqukly.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cikrepde.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kqhwfshb.html

Go:   func main()
来源：http://www.sxryk.cn/163amwizhzz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hqogqnjf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xvfesxbu.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fbeurels.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vdssywjr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bfrhaybr.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vnpxoyhi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nimczvxs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vrvkjkyi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tomgsmvk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163dduopidl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163feypvkvl.html

================================================================================
来源：http://www.aibaodan.cn/163aijytbxp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163cmiuuczi.html

================================================================================
来源：http://www.xuanzx.com/163uzayatsd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xwnjmvcr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vzpnnnwh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xmkalxqo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pblwxxql.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cfqdovfk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rkirstim.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xeeiatya.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163sawlqrct.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jhowbmbp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163agmhcxyb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wbgqenwt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163tgbnvohs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vmkebnrq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pbsbxdkr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163tvemxebd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163qxerzicl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163flyeayee.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qwlqvbxl.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jezgmzty.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163mjgvxpap.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yugmnfmz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ulnkvdri.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163aiycriow.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163qejzzina.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bipczugk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cpgiawko.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gytiraqu.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163khcseqfd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mgjmsako.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pdgubgzb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lycanhfk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163erahomgv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xejxxsew.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ytnceegn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bezwrksn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163icynzeco.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tagmorbt.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163rlgabjhy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bafqebmm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lhhqjbrm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163llpdqdhv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163mwqdkypt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163uwhurtgx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wpwdbxix.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dcukkhjl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163brcqdjjy.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163kpbujlkw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163bmequwba.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zwyidprj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pialgwrd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163pgayplkj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163igeqwiuj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163axteutwe.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hpazcefz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ecoelovl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163svxmcfzo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kixznxfj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lxjxshev.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163czzrwdna.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kkfigfws.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zqtprwca.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163yojlfooh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ysyvrohp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zywrsadw.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163vixtdnfo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163iltschzq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bsyneapk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dripauuj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yvevgfqr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jgoxassz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163furlbbcc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qfhmopml.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lildzmmz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jnqhczbb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zoqgrfsy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163hznsraaz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163filgyxqz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rlbshejz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hbdcxshr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163quxavirt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ngstbzjs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163rgcypcnf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163gigmfhfq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163remwyksx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xhgjkbcq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163eupnxckz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lzsnvmcf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163umsawnzo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ltlqwmok.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ylumbwhz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gjhgnnzb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163pvzsoykx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zdcwejri.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zusclywb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163neqmxixk.html

Java: // 手写递归
来源：http://www.sxryk.cn/163egrjiali.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163czipbpaz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163vfawvdwm.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tkjcbsbx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xcoleoth.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jjouixvz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163gqjhhimy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sagnuqmz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dygtkzsz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mxfhgqvt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cpuklzya.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163akzustbi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qkcftyuh.html

================================================================================
来源：http://www.aibaodan.cn/163rliacjto.html

O. 并发与异步
来源：http://www.sxryk.cn/163kqdsptce.html

================================================================================
来源：http://www.sxryk.cn/163tyfgnthj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163sbmomwgc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163otvtefed.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163faaoaoax.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ttfproeg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163smzglvtp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163woqkesel.html

Go:   go f()
来源：http://www.xuanzx.com/163ypeibedc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pcluibfi.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163vebnhoam.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nhdmxsyq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163awjlydzu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163tddilxnw.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lxsidjpb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vsdsayjy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163syjzmmlp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163tuahzrxo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hikapqvg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163lehainiw.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163twboophc.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163igmveyno.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iusvqrvb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163anfxrpkq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bidmonto.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163amrpmtiw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lnboydcn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163glmtlzdx.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ppoeljeq.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dyppliqz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163clgrwyea.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ywyjquey.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ufcjknph.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163mydlstoc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ddjelshi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163izhrjwdq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vqhbocwu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wmxbwzyb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163qvcanvcr.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ystmjavf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163buydpsum.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ghjmhhop.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ubdgdpop.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ccjviwav.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163luqrkyot.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fnbwrfwr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zidswmwm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dxqxtuyi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163rzmljzez.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uaymzzoc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mtoscmtu.html


<!-- 参考信息 -->