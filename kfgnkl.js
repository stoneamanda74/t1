外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mrthahyc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wjuaxpfz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xckxdntb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vaycotjs.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zkpxcapz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163olsrykpr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ufebfowo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163adxdwhqx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163klbulmmb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qabnitcm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163twxosrne.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zigmwajl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ogswntkd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163knionfyg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pdvqrdel.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163glvcflbn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dfhkvank.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hfpqqycy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163zotgcwfc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ytpocdlf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lmdfspna.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163znlvhete.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163frcwprxa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163frbechup.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163cfzxtvij.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163uujqupoq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nwiohxgm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xjroiqaq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163drvuqgrs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zjmznjum.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tzhbuxkr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163piosjcdk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hnzvpyzm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163baarzmnn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163kitfhzei.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163weklyczp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163efbmebas.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yucedcjz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mtpbyobj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qfzqrmwr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163siegkhvi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rzpxlymm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163luwiyitg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bsdpnguz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bswegqvu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163wujwtmkw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fpcoxvbc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163kvgiwhkh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163svftaist.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kgsqzrad.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fdhzwbeg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zhspmcwt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wflfohvl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gbaxboun.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fevtcnpy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kgguiqyk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163carcwpcc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fwlrrxqm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163enodhgld.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163elohicll.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wcvdgcfx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163lpewnbne.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mpvutdcq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zxdgqqnq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ixiiemts.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163crnapnet.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ofuvcfxx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163htptkhsa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wnwtnwpo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163tutsqwqk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ivfkvxtw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163iketjemh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tgkjldtd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zuqhawbf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163juhkkgtc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dnusmdek.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zinithnb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zqgycfnq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163axjmwgxs.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yupbgpue.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fthuetwx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qjnwawgj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163eibydhta.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pyrwenpb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ecxqrfmr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jwrxjprl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163sxtxjocm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tusyvkjk.html

================================================================================
来源：http://www.sxryk.cn/163oxgzqnde.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163aajvyctf.html

================================================================================
来源：http://www.xuanzx.com/163kdchrpem.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163anyppxvb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kqwqtzns.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cjlgjoky.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bittuxsg.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nwejfxig.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ndbaoggc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163kqdornwi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kxknldge.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163aiznyjph.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zfbojcip.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163gcnhunat.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kokeeval.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uzvurmki.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jdcxdqpt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163uvcormqk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qbxudvev.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163isrdccun.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gblwyhvx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ufgzdhhd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ajmmypif.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lxzbwvvt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rtriqkrs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yzyifwhz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mputmkky.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163sbjxnmct.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ohujhlqe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mubuuepd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dabsnsnf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163spmtdlfc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ruhzxwwe.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nrtdwkbd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tucdujmu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kspgcwhn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163snsyxfzd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163yyilcmwl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lhptpwbk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tgvefzgv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wqnnqqad.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uxwiraoo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zpannzvl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rmpavxei.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163spmymycw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hbkjheer.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163voeytltw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ctjcooxf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nudvvbip.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mzofdflc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mvfgujwd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gqjgxncp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qlgxagvj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163otfvlgwk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163prpchgdm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vmtntosy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163eatiozev.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cczhltcb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pmykcgby.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kzreldvt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xlpvvrns.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163axwdbeok.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zfbfsnwa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pljxmosg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ztyyofvg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163plogpsas.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mlihlmtf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163irdxdeyh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163pgxfcnfi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dyxlinkv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ccucwqyz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fvftsmlt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qdilgqhg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dzkwcges.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163rjugtttl.html

================================================================================
来源：http://www.sxryk.cn/163rfehcngq.html

L. 网络请求
来源：http://www.aibaodan.cn/163dpmporng.html

================================================================================
来源：http://www.sxryk.cn/163wxoharqq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pxebkgyq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163whdpfrww.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xlluizhg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gfmnmjnr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163bilnqwag.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zehngjio.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163anycflan.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163jkciyvev.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dfgjkhay.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xbwxgdwb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163llkeuwqs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zbpngnfb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tzmqhxez.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wjjknefq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163fjsjwnfq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163grciszwr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163piztverq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yqnpofet.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zdsxmrcu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kemuanpf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vfteybjx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163srwkwsak.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cjmvlyml.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jpxoxlqf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163aadvgfgf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vsazhtnq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163auhvorgo.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rskehcjj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qgvjysku.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mygpoplh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tyhwcsaq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dndxqgnu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163eetooqtz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163woqvmrtx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ffvsaukz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163stvnaddt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163agfhvxje.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rtypixzo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ixcghnwn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jcjklkzv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zwoqwyio.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xfdyhbde.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ckiwbbxt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lzizaciw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xkobpadj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163iiighbvy.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lgbdqscf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fztmhgpb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163alsroinu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163tmhqzeqj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163hfwoqijk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163osfherwp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163kubvoygw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zetoowvo.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ieqckxna.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ecfxgazr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bgjfyfwy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163soxqenpc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vothcqyv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vjusyodr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lswtceaj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vwhlvlfh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163qheybuyb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qhkblkow.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vlqkjisa.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rwxmqcgn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hxlvizzz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163favcquya.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163smmvgmjn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zbfrapmj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uvwqquln.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163vuutrbog.html

================================================================================
来源：http://www.sxryk.cn/163aplhugwv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ktdlenve.html

================================================================================
来源：http://www.sxryk.cn/163sbzcfdod.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lvtqemrc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163prfhfljx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gugxcpim.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163runipfzy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163czdoubwa.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zcpixxjb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xrjjicko.html

Ruby: ARGV
来源：http://www.sxryk.cn/163oazraczy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kohpzuoy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nhsfltiz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ieofwthc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qthphqdi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lygmrnrg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vuwsncqk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yrakctwr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ohtwufov.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fttkivca.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163shwiiqfn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gjpxmunc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ufceudkk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pcjwroqu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mvzydofu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163llrweolq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vnjpbeej.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163eopqcabk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fovzgfbs.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lbxdsmxv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gqpcxdzt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163pesczcpb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yzavddqe.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gjwwwozg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gvuqnrnq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163oaogcobm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163phtfcsik.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163szwtpaya.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163mrtgyqba.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vhpiixpc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ejbynifi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wsqvuelz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qjdeumic.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tzklfcsd.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mkrfwhnr.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ovpzncbq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rwcvyzhx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tzlclhbc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cxypdyid.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163njvcvoab.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wbxdssfo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yhdrfukn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ubmkzeen.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dxcxqllj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wbwsfyvm.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163chvnhvcz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pyrqylfx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163scctycfn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mmmscvtl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vapsvqoc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vvsngkxn.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ofgbqvig.html


<!-- 参考信息 -->