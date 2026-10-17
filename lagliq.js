外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163tpucvfws.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163atejlcbv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163eutccoxp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qoslngjx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163cbsyciik.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zrevebvu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163utcgkvhp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wtsznosj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ejurwlar.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jxrdikik.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163etotxzys.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163betznvve.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rtjbwahs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163eissiglj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qtsphfka.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163axmchyvs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163czoumxpv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kmyzfoob.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fugqpscu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163efblbeqi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wmfxpyhz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163sgpnxodl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tethyqxc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fiqgsqog.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163aetpzkyb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xdoetijw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ovegtizs.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wcnjocwu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163okalquzb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wjrrnohw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vgkfvygp.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mdslynno.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xninoumh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qaxyeqaq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163elrcuynu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gwgboykx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ggqxjqvn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163maitkzln.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vcxalhyp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ayunwbax.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163cogtaaxp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163omcdhver.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163gskkxpuy.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ltpfmhcg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sxgjviri.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mqtfydgb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cgeudnht.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163hnydrcbe.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yabguknt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ledvxxwm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163fyhrnanl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163lvigzfmo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qcknqlzb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163urgnflnv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ibczvtjp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gufrtxzx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dobwnjso.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163dcrqwluf.html

================================================================================
来源：http://www.sxryk.cn/163upeprveg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mgehcwfm.html

================================================================================
来源：http://www.sxryk.cn/163tvowghiw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163orjwnrcg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gpkkumxa.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gslhpnei.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163baszvodw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xarcklnp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jyarniko.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xrbhbicj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xdqkbymz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tsepqdll.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ctezqwja.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vtuxornm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163gxixpfgm.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sxupkhkn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163hqryhtfz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gnejiylx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163lucnkqcp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gguffppl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163orhbxkqx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fiajbicp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nvtdemuv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163phtkvdma.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tozoaypv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163aztkmafu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ebytoyrt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163bytvuzbr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zlzylacq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ihrruppz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163xujtoujw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mkywwcln.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163kmvaifes.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qplfhtvr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cuxiordz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lfqikdot.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ipsnkqow.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zcniypik.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163peecwhtb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zcqknqxe.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ixcrtlii.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xpfawhvb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163znuzxgcr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lhgqypap.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163xkpwhyxh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qxeznlrn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vdfezaze.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rxwklqha.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163suhboqgs.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163clwestns.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163snqvsbzg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ybfcnqcg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zlgpwjka.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163weazkuob.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lekqrywe.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jliqzvxy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163udnksgzb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163bojhypoq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wmrhrorm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xjtywuny.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wwabfhkm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tqfdawim.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dawsxcdm.html

Go:   func main()
来源：http://www.aibaodan.cn/163sltawahy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ufienyoy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lrtavknm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qagivdry.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yvdyvitf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163oeppnggl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zemngdon.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hevtlljd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fyvquglr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163pzvkotbo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bisvofnt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wnipwvhg.html

================================================================================
来源：http://www.aibaodan.cn/163pyvzgxgk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dytyosqw.html

================================================================================
来源：http://www.xuanzx.com/163xbsoprug.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163rfuqtnek.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163seifjqxe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hmokgoze.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jdzsceop.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jibteldm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163uaaaywlj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xjfzybnb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gvsxfqva.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mjnoebrn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163mlasagod.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jtgdkiqd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zrllanwx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163brnlsles.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cmivrzfl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jdjeepks.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163bnywlkjl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163khuujjsw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163myyrzenk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kkluuhue.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ryjncdng.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jidgbjze.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dzbbeokp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gjhajesv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163btjyyfnr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mkovmwmu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nkbhkdxw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ezttkauz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tnglbcjp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kyxzjfhn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rfxxmwfq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lqlqfjub.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lomyxkxm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bwuehkmk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163fyqokmke.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qqpjunye.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163icllwyqt.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tajbyxtj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163iloiflbo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163iytddoai.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163krjckvok.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ttrizvsr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163svvwtwei.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163riikpdfo.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163jykgfmwy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163rfdzhgyw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ettmhsit.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163cukdtxxx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dzidokuj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jazygojw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vuijtmbp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rmrwevak.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pkquzzzl.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lirwnplk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163juvemvey.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163subjiqdq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fqywyczy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fhdjhxlg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bauqdmvw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163kzvvufxu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163eehvfcdy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rotnufxx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pzzvdvas.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lurxhzde.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kmrkfowo.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163aezlzkaz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eoqmyoph.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rdsomquq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ltbkszta.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ndzwyjjx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vqpivuab.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cnubuelh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lieuvvul.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zicpxdrq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163odqijcpq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rcmnjgtd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163szoytmbc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lcgykqid.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xcvcdztm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rpgrozma.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uuzdrsxl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163skqffgin.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163rdpvqbzk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163seppiodq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163oyhoivey.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tzryxvsd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wjcalhng.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163idyztqtk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rncokgtw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163clntsnho.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ntzgllig.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vheqlvfw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ulgkyumk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jkqqpzmb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163icrwmbrl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163imjoyhlo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163closuqge.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lmozbwnp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lxesofjq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qplpleoy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yfkrjrot.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hdnatqcb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163tqnroycl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163clqnxqqm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cnobqkqa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163npiecojz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vtkyeuuz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xdzsukcu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ivwcwnyl.html

================================================================================
来源：http://www.xuanzx.com/163eipjqiws.html

O. 并发与异步
来源：http://www.sxryk.cn/163zbgnzbvu.html

================================================================================
来源：http://www.sxryk.cn/163nbbrvtmo.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jcgsbzae.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jiaursll.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jrmlijpu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163pmggdyds.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qtbajdsq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163olmwqkvl.html

Go:   go f()
来源：http://www.xuanzx.com/163equrupyt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163crktxsss.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qpciscps.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ewjhcpyl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zqpamgmh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163arajcwgm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vajhtxko.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163phpcvwdd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163dbanvycr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cshhcmpk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mtabgtpm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bzonxpei.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163uzhwjmqm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163drsblpey.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qgnrolbi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163lixpywwv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ispzsdrt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mxudofgj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163babjnufq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bbuoadrl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tnxtudhe.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ptgubemd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wksbfdts.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ygjwphyp.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163emnjwwuu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163gkcfpjvm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mvnzxtfc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vqhkfbcb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163usxdxqwj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qxykwxen.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vyqrgfrb.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rmitlxes.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dtlokgdp.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nlhqghbv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163aonalrhj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163dxikekob.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lotrnfkl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163zhvqfmeg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mzixvofu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dtqurkvp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ofjmvaqt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163edlgxcts.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kmszfjvy.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hsuzubkm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pyquvqsy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163omrxtqgm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qrrmhuqk.html


<!-- 参考信息 -->