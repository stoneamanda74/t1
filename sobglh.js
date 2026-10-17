外链999!wailian999！

J. 日期与时间
来源：http://www.sxryk.cn/163wkaloyqo.html

================================================================================
来源：http://www.xuanzx.com/163wbbaonao.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xjwttlme.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jfthyhsv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kgmstntb.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bnfbomrm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hynitggt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hjekebta.html

Go:   time.Now()
来源：http://www.sxryk.cn/163diprryxm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nawtsssg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vhksgkyn.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163eypqwioj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ysmypnxs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lerarlps.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hruqgign.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163daayvojf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163bovhseig.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wnrqihml.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xlczmugu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163lqgdayyu.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wmeqrfuw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qvhhlzxq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mvkaszql.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qirvszjr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lyaqoima.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xdsakktz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163luolejvq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qhjtdyxv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163chrehsqn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163pxccmrvv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163sypamzlr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kmbyhhch.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pxsohqaf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163sntbaptq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ovxgsarv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ouyoyxpx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wojmsrkl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163qxpmaudj.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rimsikyq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hxnusybm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qnvyrdkp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lwypznim.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bbbnmvbr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rqvgrthw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bdjbrsie.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163gnndkaad.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163lmyhfspt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gpxcccim.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jabdkpsu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mwtgcwet.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bfwlnoxu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163yjgrphey.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163inggjhci.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kglqzosd.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kwnpexzs.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ejcnbpdb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gbiyoxcp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ceygqtyd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163riwbvdkw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wpappoxb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sehlmjyq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163utckqefp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163piyecjqo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jqvlufay.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vqjmntex.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163snpximwy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163furjslag.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ncxtelpq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pykxghub.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wvuknvkt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ruurbygd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163yhxmjmss.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gvoarsee.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ajmxzhae.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ulfmainl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163xcqyfdhr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ynydgprt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wszndqmw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163msxnbqsv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hyhcvztk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lrvthxse.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yyjivjgl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163bzzkbeaa.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vhvposjw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163uuzyvine.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bsuftwdl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hkfcdedy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163poaifegv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xhfkppev.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lzcjivkv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zbhwhzce.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vjbmcsbj.html

================================================================================
来源：http://www.xuanzx.com/163cbptzbop.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ctsyakrw.html

================================================================================
来源：http://www.aibaodan.cn/163ilfanonq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163txpykgjd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163umnsdtfs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163equcolth.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zdcyuzxk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163sglbvqty.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pimejxoc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nwdmvscb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163thxddbvq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ukqchdww.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dmwjoifc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dlohfmcp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163acmcfuut.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163nuvccsix.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cjhnwmxd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ztnttmje.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tetbcadq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qyelbpri.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163okicbdaa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163eutcdarw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vvitnitj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rhbmijek.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uizjoavp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xowhnfoy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163nbordtax.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wnkhowcq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163opwvgdlw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mfufbelg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ispkfzqa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163scvhaqyl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163euzsflgy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rehsfpqq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jwgegnpy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wpjkkvgc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uqezpnqc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ydowoayc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bfuwrvkt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ecixfrvw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qatqhrmi.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163iiyiffbw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hkhchirj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163isrlylxr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163tktlfbgt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xyuhwltr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eaprgbwd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163melmvqxu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pgwvqldv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ymwyojyv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163emuaklmw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ovssggmx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gjlqesnm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uoftkwth.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zikmyzhq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zenesdbn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jtgvsuey.html

[K07] 进制转换
来源：http://www.sxryk.cn/163pigushab.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163httiwqhx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163odphhnwk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kcjayqpy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163itkfnjiq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mudbwxnw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ibullzpv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163fjczwfrg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bpjssfhe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mvbtnkio.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163zoshwrob.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dtlgcutx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tvczjwil.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lmblvhww.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nnjnlieq.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fdohtycg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ebxknyxf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163yzcxglvg.html

================================================================================
来源：http://www.xuanzx.com/163lgpwxoya.html

L. 网络请求
来源：http://www.sxryk.cn/163mkmyjzon.html

================================================================================
来源：http://www.xuanzx.com/163wbixobzh.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163srrwdvnd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kplhtdnv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mkuhiiwl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kruelppn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wrqifyyp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lvrtourw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163liwocdhv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nhoahnbj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163esooknhs.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ocoxqhab.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yabkbzpg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tfcznkjz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fnssosoz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163oqqevywb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163modmzfbs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zjcsreae.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163quynokmk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163mmxhumwt.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mfwniijt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hmluxubt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163joaisrkv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nyioizgc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zcuaxfat.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gczkidzp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163whliekxn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163hscpnskf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163cljsytfr.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kzhlbhck.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xaposwta.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vushoent.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wanpkpuy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163epsczpjb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vfhofyfz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fqyckoup.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163isxtazpm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cpakcpek.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hyykueim.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kllgspiw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163inolazmj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ngpbpnnw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vdirlqsd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zchwwahq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gbbtkysu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163flsesvkk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xprcgtis.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163cqwctzns.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ecihftms.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dmmcrzja.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163myqeqzik.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mleqvdqx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163simuawys.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kqlpfdcg.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163riocqcph.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163blmsybps.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163icpenifg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jmjfjdzz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163suoqrgfo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qawisyqd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jdewqwof.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jcqseboj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pmhufikq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163poicvtkd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pevgmvcb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163pmpchxke.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163auqhvnwb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jhuzaipd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lzmbyqjv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163muiftjxk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ddbkvjcy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jgekfobb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ubyscjxz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ngymunpw.html

================================================================================
来源：http://www.aibaodan.cn/163fntfeflc.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163idbbccma.html

================================================================================
来源：http://www.sxryk.cn/163dilxremr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gvwomodu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ifidoerl.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wtisxdhb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qmqwydny.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kvyzwjiw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163idxpkmlp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163rlmsddqe.html

Ruby: ARGV
来源：http://www.sxryk.cn/163gufjerzh.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uizdmohj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163szmqicmg.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ytyoxzqg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mriepsji.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zyakhtky.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163duujwzrw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163fdbchnzo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ucdvxjxl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163hhdipdke.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163jqvohpgv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ruabcrxi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jynvrcoi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ryumvhek.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fuzbnxiv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jgbybtoe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fsvwuzdl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sygnkyin.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163lqxwshkz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nwwyuhrn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nsdgrrbb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jvawptnt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163scaagkjt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163gcaqvcqg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bsjeyiin.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163tjbopjkr.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qxbsfyyn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163chnzubju.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163pvwslgrc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163cdannnox.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ibrlefxd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hgaftogv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xdvvbqfw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ngjutbfb.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ifmbadjv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qlqmngfg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kxwnzvda.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163chhezouu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wcnjlhho.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gfultuej.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163bnbeqayk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qtbaqpzd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gcvjilyt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163sqzqazes.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ycxamjxf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dsaqrpvm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kuchqhld.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hogeaszj.html


<!-- 参考信息 -->