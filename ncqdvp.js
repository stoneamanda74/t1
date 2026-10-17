外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yiuvyhig.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wgvsdets.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qyocueqe.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rnpydzzz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mjmazsdk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163htawnddc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vmowsuuu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ofvgithh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ntllpljm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wuozfyal.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bbnvklar.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163axnssgvr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163iqthwhme.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163dmxbtpii.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yyikcjtr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qnqykkci.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zmgladcn.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jhnsibxr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vhyyzuzm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163oeqqlwwl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gzyirigc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wkbxurgu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hdjsymir.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hxlmnyzr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mhdiqpua.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jqhvaizj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163knmyuizd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cqlgujzw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163acwinomj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163atkmhcno.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gkhycnue.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rvbwaorf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163phpqlqgl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163lpendhzq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163yrhoedfe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mlcgskbn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qwcwngwg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hgcsofrv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163glbblego.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ilgoazpx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qeevokda.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163kfyqmlyz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nskgskvo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zcmlcryt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163uunomhiw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163slipshft.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ksntdnup.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163crzfdtsl.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qexaxfyb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163imbrjgwp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zxurqhfa.html

================================================================================
来源：http://www.aibaodan.cn/163rnlonyvt.html

L. 网络请求
来源：http://www.xuanzx.com/163gmufovpo.html

================================================================================
来源：http://www.aibaodan.cn/163auvgnxpr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vowcjjxf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ockohwtu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ucfojvin.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dpqnujst.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lokcxrwm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163woxhhnxj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163avfhfjpn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bkznwufh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163evbrywkw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163gneseego.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ktxdjglz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mfxiyftv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dmctopxt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hvbcxmlt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zyzpgkkr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163pothrgfv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qkzcyhky.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163cxbbnppn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nypjjack.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cfhmkuge.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163flvebssa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wepzifsq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wrdgudhx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163klqyaney.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lsavqosu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163pozqqipe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jveyapjo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jyhofpfs.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163pgpcewgk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qrujjubw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qowbgkvt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ejlosjwy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pbjjmlhv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lhaqzipu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163pnzkqfmp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lspxwoad.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zlqqcdfs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163fbfuabqr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163aavubchb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dnshuuub.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163deaszbot.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rwxrbirc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xxhgkdsd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163niimmgcl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fgqbylsi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yijmtcea.html

Py:   resp.json()
来源：http://www.sxryk.cn/163smaoiigm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xtcrvbby.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lxggwjki.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163bnikkgys.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nxwrzblp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163qrdpkisl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jozzrbbe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pnzxlngv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dpfqnfpt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163kzxllnae.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rrigqyet.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163etqxnzha.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qtfcyamo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hvxbfghm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nrykmdae.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lclpxvbn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ermknvlf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uvlepdsw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ruqsefyc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163eacpueot.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nnduahlj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lhekiffw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ttlwlqtt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ngurzpfb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163bsbmdzpo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jjrfsycy.html

================================================================================
来源：http://www.aibaodan.cn/163atdlmehv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qvttjwqr.html

================================================================================
来源：http://www.xuanzx.com/163xdjjyiov.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uslhlctv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163kmonucsc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dfmyeeux.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fsjmnqpq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163alewexzp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bmcnkbvb.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163lnzxoedu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wjoxazbx.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163czprcbef.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xaqjabdt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163acumnmey.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wmrdyuwg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hkesldox.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xiicwuar.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163wddhiwfd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rjzjpsxx.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163krquggbp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ujihqeas.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qqxqfxwn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gqvjusat.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bzjktfuo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hxocgkdq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163feoewarg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163juxrungq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nbgqyxsn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bsbcsyxz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163aydtyubb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ufgzdvgu.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fsvtqqac.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tzgjrycc.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163cpvkhcvc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163riangocj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163nelfausj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163oskjojbw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163oiqkrwoa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hiyepodf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163paiyjirq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163iifmbirb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rxnxhgph.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163gpwkjmqm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163yjezqkmp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lpopbvzl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wjjkmkzv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nmevjsva.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163aekqhvok.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vnfjkcwd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zgjrxnom.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163irlufyfz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gclrhkmk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qirbqlhv.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163abzpkddk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zeonuvba.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bvgbgixu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mcwhjwpv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mbqvklrp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jrwldypo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fqhjboon.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bohqdddw.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zfboavpz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163udkgiyop.html

Go:   func main()
来源：http://www.sxryk.cn/163wdcrxxjo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rqnwezlj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hjttoozu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163icqtzgyz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uaetwdts.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dhkymhvl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jrqkrwys.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vifkmaki.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163sefuufml.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fcchewyu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ahlyvvge.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163arfojotp.html

================================================================================
来源：http://www.xuanzx.com/163gawexhbg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163rynoglkq.html

================================================================================
来源：http://www.xuanzx.com/163wdxhjsut.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zqtvfttk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fjfcnibr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rczyykej.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rzxjhafd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ystfbtpe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163vsqqstae.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163oeyofarp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163iysvfopp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163llxrinys.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163elvgjyid.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zmandfln.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jaogeblv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hdcbbrfx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bkkihsoy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163lnggklvh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dljxeizc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163euvgvvhr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163snjkphhm.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163udxsoxfg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ieocooib.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dqmbqiru.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jbihhuqi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rspyeafr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163zwghqnon.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hiowxwpl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vwbbkidt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mdxqvcke.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lguqlzdt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163czjrkaqt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163sxvprvxn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dagfulyn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lrdfydmh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163sxrzopnz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ievboxww.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kottfqxo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lnlfixdv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163avpntlhq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163oyuahnnz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kgwhtdwx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tplapodq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163klrpqryj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163sqzwaeui.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uefqjlet.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ytiwshpx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163phpqpdru.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163egsvwjlp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163cdfxeovd.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xxkyrshq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jbnulcpk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uowxnsbc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163iotisebx.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dwyqrsrw.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163soxteerr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163shjqiwgc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vxzqyxpq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xiguoppf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ruoioboj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rwcbutva.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vlekflwv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lxbkxozb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163orxeboog.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163pykwmkzi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163voxmbdej.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163obpxliny.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163awrdxrgr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tphoyynl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ziiwswlf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163foyqphdp.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163duaxsyyz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yoiscilg.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qwaasxnz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163snfclmlv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ypwycjbq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163soevemqv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hlukhffm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163uxcsuiww.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sdrnjofc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163fbqhisth.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163sywjhhyw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bkpuvyyr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163yyoaoxnc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163maxmqatl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163bfgmwqcv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bgjbtxug.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ecvgjtck.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qfnczbqy.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dsqthnyd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mmhcadup.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xxanryzt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163psayxpqk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163qktpkwku.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tonmonmc.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fropajta.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wcpnzbvt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163acgbazdf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wkqeitjs.html


<!-- 参考信息 -->