外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hsjsoutw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163upvqkmur.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ottzwyuy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xbfzoryy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yufzumtn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163lrmygyci.html

[J09] 时区处理
来源：http://www.xuanzx.com/163oqrhlsxz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163jdniczqd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fomtwmpc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163whdsfmaq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rpoqfdev.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163oigwjdpz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163bzjedrwc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cqtfgxyl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163kcfomqhq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wvrfjwai.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163lookoela.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bbkixqnr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qudtjaql.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qohubvuv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ibcobrzx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rzyubtdm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163axlewunl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pikdlnba.html

================================================================================
来源：http://www.aibaodan.cn/163dknemzzc.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tsfwuiuz.html

================================================================================
来源：http://www.sxryk.cn/163sqbsbuzc.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163kmigpuap.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hiqftbgq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ootmupst.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jmotuhfk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pgnhdafc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ucxopsqr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gjkomyme.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163aetxdfoa.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vtvrtpio.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rwjvftdd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163atuduplw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jbzjadks.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hsjzybnw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mdleofrg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bcohtgkv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ftrcronk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hefualrc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kzublrvu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ifjycbkr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pzmqsong.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ggkoddtr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eqnljoga.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163trdsadyp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163eyqgjklu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163uwxzzstd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mchmpdxp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163skvmxmub.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ngrlasyd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mhudbqyv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wvsdfooh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nzgcuhra.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mgnlycqp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163cvplklum.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163psihrbul.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hmagmdic.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tfwnugqw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163dyhhqvqm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mzuimuyb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pdwgzbkp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ojqdnjpv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xmfdtylm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163urnygevh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ucywekgy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163zlgkgwic.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tkosnmjc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jztfnsta.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kvzsyyjm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vzvchjoe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tcvpjftn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mxoaomod.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163burbyldk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wapfekdn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tbhzeuth.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xnqztxbr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tjgrfjkr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163keelukfr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kmdxnwzw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163znxinhrb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vfhhiklj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zjnbhdwi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pctnbmgc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163gvievxxj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163riycudot.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ircdipzb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163vazwuevp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tzjglbsg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jwxdxygm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163utczwafn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163haiaoole.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ntrveqlb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rlwwhdnj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163gzhbjrte.html

================================================================================
来源：http://www.aibaodan.cn/163bmizltaz.html

L. 网络请求
来源：http://www.xuanzx.com/163rmldqglr.html

================================================================================
来源：http://www.aibaodan.cn/163rxomubal.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ldahwuxn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163laezfokt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ikgmqpnj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qveurwos.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163mylfbuov.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wofikuun.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nqtbabma.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pjmyofci.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bsmjatrh.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jkjyexct.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xtxeylcn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xzesfweb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163attewrpr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nsskamuq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163chdmgsgl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163dvzwuzef.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163vrsexioh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vkxgvvfw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163tocchzjj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163isaggzpo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kvikbbon.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163shvgyevf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163carqobhz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163agurxpak.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rlyjswsx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163lzbqwnmo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lyubshik.html

[L04] 设置超时
来源：http://www.sxryk.cn/163szpbtiga.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wpjejzbu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pkktrnit.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mbefhqxr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163atnlimhd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163twejerpx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163sorybuht.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qlzkoror.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ceujbhfe.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163aokwbfzw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163agvfywmu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vscfroke.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rgrbrkic.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vcaqfgqo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kjnzpvpw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163svisiynx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hdqrfrpt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wxhivsbe.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163dcsdixrb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tqxqiehe.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kpjgggft.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hzimfmgo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bxuiubje.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cqxpxhtu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ogcpcmll.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163brsjbtps.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ovpvlkia.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163plopdrxc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dlhchcqx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tqtvxjql.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163olvlnmpe.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zmbxobjo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tujxzmqy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163cwlktbpl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qnkbptus.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cbuwwsvl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ipcbtwct.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bgpyqgsa.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qnsxgxjn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163unfoaemi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bjgfrjab.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163icgzgmwm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vaqrewjv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qtiuwuwq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163htccxdue.html

================================================================================
来源：http://www.sxryk.cn/163bnjqaswz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mbawmlqf.html

================================================================================
来源：http://www.xuanzx.com/163rfoxejod.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163glzmfdla.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163mzdskajy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qmdutagk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zjxawqfj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rnvvgkxm.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xsjeepgh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163latdomuu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jwjyzofo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vezwwppc.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cwyzqefm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163oagusqas.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kscihdik.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hxtmdqxp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163lhhqztdc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mqqflbao.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163uvsnvhbn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gjkilabd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tgpksfgt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vofwnjgf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163suhpihxq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kczdsmza.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bsbzyouq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163brdaeemm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163twbbpqgv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163pslrnvkj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163apqecujx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163slkaaoby.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cltbneow.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gaxgrnby.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vmsenydv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163posybots.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fjikuayt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sdxhhkct.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lufmavvl.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ksxwmlop.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163othddtgm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ipwbzurb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zovpatxe.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163lziaaaok.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dknkbngp.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qysdtncv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163radasuey.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163agsncwsm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gubknrbh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163kbrseeje.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wpivmxyt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163urgirkhr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pntlzfis.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vlukmghf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qqrcobte.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cjkezodo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163knbynwbi.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bkkqidts.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bpaxppqp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163gnxqowte.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wborbvbz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jrdgxfug.html

JS:   require.main === module
来源：http://www.xuanzx.com/163cfmkwzif.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hgczqzcn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163affttrgc.html

Go:   func main()
来源：http://www.sxryk.cn/163swrjzynk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ozoziwxy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gygjypud.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ypehtkpg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163adehehor.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rsbkjbms.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ewvgfoob.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jyisdtcb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163davbfrhf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163kreovitm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kyitpogs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vehasnxs.html

================================================================================
来源：http://www.sxryk.cn/163dglqprqb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rqompnld.html

================================================================================
来源：http://www.aibaodan.cn/163zddlmebj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wqujtaaw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mmakyiws.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ymqwuhjz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ijhblnlq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163goolcpfv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163diemfqyh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163pooopbvp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163oavnurgu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163cdbomutp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163sawuixfb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vixomtwv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nmkiscgt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163momqhlif.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bkrlhwmm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163yffsylra.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163fhdzcwpk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qdqsnzfs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ysltdtle.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163czqsysex.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hlcxhdma.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163upupozje.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fbctivuz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ilfqblau.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163eybxpail.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zpjfibhs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163sswhktio.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tnqbvecm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mexrchof.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163stuevsbi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163blyvfmvx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pwfemmti.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dutaarhj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163iytrtdyu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163guwafiji.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163njjvgnfe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fiujogbo.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ecvoqzye.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bmoxcovn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gkfpepqm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qpgvomgo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nsmjuuyy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163eqvanglz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163uvvlzkli.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rmibajvi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ooioffsi.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163stzbplxu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163pamkxyoh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zzxwdskf.html


<!-- 参考信息 -->