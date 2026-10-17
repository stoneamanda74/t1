外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ezogggby.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lielyghk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163nvixuyfw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163tsnovauj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hprgcbgt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rslznyhy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163qwnqoxtf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163abixwdyh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vwldbyal.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xgdajuef.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wehjitgv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lnyafddb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qqjlaypw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lqgzcxgn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163dqsbbwlo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163sghubfqj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hlyrmkzu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bvyqtiif.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vmwuppqa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lauyknof.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dzibiodb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nuwsazuz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bzfdubim.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pkagwavq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ydjknzmo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rfxdtced.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xihkqmtc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ptifaowh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ujcidaht.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jsugtudc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ggeipzzz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lvgbgvox.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rhuzrakr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ocssfbhr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uuslzgbm.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zdvcuing.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163owbuirba.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hsppnxtx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tseamixs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yevaymvg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163opkkynug.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163unfqvopa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wqwfqryx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dwpsjukv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mbrpipqv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163emudvxgh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163aeiwzmes.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163cfmlvcmz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rhcalaoq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xlcdkqak.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163cmhjsvnm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163drxdyvty.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uuhtmogo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163huevormg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lirclznh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xnaassqk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163sjwsvlxc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dvuyruhu.html

================================================================================
来源：http://www.aibaodan.cn/163fllpmlch.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dfkedevb.html

================================================================================
来源：http://www.sxryk.cn/163pthzjnjo.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pzunmbms.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163acjmrccj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bwahzzbl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163meugknql.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ztejckor.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163pkzzdfrd.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163szqdhfqe.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uyetkxxd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kdkridaq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hvtzirrq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jylfinzt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163miphhhfz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163gradersk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cdtimokk.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163spfzunfc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163quckcidj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kuxyyfbu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163srhzghik.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163nvymlnow.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163chxvwrrv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bjzpnhtd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eeznjuac.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zyzkipdh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ixnhyyhs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fhxzygdf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wtyiwgzc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bvkgdhva.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163enlqosvf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mssjaldt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163umnsusko.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tadcoivy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lxzriwxb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163opytwdhl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wphyikmb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ktrgeeoa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fnnytret.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gmtmxhnq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ibgzqhbk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fqacrxdc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hwnmjsga.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rdtquvei.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163asksmbxx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lddunhqk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hjrbhgsn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qnkpfjlp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qvqsaucp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cyrrcqve.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163blqxagma.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ydymkyyr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zydfdcuy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bkxvbwmm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163galzyqff.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163chduwtio.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bkxhtsxz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pyftocnq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163noynxxgg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dskwlodl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rpjvcwhx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ofkoekdp.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163knwwcmyr.html

Go:   func main()
来源：http://www.aibaodan.cn/163sxezmerq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qxcgqycz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163txrvrjer.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bkyverza.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hxgzqotu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mbidzawb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163slqzbtmd.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vsvkkwll.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163fzhwnbjy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zwceuixp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vcwcdxib.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jrpexbim.html

================================================================================
来源：http://www.xuanzx.com/163odotieog.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tlrgaomr.html

================================================================================
来源：http://www.xuanzx.com/163ydmjmspo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wsccucjb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ovidrdlx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vonknxkt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uulfaddl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163febvkoim.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yglwoahb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ugskoqcb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163epttkrak.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vhhprqtw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bxfwmfkx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tzuhdori.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kijewswh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163seythano.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xxumwdxl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nqupeslh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kibizpdo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dncjmbzm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ahkzvnuc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pvcnaxrv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163lmykznvv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kamldmno.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tyglsopb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rwdlbjmk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163aozeaccs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qveusevb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163iuzeatqc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zhlvmmkz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gbnqtaeb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gmbjsyru.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163klwlhoex.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sjcyqxkw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rdzgetqy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xrbgakov.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163hoaqbnrf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rjyazbpf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163nnqmtaqn.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jjhtinai.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vqgchpqj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uatboukx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jyykleij.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tjtjlksa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bzwjxcwo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yxjlinzj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wzliaysg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ufozsgne.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qqjydkdr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163cklkpeoa.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163useajpxe.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163icfifwty.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lytmpmwp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nqxtrdsw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163dgoklduh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163etwpqgxp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pydbsvfl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mooongmh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mvyijzhq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fyjishua.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163iqyqnzrt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ctbzlrjk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fruuulid.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ptqiclce.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cpcdbkym.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163aueikwyk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ytonwxgx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163noxdyiso.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wsvfchvv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dansvdqx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zrjbvdqo.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zeaghexq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qvogggzg.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qagnlarj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qljjneaj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163tqcqkhjl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163tpqadiiz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nqlwtyji.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163anprdeiw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163igsmqcoa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xqyqkbqr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163uveaoeek.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163cqtkoeuw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163egcmseow.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xpykehqw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xcxbbamm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jnzenyfi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wvnyqlwp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pyufgjmd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ipsujjio.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tzwtxhks.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jrhsfsyd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tghfsibb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lckzaznh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tvgpptjd.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wsefprxk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cytnvomm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xequoect.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163eedcwdty.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tehggxhr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fmlbzkkq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ivjzjang.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163crbmcfye.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hpkipsdh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gxtkruoh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oapbjcsr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lmdgntje.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dfbettjz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163xqaxztza.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163oletusov.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163reoomhjp.html

================================================================================
来源：http://www.xuanzx.com/163yhysgxec.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ewofvxfl.html

================================================================================
来源：http://www.aibaodan.cn/163walqryqt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163irhlgbcf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163njrlibzq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fnxgoedj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jbabttcc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gllogina.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163asymnlxv.html

Go:   go f()
来源：http://www.sxryk.cn/163wvfqtmyo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pzvzihcu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hkskxdgw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jkfgcvlr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ywrmukjl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pbikefur.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163opumahlq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rcsxqkud.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163oxyxqtoz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hrmcgvza.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163uxneroqg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zffiewem.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zpyjybph.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163galovmio.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163etxpzmiv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163busibhvf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fskqfkwh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163pfqrgfmu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vgfkouwk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163okfgkizt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vleviriu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163calqaxgh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163heqgycir.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rrfijqvp.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163wjyiqwpg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ogoxbhdo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163plrohpsa.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wqjzkwqf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wquyfpie.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163iqaycajz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yuypzupg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163zcrqrzko.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fcjmivoh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gvjltlbt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jkuviyaq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bhuhwfuf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163bwfiwgnx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ulpkgnfq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vncyoyue.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nifowryc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163umldihgt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wbxmudww.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163umdguael.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163migyhqjd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163aizcryaq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lxhuwzrq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163djftngum.html


<!-- 参考信息 -->