外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163czaumxwy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163heenwrom.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163muiakunh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163pbkfqazl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uszdtgti.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zhpicqmb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163fhoekjff.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dhkythyi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163alhpyrql.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163icpoazsp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163rtorbowm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wtipvume.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163drodzlmx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oqztqvvz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pykoypph.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nltbnzws.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163edcwsufv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gxphqmmo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163phshsljm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kxylyohl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163musmorqz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lidxtkvz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bxvgvxcn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hvwmlqds.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kzffgofx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xxahgdss.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jpjmawmi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hlgqvbss.html

================================================================================
来源：http://www.sxryk.cn/163jggbputz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fdgjdvzc.html

================================================================================
来源：http://www.xuanzx.com/163rujvnniy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163aoygmlyb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dpyfhdyt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tmijhyvt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ggguqwji.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mpzysktg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163msetsrls.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163smpqvhwl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163oafmyiab.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kzivjnyv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163cjdvmmei.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lavqzfuz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aogwldsc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163imxfpkxg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nexwopod.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163fppjktyo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jjupdmyf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163msjennbf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ncpcwjha.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pdohzppz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kqgucjix.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tncqghco.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oybrqueb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wwaymskk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fsshotpo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kqudretl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lcrllgpd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vodwcsiy.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163akhnsdzc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xnjcqtus.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163cjtnjnin.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xrwtkxfo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yhwjkyhj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163gnaidilv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fytsvmms.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vvsthlqc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ugptsyag.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163civoyiuu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163aiugxstu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ifoavobu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163easkiwma.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nitpoomo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ycjbvhdd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hzvbqjws.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163robcpztt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163maihjgcr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163akfuhbhg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163nwovshea.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163naltekrk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wnnzytlb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tgrkuvml.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cmlcihrp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cieluusm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163malntwqm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163qiybzegz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ysnpghmd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163oowtaowe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kreleywj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lnujnajz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hnyrrkts.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vlyihczr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163razaxltq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163mlibcbaj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ckaqfyvx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pjnyarln.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yttlvalu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qvtbdhic.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xyrqcsnn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xubtqvuj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163iziiswbc.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ebjmelod.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hrgakrwl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163cwnkuifn.html

================================================================================
来源：http://www.sxryk.cn/163tsgkyujd.html

L. 网络请求
来源：http://www.sxryk.cn/163zycrpwcp.html

================================================================================
来源：http://www.xuanzx.com/163zsvkpoyd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dgflfxok.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vlcqikjv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pgmnqbsm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pqdbuovd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ryavsspc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dvipyaxs.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163azldyywv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163emeclsxu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nkdwaprx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mpuyhtcw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163djyjstpr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163grojwwkl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xyhppfsf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sfmyezdh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163tnfgjbef.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vhshlxtk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163pkqpvxqb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163athsgllk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163yhihgqbl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gfzbckev.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tomoxzmr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mvqvcvrz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163njerhqua.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163eihyoxbl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163wspweyxo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163venzkhea.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uoebrypg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vaeqfmzi.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xhmevkrg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mquoehct.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uzstqkaj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zmqrraot.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bdesizby.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163aqfkedxh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mkxtqzpw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163irggrpjq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ugizyabk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163yenpgnpo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163edjgquvw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zpurkatq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jbxjceti.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kaumvfyl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163empzzzgl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163cqjgozrt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163alnhjger.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163lymibcbe.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163oqocpusv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163kxrdkmwp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yehjauyt.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qoplttcj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gnzmhequ.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uyuedzpr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mthboono.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fyqwgjcl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xxyxgbbd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163crlojzmv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163snjtqjjh.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163smlocxkc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jnipwker.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ojutoyxn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163sqdwmzsx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163qmslbtxo.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163czztconw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163awmnzkfn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rmtgcpmo.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pzqtrjje.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lyefwtuw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pqablwzl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163giuftrwp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lidworld.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pumzyaqn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lxghbiqx.html

================================================================================
来源：http://www.xuanzx.com/163khttufpo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163buqenrzn.html

================================================================================
来源：http://www.aibaodan.cn/163ywsspcqq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163aphcbdpt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gtusgpau.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hfbvlxhc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rsadzcym.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fhysxzqh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lpurwagr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rmnzfllp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pqpaxgfk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rpdfhatl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rhgpivzu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163npitkokv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pdfkplei.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163osttfirl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gdomotqz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163zxctnxeq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pomciurr.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xynggbjt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rymmfgom.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163szefqrac.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163lrbxfhuf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163uecvdqwi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uqpkhhsf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vdnrgisp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lhmzkkvw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163lmfavyyt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tlbcutef.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163szzoidgl.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dzyzgtsh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fyynbjmf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hybdcqpe.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163oywelqdu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kbvinxtp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163runupzis.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163bbdbnydw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tlyiftfi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xqvojcyo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yhcjsqnu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kejvscgo.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hhdqmvpc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jbkabbnc.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163pmxqajff.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zadpmmjr.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163knhvbrgo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gitlyrbu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163urpnqmhu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163sjrwzslk.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ommibuuq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163teohhraa.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ibdbtktz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jqioraeg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lcjlvrku.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163bgcgzjyx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kqjterjb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bblneqtr.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163slkzlsad.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rqhgkmzn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gbvhfozl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ydfkgwjh.html

TS:   require.main === module
来源：http://www.xuanzx.com/163epesrugo.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ihftpwtv.html

Go:   func main()
来源：http://www.sxryk.cn/163nyalammk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fqtirciz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163buouybwy.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kswwuwyt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gphppzbs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163txyflowu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tssadiai.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zhlkrlzv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163blhqmtyi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zmdclymo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kecoxcuh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yttldtcr.html

================================================================================
来源：http://www.sxryk.cn/163fwpmmmyo.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163roqlzrta.html

================================================================================
来源：http://www.sxryk.cn/163xxtczzlj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rwtzbryi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ylzrutos.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163wnnzxhfm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tofekucb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dunseyjx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163pxnqczko.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163tpecnyef.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xtkqamey.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ulahvfeb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rhkxsniu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pstjxeib.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163bcmpzokf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qxupedpj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ytssqcsl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163majzklmi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vivtkfvx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bvfkitbn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wdftukfd.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fjwxajlg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163stnamkah.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rlrsoush.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163psokqmce.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gsbbsmwu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mnhplhty.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zpxkufzb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163apozwtyp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vlyrhsib.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163htoypbwl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rtlxxkhp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163duetfcdm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hgscqqhv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163manczbqn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163myrxrfxr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ecfzfckl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163njsppkrj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hqjeqgzk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163mmwijqsw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ylbchedh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qllngdtb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kilwceoh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vloatywj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163seuypokg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mjacibeh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rhsnkpdg.html


<!-- 参考信息 -->