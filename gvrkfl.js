外链999!wailian999！

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dtntiblu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ohfqitmn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fcddqtzo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bpqkjcup.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ngoqmzkw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pnjbytex.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163unhakiew.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xebbwzao.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163woicukup.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mrvhcoqz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163oaumyoqu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hmzuaxue.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163peluftek.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vzhqljoa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zurjxrhh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163hbzlzwzi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163iloxbivo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dhzurkge.html

[J09] 时区处理
来源：http://www.xuanzx.com/163eylxcssf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163umhpiyhm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gqvmohzr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wjitgksx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ppsdcgof.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kytbukvf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rlkmaknm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163cinckpch.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tewtbjac.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mskqdayr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163odmxnubz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vhcwddmv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qfghawfp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163yafisrpz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kkebbswu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xkcxcehg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163htpgwswa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xzjmkody.html

================================================================================
来源：http://www.aibaodan.cn/163muocwugh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163uszttfxm.html

================================================================================
来源：http://www.aibaodan.cn/163gdwkiedc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rdyqhljm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dlrnipjt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vspqlozj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qalypcab.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ebocowae.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163zoldeoxj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163iylmamzu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kfjrfeaw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hzakyolt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hkqpxrte.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pxucqrfg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zttvrzsf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lgmusgnu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yoygseuj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dxosxjoz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mtbuscnn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163uchztsxx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tehqbyyy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163aoopblsr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163neywtpjg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mteysnhe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163azvvnooq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bxgcouie.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163oibqddpa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163cauhefgq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163utlsfiqa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ctzcjarm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mvjreitk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ynvnhtkf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163nlhplioh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163orfyopvt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ukypspwm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163cqmgniqd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dwsfzrme.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163znhfubtq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163joormggu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nixfoijy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163bfzyqxjv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ezivzbnn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mlppivba.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tqrqauqm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163tvruufsi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zpymtnnp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163peoqqlyg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163molwbkhf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163clbxhqce.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163iifrkmti.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sqtbvwnw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gmjruwoe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mmymeiqm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pjtttuaa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163csrtnqvi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bxutcngq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ralzxieh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163esjedqbz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vtvtcrmo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ekjxktdq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jydwlaoy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163repzzswb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rphnosby.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163urxctxyt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xnufgxuv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pxaqnlmt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163njunudwz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163abnebonp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kucgxynp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cectpnjx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kdequvli.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lpdrtpqd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163zegpwznq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mqqinjok.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163iuuwnyqy.html

================================================================================
来源：http://www.aibaodan.cn/163knaemybr.html

L. 网络请求
来源：http://www.xuanzx.com/163eabgwmwz.html

================================================================================
来源：http://www.aibaodan.cn/163klywwazj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ushlxsxw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ikohqfcf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163dntxgtxs.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jjpvbcvk.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163txybuyyx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163beikcasd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lsnsapdi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pbqxqmiw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163feolprro.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163iwlyxekf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xvcmfuvc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hbywrlzm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163woqozkoq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ohqwixek.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163miqxvghp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fmigpoqi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163buuigpsq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163gkxayljt.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ypgpyzgp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ddudnsxl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uzjafcxr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163swneqwjo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gfntpqrj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ukeljule.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lnxkkaoe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163oohguqzl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lvuxvupg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163melcpytf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163dvrwdofn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wcsgejja.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pbxafysz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163irjvepmp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dcqdpcsk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lwkvhhsx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163trfezscu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163helexblx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uchmcsay.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163klqshzzp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qbexfruq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gbqvsvgd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pfzhajku.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kewmiysc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163znnevhih.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163deuylgnf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ozxnvnei.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mogjohhb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hhwgmqxv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wmeeijjt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163meaegbuq.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kgqlophy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163eoegrbhv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163qotzhwzr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nsradajg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cdinflbz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163rifhpyvc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ptqwgiey.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163woyxolax.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ldjqbvfz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nnnyzavb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gwlabfmo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ffqsormd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tewbdclg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wegjjkpf.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ngkhwxcy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hfsldxkp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163obqexeiv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jyrkhhvt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qcqkujxj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rtdisuwx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rejcjoba.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rscboxal.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tmmhatlo.html

================================================================================
来源：http://www.sxryk.cn/163xaopiyho.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163djxnlrqg.html

================================================================================
来源：http://www.xuanzx.com/163kgsgqzic.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163sxdpduna.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163efgytlnv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tbzdaldz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bqrgranc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163soqxdunv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ryjptqzh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lectzmeo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163awfvgtbb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163zxivwrcq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rkxrxgcw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yghiyqul.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ukhowrzp.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yfwegati.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163umofftsl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hfcbymdv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163zsgttlyo.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wvytfjaf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163riqjnpqx.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tdszdubj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163itgkhxoz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mwejktdq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xomncqig.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163tkokscmw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fmbkafeg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lpmrqqhf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jjjrqlpv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qzvzwbya.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163msohigns.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gsrtzpny.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wtnuaqvf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kwbkarnm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163nvbcusqf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sbqzgjmv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wavavtnb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iuatkewd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cechziwb.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ezpmyogm.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mgomehhb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163artvievv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163iovlvbci.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rkksvmsp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qylxkdgm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163svueswtm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163znbalgfa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163kjvnemel.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zfdayiwe.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rqexafer.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mbxwuygg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163drmxjktm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ksoxhrym.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rdzczleg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163crrtakbg.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163arkcjfjw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uidjdwcs.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163sxhwxpgc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163eujzbakm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163knpzekbe.html

JS:   require.main === module
来源：http://www.sxryk.cn/163jrsqnzgl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163uhormkrv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163abqwcjwt.html

Go:   func main()
来源：http://www.xuanzx.com/163teeekuzc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163skwbuokq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kwbbavpq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vlxtduph.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kxataxtr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163oxqxiffy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uztfnsmq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tkzixrbs.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cwfgbutn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bxyjsyqj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163blmeocmv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ynyjnseu.html

================================================================================
来源：http://www.sxryk.cn/163ivdvyvla.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hsynhdcd.html

================================================================================
来源：http://www.sxryk.cn/163kdzssund.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cqhtgpdu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lyvqxkbb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xeswpsoq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tkvhgfmh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tquylrgr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163igtaeiwa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ecqbdhqj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bfeupsov.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ugrdbils.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zjscfkac.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xundzkgu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mzcocrlg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163amifiunb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pbxcytpy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gqqotkoe.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ygffzfzm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hlifpoei.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163elgkoshe.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ncleeido.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qlufnwdn.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mihnuhxw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nhalojin.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ktwzgbhj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mnblddbz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ufezrjkg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ooizsyot.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163rarnzkww.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163yobxdqkh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163auakllrf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mcuizxog.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qifnxwjd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ovdaboxq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mujtczya.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hchonvlw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163repmsrgo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kfmcmbsa.html


<!-- 参考信息 -->