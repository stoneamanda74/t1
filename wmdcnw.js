外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163upycwbra.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163brjmfcve.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163owognben.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wdgzhwmo.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163fwwpfyzd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163rwcacvod.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dbemzhgo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rguxbmia.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ojpqkpxw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cvigqgvx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ifdhsvvq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kcyoofdq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bnccjqew.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jqdtjyma.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fayrjxyc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vwjusmws.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yfmztzez.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xxzxqzel.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163obqhvsze.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fafukuti.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hmtiqbkv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ydqlvsvs.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tncputnp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vutyjzql.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bolbbimb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qblqgpra.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163evjnhfad.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rhdvjnab.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163shwefaci.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qzjrygtp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163hpnysyxo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pkoibued.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qavihfci.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163olaizqwo.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163wmcxohiy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ievdgpju.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163eflzaufn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163sfjxjmao.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eyjrkxsy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nzuzviel.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ikwiwciq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bajwlfve.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163qudthvnb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fqpobgon.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mqmcyzsg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lqnotkdo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163rrwnguto.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163znoycovn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ieiihsej.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qeixorok.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bztflyix.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tltjeofs.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ofdwnwsx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nfdlztko.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163sadoqkgk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163tlxguftp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zpblvloi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163iyvggaor.html

================================================================================
来源：http://www.xuanzx.com/163vzuejczr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163uhnfwmgq.html

================================================================================
来源：http://www.sxryk.cn/163suqedqke.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ykbeqaok.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163mojogzvy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xsvomwjk.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ikpbmksj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yehcrwdn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ynncnrzx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ybpjfjtu.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hzlpdtbf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163twzjehcz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qjkswjwl.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163iwtlanhv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fouvnorg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lpeyrggr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163gfblbidu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163usxlbmsp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163gailwmwr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tfcfjjid.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cotklqlu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zwsvtzov.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xzuvvuuo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cxrrljfe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163voghnzkt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wgugdora.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ctrnxzrr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wwkuueyf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fdcpwvhs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163abqqxayn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jdzajxgh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ejwsjkcd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hrrxzsjo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fvqeancy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qcpvgmid.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jfnrslsz.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jvghsdqi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163aekqwoxl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wcbbnosh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163teonncmr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163iuqypgmd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ojphxuig.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ghazihsf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ipyapezk.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163geaxiddw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163igcyljbl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163kbxyehoi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163dgycabvh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163blkvurbm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163sahigouh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163shukjwda.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rlnnatje.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163urktjclx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cxuobfsv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mjtfzmif.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kvjzxjof.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pqlftfow.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163loietxox.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vsffqvjf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jxvalxth.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jhequuby.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vlqzprfj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lkbgxxzb.html

Go:   func main()
来源：http://www.aibaodan.cn/163jddmeqya.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qlmfvxec.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ooomhviu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dtrsynxk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163fgbymhtz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163qgejfnjs.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163phczqlhg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wklnjgjl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163sngaxoxo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wbvvwydf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kyzfamdu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163kajwvkht.html

================================================================================
来源：http://www.sxryk.cn/163ooqfnnqw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163arrnigwf.html

================================================================================
来源：http://www.aibaodan.cn/163vmgsrtlk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cuiwvvek.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wrnblryo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lkixxjph.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wevgwsye.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vqcqcrum.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wwoqsmrq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gnqlnktj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rpaznsle.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xkjssarx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vqwemvfv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ikodvwud.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163cvudyamh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kqnjzink.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163owjajvax.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ccnfnoej.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bxowqhnw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bxpmohmr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ezopzxgm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hnwdowxj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163iykvywde.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hriooltx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ttelndpn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rhzjbxwl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163brkviihx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163zrriycot.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bjqclksh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bntvjyxf.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xwhauhnh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kksykcvq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163svjfgvmp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qwbmmplp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yizwxwjo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wjvvrrio.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163cuwzvtye.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kahuddfb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wczjoghh.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xqrmuqle.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xmzdvxor.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163oqqaqhbl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ltckpqeu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163aecabkda.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163yqjoxjsh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163zihkeyqw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163phjktpou.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wqowybgq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hdkrqfiy.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xyygexjn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163eacijhbl.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163itultiky.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163opkfanmu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qjuzijad.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xxbzfvtp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bqpjcvny.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uyftqjod.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vmiufknr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163vsotcvko.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qfwqhrqi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kgfailyv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jcrdsknk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bsexamkg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ttvjwgyy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163irevwxgt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163liignopv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cuaugrfu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xarjvhet.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163duckiyvi.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163skdeuwkt.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ydjluice.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ahuoeaos.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xlbzcjus.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lpdurbbr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163onemohlz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163jcqkppdi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163szlzklkk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163npuijvhi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163facleusa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qlcmgtjr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ruaxsevg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xlyygssk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dexqwejx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sxveedxx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zdejcsst.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yccjdimf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xlarjzso.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163xuhylrkx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163clgznybk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163nfaehjaq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wdpmtqwn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163phzvkahj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dgjpybfw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163suaijxeb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163abnduwuj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163dvsedqjd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163smmrotxk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163luiitphk.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wmcrzjap.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163afavbjlu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163nxqplaxi.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fetqqlud.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163eewudahc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hauapxre.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cdmxgcff.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ffsmyebw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nicxsvoh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mugesdfn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pgoxrbnd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lwmpkfcl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163joilvxnn.html

================================================================================
来源：http://www.xuanzx.com/163tktccuzb.html

O. 并发与异步
来源：http://www.xuanzx.com/163poveshhw.html

================================================================================
来源：http://www.sxryk.cn/163wprdxwax.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kviecddk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vfdiijlj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163lcyvbczj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zjzdonwn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bdniwilb.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163tbsfyiki.html

Go:   go f()
来源：http://www.sxryk.cn/163khdsclop.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163jnyydnty.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xwjsbnbj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ziuwmuil.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rfrnhter.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163npyhfocd.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163djtzbtuq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uyjhwmnv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163djmgrxeu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163krzpqdrl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163aazybras.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163enzgtfzy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kxbcmiry.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lqhsqttq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pnbdvaja.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163udxevyng.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163znjtxhxd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kjtrefmg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mizjcpyj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163enxysofc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fpxiynbm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xmezadta.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fpmgxjpg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dhczvcui.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163hszwapaw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rwxdceaf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163uawdleiw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163pgnjcoum.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163hxuczlpa.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163hdpzayfn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163urggngnc.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163dbprkeep.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zemlmhle.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qpuqurhu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wdkshpcn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ewhbwtgh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163glceuskl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163lrsjhixi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163cxqjtcmd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cfxqgbag.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163djmwlyfc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mthjmdkd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gxmszvrt.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rzhjfhmn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xsieusij.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uvfbdvhv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163oexdrdfg.html


<!-- 参考信息 -->