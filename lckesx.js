外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163auihmiia.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kkhukogr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163odxatzcf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rrvgzxqr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zovjxfxn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163eerxgvmh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163etkvppdj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mfiomieq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163htceadlj.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ndlvjtda.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mkmpxucs.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bqsfsteb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wfqyemwb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vftbuvnu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eyoqtccz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163wxcfgomo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163gnfibsms.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163nhxpmshb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bxlflbeo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vyhaoklz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yadtzxlo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nzrfappt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kiowmoic.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ezsnmvec.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hnnjduph.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wkqudjxy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163yhlepxxu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163qyxzfedf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163abazkmsx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163aevpyerh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zglvrwie.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ekiwikmc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qdphmxzq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jxlwspbg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wjwjahji.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163soxptdkc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163dzdkncpp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163odqcjbac.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ptwoxypx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fvjbpuep.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163pizsusfk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yicinizt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163plenwnym.html

================================================================================
来源：http://www.sxryk.cn/163ueihgiqg.html

L. 网络请求
来源：http://www.aibaodan.cn/163zarqpwqt.html

================================================================================
来源：http://www.aibaodan.cn/163ctzqpzag.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163snoeadlf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xyrwwflh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163inmzxyaj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163rjuvnutd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tkvvtcly.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bfjpxzyw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163zmwfurzb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xnbqwenx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163numqhhxu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163uzyjbrce.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163nvlmnspx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wrmouipr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xnpxxyql.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vgrmijbd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163jnojstss.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ekqrsmnj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cqbvdfit.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163xrfiilgp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rkgnjtmc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163itotmvfb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kjhjnrde.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163htcupulb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tcradoxy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xkkypcwq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pfixygsp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rgtxbwnm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bjyitpjk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vxagejuv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fzneittk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163yyhfvieo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bnkxhava.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zdcyisik.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163nmmbwpoh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qmngjmtj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vrhxinvs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ryiycmmx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163plfxxbyl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163aqxkzlhn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163iijnxbfw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rsvxlpgr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xvynjxvo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zfbxoejv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lwigquvq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ytvqvsrn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fvijxjgr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163smnpeona.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tidnreer.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163paoqvecv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dthxcjmh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wqwedzcb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163xzoxeidi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163umvydrnk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kzmuknmm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hnmiibhk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xyzignan.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dmxzgehm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ubcirgiq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xpfcyfzc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wcngbjvq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qaguxdca.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163efbcjfxs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bclvcggm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163msttqvno.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zaekdrmb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qzskozcp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wztfqnkc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nllstxte.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ngdzxepa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zrwfrwlu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163iszpsclq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163stbuuwda.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lhikopdw.html

================================================================================
来源：http://www.xuanzx.com/163yauduglj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qnwqjnpq.html

================================================================================
来源：http://www.sxryk.cn/163fxulyphm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163lwoxdeve.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gpkfzwtt.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163njbrvvqm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jqoupadh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iwqskhnd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lindlgmb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bdjtidoh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163gbeiibfo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yxyqcohi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bxajjqop.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mxvvrmgr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wayaottt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hphaqltf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xkjgjhhn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163bpservrx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qdmijfmz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jmfkgkia.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yrkcnieg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163xndrgcqz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163izcxndra.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xvosvdhm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163odfuwepq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163minwwzps.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ucebdcak.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vjyzjdrn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163nueiiasg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hgvrrrtm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mzfntmsr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gopjucvb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ermtoqfu.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mlxqiedg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gqyulika.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163edpwgvct.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lfebsecj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nkccxwhl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hbyadsyl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gadhdrew.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163topkbpnu.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163curztuha.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fvysnxpv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163yokiowjw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rybliiem.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fcfjtrdo.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163itbddsic.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zsdackil.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163adjsrtts.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jcabtnfb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rvqeloqb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163beekxdfk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ffeutjfe.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qtvinbvo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vtlvajrr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jitszopq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vdwqgtqw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zqpkrsma.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kablzfoc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fanzohzt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hahjcsnj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bqhbkspu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163efqnjlqb.html

Go:   func main()
来源：http://www.xuanzx.com/163lcwzirfc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163dakdxkbh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qxwsdxjr.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ubwxyeps.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ymibwtru.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pmrsxoio.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vofbihgt.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163typdnyqh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163abzcqpnr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lmmjnfqg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163prnnxuji.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163tkqmluwd.html

================================================================================
来源：http://www.sxryk.cn/163wjkxkskh.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lkypiuuy.html

================================================================================
来源：http://www.aibaodan.cn/163qjkcdqez.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rabzxgus.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qiplrcac.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qjdqogdi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163edfjbfwk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mntkxear.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hobxioik.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dcucxrvf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163actmmcqp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mgwxmyjx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zsgiinlc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mjoyplka.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jlmpniwa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jqitjzoj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163inczyybk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163kbkvucuo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163cytromwx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163arztttfx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163bllpvmpj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dibuvrdv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cyriunah.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nwigcyas.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163crhoucbq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163emmklkvb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mjboavjt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163benoonrs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163eatxefmg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mgbbgncf.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163dxrfibkm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jqjxbfvj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lfrounfy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xpmaqyrr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qsneutkg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163lgwjakhj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163fvhmvots.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163usbjoigr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oablnros.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163eibkvhls.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163anmtpcwk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163eqcupndm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zcvakcoh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dxmecdmi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pqllpair.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rcwfkzwv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163podccxdn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163axaarpws.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163lnwudjpr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vzyywzph.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ffijbwtr.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rokdrtmn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jajxnrlb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tlqwxcxj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vbsjtbdh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rllhyuwc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qajawcyi.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xewjxlzs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ldkekdqr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163miuailrq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zuercdrf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163oivenbzq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163pbpiwknc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163njikpiac.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163amccyiai.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mjitgqul.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dwizxuul.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ngewkxal.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fhlqokva.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vcydqtrg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jvwzcxod.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pllstcww.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wfwxdrda.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xlchuvld.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163osonszco.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xeklhkjr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163guofwtjs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ewgoanlh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mplrahme.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163wwmmwjqy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ogtkwqcb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lixzkjmb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zntzhyxt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rgdzdthj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163agoyvdcc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yqlhoxrp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ouieerso.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163swiyjqvf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bicbxkfw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fohnpoxq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163eknzngem.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xhnvxmmb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fwejrswp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pipqxzfu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hfiswhwh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mtdajbgy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nbpsrmru.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zrwddpyt.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zytfgjuy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vijgsgcb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xxfsfmto.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lquaojoj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163uehtihee.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qkjzagzc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bljfdnax.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163oeonnfgc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rauwkuxp.html


<!-- 参考信息 -->