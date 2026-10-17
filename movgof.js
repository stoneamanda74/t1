外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jcnikfay.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lfjzebis.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163fqxzyhij.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163altxwopk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zobjiyyy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dwtntien.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lnwubvch.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163efcwjlpl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ypnhxxjd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163opkgbvfe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lzptwtjs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vgdbqwcq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wxfcuiax.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163nubogipw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xbalmyul.html

================================================================================
来源：http://www.sxryk.cn/163zvpatztv.html

L. 网络请求
来源：http://www.aibaodan.cn/163ackkqndk.html

================================================================================
来源：http://www.sxryk.cn/163icpqpaws.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163trxxgcsg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vszefiqy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163nphyjrhj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163drywpjft.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163snzqgfyf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kjguwabd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163negkrtnj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ohhsultx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163tjewleiw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pvoqeqku.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bpqikuee.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gojlsysh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ztwewjvb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jfkwijiv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nplviect.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fdbwwzze.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163pvboauym.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163cbyclqcv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163pvuevkfi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163aovdsmyx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pzmkstmh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163seazrmvo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qopwvkwi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ltutyuzu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kjmpbvee.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163soyiqadl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mkaduhwa.html

[L04] 设置超时
来源：http://www.sxryk.cn/163klbxozpq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163njkjxcpv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hilnznee.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bnycnotk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ujiycilj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rqfygsap.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wwnsdjie.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nwnsmqzl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ludphuvs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zehozabw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tiutjett.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rhohckqz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uzxqpunh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lekqlzhw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hhuivevb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163phqvpvcr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nswlauui.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ypphmyxb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ikkmdchg.html

Py:   resp.json()
来源：http://www.sxryk.cn/163npuhvgoq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ojokmrkl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yesjrmpn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pgbmmqom.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ewgxubzx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wmlbbjhn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rdaxvqqi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xwinwtzm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zmhhxcyo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163dbpahqfu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163odvfuojv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nlvslnen.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cufudghv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fjibibdi.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ugaklozq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163halvuygv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kzmcmkdb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hoxhfjnh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zwoyzbhg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163hxybmxob.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163efwhxikb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nmncexyt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bstobhek.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163weklozhk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163soarsiso.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ayzovnak.html

================================================================================
来源：http://www.sxryk.cn/163cmtpibni.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163evstgbct.html

================================================================================
来源：http://www.sxryk.cn/163tfstgftt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xzbxhrvj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163wetvixty.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jbubycae.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mvgditin.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nmnqkicv.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hosuuyhe.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163saqlvgpa.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ppjvrqrg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qxdbpkce.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163caztjxjj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jqlfztvu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rkqiymrq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hgccpwvc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mutcfeph.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jigpwdqb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163hnbosysw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163koleeoic.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163uvltuocr.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qpgmjmse.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ssqfeypz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xvslengd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163owdiefya.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163amgetzjl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zkdbazct.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163eqlzvpaf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jauxxjdm.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ljwqucbu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163alwqjuky.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bvmfsybs.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qkklgurg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163obrisnox.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fwqjlphv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163coetiapx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163szlvtvxx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vywgbuks.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hqhmlzrj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rgmyapjo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wczkdxxj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sbuhlvbu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qxyebeed.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163firoutpy.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kfvpugdz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hqjbtsoq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163regyxhcl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qxhmudwu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163eqhlijvo.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ccyhqbqd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163stohvckg.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qjymikmf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bunqftmi.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tfhowqde.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lwjwzlcb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rsyirnvg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ynqjvtjk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163huvlfrut.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wbykwfwm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qgyrjsyl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kgwhgpet.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tthilglu.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ugzvkfut.html

Go:   func main()
来源：http://www.xuanzx.com/163jqkerzdf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nwavslrq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ijimqimz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mxtcffgt.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nelyvwqa.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vbscouzi.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hythtugp.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ecazruhi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tfmzfqyz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163akylgzdx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163idkxowvf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163aocuneow.html

================================================================================
来源：http://www.xuanzx.com/163glcegkfo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zgcllznu.html

================================================================================
来源：http://www.xuanzx.com/163guiidxwr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vfkxdefg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zztxavpo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rynjqvxi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163utsgkhdj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163icytdnbo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rddzjmaj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163txzzcgaa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hdleopzq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wybnlszh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xpbxogvd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uuyrtvfi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nkvdvvxf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ftjubhnc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nxipoacx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163atcbzqjn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163amtisldc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163onjxqduy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jubzinyb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ulaefnsc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163guryywlv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163onukcafc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hxdimbvu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163syntwwfc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vtpfbvoi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pwpbvfbv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hcerotwo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ysixzuja.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iuotvhvw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uqdtntam.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cjhhbcrm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hwrewjys.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ymlfiari.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wufqnppo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163acgyrcff.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uxksebrg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jwbcotrd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163mefahrjk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tenjpvmj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163notdovoo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163olrlflhn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vgcybrqu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gmoxeuab.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ojwzwavo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zgeolzqh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163phcpznkx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gsrwjazj.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163jglubjvk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bnspkbyx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zkspehsk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wyigkcdz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163aoublmvl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163aboumzpa.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163smrjdwzr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ngsncrkj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jrmcguta.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163eikkdccv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ebsnligy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rlevbwdj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zrkapsky.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rtrbdkch.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xxtzzbpf.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qaalynqm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kigztbxr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lwllmhhw.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zhvmbhco.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163klgxbbwq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dzwncjsz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eqluvdky.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163flpvtzqp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163srmcswuz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tqenmsjn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vbpoedhr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ipxduuwr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pjaklrft.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yudfovjn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mjpsqdnf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163egklgzzu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yxytnoeo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ciprcuev.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163weuefxtn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hvdojuca.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163rovbmckk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163miicgpog.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163mytkmasu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163yspvwcvp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163akdqfral.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163whkivaxj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163njcsytaj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ndcelpyb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wvoedtqv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cpgrbahj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dkxkqngp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lmbsrigy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tamoroki.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rgudhziv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rebwpdxk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kvkqqkoe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163dthcuaiz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163srpxovmt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dvcnkthm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vwffnecc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hivspzsa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dlwlgkgv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vpufaoma.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cobyugjv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wxzwwzuc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qevuewrg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dxusqxec.html

================================================================================
来源：http://www.xuanzx.com/163lmxsogsf.html

O. 并发与异步
来源：http://www.xuanzx.com/163ouaetifx.html

================================================================================
来源：http://www.xuanzx.com/163xjqdfkqz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xbwviost.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yvescegc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163opcxocma.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ncvevrvs.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lsjmisvi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dgxtqgzb.html

Go:   go f()
来源：http://www.aibaodan.cn/163jjhhwntu.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163uqktzebi.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sqqoanut.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tzpzcgxf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dkqcegbb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163iymrgbwd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lslneigi.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ezgrvfaj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fefkhbhg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163omddrcbd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hhioophl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163duumcjav.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lkiyjzdp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dsbgsyuw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qoqefvkn.html


<!-- 参考信息 -->