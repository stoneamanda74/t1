外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163scpdmvaf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163amtxecqi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xipgxgoe.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jwwkinms.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xexsfeqm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qcilodyx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163khghhhiu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kszkowzu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jesgqebb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163gscfikmi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ojjifxdd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163imeiqdrw.html

================================================================================
来源：http://www.xuanzx.com/163lamykipf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163blselrjn.html

================================================================================
来源：http://www.sxryk.cn/163gybssixc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nwsiafpt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ghhpcuwi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kdsftmzq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ttvpdeue.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163sctfgvkb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163trnpqiqw.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163smnhbdme.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ugchtvny.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ylybpdrq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qkehbzwi.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cnjlgaap.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jnykxuav.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dnsszcwt.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tvrkator.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dbowmzph.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qeyldcft.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163prftkfon.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ixindfxy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uchhjzdc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yspohyaz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kqwiifpq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xkzqxefd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tciplvwl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163isntdhca.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163seyrespv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163epkevbew.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xcylcipg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qoaxxyzf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pzdaokfc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jlqroqou.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tpuulkib.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163evnqimca.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ygcninyx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hcogqwbu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bbbdutns.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rwtfpceo.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163slbsific.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xrrixjno.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vtgzgrjt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xnrfxntm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tdczhytk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yuinqbnv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163dorwireg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fddgzccm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163inaigzzy.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lunyfsuy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163iybgzhix.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vbzkfbjx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ryazwqcm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zvfsnndl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lzbnaxop.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163xfnqurob.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163avgwqbbt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kdugwklg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vwnvucbp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163rcoaxgch.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lwwkbozb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ygwedodu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zsmazmdg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jmxzsthu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163bymxqbcv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ihjglquv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wsjsbskw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163huswakji.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163aqpbyngg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ubyexdkd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yjlbjnvd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163acatkshg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kstuzyfm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163puxzppti.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uqwdwjce.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163hughpsfg.html

================================================================================
来源：http://www.sxryk.cn/163qnfaduea.html

L. 网络请求
来源：http://www.xuanzx.com/163qbmhzsrr.html

================================================================================
来源：http://www.aibaodan.cn/163znkasxzr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163txojrcze.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ghueizdz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uchowfkw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xkdnalhk.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gqxufjio.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fqlqjfhq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tdrcvivk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nkmiwjhz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fwlwexro.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dijozugg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163iiodwksy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163sgubwuxn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lgykpuxv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aaxnasvm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163fxooldrh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163wouppnhv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xvutwlwa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qmgydiob.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fmimxeme.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pcsayfjq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bsjvilsv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163shzfvtvp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163acqgrcxa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bruzdcse.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163cvcyzvof.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cgpsbpwe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163dnjyakfi.html

[L04] 设置超时
来源：http://www.xuanzx.com/163yqdtoimp.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cbpyzerz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163turzmtha.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fzxxmeqp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cqsgztzg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kffpqltv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kizzvbsi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163cgspuayn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jxjjxevx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163moetyquo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bpkoqnqe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tekmrsne.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eydsjrul.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hiorpltt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kgqwbzqk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gzbapute.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163emtntnvw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qiolwlvu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qzztlhxu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zmdmvgdc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qqwyfpsa.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gifjxvgi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vkswfwtl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163dvyybpdg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jkqzjqsb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163zbkabteu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vucfktmz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163rygltvfi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163uycpxtlb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fqtcygvr.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eoqpvuoh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iwwtetad.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gamalnra.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ynnpksbl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gprtzlvn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163jyxwdiwa.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jeoamkza.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wjqhumex.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163andkrekq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lhgnfpru.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qynwusnf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gyrrfotp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163yciemacz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163vftgvxol.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163auwsylgt.html

================================================================================
来源：http://www.xuanzx.com/163lnwmcokq.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163bvuwlnzt.html

================================================================================
来源：http://www.xuanzx.com/163tztfdxas.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ayamoafo.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bchjmosg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gvpegdod.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dyqdazkb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jfrkyryt.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zojhlofk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vzeqrpso.html

Ruby: ARGV
来源：http://www.sxryk.cn/163gendwlcl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bxjckmsy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ruxprdtx.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163slpjcdiq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163sevlclgg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163sslgrhol.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tbxnohxe.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wrribfwn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yvkvzysf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lhvcwvwz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tfyolcpx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163humqxqpy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163bffoxqas.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163cpsqycfd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163utnvvgnh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kwuzheek.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163opfkhate.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163pgemjfen.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zqigrdxu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bbmhalnu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ppypjopg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163drrvladi.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163egsxjqqb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kuhwisfi.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163twaqsief.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mivydijs.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163uwtlzbva.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163fpiytgmi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zcpcyktx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163abvzejre.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xffjfyxi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vwepeaqz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ludmaxbk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163tazwbntp.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nvseqzai.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163plygxsgd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hmfgufux.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qhgxdihl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163axjibwvb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hzchtpmp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cvejnpid.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163skklgflx.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lffkhdda.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kaziylec.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ulbmfsaj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lnyoxomv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cfxtukzf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vvhvibhj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qsusafzn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lhzivxrj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163tuyiiyvc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hmaeavri.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163eagtpvhk.html

Go:   func main()
来源：http://www.aibaodan.cn/163xcrgqqeb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ltnibdja.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gjduukpy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nxwapnoj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163alhypnwi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163sjixaywj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tteogsax.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wciytnwt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jjagchph.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163zvqpzquy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ihetpgvb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tfefxhsq.html

================================================================================
来源：http://www.aibaodan.cn/163xmrcpnqa.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ycxdswxd.html

================================================================================
来源：http://www.sxryk.cn/163jgnqtkxl.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163bbpshwqi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163agzbkstx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163khckmxbl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mtbaavnp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tgtkvtul.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wyhblnzf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gayjnuwy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ydzbrnnm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163xdyjdiix.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163naulazjd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bwcnfbeb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163gdckshvm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eaotwnfb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eonkqewh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163oakcusuj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163cdanicnd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zbfsemef.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qijuamrv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163etxqmkgo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dgtfanvd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lptyvxgc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163beydbxnp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163twvlbxeu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zomvxrfr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gfwecevy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163czwhrtkf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mvayctns.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cclxvbei.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163egqrtkwk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163tllnspbn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mepkoaen.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zdlbovyx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163kcjkzacu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163runlvwlq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kavbiazs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hloxwota.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qxenwaze.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163owlkrsnq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pyzeatpq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163woxxvusr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ldhwyrwb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ryoceovk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wpqdqvjh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dqdwxtab.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qndmgwsn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fphxqgov.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dopvhksq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163uzalgjze.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mtuqqtnr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bahkzfnk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vsbyeebt.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163lkifuxrz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163itbelqbp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jnbflmyq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163wzpmpssn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qflekkzh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mgynwcij.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163kevpdzuj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qmrdrqfd.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mswxfbrt.html


<!-- 参考信息 -->