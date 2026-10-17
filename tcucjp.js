外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163sdyaispb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hatwztkc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163scfciymw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rqqvflau.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vujndynm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gonizkvo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ruaclpek.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163gbnodkyh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mzemfrid.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163djdpltqk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ocuxetzl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hvkidjnr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zjqyhcrs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163uitxzpus.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163gohrlyup.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ubuwnllg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163uazizcdx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mwglfcii.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jzmiqopa.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eclhoesk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rnygqzzj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tqjmwwhd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163omlieopy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ydpxqinj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ircdtqtm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kxnoohir.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ddlcqfeu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ezgbvoiv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wggmotaz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yjcqvlvn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163clavgaoz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ggjukumb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163shaodmdi.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kqsmkkzh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163dxrresfq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nerjltkt.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xgclsami.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163obcfgwrs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163elngumkt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hvxxlyuy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rbjzxhgj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163zztidrbn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dbpsiixr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rvoagucb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163paumpqyg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qgdigmgu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163yfglphiq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163bolesokt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163eitduqch.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wbbmeyph.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163vsbozixp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163atlyiwog.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pbuzzwwy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xenlmgvo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hwelndpu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xjhpaujw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ibkvgdyc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jbdajpot.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nlsukdnj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ndbyhtid.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163hgkcfkqp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yosgrqzu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163oizbkmom.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wnbbhync.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ngvlubeh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dzopoldm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163avurmewa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ptslkwmz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163btpctmdp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zxvtxgfd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163nfxnztwh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ydpasvlv.html

================================================================================
来源：http://www.aibaodan.cn/163bkhvthoh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hwdwabtb.html

================================================================================
来源：http://www.aibaodan.cn/163eqaxwvbh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vvdxoaxc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qkiriknj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uujumkyo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pcykrzau.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bfxhprtb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jrubdkie.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ehporfqp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sfvkmwkj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gamkuyyu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163yzuosrik.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qfvykdvp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fjyiacsc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fwjqeccn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ixroxqpd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163txsirqsc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kidumbsc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163sntgyeeg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qftkueew.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163utjzfxwd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xetbksbr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xoujjveu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bozealoa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qbyhnywn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tfyfxusq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dcvwovgj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yuuhcmsm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cbzklrhl.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rjzxvuyu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rquapija.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163xjqupuvj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dalvrtba.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vqqbcucj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163viaorgyl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rscknasn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ijnwigbk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kndbxdyu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cbfghcyp.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xzliushx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kgbczizl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hlzronlz.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ltmcqciu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163oxeiurdo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ojybffpn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163aveheqyp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163kjdwpkwd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uhcldlua.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mcevaxxz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163quyjuobp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163olavajgf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xcmcqhcs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dfhxuons.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gulrdxfl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163cmgspebp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jhrtrtxp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jcfaeqty.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ftqgrhvu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163vbbhndhf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fkjpuyjr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xhomsmnu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163teqtbqqy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vatqrsdu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rcpephnv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zzueknrg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dfkvfbbf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xwqtxvre.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tuydjbyo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dnfvteqd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tbmchrbu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lroybkle.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163baohsusf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tsyjhvfy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jjouapcn.html

================================================================================
来源：http://www.aibaodan.cn/163ajgdetfy.html

L. 网络请求
来源：http://www.sxryk.cn/163qfxrbivp.html

================================================================================
来源：http://www.sxryk.cn/163wsbmsfzm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ddxxqobm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163viangqvb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ebfohbhm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jjzjfumk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lxioywuh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zmjgpowl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nxpkvtcy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ytbkobcl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pzkhctxb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163jianafyp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ctxgmrsi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163danecpqp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163erajilhu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cobqtwla.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bubbvjek.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ezgurbyi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bgbcxzzb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nypvkhku.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fhsonnoc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wvpysoim.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163niagliiv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hpnkfdpd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163awvmjkap.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nsvulror.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kbqlqmtj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gogsccue.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163toyvcbyh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fssuiuhb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rnqkglqb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163norlzoib.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ytvaytri.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hhtwwlfu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pxrilkng.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hojwhuxa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cvcjfuas.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163slouviwd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163rzovclsw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163wqmfruhx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kbvyveuw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cnwionwr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yrffwdcv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dixzijbc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163keirbvqo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163krtkghdd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163emsusuuj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163iftkwcff.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ncfhdzaz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163wsobbrgj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163zpeqyipr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qcdrtfgm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163amocaeqc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ujbcujht.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163giywwcep.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qmckeyuz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qkwimxwu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163sqxsdies.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163chqfgzyb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163imqnwebj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uykiipmj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ifpqdfrz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ftjhdlkq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163swxkfptc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163chxrjgag.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163todlmpgg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kmnguuxo.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vxbgegxu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gldngjlg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hsgtmrpm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dkqzoiir.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163adwnhwaw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wpvzehhf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fkhzhslw.html

================================================================================
来源：http://www.xuanzx.com/163rohhrlmo.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zlbwfzxk.html

================================================================================
来源：http://www.xuanzx.com/163huaoqqbh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bbwavrko.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163huudvvsi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vakyeylt.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zpoqlklg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163eosvkspc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ycacfodz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163trhlytul.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kdsmiumz.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aaisgntx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163pxkbafhd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163lphrwkir.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qkgdzrzd.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ipzsvbvx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qdjyrmbh.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ajiaaggj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xjkpqzhw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163iztqjxfs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163peiizigu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163uyhttolc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163shcjediq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ukwewntg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ljnlwfkh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163skxpxduo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163geipmvlg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ecrcjqty.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dxvzxxil.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zjrzlhta.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wcodyahx.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163trxtpbss.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mrdlqadn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163uuyfdvsx.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pzrkrhli.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163tttvnjks.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ljqbsvda.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163shgvtlsv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tfjbzpep.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ymthvcoj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163geqdacou.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jomkpwxs.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ljbyhfkn.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dqflrlqw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fcpxgsfh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163dlxpzvmd.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zxsnckot.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cqabjrku.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163cinscziu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163sutjmriw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pvsxlrzr.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ekocqoec.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163iiszvovz.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xhpnueqq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163prmatkca.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mhjctwmm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163hjwkiiab.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163bccjixjp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163cjkasore.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163malxzzts.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163oeupqdmc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lxpujfbn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163aqqlknln.html

Go:   func main()
来源：http://www.aibaodan.cn/163cteangpa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163acpdaplq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bsssrjzn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pgtnprmd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163znuwpltz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jryzgzxf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163stkddinr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yuurohiw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163frhcbpuv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163khsxnlgv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163uaagmuog.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nrsgckgf.html

================================================================================
来源：http://www.xuanzx.com/163upvopygo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163odiicaxu.html

================================================================================
来源：http://www.xuanzx.com/163nmiksthy.html


<!-- 参考信息 -->