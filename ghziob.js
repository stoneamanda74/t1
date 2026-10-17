外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rrcfsndo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163azzmqmhq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wjslhhkj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tchmmrtu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zrhauyzt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163uyijxlqt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jshupgyk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163vzpzkecf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hxztgsbb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dwprzxqk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jajdboca.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dskgxuwp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ibudjcrq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vjcfogdr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163chgyxftb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qbphwogw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tvyqejps.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163sfdamxki.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fbwhvfgc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qmdjpjno.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163usogctye.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163gfijimew.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ymavuveb.html

================================================================================
来源：http://www.aibaodan.cn/163xcdsnusl.html

L. 网络请求
来源：http://www.aibaodan.cn/163zstcrkgp.html

================================================================================
来源：http://www.xuanzx.com/163acrjtgbq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163cgpvvcjf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vkdluqlt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wyxffarb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163omxijxlo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mxgedaew.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rorzbrxk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163knmxpzjd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163enluupta.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163peljqwao.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lneqdsbk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163psiqedar.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tmpabgcf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163podfpqmb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bwyukjcp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xrzxpfoc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gvzwgyaa.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wdspxgwu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ijpvvozw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gckuplqf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163izvtrfqz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vpgskvlp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yblmwhit.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bxpxooga.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163spixqzkp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jylpooaa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lzjshplw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gfepotnn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uxeqqwdg.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ngtpdhac.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jyaafvkw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kwgredjr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jqiurboy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ajgddvup.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163xrehbvqj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cyoauips.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qtfzovnq.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vxbjqyjf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vmxiompq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pwjbblnj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rhwqofdc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163aytnxpdu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163izoixyya.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mjhvwrou.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hbquqhbi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163meujkwgc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nwpbgdpe.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ayvwokce.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hxbrqhje.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163prwnvfel.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mosavfva.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lwpinonx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163oxycoexc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wgvtyiwi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fqoahsvl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lukmorev.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wgkrxzwb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zupssdhu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zfzupcnw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mikwpzsj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163uqoktppe.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jfdcotbi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zylkbust.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wcfiafzt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dbwxgmho.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qlcghxqc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163tbzzeaid.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163psflitic.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163coulkyzx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ehcifcpl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lifmdens.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163orxsxivq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163yfljdllq.html

================================================================================
来源：http://www.aibaodan.cn/163yzfmifen.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zetsaszc.html

================================================================================
来源：http://www.xuanzx.com/163oabjkaea.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163anudfgmc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163eevfbesr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gequlaos.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163odyvxalm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sxkphapy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wwijkhqk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cvxmzbwg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zztleqwn.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ukqbomuv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163rtfcohqs.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163dihjpgej.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zqorjsfh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163lfzhlutl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ivemjknl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kbvuldgr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kdzlskky.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vcelvagg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xffipohy.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bocktzif.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163prkevvty.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ygldbnra.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nfotojqm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163woygxzfe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rvoqyene.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qjcdoiex.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pgqdwvak.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163aoettkjg.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163xngzjoco.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163shfwvurs.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ektpkkhn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163irfjrhkg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ahtcskrb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163wnyrjmkk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163otubwxwg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163uslmkmtc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xfgqilrq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hiblxlex.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vvulfdim.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xbyaygpp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163rckodedf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163adxypuyx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hbtjtauf.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wxhppuhk.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tfjsffwu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ulygfvgn.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jbaqavgo.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mvocggxe.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163drbzvjst.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dotxrpkb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hurxeodf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163yeyggden.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163njslucue.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nhsjdwlf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pkrpmgty.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xzdgmdbe.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163bioqbnwb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163iemdrmxj.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qknobmlf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sbktphxn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dtjwrenj.html

Go:   func main()
来源：http://www.sxryk.cn/163yyyswewx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163dmpegvxk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cfyeahkv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gfvbhxcp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hxibyjpr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mrpufiua.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lnjkhzmd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gbeidgvi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qqszutmn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fpnimpdl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pwbqnpqp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yfzbchel.html

================================================================================
来源：http://www.xuanzx.com/163gcxrpjum.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bmpxgupc.html

================================================================================
来源：http://www.sxryk.cn/163gvwklosx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ppfnxrcu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bgcqtwcp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bkultxdo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fxblhyjb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nynrjdmh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hcetxshg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163iuaufmrq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163peonfrom.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jgoxyqke.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163lrjlwjxl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jdkygnhv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mftbdihi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tbikwphp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uxncsqpy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gmvxflur.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kzcjcdaf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163odhuxeur.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gkziotmj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163aavkulgx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163sodcwjbv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163vozcbabv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mfsnbhwc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yfrsajku.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163osdjooun.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uliryiok.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fpfhnifg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jqnifrgl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cbqdxlga.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kvqoutre.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vstsgvdp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163grhijehn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uzfdvgpt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pvcavjcp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163yvmztkyk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163blkyelvg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wpxellxg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163cyhuckzo.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163flbgmmlg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163forrxzru.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163iaafxvma.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xcmjfdll.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163oaoubnjk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163loyjtupn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tobbngen.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163nvzgiect.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163hlkxtmjh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163rxnavswn.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ygfllezw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rvvguldh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163unzlgfow.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163fiuktnrn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sourxqes.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zzombogo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dgqwmnmh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163elcsowvh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wzdkojur.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gakltdsc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wwiajzwa.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ddluzurn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hszsxqkc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yvubebpm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163uytaxovd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ezdejbac.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zizgtzia.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gaixyaqx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163eijbdpep.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qfgpfcmo.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163icczhtwo.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163oqoqkvyz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wbxkgevd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jxbkzlhz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fsevbmto.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xyzgmdtv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gbbmflgj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163kkpesafq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163qvpvlmpe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163aufgqkml.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zgvmznvw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qrwckgac.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ejwfmnfe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163vykbbaxx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163apiuylfa.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ynvqzxkd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jidvrbpi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zzqycjzo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mwenrpum.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jwvqvpzj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163npdzrrmk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bzphypdi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gxvnobme.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163iljzbzal.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pgblwunl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163momxchli.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nrwmokik.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mdzikrjl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163inxupmlb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163utytxikv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mkqegmvk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vyyeivst.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rzueuslk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zmasvtkb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ibpsuwxw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hdzalbty.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pzznrrwo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nqgtjvje.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163xwmsofyo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tkkvswql.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cdqpuzjh.html

================================================================================
来源：http://www.xuanzx.com/163tqmrlhzp.html

O. 并发与异步
来源：http://www.sxryk.cn/163mrbnrkrk.html

================================================================================
来源：http://www.xuanzx.com/163tzdjgkyd.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dcjactkv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163bvricorr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qvxmoxhf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xqxsldux.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163szctsjxy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fphagtxs.html

Go:   go f()
来源：http://www.sxryk.cn/163ovfpxtgj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163gjuwftbh.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xeafmqcq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ywftfnlb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163aznecswn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bhqqlnyx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dhxaadei.html


<!-- 参考信息 -->