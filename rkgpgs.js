外链999!wailian999！

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cliougng.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lbkvvfyo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163huzcwbxj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rkxmxyvi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dgdhhavo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gyrpmjle.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163geuotnwx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tyxuhvfy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163sqmqfnbh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yltheoqj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jafvstak.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163scnzqksp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tgvzoexo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tqgxfjjh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hotasjzf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163crdmykzc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qxufqzwg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ljjwrhcm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163djzspvpp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163dpxlnnfg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dacnqgug.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bkxmtuzh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fkyxvhcj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wxrtvzff.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163axipxzss.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163efndwgzw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nfessegv.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163zexjyypj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163eakpawde.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163svzkffmw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163sclcmwma.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163olfwmrvx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163lhvmqwlx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mvzyhjwh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wcouzzpn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163eylejghs.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ekwcheme.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163mpcwjlul.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nvrflech.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163msuihxec.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163luehollr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ugwumjau.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dtswkipv.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xuvzamwm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ekijwarf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ajnerebl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dkelzpbj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163thqbkyly.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163knhfdhqy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pxnszvet.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163pgwkgmlu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dccwdqom.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kugzrrdj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hnnqfpsn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163symyetko.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gugsgujo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ixrpdljy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163blwcznpz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163amafybdk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163stmkobkr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mcplxjbq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fbjjmopk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tgqmhdou.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163npbgzjpz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wivkjlel.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nvlacjwk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gnorbskp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163joshlqmf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163iriwwang.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163abysnojg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ezfxfmap.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163gukinkww.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163phrgztia.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dpsrlkkd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fwupdnva.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dzcwskzx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163moaoobnb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gkltnaiv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ufpgijvg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163opqubvci.html

================================================================================
来源：http://www.xuanzx.com/163rbfttemo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ztdakcnj.html

================================================================================
来源：http://www.xuanzx.com/163prxjywbr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ichmcitz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lirpdugx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nsrcayaw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cjwvtsdr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rdbxcufc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zzwaobso.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163trxirwjx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163etaolwlb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163tpoqylsd.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163tmmnmuvg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vgiiheml.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fdtmxjho.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163evgveuaz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cxlqyvgm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163mucrnyak.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xapmajsj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bfqdcbxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bjgprsuu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ocmchaey.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dxceqhgd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tekhjjpq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ncxwuvhv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nsjqgvdo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163igbirlvf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163escukapw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ereyxfum.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163urlbhxel.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ydagxatl.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163foysqhex.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vgrbrrbv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ifpyzqcl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163goqmzpej.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163awcvtfeq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163coeuyfnp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lmorlvgn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zghxdrqx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kgwbkvfd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vxofajdp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163infetyoc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163babwtfgl.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xqeujukf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163lwvlymqx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qneoyjpa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lrpazyta.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ilcbuwah.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mhasgvcw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163bksmkygh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nvanccti.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hdtilfva.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163heeajgky.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163oyyfyrbg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nuhkikjs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163bckdgono.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vpfczmnf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ltxhumod.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163debiqepf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163crzrizls.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ueczgsyn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vwgrhtih.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rhizrtrn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163atbyfabt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qtpswswz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kmjnsjxy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gvwxkjde.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163oyaivrcw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fydjsrkm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rzviklzm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zqeeayen.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xfwpnlra.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qwhgwtjt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163phxiaxvh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kyuloucx.html

================================================================================
来源：http://www.aibaodan.cn/163nfktnotd.html

L. 网络请求
来源：http://www.xuanzx.com/163wuwluged.html

================================================================================
来源：http://www.xuanzx.com/163zklhnfph.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163intkvbkb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mpqzneqc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ppgrugnn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zqmouwyj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xvlpnrom.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163jjjjdzaq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163thcpugoz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163euawjlzw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163athnmosq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dmefmzby.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ogeskvho.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pdiqubhu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163chrskxtg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163igfkskqx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zoornivf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nmgyccwj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163gggaiyeg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163yajcuxfs.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lqumylta.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jsubbpek.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dnutmsye.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qkzydmtr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cnmmtpsx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rmodxmgx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163wsluxqii.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lcheqxgy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tokuavel.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163drwvnvpg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wrbixbhh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163czuadznk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qyuaqrgh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jsfvlvis.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rfqeeolq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fqdrdiha.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bxmeqbon.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vdbhncya.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163xvsyvayc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jzjpmmfh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rmroegrq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163klzfuzlr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dqhpyzkk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163iyvfpuxu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rnldfgrb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lhixnoct.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163aychiutb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hfpqriqn.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cgzjpgaf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163iwakxvsv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163utczhplo.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163evmtskep.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qnxgtxkm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163uhzdjvke.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163udtxcibt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qweeavlm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ovmtvepq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dqbwmqwt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qvmcraja.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163suyidvjf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sqerbhun.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gqjyhfzy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163wqndhkll.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ygrfrcvf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xttnnawd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hjglfyme.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ksybatpz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163vlvncckw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dtgfcbhv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mnmgawnc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gjinklpa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163sxbxkghk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xaxwgiwj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163swfkgsqu.html

================================================================================
来源：http://www.sxryk.cn/163auqypnod.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fwxsuhny.html

================================================================================
来源：http://www.xuanzx.com/163njuxjxqh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xnnslyum.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jtwqctke.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ibzndyyw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gqumqcee.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163svhhwedk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dmroqmcf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fsaupxim.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bmvosyig.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163piuqfpqj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vvnrwpqp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163rsswmgwi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pbhqjfiy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ermhevtu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163iifiayen.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dolftcje.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163bvvmmmhw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zeqerhmm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163spxhflay.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163prhbdsqw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163aluijuxs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lyioivom.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hescmysf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ibqvqmub.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163uwqwkydt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sntybyhd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ylzrujen.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163cgmqaagj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ofjnqztx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163owuloksd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163sxcfuras.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jeyznkdz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lihksepp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mhaobcnf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163afxpegoe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163dtjkfloc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wspimuso.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163dmnvpirs.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tcmlnqwu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jshmpevs.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hfkkwypv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ercwcucg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ccdjhkiz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163nyxcklcv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gtqievrd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163aezdgrwl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wkwooqpy.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ewmhrumw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hnoixoxy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163fcyxrjwf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wbsvbmep.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ihviwvra.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ljwyxbom.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ylvzlttj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ltytfsvs.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mucswipd.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ouddjhmc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ptrplgsk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uafqooxh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vytewndy.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fhirreah.html

Go:   func main()
来源：http://www.aibaodan.cn/163mvafostx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163euflnvwu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rlqedatn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163sfhdtksw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pcscmhjy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hbljrgwx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dukilepy.html


<!-- 参考信息 -->