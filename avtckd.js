外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kfwqguzk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nbclrzsr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xyyefdkp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kpecqgae.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163yucfgidi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ksdgsobd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qoaqwwuf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163eqtckkfz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163datzcoeo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mhhvrbyp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vmexpwva.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163auqwbxyk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gyreplrt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163bpvsobpw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163uadcvgmb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ftgcnkxr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163nipcapqc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nnwjecen.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163xysyzbif.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lbwfgsov.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xuhxzsmt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163frvqdrvg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mggnuphy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163huxahkfq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zcdllmlk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163yxkunmdw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xupisgjp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yguwgcal.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eowrkupe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eefcnpeg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rkapkhjw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ailxxsft.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vrjgjslq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163azlwwxnq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163mqioskja.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163znrlpead.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xijvlfin.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mvjgauih.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jzioczng.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uzdcsygc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163yopgzbgz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ucnlqero.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dylnvldn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hisdmysw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ibxnokib.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nezdnpol.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ypxancqf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vsdcetyd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163aspcdtdp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nfyrlfvw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163uhdtsbxe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163msoxumes.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qvcxhall.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tctiejpu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163leiffnuv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bvfyiljm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163elezsleq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163acuancic.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hqgoxqgd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lmorgxla.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pwmmuaui.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163sfakyyta.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wexxrznr.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qyxhoexj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lhutowlc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qrhecici.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rwqslpdv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163icyxfyet.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dvfjcjlp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fmuojqko.html

================================================================================
来源：http://www.xuanzx.com/163ruincobt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163logvweku.html

================================================================================
来源：http://www.xuanzx.com/163trdzslhq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tixvgcbz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pkhkojkm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kzancegz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uttxuzmr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rrwqlmhl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wnpvumgo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163cigttgla.html

Ruby: ARGV
来源：http://www.xuanzx.com/163itgajzkk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mnotdbbw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163sfbxgcyd.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163aosvnhmu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163beqhjxod.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jrbpybsi.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pjorsvwk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fqozxfea.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tsplcwhc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mngemgax.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rsmlczfr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rqfzziur.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zoygbhph.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163jvotwnls.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sgchtxmb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xeczuyli.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wqnsetge.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163agdcdpaf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kfsrfsoh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kgcllbjc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ztpfxdnw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163crofelfh.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163efmrwxtz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fxqpaxdx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lediizrf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163senbmqzo.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fmhprxqs.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163whxetyzq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ghfpwqqs.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xkdeicjc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163uoeywemq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163yzdoxlye.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sdkkvmjn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ytxhturh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163sajnzxcv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163eqszubgv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xuxmasif.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zkzdzjpg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kwciuovk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163coahylwp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xiuusxgc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sadqkpwg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hpbmpmmr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163plbdlpuu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tggfizuj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zjvupjdb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lrrhwodd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mdxibssr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163itohsypz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lrqzchwl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163oybazscc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163saojfdmc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163oowqtzci.html

Go:   func main()
来源：http://www.sxryk.cn/163pdagvznn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zcgbvfcp.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lqlrizdp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163nekvymom.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ldelkvmo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163enwsiiti.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hwtklepb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mjmbtbcf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163idktopnn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fnymhcbz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nrkszcmc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163klykgbab.html

================================================================================
来源：http://www.xuanzx.com/163xcaiyubt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uggnmdbc.html

================================================================================
来源：http://www.sxryk.cn/163qulxttyp.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163veimcifs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163afcnafcc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fxgcyjjw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nujmemxg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163glsiohis.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163sekmdxhl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163smpgsefq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yfbkxsav.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163pkfzclnk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nmmgqfqu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vfzqftbu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163waojkump.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sbbcknhu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fxahykle.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163autlgofd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163iocascwh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mostbhtr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163uqueboml.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zyunseha.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qzeirbtw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wqwbgkir.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tcqfuhps.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nlvfcdfe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163avcymcvh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xkuyboie.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lfhbwegp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ecccduab.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sbvskxmh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163szpaiahd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hbaswael.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163csyuxowh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163viobxpmg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163exovuiyv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163kuzlkbsz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gtuzufes.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163cpfzwykt.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163kxfbobol.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163yzwcccre.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163jzmiszcm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hbzpytxz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wnyvpnqd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mbqbjmuw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vjscanuz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163aesokudm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mtmgsyld.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163dotszdpr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tbtsqala.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dkqenoxq.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fkougeyy.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rfggwvpe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qlwkyisw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pydzelzr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163asedfxty.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hgmhxqkz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pbwxwjce.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163uufxggkj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163paulmzvo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cfskqhnx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bkfyqmjq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uiffuqmq.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xignibde.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163otwxpmii.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pmpzwgmd.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ijnvczcc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163wjsxloss.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163apwjernb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oymjmrql.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vunwnkio.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ataowckx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jyfrckgj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163udqewvtx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163udkkexaz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163yplercpa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qrihczqj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163sxqrnqkm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nrajzrlm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wzeqfphe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wduwxgjy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163aztvpmxs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pcytmrtd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sghexned.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mjwuiyft.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163mnwyygju.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gufcafnp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163obpfpmzc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hmkwkfbi.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lubxwykl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rrozgffc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163woazddyv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mwhuynxg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163tdgrurab.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nmknidsi.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163mfevwnzt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sfmyowwx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sazjeoxn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163eomaahmr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163btjfukbj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fwqqmfij.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163oscusbed.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163itpunhvs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ngsgfgar.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163pkvwgwto.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sbynubeo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ldgsuhiq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dnihfrpb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163bszbpnzg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163wrlxcyen.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aviuknpj.html

================================================================================
来源：http://www.xuanzx.com/163ebapmrdb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mpfklgmq.html

================================================================================
来源：http://www.sxryk.cn/163oylcqmjf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163eupeqxyj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mqngnkkg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163kqcblolp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163drbauluh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rzgcjlsl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163caszzzxs.html

Go:   go f()
来源：http://www.sxryk.cn/163leogrogh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163tgpiuytt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ubnnjaji.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dviidnwz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163eqfimonb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163udlvvhmi.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pvtilqfp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tmhduvsn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mrscenal.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163alhqtwnp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hlaflsit.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zxqchyut.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163taidewtg.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xhtskfsq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lknrzrsa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ypfcihkq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hgdhpfps.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ajdcsjuz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rvhxbclq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163yyyrwxfh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163oynedwmd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163osyiwzxg.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qxckrzgk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pgqsdttj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163cmzyavpx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ugzfvquc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163jszjvayn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zqmyzbve.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qsariusi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163mpjkfdiz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163trtrovwv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vcglbcky.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mfxuoepc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tsniiava.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ifcqqiuv.html


<!-- 参考信息 -->