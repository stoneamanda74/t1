外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nuydvrqa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163aomscrpt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gxxtxwin.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163sdhhjmzw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163txwxpxkp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163plfgeppk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163yobvioyl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163nkqdkesk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163orrczckf.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163qsabqyll.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yslcbysa.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kcrcpumu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163pgbvcvhg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163elrullhm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wqzmkchd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vlbwaapc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zljzwmck.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rstguwar.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xjvignxe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ebqoksea.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163reusnilh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vesuwevp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mtrumpot.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qqhkkrab.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gpenwmqs.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wywsecaf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163immfutqq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tmisbfut.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yoojncxe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nhljgmjw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dkxuooer.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oexuducz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wsdlmzoc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163akhkybwu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163cvfdmmyn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ldumrtfp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163traqdspn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163smiwtybr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163caaffjfa.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163veuavvba.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163wcsegqmr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gxmjphfa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163itjlpsve.html

================================================================================
来源：http://www.sxryk.cn/163hwklpzln.html

L. 网络请求
来源：http://www.aibaodan.cn/163ysnonkfl.html

================================================================================
来源：http://www.sxryk.cn/163tfvcrqzs.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ykxsfily.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pcbbaysg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163tuglgnch.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163oibzkwro.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163heyotfxn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ztvddecf.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163yqivbabu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tdtcizkw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ebktbgnr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163nwkwcpvj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xrzwckdb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163aivbnfxl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ngkrlfec.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fyhgradi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163atlsgnju.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163edeglxpz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xrnjyjgb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ufvwglmk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gttpocwa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bsqmowtb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163eimciqzz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sdsptdqq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oxtndvjr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cpsojtkq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nobphrve.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163upocaana.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lhcfmdpc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163crxueein.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163likytxgs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163beyjokjx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163icdzryuj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lyrhdlpr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ibwhzkjg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ayngbyrr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163sllyyvtx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163plcshzqv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dlxpgfhn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jcjiovyk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163fzqjmvil.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nxwkjkbn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rhqjwcxl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hhbkxfec.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163vhisbalz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jlmpqsid.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xdwkxxzv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hxszidth.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fbygvbrn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xkxetooa.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jnansyai.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163sfhomgwb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163womhoqdw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ynenbvjc.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tfavllur.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mpuqplns.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163etbpwlti.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163hfcuustu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ezfqiwnb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wrbtewoo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pnbakjgw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qhdbnpqs.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163oiikxwzm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163suqbppwf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163cmcphjel.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163plvsjrnv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kryuytjk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hpbfqzyc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vgaglqzu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nbjnprzt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jtiywpic.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jtgpfdcp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163xroneqek.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163leefhqsc.html

================================================================================
来源：http://www.sxryk.cn/163qtgxeqnf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qsdzjnqt.html

================================================================================
来源：http://www.xuanzx.com/163nlhyvfnp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jhdxuehs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hzgidowm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hkavokny.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qbvakrbn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163evpyaxzp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163csjabyoz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163voczcqxh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ydwsqsqk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jaujfmnq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xsatohwx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qjvdqlmq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wttwygul.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163bhofpdkf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tppkiizk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163pfsvxgqu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pfvklrwr.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wrhxywoo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163jycgcrst.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hndxhdfm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pjzkxonm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tsadunde.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163whainljx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qtlrrqmb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ftjcxbyn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163luwsoeli.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jyxkmqwi.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163scvznmuk.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nmjttewr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uukvjsmp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rvvgxwdd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ywmmodtg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fkbunwzq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mlcgobwo.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163bbblmqwd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qqutqsrl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jchgniht.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163elfyzmwg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163cdofziol.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zeasvzuw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163gfvardum.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163egavjyyd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163eelgmocy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qghaiwzn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163giicihem.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rvmqzmox.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163onyljwkr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yalsmcux.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163onswxpwa.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dlbjdgep.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ruvqfiix.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wtdjdfcj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163glvdrjnq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jgnicwho.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ybzqmcug.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tpunycda.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zlqabzou.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lrfkqrbq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nlnpkpaz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vnvjrifk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zukcdelr.html

Go:   func main()
来源：http://www.xuanzx.com/163ziyaksyg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ygdronna.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163zgugbtfu.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cwuaqifk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tbqimmbq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163prjyiymv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163acrxggpe.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dubbfomp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xzykbkax.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vsvmvvhq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163onwzrjsl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163crpvrtkl.html

================================================================================
来源：http://www.xuanzx.com/163dbzrdrct.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zgqqabre.html

================================================================================
来源：http://www.xuanzx.com/163jgtszoeb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cjsajnjk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wpyrhhbw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163elgmlqum.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mormofdd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jbyuwdkh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zavixvem.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qgyytgdq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jzvtdkxw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163paclpfyq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vtejiwsa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hiqapeju.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zymrxkjv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mtojpueb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pziyghfx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mzhscins.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ifalllys.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gvebturz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ulpeekgl.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zlylthzd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163gaduqako.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163clbxixow.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jnlxcvfl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wzqpvoha.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ofzufghd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lkopncxk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mtttsrnq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jfgetcry.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163fsqunrxu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iakypriq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163tvmmzlaj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hjoglgmz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ukldairo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163derqrtji.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rorswqzt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wrhxarzt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pacdazgy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rlzxgdma.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cxpuafgf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yollozjw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163utgfqrqi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fziqwzpd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163itwcxlxw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ihhmunnk.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lpxjcooj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163numkfiwl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zrjbgrnm.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163annnrgnk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ludknmkj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rfelhafr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163poowlnor.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nffdypwy.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163iwfkgucw.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ysucywzr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163datlvuqt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nylzlbor.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vmqhucoe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bvtorkjm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oqjmsqvn.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xtvcyhsy.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dcqrbhql.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163sqwngbvf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xcyrbjtf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yknyawyp.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163aclfvmfi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163isjkysvm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163yhtrhrpg.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jwphttup.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ptvqthfb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ufdhnfir.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ncscnbtq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mxcxjagk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163heqzbhlh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qmcsdcvp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nevhkmzq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163dijjbuae.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163pqgohnrp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163swgrdhcz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jmdurhjv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qluximew.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163swebbbmr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163uklxzvnb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xcdxcads.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163oerhnkql.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163glrbsumi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qiubinrc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163alhizrks.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qrjukkjq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163asygxzyj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163oxvrrmom.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qzyrnncy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cevtqgjm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163irizzzwf.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jwsoqbcz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kumpfqxw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jrxjstiu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ofskulop.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vizjcowa.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163goypyyfo.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163iipickpn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vvuhomcn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nouvpqcb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kogwyjkb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sliqwcla.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ttergsds.html


<!-- 参考信息 -->