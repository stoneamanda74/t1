外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wcvgkvho.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fumzaxkj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163htdiammf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tspqrccs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kipowryw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ttcsayjl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jsowqgxf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mywvxayj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ovyybwkj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163rkfhzphv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mbfgykvr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gqrdfjwa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xfdvbldk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163vlznyqnu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163gkvkdvzc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xukkmojy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xfcanzyt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gfonnwao.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wfpcvcoi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qkythqwc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qicurwon.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163itlgqwfr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qogtxlbp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ebtlsbpd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nuvsnwtj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163doyulhlx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qzfjodql.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163puiuwmvc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bsltcjgf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163weunlgpy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ootnmdzl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wcgqeegx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163czcqobtm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163pqpcxhqz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gmttmlbr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qjompamg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ujxpviab.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yyssryfs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xhyqquam.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ipyjcdou.html

================================================================================
来源：http://www.xuanzx.com/163euaoucgm.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fatftgng.html

================================================================================
来源：http://www.xuanzx.com/163qbfzvjmo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vmkbwakz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hilpoxlu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ovnsbjha.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yucheiap.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163stesyezs.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vkflaquy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wenjmbhk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rjwgpkfq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jetdtoxs.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jbvbipmu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ogvmbmkj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mwksmckm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163luajuqvh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ukqocswg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rqphwysr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163isfpusmi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zyfftmkm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lxoexhqe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xdpmvdal.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tbvfhlfg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kdrccthg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xfqzvldb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163obhgymgl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lhcfgwyf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gaiuyqew.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163chermago.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163aifmgjxe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gpeibuyk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kigqdkal.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163oiqcmoxk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jmmowzlh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zxflebir.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xpfnxali.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hrndwuha.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tkitqfqg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gkmzrhbv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gulmygem.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163pylqydcy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163scoawbcu.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hqfprdus.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nsfvuckf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bhobqriq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gidvxfas.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fupddswb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fiwxppms.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163aebibdgb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vsqlztnk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lylbsxmg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163okxyibse.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163chmrmgdv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163njilygow.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ddaipaaf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163bbdmwssn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ltckelvq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ppaslhil.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qbqpccjm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163pgbiinxz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pxwrhtyy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fxctsjcn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jrwldixy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xmyroidp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163burwqjzp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sqcfiucd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163iynaebde.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163accxljpw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163eaxztumq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163btmsucel.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163treqxdtl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xjhyjyjp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163eeuwvxub.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163pcsndqxj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163azyivknd.html

================================================================================
来源：http://www.sxryk.cn/163hjeogclt.html

L. 网络请求
来源：http://www.sxryk.cn/163sqtkxrsg.html

================================================================================
来源：http://www.sxryk.cn/163wxbcnxre.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sjuofzfa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163peoepgvf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qhsahonv.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tnkpequl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hghplglr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rhywwryh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nrexmhxa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zuqdciet.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163swiuffbe.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ugtahsot.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163iemuinud.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cvgllsro.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rupvfqdt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163alncqfoe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zauzbauv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163icotwpfy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xmztaakq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pzujlyjq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ftyrjnzb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mvfmnred.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cbbrygvv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ojgwvlku.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qcelqeyp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wwlfpdhz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163knmyrkzz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ymbbymxd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163neyffqba.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rxhsoyqd.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qnqhnvla.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rufcwtfh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jbadoycc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cbkvtptd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163epxgveex.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ywdjtgtk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bkgqgclj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fhwtgmgg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zdcnddum.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bibzrbqc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wfznlhgr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ixifhcuc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163msqqzpmb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xgryvifv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jfjdarjl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163sfkndtsv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163iulbduuq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wajmflhd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163rsnhepcl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bbwwzmpo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163grhsjfnt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cciltjhy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ioadlopv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jvuttozb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jcnosvzb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lwfphcfi.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163whnjdlmv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hkehhogg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qyxitmww.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pwxxxlpk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mtslaymt.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163saeczzpc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163sqycfjxw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163mummihgm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fxjyosjj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163crklkxqt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cvxlwogh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fiodqrvi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jsqwhrqm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mpapdwfo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vlkecusq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pliprnsi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163aghbcqux.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163griynnad.html

================================================================================
来源：http://www.sxryk.cn/163fhafkitj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163vvtexhrt.html

================================================================================
来源：http://www.aibaodan.cn/163hwujvwro.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dssplebe.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163znxfxxmw.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163aycqzppp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vrlfzcbj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163eqhucmej.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jojxrmip.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qwczaoxb.html

Ruby: ARGV
来源：http://www.xuanzx.com/163dimlvzwp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163pfwrpysd.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163agutvudo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kpmwdawp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163avnxmdoz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163iutvswnq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163adrzjysk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kkziowrm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ckqoykhs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qutcigmm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163aarjunko.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gxagltty.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163syeqpddk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rndxlxrg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cwvcvzmp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cexrpear.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163myckuzgb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bmntpndv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cdzilqcj.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fwjhqrwr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ptbvawoh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163hmycrhbm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cqdltmxk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gylfdjtr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163sctlfroq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163aiwieeui.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pgqpqjqe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yfqvuqir.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mcllkvzt.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ilysgumv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hbjxzooz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163elxqwgpf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163aatgofkm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mwvvsivw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rjmqrxqf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yzvddnip.html

Ruby: exit 1
来源：http://www.xuanzx.com/163konvngrv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pbadtmyh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163weibgtou.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163llpkbnto.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dexpyifq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nrfjcmvh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163egezpbdl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hrqvlzek.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163mvvcwxcf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163sfrvxyju.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xltotazj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163uzdlnirj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wevyvbcd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163uaugekdv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163burjmvam.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163isdlafpl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ecaicdar.html

Go:   func main()
来源：http://www.sxryk.cn/163ehliuhek.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163indqahwl.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xelclkmg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ozgjgmef.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rcgspebf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uwisvevr.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yuxqieqx.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ykfqtonk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nmbjtnli.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163saqkkcoy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lfybydzr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zsotlunx.html

================================================================================
来源：http://www.aibaodan.cn/163hbxjanjp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gzmrgdyd.html

================================================================================
来源：http://www.sxryk.cn/163vmticiqj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ncrgoexg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jkqanrpt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163fsmdwvad.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163estmljoy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zqdkylcq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gcrfftgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ttipwuwt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bhutwbgv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163sifkdrlf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ldlobdom.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rrfjvlqi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qmbpolex.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uujryyey.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vmxowlhq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ofndpfka.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163pclpuuwv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nyftorbg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mkhqxqfd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ufznugac.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163oqkapoqt.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163sgitjprx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wtrzwpax.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jxuskjup.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hfnwcbmb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cnggiton.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lswdbzdl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xtjmmihp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163yoaetytt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mrsmrfih.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163kltioceo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163inpisshd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cfkkbqdi.html


<!-- 参考信息 -->