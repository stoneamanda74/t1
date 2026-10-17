外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163goiqxxhw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nxwrjtij.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jkemakos.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163yuvbxwhr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163elpmgrsh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ixjczbtk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qycrqkqn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163owpqwdnh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163spniyhqe.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gpuhjwwx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oxdcrohc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yyhigqqs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163blprtdht.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163sbxhouxf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wvylonch.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163straajar.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163lekmnhae.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hrgvzahy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wignwaja.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163whxnxawa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vrnzllon.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nrxdiixr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163usidsasr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ujzauhpm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kfdxzsfh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163zqxxxbsu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vhvxyzvh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163krqeebns.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pcrnnjxc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bkrdnlqj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ghzxaxus.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hnilofvk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163eafioeeh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kkhmoxqm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163huyyqxrx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163grtspqpp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163umxuihyr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hhbymkfd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ntvkzmzz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163geleighk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163oetscofi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163paerxdow.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wjcgcbql.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mjadvexh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wgatnmwe.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163doxkhbly.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rsfnmodb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163znciuyax.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ludwgjoi.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vrgyypno.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163lmvkiplb.html

================================================================================
来源：http://www.sxryk.cn/163zrwxjpch.html

L. 网络请求
来源：http://www.sxryk.cn/163snyhzsvd.html

================================================================================
来源：http://www.sxryk.cn/163gzodzusx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163apoyeldk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pukznrbh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163aqikxzxt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xiwfeuvw.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zdxrrirh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pbyxuswq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163omnetlxy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163arcacwhm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mzyepfza.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qrxlakdh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163hwlywshx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163iafbadfn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163osfpntem.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cbdirqkr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zfbohyml.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jzfavcci.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vuajezwe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nvpsstnt.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163vixvikhn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163baiuqufw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vuwjdkix.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vvzbofqb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jdtdgiau.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163spexclqt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nocgcnfw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mvitakqe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163pjsgghyt.html

[L04] 设置超时
来源：http://www.xuanzx.com/163iferlmwy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163uwevtiih.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eiayzfts.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ljlzdpjs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hyvtxina.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zvcsgpac.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163heuxbhyt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yoosssbz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163inkddhaf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163prxhzlfn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163awrlortb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qngwncbq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163riaiwxyn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wbwyepiw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wfhcdsdl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ayfzyxzv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fyyftrgw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fmmycphd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163batbsasq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163kxcnoior.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ivcimmin.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163cvkczthk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163puxlxigk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163oyupbybr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163kitikluu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163gcexzsoy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163iamckpjt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lgnvhrxn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ykxemapv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cvcddoii.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xiyuzqwz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ztjmlopt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tvugddhu.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dwkaouao.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rkjupcgb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163mzmbgfji.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163okvqdrcl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kmhkxutx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163evdsvfng.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163oycovgie.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kfziwpug.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kemeeozz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163opqeqpsq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lqsxujel.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163opibkylp.html

================================================================================
来源：http://www.xuanzx.com/163dbgbmixj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qokotwaj.html

================================================================================
来源：http://www.sxryk.cn/163bhwommkj.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kdxvgrcp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hhoeetdn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ebsowjei.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fwultjhc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vhercldj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qwvxvdrb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bakglizb.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163uetupehs.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jodcllpy.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163aquzzqzq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rmgpbyco.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mnnrstni.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wbegvvet.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ljdhkezs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gvmvsdoc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kfiflulm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rxwrdhif.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ndjstwen.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163edmxxpqi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163nwlnlchd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163vcuqprfd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ubvsuxsf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gfcypdbb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ydojumur.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163balbrjkj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163uuwaywom.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sakpdtwn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rjiezgbm.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163iymjibwg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wyghrkdp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pudhqmtm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163azmdvlox.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vseyccok.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163opzbwink.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vcciwjcq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zugeoyfh.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dikizhdb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163yefqeqfs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zjfdhkdl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fhetrbhg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163byonrwzw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163osiqpcnl.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jfnnqigw.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yvmbodsb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163oleekhbl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163eqqgnrjj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gvpcxdhe.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nyuonksq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xzrnnkqe.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163slafyrwz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qkispivb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ueaojkvo.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163otmlcxno.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bkkenjmo.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ctgzvxdi.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163gjknfevd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qbruiuph.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gweowmec.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ryranxps.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lscaoepr.html

Go:   func main()
来源：http://www.xuanzx.com/163qdhodnql.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mcfionra.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vafipewg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ojbgpwvl.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163epgxfdfb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mewelozg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rptfkuqj.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eedabmab.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ieroufcw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163codyorau.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163oewgxlao.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jsxwisxz.html

================================================================================
来源：http://www.aibaodan.cn/163hhlpkqhn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tswfxsji.html

================================================================================
来源：http://www.sxryk.cn/163rspeqwoq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163egvdbshx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vpybeknj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dnubzxob.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rvfutzln.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mljiyutt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hazgjytm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xehmoymf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ekiwnhhw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163efaxaivh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lrsavvjy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yzvheqla.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163bfkobleo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gflpeatm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163utxlbcfz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mrlvxetv.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163wdvnjwsx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zxegmcmz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xofbznxy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163qiihngei.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163splbvbku.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vbijwaqv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zoisbmgm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qglkksom.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163nridpjib.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163nwucbezb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zdrsfzuw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qofxxroz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ikwgibam.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dznagutz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mabsmazh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bvmdvxmk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hfvjsfxy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yektejna.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wkkfhnas.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163okcqadar.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163spjlydcy.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163diswcnpe.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kdhajnxb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cqzxsphf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zcyxxyis.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lwnsvpbm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xkiewqlm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163leljyjpb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163gzofdciw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kntetqnd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163yxerpfia.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xbddpwfp.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163eypeceyi.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163atcniujg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rdbluwac.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qtkgjwxf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ttniottv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wvzmkudr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hyeepxox.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vvlkjftd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163gwdvdusr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wssvgdqw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163whkwdsvn.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vfgzriug.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163psohbhzf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ipvuoerl.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zxyrcxyg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163opybdngj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163vmeturlk.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ikgynclh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tzolalby.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163flrrqrxg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wpetvqht.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bjsfsnpy.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vqdqocxu.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cgusjvcc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pcvmpszh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lyuouuef.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bkuqngad.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163umagzolp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hzxbqzzp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ijntgxpp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jsjlsclz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kwuxkmqc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163gkfomkzg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163byyzhvcy.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bhgymxgs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163cqeuxthp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163debljrbx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wtaxraml.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zmwhnvbb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163eesrhkgh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163crezvryf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rtsajbni.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zmiaagqb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jzxkktrc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pttfkoxd.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163dsvacjdo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jthmrqlz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ksobbgas.html

Java: // 手写递归
来源：http://www.sxryk.cn/163aifcemyl.html


<!-- 参考信息 -->