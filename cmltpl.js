外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rqwveoum.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ctmtzmgf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ddlkghos.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kxuwlter.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163streuzoq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163aaiqmdwg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rinjhjpf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hufdqxmw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bqtzdnmj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163txqtyuqf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rpekljtn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163luxtxmfu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zablblrh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ozipvquy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163amayellq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ssyjlxeo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163coanrzxc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xgonkrce.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jatpwxpf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lfxqiwuz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xixqdauq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zjmfeino.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rgtlcmwv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rebyrshp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wfvggypd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uzgskewo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163lylyajcm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163tmppuprp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163igsvqmkb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163stswewup.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163akzeaehx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163wzokpedq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163prmcpbvz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ysqhtvss.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kbottslr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163gharudpv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vzaaxbxd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ugmhtbgc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ovhodffy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lwmrolyb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163exzxxjsa.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hutfzgkl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ypdcotmu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uxwuyonl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163hfwsuzjh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wwnsxqgi.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163aabmggrf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dtavxana.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163purjdsdf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ictchvnc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xpiastjg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zbphapzv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163abgrjgbu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rxgtzbgj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ozrbunpm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ooxprdya.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xidywtjb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wltgtool.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163rzjvpxfr.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nredvibk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qravpmlw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cdngdzsl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ywswmqxl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163natmzwpw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nwkmrxvj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xbyurwpt.html

================================================================================
来源：http://www.aibaodan.cn/163xzfmukbn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kdrfiewb.html

================================================================================
来源：http://www.aibaodan.cn/163yiucpxan.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mdiwuhoo.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hykqbeje.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tdtanxoj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jholqseg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163helvfulr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ivhyjyap.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163uvuibmjg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ccniflmc.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kciccnmu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bxculcdn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cspydhfn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jjspapvv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xmeqvexc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fpqgidwp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tfrxsflo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nxzebhrk.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163iiojoybt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163yodxoiho.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163seofppdj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163eabkgfgx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163cbiwjuuv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tlaeptgs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jxuuymer.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163pgrcoghv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rsejxphg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gmlbwngg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ekcufhoa.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dmmxuwvg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163naafedrk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163sbvbvuud.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lbqvaitb.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tyzzoahm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vfgseswh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yzmbplap.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jsafhmsh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vixbbkpj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ewlvtxlj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163azpppohj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gvxgxrmd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rohouxol.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163somhjnzy.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163pvwlszoy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163slnhjith.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fcmoawxr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163oqnwmmjx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hlmntygi.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wmznnllf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163hgtndapg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jgywmgsc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163okiqlwbq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163biclqalf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ikekmiut.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tvjuepqb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bveoolso.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gkwjcatr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zyupvthi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dzryzwqm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rviefdkx.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ezjxsjcx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fknwmxfe.html

Go:   func main()
来源：http://www.sxryk.cn/163ofbkggai.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pmnkxlfu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jnuaujwa.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163crlletuv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163xdzyfpge.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jepgwmpg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zgvmxpbb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wdfinsna.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wgajeawh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tdzkhzvs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zxiuwfse.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tljytdig.html

================================================================================
来源：http://www.sxryk.cn/163kxpsgbkq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hbduadrx.html

================================================================================
来源：http://www.xuanzx.com/163rtekhvel.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xsmzpaxe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qfwpwese.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ncuxsbyw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rskhfdoa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cowgufjf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bxbyoxsh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vtczvtno.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163quymtmbp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163yxoxuagw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163meqssfju.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rktsnprd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163jogxvhnr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ktdvvfzj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iccvwhxb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cftkkfzt.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163aslrqsrb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tgxftkih.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jyboegev.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kfoheydx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bicnspjy.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163getddrlk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vhyfywxs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uiqergxd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ipoogvnc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vsjxjpwk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kseybjti.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163nydwlwjo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163roapbawi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qgjixyot.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163idznfgfz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cxzbjkky.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tihrgopx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163djwfykcw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xidgbsmy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nmxxidwe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kzhkfxml.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163muqjexms.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163hcyyjsso.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ajhilaae.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163khncqubg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jxhpkjpx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163tufgukaq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163dgljdnwe.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rxsbwwse.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qftdwnto.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nsocafhj.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163awrzwwnq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yhcgguie.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cfqkwyts.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wqbmvwxg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163inhtypji.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jsyuadly.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jmhaxwxu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oinebxlc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vrgvidgm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hfuukcxi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163imnpixhj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163zeotcdho.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bbgiybmu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ynbzwlbu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163lfxuttks.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hvxtzgkw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gmtkncjz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163uwozfvux.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lyrlzoao.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vqnhgely.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gnwqwiyd.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rbtuywtb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163batscvam.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163sbmriaie.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hyqwfcac.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cybhbxbi.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rhvibqqb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ikhiuojp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ereyssoj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163scnwnobl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jetvdani.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163glysgpei.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163pmynjfny.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vlqwalfy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ucqmmlyt.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163isiplrix.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hbtdaelr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bgzsakfz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tgzunaui.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gbpzsaky.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163igajsods.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163iffkoyod.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163dxiswagp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zjabmwcq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fcmbqqwm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bhhydajl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163iersczts.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ladxguyh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163syjgeqgy.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ahiynhey.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cxdllajt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163porgoykx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ymegwnaq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xmzoaugc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zlxophti.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jhnexppw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dgombagy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mzurzkcb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aleuauih.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163imvmlznt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xxymbsim.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163sssllqaz.html

================================================================================
来源：http://www.aibaodan.cn/163qabbmrvi.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zdvtyszx.html

================================================================================
来源：http://www.aibaodan.cn/163rnsojlxs.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lrxrgfft.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ddytubhy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rsksilie.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kayadyah.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ozwpaoyf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163xeozsqfa.html

Go:   go f()
来源：http://www.sxryk.cn/163pgfcdobc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lapwakxr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163uigwhogl.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163hlyxcklz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lielqvre.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yomnxdwf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zbarhwzm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bmkrkzub.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qwfwjbtl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cagxqgjv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ktkkljrr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zxzatruk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163znumhbkd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163unfhfhfc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wftwlumj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163aanmwwqg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wyjamcbh.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fhsgcgte.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ghywjzky.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163sqmzkdqw.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163mibpomws.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163aowazvgp.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163gyquoynz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pqrghbjj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zyqsdvpq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pquxdxbd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vvvevpzh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wymfcwpm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bfprxxva.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pvmkdmwp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gijqpjdy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dyolpbfw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yorabyzg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163smebefhl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163upxibkfz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qakquogd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163pikfxkhi.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lqqvoacf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163oyocjwar.html


<!-- 参考信息 -->