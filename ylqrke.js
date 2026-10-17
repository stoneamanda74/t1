外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gdymuxkl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ycxfucuv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163rsppprdg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oyqymjcg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hkzbjcit.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163sussgnmv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ylnazons.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dcrosvhk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ozmusqef.html

[L04] 设置超时
来源：http://www.sxryk.cn/163trburoxz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163pwegcfle.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wchkivso.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pxicjjxm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ewqcsmcs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163atwtrtao.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fgiktsev.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gasnrbcc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fbyujnjy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163amhwdvvs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163plirskki.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mdwmykwp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nyicmoco.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kycwfitr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ruhvmitd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163owxrsykx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wqxodnpy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bhmnxnsu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kvcptzxf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dgyyiwxf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mxxajabu.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163loxxmwww.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163otzxrzzy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rfbowlej.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dvuxadae.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163tnmxzkhn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zimgestb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dqqvibvh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163caztrums.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163glmzmjem.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uplugotg.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nefmksju.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fuzkfayd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xeektshi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163lxfamwme.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163awrwqlhs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163oqmrjnis.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163irjvdhum.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yjmmhqfc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tlvtmecf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dthwditi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pzwaixds.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163adknikaq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vifabkie.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163guvtrine.html

================================================================================
来源：http://www.aibaodan.cn/163ztazzoot.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163knphyjcx.html

================================================================================
来源：http://www.sxryk.cn/163zcktgwsz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hhaembxi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dxpemmtq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lpwbldlk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qofdezsf.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ivnlxayf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zmmnrcvp.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163tcdcupwy.html

Ruby: ARGV
来源：http://www.xuanzx.com/163eaawcncl.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gcivffin.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lqdctkgf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163hxsgzhzf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fvuuonns.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163awuanaar.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163trkaveym.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163utmzfaxz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163bfarhedf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qhossqsw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kevjhjec.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163hisjfter.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163grgrbvge.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hfmrnxbs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kkiajyuu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ngeyodlb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vbjihswy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163raxiujfa.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163axhtucru.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qtwkbvux.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rreevwav.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zmbpjvjr.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nhlglkdh.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163epmwujkv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163imbvdrem.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nkmkmiik.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hjvowgug.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fpcnsezv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ebyhjxgo.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sjnmsjhn.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163owqzauey.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eycjmfkq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ckxeocdq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bpspialt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163oahrzeyo.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kyoqipyc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pwgzbjjs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qfigjdbk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pfsognxl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fddhorle.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wflvkytb.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qmlmyglx.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wmysnkth.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lebflvzd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zmufsnjf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lgbsdgnk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163gspjdgrc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163rqtqvmds.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wgwdfkhf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jxjrndks.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zydiydwo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tdfyqlyv.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163kaxnuvwt.html

Go:   func main()
来源：http://www.aibaodan.cn/163uqsgkpuj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163urojzvhi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zdmusoca.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wcuvebxx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163begikbmc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163oepuseut.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lkvxbppl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jjiulqcr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yrcwvcuh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lqhnyebg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163aournunp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163abgafxzk.html

================================================================================
来源：http://www.aibaodan.cn/163tayzfgvu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163fgsgkfvk.html

================================================================================
来源：http://www.aibaodan.cn/163pysnhmna.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wplyoytk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163iansibdw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pwjisjtm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163akfsgckb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qkrbnsmn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bizsgwjq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ohgaqogk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sycfxnpw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cujkylli.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pbcsvpxj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cqpkfamu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vzhiafsj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wlpudyqb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wzyyzqoy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fmuecult.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tjcsvraq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wyndwpbd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163sutcgagi.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dfltjwlr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kzbywivz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bkdhuqzr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qbbgouzq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qvlawclo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163urgvzgzo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163beovimwo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163thohfglu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163djwvllve.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sidaankw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163svylmzxx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vfuzngjk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163igraacco.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mkvyqxxk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gifeuhzw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hnsvvewa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fyvqpdsc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163meqmteet.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hfoywjqh.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wegxhcqs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163eadyoovb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163otiehfzs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wpwrslls.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163odmqaqqc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163shejppuy.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dmtjtozl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163uswsbyqx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163forcjlic.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nquotnzn.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wlzcqcpc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163morhikuu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wsdndisw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ftakiofr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163kxrwweew.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xwttwbcm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163osmtpwtj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163odukvnpw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163fcxzuhqk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163epxnrawm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mzqhutns.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qbkqqkmt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rttezkyv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163tlelmtzm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ddzayvhf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xadghmbu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163opxhiymu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163bpdeyywp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ohnlesik.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163arlvilod.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tijcynir.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pquqeumj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163iqnczrdb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163sxbushwh.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zhymradu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163wacydfje.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163eqgfdjbv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163oxthptxd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xjrexdbg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hthkpfhf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163cmlrhhgq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kwdsmmkf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fekwkurp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gccibwbs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dwheqbzf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hxsholha.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mejwpksi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163akftsydl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nkrluilb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jvoyptki.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gcecpial.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zbmkcnhy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tqmzrfgw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163aeetawnj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163eivchhuk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bhxkdrwg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163svtsrjgd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163oqliumkf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dznqdqwl.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dgpewdjx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163vivnelag.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163rckiiluh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pmullzie.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xxdxcvdb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bugmnrfx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163eokfdavc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kfeybjdf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163iiaidnet.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vlkfeaup.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kfxdoxys.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vrnwaqwk.html

================================================================================
来源：http://www.sxryk.cn/163qvpfczjd.html

O. 并发与异步
来源：http://www.xuanzx.com/163hbrrjmbq.html

================================================================================
来源：http://www.xuanzx.com/163sxpkdchh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gjnksjvg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163tuaupolb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vahaddbj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jkxzyvbc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163crmdzmkx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163arsezedg.html

Go:   go f()
来源：http://www.aibaodan.cn/163dgzlkkyl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163couqkuxy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ihnaoxng.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mznuiypr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163cisbilql.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ozbjixen.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hbkisjzs.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vuhosmma.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vvcsqhgs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ycavealx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163sifonjaz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wbkxhaov.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163qkohelfm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vxeeynoo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163oyzoizlw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163syszqxjs.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mjbxpycd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tvladery.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cxmbxfkm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xoeppgyb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bppwnitg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xcpogolf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163jigpazml.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hrblbcob.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bqypwnln.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163emazptuo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hypnxzby.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ddzqywip.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163hywvjqmp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fwtqsfgm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163fxrjqqzv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163numlbsyt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xetwxpbn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pogdzdbo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163uslepwsd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163udalwvfv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163fxxadrgh.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xvakyrng.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163znedhsrl.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fuvagyqk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ckdrfqbn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vasgepqb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163aejgzcgh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rmpbogao.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gykxeuaq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163shuqlumy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163nnukraqc.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tvoctvrp.html

================================================================================
来源：http://www.aibaodan.cn/163waxqpmle.html

P. 常用工具函数
来源：http://www.sxryk.cn/163iysnolzl.html

================================================================================
来源：http://www.xuanzx.com/163hcafdhnf.html


<!-- 参考信息 -->