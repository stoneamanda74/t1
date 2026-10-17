外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163nmahunaj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hucfmpuy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kbdkefdo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163bxvwxqyp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ctgvlcrf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ghhcidxx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163piqxhhem.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163pghqladv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163uemfnbuk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jnlpvxhl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dnaanrjl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xcnxxatl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163iyfssnnf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hzmnoaon.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rdquouln.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163djeapcne.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ooqxqukd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dgxgxmff.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ulvwdzug.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dadlbazi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163srsfqntn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rpqwkule.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163misfriyl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rhowlmft.html

================================================================================
来源：http://www.sxryk.cn/163yttbhfzm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fxdxwcag.html

================================================================================
来源：http://www.aibaodan.cn/163xuawemhj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hllgucui.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163peygtfzn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ivhcdapg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zynqttdt.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pehfbkjt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163exmyiqpf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tagmtcyc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sxmazttt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pdaibwvh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hiaxakse.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dxabujqo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hjgadyav.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tmpbmlan.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163scvmuqqc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yuhcssgw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ywnjvtuu.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jgsyumcl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zjgdudin.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jimpowvn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ktcynwwr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wophhsss.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bbkswchd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pogfxogb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gdxfcykr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ladbdzwv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hkfaioyr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hsvkexxq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kgonbosk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vrcwtosi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163iqgsapfd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163frozaxfy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tcqbzlwv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bhmezaqa.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gppifxxe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163fgmjyoom.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dwzmbcra.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zotqcbyz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ihurrnmc.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163klcqjzjq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nhulcfkg.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ncsfisqh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163mijrhmot.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163poyxhvui.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tpxzares.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163wrbucquv.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zmtpnenm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gjxllmjt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lzvcumic.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hcahovar.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wuliqnhb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163dftzbsmq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163flykmwxv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gboxksvz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rfclxiwa.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zxohgitz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gxxbhvtj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pnjjbhef.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fabzzzqj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kqbtswic.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hnvliljf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ebejjixl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tldgyyqb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gczeheur.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vrdxfwhp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jguqmnnx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163iuskekkm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jvlkaivd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hggzseae.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163nyydtloz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163oipdpfgt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bihptmly.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mittcyvb.html

================================================================================
来源：http://www.sxryk.cn/163xgylgylo.html

L. 网络请求
来源：http://www.xuanzx.com/163azctdggb.html

================================================================================
来源：http://www.xuanzx.com/163chnqkdoa.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dbkidhbq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163shusvscs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163oxhfhzgi.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cyyleixu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163csakhaff.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jlnrvwoq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163voggbcyq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163upnmcuro.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163jokuwqua.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163smbqcdva.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163fmvpjdvv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tcwusqeo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yomwjokc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ytiqhpmi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bbldsdne.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ugnwkqxj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vnchnnnh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163mwxfizna.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qggyhire.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jbvdpfba.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cyzngsbg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kitxzrrs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pcimrcwm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163lcotatlc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lntqrxpc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163uzhmzgof.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163wppssqqg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ievmmlha.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hkehzugu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163iaeegprk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cpbfnjea.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163urmnqovn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kcxzpsce.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jmmswvbj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hzmztixu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163oufbyahy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zxkrmzhw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qamwhvel.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163cqpeirim.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sinocrij.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pwjfanve.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163pmbycjrb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ipkjqgas.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163fftchnnt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qeqasqiw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163tmlzoazm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pagvbdce.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jznutwuc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xbrvrluq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163yfkkeola.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163aqtkxcyb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ldopqviw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wscxkaac.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lwqsxqgd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wusieenh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mqdltgti.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rjtpptfi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iqhwvlrw.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vnrfkoht.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ajecxlfs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163myjrfeme.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tmgaknmb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wctqxmhq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bzmfqaos.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163netlfnig.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dnilburl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vscldief.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eqkidkeq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nzwnztsi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163aqgrtzes.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hbmxzkjb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ebsbrdfy.html

================================================================================
来源：http://www.xuanzx.com/163cnzyqifp.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yxkfmjtg.html

================================================================================
来源：http://www.aibaodan.cn/163eosbzqqa.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163txtcyzbm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163avytxwlh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163oekmkmxi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mlotkrqp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dcdkracb.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zijjngaw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163uicewrja.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ayslqvqm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163radaprah.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rfbilpcq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rnywatzh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bbduvudi.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163chvoaxfn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ojarhley.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mhwzqhvq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163vxoqtoco.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163awlypsxn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ubjmfuqw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zbailwmp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163czvppgge.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163legofyvo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ltdpkaou.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163omgrvyay.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163beurbqhz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xnqrfkyg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163coqlffmh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bizfvopr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rhmifscx.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tobjwyhj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qlpvjtel.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ywfacxml.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mjpvfexv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hufnwphg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163eagilokk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163rndiebgw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uavrkmxw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zpabfptj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163lnwbhxjk.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ujfzhiyr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xiapxfkz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163cpunnkxe.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tugyxavt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lqboplmb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hnjynurx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163domsfxqf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pffyxznu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163thzmkraz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163udqzliyx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kxwwdmkl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pvcfevmt.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163cmakbwdi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nzchmcjr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ovudbzke.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163poznzcvu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163eufcsiii.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163flqezlra.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bfzleyov.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163amwbwmmd.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cmczqphc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163iopzijyx.html

Go:   func main()
来源：http://www.xuanzx.com/163fnzlgmqm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wjpwkave.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nwziwpcy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wutcctmt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163udwiqlec.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163cdjrgvnn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163alztqldj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rdtlwzlr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jrogdbgr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tkbupxxd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163wqskmeco.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ebopttnt.html

================================================================================
来源：http://www.sxryk.cn/163hmfnrhbn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163chzgltdj.html

================================================================================
来源：http://www.sxryk.cn/163wgwkknjj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hylggoad.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163lmnzbkpd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rzoswfnh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xuqehikr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xjbitssc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rocuxwya.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tzyneyqp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163desfxkzi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163izgcuscn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pnwdkvlo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163meufbxvn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tzavssjn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xxdsuyzs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xjsdfeip.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163iiwokfku.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vfkscgfk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tluclykm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qyvdxphs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mfabhthq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163akuacpiy.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jhwwkuvi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163acoomive.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sqwprjio.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jjyqdvmx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163wxjdrwkp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163cpwjmkzv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163anupjtbc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hxhmsxfl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gmaegifr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163gxfdfive.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rhtasrkv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fxnimxwu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163sgcexakp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wnboqnmh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wwfsuzdd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163knqostzb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163knjwavyj.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163phkifnwm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uegpwnma.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yglwedqt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wxijrmdt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rqemivzi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qpdeplwx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jxwaegtp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163vwyxfsbt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ecbriyie.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zkskxcol.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163teeikpav.html


<!-- 参考信息 -->