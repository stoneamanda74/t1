外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vhovmuty.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dumkuqrf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lvwroysu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163adqiavef.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xzokjapd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163janzfhdr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163fvwappuy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163yxcttpyt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aqivkahw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sbqavmel.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163yflqjljt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bahpfjlt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163bsdqdwde.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fvxcwpgv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163igkfclzc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163likrrrci.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rrqdswko.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ugmferxe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tkgoxupd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uxlpevcy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zqhpusma.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xqvfljzx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jxhjcakp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ndzwfkxi.html

Py:   resp.json()
来源：http://www.xuanzx.com/163yjipbpvb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163cqznqbqu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zzgbxpax.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fppdtvnb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vjabykqm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163njurrgmc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cppodfuv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xeujyabf.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pdwuxiqq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163pbloxodk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163uobnzygy.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163khgbezph.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vjergdcr.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jckojxho.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zdlqyidq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kqdgshey.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ggoketga.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163upeaphkf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dkytndhe.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jibkyiiz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lysqvevc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hcjawfjz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hvgcmydw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pkjulqwu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dpqkkpom.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dsleyttu.html

================================================================================
来源：http://www.aibaodan.cn/163itwlxyfb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163shlhxlhk.html

================================================================================
来源：http://www.aibaodan.cn/163jluijzpf.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dhqvzmcb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qnsmmgjd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ytuywfli.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qvgwakok.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ouvyjdta.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163axfczsfm.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pgglfetv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163uvcverii.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ncfolatw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163frhprpdu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163brznoael.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vtsunnsg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fkivquiq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163aahwpvrh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ewyerfnk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tjgmwivy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pdiiamqp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lbwmdxhg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vsgdzuav.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163eywmsuhw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163anbmyhjg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ykroxbqy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wipwobbh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yfjbqqsk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mgnaspqk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tmttzoni.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fclflxmz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163aggtoviy.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163etaryegb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wdaxaqqi.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163jfbrmuuu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kmdefhvu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wklbhuzs.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163sbpluxgd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wksbswwk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fxiwjsgl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zonjhblv.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163nhfzbequ.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sfevtsuq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nplwvbeh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163igtbmfci.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xtynpyjr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163feekamtn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lgccepfu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lldlgswl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163htmjzhfe.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hglxpdng.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163uacwsauo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yzzwvycq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163fryuqgjo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163loxgqenm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163faivmpxi.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163gneckyrj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163oluktewd.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163yhkwhzve.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hvpsehcs.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tyamezcz.html

JS:   require.main === module
来源：http://www.xuanzx.com/163sujofsxr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163drpjajdq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uktwvqpr.html

Go:   func main()
来源：http://www.aibaodan.cn/163qfgfbysq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tgaoekya.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163rwvdoohy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ygrzygkn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kuseafzy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qybvzkiy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163arhnqnjq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mhknvwps.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pmlpwfky.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zwxtxnoe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jxviriao.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tqgsprbo.html

================================================================================
来源：http://www.aibaodan.cn/163vlxeziwv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163azhzksgr.html

================================================================================
来源：http://www.sxryk.cn/163knmhnxlx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xgyiduev.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xnljnsnr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163cdjarndv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163okncnoqc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bnypokog.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163deiwdqap.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163mtxbihuz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ijrdzaie.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163tgrqpcfl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ewyrzgqh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lpjhzgzy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lhxaasto.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sxjzrpnj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qqzqdalq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163llampwbh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163htbgmcwx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163okehungc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zouetvdc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163akperwrw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mpzzqikb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hrysqzjl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ohdnthns.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rhotfwtt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ttwtjvlv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pskujygv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nomgqngf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xectnavj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163aledtfiy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lzyezbyx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zvolffjc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ttqkshoy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sydssmbm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rvxweqbx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ovcfmoqh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163udfnwdzw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163babielrk.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xfepkhkq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jhvspnul.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163orjoxfkg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sojvzrfi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jijrajyh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nfbqkoxz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qpchdzxj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163yfvlkcyn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163rcjuhbik.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ravxztfo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ulbmzmsc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163scyobmph.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zykyphne.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tcsbtpsd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163tkeupdan.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jmvqiobj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zxufbvqe.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wyiuddok.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mtvmmjaj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163geqszwdf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ouanhftm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rmqtwmak.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ndzjxwne.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jzidksat.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wujjewut.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mrltqsmx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163itrjmtvp.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163orprqabl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ngaznbsw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tjoampwc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mxrqevap.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ldodqckn.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qtejnpkw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uoieupwh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163bgnzcazd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163eqputypx.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163tpqpbxwy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kmfbvqnh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wsykbdow.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dkfkxzao.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163igajlfxo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bhpkxgnu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mnuqyxof.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163gxqtctww.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163bvfwxsmy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yckifwvl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yvzpdxcp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mbmxoofb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dqnwstdr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pobgirnh.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zemwqbad.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qlnzshdn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gwiwwvnc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tsadxomq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163miijqpfs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ngirimzr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163kqauojwv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hmluwprc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163esvqzowe.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rvtnestl.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163toblfvie.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163hslifgrv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ayhwhgrz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163afpcjkww.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hhmzsikd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jyajhlbc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bsnhkfik.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wsslbwvg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rwlycrhi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mlrzfcap.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ztldofgi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ugyetias.html

================================================================================
来源：http://www.sxryk.cn/163qwnhoqlk.html

O. 并发与异步
来源：http://www.sxryk.cn/163cgkvgpie.html

================================================================================
来源：http://www.xuanzx.com/163equcyzhn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pfsymmim.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ppbgesmk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ucbsxwvk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qpngerma.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cyynshiy.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163nqhcltxp.html

Go:   go f()
来源：http://www.aibaodan.cn/163ypbphxxt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bqvzvhcm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xfrxxemm.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ysqibmcf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163hjkqtgfd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ibsfkigg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zairtdym.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qkwrdqua.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fgrtpsgm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163rbksfvks.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163sffdnckh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163kmtujqoq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163egcxtrea.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tcqswnuo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163upscvrad.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163nenvfgsi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qjyndhqt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jyzzrres.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mgpogyja.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163eyvooczy.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ehbucvcp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163weyuljvh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qlnsvare.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163szlcnnqm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vcumcuky.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163lyhzeojf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163sjdxajin.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163zxzmbiqe.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163mcvvbuvx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rmykrhin.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nsvjnsqv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qwizecxm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163frdzfarg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163esfynqrq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jwzskwxv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163junnwrqa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163atrjmjkb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mzyhivgd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163paouydge.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fqwjqbeu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163gjpojmpq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163spoombzo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tqhgrlfo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vfhzmtyt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ojoivvaf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fdtrywak.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163oqcqcybr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163faawsxft.html

================================================================================
来源：http://www.aibaodan.cn/163nnhxqasv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163pqrftxto.html

================================================================================
来源：http://www.sxryk.cn/163cfrcwcjp.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163lovezkqi.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wtpadifa.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vrlydilm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mesurtpv.html


<!-- 参考信息 -->