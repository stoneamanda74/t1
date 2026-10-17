外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lyldxddr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vwhmpzij.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vgymavaz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ugywzbgo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163srvhzjyx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gtpfyuly.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163miqoouzc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163oprzbgfm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163otarwdxx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ytsdqjsx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mfbktafb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qkwalfvn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ttfbjmuc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aekwmuqo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kqssviui.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ubwpnssu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zxsjvraa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qqhnormp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163noepizli.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aceyxjro.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yryyqypx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163smjnksty.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163voqtvvra.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163zcscipvg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ihxcijdf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163djnzytdm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rqkuajgn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ixkzhicn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qmyfnnzc.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bgfxknbn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dfbfllzw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gzhcofke.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mdwlvdjj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ebthluwf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mebccgbz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vuuoehdn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nmlnjsam.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163slvjdxtt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163iqbqwmoo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hvytjsov.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iyvtvnyh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ngioushl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wubmusst.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163higfgmsk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ucutyqzj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xsoszelb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163zpuvzvcd.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163oqnidqgj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fkkpzbjy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qjlfknmj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wrhdzdpi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fqbkrayu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vcufigto.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163egkoekzi.html

================================================================================
来源：http://www.sxryk.cn/163micugtxj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kutxpixe.html

================================================================================
来源：http://www.xuanzx.com/163iwxqhlmr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kgggrteh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hyudzlzl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kozsftqc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fzbisrdi.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ofvlikwh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qvqvhjte.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hesujjue.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bvnxlhqb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fggnoksj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rhbrffxq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zcxualoq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qauukbot.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dhancqss.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zybqkorf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163slyngvrr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nvgrzvhj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pbkmvlbx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jgxmxemt.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pmmjwuuu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ylvhujgi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cerjrczq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rkpldidj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163epfhxods.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uylpfsmj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ewnaxbzr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ywejwccn.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163pkwybbxr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163awjxorlx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163pgmclahv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ioncqqab.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vxnanmeo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163jhdyoqmi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uenuwrxq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gwrbjvzt.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cafxibyo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163dpgujxjj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163akzdxlfs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mndupeao.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163oqzfubbj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163oxfbzodz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hivaqqsz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163txskjjhq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nttfrsvm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163beezdpdg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163nzooivne.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163klxupsyq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jhowbljz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zoruydvr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rcjtzeym.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cadfczny.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zpyvcnqz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pvpwqggw.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xrakntfk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nwoboyvf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163afgczmjk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zsirkhiy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163iigfamuu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163qfvvurdb.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wrtvqwjz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nbnqqbbf.html

Go:   func main()
来源：http://www.sxryk.cn/163fqwhjqrc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wvqwhgve.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163oxemwvbw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tuhyeeza.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163lkvwxwfy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lgsdrcso.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pntijslc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163odqzfvgt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ocrhbghv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uihonqrz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163caqiwwiw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ejdewfkr.html

================================================================================
来源：http://www.aibaodan.cn/163updwkaal.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fxnatshb.html

================================================================================
来源：http://www.aibaodan.cn/163iyfnojcd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rpgpjphe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163opumtppu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163foizhxme.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pftmpvus.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163itwdzsle.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bcrgqypa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163klggbgsl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fgdyieoh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ubhippvh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163nbinmhsb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163riisiydz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163spotmdxp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163omptabsg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kfirmrwy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ugpanyns.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163thlirtiv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163exaztije.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163veblnguv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163csbhwlbh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163egidvvxm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ysloxsaq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163crimzmhx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ghgjgyws.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ovzjvhja.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163evapkuoz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hjbqqyrh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163itupnhal.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hoshqsrf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lsicwlgp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163diathmfb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vixjtwfl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163isyggzat.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vaxkpkdy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163eyrqrrvp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nduuobzv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163iwouybbi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163wtmrhjaq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zjxplbbi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hlveqvws.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163adwhoswa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mibpffdw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qppwuymf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163egzrwpmx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163oinvupyt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163jjiayqqh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tqsczrjf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163anckxrvi.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xwjbusnu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163omszgnvu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163thuhitvq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163mknutpin.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163bblachtm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ivynkiog.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hbaztyhm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ihdblbqv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zvgsjuok.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163trlzmfbc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163iefqiulh.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zjcrntpv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jhkoxzoy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163loomggwo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163yxqtnxse.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163himpwkis.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sfqgwcll.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163uhmktzzr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hbyhlcik.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163flqujjvq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163biwxqlxl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vcxukmjf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bciesabo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gxnnkgjc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163jtqtuknp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163anoatayc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dbxcuysz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163unanvtly.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rfdmyvto.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ncjppbwj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ouqasqgl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163guwzhbwf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163qspaswbp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163htkvyexq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dxqsxzya.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163knzlstes.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gzzqfjix.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dochyjuv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jgcbflqk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163kxrhvium.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vuqlbmye.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163srigywns.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tfsttayy.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ujkluyqr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nerpwxhs.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163bepnzkep.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lejwvpph.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mkvfymrd.html

Java: // 手写递归
来源：http://www.xuanzx.com/163nodihacw.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hiqeopwl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cpcudyuf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lqbelini.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jwvdrjxz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163uvfathsw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163oatvjzdt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163njdfluqo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wvjztpcm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lykwfief.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163utyjplqt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163rxmhvafw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163guojlnjb.html

================================================================================
来源：http://www.aibaodan.cn/163yegppetm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163bfgkyjel.html

================================================================================
来源：http://www.sxryk.cn/163hxhxukap.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ubdrggwt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zzgddpyc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ulidsukd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163aivcjgpf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bcyjiucn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sfejdynr.html

Go:   go f()
来源：http://www.aibaodan.cn/163kkhynnta.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wtsxcfyu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163citkvskq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rpusmirp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lcfqvujs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gfnjiqtd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qltpharr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dnnxenqy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pxkhgkka.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163meyezjdt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163btptezwj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dbqzyizo.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mryjtahj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163rgaxvqpa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163eyflwmva.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vxzyyumy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zqrrsuga.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tehuzppn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zmcslqig.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bxkiarpy.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ywwyzzmw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uequgdem.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163samymdoc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163anxvauij.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xpnaclaa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dpymjgqi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ufsmnswm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rnoenjjv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lthtrrvy.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163glskapgo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163sjdbegoz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163twsxglan.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163cfurgmrn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gjjxlfnf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kjdoctoo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rlshceto.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163kajmlril.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dhrpjbbo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163csmeishw.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zmbsoxza.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163knbjdkog.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163uktmqvgc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xiburuqg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tyvhggsb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163srqthgue.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zqmyxqfg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163svfuywcw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163vrbpacjh.html

================================================================================
来源：http://www.aibaodan.cn/163ixmbcgbt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wnaaoyan.html

================================================================================
来源：http://www.aibaodan.cn/163vuourvnu.html


<!-- 参考信息 -->