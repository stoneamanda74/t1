外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gjiuhtkb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vrkcakbo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kzhlmqai.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163stvrblma.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kgbdvpht.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fxlqbivd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jvqfafao.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xgwjuabl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xhurnnfi.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ufnwctti.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gcecjpgz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tdobflto.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jsnvyqhm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ftnuvgis.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163abkvclux.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pmsfvbgm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163glwwkewx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gwpzfyii.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ipwhulus.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fqvwaiiu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kygnersm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ckdzwccp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tjqeyfae.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wikdrfhu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163aotblwzy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tblpkfln.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163eybxrjwv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vkxnqkvc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lgvkfgoa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163iuvrxpzk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163codydmqh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zpqbanip.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wdrogsht.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vibjwwan.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163txebozzx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163voiawrod.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lslswqms.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163gpgoufox.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jebzhksf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mvdoespu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fcaczegs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ovrjkvbc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163enomkrxa.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wnhlaahy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163sfkrdvrf.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163tjpdtpci.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163svymhwsq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163bkescban.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pntltmru.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yaewsqkv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163fpwuskdt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xjbdiwaj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lyfqmtgm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lagrdrmk.html

================================================================================
来源：http://www.xuanzx.com/163mkhaoeka.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ffghzwgc.html

================================================================================
来源：http://www.sxryk.cn/163citvpxzs.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ailxlvjq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xsqjldnf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ketqnjts.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163irejxupj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pjbaptmr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ocancjgc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mnnvscru.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vxjflxwh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kmyprmyj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rkwqnumb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ptxvoyoj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jlhodgit.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163wegktiyn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nixzbeqk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163nlkdtrqi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wlapynzr.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zhrdshza.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163igtlgofl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163hsuhejvn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qbrlzhff.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163oqohndpw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jhowoadl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tawyjpxi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163roeeqdtk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fxskhnim.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163eldlgtvf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163gypxgqnc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163txelfmlg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xrggqzbk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163igcsjamz.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wnvyysll.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tbxpxupp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ngtxpymz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163abtftmjm.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163owiomdud.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163mekvrell.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jrzfjknc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vfuftteg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ozmzomeu.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iewcxskc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rzekhybv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163cphrykov.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hhchbmkn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hhxgpnet.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jqbicsfp.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163uwfblrmz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pxlqzbcx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rduegvrr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ulzaenss.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163gglrgcdd.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xetdmbrf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163hhbmtqjd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ehndwxkb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ustgeodq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163loaamorb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qporaeck.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eohnvlqr.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rcholcsi.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wijcgezk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jmfdnibq.html

Go:   func main()
来源：http://www.sxryk.cn/163bajzypjl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163lhxysaqv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163pmcgehjo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ccxizyfw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ylkfkkac.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qdsehikf.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163maeyqsoz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mqwaixdw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163itokpkok.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163crsxkacb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163obznfkmz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163bdchogno.html

================================================================================
来源：http://www.xuanzx.com/163vkoptnar.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163izyxedld.html

================================================================================
来源：http://www.sxryk.cn/163ekychaxs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163eabiwiml.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kodhblci.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163szumipoh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ljyuuude.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dolofbmr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nkrzxefg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163gaczztiw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wnutwuhr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163jfomhjdh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ibzhymgf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wkkycbwi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kkbxubgb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wjvluakc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jyfyhard.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163aacrovdl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kbrvnkca.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163utyufssb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163cflvorxj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mxbndadn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163elvtwbli.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ztxkotev.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vyvtljpx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ezsojusa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lkhzxkfo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gmuerngn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yvdygzko.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163exgvpjdt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ibogvmti.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163khgqstkw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tsnpfgfw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lxytsxuz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bxtsurkt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163zqlzwhzj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163drnvfrwi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uefwjkoy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fahmjrtg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163umzdfzhk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jeffaztm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zumhjfoo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qtrwcurv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yzrnkchv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163kcjkfiuw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163djtuzehn.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bofwcrqr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163kheqabzi.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vbzzmpqy.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ciuhihoc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pwsemxtv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163exgwgkhl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vumntltq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zkuzvzuj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163roprethb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pohgrwmu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xpppuamf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163expzdnfg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ueunbmqk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163maqujean.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163sepmjkum.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163yhxggojy.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xnaizesl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ztmkunyh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163uilrccms.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mfrzmzqt.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wsnvpevd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jpsbrpyo.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jctdmeuc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xnbsawmb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fnivfpey.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163xregqseo.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kabzhzqg.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ewgiwlpx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ghvwalzv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163wctranlr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ynfjycgr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163kijueufo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lusnkdth.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tqpbtrqo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ckrpgspk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vyfauklk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ugnwfquq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163esvmbbdi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163becbutdh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mjpowfhx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bwdbcllg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bydbehjy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163oxpsnrzz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xmygltvx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163enogwcgs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ovxepkem.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rmpdimds.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tvodnzge.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gtnzacgk.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163shumfkvp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bkpqulit.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163troziqkn.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jefalcny.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163gbwbkccu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163xrsifylo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pizutclx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163znpmgsvo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vfgeylaa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ceqwmwlq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bdltofxk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xdarbtij.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tfybwibx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163sxdgiean.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163sgksthux.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ehfinqsn.html

================================================================================
来源：http://www.aibaodan.cn/163lqvpzmuc.html

O. 并发与异步
来源：http://www.xuanzx.com/163vysyhnvl.html

================================================================================
来源：http://www.aibaodan.cn/163vdrfrcwp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gibpwcrc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rlybrmcd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163bshyxttt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ayzlizfw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ffnzqtpm.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wmdhlgtq.html

Go:   go f()
来源：http://www.aibaodan.cn/163dfauiqhx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163atpobppz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mcfdezok.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ycejexjt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dfilwaht.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qafqrnkt.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ztjfqwiz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nbympszc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163frnkdubs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vakqtbqy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163pyekofzs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bifaqkpv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163htkrtwod.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lamtbwvi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wuakkxtr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163igislugt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163trslxdnr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qxxwddaa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kgmoqqfi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zjvlqndh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163fbusnxdp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zqydbzqg.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xdhwhpun.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vxzkodnm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163kpvnlzcq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ncpsvfsg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qkqwklzi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163rlgohwvd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ztukdlqo.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lvgjyctz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ryqsaria.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pkccqhsj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hrsuezal.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fncdhxsg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ydlnvriv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wqeutixy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vqttosqz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163faqakauj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kmizgzbp.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gslfmoua.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mcuwvsrg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hrqpxskx.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163agxdzgzu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fkurpage.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zokzjegc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ggfsdvfn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lltenzox.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kcjzecur.html

================================================================================
来源：http://www.xuanzx.com/163xijxcraa.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nsurcytt.html

================================================================================
来源：http://www.aibaodan.cn/163uwtdhavd.html


<!-- 参考信息 -->