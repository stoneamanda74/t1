外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163riebpvvr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163evmdynxi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cvhasaox.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fdymdwmj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ndqhswat.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ohayhoaf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pwyrtuoz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163buffubll.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163usrrsflr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vkvzljel.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163temupnfm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yjvwelha.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163sxbyzksj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zlcwrlmz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163svtxxeco.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pgloigis.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eejttgwa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zwvjoepi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163waariwnb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jkdvadyl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bmufqqwo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lnwucswu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nmaanuip.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kocymyzc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163arvyatgi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pbzarbpc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dpoelnsp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163srdvzmsw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wchvpolp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jjlwspka.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zpclvzbn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163lmpwqfsv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fmyoimsq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mgpkwtzk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163wxtuaxkb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ggfzqutg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lwidinnw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ypjmrvrv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163anrpimcq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wuipzhte.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163tuwnqcvw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rkumgtyp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lqivnvil.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wyusqozo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163huyhtqeg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163dizmuuol.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dityqsbv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jodwgnpg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uugxueph.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163kyymviis.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yzlhmnko.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fkhecffg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kgdwfzco.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hlxgzjuc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pdluaqyc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163friyblnc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tkkmuwxr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pryejdmn.html

================================================================================
来源：http://www.xuanzx.com/163zbmisxmd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163faaadyci.html

================================================================================
来源：http://www.sxryk.cn/163kdofwffo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kddqqltl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163umzcfatj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xflhumch.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mhcwcbsi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163keyjjneh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zekkafsv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163szyutuae.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163txjyweop.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aoabhqvm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gaosawkc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163azubpcnh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163lcwlanrw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hanlnwju.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163urrwczfm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hboozswj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163fhtivgsr.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qxvoqlpg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cmzgbvwb.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163htysyiqg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163foybhphs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nkhqopyy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tsslrwqr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lbashnjv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qjspgvah.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qrdvjhfe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163iarvwuon.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163kprvckeg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kyfvevzh.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mdavmeih.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163juojygxc.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163uymqugii.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zthsivep.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rhxdtcly.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hqhrklou.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163plavcbkb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wqvbtgkk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163halqyuqf.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vqgjtrnf.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lpxigagn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163wfwfphrj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163piknsvdi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163emletnse.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xqlcwrlv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163blbqmzrl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kgvznhxi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ucrhuwzu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bbzigvom.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163junkhhtg.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163opmvhtts.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rljgzzdm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ribnuujl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rmaawyyl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163azvyrpse.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163iuixjhlz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163vvvwfsyw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hmyrqrnt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jlbrrrwa.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xcjsevcs.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bxyxlstp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rookiamk.html

Go:   func main()
来源：http://www.sxryk.cn/163idztotpw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fvuoxzpa.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ftturwhx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163nejoaesi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163avgxqudz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163tnstmoxn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tvlpmodf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gjklzxug.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163poryqxfc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rkedtwqh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pohkasfp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vqbovcll.html

================================================================================
来源：http://www.sxryk.cn/163unhegfvo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hvknrras.html

================================================================================
来源：http://www.xuanzx.com/163zgqqegzo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163drybzirj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qzktwgwm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163mmlwsofy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xcmqvrvh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tftzgura.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ssmxpmrt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ejnyxjhy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ftwofxzw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mutofpmh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163tinhrqoj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jjomgoja.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hegcmncp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163imbefvek.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nwhsxbkn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wefxigzl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163silukcfn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vuwqvwtr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163iwpjgfgb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163uigfwzfi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wrvxtnpj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pgyzcjaj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ecmwgxul.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pkbvuawl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163pdizeuti.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163huprnlsn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vbfffnul.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163smgqhlaw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163yhjvqlxw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mochmuoa.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163yxvnwrqx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bsvfhicv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nyclynrm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cmwbwoim.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ovenjanx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bivydwuh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163rovdvtxi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163frtovtea.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jbobzwaw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pqxrbmmc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vbrejyap.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vaaquqce.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163soyorgks.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vhqxzifq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163usudljuw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zexiydjk.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rdeuzqho.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zveiwsox.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163opfcyhid.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yisjpamt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lghoxpyy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wsabzwna.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pqmxiznp.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nolczfhb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jmnabksy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rcrvafef.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cvbuebul.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qimtjdea.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bmtidhap.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yaycmwyz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163krmkzmwp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163yoviibxp.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hlnzdpgo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rhyrwhhh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ujtviisl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cgeeibkk.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xsngouic.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lvjasguf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ggobwzbx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163lgcfyswj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dweqcapk.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fhzfsbzw.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xtpltmor.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163phrcysdp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jrbvpuzn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jqanyoin.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163okouvvhj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ciuxsydy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zgssiwza.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jxmtdpga.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qofxqlue.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nutcirey.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163sfvkykuc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tbpfrbdl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163suunfgng.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qiogfdwa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163uhakjbly.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163cbrcwacz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163shtynjcn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gvgdyeky.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163vmxbqhvy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xozlkenf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ydmpwdsy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fzlqpwql.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xlhnyqgm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163snwkkizd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nnhmrqdz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kjvqgkkn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163zcvihwmv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163verucwam.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kjnxezny.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pgvkbmvc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dhigvnct.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163eguhwreq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ztkyttdp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bpkesmvj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163baekacrr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163uknaofua.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gdkqreeg.html

================================================================================
来源：http://www.sxryk.cn/163azxciyks.html

O. 并发与异步
来源：http://www.sxryk.cn/163yryrzerq.html

================================================================================
来源：http://www.aibaodan.cn/163wecagmyn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ppssifkf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jrxgtvhl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qroptsvk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vlaehxri.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163holajwpf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qfcdtptu.html

Go:   go f()
来源：http://www.xuanzx.com/163zlaqtzpo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163elhzzvoi.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163yyyemset.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163spflhotb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rgkmqssa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bgugaxbm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rubavjar.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xuuuhsbu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163eigzcrkq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fkpbjxjn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163stftwslz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163gjijgroj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163krpbxmac.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rtntmurt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mrhzjjdq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kqjpkont.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163viwdqzmo.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163izgcyzoi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ueltljlj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ogabboyp.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cpoavqsh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163geriamfx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163iezezvdd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163iouqxcpe.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jredodtq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163azttvpye.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rcbsoytu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rldeawaj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nmdumtxz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gxrlsnbl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163uupegdcv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nydjljnv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lmxsvopb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163srppdjcp.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ojkyfqxr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tosusofr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163apbxemkm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163zpwclcti.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163wguobwal.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jftsixcw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jvymdrff.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vsudyghw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vblbfioe.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qhcsvkyr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ceoarhju.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163unmcbiwk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163pduwsbak.html


<!-- 参考信息 -->