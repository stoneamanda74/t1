外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163htjjrpuw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163wbxgqbzz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163natclzmc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vmkhryrr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163btfogvrk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163utxqmxgn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uizzffqp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pptuuoot.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163legdgbpc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163kbakiiki.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163kbmnxnbr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xvdwftxg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yurichtf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pkyryqqk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163heofzilq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163annrmgez.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bhnerulg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163qzuxqdcf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cqtnoqer.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163oeobgmls.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qewymsqk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xmjfhmwi.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163odzleavr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ynunhkrz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163dxgbwukh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163plpmvtjr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163guorvufr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zxgqbdvy.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163tyuztfzt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vebhphdw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hjmspdon.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163znslgjwp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hmwfivfs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nyjykftk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163plnhneqj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hiugiagw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ezqqqepy.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rgyhcggo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gdewmtwj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tmwnwrnf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vsirfvoe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rkubogrt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vuvupotz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163tzjxnqru.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gbvubwnk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163tpotqmjc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rbyohwdv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ynihgkst.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yuekmhdd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163anbrijuy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cimpnjwb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163aebketkh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163swjfywcr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ztodtfpv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ytvugpgq.html

================================================================================
来源：http://www.aibaodan.cn/163goyhgqam.html

L. 网络请求
来源：http://www.sxryk.cn/163tnzvdibb.html

================================================================================
来源：http://www.aibaodan.cn/163qvbmdfns.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163imjkrsvx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wepmqagc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uhgqqfop.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163psurdehi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163djoxxzuw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xrcdbwcj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dlhaktit.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dgjoudhy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163winlzuev.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ipcggzcb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ekhxexts.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lgmnebwz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xegokrqg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ysvpwzrg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163riiqctyp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zejciwsc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uolsfcsb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kqwttwco.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mbcxhfvh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dtjesfzg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163qbjgugwg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vvmadmmj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163owdwzqaf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xrqwegdu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gcfivpxg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163bbdeavmc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ipipsfhz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hmhauadk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qjszdfbg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163pivpapuq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163aszxxdvf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163abeuwocw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wgzlxqjo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bpglngws.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kplrmnmy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163avbmndsj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xfyeiqrw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163uengxgnt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lxpasvkr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qylfrzoa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163twwlflvc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cygbdopq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163swhgdnvc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163umqvafzb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163fspcyhak.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xeazxyby.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gwhlluld.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mzdojuwm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163upgvsyln.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ygjrzclw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ksedatcz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hdtungcy.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163vjvsgiiv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pmbdozng.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xvbxugvj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tinmwzfo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163adhhnqfc.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163isftonvi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xumpoxwg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163knbwlvjn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wuwcirxl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wnxoswni.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163oubrqpaq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ipfvkmne.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ncvtzodh.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vdtlnrok.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rqdgifqh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ouniftvx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mihulmqs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jcrenmgj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uxiwdurp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nmytdxoc.html

================================================================================
来源：http://www.aibaodan.cn/163umkuqmgg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pvsuvntg.html

================================================================================
来源：http://www.xuanzx.com/163arbedxlx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vqrgzvjx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dgwpbjef.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wtcpmlzg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dowxjpiv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163igfevooz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kepksqfz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163blhusdll.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dvqdssem.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163wxvxnamr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rpnnjmky.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pinlnbqh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dotuyfeb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zgslertc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163byzaetkt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163emimomcl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kanjrqiv.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163uneuwsxk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163tjkktxid.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rgiakyjm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163udmcmhkn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dshsihcv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cagomhwj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sqhxvmtw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163oxgskbyz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wsfryrda.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jfprihsw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ehcgsscw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wmsbgmet.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163qomfxvbp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163talhrxfl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163anbmsldp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163emxyeeqs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wifluekd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vghnmgcs.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163jcqeqpuv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163dippktfq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uqtnlowc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163dryyftsd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wsgvikpc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jyhihogm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hbxtqnqg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qyrkeprp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gfpcwnwr.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ctanglow.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zgczwnos.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163iirsyqsr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vscqvdug.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163olhfvyrf.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wjeylpks.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xmytklon.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vmcvqhif.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163jclkliao.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163odsofvpm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dxyobolf.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dvxnvzoc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163acggsadw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sdtvujzs.html

JS:   require.main === module
来源：http://www.sxryk.cn/163scdbnjqq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tlkfxyol.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qokcrlez.html

Go:   func main()
来源：http://www.xuanzx.com/163oozrfcrc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ausuimyz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163rfqvrjua.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lduvarqi.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yyxqzidx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xiiylfuj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lqbundwx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163udsoelhg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163twvrsueq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jcbjpmrr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vcxcprcs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163eeavoola.html

================================================================================
来源：http://www.xuanzx.com/163zggnktqv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163yghteqwl.html

================================================================================
来源：http://www.aibaodan.cn/163rdzfdpja.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163exaahvla.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ohclveur.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xitzbuyx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xmxlkpte.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pffymtbe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163iqrhsmww.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mjylqxrq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rzdbhxxe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163igyxbdls.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163iaonxoyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gwzmhron.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nhpotcww.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bqbbzqzr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kugyvdyh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163clrtlnsk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wbmxbwya.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lvrzjcuh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tzlbegum.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163oesdgtwx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sosbisex.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163qtqedcxv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pdenjlvw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qihgryle.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163aeynnfkn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163oauoqjjw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163uzulqtpr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163huryeoih.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163olzqpymb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ljlyvdxj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dmicuxuj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lbmvdbep.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mbtcjrdp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163dovusvbd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uxzlpqqw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wfmllbil.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fngbilhk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rwmzahgm.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qbmzvrll.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163sjaczfun.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ahkkzhwl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ubxgixbw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bkuuxhrt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163dvjrecqj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xvlmbrls.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163cmclmqui.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163haqztokm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xkftfmwi.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163kovqgqlh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qnwnbjvv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163eobbcsjw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163uxzicxzz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pejkgkpj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163nibpysst.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163udkicbqu.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163rrevqheb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mkqtvifb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wmfhveio.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wquplwke.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fkzqlwez.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wcwskwpp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163icreeska.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kwevggjq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jyxoogbm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rtvgahmq.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hsgzsgjt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163stngbgrt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gofyflhh.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vldjnbrn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zvhuilql.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rcghhebi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163smxvsezl.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fksguspw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xqbkhhlk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mnvvlvfd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nzjfurrf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ajopldfb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163vclmxbbs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jauisjbj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qhitwcji.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163zekxgopf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ulavkbtp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ztkebstw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wdkvmnwk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mimfiavl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163sqmznvjh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wfeacnpq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dkkpsfoa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163efylucqn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163iherjnoa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tyujqvfa.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163csnmtdqe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jdsfufwp.html


<!-- 参考信息 -->