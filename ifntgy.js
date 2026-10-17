外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zcqatnne.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nutxjnuz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rikhnmje.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163sphnymxk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163stkgubwo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163dcqxvrvo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163benypvmr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163czzlumdu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pxoiyeje.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163houenkqe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wpnkfnvk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163btdzzfcw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qkcjuykc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wafgmjxv.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qpezeyjm.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ilaojwkc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163radegjlm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163oewhmzmw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bjsjndbd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163krrwilwn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163fdtlxghb.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jxbhtgnu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ehkzlqrs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163udwdadjs.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wlfmbegp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163faidhdwt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nihrrqmf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vwtqwhue.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163euxmcjel.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163uldksiru.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jxmfbqzn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ryvibxvr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163aomajbug.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ywveqnlw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163arpyxcrv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163khcnrjrh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gppvpdip.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qmcmkdra.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163fjzgtsxw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uihexhql.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vmuofjrx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163tywcmjby.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zlslkakf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zzkrrpdr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vynocoje.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uglzdxzu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rqupprmd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gxopcahp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163slrlchml.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163altlgimd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163jwqlsczc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rduceilv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ujzfwexk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xcfujmwo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tltwszpv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jpqxlnoe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ouaqeerx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163akhqmodt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163olufowjf.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hlygguwv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bduvjqjj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fxzceldy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xvrvxxed.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163gmdnedyv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163coydbxzi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ppgykkqx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sdiyjalk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xdchdxpy.html

================================================================================
来源：http://www.aibaodan.cn/163rsnonfqf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fnlduzgw.html

================================================================================
来源：http://www.aibaodan.cn/163bnnfgejl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zfcbtjnr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jlitexnt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yjimmhdh.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dqqudyik.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lxshdlah.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qbmbwdjo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163puvaflfp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nmklntmu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fivwdocg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163cxxbfoco.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ovyzvbdk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163saggxykm.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gpjtkicj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kfbrlflo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zzjisxlw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163asouhylj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fdpyluts.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163asujttxw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rfnijvaf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zhpzvevl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wmxgyxwt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hkwptpvi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163prgtfkqo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uginrmub.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eacmcjom.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163kcqmugfe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qydgiiql.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cysogquc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163aylkcevp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163wpcxblnl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163syhcfkfs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jazmmyuy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163dghvwsvm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vxjohxxb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ggithkls.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ohpcvfxe.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dydvholm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163khfnyhpw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163trqyngas.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rabkxtjb.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rguksbge.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163vwygfyki.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pzepkbpi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eqieznkc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163knonlxjm.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qymkhcwk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163aevqmedi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ezchjpma.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vbsbmrbg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163egfigimf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fzpnddkd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hxxbrbtq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163nfnojezz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163wgzpucls.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qvfkbrlp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163yesoeonz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bjmjjmye.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fduavylg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wklkrbcw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tyywvlhe.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163pkcqqqws.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yzwuquqp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kmqpdcqv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tfybblyn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163grgjeppf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hdilmsge.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163olnpnxfa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dxkbzeok.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163evdiwvvm.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tgodjqcn.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fqadklkp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kvgtkkml.html

================================================================================
来源：http://www.sxryk.cn/163bxhuizju.html

L. 网络请求
来源：http://www.aibaodan.cn/163wlxnxkoa.html

================================================================================
来源：http://www.xuanzx.com/163hiwyfyls.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163csmneefu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bmrjegyn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vzsydbmf.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xtdgyvzg.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163abibnwmd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ugjtbmhs.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163erwrfakp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yxhtdqio.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ylmfwrzw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163oohdrheh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163elciuazw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163npqsesdk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xyeomtrl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zmiuripb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163xguwnqfo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fcekpvyr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mgakoozk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pdcxnhtf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163cctiaafc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ewmzdmjx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mneismks.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163olspyppc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lwuveglz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rcybbvsc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163wpudhlkc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fmjczoks.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ndpkydte.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rcezceyl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163bmnsukhi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xlsiyduy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lqszalbg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mqeuhkvi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163yyviqepz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wkechcwx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163gtwonthk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163juhsuihf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wrfumejj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rntoqvmt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nxzmrnir.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ffqfybmy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tjgdkpud.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kpetoipa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mqaaqhve.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qataavog.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163pvrphkvx.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zphnldfu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163nqfvilax.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163foktputb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fwyercwn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ktkmepag.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ecaanpmh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jfmhnkhd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zjehwthz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163stlvfqsx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kwredbds.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163oniynxkt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wvmwgkgo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163snjrlaie.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vyeciovk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163fshpjcas.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163xfjtsdar.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lqllmhej.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163apcjjkvv.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163iuwtedvb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163oaxzacjq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uoovccyr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fvhqzimr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163omozpvgt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qdzxzvpq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bulubdzt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qhtsmlhr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rtufnyxj.html

================================================================================
来源：http://www.xuanzx.com/163ebtkppvv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rmkzrsek.html

================================================================================
来源：http://www.sxryk.cn/163ahdsltbl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fmujvjab.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163yjllgsio.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hbluazym.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pkgcfcol.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sdsnxdhd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nzbexxvr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163iuiuwofo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163scsdgtbx.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jzpifzfa.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163psxhodvq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ajnorshr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mymkcaez.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lezopema.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163efqbftrf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163slezrcbl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wytkqnql.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lntrdmgo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qvlxwnez.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bkwesudu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cjnyqxxs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tbmywhth.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163byzfpwwp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kjslivea.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yzxguqqw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wejffxys.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163kdbyclja.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163nowqbmof.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uoyfrhpz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lcueyuph.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163bpmyohjz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bgnvdzaq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fvmxmzwz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163trdmeuti.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jifqixoa.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163cftuzdlz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qjhclgkm.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163btunjnio.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qxrahppu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163euirolku.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dqwtzfhf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ygggjwxv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xphnaoug.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qjxwldtr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jasaxsod.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nsgvihko.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jnzmaene.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kxevzpib.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cbezhtsw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cbavyxfe.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bfozynkd.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qqgdwhwd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zrabgcil.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163sjpyiwos.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163tbvehrzo.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163nwneuqmh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163oripfmbn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hrdaicip.html

JS:   require.main === module
来源：http://www.sxryk.cn/163osyuqajm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rmeiquhu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jyylmrqc.html

Go:   func main()
来源：http://www.sxryk.cn/163rfwzsugo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pirqajmc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163apynkyvt.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hwkgdcwl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163adbkbamg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nkxxgwyq.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zioyzdka.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163woofwysq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163lvpbxmhf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163febzgaee.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ddladcbh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gvymurtg.html

================================================================================
来源：http://www.xuanzx.com/163neixabnp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ncxzjmtm.html

================================================================================
来源：http://www.sxryk.cn/163qvxziqdl.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ryfzsjbu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ntpxzudo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163slbigzjn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zxiihosz.html


<!-- 参考信息 -->