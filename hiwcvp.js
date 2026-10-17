外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163azhljbfr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163jdhqaoan.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qzhaowap.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lvowngmu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gapvyzvd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163iovnzpfn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163bjaxpqac.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163jlqyzspi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bbqlbwsd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hzrbkgsv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yvlpfubw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163jnvhpkga.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163oqxudjby.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lwdytgfl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gjfbjfix.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163viwkurii.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rbfmcwjh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163stdbknih.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163npxibqqt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mnisyitp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163bpqwqdzw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lwytgalu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163jvwxhjsw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ncwcravu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ghlnsfge.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ilrwzzjk.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jddnotqx.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jpzokzeh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163svsseeul.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fwwnlsia.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ixyljqrn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tsuuslfm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fnwlojir.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pflcqoxu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kpccdqyo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lrxdwdnh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bneymrzo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163eaokrnuj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163apvtmnut.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qeolvisj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gkorleyg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wctrxdnf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rwnihswy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163enadlwkq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hltrfnmq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jfqypslt.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gwbapgyr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hywumkls.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zvwyjqtn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lwumrwtq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nwdhmvvo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163htblngum.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163raknyhoa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163sgymtrry.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ipyosqwi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nhllncad.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163etejrenq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163adkryyxe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pookrgyl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ogduiluq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163yjwguqxy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163begbftwz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dzethldp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dinwzhgz.html

================================================================================
来源：http://www.aibaodan.cn/163xvxscrfw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xfopnxda.html

================================================================================
来源：http://www.aibaodan.cn/163xffjevus.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163umbhdzzo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163guinyfbz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jshaafdp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163snmweklp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163adpfrdhi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vdmvwenv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lyqjjhnh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vdjnukmi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163datyvpwz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163znjesmlj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mjgvwhwo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qhktzvyc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jvyvgvnx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lbvbwflw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jmgpfpbk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zlmbkswi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ilhpczda.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rtjmjzxz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ebpavfhx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rmbcdxjs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163aakwexrd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vmekccej.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dmwyppwo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163plxinfmp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163pihjffsg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vlndtrov.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163unazgiku.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163grbqhlym.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163qbwuqgig.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163olcnlygk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sxofrnpy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bksnxenq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hukkxszh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163keugagqy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163prfuhesx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163tyjtdddh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fldlqrug.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163oipmjepg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ydwgmuah.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wwsxhabq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163isdxpevu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163knwtxaux.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rpfknftq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ybbsogmk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vrgmzltg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zlrssglu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163huvibeuf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163yoilfuon.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zeofxwcd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hiqryfxo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wtjaikoh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163guyfturq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163athllpmq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163msruycyn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163iskapvca.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163aperwvkq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163diyftlxl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jyloeqps.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ifobzkaj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lualqiwh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163smurgcla.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rfbrlevo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163cakikrfo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ryckrjms.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163sjmnodsw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xikpssle.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163saqxtrbt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jrpctppq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rudyntlo.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qljsgilz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163cxekwbvc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bqaniraw.html

================================================================================
来源：http://www.aibaodan.cn/163bvodbysb.html

L. 网络请求
来源：http://www.xuanzx.com/163cjdxrnrv.html

================================================================================
来源：http://www.sxryk.cn/163aowjpczf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qymggeib.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163utelzuen.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bmzbbleq.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zyyxntey.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163dxgpjeuj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mfhtxrav.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rjmmhgvc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163huaquutt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dplmsnrc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163deyfcumo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163alzuilgj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163yjtpdqkg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hfwyreej.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163eirqrxim.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lawfehfg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pcmhxzwi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ozvwfnia.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163myfmumqi.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163umismrit.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xmiepoqa.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lbreudva.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ijxcryqo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dscjomzo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163uiaoovew.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bnynfvdj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dcvnqpeb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bytjzboh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rkiuwfuv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xzyjcwwe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163liyxqtrf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kvgtdxjj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rooogwez.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163oiaqphso.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jnaxujie.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gasqzyvw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tgacckkx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163nyxxaydx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mhwonmfh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mvfbitxk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hhvgeslb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nujqcdxh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nkjmejha.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163pcbrysru.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163tqoytlux.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163udvgmhpv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ygcrjtbn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163irdsewlo.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bzrkblvo.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xjdduvuv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ulyulzxo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pydnekgb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163jeobppmu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163dxaguqne.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bzgxsuny.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ohyreejl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wjjveejn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kwiscirp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mfrymhao.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uxrustav.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ppsndjnu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lizydanw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tsxnirxi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vkbwcaxl.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163cymoczgt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rppccyka.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cdxgbetd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xeexuqui.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ubkowsuf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hhubhvld.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qoejxxwj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nfkmehwe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ghepgwot.html

================================================================================
来源：http://www.sxryk.cn/163jozgauxr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kdnzzuve.html

================================================================================
来源：http://www.sxryk.cn/163ewimujmj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163klboiwhq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wxcgcecn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163etgddcom.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bwgmrwly.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jzytkoxt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163feufzcim.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rketccpa.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bwgfcbxh.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xpowwsbf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vwxsigod.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163dqantqed.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uinxmkyk.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ulsinfoj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nrjkmqsv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pnijsqen.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hddrwbyq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163dnglsaqf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ggffvecj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ztfprwtf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uzbgjsjd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163dwoqriki.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nlasmwhw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dsuohztn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hbnezpur.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vcatjoql.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jzpwhkbk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163djhcgfcr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jqsbmwfo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163adzjtgwv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fzzfrffh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tkffeyqw.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wlywnmaz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gxeopwfw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mrsfbrrd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163eylqnmmb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163arprgwvv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163hyawrkbj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163leiyrddm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jernyvpt.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163acsmezau.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163glpuisoq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163iesioztq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qkkzfhzd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vugkqtfm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nalibtkp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163mczlnlue.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163epsaeyvg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ecvtklvt.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ygyuhlei.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163iquzpbeb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rlxakabo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dkphhczy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bownbznv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pqvqcymv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hxmpuqms.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163frtrqonm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bzywydlc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163iacgdagj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163fyaghirn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163uhpfxpln.html

Go:   func main()
来源：http://www.xuanzx.com/163xisvlsmt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ptcoadys.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rrhvydql.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jmyeffcw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163thjrqqhk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kshufczn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uhabqkgq.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163utxhmikf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163erdeyrux.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163krwcxiin.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pjpykscu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163svexabjj.html

================================================================================
来源：http://www.sxryk.cn/163fwssqnvb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ccwzsbjx.html

================================================================================
来源：http://www.xuanzx.com/163ocalmmdj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163oenlfwzt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163nkemhnmw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163yfxarkqw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lmqswbck.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163upczidvt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163oqcatigl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163tkdvqjxm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163dfsyefel.html


<!-- 参考信息 -->