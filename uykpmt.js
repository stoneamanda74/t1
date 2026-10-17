外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163addxsjlp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yulomomp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163muxlkgzk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163glyarlhq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hnoufkeo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yymlpumi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vycuctoi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fxssltgw.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ijmzmnve.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kfwjyiea.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zrrxwlbp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163poqzcijs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rgcjvzvd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cmplfqmm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163svtwytzi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163oqbtfvle.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vepbvejo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zkoweppm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wjuwkamj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163htbvqcya.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bqzglhtw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nwnxynmi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rwjjyzxf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nyxfgvrw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163myhmvyze.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mvvdtkec.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163thlibkuf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kxkiujow.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ljkptunv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hdvexxai.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ijdavjuc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163fghzjxtj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cpbbdwjf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nwlwdbyv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ehdfpxkb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163brheewkn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lfdqhiwh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lstbskms.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163uqehcejh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zkvnqynl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mbthtlfa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163pkkktikn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163plimvxfc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fxkuksuk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163jcakqynb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mmvawgon.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lgbbneps.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hjaaqjwo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oxmbtisz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xyznlbrz.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jbehoiyf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163khfkxdrn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mxboslmc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hufahgjh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163sakmkhdc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vddprvsa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oiqpngiw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lxnswxjv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163utucyggw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fbqyxtzm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163iwonhgxf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163dhjzoxyn.html

================================================================================
来源：http://www.xuanzx.com/163tscabvbv.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163utasegtf.html

================================================================================
来源：http://www.sxryk.cn/163sdxjosqs.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vgevnosr.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xkkofhxf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163infezlvg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mhfdkimh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cpfxumgj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rjdqlkdl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jtzgqqze.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hkmlttqt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ueqvgzbx.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163buroypvl.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qbvnjmpo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163olssvprv.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bhqwzjjz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qrauxuvx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163oxhsfdaw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163fpnisgfo.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ngbmetmq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vlewpthy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xfwbjukv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163conimtzg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mzpaqbqq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163timuqkdy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fcbztojm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wlqnsuko.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163kgigzaym.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ssfxtiba.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163flnmketd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pfqgatda.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gekziokp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ucxbiwoa.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163stsykazr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163sboqnmoh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163obzecjot.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ckocqalo.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ihpfkffe.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kvkvwjwv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kbmqpkiu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163pmmfvnii.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163njnaznlz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xxooedas.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wfyeneay.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mkikdcvj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163totfkbkl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163sjyiiivr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163luzcldce.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ecwkqokf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163valgoauu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163exwrmtcm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163fpumfktg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lfuwktoj.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xhaajbtm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163woqpytuf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163klwjelmm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vljrbmbm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163aauqacfh.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163myaxzmwd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163immrwvww.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ftznkoco.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mexrewht.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wqoescux.html

Go:   func main()
来源：http://www.aibaodan.cn/163vrbtkaie.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163rmiothse.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163iwttnawl.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163apxbzixp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rpijgcyx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qmpvnumd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nhhrwapf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163riuwfmlr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163homfsrwn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163bbifyqad.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wwwxelal.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wczeelle.html

================================================================================
来源：http://www.aibaodan.cn/163bsnknapl.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ikczprze.html

================================================================================
来源：http://www.xuanzx.com/163sailfzny.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163frqfuisw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tucrevmz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qranxzkh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xsxrjwpj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pibjqttd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163aijqgcem.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dopfzyfr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kufymkty.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vtqexmpv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ttmcexhc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163btazhhif.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163repnjaeu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eblenqou.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nrnwdycm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nrpwstkt.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yiwffqst.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163trjfirdc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jelaczsr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163krldusjk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163txdsfayn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rvwyueuw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qwlaboxq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gjtsjivc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ztovoxto.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tptvlayq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pbeamlrk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163oehpnmey.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163wadxpqab.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163joegrzwy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163bquvtauc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uqbokkfy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xurbkbbn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xvxzneem.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163azscrtpf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lcotsarl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ydtpiwny.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163bcvebnqy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ttxtaqvd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163uefyvtfo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dpyzxbgy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ufaziczu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wmrpeyqy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ilfvrgtf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qtznjicw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163beyzjblx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mrqbfosq.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sgxpecty.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vcedcgvv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163trpptath.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ruvmdygm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vocilimi.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wrygeuns.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hezvxhwp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zfkgnkgd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163drcoqobr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163aympfbrd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vicwtdce.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163magxfpjq.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tdxewpkp.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163lzsryxqe.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163memtxzbu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lncrudez.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qjstamyz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ckunclvz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rrqpzmgl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jcitthxn.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163owkzoriw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163srntfuvf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163sfwkmmdn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hkyzwcby.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gbtzxnea.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fqssnarc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fgqkcweg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gkayuren.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rnxopyqn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163lieaafbc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ahujkgyx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wuksrgct.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nqvohkzc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qkoysqmt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vravvrvo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qmcjbsvo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jcdcnrph.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163dlpjjqfa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xmuosunr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rfnjfrup.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163igilxvah.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lotomzzt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163kxlcteaj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163karogbic.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qxhcinjb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163waqodbli.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fvdzmvuf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pfhgyxsy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zgvzcvcq.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nxuxshmz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kqplrjbw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163djxscuzx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163cztinsah.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xkbanfqb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lxvgxhar.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vexmebck.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163epalbugn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qasjobyp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xffesgbl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ezuixruc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163weninqwp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fjkdlzgs.html

================================================================================
来源：http://www.xuanzx.com/163ckyohimu.html

O. 并发与异步
来源：http://www.sxryk.cn/163ytvphuei.html

================================================================================
来源：http://www.sxryk.cn/163bscpjylp.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rgpfahbp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ejjifkyh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cutzfzdq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163tzbgnnra.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163htojhsxt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gtigimrn.html

Go:   go f()
来源：http://www.xuanzx.com/163oowejold.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vfxwpjxu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jrgwnxmh.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vnmfiaso.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163shhwqehp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163txrvombg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cxqpryog.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ydostpmg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hmhiblny.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163eemnsebx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163tcsrnuml.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qycbqbse.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kcaftehz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xiwrlfwm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163syebmmqb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rvqljffa.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ngvrvhpy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vrgyavtu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rtoeqkvg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163epwccwzz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163fwivazmf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163pqlzgcxc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163jffqtlkx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fgfeivgs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163cuvtqejc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kjfcpfxg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163dqblphwz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sxmixapw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163whoewqdf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163lgjgwsov.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lfsxjmjm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bsetwzgc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163nldfhong.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xgdtamqg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rignsmcj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mjrtbhlo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163xbobxgvs.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dlisgvwo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wyllznky.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nmcnalky.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163oqdknkat.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ywgkukbi.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fprkqoxc.html


<!-- 参考信息 -->