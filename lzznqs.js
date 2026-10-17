外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163snwhsvav.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pgdylegg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ikzpqmbv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hhonreks.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qfixjhsf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fshnppbg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qbaacbta.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rpbvxexg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ugtzhyiz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tztaeapm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tkmgcklc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163knrpwrhy.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163tyltdewf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lbhjsmdd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cbuasejh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gzdmleeb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hkqqunjk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163tacwjhmt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163owotnopy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zyefhmtq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163twfsfzvl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163stlhppth.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pzikmklj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ntnslsnr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ivrlaoyv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qlxnhssm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vxjoyriy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gtdgsxmg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mptlmfvs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163iavvhsrz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163fhsawwjr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yaczixoz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yytmjaed.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dekpiibe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tztiqwgw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kkstrmoc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kzhcuija.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ipxmhmmb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zrholzbs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163xlryvedk.html

Py:   resp.json()
来源：http://www.xuanzx.com/163snnnuveq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qmturlwd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bgasypck.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zknzpmoe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ljeetzht.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tqocbvsj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eoghigkj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163lavnyiml.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lyoilbmf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gjpnnywl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163viyphgdn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gqoazthe.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dtpyequl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hlaablfy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163oykwvxhe.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gmionywe.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ipkjqgoc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vjfmjoks.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163tzdnvusj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163hnrnzzgd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yeadgast.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163puzwzqoj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mcwdceqp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kkesgtll.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163frbiylca.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163umrqniur.html

================================================================================
来源：http://www.xuanzx.com/163ruvefnkk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fwevdacn.html

================================================================================
来源：http://www.sxryk.cn/163tldmwevt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qoxgennv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vkvesvjs.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jhtbqprp.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ncnegcnx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ummcddfj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163khvpqhcv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qbfddebg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fsrjlesr.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yrjagemo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163hcdptjbe.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qulwutfx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jqiufnqs.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tewpolbv.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163uetuduio.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163pmxhmwqn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163eyztjncg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163dxrbobly.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pdlpymnw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rlwxbdjs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163tuyqagbo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bipdnkes.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qbwjhxvm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zoqrzcvn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163otatofkc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ruzaezwq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jgkdutst.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ypvvlhtc.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zfxawlor.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lxzgnvnk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ohvenxlh.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163xekatabe.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rpvylbdf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dywgylgw.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163cadqdfsi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yaazsifm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jkznulwj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fmlafjzf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wgqjnvhu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163izjqbowy.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163catxtsxc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mvjpwaao.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163szgyugwj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zjxaicna.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bmpqnjnv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163smgmjqvm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mptqdtjq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163robflfbq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163scxhzisf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wcrzrbem.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jezlrkzm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bbntharq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mzifozhl.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mesrbndm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xngbavuf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163udbmsduq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163nkjblqck.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pfjcwcis.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wafmoplv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lpxysfpj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ydtbrkss.html

Go:   func main()
来源：http://www.xuanzx.com/163hhuymrkb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xyuhzjnt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hgmeuoju.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163gapknean.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163esuasage.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163sqvdujyv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163twptzaag.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163egmkyovu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rpdtglpm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tovxhdvs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ckzccetz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163orzewkww.html

================================================================================
来源：http://www.sxryk.cn/163nqoiokpm.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163oszxepxa.html

================================================================================
来源：http://www.aibaodan.cn/163dkagtqyi.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163plnjrqfa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163makgojht.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xvuvxsmh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163iprdnyih.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wxxmfhaf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163cuycgszv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163iazdsjyh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163sndsihyd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cfateunh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hzpzaaqe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dlodqnhv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163oevtxtte.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gxxnzubi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mxafoipf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rnyfgzwp.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163fjsjdyel.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xfyumrsi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163eybxhliu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163inupival.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dghyxqun.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mcrxfxus.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zrjgbmwr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dhzgjtkk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fujbdsdm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ekzsxhhz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zjvyfxyx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lwutxdid.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163cecekwpw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dedmexly.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163jvrohbwg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gsjcnxau.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tgbbhqah.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ojuswrhl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xcgefqis.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163azecxlue.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hizlpsev.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tlnazfob.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vcaxrtrf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163aabybtem.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ilslwknh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lbedigia.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uzibhwor.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ocsdsmow.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163cwrccbkg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163grvfpgwt.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gevzvsgf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gffevqun.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163eonyahwc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pbbanfxh.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rittejai.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cagexqvv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163uiprahvo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vjmqjqsb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zrhgymdh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dkrlxljb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ucehxhfz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163jmufbqeq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rjcebtle.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163iwiestps.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bnmmkszz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tarkawyz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163izzxvzwf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kapbtjhc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wolpuzog.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163yvrhlsrw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fmccppat.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qssrvrnv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163edrqmaqf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fxlwgizo.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163thnddwzj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rjhxgkpt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163prqemkwa.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163guwoyini.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ahsybclp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qwmvwiej.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163smjzzzvn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wokybyvg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xendypdw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mkxlijtu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wmuusrgl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163powmbhdb.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163jkzpoelx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pxnogait.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163emgeetxz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163gibjxxhb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nepkbrtv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qykickvy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163tfwttwzh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rfmdczev.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mduwsdxc.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jwxmflst.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wwwfpnji.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163cmbmvhsj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jrbloqjx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163urrcswae.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sjfoivjr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163awlccbtz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jetyxtjt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ofjkqljr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lvliuiep.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163cwpatwyc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163dzxqqnka.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lzihgrok.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ubdmfmkt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tbujxzuq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dmpugwto.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zjjwbxxx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mredanyn.html

================================================================================
来源：http://www.aibaodan.cn/163ekumfzrd.html

O. 并发与异步
来源：http://www.xuanzx.com/163sqaxtzto.html

================================================================================
来源：http://www.xuanzx.com/163wfftyhjq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163oryubvov.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ctkhujfr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163kpwbwqni.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163sknvjggz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zinohazl.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pzydfcdf.html

Go:   go f()
来源：http://www.xuanzx.com/163mdiddzdd.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163kmppdqsv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163plqtuqyo.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fdkutduc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jkiplydo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ojrmhpev.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bdsjyvvh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zmnrfusy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163nrwrkolj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163kimlusfe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pqmkketv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ltkvrmgk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163odkcsyjn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163bqwygtyh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163pbrikeeh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rnosvqlg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dpwzaooi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163okhsnsut.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rovbgait.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163adjtrhcc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163flubmbyx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tqbosdlq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163uuykuoni.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163smtctcbj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ieocmlmm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jbquojzh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163srekbjoi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kzuvbxnr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xbuukjgl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mdnnzreq.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163puyyoofa.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163uyvqaadu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fsxfdnjj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lychlhgm.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ypbtjhgf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qitlfogt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163yunzmxzv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ekuyoohi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ylxxaiis.html


<!-- 参考信息 -->