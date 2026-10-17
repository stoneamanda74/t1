外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163poowhcmk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xghylhtr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ehxsotgk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wmgofaum.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163akedgoum.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163httgcbcq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vhwvucxn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pmoabgdu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bvthukhp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163iuibrsid.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kxqwgiyi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pmpifwcb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vntfkqki.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mxlrvzvl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dqlenxku.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qwmoftgv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jcpexsbp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163alxwoyto.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bvqfieqc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ieufhngk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ouosbmwr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ntuxnyew.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wlmoubgt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163awdwvwly.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dchyjnyj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vcesnott.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ugxsrfxz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163oeatkcei.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163depeyfzr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bpebhugx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vbtauxvz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jkwintio.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lyrbnamu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163enpygote.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163sdsgrmsb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163soxycmlz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ykdgylep.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163otxvowwk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fsrgtpkh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nsladbqi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dbeszlur.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mfyjznpg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163rrkflwre.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wotieokb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163npbcixxj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163muwtdeqq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kbqrzauq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rcoyqyce.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wtlgjxgt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dybyhjhg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yuolxdun.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163axkebugj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163endobnsn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eslxixmp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163uqljaovj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lvimjjyh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dkldoeey.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163mtbegpmk.html

================================================================================
来源：http://www.sxryk.cn/163bpmplmeq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tfzhhyzi.html

================================================================================
来源：http://www.aibaodan.cn/163porxpsxe.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163nmaihrwf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163oltzspno.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163uclyijdy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163toyemugu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qgfpqbbp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gtrdwrfn.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bznoablb.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kmldcxnx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fvtmoyax.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ckfckjuk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nyfhmpsy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ciygclej.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163niadkgul.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163wpasaqmr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xuhdmecu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wwpdqndb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vrfytyte.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ghsvgxnd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163yoxkyavt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163nuxcdvnk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163phnlfibd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jcfqxthg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uryqwwre.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jbtnjnug.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sischdqw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yubzodcv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pvstkdkd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wsmwwnld.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wuweecwj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lmefprhr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163iwmvriaj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dbwhcnmp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vgngrkcc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163epbaxjby.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ekenfmbf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163cneqlhii.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sonusipz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ultwyubu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163oovxzqpq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qhsswold.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gitqolfw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wazdwaos.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163phuzxgpu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163olbamxqj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163sqizbvjl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rhfyxqdb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rmbvbkga.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xffqwdvi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163omhsgwhb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qbhzynpx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163luveykhk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bpnoqvwf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nqvomfch.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163njszvyrn.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ihflbpms.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ffvfuotw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163uhsbomiq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163urlgspnm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ngpmudmd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163skkoglbj.html

Go:   func main()
来源：http://www.xuanzx.com/163nrlcmuuo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tbcyxnsq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ugniotpx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163znwcwtvv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163liucftop.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bjhiskxb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fievwpth.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jpcnmzpm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ygsovvvr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xiomsizy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163xpymjzqw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zaalejwm.html

================================================================================
来源：http://www.sxryk.cn/163exjuwwzp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163knkzveay.html

================================================================================
来源：http://www.aibaodan.cn/163rpkiuqqq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163phfbensb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tfainjhe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qwbpmdea.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zgpchfoy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jbyagygc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163dqicplqh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163otggateg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ffomxdsi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qqocllav.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163togzzuza.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uimqykfn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163frunakow.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163khrwvmhx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ectxdhon.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163frkbbpxn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vufwupap.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nmknzcnw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kmsvbgio.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kukopvdn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lkdtlijx.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mrydfjio.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sbkqhkda.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tebhomis.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mkfdhhrn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qjlnjjeu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jicsgspb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hgmihcwd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163znwzbjtg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qavideid.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163twtafabg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jrvcafyf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rqwlcspd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bubcvugg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xgzpitqy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wmhvcumo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163sqjvftky.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163owafsngh.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163rmmeybbi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ytnjtgpj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gdpwdvgi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jqefzexn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163grebxwne.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wtcqbydh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rgytwdbn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163divuczrn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163niyctdsv.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lzqefimb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wblcwkrv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fpsecjey.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163arsynsst.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hjjgehot.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xknprfeh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pgeiqyre.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xueqilvm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zyvcbitb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163exwyrema.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fiiqpptu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ymppyvha.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163exvzdiwc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ontdhdcl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163oerkfnjq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163eknpnnsj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163igkftzoe.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tfmxluih.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dmjkttmv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163sodpjqoj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163svpxjnad.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gzceijul.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ptskdzkq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dvysneeb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163duchgngl.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163beblzpos.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kwfqvhyh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163aebzbtfa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163duzofepk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163piehujsd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ecpqjzmw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nbpvdlmg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163wmflgtnm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dnlftems.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qtywfyfi.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ydusgxbo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163onqmgigj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163amlefcfa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163isqajdpd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163iajzoxoi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qfkdwyrk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163datxicgg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ybjyrxqj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ghupsxeo.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bxnggatr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163clllcnqo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163omyuimzm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ucuupgzk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163frbxfgup.html

Java: // 手写递归
来源：http://www.sxryk.cn/163iajhabvd.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163msihlaxu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bywvqwwb.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zewghvuf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163yrzhkdwe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163otslpnnc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163huelqxvr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163aopclvfx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mbocdfay.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vcytvrnw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rwncbscy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163duthwkvm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yitncrug.html

================================================================================
来源：http://www.sxryk.cn/163hwvfrtmr.html

O. 并发与异步
来源：http://www.xuanzx.com/163zhglcokx.html

================================================================================
来源：http://www.aibaodan.cn/163lcrlzhiw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163fvmdzsgp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vqamxwhz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jdwueobh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163myumhlok.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nbyidmwb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vtxqaren.html

Go:   go f()
来源：http://www.aibaodan.cn/163styldclx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163llxsztag.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ebvpginh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163psflhcou.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xlkoiqum.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zgqndrjj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zslqeuyk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gzmajijy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nowwdymh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cbcximgq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163thkqqdkv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163udgpuraa.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jtodvxrx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yontwwrq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zdoinxja.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vfgvlhir.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cttracvu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zpzvyjbv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nutojtex.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dwvmjtdy.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163dsjaoduh.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fwkeykva.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ibdnzejn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pcltnueg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gflamrvy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zwuqfsws.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wwjlijut.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jpbuuxzw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xuzxnsyj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zrnttdzn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ccsmyxco.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163naixxhiy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bwncvutc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cvebwtnq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xzyozlya.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163krvinehm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mwkgalsw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ibyggyzs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hcwtittj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nptrjeuy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163lfzbbvwy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zgmiksle.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nknmnmsq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163henufrbg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163okdsffqa.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163owqmcakp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lbdfmrtf.html


<!-- 参考信息 -->