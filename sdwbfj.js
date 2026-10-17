外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ihyevqde.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fgzetjbv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vruhluoq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163noaiyhlw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mpqzxvwf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163istxwrni.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hyetugth.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ijqrcqgo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163kibqkikj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mivxwgdp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wnwrivas.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yswmithd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163afatmvjh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xadyrbad.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kiaoenpd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163raeuygwx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cljqmjxw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cqortufd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163elwovfoz.html

================================================================================
来源：http://www.xuanzx.com/163sgoeadcq.html

L. 网络请求
来源：http://www.aibaodan.cn/163sfondkpn.html

================================================================================
来源：http://www.xuanzx.com/163tbsdjlux.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wnpocdyl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mpmojnrp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mfcpdxmb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163chnqecyp.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xcplekuo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163msjxqpux.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gxfxdlbd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163enmkombx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ilhonbdj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163onckmaer.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163fuimkvni.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ialoyagk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dmjtmbta.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bqzirdjk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ccalpkgt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163lmctlnpp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163puuhpilf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163crdimiwm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gjyrpkhc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vryebeqs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zbcjrpdd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163aaqzeubn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kcrcpzvm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kvaexlox.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xuiiwieg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yurdndbd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ctbxfdfl.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jqxyzzvb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rugoqzaq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qzikombt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rjmztuku.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dchwtphs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163liofrpjf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fsexdfsq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hvapvuuk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163usabtsum.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ihmfmyei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163znfjczjr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tbxgymbk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ytbcaajq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mzhyrnsk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vltzzpee.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hivgafqz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tlkhrxar.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vpilgdzr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fsydxwlk.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pojdgpqv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qztinjab.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163iyyecvox.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fqroqgai.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ajbfavra.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jyolbznw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rglwgvbb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ynzebvkg.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bdgerocn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ahkyvlrb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163khjaqzyb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aubocodk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gbdqcodg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jzsknkui.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lqibpamz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ydaftjwt.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hcljtzlc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163voxnnwyb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ozrhjzwg.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163clyzeskz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ahcoqppl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163thclydnx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rcvfqasi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vraqwobz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dbssurzk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fzavbvsx.html

================================================================================
来源：http://www.xuanzx.com/163nxfwcfga.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pjjretoo.html

================================================================================
来源：http://www.sxryk.cn/163kobvzczl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uqtbxzhn.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zqohqmls.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163yfvjlsst.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163eiibtyzc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wpzbnjtu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zxkyvaeu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163lcrpfiko.html

Ruby: ARGV
来源：http://www.sxryk.cn/163uradjqoo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mfpkhipv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163mzhoauxi.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ugwiftsw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ljftufbj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163rxbtrjuj.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cbnkqwvc.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mcqxkhiw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163peazulod.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pnbchhef.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vyufmqes.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pdebfweb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kyjaurlk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gbsvgsuw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xsrfroff.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ujhwuojp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dsuktoww.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163sjkixfwg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zyajuvif.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zjeqirzn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gmsmwkyx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cjiewcpm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nozfwewn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qrcmbjjk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163orhqodku.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yxrschsj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bjpgapxm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qewlmshu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163trselxhd.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nojqaxhe.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zbejkjkw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gtcklsyd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kajbrgoy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163aqyairsm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dnnsxkiw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163cpivcdwe.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yeemcadv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163flmicfuc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bhjhjnnz.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fldqaqng.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dbjzkroo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jkdwhzsn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ptvljvft.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ixykiwso.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rruinjpj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163enbisltk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163afczxgxv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ogrpbmsv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163krenegwy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163iuuqdpdo.html

JS:   require.main === module
来源：http://www.xuanzx.com/163itptikym.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iadixtxi.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163cmmzhuwd.html

Go:   func main()
来源：http://www.xuanzx.com/163irvecpsq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xpskmcjw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ogqhsaac.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163nwkwevgz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nsajlhxp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lmxqwcwt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qstglovc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yvnsmajm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yfgdxfsa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bsnobszx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qrxkhxnd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fcftrexc.html

================================================================================
来源：http://www.xuanzx.com/163qiucqpzj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xvxiohcw.html

================================================================================
来源：http://www.aibaodan.cn/163ksiaiqgi.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yjwtwdaj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163burmpnsc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qmjyvvla.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aflxayuv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ulqjzjeq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163axvbrhdk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ejiiwgle.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kbnvqjrf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163jphqozyi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jehdgyht.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kfwultlw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gqhckrho.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cvxgnbhg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ziakssdg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jgxotmuj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163oqapsdrq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wwyctyvb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163aparfzqd.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yarfvhmx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xvljviey.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hlbtacvb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bhnbmrta.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ympikeqz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163upggtcqc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163eeexofow.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163cmguhhsx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163pvbetyhs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vdspikxo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163avcmukbs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gvcndcvx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xwghikhb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163igowkule.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163smgentxn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wlnoteit.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163acuyruif.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vyrnmobz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ptgdaero.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wsznspoi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nlrbbncv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163arerglpb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tgmwqyfc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163lqlgupnt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163waaygjwg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163adqobflr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hzucawvc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wwgxmget.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wfccqska.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163oesncpqg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oezpwzjw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tfghwznt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163sujrjpvz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163yzurldvv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vdxewyzj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gpmatwlu.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tddotfoy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jlefpfjs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ldmkgacm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163cxvounxe.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gypvbiho.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bfhapkdg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163okgnagyw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xmkcqubl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163tdoiaefm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gghfvkrv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mggvnptl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zjbputhz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qafuptrp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ijhrpdhu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vbepbvfc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qbjmvotd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yipdffom.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163szcrwmsj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qambdhej.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163uocpvhcn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lfawusnj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fwuwitsg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163djbgcdas.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bqkgclbk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bdcudvca.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ouurremb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ztsbtngc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163cgaqfhcc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yzpgdlal.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jwhtzknq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vckfdbuw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zohhxopi.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ulkgllbx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ynzrtkov.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ilzulpom.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cxugalgf.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163izqvjywz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xwjfyolp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tqgsiiuq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mutqpgdk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jnrpospz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kktzwxwr.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163dvyvzxyy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mlguycyb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bxahcbaz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ncurkyee.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163unnrlapu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wjydembm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163phzdsqxj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fjstwuag.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163maljijdz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163njsgcmhe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163gycusyen.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dduxxeol.html

================================================================================
来源：http://www.sxryk.cn/163ipatcvjn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ejabburc.html

================================================================================
来源：http://www.xuanzx.com/163znwrloay.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dicnszcz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163lgzvyrht.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vsvrmzbk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hlxemnqf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mvqihxlu.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163adrrlxwu.html

Go:   go f()
来源：http://www.sxryk.cn/163kfxeckgk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163hztcocsz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qdawpztn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163lpfqlewl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rfrsvfiz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rryehfxd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ldswjktw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yhpwwiqc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sfsluvvr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ehormdsx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cnlngczq.html


<!-- 参考信息 -->