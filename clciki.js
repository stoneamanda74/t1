外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tbtcxyyb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163oetfdbbg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ewgrkwgx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163goihzhss.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ojxutfmh.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163almakfok.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dyesxutf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163orxsinxh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163wqsiherc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163fpwovuby.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ihaouqhu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163tniecqva.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lkymmegx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mtiyawak.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163psanbpwf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dvjjyncm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163expuatki.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163aigixiiv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pluwwqtu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mvbzmubq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163stpnmvvc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kalscrul.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tngrikag.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163huvddgsa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bvxcdodg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gciintck.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zwxsucyd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163syayckvj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lyqkxglv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pmohearj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163awpporfo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wypcairf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163phdhpgps.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bhubxqdr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gghzxidu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rmyibqer.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163alyxasjo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ehfdjqrs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ncrijftx.html

================================================================================
来源：http://www.aibaodan.cn/163xejmfbig.html

L. 网络请求
来源：http://www.xuanzx.com/163szvfzule.html

================================================================================
来源：http://www.sxryk.cn/163zmjxbmhk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163cdfnwgzh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pdchlabz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wtwwfycm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zmdwlmri.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cdzgumto.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lalrjcyk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mqgswngt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cspfmkap.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fxtbnvvf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tkgadtea.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kibpvckp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163acwofnib.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xxcheyub.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fcskncdj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163etcxolst.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dklmqhpf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163otjstesi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gxethayx.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163jhsjugnc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163esvuoetf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mihjohkg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163thligrsj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fhdmxcof.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zdnxspfu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163gkinqbhf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163aycbhrbg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ikaziobu.html

[L04] 设置超时
来源：http://www.sxryk.cn/163shqhgike.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163szamqjom.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zhljfwiu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eglyxsll.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yraeewtu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163svcgchwl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163pqaekgvk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ouglsldt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wjkkrnap.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dhbvdomv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ghwczqms.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163woxeqbod.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qbkkvtps.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jsuqamct.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163wjrofjzp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cxcwykfp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lknpkxvb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jqetwoni.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zetotwqv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163uakzxdxr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zaizujot.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163wbetpujb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hcefapbq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163zowjvjxu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nrerzmvk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163isemzrqc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kilynqxx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sxdsapji.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yxyzijbz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163nyzugizb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xdlsmbaq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qwtzhrpy.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vewhmlpf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163faofdfzr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163scadrqlq.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163optabcab.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ehxqfbzw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kzittldr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163nwyhdgcc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ibbwygtm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163klwzoqaw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rmlvbpnr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163obvqvixe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163faoomjhg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163buzgbggh.html

================================================================================
来源：http://www.xuanzx.com/163dqiwqqtl.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pqalxjjb.html

================================================================================
来源：http://www.sxryk.cn/163lbuvcbqy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zfhuhtbh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163koxflacg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ywhbsdrf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kcfoktpr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pcrzqbsz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163osthplky.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163elcsaouq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bazszxng.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zdthxelv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163heyglxwx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163krmcurvi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qpkvyulz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163txyuwuec.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lfakheql.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qtpdkriu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fyuhiegr.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rdwxvxoe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163erjvigxn.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rebkhbou.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163blpxiulh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163eudwuhyj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zgqplhbb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bnzplmen.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zthwcoqg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163edxezrqz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lzvxwjvt.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hgqrxblt.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163oypygidx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hyqewxzo.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163bolcfwdr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ynjqybbx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rmchrvyl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163isrypntz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fvekjzuc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163aizeobwi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163farhdrsm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yxxuyjbi.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cqcxhkyw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ieqgbont.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163glyhqpld.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163innnmqoz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mriadgan.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fpyqykgc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hbqczdun.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163refgtsch.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yphxjqio.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ynijtmcc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163awuzsuyy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qchzaxkx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nvvbjcpa.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qyvtmbgm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zwxmzmex.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yjhlnvmk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163htovnmqk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163rwmzeebn.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cpstyrjg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rzlumhto.html

JS:   require.main === module
来源：http://www.xuanzx.com/163stcynpdy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sahjpcoc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163guyihlep.html

Go:   func main()
来源：http://www.xuanzx.com/163kfbicmwc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bkzcdrfg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163dcqujtfj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cwmttgwv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tdasfuyy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wxlmbqdw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ihzbgsqz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kzkbilxw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ggpodkpc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163iurideoo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163avkisbcz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hrbmbjoo.html

================================================================================
来源：http://www.sxryk.cn/163ttpfrpzy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163lqnnkozx.html

================================================================================
来源：http://www.sxryk.cn/163uorwxpda.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xniovzxm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yhknikmb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bpajmfhb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rdunuwat.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hdgimxhv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163acztsaxq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163fgjowscl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fayxmnqu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163njwkohvr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lvfwpjil.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ielbjmnz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qmqkqhcb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xmrrigrt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lmdwbinz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vnwrtpda.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zvapheql.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ynhlmaus.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jxbpjuyb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163seepcrun.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bnrqeqlf.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bfwotkus.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sdiplvrn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ryyfzzan.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163autoomsb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pllxrzyi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rkgmtetz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hkmsyejd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163slvykrrh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hkgjkxyo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163skivaqrg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hkkadxzf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vwwzoaub.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qcwahyyi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163squvwduz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163alvpevlk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hdheyhrb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bjcrgclq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pwsnjeys.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rekarnhf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xtsvhksa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163huopigbb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mvkehpcu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ctmsisvu.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163sgkvmgkc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163brkgfyxt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qhgmkxox.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163suzoexaa.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rlxubqwx.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fqmtznrn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163corxmrcx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163opxiuywt.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lyjhueer.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nvlhicap.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163klptwwtr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163kvsszxii.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163igsimwlf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lbbhozyo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163vozpwkmt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yrzisqbh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rfiyfqba.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163nucxgbtr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163okshaeel.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163iuaskvhf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vbwajatx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pjhrmmqk.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ibnlzkyg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kahzeoka.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lkffcswc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qvrrzakv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163apbbhhfs.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mjxzsnnk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163dayivquc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163epswwath.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pnhjfjgs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zienxbqc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163idqlvedh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pngiccjq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vqagptwo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163axmqajas.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163hsweonak.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nykugwsj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gvvdbmhk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zbcgjnfk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hfvemito.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fzynqtzh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163oivgbhzb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163arlnrvwx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ngomytlz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dsoozjdx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163nfigkkso.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ukcstanl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kgyyovcv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163depsuzgh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163whjvgthg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bdscywan.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pbbqlkgx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cyersctq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yndsfgmg.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163aiojzlec.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mnkzodel.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163afdomiyg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163xxlvslpf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sjbesyhf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163azlyhnyk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gwocyaea.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163envkczoc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vpyshypf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163epncblmk.html


<!-- 参考信息 -->