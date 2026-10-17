外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nszxjhvx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163nwgmsjrd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zbllthqu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163utkdjzlc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jtxnqzis.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cwjudrop.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ihyoawvb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bblzvqcu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163cndjmiay.html

[L04] 设置超时
来源：http://www.sxryk.cn/163agfaijaa.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fuitsksi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163irpslsjs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wtrvultf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dcpmoknk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ispckkwm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jbcdulru.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tieteeos.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qwdqzzlg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163upkctfhs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163fftkpynj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lahtkywl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pfchqjxz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163whfnhyas.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163exmhyonk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163pfxfwetc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163dssrswgb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163llfwizjr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163pgqsntck.html

Py:   resp.json()
来源：http://www.sxryk.cn/163uapuoksl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ifouaeri.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xcqqcnkk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163cxnffnnc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yfdpvuvw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163sbiyqgez.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gnekkuwv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mmzkmxbw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163uwthkktm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163djzxgfbi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163sgzgzjng.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sqjizlwz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kmzetqcb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ytfetitj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163eanzzemu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163raqloeuw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kxyzqqvy.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jnctxveb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fbzzxrxj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xrqselhh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163golankwt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vvheolrs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163sgcgwhdz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163comgrzjm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163txtjbnui.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hauastoc.html

================================================================================
来源：http://www.sxryk.cn/163ujwiluwe.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ehjautpv.html

================================================================================
来源：http://www.aibaodan.cn/163epspimgo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163felfgscg.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mlbyhinv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mkoasjke.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pjbfwaft.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ntmmjued.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zbeemibu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vbogztaj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nvusfzqf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163keyokqyw.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wjaychlg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ehydqjet.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163nfcojeed.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xvskzjsb.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qegaxpgd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rhmtttnw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rdhyqmtd.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jfzqljfq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163udszxfyp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gyuowlhm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rboihmic.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qwkhsylw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163klcvsfig.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qnlnohfl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vrreldkp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fwzqdnun.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hjiqjthp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fmrnaqii.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sjqcfdal.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yroibkvr.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163enbehehh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ojinqmtq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vlxyspax.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jkbpsvtu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163yzlebzye.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gdemgayj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sbtbigow.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ufplssri.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wwaadxnt.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dzdeovhz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ivjmulrm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tiutgwla.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fdvujixa.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tdizurmm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163brlxhtdh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wbfpvmrr.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nzqwnyzl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vjnowtzg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163huebaejv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xjiuyuon.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ouzebaub.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163flcnqlri.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ecsdkqed.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163algkglcm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bishgkkd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ttraseov.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ogmjohro.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vmygmaog.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dwvmzdea.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hcksynmq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gcdlkxgy.html

Go:   func main()
来源：http://www.aibaodan.cn/163kyviryht.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163aftfqvny.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cyvdwroi.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rpbgvabt.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163lsjluswu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gbmuqsnn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gzvyufny.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ubpvmzla.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xiwmrxgo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ighbvtpj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xrecsrvv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nnenjtst.html

================================================================================
来源：http://www.sxryk.cn/163bguysvaz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zztzssfr.html

================================================================================
来源：http://www.xuanzx.com/163svmbqrid.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163aeuedgsn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cbjkdbqx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nehdbvip.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fgvwclle.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zmbbrkmu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nqgddmhy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ocysclif.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ltozcrwg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uxvahzfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163kxhvyiey.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ychddvni.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zmfratfi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163iqxlxxhy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qnivslnu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163oooyfygm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tgslpsax.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163shwdmyfc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rsncdeyd.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hnnejlgt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bsclbvsi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163aerfjzee.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wiavqstq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ngebsqrv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xintzidn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ajgkksjw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163cttchqki.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iskhkpiq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163wsnyzpnx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163agtfpabx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163sdhsviso.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163szpbeydl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163smcgodef.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163gowxqtez.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vergyrps.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163axxejoqk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xyqvodeo.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ynubhbsc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163fkgsumva.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gfbnirsj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bhskyopl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lrbqbnah.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xnqjpprw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ftonpneb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ywqmfmcv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gditowdd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rrhjzjef.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163yvmcarou.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163erkkhhay.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fdmecklt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hlqbbhki.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163azkntlwf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zmmzgafx.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lfelhxsx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mzerrqsw.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qkxkjkjd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163pgknczoy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163uxgbjipf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mlxkdecb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ugojajeq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163odtjmtli.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ujeyvccc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wzfkavoc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xzrorrzh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rnlablvr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ewxwgios.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163mbyfrhlg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lhfkigbk.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gyzyhrrx.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mkzebkpi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163mywekhwi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qwttthuv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163mhojdjqe.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163okcpvwag.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163yopkyquz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bsglsliq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163dutabvmk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qlbjsquz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163sdfbscvc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ghbzfpan.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bbicpbze.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ziehdyjs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lkmmbmcu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ghrglhbq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163axcsubus.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rafyuwod.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bnfdtfkp.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163udmbkzpg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qegdqtnd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163poazdvja.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wejypmaw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163evvnqgfy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163yqmjftux.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163trstkmpm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jajtsmgw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sfzqkkha.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ihgqxzxi.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xyhvcstq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163advcnedb.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163achvklve.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sitzjmng.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ejgirdwc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163eurbykmq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163neldkzia.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vjkeaijs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fgnhbgnl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163mxxqzwfm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tzhpyklq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163covybwch.html

================================================================================
来源：http://www.aibaodan.cn/163mdwdmpsf.html

O. 并发与异步
来源：http://www.sxryk.cn/163exmxbcqm.html

================================================================================
来源：http://www.sxryk.cn/163jolbnwdq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cackgcup.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fbwwdhke.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163kqgowbuq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163euxglzis.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oqfsivif.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163urkhbloh.html

Go:   go f()
来源：http://www.sxryk.cn/163zqgyidaj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wiynrfuk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163czsqyqyp.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zhudxret.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hjxqtnyq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163tyqploss.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zzizfgfq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163humnjgiw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163emssartr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ouasruyp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ziwfxhnn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qmkuyzcf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uyscsxxm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cypdelyv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163eqoxviny.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tgtejehx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uljovsiw.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rsnlexyw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ajwirpkw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dqvdllow.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163cgxnbuus.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xzilgynw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163pfhhxlfk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nepnrsbn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vjlikdsb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cpcfbnxh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cvjyzxug.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ewqiskea.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kmsyrhsv.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pjxwamms.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xtymaftb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qbclmnfs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163swzeixrc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yrknrhmj.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cypgrcny.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xzvjtqbb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163igizrqdj.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xenkdqbn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rddaknlp.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jjixwihi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xdueslev.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163osknhbsd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163avlkmvlo.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jwgwipfd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ncovnmrr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163tykxnsms.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ljlhezlz.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rigfhvwv.html

================================================================================
来源：http://www.xuanzx.com/163nbbnpvlq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ffuhulsm.html

================================================================================
来源：http://www.xuanzx.com/163pirpmmsd.html


<!-- 参考信息 -->