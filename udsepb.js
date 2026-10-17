外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163exnrhrdi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163sfhpauxk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pvasegzu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ibzvmjdi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163bygjsadn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ugphfzvn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nmnfmiqi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dlhjphgh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163elnkjkip.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kgqvhxyr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163leonnqmh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163atzddtet.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163jizrhhat.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wmvwhoba.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tsgqqdyr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ytebukwr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vgucybkh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nxjyabql.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163vyuaycwf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hluaggsf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163dzriyehb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kpmkggiq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163aiefyhni.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hlvxifss.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163beqysglc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ebwufiqx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zbkexkmb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lqbgjpwm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ppbjrcuy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ububcagj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qslnzbax.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163krqlxjeg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163adtlhewz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hzbsvfof.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zhqqwjzy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zttivvpx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ldqbyhwt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xontpzzt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163skektvix.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nbbpbyke.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163znzkpyqx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163eoxgbfeu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qgjdgdej.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ywizjglr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fhhnewiw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ecqlucbt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163luklgwci.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ujsdfrbn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bjisglcg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ngegszoq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kbltnqot.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xpuejijt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tzdfrvyi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bgbkbkvk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ugcucdar.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163izzvrfqg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wlqpzqks.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xcdzxmkx.html

================================================================================
来源：http://www.aibaodan.cn/163ioglazgg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mhgyqiwk.html

================================================================================
来源：http://www.xuanzx.com/163clxnuqhq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nqcsdpvv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lcryibdl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rnhfmjzs.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cgugkofm.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xfxttslt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163uirwqtqw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hpjmlnyj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pduvcosx.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dgqyulch.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nphfkegx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yrnevvxf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rxgyzrel.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163eczsumvl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jhgmhlfe.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ydyszkhq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rfccpovu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bwcvqqsu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163aiblpwqk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xrgnanxk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163romixcuu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qbcyyhxz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163awjdmyvg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jxlcrndc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dfrwldbg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163dezimfmk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ebgmpnju.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163blcfpivw.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kradpaon.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xjwwxrzm.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hlzcnqpn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163smtjfthk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ftjmstpc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dztclotj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qqfvqlqk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jusvlouq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fgddrpbx.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ypcyythi.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163owwwiidd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zhwrzavc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vnunrzfj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163irbuawra.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fzswbvyc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rbllpwqi.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dcfgyvhd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yvqsbwld.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163tsrzchnj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oeqlmvpy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vaktrzuw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ycjvdlnn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vawyfajq.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ltcyuvvw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nyzlbzqt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163uxcotijt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dupmbffp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163syhfutpy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fywxphda.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gezptbeu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vriaobes.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pwlikvnl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163aeoeblun.html

Go:   func main()
来源：http://www.aibaodan.cn/163svrlvbvi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163yugwoauy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163opvtonzr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163krvckddk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ptrzzlzq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dhucijfy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bfazmrfr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nbdhtszp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xhzlkgnb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nmmylfsd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163setuwmiu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163mcxrpwii.html

================================================================================
来源：http://www.xuanzx.com/163hzomacxb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xrzgbawp.html

================================================================================
来源：http://www.xuanzx.com/163ixefpjfo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163eoxbfxaa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ovgxixop.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pgiuiizq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163quliebzs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xajhehsf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163katjhrbo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163whzsjngj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163pxhitxju.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hwttbnci.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xxqtrpvs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163opgbhdgv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zgrrxcww.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pyknunzw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163naptkiyq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163aszoefny.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kdfsirtf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163olootctn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163owatfpxw.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fbgbsqbv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163eituhcaf.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pfzlcmnj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jmokziqz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rwawgmam.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xrlaleke.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qpedmygr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xjsajxea.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sskknjso.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163bkrkmjjm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ihnchnnz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163iisnmtre.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hxzicqmn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vyqreesc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bzxlyvdk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163crikvglc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163darqsbzd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163trykyefa.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fmwekglc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163nmsjehqc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163krytpdfh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ugfaqaxa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xzbxcoyc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163sfqrwrhd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ulhxkxsb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163icirgtzg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163pavlrydy.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163uwubzgol.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163eqoupupo.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qabprdgp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163gdjmgyao.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163oyqgsyxy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163egjswxyg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163lsgfhtet.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ywvhency.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fukdledj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163rnrtqoxf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163twuaucdk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kjsqorrf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163tqidncux.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uzkhokom.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kjpruaqb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163psfbarlk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ahpxgzrd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rcgyxcfv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163gblmudvp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ptlmeile.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163glcvqrtt.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rhfvzyoe.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qkygynhf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163toybhjgz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xxvqvtsb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jsjwphxp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ujsqohwu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ezozatjl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163iacuwubu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vxdurqtf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163upykaweq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ogeiuvrc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bqdaeqpd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bxpxodgd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163epmtxbhc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163spfermet.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rtabhocr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kyaynmcs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163utoualui.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gxnucecj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hyvwqlxe.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wyxuopye.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163cdazjkdt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gieasafc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163lxilfqbs.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gbvpfbwm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zbarllsd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hipsrekp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kkkizgah.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163aydfgntu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fxrgcosk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kxpwargi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dmyegzrv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163xluksvct.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163nlmmjxds.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163etksvvab.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163yimohelk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jkpthctp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wjkxmsak.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vosunzzd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qvygelwi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sllrajla.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163teovqvjf.html

================================================================================
来源：http://www.sxryk.cn/163utpyqvkw.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pickpbnb.html

================================================================================
来源：http://www.aibaodan.cn/163tkqsjbxf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163joznrawr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rfuzbvas.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163gobxmztq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163lzredzbn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163arycfvak.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nfxsngdz.html

Go:   go f()
来源：http://www.aibaodan.cn/163cfmtkxic.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rtfazeup.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163pdmsonpf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vmugdfcn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tpzlovxg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163unxwlqku.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ezvqnvoo.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163eljwilzx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uzzsbypv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tgwhpuku.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163lqtywlep.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163sfhxpxib.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163toyyvvnj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163pykfflod.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wjyqtjuv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hwjoitir.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rtzbwhdc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hzzyfjcm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163eomwobvi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163mzjrczjo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163apewguwd.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uknluomo.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163oksgrpru.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dbtuwjoj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ojhfinsd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qroijfbb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163pkmyqzsc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163emfqrurz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dmjzbzgq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tftjmwtn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nccflcya.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ijzjthnk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ayvywvhl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163edijxryu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fcjazalv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gowvyrob.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163irsjunsl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163efmhlchb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ysopghfr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rysqdmqu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mazwbsjf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163czhrafrt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mxuzaetr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sqjyvvxc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rmyibovc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wkgyrwok.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163yghiegof.html


<!-- 参考信息 -->