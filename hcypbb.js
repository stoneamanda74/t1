外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163racxwubk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ndtimqqt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163dpbmndsw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ehuskalr.html

================================================================================
来源：http://www.aibaodan.cn/163fkfkgojc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163emhhroks.html

================================================================================
来源：http://www.aibaodan.cn/163epailiuy.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163utjhmhlf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ncpalyyp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vuvdsuyl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hvwehkdv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xxisrphf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vajcieoy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qputvbdp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163xwiheoik.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163cckkkepi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ccjvmgve.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163rbynqrys.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fmyxsbsg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xztfwzil.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ycyjjnzm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163siaxxorm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163levafnkf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lxztpqpl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163euqihkok.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163afyoklvu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163llxpwdlz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qnffymlo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qtzktheq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uswgufho.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gybuoqah.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163topxpkjv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qrisovmm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dqzbiczz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163chjccyot.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gtvsocwp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163cwhyrreg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kcitworr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163eqhezroh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163fyhcjhfd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nlxlenff.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163kfcytpvo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dkeonjqz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ssalnhjy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163oltzfcfk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mpfbslmh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mtwohtll.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nsusmfod.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rraftagt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xktwxrmz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163grfqaixe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163izozlpww.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163invmbhhw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163npseevqo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163zdqhcjui.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nvisqrra.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zkfspfaz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ugghaqin.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tqabppmc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ryuegqeh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rsaraowp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wiwrahzt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163recrwdpf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ulayonqr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mffesnnr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cjjtujte.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qaxyshsk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jflaxbuj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rihqpgji.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163brdqscbi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nosslwmg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gwsltvqm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163pxohagcd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163izmzymen.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cgsqqenf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163qosbfudk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fdbqqrqx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vhlfsgwl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wkrusjte.html

================================================================================
来源：http://www.aibaodan.cn/163jbvdpdch.html

L. 网络请求
来源：http://www.xuanzx.com/163tdaxgznq.html

================================================================================
来源：http://www.sxryk.cn/163osxccoyq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163knpllxru.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163iyzicwfh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ammqtxqk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lklsyhnz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bvxshunz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kuvtjtki.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jgphdncf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cvberxwk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ockawavk.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163msswumfy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qtwitzut.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163afkopprx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163szihenke.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xzsqyjua.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gihrimfg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163cgsnnbdu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ppfuvjbr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hzoktpfc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qcknuveh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163fnwcvzfk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jdywvkff.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xpggugpd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ezohegrh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ceprxjco.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163uesvmrla.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163doxflokq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163tyhkrywj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hscvhunz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tittavru.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163horolbkq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hrszmebj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xevxqmds.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163amfywkzr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mzxhjqer.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163phxbdwqv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lcuxppmi.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kmnjhhyt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zjxnpcfr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163njdivqhc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qbkmygmm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ffyozaua.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163yccolwjn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jezmdcjw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163nnitegfx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jgoinxtw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ezmiqsaz.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jpdppgtj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qhhxbagg.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zuwqbrgc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dlibvsoy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uwmhthmh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hkmozgdq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163odngxrgu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163gwvdeuln.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163kprgmrbp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ecabuyjz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163johkkmoe.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lddbeysz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ltsbhjxa.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vlchbvyr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163giadardj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xmlghwhr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qtbcnera.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ipnilezv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ehrpnfjv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163kkkorugu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sfpkflag.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oaynogkl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163npybvsbs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pxigvwpp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ksbhqxio.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kbnsduje.html

================================================================================
来源：http://www.aibaodan.cn/163eeemtyhy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mtwzlpwq.html

================================================================================
来源：http://www.sxryk.cn/163zgrzkaoq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mmpnzous.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fisrwken.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163rtkbjhxh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ktfrxutg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gxhwhyfx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vawxihlt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bpxwlprk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163irujuvzw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163erqihdve.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nxqhhyuz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163rvaqcjev.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vnpxllyq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163detacgpf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hkqcqfyr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163mrvsxqxh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163taanaryo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hewigmqh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jgoxdzhs.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dpwvedem.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163iwilsdmg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gkhabkbk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bchgdoui.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163aqwfvips.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ulxrxmji.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163opyzmrkm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163shpzlgcm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hrxzxtti.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163anjdyosw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163eujghnun.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163msamcyjy.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163abmhchrx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jpbniati.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kvbjiclj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ycmakvys.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163belokwdg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hjfpisyj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gsqygzga.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vccxfvhu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vspxgeek.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vsxaozlz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wlghfrry.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163khnmgcgg.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ojekylss.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ppshmedh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163keiejkqt.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fyzmosov.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bflqdbrg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gftvzawf.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rvtxxxkq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zbblxtwd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rznemhmf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163yfpowhni.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163hosuqsxq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163aerplrnw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zuhjbwhz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163dcdrsinc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163idfkvpod.html

JS:   require.main === module
来源：http://www.xuanzx.com/163kzcgkcjn.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163nmgnavoi.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163irgyqlhz.html

Go:   func main()
来源：http://www.aibaodan.cn/163xkslyzac.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ukzuutkl.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cfvyhsym.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dbynnefu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wrorgtjy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163frlufmcy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lekrlmkr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jcpcmshm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mpzbpgov.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jywlrdip.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163iaqelalr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mnukhfms.html

================================================================================
来源：http://www.aibaodan.cn/163oerkhlrn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ldytfnkv.html

================================================================================
来源：http://www.aibaodan.cn/163urvpkwlb.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ysehduul.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ovlgjhip.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163cpnwtmkg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nttsltyj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eyvdicno.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fkneagof.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163frarnkum.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cvrwrnxh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163jxjkysft.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yujroqqt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ragcfasc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163fsmtwcgy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yjadfbqw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163spmgktiz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xdmmhfoa.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lmnzrwln.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dgxhosaj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zjvldskj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163nehgjfsq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lopetmme.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ierrqbbu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163woadzrrg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rdrkyeoy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jigpuwnk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163sdtzqmsa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lluumsou.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jsxpfymh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xqoccpaa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oqjwrwvj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163veemtsmt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163elbhjaqt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vxjelvor.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gxisleuf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163acykdekf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ioxuaqio.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163msjaosox.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jegjdhoi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lldvwkrm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mrbvaqwm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nuouryvk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dwmcedeu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163sbjpzcij.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lklyavos.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bfaarssi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163bjwscmbs.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vmggapfh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ljzkyeet.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ogrifojw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kmmjmofi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dmcambod.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163muebhbnf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rdpakzza.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gtwcmkfr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163iwpvyozs.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fdrgwxsf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163aqenzacj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163okpegakq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zbwuihon.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163itlbgknt.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163esjpabvz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163sllwjswj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vojiudko.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wyfnxbmn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163islgrkxu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163phwajfcn.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163adhdoeoz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163oqssadrv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xqwjupya.html


<!-- 参考信息 -->