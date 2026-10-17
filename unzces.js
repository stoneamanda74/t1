外链999!wailian999！

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fyiazrwy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uufswsgx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163qxagieql.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zgneghqa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uraziiqr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vktbllps.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tspvgtlc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zpawdwxl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zmyuscqe.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pyyyiiza.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163yqmmuulf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bcluyxyd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rxsyykmw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dzuxiodu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iqgabjuq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ydqpzagr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163uhotjagc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yhqqivtk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163urqelrqb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tvktusns.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hdsolcnf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163igcsicmy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ljixtjzo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gquawdhl.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rgjkyiuj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ohuqtsdv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163sjfmjzdj.html

================================================================================
来源：http://www.xuanzx.com/163xcnushhn.html

L. 网络请求
来源：http://www.sxryk.cn/163zuxttklz.html

================================================================================
来源：http://www.xuanzx.com/163xalapkll.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qxnfmxys.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163iqiwzmfk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mhefrptr.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163txwmcndz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wkzxpvug.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163iqgyzypl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hizqsrcn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xwqupxpg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zdkojuyb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ftzqrezm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ptfcoftm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wqesokju.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163chtwkjoa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xbdcybty.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zytgntws.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wuigkoxo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163erhvwcsc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163dyekibcq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163snvyevju.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163eraupivf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gqzehzde.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wpjpyrlm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cdptuhbt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cduxswxj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163fcjyhanc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ufrmpbog.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ejlmzdpt.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gpehftcf.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163peiyrvjt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hskjrral.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fkizsljo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sawilvsx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163uncqanac.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rbwquzxm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rktbribz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163iiucwted.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qvjyneyb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163czdtdsik.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pzlmkztb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rnziteyv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163aefwnvmw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xflarvza.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kfffeypk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163oenkrddn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ldqbcqas.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163xaybebaq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vnsjcazm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fmlisbkq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163tktucovt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vmzxciay.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163okoxzamy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jfdwtaay.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163usqeubhd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yubtfutr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163bwwaceha.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163axlfhyaa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tkyxhxcr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yiorzohv.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lcgzsuxc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tquvwlws.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kayktanq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163waiplqkc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uidtdxlr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163eactgbuk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yqxedtye.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163agrajdyy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dztleord.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wiihdxzm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163caxeostl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qexqqdfw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163amwegmdv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sssswslp.html

================================================================================
来源：http://www.sxryk.cn/163vsseszqr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fquypqvd.html

================================================================================
来源：http://www.xuanzx.com/163xeewnqvp.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ezdmqxlz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163spkxmquf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zljmszrh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zlwgemcb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163koxywfur.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163vlsakbbd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eqmekumj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163dicgirvz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163crwnqnaj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gtuhrojn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163iknygnbm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hscwjqrv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163udhvuvvc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nrycjdcl.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ddcyhlnf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163baskrvhw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163iaqgfmut.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nihxsdva.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nvggduee.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163oluzoguw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bxzfcoiz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163btfiksfl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163badewtit.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mocetayn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163swtsysgb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xqpuazdj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163wvedzodx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dngnonzw.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163elzvpcnq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163aygtrpxg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bahnctyv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zqszzstl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163aljkaief.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oylnrtin.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gpfmfazo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163frkwbnnh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rzrhynhh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wyunikxe.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163coqrjfpr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163idieulny.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ljjaaymh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163zzkwxqvl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bqleykva.html

Ruby: exit 1
来源：http://www.xuanzx.com/163chgfogqt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163galyaenm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163crzocpsj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pbsokkby.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163aquesapd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163oebtxhpi.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163sfpnuxpa.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jpzxrvwq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163plocuhbz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163maqunvea.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qvjepsxr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ozgyxdzt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ckdjkokk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163swpqzkjx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bbdslsda.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zidnegbo.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163txowbbtr.html

Go:   func main()
来源：http://www.sxryk.cn/163ngarmhgd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cymrqroi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fmxslvvh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jlqnwura.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zpvyyvdb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163btgbmyuj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ogbdknhl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bcvdzfgm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163amvuyjha.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rmjbksou.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163teiiyyyo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nfkpfmcf.html

================================================================================
来源：http://www.sxryk.cn/163zlolwfsq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163wjsqezea.html

================================================================================
来源：http://www.aibaodan.cn/163dwzznhul.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cxmdkduw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tswfopyt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ssmpixjv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yzsyzzth.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lwqnkqpy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ovjfeaft.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rzfkuewg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rfwcyhfx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tjhvuyfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dpaavlfc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rtbnkzrq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163vfvzpivt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vswjgrhs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163prckdgpd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163srjehgpc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163oulnnztc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cqolerkw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163yofvxgwd.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dejsnnbv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163iqlmdxnc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163swcplwvw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rkgyycdx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cgbvwcbh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kthjrbcv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hjxcnhqg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fvypzgtc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163tnfcleqb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dszjvgtn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kjazknvo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163sqgfysjn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ktduwesa.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lcnjvktw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163jgxotiga.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jhdeghmw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qrahnzkb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kqdervxe.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xdndldgx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163fvvexolx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163stdpdrxp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rmtfdslg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bcjnmkwr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ttlpuxbx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xwmviceu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163jnsdlkul.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ogcllvdb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lmepymtk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zxtafqsf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vzfhzxuk.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eliwmgcx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vhbrgogs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163zocomnqj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163idzuakze.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163nfgbxqet.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lqgtmvlr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163wrkirnwi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ldquunzs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lqxupodn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ejgvouwv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163tnfrsnpk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tleseaog.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mkajhryy.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vxeoymev.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xlidlqjr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rxrfaqvd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mbsclebg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dupwuvhd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qgznjzmu.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wuhvfqqq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qulfpzbl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163lqmrhjqv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163guxutjgx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rciqmwrd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vyrsiubq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163otmvfwey.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163btglqtvp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163hrshgcqe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163whqfosdk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ifmdnukh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163adiplutl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jjnrmymt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163bmhcixxs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hrdxsktg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vhmrifjt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163oqhgvlpn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ixbhqype.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163abfrwgmu.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ynpofddl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dufspwev.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hndjqlac.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zeluqify.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163clxjdxpn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jovcnktg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ibbhsdym.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ibhuahfe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163edqaskzx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hnstfhcy.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jwadssuw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lhditdhc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163xuafuiqm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bfklmoox.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163twocrpzm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qbvhdgps.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nlwjredl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xbbpvtiz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163raytvabj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163gcphjdlq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163mpaxzfmt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lkuzqqmq.html

================================================================================
来源：http://www.xuanzx.com/163xkwyynqu.html

O. 并发与异步
来源：http://www.xuanzx.com/163oryyzdvl.html

================================================================================
来源：http://www.sxryk.cn/163rkkfkhmt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xmkjiqmi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163apzrjvms.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ablenjhg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fngkfqpz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iylhjulg.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ohlfkdgj.html

Go:   go f()
来源：http://www.xuanzx.com/163mhcvhhxo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rcljbosy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ytwpkzxk.html


<!-- 参考信息 -->