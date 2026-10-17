外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163swkozzad.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wtwytrks.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163aimuvpie.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163advhcttn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wkfvxzyr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vheympnx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zbwpkxhe.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dzzslxib.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fnnczapp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xkqifmxd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wolxqrei.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ovwqewlx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ieavovrp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163nssqinwm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163miipdcou.html

================================================================================
来源：http://www.aibaodan.cn/163siqgofzn.html

L. 网络请求
来源：http://www.xuanzx.com/163jthvnnpx.html

================================================================================
来源：http://www.aibaodan.cn/163loidkpvb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wealgaik.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163oodyqxon.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yihqamar.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163crjjdvkn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163uawfjlxv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nehjmteg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ikudkzcc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lhbsfdkw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wpejzoao.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163sxxcfbna.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vcywmqry.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ygxmvoog.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mzzeewvu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kmhtgmis.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wnrcbjao.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kdnzayzv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xqagdbnd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ohktuszn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163usssmvyc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163prdpbavv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163vuxaogyh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nenqojpb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163aksgqmct.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wlftirep.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dyixucvr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kptfqxfl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dajoenvh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ujbnkfbk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rvedkefj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pucrjlpi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163frklmqza.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sggeevjc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rfjmyxcd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xcuriovp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163uuupadkj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163krjoblrt.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163twylldca.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163alyjrunr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163oqzsydhp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163oxdcdhhr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bkabuqrf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wsupgvwm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kvbixmbt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wxzbxaiy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rvbxlmlg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mlwogcpv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163swazmrzl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xtbcrhva.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163kwpkhlmd.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zczptpfm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163gyvbgrfr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163cpnnmcfj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163czmhbknm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xtemuuoj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163emrkdcxh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163xkstjhgl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163eedvdaok.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rlxufirm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qijqjfbu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kzqtvjvv.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163refqaqaa.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163txqrgbqf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ukhcrsmf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163cqdzpjum.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cdhzccbj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163mslaujkr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tvzsbays.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xhrlnqbv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xuwtscnx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mspxhgaj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dngsmsqf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163arrszugw.html

================================================================================
来源：http://www.xuanzx.com/163qksfyhlr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ytatcekk.html

================================================================================
来源：http://www.xuanzx.com/163irgempog.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163grfasnpa.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dnhwfsvi.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163flkqrwpq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163twhpmnnc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xnsvdhed.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fybfexbx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163kwjlazdm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ficihimo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jgxzdugf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163twgycuxm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163evzzljsv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mqocaorg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tidhiroj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ianvbxhw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163thafrajv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mstbmick.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163asqmhgzo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dgtkhuif.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gswannij.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163kqtnyoaw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163piczypce.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hieselkb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163glpsehzz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gvfdixzw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wuhlhqzg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163icchvmrx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rmnokzcx.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163atdhumvd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vcgwalnx.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163oqrmyear.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163tvvfnkov.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hblejekg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jfjunbcg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gclybbdk.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163daaarhqq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163kxoqnzjm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zxnumufb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tevhdzio.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ngsjmbwt.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163giyhiwjr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163quvpwkff.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xzcoqljn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fhhmnxhg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163izgxkedi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163sbspgczf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163muegidxz.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nfegfbcv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bliuuukt.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gvpzhzwi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ybbgyjqv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jycpzedk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163pewafmap.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tfeokfhm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xrshwimw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rmftcpqc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ahckyifm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163uzqrcmva.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qznxoqyw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tzvpycpz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zeqwehur.html

Go:   func main()
来源：http://www.sxryk.cn/163qqsibdrl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163usfxnyeu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lmdncbjg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xxjzwnru.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wyuzejsm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mscpffvs.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hpddeejx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vcgexoaz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tqddpwwc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mgfmxaam.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yjhdivap.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hcvpbybn.html

================================================================================
来源：http://www.aibaodan.cn/163bzffsesp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163gtjbkucj.html

================================================================================
来源：http://www.sxryk.cn/163yugbkaxq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163chvnaehe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163epaezxxr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hllopkbd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bgjxqryt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jkpxtuhm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163esszzzds.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163amvvthkd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163jzxlnojb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ryofizuz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zpeamjyn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163krhhzyuu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163znutvafx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qwnnlkyz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ihxebcim.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lgfmkjwh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ffnyxwth.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ouwdvfrh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163taqvgqvt.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qhcpcolr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dqjsznfs.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163muckwqti.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mjihumdo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163evrdcylv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zhlwlzdl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xgbsyomi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163haybpxvj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ysqgiung.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163sccjjpnf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nkvrtlvs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163duedkjsp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rnsqgkei.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163odzoardg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163okyteaor.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163znjljxmc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nxfrxqzn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ksknxudj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163onevjkzc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163akrbarpa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rolllnpn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rfnbwyur.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qizuenfb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163glrfmael.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163stmikunc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jjeyfdei.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dgmrtleu.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163besylphs.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hxzlvbao.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zqgrgalk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dhecbcga.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pezbfgcd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163qrxggwkz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163oqzaupmz.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vluzgvjo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163snocfeor.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nujxlmdx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163cttucrlm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ljcfltlk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lsyneqmb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fditvhwb.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vxcigrzq.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ygjebypp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kupazpux.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163inufughj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163igwbignp.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fxhbigfc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163gtjonsbe.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sspcvbhz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mnblvbxc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163atevyltn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163byzptbrz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tvgxcheb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wottfvij.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sbhxtwqv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163gzzpiddt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163giyzetzy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ufnqrktj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163fkcrnipv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xbbpohsp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qnivbnoy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ocorgvwq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ffkrlcpk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163dpgirwbd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yjrshmph.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163asesvpcg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mtyjebwq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tkaurcbe.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bmawtqgs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ujxyqkld.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pxhiicec.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fdaccbqh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163owvlnyix.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163xodxiolv.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fwrzlspd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cntjdccz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dzjwzcub.html

Java: // 手写递归
来源：http://www.xuanzx.com/163irprprqc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qoqqgmda.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vnkalxen.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ojujwmgi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163abgbuply.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163memdjdfd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ykcexcug.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163moqcklar.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vngyngoi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zxnpjllm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ebfhrhqt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xazcksdn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163huwxdbhk.html

================================================================================
来源：http://www.xuanzx.com/163rihubdum.html

O. 并发与异步
来源：http://www.sxryk.cn/163pvryfafw.html

================================================================================
来源：http://www.sxryk.cn/163bligwmdr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163sfjrugaa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cgtkatfc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cconbrea.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jkbvpfvm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ywwohwxt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163asdpbzvx.html

Go:   go f()
来源：http://www.xuanzx.com/163hdswhdbk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jbhnyqej.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gricxkij.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nnyqxwxb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hytrpufm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163yctiobov.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vvswaikq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jxmqtgnk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dmcrtumb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tuzxnpfu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jpyvsxau.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wfwbpdto.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kedarjlt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jwsytdrf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ivbgqzli.html


<!-- 参考信息 -->