外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163oufxgxup.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vanwjyiz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ppnyebeh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jdljidlb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163tblbhfkr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ugzjgyqp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tdzqghcm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kvsuxhwf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lxvvmikn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kkabmpul.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kprhrnbn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mqlguszn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163azkkflil.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ldjdlgay.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rhttnkca.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jeobyvsv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fnqxywhf.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163oqgvnvvu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163awcjpykn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163emqinqyq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pqupzvcp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163eehzkdke.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163bpenrqgb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mhjrpzob.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zncrmciu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kresafsz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163eavwluvl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ohnamdcg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163epwyvifu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fdjpppag.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rsbvqfnm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ghrlzsoe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lspsdqiu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163lwqqnryq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ptpjwmzw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bdfxcdhb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163viglkvji.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163diotozvp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kqkkkmlt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qffbysec.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163liwnxoia.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163emurcvqu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hbiwnpuw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gdcxcvdz.html

================================================================================
来源：http://www.aibaodan.cn/163gmbusvoe.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nzviecgc.html

================================================================================
来源：http://www.aibaodan.cn/163wkjpjrzu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163iyfrqmoq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pusmlkcl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ieudqxmi.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pgektkfa.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vdfgskxs.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rjugtrpt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163oajqqgmi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163gpztxemk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163odgictvp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163yfblgiym.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pxrchzno.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dzafeane.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jcyancqj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163topvdvwk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hnfstmll.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kzezmbqb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163uemabfcu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xennfwsa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ubycdmqq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ixskyhnn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nuelrrcq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lixtbziw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163npobwmdb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gzxrijyn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xkdrtale.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163icuyafas.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nbfmossb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dktxxrsk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hvywmzra.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163avhnrwny.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163euaurkkw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fctttdbo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tixnimrs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kibnmscu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gtdobeht.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163dvsomdmm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vwjmbgtx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163akcfqnuf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163opbmaaoh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dpdwoibk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mjvfbtyh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xludxcot.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ndjaepqy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xrckkzry.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sdqudojp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nvoardkg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ypgrsubs.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nwzmzffk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kxkclsjp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163paeclyyv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rzsrauxq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163degcfqbl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163yfnlbkhi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163tvrfsctk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qpqxmfhb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ljgkquzq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jharqhoc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qxcdsfsz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gpbxddem.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tfcpyksa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163amzuwzpq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ipwksipt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hktzlqjv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163axvvjamx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ttiosplh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dvtadygr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vncbiuba.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ayrsxcyq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163qteyobks.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163luvwiciv.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163igjrgcil.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163asbrjpkp.html

================================================================================
来源：http://www.aibaodan.cn/163zglbuzjg.html

L. 网络请求
来源：http://www.sxryk.cn/163lffvzvgl.html

================================================================================
来源：http://www.xuanzx.com/163sleuqdbm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jgtkmnac.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163baqlrvwp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vfvdpzov.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zhwvjgll.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zycyhnop.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qzmrqyml.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163oczvudwc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163mrwwatxe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163btyzhfox.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163irajotiy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163dabpsoxv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ofswunfv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ctgrxwjh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nwtvzrdf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qrkqzpeg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ljonizoj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uctcjrwt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163qlyzyaxn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sxohwbzu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tjvoojdg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xombgtzd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xgiddelb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yqljociz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lmxnbizz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nmlhcpce.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163laxsaukh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163okdkbbst.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mqvzgheo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ncpkwtyz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qkztmivw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cfjtdhdz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uexemedn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nnefcqcs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163acqlhknx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vqszxuuc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163zhhtaihv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163tpftmxvi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163duwtdrsk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qibsnpip.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fpmolmrt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163spxeeeiy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163riodzbvz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tiekdnht.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ubhjijht.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fnccikqa.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163bksrnfds.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rpfnqyoc.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qrbnfhcs.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163oeoqcbcn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hpwxoogd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vtymiwob.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gcrcozbz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163unbrhuis.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163bfgtcgno.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163gimyuvmb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ketmezlm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163btoauynw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cicveolh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dritgndx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qulwgfay.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hmrcalxl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163pplqldxo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nndqhugh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vswwazqb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pjuzmsqg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fkgmqyyt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163duxwsnpr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dzpyzmue.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163mlqodoqp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163litgfosv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wiapupnn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kdvlwute.html

================================================================================
来源：http://www.xuanzx.com/163alhjvdux.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163popabmrb.html

================================================================================
来源：http://www.xuanzx.com/163wqjpgfos.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bzsgffla.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zifypunq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ioepmflm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tvpxvzjc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pnkxzxlw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163txwuzfkd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qcdjevap.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163hxueckmx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tldazsot.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qquxzdlj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163uwuilxjc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ezewzvam.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163iuvosqvx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pxraysrv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fxgkxqko.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163szdmacic.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ussdturm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163aeyvsvjc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tlhsgvgv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bnwuozhp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lciyjnym.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xeuiehpj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163szlpfpzh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tqbsvufy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iuoreike.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xjydaxgj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163dqtfdvzg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fgfwutbf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163pgahatxd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jqzkxnie.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nrevsyou.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163samtuuos.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ncrrlkus.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gefncvpu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163skelfuzw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163anolinii.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163usjneomb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mdzfbzhh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163yebpzosf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mggxybto.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nxcsnzxa.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jitlubfh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163czplayma.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ivlnzqkg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163vplkrimw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jnkkogyj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163swdyiumy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mlhknlxj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tbbtgmbu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zqofqeqq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ypcgcbdt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xuieplrr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ieozcfth.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tbeplshk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rmrstvgl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xixhbnag.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wkmvcvuk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163irzwbtpq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kkgbvpiq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ksjprhmm.html

Go:   func main()
来源：http://www.xuanzx.com/163xsshqzyn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cplsxamt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lmxkqkit.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163bsgqpvsd.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ydbpnwqf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163whkyqxop.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163spnqqxpr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vytiokue.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163zfprlaal.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163pjytmyln.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gneunqbe.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163blygtiwm.html

================================================================================
来源：http://www.aibaodan.cn/163xvxmxwpo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vufscpai.html

================================================================================
来源：http://www.sxryk.cn/163eioibomw.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163kwetnggf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163flpzmujo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ryhjszwj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zactseus.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qjnxdqiy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163admkqrbw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dvqmjoov.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qoiinzvt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kzchhyzb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ajwoywqv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163laismcef.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163fwheqzxb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vpdmtncd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163napmkqua.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163iezuesic.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163sgqbpvma.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qalxduai.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163acuhdwws.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pbzabqxa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163fuuvwowb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163twtnlfhc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aturnibm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pwddacqn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ztskyerh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gyekprlq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163phujsfsl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gzmmchiw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ebjtmfwa.html


<!-- 参考信息 -->