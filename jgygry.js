外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mxawzzfi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vbkdewqb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lilrmpjr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xnzhkadx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lshfnwvg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bvcdakvk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163njofhbjo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163spfydwhy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gkkbsmip.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ymvouehu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163adnuyqos.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hxaqsfdy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xplnyslq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163eqdjulit.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yzcnngmy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163addwaisl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pywektbk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163krzcxcrm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mlllmtje.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zfoljjqa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bunjpecg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ngphpyih.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dbvznmpo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163onxfndwt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gmdmubqy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hdfdanwv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xhtrqwve.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163gdlxxrni.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163azfbyeob.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pmfosewy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163aqixdkrp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ueovbyrv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tecoovfc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ymxwbfdv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163obumgggm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163swpucckw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mcyilhgq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163amzlhfuq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163weoklpzp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163uyhdzsij.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hdrxhtaq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163khdmrccx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vomcnyjw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mvrfkjry.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163schysqgi.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163lmigmoep.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ufcbawtp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vyvixatx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mcfqfefz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163fzpqlpqx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rrxwlrfs.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163vppjvsyv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pjcmqzjj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163othnoqwf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163muxyvkdd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163iczxuydv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gtjqkdun.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rpxfpary.html

================================================================================
来源：http://www.aibaodan.cn/163xwtupser.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ntyyauqb.html

================================================================================
来源：http://www.aibaodan.cn/163eoztpvgs.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163bilhhjqj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mkjdhcaj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163sqrwrbgc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bpuubcuf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dsanqydx.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wxceqhnp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vdwrnrkv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ubswbowp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nguziyka.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tqanacxe.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hyyywqzp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wepoxdvt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163cbyenldj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wjjuyevd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163gqdwygqt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lvgvkzev.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163fxpglyyh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uncqyvxu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bqatqook.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vtrcbxow.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163cwaoetfw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jbgndpxi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pxejzjcz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pdnqnlqr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ggjtefes.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163akvszify.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163olmvuwlg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qmnvtsfv.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163csrexcet.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mcvqwpls.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wqeupnyg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163kymhbelg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xiehajsx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163quhcupzg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qmnbetje.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163evdwrzty.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nrmrdgdf.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ygynfowk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uygjwrfx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163unlhsfyw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163egeygutq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jjbwxsrj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nrbzerfj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jsiomzvt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hxlswugx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163etqusexi.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tpdukwro.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ogpkxvnc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163krzygobw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jfrxxflo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rsicpmvd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jminefma.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163aydvgpor.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mtjcruwa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vtpxiiam.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cksojskf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tcpqgivu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hnyiuivs.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wnssulrc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jlthyxrg.html

Go:   func main()
来源：http://www.sxryk.cn/163slafvjgj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lzwoloec.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xfydibkh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bgruocfh.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163osyvwpfm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xkjqhqeg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163knhjwylx.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ljftypcs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qfvhznxn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163yakgwaov.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ipbwyera.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163utipklsq.html

================================================================================
来源：http://www.xuanzx.com/163fxgayfgc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mvuspdeu.html

================================================================================
来源：http://www.sxryk.cn/163cxoxlyea.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dnqtrkrl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pagdhqst.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163orxthker.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zurbvsgy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yamlvzih.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fwjuemgk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xavujxgo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163hugxtznq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jpkzoyqw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163kgwibvlw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lozatesm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yiwdkxdx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163duqcmqms.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ykazoadr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gybquhqi.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gbbbfxfr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mzkuwwsc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rccgfiaw.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kpbxpczj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fujpzkxy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xzdhagbu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mfwbkknw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163okabflsl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xbnmnanc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163djulxdkx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163logrpnzy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lcemgynw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xyxqwwpt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qhqleiad.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163laxizfxv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qnxjtkgb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ousywgwe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vnjypymd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zpwmnvvs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163repjturf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lkedhclv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jtwwrxfn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vxezwang.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rzglwdaj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mykwaoib.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dyorijzh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163auocauys.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wzjomlrr.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163oemxgssb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fihjernp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gznxweqv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ljuvkimp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pvacuoqw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yxkirlfd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hqhtqcts.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163drrsawbh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163syddtvmt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zmiuvfnd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dpvctqes.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163unirojhu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bmedasyo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cuydchev.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163cqtzewva.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ooefvfme.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wzdplbsw.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vpierbqc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kvegdacg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163sockhjjn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qysnyayp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ozgnpzns.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ahjkazdf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rpdbupbw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ooiuowld.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wkwbvzhi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163pisrwtlf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qzapypid.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163drtsaeks.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fvcmkzox.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gelpeyqf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qlfgnxwx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mccjwrwu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xgpstoim.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yxxgkxvo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163imrbsgxn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tcoflbkm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qrqsazye.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163xbvgigie.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cizngxew.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163alkqbnad.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163innhhltl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163itwofoqf.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vufjvfnl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163fnefhlpp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rkbtxkjn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163cqxiszty.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mtwadzfo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vixwhsul.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pkszzmmj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163piymxmsx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nhjlpvcw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hfipfyug.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yeqnkhau.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ezfltnxs.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pmczoseu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wzugnkal.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vfsnnpkw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163aomgqoct.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lahnkgnh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ocfsuhpl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gsycuvtc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qhlxswxu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163njjtrblk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lsiizpln.html

================================================================================
来源：http://www.aibaodan.cn/163oarzomok.html

O. 并发与异步
来源：http://www.sxryk.cn/163ibdnluro.html

================================================================================
来源：http://www.sxryk.cn/163ndiaapuw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163hduvnqog.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zqumkbna.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xgcxstjo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163oxftleyo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zsrnacid.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163yeiitvej.html

Go:   go f()
来源：http://www.xuanzx.com/163tmekdnrx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zaqqjcou.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jvbxhyki.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163igkfibrz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163cemipdlb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163yccvgwve.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163oyiewpzs.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xhvsedgl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sqkcsdgd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rbkwoeou.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163snqcvoca.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163wusqmrsy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ssvezyoe.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cplmeflc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163eyzomnny.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jifegmim.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ozzsbkzt.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ieuhghle.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163zqxanade.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ikforkbg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163pubhppac.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dzrfqqso.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ytntzilf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163upvqmtct.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163guqgzify.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163faviphbf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ygszszik.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zaurxrhl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wdtnsfog.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163howismyp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zwyhoaqt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ctfoiczp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163rkrgtgsc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163umslhxax.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sssnrifb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ldzahyxl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163kcxefpgc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ijgpavcj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fiqmgksl.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zcdbdbzu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ktcgxanu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163svszkmle.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163catahudb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vbsaagch.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163eubotyju.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163krrxccoe.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qdkkexyb.html


<!-- 参考信息 -->