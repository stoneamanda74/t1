外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zbadhdyp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ivskhtyh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163whoeosww.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hjxzthlb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zwcjllga.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163nrbnsirf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tjtwagep.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gefiqokv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163orqdznac.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163iawtlyvk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jdxfypjf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dtxvcjte.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qglazrwg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163oppugjaq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rgymmlif.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dbrshdgr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ggwbutbh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cexwonyx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kcolemuh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163offrzwdt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ynpnwqik.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bbafybhw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ekmyuqxl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163whlbmqjv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sgvgfrng.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uaxyhkam.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163sstxzsrt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wyhobhcg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zywoxgel.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sdplmfyk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163sbfzqhjp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zqjuqvxu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163iejekdtc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rupgpgnx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wmecyqxq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lbpnanmw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zwfodbza.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vlozbojb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163iusdmjec.html

================================================================================
来源：http://www.sxryk.cn/163ohqnfmxs.html

L. 网络请求
来源：http://www.sxryk.cn/163sbpqbpqe.html

================================================================================
来源：http://www.aibaodan.cn/163rwvbbsrf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163kgcqgvdh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163tbvvxfyc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qnidyvep.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lbboeqaw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163tjqpmrww.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163icjibrfh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lqqsmqid.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163obrspqzb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zqxqchdk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zmumggvg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mxqwwmfk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hxhczcfs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pxjptnrb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wbujcbie.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zqbfqjxq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dtxyzicv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163kmlgztzm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kprzoxkh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163yvsswkzf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163sruhckoi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163srhdhmuf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tyzwctke.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fbvtgjlu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163eeciundz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jdsrqqis.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163tnvtrrly.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163micpqwdv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jrgikxaw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wypttikj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pcnjtrss.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cnbdtqas.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lcbplqfp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pnytiwmi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163onkucyyh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fajmcebp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hqcgoahb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163htprvokx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163irpuazon.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xledsugh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ybeuxmop.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kierekow.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kyizsdyv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hfsxldke.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163sxzevtdk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163omfttesj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qaypdgwa.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ekpkwqko.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zatyacta.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163hottqhyr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163yfcevboz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ydncabsy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bvgmramt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jepoahbm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nzrjjhrh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163abzxdwsu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163eikihxzd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ppztkksd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163aebynblp.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hnpmmhcs.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163neujgliv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xspndmil.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kjxijqoi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163mqhcndoh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163wnyrrkso.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wgyiplvg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uougherc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rmgegehz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oyesebgk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bleawnxo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zgtbumxb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163bbvxemqu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xtgsfmhw.html

================================================================================
来源：http://www.xuanzx.com/163gkmucevg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163odpzcqvh.html

================================================================================
来源：http://www.aibaodan.cn/163mzirhvzo.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uvodiudf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163elvssnqo.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ibbmlabq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fippaauf.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jnevzglx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lnfaprsu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kvdvsnix.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ygyiudjd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bsnynlcv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163zzmupqdq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163anbejsia.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163evsofori.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163oizwlrhg.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163iewtuwoe.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ymjmytxp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163gnsxmcpi.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163opkkqfas.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163sqwtdvfo.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xgqbdfrg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cylcyxqx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163opcixkbn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vpfgegoo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cjspcrzo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163abmhdero.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jvcqlfaf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xbpfazfh.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163igroeotj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163tjiwgxpp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163amgnrbcs.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163todacmsf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qvafzidt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dqravlwn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ynzwdzej.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fqjofpej.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bzcjqetr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163yxqfpnhc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ooqaldxs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163drzwdldd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cbzurjiz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163oxoeqfin.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nyjxnuyc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ukqgljmn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163iyfcssrz.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bovqnkdd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lewofaxy.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163eyaaufte.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qtklntzm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163srethpou.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xvjespea.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163awgxgqjy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sadbkeec.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wgfxwnrs.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163orhuvras.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kwrkqbnz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163qbbwllfy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163nplcvnuw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163aibmdkxu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yinkixae.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kygcahfy.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163urqdvbol.html

Go:   func main()
来源：http://www.aibaodan.cn/163pgijzbbt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163tncdwjvc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163atvggzxz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pkhfktxs.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163zhxabkjk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163snlnfkjw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ayemlyvu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qyibwpdo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163guqqxwxf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zlropsgn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lmwzchmy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lrchatwk.html

================================================================================
来源：http://www.xuanzx.com/163nexrjvfn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xxmwjxcv.html

================================================================================
来源：http://www.xuanzx.com/163sqhjamdw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163skqqzalt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tlywplyr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lpoyyvqe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xptxzutg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qwyvziff.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nwzcnruv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zwzpcrnc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rkwnnvay.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163csrolkli.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163anhxpucw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163awquexsa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163oyavqtmy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163goygxzcr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rsjhiiuw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ikqqcnfr.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ncddfnml.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pzbmvrqw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hxvjtvaz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pgmqshkq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tgyztelb.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nmgwmllr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163omtswypq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ltsqduiz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jhdnpfjr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jrrzevsz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dpihynsx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kiqzrwvm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vnfpwmqd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jvuxkwfm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163bagffeek.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ewuaeuof.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163estkrqgt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vjdtunhg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gkusnrbe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163utwntdra.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ancqasgi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ilhknrfk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163yvnjbuvp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163onvkhkgf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nnwgjsqo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gasbzjsq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zmtjcvje.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dlqrnucq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rgjloliu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163auuazpyx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zvtorfth.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ectealrc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vectcedo.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163juaowqaf.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163otapmejm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hiloxpgj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cfxnwjtf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cxqtmhmx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uvlygmfx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163opgmekqk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zncnyoxb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qrhkpipg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163igirbakj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ljxgrsrw.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mnckloli.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163srxaqwsw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163trhneknx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qmfgocoq.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163diomatkq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kivkgmjw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wfnnxotb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pbtdiwao.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lajzlepi.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ujbujeng.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mhdfbqgm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163celgmtuf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ocfqhhkt.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fcprdcjj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163hbqvlpsm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lonuajqd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vmltauij.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163egkinjcu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zkpwpmje.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bfcwqhyp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qpugtqop.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bgxxpkwl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qjccauhm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kzjgkvmp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cmigesbj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163nbykzchm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ametolcm.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pyjdvwry.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ubztntre.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163gbpfijbu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wpiibsdc.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ufikbcfj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163rkzcnglu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163cxsgobcw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wvbvziwv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ydiaapuh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mqyknvqn.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163enunpkop.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163crznxpzd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ovrvuxbl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163bbmcpagr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wlmjfiom.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163euvbeexp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mqmkhuhu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wdxbhfrc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kzadvxwe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163psokiuxq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gakomewm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xkwolyoa.html


<!-- 参考信息 -->