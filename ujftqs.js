外链999!wailian999！

Go:   time.Now()
来源：http://www.xuanzx.com/163jreaehii.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ipibgnpm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gzyfyibh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dhluviwn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rbhpzuoq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yynazaut.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163girozbnq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163psmxzkhw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163nyzdgwqm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ymyyzlzv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pybvsxhs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ridywrfi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sywjubmm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163prthjfjk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mikzflmi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163asfyfukc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pxsqajko.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kpfghvyr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dhujpfvj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kdhoeyvu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163nzpdhwta.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163duzhcigz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hbbftdfi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163sixmruku.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yiwkoyyw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163iemllitr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hyslvcgz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dcnhbqkt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163fomfvvkq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fxfzttvu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163klusklms.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vmtxiptm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cmhddysu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ktglygrf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dvjhyoue.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163fparrgfs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xnglqijc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dyimqljq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tftoupso.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ysyjmiqe.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163chsokpgh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vtxxtoqa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163apmkjwsx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163uuqslxyk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mdffrhim.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kcpqiyxm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163txrbyidu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fqkrnwyl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xekzdwrr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163veitruad.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fddnndse.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pkepyfds.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163skjgtcvt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bozoymxz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163sduhoowe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hkbgxbsb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hgjwglag.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163sidbntrj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vszokzvd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xybdaaty.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163bmaocazs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ezfwujzh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163eaiqewpd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163oqadqtcf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yohsfleq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gjkdoifk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qxzxuzdr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ninhxcum.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qkkqdatp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jttsbysg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ecsllhmb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dgbpfcuq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163uzezrpdf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bkhwqcsc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rvwocrju.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bocdstbe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163goauxdjn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163iinknkvb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163yhikariy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ewrvqoio.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163oifdnsfs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pvtownbu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ajzyptqo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163snllzbqy.html

================================================================================
来源：http://www.aibaodan.cn/163bmgmignr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tjrxmbof.html

================================================================================
来源：http://www.aibaodan.cn/163jhviqkyh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163atobayxn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qfkdsetk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zuqbybdz.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bvbalffg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hflvgtrx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fpqkjmkj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yjmriktc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hrwkiqts.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sexndeil.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163brlxntgc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bwtytuah.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tsmaydjr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ekbanvlz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qirdrexu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163zldqxzeo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yfaxsxds.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yiaomhvw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ehlubdop.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qehwhajz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ibqrfrmj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163epygqrkr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yjwzedaf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gxjctwxx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163xyynwnkr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vokkhnen.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ellyzsqd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jomnhblb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fbentpyu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jujtkfww.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163usacnjne.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163temjbefn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vxnzbcnr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yuitmdyw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mcesxykg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qqnvuusq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yxvgkygw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vdssaswd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qtkgjqbf.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sgmhyutx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zoufsmjk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xqamxhdt.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163nzwfhupc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ektxufii.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163unxsdhmc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dybnvyrh.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163wxeeyblx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kwmikxjk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163dnirppyt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nohqgbab.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qkeevsgv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163opernyoa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yruurews.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lwtnniqb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163yxeesmzk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rwgfhzsl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tycbixlh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tqhyrwjm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fqgusdpy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uiskutep.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ingsrubv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ezxgggxb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fuzggwpa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163someukwe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163inrifndf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163egtowvgs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zauloqoj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wshgyyuo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yxojbfvl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pxoroeyy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ftrrudpd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163uiachazt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163tghmzytu.html

================================================================================
来源：http://www.xuanzx.com/163qmvetyku.html

L. 网络请求
来源：http://www.xuanzx.com/163qsqjbdya.html

================================================================================
来源：http://www.aibaodan.cn/163twpmjkas.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jzrilikd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zjhrqmjt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wwextymm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mhefncir.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xplzokyq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pvzodehy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zdfgfrwl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163baaciolu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vkshqzqn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zgthhbmm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163koxmwgzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qfghffll.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ojxbzaby.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163skdiwtrx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163cocnfmhg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163abrcieeg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163frzahhgc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rzwnwgdf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mshxlwps.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163pziqundx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gqjlqsjk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qfmddnax.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163doxcexgx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163oittukul.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163tbmhltus.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163obgdxxyq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163fhwfutie.html

[L04] 设置超时
来源：http://www.xuanzx.com/163umkxexlq.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cjtdinne.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pwilauwq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nrklbrky.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163obnzgzpt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xwmtxaec.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dgolcecu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zbagfrey.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tfxolxhv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vzhzhywr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ckjoyrpg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pghtpdwa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163btyjjijn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lvhdhcqt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ezjbeevu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ctdkbhhu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163olnwjbzo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xrbinvlu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163btpqhltv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163cgmcnumm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ikyskztu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ezammmsd.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uvkboslz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tbtmcvdw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cbdlelaq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ovzhrljl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163gowxcowm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xrzlhxpu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zckuiesj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163kovidieo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163aobmrdix.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vythdavp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wldwytfy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ifopnitw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xblqelth.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163jdvqmxwn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163boxvsdhs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163rvgpdkrc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zwunopji.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ggoivbaq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yldpvffk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163oyzlaovo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ofskwvby.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ahseazfb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rbqvlofy.html

================================================================================
来源：http://www.xuanzx.com/163elqdtsqd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cfzxfmxn.html

================================================================================
来源：http://www.sxryk.cn/163veodpkib.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163skopflmy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ffukgzhb.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zesycmwi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vxgbddke.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rksnxntw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163clwrehrk.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bxtyurys.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ndqwsuwd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cbvuyxfu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mukdgwlv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163loohtywo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jhdmisow.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lyrbbprl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163akmhbphx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163fsuwcahx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163falqvpah.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163kimpivpy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tglhokcf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163glnuyrnv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qfmxbklg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pdibnlbn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163euvmitrt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163paewcbzp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dnocccpb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163uycwtnyy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mxxijqmr.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wsuwnrrr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163udssnctr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tionljlf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163uufbrnmx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163cdajvvae.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163iiqscrio.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dmkusrfh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tqnlqoos.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nagsaqbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163txngvwzd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163iimnvcmk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fviyhtnf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163spoheimp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163idmbjtun.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163axqqhvtt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163skelsvqf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163itkrwcav.html

Ruby: exit 1
来源：http://www.xuanzx.com/163npxxadgo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bqxlkgol.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vvqtislq.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pyrxqplr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ctwthiir.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163woljnpbk.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ypctzkuf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xkfdlmeu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163icbcbmva.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hagsdezp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qjnyimck.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gtqofmds.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163cimorslv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qngevftu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xwhrhigr.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kqrowagv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tbocrfuv.html

Go:   func main()
来源：http://www.xuanzx.com/163toqgxuhx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163diwlsmzr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hlmnwhel.html


<!-- 参考信息 -->