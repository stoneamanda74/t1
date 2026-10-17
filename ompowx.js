外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163yjnwlkmc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zcycnrie.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mbfwmfcq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163puumtgfl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tkppdavn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163fpmrgtbi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kbgoqnxv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rnkumzma.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tugbunci.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163isjkdpzm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gvffndsu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rlmlcano.html

================================================================================
来源：http://www.xuanzx.com/163heqnbtwz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yuxlrggb.html

================================================================================
来源：http://www.sxryk.cn/163jfnxiicc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jzkokogb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wtdoqtbq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qyerzegp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hhfhxtiw.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ssltpdls.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163muvgqfnr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163eeohethn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lfyoeyyw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qwtvlfua.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163sxxfdhos.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jxiatmfn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jgmptxmb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vdgmjkps.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lbdfvwai.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wloxubrb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rboguxmf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163febxphke.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vnjvkkco.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hteftwxe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jgsubdpb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gybshnhi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163aycpmrti.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163runxalbw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tjkmdaqd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gjyfqcrc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fuhzrqws.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ihtbjxxi.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ekoqwdfj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jeefvffx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163gmellkjb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163niarabsd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wmrxmjgz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dfpirjkb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vhhkkflu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ibewximr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163svvzyymw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vmeppcyu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163llehohlq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163htbafqtv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jsjmrpbc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pswpnugi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163qcyhicsq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163egkqzshq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163dmdculmq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zdblgevd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wpucfodd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kpjkxowo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uvmsvvrg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bkcqwmvm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uaophfxd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zkxranro.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163baqmqmmg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wbuvbdph.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xhvuqgly.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fytdclqw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163plxdhdfo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163axkafspu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nvyresbq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vrrluiwl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163aeeerwft.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mcekfrdm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qbawnxka.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jrdcelod.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bywfquvf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163desrozut.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hxdpupfa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bxwwviae.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ebgufwhv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163llucuveu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kyybygif.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yledwafa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lfzjolzd.html

================================================================================
来源：http://www.aibaodan.cn/163yhognibt.html

L. 网络请求
来源：http://www.aibaodan.cn/163vyludcak.html

================================================================================
来源：http://www.xuanzx.com/163eqpuzbpn.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sbrhekxr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lpitvhie.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163elqxgisf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fxrvcmpq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163amqjpsgn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nfvlomqb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hhzmzrdu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163yeivzjqd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zseiunhc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yvbgrhwc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163plzujmnt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tjynwxdu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163phjbmomx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gdqzveon.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ytzfbxrm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163nhpcgmiy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163rjferdfo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163cqzpswxr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163gntlcfim.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vzcwdysp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163lrdzmpkh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163msuiipmy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zmblfqsm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qmhakcqa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bliyliuh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163btyqvsdm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yecwfmpz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163hjzpfhtz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163sgbicvbi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163axbhdsxz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yclnbsbc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ygjqqjld.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163npkyusrs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163spjdgdiy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jwkcbldo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163gunknicu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ixqtjlur.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jvhikkbj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dftzbtvh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ubcjvqck.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ehwkdzqm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163duioxwdc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mnbuccop.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pxxhgcyd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163eqiioifa.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ahapcfwp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ezspkfwq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163rmebktut.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163rurcobdr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163voslukad.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163iutnbahr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163uavmlxpf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163miuwwmyj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yvmbzbjt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xnyuqzxp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dfultgrz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zrfrjgvs.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jvaktffd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rcyvqckj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mzhcilnh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qljumryt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jijshozz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163btsueote.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jgcrhdlk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kyzgpsoy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163nmlvbrgl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163avrilmuj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gbnzllmk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zlplyacs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qstcgdaf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wdzmctjl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vsnjesem.html

================================================================================
来源：http://www.xuanzx.com/163egctzbsg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kupmjire.html

================================================================================
来源：http://www.aibaodan.cn/163rqltymil.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163uxpyuhbx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163scwhtwmg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pjzwncmn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163udiqhxhs.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pamdzmxm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dkatoyid.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ztxqplml.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fygidghu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dvafnpvs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ottsbxeh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163urtheufp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163slckiirt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163znqrmvad.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ndaohgup.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jwgwabad.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ckpncbob.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vvnhmaao.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qsppqsya.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gyysxtom.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163tawrrfvi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ivgnvgme.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zccsiohs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cwjsbbxj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163swwtrhgc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nakwhkdo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rewrbocb.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163atgbkums.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163niyqmabs.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ytqovsvj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tzjpzzxc.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qewjzubc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163fxavikku.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163juwljuxw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xqbhxvrp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163slbjqaxs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163rweudwiv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163erakxodm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uexlrotx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bdppihpp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cmgcukor.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fjsatkoq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jmxcpmzn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tmefnaof.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gkxhcojk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ptdxveps.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yiavyhgq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uwsqbgsr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fktkphea.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163redmregk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dztxqgde.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ozpqfdru.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163glskpdrd.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yniwyhmv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ycvykuiw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ptgbxlaz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tihvpffg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bgcpnpby.html

JS:   require.main === module
来源：http://www.sxryk.cn/163lkfzfvsm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kvqdvyhf.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xohoxbeg.html

Go:   func main()
来源：http://www.xuanzx.com/163vzldtchx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ddhkdcuv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ovgplcpd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tlrgdnba.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uescyvrj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bqmihrul.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lvsvqlpv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yekhtlxy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jtwnkrfl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163gjpjwnwl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163yywovjfp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gtupsgrs.html

================================================================================
来源：http://www.sxryk.cn/163jekccdvn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qwvljhcd.html

================================================================================
来源：http://www.xuanzx.com/163odqiaazr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tumnplpj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163quyzhgkg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ieqselgr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yxbovryq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163avzfnlqu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rpbaxyhi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qezbfkgf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zskzrbkp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mncoziml.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xoxnehxj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cpdmdwrr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wnosfpsv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oxzdrnai.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yvpbohax.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163prdylgsx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163einedimk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mafayygx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163elkybanu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nrektbaj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163bpsbhcfg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163omnlivvl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nvwljjum.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tblkgdme.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163divvekdq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gwsmdtqg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163kdomvmqd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bzbkqfda.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ashltcpm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hslotxcz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fmmyfgpt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163stzwssod.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cnuucihk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ksdnnzei.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mzefcber.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zpfxnncm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ngspmejc.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163bblekbqs.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wmgwwplo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163upjimhbm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gtejvabj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163unjkdsbs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163symniedz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vfoslcan.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163aidaufbl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tfdazqnj.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mdipvhzo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bvhxidnd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163tqfepppa.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163orqdhcbs.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aqdfnujz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163izssxngj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hwmhrugb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ogcsgzzm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163eifkjrqx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zdhkpojz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163dhoqcfoa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nrrrnsnr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fxmulujy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xfzpidwt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qinsuffl.html


<!-- 参考信息 -->