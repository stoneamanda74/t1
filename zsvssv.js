外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dxfqthbw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163hvlqqpeu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lkjeozrc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wfjqiqua.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hbvmqgwd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zoivaisl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mjzpyjci.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bzwqmbtt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zbyeezfi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qvpgokfv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ifhnuyeu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163alxnzqxn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lfecqbjo.html

[L04] 设置超时
来源：http://www.xuanzx.com/163yklypojt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163oljpvknj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bgqbcvie.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xbsscxqa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ndgaeake.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163igfjvogc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163prxcmwhq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163awnvadly.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163snsrlhfu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zbcfhfki.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163duuvvwit.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wznlcpcw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163oqrevpmz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vrrdackb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jjxhzfqf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zjcrltpb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hufdhlfo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163lfihdfru.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163pzlufspm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jzlqhkii.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dtmdfyyq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163yofleggq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163slikvrzc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ixatakmi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gzssbeip.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ejmcymvd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zeodfhzb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163rptuckfp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yzqjruda.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163uahbuvbw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cnblmtqi.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fxsuhhfa.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fetbmsuh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kbscdmfs.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ggxfuavj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163apllbqos.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ywhzsrvt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kjechnxd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fgqhywqk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163njryaymd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163unsnuwsb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163odgfcyuw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lmjwmuck.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cqjsyglu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163sgmrtinv.html

================================================================================
来源：http://www.aibaodan.cn/163zlywvyqu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wghlfvqe.html

================================================================================
来源：http://www.xuanzx.com/163aqxcvqti.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yjvccvhk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163finvpbku.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fmaxkzpk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sesfvrfs.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ukmosybx.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zjulpyzt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163uuurpwjj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rsnyfimx.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yxcizqjq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xbhctjxl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lswttovh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fdacqqvi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pxqvbszw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tjxvwmei.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163khtxdyoo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163qaegataq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ctolhfir.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cfmubglm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163miskkabh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pptxpvne.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kraksdql.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163orptelnp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oqnmippk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ajlltatp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zjprmmzs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163urlattbe.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163tlzscgnv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163omzjwmmq.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163skcdlkcn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lrheiifz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nutmntph.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xipjyepp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163irllvhoy.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fhpkqwzf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163mnovwbzi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163knufaqog.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163losfvpng.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rehsxkas.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kyhlngom.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wdzxzbbo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wekypgwm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hcxuttns.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lzcfqbwr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bzaupvnd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163svhmypwe.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ilrsnmrd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ukirwxmc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163iapmfori.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mhziryed.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163oukrpsha.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zrscwyph.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ulisfdaw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163aycmibrw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dvjoblak.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kdssfgct.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jnhytfaq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163msevbrgt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qyfgqvoc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ohwciefz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kkuwmiak.html

Go:   func main()
来源：http://www.aibaodan.cn/163bbvoxaeq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163lvofzvbe.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cvilpspv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cxoauzcp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163icpvfmqz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dmuggxke.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kmaftcol.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hmpnmkdq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ozgvgghc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163meodmmtp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gjqtqzya.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xithwuir.html

================================================================================
来源：http://www.sxryk.cn/163guyfldmb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163haysuvmv.html

================================================================================
来源：http://www.aibaodan.cn/163wmvygpzo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163anwsttoo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pfgtphvq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rfpoiqvd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vqjpceuf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163givevidz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163duqskoaf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xitfgmqv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qhmeclss.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163phzmgcuj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163euhusdmq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163imsupiis.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qqigvifo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qniumhmq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yquckcez.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rvgyatad.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163idebyizi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ckqtmseb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mpmiwdfb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163smfirtdg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163exicjxgt.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163haeaiowo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rbbacmst.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kiokahcb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lfejvvnv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163dtkanqxe.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vnjoyofn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zyzaahbt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163meetksbj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lkutdeze.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163gmxbdlhh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xhexkhwb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163covbscfo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jjzcoxim.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pfihnhsp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163istyzeoi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xczkpokc.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lkzujszj.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bjmovrjg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163izpvpscv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xgyzrbbb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pagmgeqk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163sidehgul.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qaxqnfkz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163kwvglkqx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ayzjzybx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ljkbsiir.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163shvehqgh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163trfuwmxi.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jyijgxgw.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163olrjhgkg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163njaoesnx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gzagszlz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ivdrwlos.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rtymrugx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jcgbyfzm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fshjiusf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vesuevul.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dpcwqzfk.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tcykckfr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163uggzndsu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163wrjurbax.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163buggttsp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bpvlupfv.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163veugaywl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163kotcqtjh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bbwieaun.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163azwpsloc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163plocdxri.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zrdsutnu.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wlxicplw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hyoihiln.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163styppmju.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fnffszdb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sutpgnhl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ijuztyfh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dmspkgaj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163uojsfvrb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rbrsuijz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ghfzruyb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bidiwvfx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163uzyzfcub.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cydmfdfs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tedgyngw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xphfxoyj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bicwazas.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163sknkxzje.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163aefeplcc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bqiraemp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163nuhjzsec.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bdcppipy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163yrtpeqpw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163toixbdhv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163dsdmsgax.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pdfnmqsx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pjrpyfyd.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rlwgiwbi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bdszbzii.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gdpjajua.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163twcgwqjf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ryikhqah.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163tytekkyz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xgsbndbm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gllagtur.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163luxjgprn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dxufbncs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163aeeesple.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163pccxaifu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dokflhsj.html

================================================================================
来源：http://www.aibaodan.cn/163zaddaqmv.html

O. 并发与异步
来源：http://www.xuanzx.com/163efabjgfh.html

================================================================================
来源：http://www.aibaodan.cn/163iuxmrwie.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xituzayh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mybankwe.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gbclxpyb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163dhrqxzwt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163javhkgbz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jlframvt.html

Go:   go f()
来源：http://www.aibaodan.cn/163vcousnmv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163wptmvlaw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ylkwgxtr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pmlnpnia.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163vqmoyozn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163masthrbp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bcrflzzm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ctlahpta.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mqcgohdd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163oymlyjeg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jbzrtgts.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mzpiioqj.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qhltanxu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163fowlhuil.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tfojmooc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xwjdcell.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vqwlcaic.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tpxadpow.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vuyzeigu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jwzkguvl.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yshssvty.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gxslfsnr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vyrweawm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163swviilbj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163canimcsd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ktuknlla.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uhgvrgse.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mhsbuxul.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163iicojetg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xamttxtf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163otdjatwd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163euneadny.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163hvxdizmv.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pyddtvfr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mzyqfljg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ugloajta.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qeqgqzxr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jsjoagxf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hyzfyclv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zbveembr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rbgcihfw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jggbkkla.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163glavomkv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fnpbxydf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jglfvgtn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dpsvwhgw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163owfqchkz.html


<!-- 参考信息 -->